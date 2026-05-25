/**
 * Yokai Executor - Interactive Actions Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Download Button Scroll Trigger
    const heroBtn = document.getElementById('heroDownloadBtn');
    const stickyWrapper = document.getElementById('stickyBtnWrapper');

    if (heroBtn && stickyWrapper) {
        window.addEventListener('scroll', () => {
            const rect = heroBtn.getBoundingClientRect();
            
            // If the hero download button scrolls out of sight
            if (rect.bottom < 0) {
                stickyWrapper.classList.add('visible');
            } else {
                stickyWrapper.classList.remove('visible');
            }
        });
    }

    // 2. Dynamic FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Close any currently expanded item
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }
            });

            // Expand the clicked item if it was closed
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 3. Dynamic Copyright Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
