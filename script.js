$(document).ready(function () {
  $('header button').click(function () {
    $('form').slideDown()
  })

  $('#botao-cancelar').click(function () {
    $('form').slideUp()
  })

  $('form').on('submit', function (e) {
    e.preventDefault()
    const novaImagem = $('#input-image').val()
    const novoElemento = $('<li style="display:none">  </li>')
    $(`<img src ="${novaImagem}" />`).appendTo(novoElemento)
    $(`<div class="overlay-image-link"> 
    <a href="${novaImagem}" target=_"blank" title="Clique aqui para expandir a imagem">
    Clique aqui para expandir a imagem
    </a>
    </div>`).appendTo(novoElemento)
    $(novoElemento).appendTo('ul')
    $(novoElemento).fadeIn(1000)

    $('#input-image').val('')
  })
})
