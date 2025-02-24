// تغيير اللون بين الداكن والفاتح
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// البحث داخل الموقع
function searchContent() {
    let query = document.getElementById('searchInput').value;
    alert('البحث عن: ' + query);
}

// شريط التمرير للآيات
setInterval(function() {
    const texts = [
        "إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ",
        "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        "قُلْ هُوَ ٱللَّهُ أَحَدٌ"
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    document.getElementById('scrolling-text').textContent = "🌙 " + texts[randomIndex];
}, 5000);