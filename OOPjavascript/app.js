const MovieOne ={
    name:"harry",
    id: 01,
    reproduction(){
        return `reproducing a movie....${this.name}`;
    }
}

class Movie{
    
    constructor(name, id){
        this.name = name; //"Harry";
        this.id = id; //1;
    }
    reproduce(){
        return `reproduccion movie ${this.name}`;
    }
}
class Serie extends Movie{

    constructor(name, id, cap){
        super(name,id);
        this.cap = cap;
    }
    reproduceChapter(){
        return `Reproducing chaper..${this.cap}...${this.name}`;
    }
}
const movieOne = new Movie("harry", 1);
const movieTwo = new Movie("spider",2);
const serieOne = new Serie('Dexter', 3, 55);
console.log(movieOne.reproduce);
console.log(movieTwo);
console.log(serieOne.reproduceChapter());