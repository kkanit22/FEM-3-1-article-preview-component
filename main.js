const sharePanel = document.getElementById('share-panel');
const shareIcon = document.querySelectorAll('.share-icon');

for (instance of shareIcon) {
	instance.addEventListener('click', () => {
		sharePanel.classList.toggle('hidden');
		shareIcon[0].classList.toggle('button-active');
	})
}