document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    document.getElementById('loading').style.display = 'block';
    const formData = new FormData(this);
    try {
        const response = await fetch('../auth/register_process.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        document.getElementById('loading').style.display = 'none';
        if (result.status === 'success') {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('verifyPopup').style.display = 'block';
            document.getElementById('verifyMessage').textContent = '';
        } else {
            document.getElementById('verifyPopup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
            alert(result.message);
        }
    } catch (err) {
        document.getElementById('loading').style.display = 'none';
        alert('Ocorreu um erro. Tente novamente.');
    }
});

document.getElementById('verifyBtn').addEventListener('click', async function() {
    const code = document.getElementById('verificationCode').value.trim();
    try {
        const response = await fetch('../auth/verify.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({code})
        });
        const result = await response.json();
        if (result.status === 'verified') {
            alert('Email verificado com sucesso! Você já pode fazer login.');
            window.location.href = '../public/login.php';
        } else {
            document.getElementById('verifyMessage').textContent = result.message;
        }
    } catch (err) {
        document.getElementById('verifyMessage').textContent = 'Não foi possível verificar. Tente novamente.';
    }
});