document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');

    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let score = 0;
            const totalQuestions = 5;
            const formData = new FormData(quizForm);
            
            // Check only for 'yes' answers for a positive score (indicating a potential concern)
            for (let [key, value] of formData.entries()) {
                if (key.startsWith('q') && value === 'yes') {
                    score++;
                }
            }

            let resultMessage = '';
            
            if (score >= 3) {
                // High score indicates potential concern
                resultMessage = `**Result: High Concern.** Your answers indicate you may be relying on substances to cope or are struggling to control your use. This is a sign to seek support. Please use the resources listed on this page, especially the **14446 helpline**. You don't have to face this alone.`;
                quizResult.className = 'result-message result-bad';
            } else if (score > 0) {
                // Moderate score indicates an issue to monitor
                resultMessage = `**Result: Moderate Concern.** It appears you use substances to cope in some situations. While your score is low, any reliance on substances for emotional management is worth exploring. Talk to a trusted mentor, teacher, or call **14446** for a confidential chat.`;
                quizResult.className = 'result-message result-good'; // Still good but with a warning tone
            } else {
                // Low/Zero score indicates low risk based on the quiz
                resultMessage = `**Result: Low Concern.** Your answers suggest you are managing well. Keep using healthy coping strategies and stay informed about the facts. Remember to check in with yourself regularly.`;
                quizResult.className = 'result-message result-good';
            }

            // Display the result
            quizResult.innerHTML = resultMessage;
            quizResult.style.display = 'block';

            // Optional: Scroll to the result
            quizResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});