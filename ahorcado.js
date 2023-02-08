let palabrasAgregadas = ["EOLICA", "SOLAR", "BIOMASA", "BIOGAS", "GEOTERMIA", "HIDROGENO"];
let palabraSeleccionada = "";
let palabra = document.getElementById("textAreaAgregarPalabra");
let tablero = document.getElementById("horca").getContext("2d");
let letras = [];
let errores = 8;
let letrasIncorrectas = [];
let palabraCorrecta = "";
let letraAcertadas = [];

function ReiniciarValores() {
    palabraSeleccionada = "";
    letras = [];
    errores = 8;
    letrasIncorrectas = [];
    palabraCorrecta = "";
    letraAcertadas = [];
    document.querySelector(".mensajePerdiste").style.display = "none";
    document.querySelector(".mensajeGanaste").style.display = "none";
    document.querySelector(".botonRendirse").style.display = "inline";
}
function IniciarJuego()
{
    ReiniciarValores();
    AlternarElementosNuevoJuego();
    SeleccionarPalabra();
    DibujarCanvas();
    DibujarGuiones();

    document.onkeyup = (e) => {
        let letra = e.key.toUpperCase();
        if (document.getElementById("dibujoAhorcado").style.display != "none") {
            if (errores >= 0) {
                if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
                    if (palabraSeleccionada.includes(letra)) {
                        adicionarLetraCorrecta(palabraSeleccionada.indexOf(letra))
                        for (let i = 0; i < palabraSeleccionada.length; i++) {
                            if (palabraSeleccionada[i] === letra) {
                                EscribirLetraCorrecta(i);
                                verificarVencedor(letra);
                            }
                        }
                    }
                // si el usuario cometió más errores de los que son permitidos, 
                //llama las funciones que dibujan el ahorcado y exibe el mensaje de fin de juego
                    else {
                        console.log(errores);
                        if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return
                        DibujarMuñeco(errores)
                        verificarFinJuego(letra)
                    }
                }
            }
            else {
                alert('Excediste el limite de letras incorrectas');
            } 
        }
    };
}
function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSeleccionada[i].toUpperCase()
}
//Verifica si el usuario ha ganado
function verificarVencedor(letra) {
    letraAcertadas.push(letra.toUpperCase());
    if (letraAcertadas.length == palabraSeleccionada.length) {
        ganaste();
    }
}
function verificarFinJuego(letra) {
    //checa si la letra ha sido incluída en el array de  las letras correctas o incorrectas
    if(letraAcertadas.length < palabraSeleccionada.length) { 
        //incluye las letras ya digitadas en el array
        letrasIncorrectas.push(letra);
        MostrarLetraIncorrecta();
        //valida se el usuário cometió el numero maximo de errores
        // if (letrasIncorrectas.length > errores) {
        if (errores < 0) {
            perdiste();
        }
        else if(letraAcertadas.length < palabraSeleccionada.length) {
            // MostrarLetraIncorrecta(letra);
            EscribirLetraIncorrecta(letra, errores)
        }
    }
} 
function MostrarLetraIncorrecta()
{
    errores -= 1;
}
// Verifica que la tecla oprimida sea una letra
function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && ((keyCode >= 65 && keyCode <= 90) || keyCode == 192)) {
        return true;
    } else {
        return false;
    }
}
// Verifica si la letra ya fue presionada anteriormente 
function verificarLetraClicada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
        letras.push(key);
        return false; 
    }
    else {
        return true;
    }
}
function AgregarPalabra()
{
    AlternarElementosNuevaPalabra();
}
function SeleccionarPalabra()
{
    let palabraSecreta = palabrasAgregadas[Math.floor(Math.random() * palabrasAgregadas.length)];
    palabraSeleccionada = palabraSecreta;
}
function AlternarElementosNuevoJuego()
{
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("dibujoAhorcado").style.display = "block";
    document.getElementById("agregandoPalabra").style.display = "none";
}
function MenuPrincipal() 
{
    document.getElementById("menuPrincipal").style.display = "block";
    document.getElementById("agregandoPalabra").style.display = "none";
}
function AlternarElementosNuevaPalabra()
{
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("agregandoPalabra").style.display ="block";
    document.getElementById("dibujoAhorcado").style.display = "none";

}
function GuardarYJugar()
{
    let regexPalabra = /^[a-zA-Z]+/;
    let palabraAgregada = palabra.value.toUpperCase();
    let palabraValida = regexPalabra.test(palabraAgregada);

    if (palabraValida) {
        palabrasAgregadas.push(palabraAgregada);
        palabra.value = "";
        IniciarJuego();
    }else{
        alert("Por favor, ingrese una palabra valida!");
    }
}
function perdiste() {
    document.querySelector(".mensajePerdiste").style.display = "block";
}
function ganaste() {
    document.querySelector(".mensajeGanaste").style.display = "block";
    document.querySelector(".botonRendirse").style.display = "none";
}  
function AlternarElementosMenuPrincipal() {
    document.getElementById("menuPrincipal").style.display = "block";
    document.getElementById("dibujoAhorcado").style.display ="none";
    document.getElementById("agregandoPalabra").style.display ="none";
}
function Rendirse() {
    alert("La palabra era: " + palabraSeleccionada);
    AlternarElementosMenuPrincipal();
    MenuPrincipal();
}