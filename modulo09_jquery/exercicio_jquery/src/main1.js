$(document).ready(function () {
  //Outra forma é usando o evento .on
  $("form").on("submit", (e) => {
    e.preventDefault();
    //é como se fosse: const enderecoDaNovaImg = document.getElementById('endereco-nova-img').value
    const inputText = $("#inputText").val();
    // var jqTextNode = $(document.createTextNode('inputText'));
    const novoItem = $(
      '<li title="Clique para marcar ou desmarcar tarefa" class="undone" style="display: none"> </li>'
    );

    $(`<p>${inputText}</p>`).appendTo(novoItem);

    //Agora adicionar a li na ul
    $(novoItem).appendTo("ul");
    //usar animação com jQuery na adição da imagem
    $(novoItem).fadeIn();
    //para limpar o input
    $("#inputText").val("");
  });

  $("#lista").on("click", "li", function (e) {
    $(e.target).toggleClass("done");
  });
});
