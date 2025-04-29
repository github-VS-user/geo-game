const gameContainer = document.getElementById("game-container");

function startSection(section) {
  if (section === "flashcards") showFlashcards();
  if (section === "quiz") showQuiz();
  if (section === "dragdrop") showDragDrop();
  if (section === "scenario") showScenario();
  if (section === "fillblank") showFillBlank();
}

// 🧠 FLASHCARDS
function showFlashcards() {
  const cards = [
    { q: "What is a Commodity?", a: "A raw material or primary product that can be bought and sold." },
    { q: "What is Globalization?", a: "The process by which the world is becoming increasingly interconnected." },
    { q: "Define Import", a: "Bringing goods into a country from abroad." },
    { q: "Define Export", a: "Sending goods to another country for sale." },
    { q: "Define Free Trade", a: "International trade left to its natural course without tariffs or restrictions." }
  ];
  
  let index = 0;
  gameContainer.innerHTML = `
    <div>
      <h2>Flashcard</h2>
      <p><strong>Q:</strong> ${cards[index].q}</p>
      <button onclick="flipCard()">🔄 Show Answer</button>
      <button onclick="nextCard()">➡️ Next</button>
    </div>
  `;
  
  window.flipCard = () => {
    const p = document.querySelector('p');
    p.innerHTML = `<strong>A:</strong> ${cards[index].a}`;
  };

  window.nextCard = () => {
    index = (index + 1) % cards.length;
    showFlashcards();
  };
}

// 📝 MULTIPLE CHOICE
function showQuiz() {
  const question = {
    q: "Which of the following is NOT a commodity?",
    options: ["Coffee", "Gold", "Smartphones", "Wheat"],
    answer: "Smartphones"
  };

  gameContainer.innerHTML = `
    <h2>${question.q}</h2>
    ${question.options.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join('<br>')}
  `;

  window.checkAnswer = (opt) => {
    alert(opt === question.answer ? "✅ Correct!" : "❌ Nope. Try again!");
  };
}

// 🗺️ DRAG & DROP (simple version)
function showDragDrop() {
  gameContainer.innerHTML = `
    <h2>Drag each item to its origin</h2>
    <p>(Pretend functionality – real drag/drop later)</p>
    <ul>
      <li>☕ Coffee → <button>Colombia</button></li>
      <li>🍌 Bananas → <button>El Salvador</button></li>
      <li>💎 Gold → <button>South Africa</button></li>
    </ul>
  `;
}

// 🎬 SCENARIO
function showScenario() {
  gameContainer.innerHTML = `
    <h2>You are a banana farmer 🍌</h2>
    <p>If a banana sells for 1 CHF, how much do you earn?</p>
    <button onclick="alert('✅ 20% goes to the farmer!')">20%</button>
    <button onclick="alert('❌ Try again!')">50%</button>
    <button onclick="alert('❌ Try again!')">80%</button>
  `;
}

// ✍️ FILL IN THE BLANK
function showFillBlank() {
  gameContainer.innerHTML = `
    <h2>Fill in the Blank</h2>
    <p>Globalization is the process by which the world is becoming more ____________.</p>
    <input id="blankInput" />
    <button onclick="checkBlank()">Check</button>
  `;
}

function checkBlank() {
  const input = document.getElementById("blankInput").value.trim().toLowerCase();
  if (input.includes("interconnected") || input.includes("connected")) {
    alert("✅ Correct!");
  } else {
    alert("❌ Incorrect. Try again.");
  }
}
