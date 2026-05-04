import './style.css';
import {
  playIntroAnimation,
  playHeroAnimation,
  setupPortfolioHovers,
  setupCustomCursor,
  setupScrollAnimations
} from './animations';

/**
 * Main application logic
 */
function main() {
  setupCustomCursor();
  setupPortfolioHovers();
  setupScrollAnimations();

  // Chain intro and hero animations
  playIntroAnimation().finished.then(() => {
    playHeroAnimation();
  });
}

// Run the main function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);
