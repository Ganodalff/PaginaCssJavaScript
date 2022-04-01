var form = document.getElementById('form')

function salvarNovoEvento(event){
    event.preventDefault();
    
    
    let modal = document.getElementById('modal')
    modal.innerText = "Solicitação enviada com sucesso, obrigado por entrar em contato"
    modal.classList.add('modal-active')
}
form.addEventListener('submit', salvarNovoEvento)

