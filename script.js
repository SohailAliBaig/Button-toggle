document.getElementById('toggleButton').addEventListener('click', function() {
    var container = document.getElementById('container');
    var text = document.getElementById('text');
    var button = document.getElementById('toggleButton');

    if (container.style.backgroundColor === 'lightgray') {
        container.style.backgroundColor = 'lightblue';
        text.textContent = 'New Text';
        button.textContent = 'Reset';
    } else {
        container.style.backgroundColor = 'lightgray';
        text.textContent = 'Initial Text';
        button.textContent = 'Click me';
    }
});
