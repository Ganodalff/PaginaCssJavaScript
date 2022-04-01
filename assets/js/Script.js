var form = document.getElementById('form')

function salvarNovoEvento(event){
    event.preventDefault();
    
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const telefone = document.getElementById('telefone')
    const documento = document.getElementById('documento')
    console.log(nome.value,email.value,telefone.value,documento.value)
    
    let modal = document.getElementById('modal')
    modal.innerText = "Solicitação enviada com sucesso, obrigado por entrar em contato"
    modal.classList.add('modal-active')
}
form.addEventListener('submit', salvarNovoEvento)

