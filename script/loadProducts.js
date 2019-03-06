//escutando o carregamento da página
window.addEventListener("load", function () {
    // endereço http da Api
    const adress = "https://api.myjson.com/bins/w8sxq";

    //chammando a função que retornara o json
    get_data(adress)


    .then(function (data) {
        //.parse() transforma o string em json
        let text_json = JSON.parse(data);
        console.log(typeof text_json)

        //loop vai passar por todos os elementos do array
        text_json.forEach(function(product){
            const container = document.querySelector(".container");
            container.innerHTML+=`
            <article class="product-item">
                <div class="product-container">
                    <figure>
                        <img id="img" src="${product.images[0].imageUrl}" alt="Foto do produto">
                    </figure>
                    <div class="product-descriptions">
                        <h4>${product.name}</h4>
                        <p>R$ ${product.Value}</p>
                    </div>
                </div>
            </article>`
        });       
    })   
     
})