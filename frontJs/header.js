$(window).on('load', function() {
    $( "#buscarBtn" ).on( "click", function() {
        $("#inputBuscarBtn").attr("id", "inputBuscarBtnExpandido")
        .attr("class", "placeInputBuscarBtnCinza")
        .focus();

        $("#iconeBuscar").attr("id", "iconeBuscarExpandido");
    });
    $( "#inputBuscarBtn" ).on("blur", function()
    {
        diminuiBuscarBtn();
    });
}); 

function diminuiBuscarBtn()
{
    $("#inputBuscarBtnExpandido").attr("id", "inputBuscarBtn")
    .attr("class", "placeInputBuscarBtnBranco");

    $("#iconeBuscarExpandido").attr("id", "iconeBuscar");
}

function verificaInputBuscarMenu() 
{
    var botaoNode = $("#inputBuscarBtn").length ? $("#inputBuscarBtn") : $("#inputBuscarBtnExpandido");
    
    if (window.innerWidth < 1050 && botaoNode.css("display") !='none')
    {
        botaoNode.css("display", "none");

        $("#textoMenu").css("display", "none");

        var iconeNode = $("#iconeBuscar").length ? $("#iconeBuscar") : $("#iconeBuscarExpandido");
        iconeNode.attr("id", "iconeBuscarTelaPequena");
    }
    else if(window.innerWidth > 1050)
    {
        botaoNode.css("display", "flex");

        $("#textoMenu").css("display", "inline");
        $("#iconeBuscarTelaPequena").attr("id", "iconeBuscar");
        
        diminuiBuscarBtn();    
    }
}

function verificaMenuPrimeiraNav()
{
    if (window.innerWidth < 780)
    {
        $(".aHoverAzul").css("display", "none");
        $("#entrarBtn").text("Entre");
    }
    else if (window.innerWidth > 780)
    {
        $(".aHoverAzul").css("display", "inline");
        $("#entrarBtn").text("Entrar >");
    }
}

window.addEventListener('resize', function(){
    verificaInputBuscarMenu();
    verificaMenuPrimeiraNav();
});