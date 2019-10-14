function verificaNoticias()
{
    var MenuNode = document.querySelector("main #conteudo #noticias");

    if (window.innerWidth < 950 && MenuNode.style.display != 'none')
    {
        MenuNode.style.display = 'none';
    }
    else if (window.innerWidth > 950 && MenuNode.style.display != 'block')
    {
        MenuNode.style.display = 'block';
    }
}


window.addEventListener('resize', function(){
    verificaNoticias();
});