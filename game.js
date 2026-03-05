// Gosuto Orca Studio - main.js

const messages = [
  "👻 Kosong... belum ada link game nih!",
  "⏳ Masih proses, sabar ya bestie~",
  "🐋 Tunggu sebentar, orca lagi kerja keras!",
  "🎮 Kosong belum ada link game, coming soon!",
  "🌊 Masih proses... lagi direbus dulu gamenya~",
  "👀 Tunggu sebentar, bentar lagi beres!",
  "💀 Kosong! Link game belum tersedia nih.",
  "🔧 Masih proses, jangan kemana-mana ya~",
];

function showRandomMsg() {
  const el = document.getElementById('emptyMsg');
  if (!el) return;
  // Trigger re-animation
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'msgFade 0.6s ease forwards';
  const idx = Math.floor(Math.random() * messages.length);
  el.textContent = messages[idx];
}

// Show on load
showRandomMsg();

// Change every 3 seconds
setInterval(showRandomMsg, 3000);

console.log('Gosuto Orca Studio - ready.');