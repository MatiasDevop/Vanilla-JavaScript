var form = document.getElementById('formu');
var res = document.getElementById('response');
form.addEventListener('submit', function(e){
    e.preventDefault();// avoid whatever come from chrome
    console.log("it wasa click!");
    var datas = new FormData(form);

    console.log(datas);
    console.log(datas.get('user'));
    console.log(datas.get('pass'));
    // ASYNCRON FORM FETCH
    fetch('https://randomuser.me/api/', {
        method: 'POST',
        body: datas
    })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data === 'error'){
                res.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Fill all properties
                </div>
                `
            }else{
                res.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `
            }
        })
})