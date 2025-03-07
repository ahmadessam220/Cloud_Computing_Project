// script.js

// Function to show an alert when a button is clicked
function showAlert(message) {
    alert(message);
}

// Add event listeners to buttons
document.getElementById("viewMaterialsButton").addEventListener("click", function() {
    showAlert("Viewing materials...");
});

document.getElementById("submitAssignmentButton").addEventListener("click", function() {
    showAlert("Submitting assignment...");
});

document.getElementById("reportAbsenceButton").addEventListener("click", function() {
    showAlert("Reporting absence...");
});

document.getElementById("takeQuizButton").addEventListener("click", function() {
    showAlert("Taking quiz...");
});

document.getElementById("viewGradesButton").addEventListener("click", function() {
    showAlert("Viewing grades...");
});