// Array of questions and answers
const questions = [
    {
        question: "Question 1?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0 // Index of the correct answer
    },
    {
        question: "Question 2?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    },
    {
        question: "Question 3?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    },
    {
        question: "Question 4?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    },
    {
        question: "Question 5?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    },
    {
        question: "Question 6?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    },
    {
        question: "Question 7?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    },
    {
        question: "Question 8?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    },
    {
        question: "Question 9?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    },
    {
        question: "Question 10?",
        answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0
    }
];


let currentQuestionIndex = 0;

// Function to display a question
function displayQuestion() {
    const questionTitle = document.querySelector('.question-title');
    const answersGrid = document.querySelector('.answers-grid');
    const nextButton = document.querySelector('.next-button');

    // Clear previous answers
    answersGrid.innerHTML = '';

    // Get current question
    const currentQuestion = questions[currentQuestionIndex];

    // Set question title
    questionTitle.textContent = currentQuestion.question;

    // Display answers
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`; // A, B, C, D
        button.addEventListener('click', () => selectAnswer(index));
        answersGrid.appendChild(button);
    });

    // Show next button if not on the last question
    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? 'block' : 'none';
}

// Function to handle answer selection
function selectAnswer(selectedIndex) {
    const answersGrid = document.querySelector('.answers-grid');
    const buttons = answersGrid.querySelectorAll('.answer-button');

    buttons.forEach((button, index) => {
        button.classList.remove('selected'); // Remove any previous selection
        if (index === selectedIndex) {
            button.classList.add('selected'); // Highlight selected button
        }
    });
}

// Function to handle next button click
document.querySelector('.next-button').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(); // Show next question
    } else {
        // End of quiz logic can go here, like showing a score
        alert("Quiz finished!");
    }
});

// Initial display
displayQuestion();
