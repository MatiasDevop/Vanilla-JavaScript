// Localstorage: save strings of text , key  =>value
// set => to save
// get => to get
// const name  = 'ingnacio';
// localStorage.setItem('nameuser', name);

const nameLocalS= localStorage.getItem('nameuser');
console.log(nameLocalS);

localStorage.removeItem('nameuser');