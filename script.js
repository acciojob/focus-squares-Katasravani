function changeColors(squareNumber) {
    for (let i = 1; i <= 3; i++) {
        const square = document.getElementById(`square${i}`);
        if (i !== squareNumber) {
            square.classList.add('coffee');
        }
    }
}

function resetColors(squareNumber) {
    for (let i = 1; i <= 3; i++) {
        const square = document.getElementById(`square${i}`);
        if (i !== squareNumber) {
            square.classList.remove('coffee');
        }
    }
}
