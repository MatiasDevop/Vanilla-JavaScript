const array = ['html',15, true];
console.log(array[1]);
var object ={
    name:'HTML',
    time: 15,
    state:true, 
    chapters:{
        name:'Intro',
        videos: 20
    }
}
//console.log(object['name']);// object.name is too
//console.log(object.chapters);
// array of objects
var arrayObjects=[
    {
        name:'HTML',
        state:true
    },
    {
        name:'CSS',
        state:true
    },
    {
        name:'JS',
        state:false
    }
]
// console.log(arrayObjects[0]);
for (let index of arrayObjects) {
    console.log(index.name);
}