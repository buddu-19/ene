export const activateScrollAnimations = () => {
  const elementsToReveal = document.querySelectorAll('.reveal-fade-in');

  elementsToReveal.forEach((element) => {
    // Get element position relative to viewport
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // If element is in viewport (with offset), add active class
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
};