function habilitar(){
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    numero = document.getElementById("numero").value;

    val=0;
    if(nombre ==""){
        val++;
    }
    if(correo ==""){
        val++;
    }
    if(numero ==""){
        val++;
    }
    if(val == 0){
        document.getElementById("btn").disabled = false;
    }else{
        document.getElementById("btn").disabled = true;
    }
}
document.getElementById("nombre").addEventListener("keyup", habilitar);
document.getElementById("correo").addEventListener("keyup", habilitar);
document.getElementById("numero").addEventListener("keyup", habilitar);
document.getElementById("btn").addEventListener("click", () => {
    alert("Listo!!");
});