document.addEventListener('DOMContentLoaded', () => {
    const verses = document.querySelectorAll('.verse');
    verses.forEach(verse => {
        verse.addEventListener('click', () => {
            verse.classList.toggle('active');
        });
    });
}); 