// مثال على وظيفة تفاعلية: تفاعل مع التمرير
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#111";
    } else {
        header.style.backgroundColor = "#333";
    }
});