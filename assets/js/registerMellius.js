document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const popup = document.getElementById("verifyPopup");
    const overlay = document.getElementById("overlay");
    const loading = document.getElementById("loading");
    const verifyBtn = document.getElementById("verifyBtn");
    const verifyMessage = document.getElementById("verifyMessage");
  
    // Função para animar shake em erro
    const shakeField = (field) => {
      field.style.animation = "shake 0.3s";
      field.addEventListener("animationend", () => {
        field.style.animation = "";
      }, { once: true });
    };
  
    // Validação simples no front-end
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const password = form.password.value;
      if(password.length < 6) {
        shakeField(form.password);
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
      }
  
      // Mostrar loading e simular envio de email
      loading.style.display = "block";
      setTimeout(() => {
        loading.style.display = "none";
        overlay.style.display = "block";
        popup.style.display = "block";
      }, 1000);
    });
  
    // Botão de verificar código
    verifyBtn.addEventListener("click", () => {
      const code = document.getElementById("verificationCode").value;
      if(code === "123456") { // Simulação de código correto
        verifyMessage.style.color = "green";
        verifyMessage.textContent = "Código verificado com sucesso!";
        setTimeout(() => {
          popup.style.display = "none";
          overlay.style.display = "none";
        }, 1000);
      } else {
        verifyMessage.style.color = "red";
        verifyMessage.textContent = "Código incorreto, tente novamente.";
      }
    });
  });
  