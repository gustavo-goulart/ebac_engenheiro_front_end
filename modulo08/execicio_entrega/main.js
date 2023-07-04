const form = document.getElementById("agenda-contatos");
const nome = [];
const telefone = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputTelefoneContato = document.getElementById("tel-contato");

  if (nome.includes(inputNomeContato.value)) {
    alert(`O nome ${inputNomeContato.value} já foi inserido`);
  } else {
    nome.push(inputNomeContato.value);
    telefone.push(inputTelefoneContato.value);

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputTelefoneContato.value = "";
}

function atualizaTabela() {
  //colocar itens acima no corpo da tabela
  const corpoTabela = document.querySelector("tbody");

  //inserir conteúdo dentro de uma tag
  corpoTabela.innerHTML = linhas;
}
