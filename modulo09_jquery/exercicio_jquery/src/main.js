$(document).ready(function{
  $("form").on('submit', function(e){
    e.preventDefault();

    let novaTarefa = $("#tarefa").val();
    let novoItem = $("<li style=display:none></li>");
    $(`<li ${novaTarefa}></li>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $("#tarefa").val("");
  })
  
});
