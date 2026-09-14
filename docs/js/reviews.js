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
        {
            rating: 5,
            text: "사이드바에 메모를 접어두었다 열어볼수 있다는게 좋네요.",
            name: "덜줄룩스"
        },
        {
            rating: 5,
            text: "간결하고, 정리하기 좋고, 어떤 메모가 있는지 한눈에 볼수 있어서 좋습니다.",
            name: "나무언니"
        },
        {
            rating: 4,
            text: 'хареса ми. хубаво ще е да може да се "лепят" и втори ред забележки.',
            name: "익명"
        },
        {
            rating: 5,
            text: "메모장을 여러개 켜지 않아도 원하는 항목을 바로 확인할수 있어 좋았습니다",
            name: "익명"
        },
        {
            rating: 5,
            text: "항목별로 여러 메모를 정리해놓느라 켜는데 오래 걸렸는데 켜는시간, 확인하려고 찾는 시간이 다 줄여져서 좋았습니다! 다만, 완료된 업무에 대한 메모는 삭제할수밖에 없어서 메모 내용을 보관하는 기능이 있었으면 좋겠어요!",
            name: "익명"
        },
        {
            rating: 5,
            text: "메모할 게 많은 업무인데 간단하게 볼 수 있어서 좋아요!",
            name: "익명"
        },
        {
            rating: 5,
            text: "업무 볼 때 시간이 확~ 줄어듭니다.",
            name: "익명"
        }
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
