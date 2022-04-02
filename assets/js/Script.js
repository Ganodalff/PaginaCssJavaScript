var form = document.getElementById('form')

function salvarNovoEvento(event){
    event.preventDefault();
    
    
    let modal = document.getElementById('modal')
    modal.innerHTML = "Solicitação enviada com sucesso, obrigado por entrar em contato... <br> <small>Você será redirecionado</small> "
    modal.classList.add('modal-active')
    setTimeout(()=> {
        window.location.href ="index.html"

    },4000)
}
form.addEventListener('submit', salvarNovoEvento)

