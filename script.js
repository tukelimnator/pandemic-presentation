// Initialize Reveal.js presentation framework
document.addEventListener('DOMContentLoaded', () => {
    Reveal.initialize({
        controls: true,
        progress: true,
        center: false,
        hash: true,
        transition: 'zoom', // Changed to zoom for dramatic WWZ effect
        transitionSpeed: 'fast', // Extra chaotic element
        
        // Disable default background to enforce custom CSS
        backgroundTransition: 'none',
        
        // Display controls in the bottom right corner
        controlsTutorial: true,
        
        // Presentation margins
        margin: 0.1,
    });
});
