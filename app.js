function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o texto digitado pelo usuário no campo de pesquisa e converte para minúsculas
  let campoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase();

  // Verifica se o usuário digitou algo no campo de pesquisa
  if (!campoPesquisa) {
    // Se o campo estiver vazio, exibe uma mensagem de erro
    section.innerHTML =
      "<p>Nada foi encontrado. Você precisa digitar o nome de um jogo ou algo sobre ele</p>";
    return;
  }

  // Inicializa strings vazias para armazenar os resultados da pesquisa e os dados
  let resultados = "";
  let nome = "";
  let protagonista = "";
  let dataLancamento = "";
  let cenario = "";
  let periodoHistorico = "";
  let sinopse = "";
  // Itera sobre cada jogo na lista de jogos (array 'dados')
  for (let dado of dados) {
    // Converte todos os campos do jogo para minúsculas para facilitar a comparação
    let nome = dado.nome.toLowerCase();
    let protagonista = dado.protagonista.toLowerCase();
    let dataLancamento = dado.dataLancamento; // Data não precisa ser convertida, pois a comparação é exata
    let cenario = dado.cenario.toLowerCase();
    let periodoHistorico = dado.periodoHistorico.toLowerCase();
    let sinopse = dado.sinopse.toLowerCase();

    // Verifica se o termo de pesquisa está presente em algum dos campos do jogo
    if (
      nome.includes(campoPesquisa) ||
      protagonista.includes(campoPesquisa) ||
      dataLancamento.includes(campoPesquisa) ||
      cenario.includes(campoPesquisa) ||
      periodoHistorico.includes(campoPesquisa) ||
      sinopse.includes(campoPesquisa)
    ) {
      // Se o jogo corresponder à pesquisa, cria um novo elemento HTML para exibir os resultados
      resultados += `
      <div class="item-resultado">
        <h2>
          <p class="descricao-meta">${dado.nome}</p>
        </h2>
        <p class="descricao-meta"><strong>Protagonista:</strong> ${dado.protagonista}</p>
        <p class="descricao-meta"><strong>Data de Lançamento:</strong> ${dado.dataLancamento}</p>
        <p class="descricao-meta"><strong>Cenário:</strong> ${dado.cenario}</p>
        <p class="descricao-meta"><strong>Período Histórico:</strong> ${dado.periodoHistorico}</p>
        <p class="descricao-meta"><strong>Sinopse:</strong> ${dado.sinopse}</p> 
      </div>`;
    }
  }

  // Verifica se foram encontrados resultados
  if (!resultados) {
    // Se não houver resultados, exibe uma mensagem informando
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atualiza o conteúdo da seção de resultados com os resultados da pesquisa
  section.innerHTML = resultados;
}

// Adiciona um ouvinte de evento para o botão de pesquisa
const pesquisarComEnter = document.getElementById("botao-pesquisar");

// Adiciona um ouvinte de evento para o documento para detectar a tecla Enter
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Simula um clique no botão de pesquisa
    pesquisarComEnter.click();
  }
});
