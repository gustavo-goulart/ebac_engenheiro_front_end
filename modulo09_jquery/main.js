$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown(); //expandir formulário
  });

  $("#btn-cancelar").click(function () {
    $("form").slideUp(); //recolher o formulário
  });

  $("form").on("submit", function (e) {
    console.log("submit");
    e.preventDefault();
  });
});
