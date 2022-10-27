const shareButton = document.querySelector('.share-icon-container');
const shareIcon = document.querySelector('.share-icon');

shareButton.addEventListener('click', function toggleVisibility() {
    const shareModal = document.querySelector('.share-modal-container');
    shareButton.classList.toggle('share-icon-container-selected');
    shareIcon.classList.toggle('share-icon-selected');
    if(shareModal.style.display == 'flex') {
        shareModal.style.display = 'none';
    } else {
        shareModal.style.display = 'flex';
}});