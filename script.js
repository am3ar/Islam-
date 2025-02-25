document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

function searchContent() {
    alert("البحث قيد التطوير، سيتم إضافته قريبًا!");
}