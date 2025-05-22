

  function filterGallery(category) {
    let items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if (category === 'sve') {
            item.classList.remove('hidden');
        } else {
            item.classList.toggle('hidden', !item.classList.contains(category));
        }
    });
}


