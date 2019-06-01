function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('photo')
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();

    msg.innerHTML = `Agora são ${hour}h${minutes}min`;

    if(hour >= 0 && hour < 12){
        img.src = 'img/morning.png';
        document.body.style.background = '#e2cd9f';
    } else if (hour >=12 && hour < 18){
        img.src = 'img/afternoon.png';
        document.body.style.background = '#b9846f';
    } else {
        img.src = 'img/night.png';
        document.body.style.background = '#515154';
    }
}



