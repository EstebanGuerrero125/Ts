const ventas ={
    total:50,
    cantidad:2,
    precio:20,
    nombre:"ropa"
}

const pedido ={
    nombre:"jaime",
    edad:45
}
ventas.total=70
const saludo = document.getElementById('saludo');

const texto = document.getElementById('texto');

if (saludo) {
    saludo.textContent = 'probando desde saludo';
  }

if(texto){
    texto.textContent = 'probando desde texto';
}

document.getElementById('boton1')?.addEventListener('click',()=>alert("Probando desde saludo"))
document.getElementById('boton2')?.addEventListener('click',()=>alert("Probando desde texto"))
console.log(ventas.total+10);

console.log("si concatena: "+ventas.total+10);
console.log("Prueba: "+pedido.nombre);

//////////////////////caracteristicas principales de Ts
let num1:number = 30
console.log(num1);

const atacar =(poder:string)=>{

    console.log(poder)
    console.log(poder.length)
}
atacar("pikauchuuu");

///////////////////funcion recursiva
(()=>{
    let valor:boolean =true;
    const titulo4 = document.getElementById('titulo4');
     if(titulo4)
         titulo4.textContent="prueba holamundo.ts"
    
})()
