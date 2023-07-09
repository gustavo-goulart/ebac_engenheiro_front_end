$(document).ready(function () {
  $("#nome").mask("Nome completo", {
    placeholder: "Nome completo",
  });

  $("#telefone").mask("(00)00000-0000", {
    placeholder: "(xx)xxxxx-xxxx",
  });

  $("#email").mask("exemple@example.com", {
    placeholder: "exemple@example.com",
  });

  $("#endereco").mask("Endereço Completo", {
    placeholder: "Endereço Completo",
  });

  $("#cpf").mask("000.000.000-00", {
    placeholder: "000.000.000-00",
  });

  $("#cep").mask("00.000-000", {
    placeholder: "00.000-000",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cpf: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: "Por gentileza digite o nome completo",
      endereco: "Por gentileza digite o endereço completo",
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
});
