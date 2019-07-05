  

function capturar(){
    var texto = document.getElementById("idele");
    var ul =document.getElementById("miul");

    var li = document.createElement("li");
    var li_texto= document.createTextNode(texto.value);

    li.appendChild(li_texto);
    ul.appendChild(li);

}
