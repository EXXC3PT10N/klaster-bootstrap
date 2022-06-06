module.exports = function () {
    const media = window.matchMedia('(max-width: 1023px)')
    const toggles = document.querySelectorAll(".features__title");
    if (media.matches) {
        // Set toggle actions
        function toggleAccord(e) {
            e.preventDefault();

            // Deactivate all toggles
            if (this.classList.contains("active")) {
                this.classList.remove("active");
            } else {
                for (i = 0; i < toggles.length; i++) {
                    toggles[i].classList.remove("active");
                }
                this.classList.add("active");
            }
        }
        // Apply event listeners
        for (i = 0; i < toggles.length; i++) {
            toggles[i].addEventListener("click", toggleAccord);
        }
    }
};
