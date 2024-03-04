document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');

    const resultTextElement = document.getElementById('resultText');

    if (score !== null) {
        const depressionScore = parseInt(score);

        if (depressionScore < 15) {
            resultTextElement.textContent = 'Mentally Healthy.';
        } else if (depressionScore <= 30) {
            resultTextElement.textContent = 'Somewhat Anxious.';
        } else if (depressionScore >= 45) {
            resultTextElement.textContent = 'Heading towards depression.';
        } else {
            resultTextElement.textContent = 'You should seek out help.';
        }
    } else {
        resultTextElement.textContent = 'No score provided.';
    }
});
