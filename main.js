document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["BTech 2nd year Student", "Interested in Web Development"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-line span");

    progressBars.forEach((bar) => {
        // Get the width percentage from the CSS width (e.g., 80%, 90%)
        const targetWidth = bar.parentElement.classList.contains("html") ? "75%" :
                            bar.parentElement.classList.contains("css") ? "80%" :
                            bar.parentElement.classList.contains("javaScript") ? "70%" :
                            bar.parentElement.classList.contains("python") ? "80%" :
                            bar.parentElement.classList.contains("java") ? "90%" : "0%";

        // Set a small delay for a smooth animation
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
});

