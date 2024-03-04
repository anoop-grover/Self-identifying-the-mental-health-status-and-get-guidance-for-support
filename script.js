document.getElementById('mentalHealthForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const answers = [...document.querySelectorAll('input[type="radio"]:checked')];
  const scores = answers.map(answer => parseInt(answer.value));
  const depressionScore = scores.reduce((a, b) => a + b, 0); // Calculate depression score by summing up all scores

  window.location.href = "results.html?score=" + depressionScore;
});
