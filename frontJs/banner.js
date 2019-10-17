function verificaSegundoTerceiroBanner()
{
    var MenuNode = $("#segundoTerceiroBanner");
    if (window.innerWidth < 810 && MenuNode.css("display") != 'none')
    {
        MenuNode.css("display","none");
    }
    else if (window.innerWidth > 810 && MenuNode.css("display") != 'block')
    {
        MenuNode.css("display","block");
    }
}

function verificaBanner()
{
    var MenuNode = $("#banner");

    if (window.innerWidth < 520 && MenuNode.css("display") != 'none')
    {
        MenuNode.css("display", "none");
    }
    else if (window.innerWidth > 520 && MenuNode.css("display") != 'flex')
    {
        MenuNode.css("display", "flex");
    }
}

window.addEventListener('resize', function(){
    verificaSegundoTerceiroBanner();
    verificaBanner();
});