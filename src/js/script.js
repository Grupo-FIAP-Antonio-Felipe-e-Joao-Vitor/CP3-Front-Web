const imagens = [
    './src/assets/imagem1.png',
    './src/assets/imagem2.png',
    './src/assets/imagem3.png',
]

imagemBanner = document.getElementById("banner")
i = 0

function slideShow() {
    if (i == imagens.length) {
        i = 0
    }
    imagemBanner.src = imagens[i]
    i++
  

    setTimeout(slideShow, 2000)
}

slideShow()

