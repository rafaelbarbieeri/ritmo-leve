// Ritmo Leve — validação do formulário de contato (demonstrativo, nada é enviado)
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form-contato");
  if (!form) return;

  var status = form.querySelector(".form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var primeiroNome = form.nome.value.trim().split(" ")[0];
    status.textContent =
      "Obrigado, " + primeiroNome + "! Sua mensagem foi validada com sucesso. " +
      "Como este é um formulário demonstrativo, nada foi enviado de verdade.";
    status.hidden = false;
    form.reset();
  });
});
