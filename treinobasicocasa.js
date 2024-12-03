function toggleInstructions(id) {
    const instructions = document.getElementById(id);
    const allInstructions = document.querySelectorAll('.instructions');
    const exercise = instructions.closest('.exercise'); // O quadrado que contém o exercício

    // Fechar todas as outras listas antes de abrir a selecionada
    allInstructions.forEach(instruction => {
        instruction.style.display = 'none';
        instruction.closest('.exercise').classList.remove('active');
    });

    // Alternar a visibilidade da lista selecionada
    if (instructions.style.display === 'block') {
        instructions.style.display = 'none';
        exercise.classList.remove('active');
    } else {
        instructions.style.display = 'block';
        exercise.classList.add('active');
    }
}
