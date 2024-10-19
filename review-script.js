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

// Initialize the questionsToShow array
const questionsToShow = [];

// Function to populate the questionsToShow array based on missed questions from localStorage
function populateQuestionsToShow() {
    const missedQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || [];

    missedQuestions.forEach((missedQuestion) => {
        const questionIndex = missedQuestion.questionIndex;
        const incorrectAnswerIndex = missedQuestion.incorrectAnswer; // Correct property name

        // Add the question index and both the correct and incorrect answers to questionsToShow
        questionsToShow.push({
            index: questionIndex,
            answers: [questions[questionIndex].correct, incorrectAnswerIndex]
        });
    });
}

// Call the function to populate questionsToShow
populateQuestionsToShow();

// Check if there are questions to show
if (questionsToShow.length === 0) {
    alert("No missed questions to review.");
    // You might want to redirect the user or handle this case differently
} else {
    let currentQuestionIndex = 0;


    // Function to display a question
    function displayQuestion() {
    const questionTitle = document.querySelector('.question-title');
    const answersGrid = document.querySelector('.answers-grid');
    const nextButton = document.querySelector('.next-button');
    const finishButton = document.querySelector('.finish-button');

    // Clear previous answers
    answersGrid.innerHTML = '';

    // Disable the next button initially
    nextButton.disabled = false; // We want the user to be able to click "Next" right away

    // Get current question from the questionsToShow array
    const currentQuestionData = questionsToShow[currentQuestionIndex];

    // Check if currentQuestionData is defined
    if (!currentQuestionData) {
        console.error("Current question data is undefined for index:", currentQuestionIndex);
        return; // Exit if there’s an issue
    }

    const currentQuestion = questions[currentQuestionData.index]; // Get the full question object from the main array

    // Set question title
    questionTitle.textContent = currentQuestion.question;

    // Display the correct answer button
    const correctAnswerIndex = currentQuestion.correct;
    const correctAnswerButton = document.createElement('button');
    correctAnswerButton.classList.add('answer-button');
    correctAnswerButton.style.backgroundColor = 'green'; // Set green for correct answer
    correctAnswerButton.textContent = `Correct Answer: ${currentQuestion.answers[correctAnswerIndex]}`;
    answersGrid.appendChild(correctAnswerButton);

    // Display the incorrect answer button (the one that was selected)
    const selectedAnswerIndex = currentQuestionData.answers[1]; // The second answer in the array
    const selectedAnswerButton = document.createElement('button');
    selectedAnswerButton.classList.add('answer-button');
    selectedAnswerButton.style.backgroundColor = 'red'; // Set red for selected answer
    selectedAnswerButton.textContent = `You Selected: ${currentQuestion.answers[selectedAnswerIndex]}`;
    answersGrid.appendChild(selectedAnswerButton);

    // Show next button if not on the last question
    if (currentQuestionIndex < questionsToShow.length - 1) {
        nextButton.style.display = 'block';
        finishButton.style.display = 'none'; // Hide the finish button
    } else {
        nextButton.style.display = 'none'; // Hide the next button
        finishButton.style.display = 'block'; // Show the finish button
    }
}


    // Function to handle next button click
    document.querySelector('.next-button').addEventListener('click', () => {
        if (currentQuestionIndex < questionsToShow.length - 1) {
            currentQuestionIndex++;
            displayQuestion(); // Show next question
        }
    });

    // Function to handle finish button click and redirect
    document.querySelector('.finish-button').addEventListener('click', () => {
        localStorage.setItem('triviaScore', score); // Store the score in localStorage
        window.location.href = "results.html"; // Redirect to the results page
    });

    // Initial display
    displayQuestion();
}