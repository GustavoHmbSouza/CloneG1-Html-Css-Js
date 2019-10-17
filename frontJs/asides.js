$(window).on('load', function() {
    $( "#primeiroAsside" ).on( "click", function() {
        $(".videoOculto").css("display", "flex");
        $("#primeiroAsside a h3").text("Tudo sobre o Rock In Rio");
    });
}); 
