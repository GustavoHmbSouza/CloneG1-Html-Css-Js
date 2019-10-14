function verificaSegundoTerceiroBanner()
{
    var MenuNode = document.querySelector("main #banner #segundoTerceiroBanner");

    if (window.innerWidth < 810 && MenuNode.style.display != 'none')
    {
        MenuNode.style.display = 'none';
    }
    else if (window.innerWidth > 810 && MenuNode.style.display != 'block')
    {
        MenuNode.style.display = 'block';
    }
}

function verificaBanner()
{
    var MenuNode = document.querySelector("main #banner");

    if (window.innerWidth < 520 && MenuNode.style.display != 'none')
    {
        MenuNode.style.display = 'none';
    }
    else if (window.innerWidth > 520 && MenuNode.style.display != 'flex')
    {
        MenuNode.style.display = 'flex';
    }
}

window.addEventListener('resize', function(){
    verificaSegundoTerceiroBanner();
    verificaBanner();
});