function verificaRockInRio()
{
    var node = document.getElementsByClassName("videoOculto");

    for(var i = 0; i!=node.length; i++)
    {
        node[i].style.display = 'flex';
    }
    
    var h3Node = document.querySelector("main #conteudo #assides #primeiroAsside a h3");
    h3Node.innerHTML = "Tudo sobre o Rock In Rio";
}

