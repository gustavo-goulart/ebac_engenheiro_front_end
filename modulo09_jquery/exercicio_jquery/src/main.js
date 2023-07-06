$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    let novaTarefa = $("input").val();
    let lista = $("lista");
    let item = `<li>${tarefa}</li>`;
    $(item).appendTo(lista);
    $("button").click(function () {
      ul.toogle("done");
    });
  });

  $("ul").click("li", function () {
    $(this).addClass("concluido");
  });
});
