const questions = [
    { question: "I know that your love language is bullying but do you know mine ?", answer: "being bullied by you" },
    { question: "Your favorite GALLI that you always give me ", answer: "BKL." },
    { question: "The thing you have said to me the most?", answer: "GU KHALE." },
    { question: "your reply if a talk back a little", answer: "HAWWWWWWWW" },  // Text answer
    { question: "Song that will remind you of me", answer: "Aadmi Chutiya Hai - by Rahgir" },
    { question: "You think I want bobby pic from you but do you know what I really want?", answer: "MUH TOD DUNGI TERAAAA!" },
    { question: "Me when you don't say it back", answer: "<img src='cat.png' alt='Image 2' style='width: 100%; height: auto;'>" },
    { question: "Me when you go offline", answer: "<img src='cat2.png' alt='cat.png' style='width: 100%; height: auto;'>" },
    { question: "Me when you mention some another boy ", answer: "<img src='cat3.png' alt='cat2.png' style='width: 100%; height: auto;'>" }  // Image answer for the last question
];

document.getElementById('readyButton').addEventListener('click', function() {
    const flashcardsContainer = document.getElementById('flashcards');
    flashcardsContainer.style.display = 'flex';
    questions.forEach((q) => {
        const flashcard = document.createElement('div');
        flashcard.className = 'flashcard fade';
        flashcard.innerHTML = `
            <div class="card-inner" onclick="this.classList.toggle('flipped')">
                <div class="card-front">${q.question}</div>
                <div class="card-back">${q.answer}</div>
            </div>
        `;
        flashcardsContainer.appendChild(flashcard);
    });
});