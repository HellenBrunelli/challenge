const cartValue = document.querySelector(".cartValue");

function addToCart(valor){
    let valueTotal =  Number(cartValue.textContent.replace('R$ ','').replace(',','.')) // Essa linha remove o R$ e troca a virgula por ponto, assim o JS consegue converter pra nmero (e a ele converte)
    valueTotal += Number(valor); //Esse number  so  pra garantir que no vai dar erro na hora de somar
    console.log(valueTotal)
    cartValue.textContent = `R$ ${valueTotal.toFixed(2).toString().replace(".",",")}` //Essa linha atualiza o texto do p que criamos no HTML e acrescenta o valor no formato moeda
}

