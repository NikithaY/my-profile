export const slideInLeft = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
  transition: `all 0.6s ease-out ${delay}s`,
});

export const slideInRight = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
  transition: `all 0.6s ease-out ${delay}s`,
});

export const slideInUp = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: `all 0.6s ease-out ${delay}s`,
});

export const fadeIn = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transition: `opacity 0.6s ease-out ${delay}s`,
});

export const scaleIn = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'scale(1)' : 'scale(0.9)',
  transition: `all 0.6s ease-out ${delay}s`,
});
