
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


// Form submission
const form = document.getElementById('myForm');
const formMsg = document.getElementById('formMsg');

form.onsubmit = function(e) {
    e.preventDefault();
    formMsg.textContent = "Form submitted!";
};

// Focus events
const focusInput = document.getElementById('focusInput');
const focusMsg = document.getElementById('focusMsg');

focusInput.onfocus = function() {
    focusMsg.textContent = "Input focused!";
};

focusInput.onblur = function() {
    focusMsg.textContent = "focusLost!";
};


// Event delegation for buttons
const buttonContainer = document.getElementById('buttonContainer');
const clickMsg = document.getElementById('clickMsg');

buttonContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('action-btn')) {
        clickMsg.textContent = "Clicked: " + e.target.textContent;
    }
});

// Added input validation
document.querySelector('#myForm input').required = true;










