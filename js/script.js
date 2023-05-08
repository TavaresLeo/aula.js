function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        // BOM DIA  
        img.src ='imagens/nascer.png'
        document.body.style.background = '#e2cd9f'
        document.body.style.innerHTML = 'Bom Dia'
    } else if (hora >= 12 && hora < 17) {
        //BOA TARDE
       img.src = 'imagens/por-do-sol.png'
       document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#515154'
    }
}

