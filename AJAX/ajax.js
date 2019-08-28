document.querySelector('#boton').addEventListener('click', getData);//could be getData() as well.

function getData(){
    //console.log("hi ther ajax 2");
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
           // console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            console.log(data);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for(let item of data){
                //console.log(item.title);
                res.innerHTML += `
                <tr>
                  <td>${item.title}</td>
                  <td>${item.artist}</td>
                </tr>
                `
            }
        }
    }

}



/****Ajax v1 */
// function getData(){
//     // console.log('function active')
//     const xhttp = new XMLHttpRequest();
//     xhttp.open('GET', 'file.txt', true);

//     xhttp.send();
    
//     xhttp.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);// is a property of our xmlresponse 
//             document.querySelector('#res').innerHTML = this.responseText;
//         }
//     }
// }