function toggleInstructions(id) {
    const instructions = document.getElementById(id);
    if (instructions.style.display === "none" || instructions.style.display === "") {
        instructions.style.display = "block";
    } else {
        instructions.style.display = "none";
    }
}