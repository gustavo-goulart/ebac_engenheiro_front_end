$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown(); //expandir formulário
  });

  $("#btn-cancelar").click(function () {
    $("form").slideUp(); //recolher o formulário
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $("endereco-imagem-nova").val();
    const novoItem = $("<li></li>");
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //criação de um elemento no jQuery, appendTo pega o elemento e joga no Li
    $(`
      <div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
          Ver imagem em tamanho real
        </a>
      </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo("ul");
  });
});
