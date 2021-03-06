// Cria uma função que retorna uma Promise.
// Essa função recebe como argumento uma URL e faz uma request HTTP
// para essa URL. A Promise resolve se a request tiver sido bem sucedida
// e retorna os dados da resposta da request. Se a request nao for bem 
// sucedida a Promise sera rejeitada.
function get_data(url) {
    return new Promise(function (resolve, reject) {
      // Cria uma nova request
      const req = new XMLHttpRequest()
  
      // Inicia a request
      req.open('GET', url)
  
      // Envia a request.
      req.send()
  
      // Captura o evento de 'onload', que é quando a 
      // request terminou de ser executada.
      req.onload = function () {
        // Checa se o status da request é 200, 
        // o que quer dizer que a request foi bem sucedida.
        if (req.status === 200) {
          // Resolve a Promise retornando a resposta da nossa request
          resolve(req.response)
        } else {
          // Rejeita a Promise retornando os status e texto da request
          reject(req.status + ' ' + req.statusText)
        }
      }
  
      // Captura o evento de 'onerror' caso o  não tenha conseguido
      // fazer a request. Geralmente por não estar conectado a internet.
      req.onerror = function () {
        // Rejeita a Promise retornando a string 'Erro de conexão'
        reject('Erro de conexão')
      }
    })
  }
// function reqProduct(){
//     /*nova requisição, objeto js responsavel de fazer req http */
//     const get_data = new XMLHttpRequest();
//     get_data.open("GET", "https://api.myjson.com/bins/w8sxq");    

//     /*escutar o retorno d request, quando ela retornar execute a função*/
//     get_data.addEventListener("load", function(){
//         const resposta = get_data.responseText;

//         const product = JSON.parse(resposta);

//         console.log(product)
//     });

//     get_data.send()
// }