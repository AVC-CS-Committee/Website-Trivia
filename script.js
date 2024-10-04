// This gets all the answer buttons
const answerButtons = document.querySelectorAll('.answer-button');

// event listener
answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        answerButtons.forEach(btn => {
            btn.classList.remove('selected');
            btn.setAttribute('data-selected', 'false'); // Reset data attribute
        });

        button.classList.add('selected');
        button.setAttribute('data-selected', 'true'); // Update data attribute
    });
});
