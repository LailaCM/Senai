document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (email === "eu@gmail.com" && password === "123") {
        window.location.href = "home.html";
    } else {
        alert("ERRO: Credenciais inválidas!"); 
        document.getElementById('password').value = "";
    }
});