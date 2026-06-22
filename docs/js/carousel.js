/* Peekom landing — hero carousel */
(function () {
    var CAROUSEL_INTERVAL = 7000;
    var carouselIndex = 0;
    var carouselTimer = null;

    function goToSlide(index) {
        var track = document.getElementById("carouselTrack");
        var dots = document.querySelectorAll(".hero-carousel__dot");
        var total = dots.length;
        if (!track || !total) return;

        carouselIndex = ((index % total) + total) % total;
        track.style.transform = "translateX(-" + (carouselIndex * 100) + "%)";

        dots.forEach(function (dot, i) {
            dot.classList.toggle("is-active", i === carouselIndex);
        });
    }

    function nextSlide() {
        goToSlide(carouselIndex + 1);
    }

    function prevSlide() {
        goToSlide(carouselIndex - 1);
    }

    function startCarouselAutoplay() {
        stopCarouselAutoplay();
        carouselTimer = setInterval(nextSlide, CAROUSEL_INTERVAL);
    }

    function stopCarouselAutoplay() {
        if (carouselTimer) {
            clearInterval(carouselTimer);
            carouselTimer = null;
        }
    }

    function initCarousel() {
        var carouselEl = document.getElementById("heroCarousel");
        if (!carouselEl) return;

        var prevBtn = document.getElementById("carouselPrev");
        var nextBtn = document.getElementById("carouselNext");

        if (prevBtn) {
            prevBtn.addEventListener("click", function () {
                prevSlide();
                startCarouselAutoplay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", function () {
                nextSlide();
                startCarouselAutoplay();
            });
        }

        document.querySelectorAll(".hero-carousel__dot").forEach(function (dot) {
            dot.addEventListener("click", function () {
                goToSlide(parseInt(dot.getAttribute("data-index"), 10));
                startCarouselAutoplay();
            });
        });

        carouselEl.addEventListener("mouseenter", stopCarouselAutoplay);
        carouselEl.addEventListener("mouseleave", startCarouselAutoplay);

        goToSlide(0);
        startCarouselAutoplay();
    }

    window.PeekomCarousel = { init: initCarousel };
})();
