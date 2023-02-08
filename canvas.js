function DibujarCanvas()
{
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "rgba(255, 255, 255, 0.096)";
    tablero.strokeStyle = "#1B2A36";

    tablero.fillRect(0,0,1160,300);
    tablero.beginPath();
    tablero.moveTo(480,200);
    tablero.lineTo(680,200);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(530,200);
    tablero.lineTo(530,20);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(530,20);
    tablero.lineTo(620,20);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(620,20);
    tablero.lineTo(620,50);
    tablero.stroke();
    tablero.closePath();
}
function DibujarGuiones()
{
    tablero.lineWidth = 3;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#7BC3F5";
    tablero.strokeStyle = "#1B2A36";

    let ancho = 400/palabraSeleccionada.length;
    for(let i = 0; i < palabraSeleccionada.length; i++)
    {
        tablero.moveTo(400 + (ancho * i), 250);
        tablero.lineTo(440 + (ancho * i), 250);
    }
    tablero.stroke();
    tablero.closePath();
}
function EscribirLetraCorrecta(index)
{
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 3;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#1B2A36";

    let ancho = 400 / palabraSeleccionada.length;
    tablero.fillText(palabraSeleccionada[index], 410 + (ancho * index), 240);
    tablero.stroke();
}
function EscribirLetraIncorrecta(letra, errorsLeft)
{
    tablero.font = 'bold 20px Inter';
    tablero.lineWidth = 1;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#1B2A36";

    tablero.fillText(letra, 280 + (40 * (10 - errorsLeft)), 290, 40);
    tablero.stroke();
}
function DibujarMuñeco()
{
    switch(errores)
    {
        case 5: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#1B2A36";
            
                tablero.beginPath();
                tablero.arc(620,70,20,0,(2 * 3.14));
                tablero.stroke();
                tablero.closePath();
            break;
        case 4: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#1B2A36";
        
                tablero.beginPath();
                tablero.moveTo(620,90);
                tablero.lineTo(620,150);
                tablero.stroke();
                tablero.closePath();
            break;
        case 3: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#1B2A36";
    
                tablero.beginPath();
                tablero.moveTo(620,150);
                tablero.lineTo(600,180);
                tablero.stroke();
                tablero.closePath();
            break;
        case 2: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#1B2A36";
        
                tablero.beginPath();
                tablero.moveTo(620,150);
                tablero.lineTo(640,180);
                tablero.stroke();
                tablero.closePath();
            break;
        case 1: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#1B2A36";
        
                tablero.beginPath();
                tablero.moveTo(620,100);
                tablero.lineTo(600,130);
                tablero.stroke();
                tablero.closePath();
            break;
        default: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#1B2A36";

                tablero.beginPath();
                tablero.moveTo(620,100);
                tablero.lineTo(640,130);
                tablero.stroke();
                tablero.closePath();
                tablero.lineWidth = 3;
            break;            
    }    
}

