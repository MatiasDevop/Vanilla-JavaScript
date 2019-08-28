document.querySelector('#dollar').addEventListener('click', function(){
    getData('dolar');
});
document.querySelector('#uf').addEventListener('click', function(){
    getData('uf');
});

function getData(value){
   let url = `https://mindicador.cl/api/${value}`; // to use parameters
   const api = new XMLHttpRequest();
   api.open('GET', url, true);
   api.send();
   api.onreadystatechange = function(){
       if (this.status == 200 && this.readyState == 4) {
           console.log(this.responseText);
           let data = JSON.parse(this.responseText);
           let response = document.querySelector('#response');
           response.innerHTML = '';

           let i = 0;
           
           for (let item of data.serie){
            
            i++;
            response.innerHTML += `<li>${item.fecha.substr(0, 10)} | $ ${item.valor} 
                </li>`;
                if (i>10) {
                    break;
                }
           } 
           
       }
   }
}