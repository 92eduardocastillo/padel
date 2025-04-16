let score1 = 0;
let score2 = 0;
const points = [0, 15, 30, 40, 'Game'];

function incrementScore(team) {
    if (team === 1) {
        if (score1 < points.length - 1) {
            score1++;
        }
        document.getElementById('score1').textContent = points[score1];
    } else if (team === 2) {
        if (score2 < points.length - 1) {
            score2++;
        }
        document.getElementById('score2').textContent = points[score2];
    }
}

function openModal() {
    document.getElementById('rulesModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('rulesModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('rulesModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};