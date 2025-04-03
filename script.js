
// Hover events
const hoverButton = document.getElementById('hoverBtn');
const hoverMessage = document.getElementById('hoverMsg');

hoverButton.onmouseover = function() {
    hoverMessage.textContent = "Hey Mouse! am over here!";
};

hoverButton.onmouseout = function() {
    hoverMessage.textContent = "";
};

// Keyboard events
const keyInput = document.getElementById('keyInput');
const keyDisplay = document.getElementById('keyDisplay');

keyInput.addEventListener('keyup', function(e) {
    keyDisplay.textContent = e.key;
});