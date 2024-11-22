
// Dark/Light Mode Toggle
/*
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;
const heading = document.querySelector('.heading'); // Select the heading element

// Add an event listener for the button click
toggleButton.addEventListener('click', () => {
    // Toggle a class on the body element
    body.classList.toggle('dark-mode');

    // Update the button text
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Dark Mode';
        heading.style.color = 'white'; // Set heading text color to white
        heading.style.backgroundColor = 'black'; // Set heading background to black
    } else {
        toggleButton.textContent = 'Light Mode';
        heading.style.color = '#333'; // Restore original text color
        heading.style.backgroundColor = 'whitesmoke'; // Restore original background
    }
});
*/

/*
// Dark/Light Mode Toggle
const toggleButton = document.getElementById('toggle-mode');
const heading = document.getElementsByClassName('heading')[0]; // Access the first element with class 'heading'
const timerDisplay = document.getElementById('timerDisplay'); // Select the timer display element

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is active and set colors
    if (document.body.classList.contains('dark-mode')) {
        heading.style.color = 'white';
        timerDisplay.style.color = 'white';
    } else {
        heading.style.color = 'black';
        timerDisplay.style.color = '#333';
    }
});*/


    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;

    // Add an event listener for the button click
    toggleButton.addEventListener('click', () => {
        // Toggle a class on the body element
        body.classList.toggle('dark-mode');

        // Update the button text
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Dark Mode';
        } else {
            toggleButton.textContent = 'Light Mode';
        }
    });

  





let timerInterval;
let seconds = 0;

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById("timerDisplay").innerText = new Date(seconds * 1000).toISOString().substr(14, 5);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    document.getElementById("timerDisplay").innerText = "00:00";
}




/*function toggleFullscreen() {
    const videoContainer = document.getElementById('videoContainer');
    if (!document.fullscreenElement) {
        videoContainer.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}*/
