$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle(); //Abre e fecha o MENU NAV
  });

  $("#telefone").mask("(00)00000-0000", {
    placeholder: "(xx)xxxxx-xxxx",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      telefone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false,
      },
    },

    messages: {
      nome: "Por favor insira o seu nome",
    },

    submitHandler: function (form) {
      console.log(form);
    },

    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });

  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");
    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#veiculo-interesse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
