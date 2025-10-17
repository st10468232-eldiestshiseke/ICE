// Accordion Logic
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('span');

    document.querySelectorAll('.accordion-content').forEach(c => {
      if (c !== content) c.classList.remove('active');
    });
    document.querySelectorAll('.accordion-header span').forEach(s => s.textContent = '+');

    content.classList.toggle('active');
    icon.textContent = content.classList.contains('active') ? '−' : '+';
  });
});

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.accordion-content img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    caption.textContent = img.dataset.caption;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
