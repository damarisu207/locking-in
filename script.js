const layer = document.getElementById('confetti-layer');
const colors = ['#ff5fa2', '#ffd23f', '#3ec6ff', '#8a5cff', '#3ddc84', '#ff9f1c'];

// drop a burst of confetti pieces
function confettiBurst(count = 40) {
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.animationDuration = 2 + Math.random() * 2.5 + 's';
        piece.style.animationDelay = Math.random() * 0.4 + 's';
        layer.appendChild(piece);

        // clean up so the page doesn't fill with old pieces
        setTimeout(() => piece.remove(), 5500);
    }
}

// click anywhere = confetti
document.addEventListener('click', () => confettiBurst());

// a little confetti when the page loads
window.addEventListener('load', () => confettiBurst(25));

// hamsters spin when clicked
document.querySelectorAll('.hamster, #rainbow-hamster').forEach((img) => {
    img.addEventListener('click', () => {
        img.animate(
            [{ rotate: '0deg' }, { rotate: '360deg' }],
            { duration: 700, easing: 'ease-in-out' }
        );
    });
});
