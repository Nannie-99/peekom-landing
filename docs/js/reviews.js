/* Peekom landing — hero user reviews (manual list, fade rotation + list modal) */
(function () {
    "use strict";

    var REVIEW_INTERVAL = 5000;
    var FADE_MS = 450;

    /**
     * 수동으로 골라 넣을 후기 목록.
     * 필드: date(YYYY-MM-DD), rating(1–5), text, name(비우면 익명)
     * 후기 본문은 언어별로 번역하지 않습니다.
     */
    var REVIEWS = [
        {
            date: "2026-07-02",
            rating: 5,
            text: "사이드바에 메모를 접어두었다 열어볼수 있다는게 좋네요. 업무상 메모를 자주 하는 사람이라면 한번쯤은 추천해볼만 한것 같아요.",
            name: "덜줄룩스"
        },
        {
            date: "2026-07-03",
            rating: 4,
            text: 'хареса ми. хубаво ще е да може да се "лепят" и втори ред забележки.',
            name: ""
        },
        {
            date: "2026-07-22",
            rating: 5,
            text: "메모창 여러개 안띄워도 돼서 좋아요. 간결하고, 정리하기 좋고, 어떤메모가 있는지 한눈에 볼수 있어서 좋습니다.",
            name: "나무언니"
        },
        {
            date: "2026-08-21",
            rating: 5,
            text: "윈도우 기본 제공 스티커 메모보다 백만배 더 편해요 올해 들어 제일 잘한 일: 빼곰 유료 다운로드 하기. 업무 질 수직 상승",
            name: "솜사탕"
        },
        {
            date: "2026-08-27",
            rating: 5,
            text: "메모장을 여러개 켜지 않아도 원하는 항목을 바로 확인할수 있어 좋았습니다! 항목별로 여러 메모를 정리해놓느라 켜는데 오래 걸렸는데 켜는시간, 확인하려고 찾는 시간이 다 줄여져서 좋았습니다! 다만, 완료된 업무에 대한 메모는 삭제할수밖에 없어서 메모 내용을 보관하는 기능이 있었으면 좋겠어요!",
            name: "익명"
        },
        {
            date: "2026-08-31",
            rating: 5,
            text: "메모할 게 많은 업무인데 간단하게 볼 수 있어서 좋아요! 업무 볼 때 시간이 확~ 줄어듭니다.",
            name: "익명"
        }
    ];

    var reviewIndex = 0;
    var reviewTimer = null;
    var reviewLabels = null;
    var listOpen = false;

    function escapeHtml(str) {
        return String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function displayName(review) {
        var raw = (review.name || "").trim();
        if (!raw || raw === "익명") {
            return escapeHtml(reviewLabels.reviewAnonymous);
        }
        return escapeHtml(raw);
    }

    function renderStars(rating) {
        var n = Math.max(0, Math.min(5, parseInt(rating, 10) || 0));
        var html = "";
        var i;
        for (i = 1; i <= 5; i++) {
            html +=
                '<span class="hero-reviews__star' +
                (i <= n ? " is-filled" : "") +
                '" aria-hidden="true">★</span>';
        }
        return html;
    }

    function formatDate(dateStr) {
        if (!dateStr) return "";
        return escapeHtml(String(dateStr));
    }

    function renderReview(review) {
        return (
            '<div class="hero-reviews__item">' +
            '<div class="hero-reviews__stars" aria-label="' +
            escapeHtml(review.rating) +
            ' / 5">' +
            renderStars(review.rating) +
            "</div>" +
            '<p class="hero-reviews__text">"' +
            escapeHtml(review.text) +
            '"</p>' +
            '<span class="hero-reviews__author">— ' +
            displayName(review) +
            "</span>" +
            "</div>"
        );
    }

    function renderEmpty() {
        return (
            '<p class="hero-reviews__empty">' +
            '<span class="hero-reviews__empty-icon" aria-hidden="true">💬</span>' +
            "<span>" +
            escapeHtml(reviewLabels.reviewEmpty) +
            "</span>" +
            "</p>"
        );
    }

    /** 댓글창 형태: 날짜 → 별점 → 의견 → 닉네임 */
    function renderListItem(review) {
        return (
            '<article class="reviews-list__item">' +
            '<div class="reviews-list__meta">' +
            '<time class="reviews-list__date" datetime="' +
            formatDate(review.date) +
            '">' +
            formatDate(review.date) +
            "</time>" +
            '<div class="reviews-list__stars" aria-label="' +
            escapeHtml(review.rating) +
            ' / 5">' +
            renderStars(review.rating) +
            "</div>" +
            "</div>" +
            '<p class="reviews-list__text">' +
            escapeHtml(review.text) +
            "</p>" +
            '<span class="reviews-list__name">' +
            displayName(review) +
            "</span>" +
            "</article>"
        );
    }

    function renderList() {
        if (!REVIEWS.length) {
            return (
                '<p class="reviews-list__empty">' +
                escapeHtml(reviewLabels.reviewEmpty) +
                "</p>"
            );
        }
        var sorted = REVIEWS.slice().sort(function (a, b) {
            return String(b.date || "").localeCompare(String(a.date || ""));
        });
        return sorted.map(renderListItem).join("");
    }

    function setReviewHtml(html) {
        var el = document.getElementById("reviewContent");
        if (el) el.innerHTML = html;
    }

    function showReviewAt(index) {
        var el = document.getElementById("reviewContent");
        if (!el || !reviewLabels) return;

        if (!REVIEWS.length) {
            setReviewHtml(renderEmpty());
            return;
        }

        el.classList.add("is-fading");
        window.setTimeout(function () {
            var review =
                REVIEWS[((index % REVIEWS.length) + REVIEWS.length) % REVIEWS.length];
            setReviewHtml(renderReview(review));
            el.classList.remove("is-fading");
        }, FADE_MS);
    }

    function stopReviewRotation() {
        if (reviewTimer) {
            clearInterval(reviewTimer);
            reviewTimer = null;
        }
    }

    function startReviewRotation() {
        stopReviewRotation();
        if (listOpen || REVIEWS.length <= 1) return;
        reviewTimer = window.setInterval(function () {
            reviewIndex = (reviewIndex + 1) % REVIEWS.length;
            showReviewAt(reviewIndex);
        }, REVIEW_INTERVAL);
    }

    function openList() {
        var overlay = document.getElementById("reviewsOverlay");
        var body = document.getElementById("reviewsListBody");
        var title = document.getElementById("reviewsListTitle");
        if (!overlay || !body) return;

        if (title && reviewLabels.reviewListTitle) {
            title.textContent = reviewLabels.reviewListTitle;
        }
        body.innerHTML = renderList();
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        listOpen = true;
        stopReviewRotation();

        var closeBtn = document.getElementById("reviewsListClose");
        if (closeBtn) closeBtn.focus();
    }

    function closeList() {
        var overlay = document.getElementById("reviewsOverlay");
        if (!overlay) return;
        overlay.classList.remove("active");
        overlay.setAttribute("aria-hidden", "true");
        listOpen = false;
        startReviewRotation();
    }

    function bindBoxClick() {
        var box = document.getElementById("reviewBox");
        if (!box || box.dataset.reviewsBound === "1") return;
        box.dataset.reviewsBound = "1";
        box.setAttribute("role", "button");
        box.setAttribute("tabindex", "0");
        if (reviewLabels.reviewListHint) {
            box.setAttribute("title", reviewLabels.reviewListHint);
            box.setAttribute("aria-label", reviewLabels.reviewListHint);
        }

        box.addEventListener("click", function (e) {
            e.preventDefault();
            openList();
        });
        box.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openList();
            }
        });
    }

    function bindOverlay() {
        var overlay = document.getElementById("reviewsOverlay");
        var closeBtn = document.getElementById("reviewsListClose");
        if (!overlay || overlay.dataset.reviewsBound === "1") return;
        overlay.dataset.reviewsBound = "1";

        if (closeBtn) {
            closeBtn.addEventListener("click", function (e) {
                e.preventDefault();
                closeList();
            });
        }
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) closeList();
        });
    }

    function init(labels) {
        var box = document.getElementById("reviewBox");
        if (!box) return;

        reviewLabels = labels || {
            reviewEmpty: "Be the first to share your experience!",
            reviewAnonymous: "Anonymous",
            reviewListTitle: "Reviews",
            reviewListHint: "View all reviews"
        };

        reviewIndex = 0;
        stopReviewRotation();
        bindBoxClick();
        bindOverlay();

        if (!REVIEWS.length) {
            setReviewHtml(renderEmpty());
            return;
        }

        setReviewHtml(renderReview(REVIEWS[0]));
        startReviewRotation();
    }

    function refresh(labels) {
        if (labels) reviewLabels = Object.assign({}, reviewLabels || {}, labels);
        var box = document.getElementById("reviewBox");
        if (box && reviewLabels.reviewListHint) {
            box.setAttribute("title", reviewLabels.reviewListHint);
            box.setAttribute("aria-label", reviewLabels.reviewListHint);
        }
        var title = document.getElementById("reviewsListTitle");
        if (title && reviewLabels.reviewListTitle) {
            title.textContent = reviewLabels.reviewListTitle;
        }
        if (listOpen) {
            var body = document.getElementById("reviewsListBody");
            if (body) body.innerHTML = renderList();
        }
        reviewIndex = 0;
        stopReviewRotation();
        if (!REVIEWS.length) {
            setReviewHtml(renderEmpty());
            return;
        }
        setReviewHtml(renderReview(REVIEWS[0]));
        startReviewRotation();
    }

    window.PeekomReviews = {
        init: init,
        refresh: refresh,
        openList: openList,
        closeList: closeList,
        REVIEWS: REVIEWS
    };
})();
