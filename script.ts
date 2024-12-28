/* console.log("Hola mundo en TypeScript que pro");

let numero: number = 10;
console.log(numero); */

/* Booleans */
let sabesJavaScript: boolean = false;

if(sabesJavaScript){
    console.log("Estas listo para TypeScript");
}else{
    console.log("Tienes que aprender JavaScript primero");
}

/* Number */
/* let barcelona: number = 3;
let realMadrid: number = 3;
let estaMessi: boolean = true;
let word: string = "Hola mundo";

function jugarPartido(equipo1:number, equipo2:number, estaMessi:boolean):void{
    let motivo: string = "";
    if(estaMessi){
        equipo1 += 1;
        motivo = " porque Messi estaba jugando";
    }
    if(equipo1 > equipo2){
        console.log(`Gano el barcelona`+ motivo);
    }else if(equipo1 < equipo2){
        console.log(`Gano el realMadrid`);
    }else{
        console.log("Empate");
    }
}

jugarPartido(barcelona, realMadrid, estaMessi); */

/* Any */

/* let disney:any= "star wars y marvel";
console.log(disney);

disney = 10;
console.log(disney);

disney = true;
console.log(disney); */

/* Arrays */

/* let arregloNumeros: number[] = [1,2,3,4,5];
let arregloTexto: string[] = ["HTML", "CSS", "JavaScript"];

console.log(arregloTexto.indexOf("HTML"));
console.log(arregloNumeros.reverse()); */

/* Objects */

/* type Sayayin={
    nombre: string,
    poder: number,
    sayayin: boolean,
}

let peleador1:Sayayin={
    nombre: "Goku",
    poder: 3000000,
    sayayin: true,
}
let peleador2={
    nombre: "freezer",
    poder: 120000000,
}

function pelear(peleador1:any, peleador2:any):void{
    if(peleador1.sayayin){
        peleador1.poder *= 50;
    }
    if(peleador1.poder > peleador2.poder){
        console.log(`${peleador1.nombre} gano la pelea porque su nivel de pelea es de ${peleador1.poder} unidades`);
    }else if(peleador1.poder < peleador2.poder){
        console.log(`${peleador2.nombre} gano la pelea porque su nivel de pelea es de ${peleador2.poder} unidades`);
    }else{
        console.log("Empate");
    }
}

pelear(peleador1, peleador2); */

/* Interface */

/* interface Programador{
    nombre: string,
    lenguajes: string[],
    tomarCafe: boolean | null,
}

let programador1: Programador={
    nombre: "Carlos",
    lenguajes: ["HTML", "CSS", "JavaScript"],
    tomarCafe: true,
}
let programador2: Programador={
    nombre: "Juan",
    lenguajes: ["HTML", "CSS", "JavaScript", "TypeScript"],
    tomarCafe: null,
}

function enviarCv(programador1:Programador):void{
    console.log(`El cv pertece a ${programador1.nombre} y sabe los siguientes lenguajes ${programador1.lenguajes}`);
}

enviarCv(programador1);
enviarCv(programador2); */

/* POO */

/* class Pelicula{

    nombre?: string;
    protagonistas?: string[];
    actores?: string[];
    director?: string;
    anio?: number;

    constructor(nombre:string, protagonistas:string[], actores:string[], director:string, anio:number){
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores,
        this.director = director,
        this.anio = anio
    }
    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} se esta proyectando en el cine`);
    }
}
const pelicula1 = new Pelicula("El señor de los anillos", ["Frodo", "Sam"], ["Viggo Mortensen", "Orlando Bloom"], "Peter Jackson", 2001);
const pelicula2 = new Pelicula("the batman", ["Batman", "Catwoman"], ["Robert Pattinson", "Zoe Kravitz"], "Matt Reeves", 2022);

console.log(pelicula1.proyectarEnCine());
console.log(pelicula2); */

/* Encapsulamiento y genericos */

/* class Sorteo<T>{
    private ticket?: T;

    constructor(private nombre: string){}

    setTicket(ticket:T){
        this.ticket = ticket;
    }
    getTicket(){
        return this.ticket;

    }
    public sortear():string{
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }

}

//let sorteo=new Sorteo<number>("Sergiecode");
//sorteo.setTicket(7) 
let sorteo=new Sorteo<string>("Sergiecode");
sorteo.setTicket("A7");
console.log(sorteo.sortear()); */