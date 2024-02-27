let termoPesquisado = new URLSearchParams(window.location.search)
termoPesquisado = termoPesquisado.get("termopesquisado")

function pesquisar() {
    let input = document.querySelector("#pesquisa input")
    window.location.href = `pesquisa.html?termopesquisado=${input.value}`
}

async function pegarAPI() {

    let resultado = await fetch('https://fakestoreapi.com/products/category/women\'s clothing')
    resultado = await resultado.json()

    let roupaMasculina = await fetch('https://fakestoreapi.com/products/category/men\'s clothing')
    roupaMasculina = await roupaMasculina.json()

    resultado = resultado.concat(roupaMasculina)

    console.log(resultado)
    await inserirHTML(resultado)

}
function inserirHTML(resultado){
    let containerPai=document.querySelector(".cardDetalhe")
    for (let i = 0; i < resultado.length -1; i++) {
        
        if(resultado[i].title.toLowerCase().search(termoPesquisado.toLowerCase())!=-1){
            containerPai.innerHTML+=
            `<div class="card mb-3" style="max-width:500px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${resultado[i].image}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${resultado[i].title}</h5>
                  <p class="card-text">${resultado[i].description}</p>
                  <p class="card-text"><small class="text-body-secondary">R$ ${resultado[i].price}</small></p>
                </div>
              </div>
            </div>
          </div>`
        }

    }
}

function detalharProduto(id) {
    localStorage.setItem('idProduto', id)
    window.location.href = "detalhes.html"
}
pegarAPI()