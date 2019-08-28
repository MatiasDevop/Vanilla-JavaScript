
    var content = document.querySelector('#content');
    function bring(){

        fetch('table.json')
          .then(res => res.json())
            .then(data =>{
                ///console.log(data);
                table(data);
            })
        }
     function table(datas){
        // console.log(datas);
         content.innerHTML='';
         for(let value of datas){
           // console.log(value);
           content.innerHTML += `
           <tr>
                <td scope="row">${value.id}</td>
                <td>${value.name}</td>
                <td>${value.email}</td>
                <td>${value.state? "Activo": "Deleted"}</td>
            </tr>
         `
         }
     }   


        /****Fetch Api */
        // fetch('https://randomuser.me/api/') // ist api public
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data.results['0'].email);
        //     content.innerHTML = `
        //     <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
        //     <p>NAme:${data.results[0].name.last}</p>
        //     `
        // })
        /******fetch textapi */
            // content.innerHTML = `<p>dsadadad</p>`;
            // fetch('text.txt') // can ber (/dsada/dsad.js)
            // //.then(data =>  data.text()) //is a promise
            // .then(res => {
            //     console.log(res.text()); // its a promise
            // })
            // .then(data =>{
            //     console.log(data);
            //     content.innerHTML = `${data}`;
            // })

