async function pegarAPI() {
    let idProduto = localStorage.getItem("idProduto")
    let resultado = await fetch(`https://fakestoreapi.com/products/${idProduto}`)
    resultado = await resultado.json()

    console.log(resultado)
    inserirnoHTML(resultado)
}
pegarAPI()
function inserirnoHTML(resultado) {
    
      let containerPai = document.querySelector(".cardDetalhe")
      containerPai.innerHTML =
      `<div class="card mb-3" style="max-width:500px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${resultado.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${resultado.title}</h5>
            <p class="card-text">${resultado.description}</p>
            <p class="card-text"><small class="text-body-secondary">R$ ${resultado.price}</small></p>
          </div>
        </div>
      </div>
    </div>`
    }
  

