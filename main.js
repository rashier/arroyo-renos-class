const moreInfoButton = document.getElementById('more-info-btn');
const moreInfoText = document.getElementById('more-info-text');
let show = false;

moreInfoButton.addEventListener('click', () => {
  if (!show) {
    show = true
    moreInfoText.classList.remove('d-none')
  } else {
    show = false
    moreInfoText.classList.add('d-none')
  }
})