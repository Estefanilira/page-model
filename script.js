function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#e2cd9f'
        document.body.style.transitionDuration = "2s"
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'img/fototarde.png'
        document.body.style.background = '#a3d5ff'
        document.body.style.transitionDuration = "2s"
    } else {
        // BOA NOITE!
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#515154'
    }
}