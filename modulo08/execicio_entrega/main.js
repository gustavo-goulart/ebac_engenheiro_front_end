const form = document.getElementById("agenda-contatos");
const nome = [];
const telefone = [];

let linhas = ""; //adicionado ao conteúdo global para evitar o reset de linha

form.addEventListener("submit", function (e) {
  e.preventDefault(); //remover comportamento de atualizar a página
  //chamar os campos nome e nota
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

    //adicionar no corpo da tabela
    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  //limpar o campo após adicionar conteúdo
  inputNomeContato.value = "";
  inputTelefoneContato.value = "";
}

function atualizaTabela() {
  //colocar itens acima no corpo da tabela
  const corpoTabela = document.querySelector("tbody");

  //inserir conteúdo dentro de uma tag
  corpoTabela.innerHTML = linhas;
}
