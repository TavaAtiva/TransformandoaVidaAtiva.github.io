function toggleInstructions(id) {
    const exercise = document.getElementById(id).closest('.exercise');
    exercise.classList.toggle('open');
}

