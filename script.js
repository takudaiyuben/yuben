document.addEventListener("DOMContentLoaded", function() {
    const contents = document.querySelectorAll(".content");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        contents.forEach(content => {
            const contentTop = content.getBoundingClientRect().top;
            if (contentTop < triggerBottom) {
                content.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
