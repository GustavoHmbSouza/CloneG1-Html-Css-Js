function verificaNoticias()
{
    var MenuNode = $("#noticias");

    if (window.innerWidth < 950 && MenuNode.css("display") != 'none')
    {
        MenuNode.css("display", "none");
    }
    else if (window.innerWidth > 950 && MenuNode.css("display") != 'block')
    {
        MenuNode.css("display", "block");
    }
}

window.addEventListener('resize', function(){
    verificaNoticias();
});