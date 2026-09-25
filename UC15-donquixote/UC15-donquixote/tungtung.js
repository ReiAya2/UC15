function mudarTexto() {
document.getElementById
("titulo").textContent = "voce clicou no botão!";

}

function mudarCor() {
document.getElementById("mensagem").style.color = "blue";



}

let contador = 0;

function aumentar() {
contador++;


document.getElementById("numero").textContent = contador;



}


function diminuir() {

    contador--;

    document.getElementById("numero").textContent = contador; 
    
}