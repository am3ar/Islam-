body {
    font-family: 'Poppins', sans-serif;
    background: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
    direction: rtl;
    transition: background 0.3s, color 0.3s;
}

header {
    background: #1e4d8b;
    color: white;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a, nav ul li button {
    color: white;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
}

.search-bar {
    text-align: center;
    margin: 20px;
}

.search-bar input {
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.search-bar button {
    padding: 10px;
    background: #1e4d8b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

section {
    padding: 20px;
    background: white;
    margin: 10px auto;
    width: 80%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button.load-more {
    background-color: #1e4d8b;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

footer {
    text-align: center;
    padding: 15px;
    background: #1e4d8b;
    color: white;
}

.dark-mode {
    background-color: #2c3e50;
    color: #ecf0f1;
}

.dark-mode header {
    background-color: #34495e;
}

#scrolling-text {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    text-align: center;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
}

@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}