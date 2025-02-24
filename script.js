
// تغيير اللون بين الداكن والفاتح
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// بحث داخل الموقع
function searchContent() {
    let query = document.getElementById('searchInput').value;
    alert('البحث عن: ' + query);
}
