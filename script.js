function changeColor() {
    const title = document.getElementById("title");
    // Toggle between red and blue colors
    if (title.style.color === "red") {
        title.style.color = "blue";
    } else {
        title.style.color = "red";
    }
}