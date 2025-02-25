
document.addEventListener('DOMContentLoaded', () => {
    const verses = document.querySelectorAll('.verse');
    const hadiths = document.querySelectorAll('.hadith');

    verses.forEach(verse => {
        verse.addEventListener('click', () => {
            verse.classList.toggle('active');
        });
    });

    hadiths.forEach(hadith => {
        hadith.addEventListener('click', () => {
            hadith.classList.toggle('active');
        });
    });
});