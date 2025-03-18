let amigos = [];

function agregarAmigo() {
    let nombre=document.getElementById("nombreAmigo").value.trim();

    if (nombre === "") {
        alert("ingrese los Nombre.");
        
    } else {
        amigos.push(nombre);
        document.getElementById("nombreAmigo").value= ""; 
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(function(amigo){
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe de ingresar mas de 2 amigos.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = "El amigo o La amiga secreto(a) es: "+ amigoSecreto;
}
