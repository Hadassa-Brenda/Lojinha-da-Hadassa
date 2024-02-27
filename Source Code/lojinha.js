async function pegarAPI() {

  let resultado = await fetch('https://fakestoreapi.com/products/category/women\'s clothing')
  resultado = await resultado.json()

  let roupaMasculina = await fetch('https://fakestoreapi.com/products/category/men\'s clothing')
  roupaMasculina = await roupaMasculina.json()

  resultado = resultado.concat(roupaMasculina)

  console.log(resultado)
  await inserirnoHTML(resultado)

}
function inserirnoHTML(resultado) {
  for (let i = 0; i < resultado.length - 1; i++) {
    let containerPai = document.querySelector(".grid1")
    containerPai.innerHTML +=
      `
    <div class="card" id = "card1">
      <h5 class="card-title">${resultado[i].title}</h5>
      <img class="card-img-top" src="${resultado[i].image}" alt="Imagem de capa do card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Frete grátis</li>
        <li class="list-group-item" >a partir de ${resultado[i].price} </li>
      </ul>
      <div class="card-body">
        <a onclick="detalharProduto(${resultado[i].id})" class="card-link"> Adicionar ao carrinho</a>
      </div>
    </div>
`
  }
}
function detalharProduto(id) {
  localStorage.setItem('idProduto',id)
  window.location.href = "detalhes.html"
}

pegarAPI()

function pesquisar() {
  let input = document.querySelector("#pesquisa input")
  window.location.href=`pesquisa.html?termopesquisado=${input.value}`
}

