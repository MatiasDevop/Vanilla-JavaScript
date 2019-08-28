const btnbutton = document.querySelector('#btn');
const buttons = document.querySelector('#buttons');
const font = document.querySelector('#font');
(() =>{
    btnbutton.addEventListener('click', addButons);
    buttons.addEventListener('click', delegation);
})();

(()=>{
    const color = localStorage.getItem('fontcolor');
    if (color === null) {
        font.className = 'bg-dark';
    }else{
        font.className = color;
    }
})();
function delegation(e){
    e.preventDefault();
    //console.log(e.target.classList[1]); // target to detect button
    const colorbtn = e.target.classList[1];
    switch (colorbtn) {
        case ('btn-primary'):
            //console.log('click in primary');
            font.className = 'bg-primary';
            localStorage.setItem('fontcolor', font.className);
            break;
            case ('btn-secondary'):
            font.className = 'bg-secondary';
            localStorage.setItem('fontcolor', font.className);
            break;
            case ('btn-danger'):
            font.className = 'bg-danger';
            localStorage.setItem('fontcolor', font.className);
            break;
            case ('btn-success'):
            font.className = 'bg-success';
            localStorage.setItem('fontcolor', font.className);
            break;
            case ('btn-warning'):
            font.className = 'bg-warning';
            localStorage.setItem('fontcolor', font.className);
            break;
    
        default:
            break;
    }
}

function addButons(e){
    e.preventDefault();
    buttons.innerHTML =`
        <button class="btn btn-primary">primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-danger">Danger</button>
        <button class="btn btn-success">success</button>
        <button class="btn btn-warning">warning</button>
     `
    // let color=localStorage.getItem('fontcolor');
    // font.className = color;
}





// //IIFE (inmediately Invoked Function expression)

// ((name) => { // functions arrow or name="ingnacio"
//     console.log(`hellow subscriptorres ${name}`);
// })('jaunito');
// (function subscribete(){
//     console.log(`hellow subscriptorres`);
// })();//
// function subscribe(){
//     console.log('hi ober ther');
// }
// subscribe();