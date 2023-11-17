function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validar se o e-mail e a senha são válidos (exemplo simples)
    if (email === 'jack@jack.com' && password === '123') {
        alert('Login bem-sucedido!');
        // Aqui você pode redirecionar para outra página, se necessário.
    } else {
        alert('poxa terráqueo seu e-mail ou senha inválidos. tenta de novo ai.');
    }
}