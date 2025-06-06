import './style.css'

function createImageSlider(sliderId, overlayId, handleId) {
  const slider = document.getElementById(sliderId);
  const overlay = document.getElementById(overlayId);
  const handle = document.getElementById(handleId);
  const divider = document.getElementById(sliderId.replace('slider', 'divider'));
  
  if (!slider || !overlay || !handle || !divider) return;
  
  let isDragging = false;
  
  function updateSlider(x) {
    const rect = slider.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    
    overlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    handle.style.left = `${percentage}%`;
    divider.style.left = `${percentage}%`;
  }
  
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      updateSlider(e.clientX);
    }
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
  
  slider.addEventListener('click', (e) => {
    if (e.target !== handle) {
      updateSlider(e.clientX);
    }
  });
  
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    e.preventDefault();
  });
  
  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      updateSlider(touch.clientX);
      e.preventDefault();
    }
  });
  
  document.addEventListener('touchend', () => {
    isDragging = false;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createImageSlider('mobile-slider', 'mobile-overlay', 'mobile-handle');
  createImageSlider('desktop-slider', 'desktop-overlay', 'desktop-handle');
});
