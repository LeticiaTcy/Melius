document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    try {
        const response = await fetch('../auth/register_process.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();

        if (result.status === 'success') {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('verifyPopup').style.display = 'block';
        } else {
            alert(result.message);
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred. Please try again.');
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
            alert('Email verified successfully! You can now log in.');
            window.location.href = '../public/login.php';
        } else {
            document.getElementById('verifyMessage').textContent = result.message;
        }
    } catch (err) {
        console.error(err);
        document.getElementById('verifyMessage').textContent = 'Unable to verify. Please try again.';
    }
});
