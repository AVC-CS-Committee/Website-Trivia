// Array of questions and answers
const questions = [
    {
        question: "Question 1: What was the original purpose of wearing costumes on Halloween?",
        answers: ["To celebrate the harvest", "To scare away ghosts", "To attract good fortune", "To honor deceased loved ones"],
        correct: 1 // Index of the correct answer
    },
    {
        question: "Question 2: Which country is believed to be the birthplace of Halloween?",
        answers: ["United States", "Mexico", "Ireland", "Germany"],
        correct: 2
    },
    {
        question: "Question 3: Which popular Halloween candy was originally called \"Chicken Feed\"?",
        answers: ["Skittles", "Candy Corn", "M&Ms", "Twizzlers"],
        correct: 1
    },
    {
        question: "Question 4: What vegetable was originally used to make Jack-o'-lanterns before pumpkins?",
        answers: ["Potatoes", "Carrots", "Turnips", "Squash"],
        correct: 2
    },
    {
        question: "Question 5: What does the name \"Dracula\" mean in Romanian?",
        answers: ["Son of the Dragon", "Night Stalker", "Blood Seeker", "Dark Prince"],
        correct: 0
    },
    {
        question: "Question 6: Which phobia refers to the fear of Halloween?",
        answers: ["Samhainophobia", "Nyctophobia", "Coulrophobia", "Necrophobia"],
        correct: 0
    },
    {
        question: "Question 7: What is the most popular Halloween costume for children in the United States?",
        answers: ["Superhero", "Witch", "Vampire", "Princess"],
        correct: 3
    },
    {
        question: "Question 8: What is the name of the legendary monster said to be created from parts of dead bodies and brought to life by a mad scientist?",
        answers: ["The Werewolf", "The Mummy", "Frankenstein's Monster", "The Headless Horseman"],
        correct: 2
    },
    {
        question: "Question 9: What is the significance of the colors orange and black during Halloween? They represent:",
        answers: ["life and death", "the colors of witches", "fire and ice", "Autumn and night"],
        correct: 3
    },
    {
        question: "Question 10: What club will you vote for the best car award?",
        answers: ["STEM Club", "Other Clubs", "Other Clubs", "Other Clubs"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let selectedAnswerIndex = null; // Keep track of the selected answer
let score = 0; // Track the number of correct answers
let wrongQuestions = []; // Array to store the questions the user got wrong

// Function to display a question
function displayQuestion() {
    const questionTitle = document.querySelector('.question-title');
    const answersGrid = document.querySelector('.answers-grid');
    const nextButton = document.querySelector('.next-button');
    const finishButton = document.querySelector('.finish-button');

    // Clear previous answers
    answersGrid.innerHTML = '';
    selectedAnswerIndex = null; // Reset selected answer

    // Disable the next button initially
    nextButton.disabled = true;

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
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.style.display = 'block';
        finishButton.style.display = 'none'; // Hide the finish button
    } else {
        nextButton.style.display = 'none'; // Hide the next button
        finishButton.style.display = 'block'; // Show the finish button
    }
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

    // Set selected answer and enable the next button
    selectedAnswerIndex = selectedIndex;
    document.querySelector('.next-button').disabled = false;
}

// Function to handle next button click
document.querySelector('.next-button').addEventListener('click', () => {
    checkAnswer(); // Check if the selected answer is correct
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(); // Show next question
    }
});

// Function to check the selected answer and update the score
function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswerIndex === currentQuestion.correct) {
        score++; // Increment score if correct
    } else {
        // If wrong, store the question index and selected answer
        wrongQuestions.push({
            questionIndex: currentQuestionIndex,
            incorrectAnswer: selectedAnswerIndex
        });
        console.log(`Missed Question: ${currentQuestionIndex}, Incorrect Answer: ${selectedAnswerIndex}`);
    }
}

// Function to handle finish button click and redirect
document.querySelector('.finish-button').addEventListener('click', () => {
    checkAnswer(); // Check the final answer
    console.log("Final Score:", score);
    console.log("Wrong Questions:", wrongQuestions);

    // Store the score and wrong questions in localStorage
    localStorage.setItem('triviaScore', score);
    localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions)); // Save the wrong questions

    window.location.href = "index-end.html"; // Redirect to the results page
});

// Initial display
displayQuestion();