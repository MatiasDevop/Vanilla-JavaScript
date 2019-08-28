//GLobal variables
const formulario = document.querySelector('#formul');
const listActivs = document.getElementById('listActivities');
let arrayActis= [];


//

//functions
const CreateItem= (activity) => {
    let item = {
        activity: activity,
        state: false
    }
    
    arrayActis.push(item);
    return item;
}
const SaveDB = ()=>{
    localStorage.setItem('rutin', JSON.stringify(arrayActis));
    PintarDB();
}

const PintarDB = () => {
    listActivs.innerHTML = '';
    arrayActis = JSON.parse(localStorage.getItem('rutin'));
    if(arrayActis === null){
        arrayActis =[];
    }else{
        arrayActis.forEach(element => {
            if(element.state){
                listActivs.innerHTML +=`<div class="alert alert-primary" role="alert">
                <i class="material-icons float-left mr-2">accessibility</i>
                <b>${element.activity}</b>- ${element.state}<span class="float-right">
                    <i class="material-icons">done</i>
                    <i class="material-icons">delete</i></span></div>`;
            }else{
                listActivs.innerHTML +=`<div class="alert alert-danger" role="alert">
            <i class="material-icons float-left mr-2">accessibility</i>
            <b>${element.activity}</b>- ${element.state}<span class="float-right">
                <i class="material-icons">done</i>
                <i class="material-icons">delete</i></span></div>`;
            }
            
        });
    }
    //console.log(arrayActis);
}

const DeleteDB = (activity) => {
    console.log(activity);
    let indexArray;
    arrayActis.forEach((element, index) => {

        if(element.activity === activity){
            indexArray = index;
            //localStorage.removeItem(indexArray);
        }
        console.log(index);
    });
    arrayActis.splice(indexArray, 1); // to remove always , 1
    SaveDB();
}

const EditDB = (activity) =>{

    // there are two manners to do this instruccions + return or if not
    let indexArray = arrayActis.findIndex((element)=> element.activity ===
     activity);
    // let indexArray = arrayActis.findIndex((element)=>{
    //     return  element.activity === activity
    //    });

    console.log(arrayActis[indexArray]);
    arrayActis[indexArray].state = true ;
    console.log();
    SaveDB();
}
// EventListener

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    let activityUI = document.querySelector('#activity').value;

    CreateItem(activityUI);
    SaveDB();

    formulario.reset();
   
    //SaveActivityDB(activityUI);
});
document.addEventListener('DOMContentLoaded', PintarDB);
listActivs.addEventListener('click', (e) => {
    e.preventDefault();
    //  console.log(e.path[2].childNodes[3].innerHTML);
    //  console.log(e.target.innerHTML);
    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        //console.log(e.path[2].childNodes[3].innerHTML);
        const text = e.path[2].childNodes[3].innerHTML;
        if(e.target.innerHTML === 'delete'){
            // action delete
            DeleteDB(text);
        }
        if(e.target.innerHTML === 'done'){
            //action edit
            EditDB(text);
           
        }
    }
})