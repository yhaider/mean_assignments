function $Dojo(id) {
    this.myId = document.getElementById(id);
    // The above gets the element by ID so it
    // does not need to be typed out every time

    this.click = function (callback) {
        this.myId.addEventListener("click", callback);
    };
    // This creates automatic functionality for clicking
    // wherever the ID is

    this.hover = function (hoverin, hoverout) {
        this.myId.addEventListener("mouseover", hoverin);
        this.myId.addEventListener("mouseout", hoverout);
    };
    // This creates automatic functionality for hovering
    // wherever the ID is

    return this;
}
