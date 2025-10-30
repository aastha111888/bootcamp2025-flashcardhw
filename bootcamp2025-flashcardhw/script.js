const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

let currentIndex = 0;
let showingTerm = true;

// Function to display the current card
function displayCard() {
    const cardContent = document.getElementById("card-content");
    const currentCard = flashcards[currentIndex];

    if (showingTerm) {
        cardContent.textContent = currentCard.term;
    } else {
        cardContent.textContent = currentCard.definition;
    }
}

// Function to flip between term and definition
function flipCard() {
    showingTerm = !showingTerm;
    displayCard();
}

// Function to move to the next card (looping)
function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true;
    displayCard();
}

// Function to move to the previous card (looping)
function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true;
    displayCard();
}

// Function to add a new card
function addCard() {
    const term = document.getElementById("new-term").value.trim();
    const definition = document.getElementById("new-definition").value.trim();

    if (term && definition) {
        flashcards.push({ term, definition });
        document.getElementById("new-term").value = "";
        document.getElementById("new-definition").value = "";
        alert("New card added!");
    } else {
        alert("Please enter both a term and a definition.");
    }
}

// Event listeners
document.getElementById("flashcard").addEventListener("click", flipCard);
document.getElementById("next-btn").addEventListener("click", nextCard);
document.getElementById("prev-btn").addEventListener("click", prevCard);
document.getElementById("add-card-btn").addEventListener("click", addCard);

// Display first card when the page loads
window.onload = displayCard;
