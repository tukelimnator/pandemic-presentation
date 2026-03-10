// Initialize Reveal.js presentation framework
document.addEventListener('DOMContentLoaded', () => {
    Reveal.initialize({
        controls: true,
        progress: true,
        center: false,
        hash: true,
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        
        // Disable default background to enforce custom CSS
        backgroundTransition: 'none',
        
        // Display controls in the bottom right corner
        controlsTutorial: true,
        
        // Presentation margins
        margin: 0.1,
    });
});
