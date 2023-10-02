function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  //let data= new Date()
  // let hora= data.getHours()
  let hora = 19;
  msg.innerHTML = `Agora sao ${hora} Horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "manha.jpeg";
    document.body.style.background = "#ffd700";
  } else if (hora >= 12 && hora < 18) {
    img.src = "tarde.png";
  } else {
    img.src = "noite.png";
    document.body.style.background = "#0288";
  }
}
