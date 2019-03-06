/*selecionando o botão mobile no html*/
const btnMobile = document.getElementById("btn-mobile");
/* adicionando evento de click ao botão, quando clicar vai disparar a função*/
btnMobile.addEventListener("click", function (e) {
    e.preventDefault();
    menuToggle();
})
/*a função busca o menu que esta escondido a rigth:100% e acrescenta a classe checked que da um rigth:0 fazendo o menu aparecer, o toggle é responsável por verificar se o elemento possui ou não a classe checked,se não tiver acrescenta e se tiver remove*/ 
function menuToggle (){
    const menu = document.getElementById("menu");
    menu.classList.toggle("checked")
}