/* Peekom landing — hero user reviews (manual list, fade rotation) */
(function () {
    "use strict";

    var REVIEW_INTERVAL = 5000;
    var FADE_MS = 450;

    /**
     * 수동으로 골라 넣을 후기 목록.
     * 예시:
     * { rating: 5, text: "So handy for quick notes!", name: "Alex" }
     * name 을 비우면 익명(Anonymous)으로 표시됩니다.
     */
    var REVIEWS = [
        // { rating: 5, text: "Love the edge handle — opens instantly!", name: "Jamie" },
    ];

    var reviewIndex = 0;
    var reviewTimer = null;
    var reviewLabels = null;

    function escapeHtml(str) {
        return String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function renderStars(rating) {
        var n = Math.max(0, Math.min(5, parseInt(rating, 10) || 0));
        var html = "";
        var i;
        for (i = 1; i <= 5; i++) {
            html += '<span class="hero-reviews__star' + (i <= n ? " is-filled" : "") + '" aria-hidden="true">★</span>';
        }
        return html;
    }

    function renderReview(review) {
        var name = review.name ? escapeHtml(review.name) : escapeHtml(reviewLabels.reviewAnonymous);
        return (
            '<div class="hero-reviews__item">' +
                '<div class="hero-reviews__stars" aria-label="' + escapeHtml(review.rating) + ' / 5">' +
                    renderStars(review.rating) +
                "</div>" +
                '<p class="hero-reviews__text">"' + escapeHtml(review.text) + '"</p>' +
                '<span class="hero-reviews__author">— ' + name + "</span>" +
            "</div>"
        );
    }

    function renderEmpty() {
        return (
            '<p class="hero-reviews__empty">' +
                '<span class="hero-reviews__empty-icon" aria-hidden="true">💬</span>' +
                "<span>" + escapeHtml(reviewLabels.reviewEmpty) + "</span>" +
            "</p>"
        );
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
            var review = REVIEWS[((index % REVIEWS.length) + REVIEWS.length) % REVIEWS.length];
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
        if (REVIEWS.length <= 1) return;
        reviewTimer = window.setInterval(function () {
            reviewIndex = (reviewIndex + 1) % REVIEWS.length;
            showReviewAt(reviewIndex);
        }, REVIEW_INTERVAL);
    }

    function init(labels) {
        var box = document.getElementById("reviewBox");
        if (!box) return;

        reviewLabels = labels || {
            reviewEmpty: "Be the first to share your experience!",
            reviewAnonymous: "Anonymous"
        };

        reviewIndex = 0;
        stopReviewRotation();

        if (!REVIEWS.length) {
            setReviewHtml(renderEmpty());
            return;
        }

        setReviewHtml(renderReview(REVIEWS[0]));
        startReviewRotation();
    }

    function refresh(labels) {
        if (labels) reviewLabels = labels;
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
        REVIEWS: REVIEWS
    };
})();
