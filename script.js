//mudando o modo
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('ligth')

  // Mudando a imagem

  // Pegar tag image
  const img = document.querySelector('#profile img')
  // Substituir a imagem
  if(html.classList.contains('ligth')){
    // Se tiver Ligth mode adicionar imagem ligth
    img.setAttribute('src', './assets/avatar-ligth.png')
    img.setAttribute("alt", "Foto de Rian com fundo branco")
  } else {
    // Se tiver sem ligth mode imagem normal
    img.setAttribute('src', ('./assets/avatar.png'))
    img.setAttribute("alt", "Foto de Rian com fundo preto")
  }
 
  
}