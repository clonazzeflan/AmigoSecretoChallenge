    // El principal objetivo de este desafío es fortalecer tus habilidades
    // en lógica de programación. Aquí deberás desarrollar la lógica para 
    // resolver el problema.

    // Crear un array para almacenar los nombres
    let listaAmigos = [] ;
    let nuevoAmigo = [] ;
    let liArray=document.getElementById("listaAmigos");
    let amigoSeleccionado ;
    let amigoSorteado
    
    // Capturar el valor del campo de entrada para listaAmigos

    function agregarAmigo () {
        if (document.getElementById("amigo").value == ""){
            alert("Atención, debes escribir el nombre de un amigo para agregarlo al sorteo.");
            return 
        } else { 
            let amigo = document.getElementById("amigo")
               if (listaAmigos.includes(amigo.value)) {
                alert("¡Ya incluiste ese amigo en tu lista!")
                limpiarCampo()
               } else {
                    listaAmigos.push(amigo.value)
                    nuevoAmigo.push(amigo.value)
                    console.log(`lista de amigos: ${listaAmigos}`)
                    actualizarArray();
                    limpiarLista();
               }
        }
    }

    function actualizarArray(){
    //limpiar la lista  
        liArray.innerHTML=""; 
    // bucle for iteración sobre array
        for (let i=0; i<listaAmigos.length;i++){
            let li = document.createElement("li");
            li.textContent = listaAmigos[i];
            liArray.appendChild(li)
        }
    }
    function mostrarListaAmigos() {
        elementoHTML = document.getElementById("listaAmigos");
    }

    function limpiarLista(){
        document.getElementById("amigo").value="";
    }

    function sortearAmigo(){
    
        if (listaAmigos.length === 0) { 
            alert("Primero debes ingresar nombres a la lista para realizar el");
            return
        } else {
            amigoSeleccionado = Math.floor(Math.random() * listaAmigos.length);
            amigoSorteado = listaAmigos[amigoSeleccionado]
        
            document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
        }
    }
    