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
        question: "Question 4: What vegetable was originially used to make Jack-o'-lanterns before pumpkins?",
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
        question: "Question 9: What is the name of the ancient Celtic festival that Halloween is beleived to have orginated from?",
        answers: ["Samhain", "Beltane", "Imbolc", "Lughnasadh"],
        correct: 0
    },
    {
        question: "Question 10: What is the significance of the colors orange and black during Halloween?",
        answers: ["They represent life and death", "They are the colors of witches", "They symbolize fire and ice", "They represent autumn and night"],
        correct: 3
    }
];

let currentQuestionIndex = 0;

// Function to display a question
function displayQuestion() {
    const questionTitle = document.querySelector('.question-title');
    const answersGrid = document.querySelector('.answers-grid');
    const nextButton = document.querySelector('.next-button');
    const finishButton = document.querySelector('.finish-button');

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
}

// Function to handle next button click
document.querySelector('.next-button').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(); // Show next question
    }
});

// Function to handle finish button click and redirect
document.querySelector('.finish-button').addEventListener('click', () => {
    window.location.href = "results.html"; // Redirect to the results page
});

// Initial display
displayQuestion();
