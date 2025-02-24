// التبديل بين الوضع الداكن والفاتح
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// التأثير الحركي على النصوص المتحركة
setInterval(function() {
    const texts = [
        "إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ",
        "إِنَّ مَعَ الْعُسْ