/*Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch*/

function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(idade > 18){
                resolve();
            }else{
                reject();
            }
                
        }, 2000);
    });
   }
   checaIdade(20)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });

    /*Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>
*/
var appElement = document.querySelector('#app');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
var ulElement = document.querySelector('ul');

function findRepos(){
    ulElement.innerHTML = '';
    //while response.data = null 
    axios.get('https://api.github.com/users/'+ inputElement.value +'/repos')
    .then(function(response){
        while(response.data === null){
            var liElement = document.createElement('li');
            var liText = document.createTextNode('carregando...');
            liElement.appendChild(liText);
            ulElement.appendChild(liElement);
            appElement.appendChild(ulElement);
            console.log('To executando');

        }
        ulElement.innerHTML = '';
        for(let key in response.data){
            
            var liElement = document.createElement('li');
            var liText = document.createTextNode(response.data[key].name);
            liElement.appendChild(liText);
            ulElement.appendChild(liElement);
            appElement.appendChild(ulElement);
            inputElement.value = '';
        }
    })
    .catch(function(error){
        
        if(error.response.status === 404){
            alert('Usuário não possui conta no github');
        }
    });
}





