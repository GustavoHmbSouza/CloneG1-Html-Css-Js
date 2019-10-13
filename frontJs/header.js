function aumentaBuscarBtn()
{
    var elementoInput = document.querySelector('#segundaNav #buscarBtn #inputBuscarBtn');
    var elementoI = document.querySelector('#segundaNav #buscarBtn #iconeBuscar');

    if(elementoInput)
    {
        elementoInput.id = "inputBuscarBtnExpandido"; 
        elementoInput.className = "placeInputBuscarBtnCinza";
    
        elementoI.id = "iconeBuscarExpandido";
    }
}

function diminuiBuscarBtn()
{
    var elementoInput = document.querySelector('#segundaNav #buscarBtn #inputBuscarBtnExpandido');
    var elementoI = document.querySelector('#segundaNav #buscarBtn #iconeBuscarExpandido');

    if(elementoInput)
    {
        elementoInput.id = "inputBuscarBtn"; 
        elementoInput.className = "placeInputBuscarBtnBranco";
        
        if(elementoI)
        {
            elementoI.id = "iconeBuscar";
        }
    }
}

function verificaInputBuscarMenu() 
{
    var botaoNode = document.querySelector("header #segundaNav #buscarBtn #inputBuscarBtn");
    if(!botaoNode)
    {
        botaoNode = document.querySelector("header #segundaNav #buscarBtn #inputBuscarBtnExpandido");
    }

    if (window.innerWidth < 1050 && botaoNode.style.display !='none')
    {
        botaoNode.style.display =  'none';

        var TextoMenuNode = document.querySelector("header #segundaNav #menuSegundoNav #textoMenu");
        TextoMenuNode.style.display = 'none';

        var iconeNode = document.querySelector("header #segundaNav #buscarBtn #iconeBuscarExpandido");
        if(!iconeNode)
        {
            var iconeNode = document.querySelector("header #segundaNav #buscarBtn #iconeBuscar");
        }

        iconeNode.id = "iconeBuscarTelaPequena";
    }
    else if(window.innerWidth > 1050)
    {
        botaoNode.style.display =  'flex';

        var TextoMenuNode = document.querySelector("header #segundaNav #menuSegundoNav #textoMenu");
        var iconeNode = document.querySelector("header #segundaNav #buscarBtn #iconeBuscarTelaPequena");
        if(iconeNode)
        {
            iconeNode.id = "iconeBuscar";
            diminuiBuscarBtn();
            TextoMenuNode.style.display = 'inline';
        }
    }
}

function verificaMenuPrimeiraNav()
{
    if (window.innerWidth < 780)
    {
        var MenuNode = document.getElementsByClassName("aHoverAzul");

        for(var i = 0; i!=MenuNode.length; i++)
        {
            MenuNode[i].style.display = 'none';
        }

        var MenuNode = document.querySelector("header #primeiraNav #menu li #entrarBtn");
        MenuNode.innerHTML = "Entre"; 
    }
    else if (window.innerWidth > 780)
    {
        var MenuNode = document.getElementsByClassName("aHoverAzul");
        for(var i = 0; i!=MenuNode.length; i++)
        {
            MenuNode[i].style.display = 'inline';
        }   
        var MenuNode = document.querySelector("header #primeiraNav #menu li #entrarBtn");
        MenuNode.innerHTML = "Entrar >";  
    }
}

window.addEventListener('resize', function(){
    verificaInputBuscarMenu();
    verificaMenuPrimeiraNav();
});
