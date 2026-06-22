/* Peekom landing — Light / Dark / Auto theme */
(function () {
    var STORAGE_KEY = "peekom-theme";
    var currentMode = "auto";

    function getStoredMode() {
        try {
            var v = localStorage.getItem(STORAGE_KEY);
            if (v === "light" || v === "dark" || v === "auto") return v;
        } catch (e) { /* ignore */ }
        return "auto";
    }

    function getSystemTheme() {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
            return "light";
        }
        return "dark";
    }

    function resolveTheme(mode) {
        if (mode === "light" || mode === "dark") return mode;
        return getSystemTheme();
    }

    function applyTheme(mode) {
        currentMode = mode;
        var resolved = resolveTheme(mode);
        document.documentElement.setAttribute("data-theme-mode", mode);
        document.documentElement.setAttribute("data-theme", resolved);
        document.querySelectorAll(".theme-switch__btn").forEach(function (btn) {
            var active = btn.getAttribute("data-theme-value") === mode;
            btn.classList.toggle("is-active", active);
            btn.setAttribute("aria-pressed", active ? "true" : "false");
        });
    }

    function setTheme(mode) {
        if (mode !== "light" && mode !== "dark" && mode !== "auto") return;
        try {
            localStorage.setItem(STORAGE_KEY, mode);
        } catch (e) { /* ignore */ }
        applyTheme(mode);
    }

    function initTheme() {
        applyTheme(getStoredMode());
        if (window.matchMedia) {
            window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
                if (getStoredMode() === "auto") applyTheme("auto");
            });
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
                if (getStoredMode() === "auto") applyTheme("auto");
            });
        }
        document.querySelectorAll(".theme-switch__btn").forEach(function (btn) {
            if (btn.dataset.themeBound) return;
            btn.dataset.themeBound = "1";
            btn.addEventListener("click", function () {
                setTheme(btn.getAttribute("data-theme-value"));
            });
        });
    }

    window.PeekomTheme = {
        init: initTheme,
        setTheme: setTheme,
        getMode: function () { return currentMode; }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initTheme);
    } else {
        initTheme();
    }
})();
