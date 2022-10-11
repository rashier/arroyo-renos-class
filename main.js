const moreInfoButton = document.getElementById('more-info-btn');
const moreInfoContainer = document.getElementById('more-info-container');
const moreInfoCloseButton = document.getElementById('more-info-close-btn');
let show = false;

moreInfoButton.addEventListener('click', () => {
  if (!show) {
    show = true
    moreInfoContainer.classList.remove('d-none')
  }
})

moreInfoCloseButton.addEventListener('click', () => {
  if (show) {
    show = false
    moreInfoContainer.classList.add('d-none')
  }
})