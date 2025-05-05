
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Nome de usuário e senha definidos
    const validUsername = 'usuario';
    const validPassword = 'senha123';

    // Obtém os valores inseridos pelo usuário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Valida o nome de usuário e a senha
    if (username == validUsername && password == validPassword) {
        window.location.href = 'sucesso.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Nome de usuário ou senha incorretos. Tente novamente.';
    }
});
