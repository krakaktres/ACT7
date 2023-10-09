document.getElementById('fruit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    addFruitToList(name, color);
});

function addFruitToList(name, color) {
    const fruitList = document.getElementById('fruit-list');
    const fruitItem = document.createElement('div');
    fruitItem.classList.add('fruit-item');
    fruitItem.innerHTML = `
        <span>${name}</span>
        <span>${color}</span>`;
    fruitList.appendChild(fruitItem);
}