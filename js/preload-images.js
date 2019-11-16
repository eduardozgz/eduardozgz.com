(async () => {
    const elements = document.querySelectorAll(".preload-img");

    if (elements) {
        elements.forEach(element => {
            const url = window
                .getComputedStyle(element)
                .getPropertyValue("background-image")
                .slice(5, -2);
            
            (new Image()).src = url;
        });
    }
})();
