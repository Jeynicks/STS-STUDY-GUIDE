
const identificationQuestions = [
    {
        question: "The type of writing used to persuade people to take action.",
        answer: "Copywriting"
    },
    {
        question: "The type of writing focused on informing, entertaining, or educating the audience.",
        answer: "Content writing"
    },
    {
        question: "The persuasive technique that appeals to ethics or credibility.",
        answer: "Ethos"
    },
    {
        question: "The persuasive technique that appeals to logic and reason.",
        answer: "Logos"
    },
    {
        question: "The persuasive technique that appeals to emotion.",
        answer: "Pathos"
    },
    {
        question: "A written prompt that tells the audience what to do next.",
        answer: "CTA"
    },
    {
        question: "The advertising acronym that asks 'What's in it for me?'",
        answer: "WIIFM"
    },
    {
        question: "The strategic focus that highlights a product's unique value.",
        answer: "USP"
    },
    {
        question: "The use of images, typography, and layout to support a message.",
        answer: "Visual rhetoric"
    },
    {
        question: "The practice of tailoring ads based on traits like age, interests, or lifestyle.",
        answer: "Psychographics"
    },
    {
        question: "A brief radio commercial spot designed to grab attention quickly.",
        answer: "Radio spot"
    },
    {
        question: "An ad format that uses drama or short stories to engage the viewer.",
        answer: "Minidrama"
    },
    {
        question: "The principle that emphasizes keeping a single clear message per ad.",
        answer: "TMI"
    },
    {
        question: "The final step in copywriting to check accuracy and clarity.",
        answer: "Proofread"
    },
    {
        question: "The guideline that advises focusing on the audience rather than the company.",
        answer: "You"
    }
];

// TRUE OR FALSE
const trueFalseQuestions = [
    {
        question: "Content writing and copywriting have the same primary purpose.",
        answer: false
    },
    {
        question: "Copywriting always involves persuading an audience to take action.",
        answer: true
    },
    {
        question: "The use of humor, shock, and suspense are techniques to capture attention in copywriting.",
        answer: true
    },
    {
        question: "Content writing requires a focus on persuasive elements like urgency and scarcity.",
        answer: false
    },
    {
        question: "A call to action (CTA) is not essential in every advertisement.",
        answer: false
    },
    {
        question: "Logos in advertising appeals to logic and reason through facts and figures.",
        answer: true
    },
    {
        question: "A good script for TV or radio ads should avoid the use of sound effects.",
        answer: false
    },
    {
        question: "Pathos in advertising often appeals to emotions such as love or patriotism.",
        answer: true
    },
    {
        question: "Visual rhetoric is not used in television ads or print marketing collaterals.",
        answer: false
    },
    {
        question: "Copywriters should always focus on 'we' rather than 'you' to connect with their audience.",
        answer: false
    }
];

// MULTIPLE CHOICES
const questions = [
    {
        question: "What is Science, Technology, and Society (STS) primarily concerned with?",
        answers: [
            { text: "Only the development of new scientific theories", correct: false },
            { text: "Only the creation of new technologies", correct: false },
            { text: "How society, politics, and culture influence scientific research and technology, and vice versa", correct: true },
            { text: "The history of famous scientists and their discoveries", correct: false }
        ]
    },
    {
        question: "Which of the following best describes the relationship between science and technology?",
        answers: [
            { text: "Science and technology are completely separate fields with no connection", correct: false },
            { text: "Science helps us understand how things work, while technology uses that knowledge in real life", correct: true },
            { text: "Technology always comes before scientific understanding", correct: false },
            { text: "Science is the application of technology to solve problems", correct: false }
        ]
    },
    {
        question: "What was the initial motivation for early scientific inquiry?",
        answers: [
            { text: "To make money from inventions", correct: false },
            { text: "To develop military technology", correct: false },
            { text: "To establish social status", correct: false },
            { text: "Curiosity and desire to gain knowledge", correct: true }
        ]
    },
    {
        question: "Which of the following is NOT mentioned as a characteristic that makes a society unique?",
        answers: [
            { text: "Common interests", correct: false },
            { text: "Culture", correct: false },
            { text: "Institutions", correct: false },
            { text: "Geographical isolation", correct: true }
        ]
    },
    {
        question: "How do society and technology influence each other?",
        answers: [
            { text: "Technology affects society, but society has no influence on technology", correct: false },
            { text: "Society determines what technology is developed, but technology doesn't change society", correct: false },
            { text: "Technology makes life easier, and society demands new solutions when problems arise", correct: true },
            { text: "There is no relationship between society and technology", correct: false }
        ]
    },
    {
        question: "What is an example of how science and technology benefit medicine?",
        answers: [
            { text: "Science helps understand diseases, and technology creates medicines and vaccines", correct: true },
            { text: "Science creates hospitals, and technology trains doctors", correct: false },
            { text: "Technology discovers diseases, and science creates treatments", correct: false },
            { text: "Science and technology have no impact on medicine", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of how technology has changed communication?",
        answers: [
            { text: "The invention of language", correct: false },
            { text: "The creation of smartphones and the internet", correct: true },
            { text: "The discovery of sound waves", correct: false },
            { text: "The development of agriculture", correct: false }
        ]
    },
    {
        question: "What is the meaning of the Latin word 'societas' from which 'society' is derived?",
        answers: [
            { text: "Government", correct: false },
            { text: "Community", correct: false },
            { text: "Friend, ally, or interaction between people", correct: true },
            { text: "Rules and regulations", correct: false }
        ]
    },
    {
        question: "What drives the development of new inventions?",
        answers: [
            { text: "Random scientific discoveries", correct: false },
            { text: "Competition between countries", correct: false },
            { text: "Society's needs and demands", correct: true },
            { text: "The personal ambitions of scientists", correct: false }
        ]
    },
    {
        question: "Describe the relationship between facts and non-facts?",
        answers: [
            { text: "Facts and non-facts are the same thing", correct: false },
            { text: "Facts are things proven true through study and experiments, while non-facts are unproven or based on opinions", correct: true },
            { text: "Facts are opinions, while non-facts are scientific truths", correct: false },
            { text: "Facts are outdated while non-facts represent modern thinking", correct: false }
        ]
    },
    {
        question: "What's an example of renewable energy technology?",
        answers: [
            { text: "Coal power plants", correct: false },
            { text: "Nuclear reactors", correct: false },
            { text: "Solar panels and wind turbines", correct: true },
            { text: "Hydroelectric dams", correct: false }
        ]
    },
    {
        question: "How has technology impacted education?",
        answers: [
            { text: "It has made education more expensive", correct: false },
            { text: "It has made education more accessible through online learning platforms", correct: true },
            { text: "It has replaced teachers with robots", correct: false },
            { text: "It has eliminated the need for schools", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of cybersecurity?",
        answers: [
            { text: "To create new computer games", correct: false },
            { text: "To monitor citizen activities", correct: false },
            { text: "To protect sensitive government data from hackers and cyber threats", correct: true },
            { text: "To increase internet speeds", correct: false }
        ]
    },
    {
        question: "Which transportation technologies are mentioned as examples of science and technology benefiting society?",
        answers: [
            { text: "Gas-powered vehicles and steam engines", correct: false },
            { text: "Horse-drawn carriages and sailboats", correct: false },
            { text: "Electric cars and high-speed trains", correct: true },
            { text: "Hot air balloons and bicycles", correct: false }
        ]
    },
    {
        question: "According to the document, how did early scientific inquiry evolve?",
        answers: [
            { text: "It started with practical applications and later developed theoretical frameworks", correct: false },
            { text: "It began with curiosity and questions, leading to systematic observations and experiments", correct: true },
            { text: "It was initially focused on religious purposes and later became secular", correct: false },
            { text: "It was first developed by governments and later by individuals", correct: false }
        ]
    }
];
const idSection = document.querySelector(".identification-section");
const idQuestionElement = document.getElementById("id-question");
const idAnswerInput = document.getElementById("id-answer");
const idFeedback = document.getElementById("id-feedback");
const submitIdBtn = document.getElementById("submit-id-btn");
const nextIdBtn = document.getElementById("next-id-btn");

const quizSection = document.querySelector(".quiz");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const tfSection = document.querySelector(".true-false-section");
const tfQuestionElement = document.getElementById("tf-question");
const tfFeedback = document.getElementById("tf-feedback");
const trueBtn = document.getElementById("true-btn");
const falseBtn = document.getElementById("false-btn");
const nextTfBtn = document.getElementById("next-tf-btn");

let currentTfIndex = 0;
let currentIdIndex = 0;
let currentQuestionIndex = 0;
let score = 0;

startIdentification();

function startIdentification() {
    currentIdIndex = 0;
    score = 0;
    currentIdIndex = 0;
    currentTfIndex = 0;
    currentQuestionIndex = 0;

    idSection.style.display = "block";
    quizSection.style.display = "none";
    showIdentificationQuestion();
}

function showIdentificationQuestion() {
    const currentQuestion = identificationQuestions[currentIdIndex];
    idQuestionElement.innerText = currentQuestion.question;
    idAnswerInput.value = "";
    idFeedback.innerText = "";
    idAnswerInput.disabled = false;
    submitIdBtn.disabled = false;
    nextIdBtn.style.display = "none";
}

submitIdBtn.addEventListener("click", () => {
    const userAnswer = idAnswerInput.value.trim().toLowerCase();
    const correctAnswer = identificationQuestions[currentIdIndex].answer.toLowerCase();

    if (userAnswer === "") {
        idFeedback.textContent = "Please enter an answer.";
        idFeedback.style.color = "orange";
        return;
    }

    submitIdBtn.disabled = true;
    idAnswerInput.disabled = true;

    if (userAnswer === correctAnswer) {
        idFeedback.textContent = "Correct!";
        idFeedback.style.color = "green";
        score++;
    } else {
        idFeedback.textContent = `Incorrect. The correct answer was: ${correctAnswer}`;
        idFeedback.style.color = "red";
    }

    nextIdBtn.style.display = "inline-block";
});

nextIdBtn.addEventListener("click", () => {
    currentIdIndex++;
    if (currentIdIndex < identificationQuestions.length) {
        showIdentificationQuestion();
    } else {
        idSection.style.display = "none";
        startTrueFalse();
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    quizSection.style.display = "block";
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${identificationQuestions.length + trueFalseQuestions.length + questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        restartQuiz();
    }
});

function restartQuiz() {
    score = 0;
    currentIdIndex = 0;
    currentQuestionIndex = 0;
    startIdentification();
}

function startTrueFalse() {
    currentTfIndex = 0;
    tfSection.style.display = "block";
    showTfQuestion();
}

function showTfQuestion() {
    const current = trueFalseQuestions[currentTfIndex];
    tfQuestionElement.innerText = current.question;
    tfFeedback.innerText = "";
    nextTfBtn.style.display = "none";
    trueBtn.disabled = false;
    falseBtn.disabled = false;
}

function handleTfAnswer(answer) {
    const correct = trueFalseQuestions[currentTfIndex].answer;
    if (answer === correct) {
        tfFeedback.innerText = "Correct!";
        tfFeedback.style.color = "green";
        score++;
    } else {
        tfFeedback.innerText = `Incorrect. The correct answer is ${correct}.`;
        tfFeedback.style.color = "red";
    }

    trueBtn.disabled = true;
    falseBtn.disabled = true;
    nextTfBtn.style.display = "inline-block";
}

trueBtn.addEventListener("click", () => handleTfAnswer(true));
falseBtn.addEventListener("click", () => handleTfAnswer(false));

nextTfBtn.addEventListener("click", () => {
    currentTfIndex++;
    if (currentTfIndex < trueFalseQuestions.length) {
        showTfQuestion();
    } else {
        tfSection.style.display = "none";
        startQuiz();
    }
});

