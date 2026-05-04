import anime from 'animejs';

const FADE_IN_UP = {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 800,
  easing: 'easeOutExpo',
};

/**
 * Plays the initial intro animation.
 */
export function playIntroAnimation(): anime.AnimeTimelineInstance {
  const tl = anime.timeline({
    easing: 'easeInOutExpo',
  });

  tl.add({
    targets: '.intro-grid',
    scale: [1, 50],
    opacity: [1, 0],
    duration: 1000,
  })
  .add({
    targets: '.intro-overlay',
    opacity: [1, 0],
    duration: 500,
    complete: () => {
      document.querySelector('.intro-overlay')?.remove();
    }
  }, '-=500');

  return tl;
}

/**
 * Plays the hero section entrance animation.
 */
export function playHeroAnimation(): void {
  anime({
    targets: '[data-animation="stagger-fade-in"]',
    ...FADE_IN_UP,
    delay: anime.stagger(150),
  });

  anime({
    targets: '[data-animation="zoom-fade-in"]',
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 1200,
    easing: 'easeOutExpo',
    delay: 400,
  });
}

/**
 * Sets up hover interactions for the portfolio grid.
 */
export function setupPortfolioHovers(): void {
  document.querySelectorAll('.grid-item').forEach(item => {
    const video = item.querySelector('video');
    if (video) {
      item.addEventListener('mouseenter', () => video.play());
      item.addEventListener('mouseleave', () => video.pause());
    }
  });
}

/**
 * Sets up a custom cursor that follows the mouse and reacts to hovers.
 */
export function setupCustomCursor(): void {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const interactiveElements = document.querySelectorAll('a, button, .grid-item');

    window.addEventListener('mousemove', e => {
        anime({
            targets: cursor,
            left: e.clientX,
            top: e.clientY,
            duration: 50,
            easing: 'linear'
        });
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            anime({
                targets: cursor,
                scale: 2.5,
                backgroundColor: '#8B3A2B', // Rust accent on hover
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
        el.addEventListener('mouseleave', () => {
            anime({
                targets: cursor,
                scale: 1,
                backgroundColor: '#C9A24A', // Back to gold
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
    });
}

/**
 * Sets up Intersection Observers for scroll-triggered animations.
 */
export function setupScrollAnimations(): void {
  const revealElements = document.querySelectorAll('[data-scroll-reveal]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a staggered delay for a nicer effect
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));

  // Specific observer for the featured project transformation
  const featuredProject = document.querySelector('.transformation-container');
  if (featuredProject) {
      const featuredObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-revealed');
              } else {
                  entry.target.classList.remove('is-revealed');
              }
          });
      }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
      featuredObserver.observe(featuredProject);
  }
}
