function validarFormulario() {
    const nome = document.getElementById("campoNome").value.trim();
    const email = document.getElementById("campoEmail").value.trim();
    const mensagem = document.getElementById("campoMensagem").value.trim();

    let erros = [];

    if (nome === "") {
        erros.push("O campo 'Nome' é obrigatório.");
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        erros.push("Por favor, insira um email válido.");
    }

    if (mensagem === "") {
        erros.push("O campo 'Mensagem' é obrigatório.");
    }

    if (erros.length > 0) {
        alert("Erro(s) no formulário:\n\n" + erros.join("\n"));
    } else {
        alert("Formulário enviado com sucesso!");
    }
}
