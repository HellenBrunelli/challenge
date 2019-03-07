//escutando o carregamento da página
window.addEventListener("load", function () {
    // endereço http da Api
    const adress = "https://api.myjson.com/bins/w8sxq";
    
    //chamando a função que retornará o json
    get_data(adress)
    
    .then(function (data) {
        //.parse() transforma o string em json
        let text_json = JSON.parse(data);

        //loop vai passar por todos os elementos do array, e além de criar o html já vai atribuir os valores que retornam da api
        text_json.forEach(function(product){
            let container = document.querySelector(".container");
            container.innerHTML+=`
            <article class="product-hover">
                <div class="product-item">
                    <div class="product-container">
                        <figure>
                            <img title=”${product.name}” alt="${product.name}" id="img" src="${product.images[0].imageUrl}"
                                alt="Foto do produto" />
                        </figure>
                        <div class="product-descriptions">
                            <h4>${product.name}</h4>
                            <p>R$ ${product.Value.toFixed(2).toString().replace('.',',')}</p>
                            <div title="Adicionar ao carrinho" class="addToCart" onclick="addToCart(${product.Value})">Adicionar ao carrinho</div>
                        </div>
                    </div>
                </div>
            </article>`
            console.log(product.name)
        });
    })   
     
})