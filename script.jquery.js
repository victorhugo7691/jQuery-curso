$(document).ready(function(){
    $('#idTitulo').css("color", "blue");
    
    $('#btnVermelho').click(function(){
        $("#idTitulo")
            .css("color", "red")
            .css("background-color", "silver")
            .fadeIn(3000);
        $("#idMensagem")
            .text("Cor alterada para vermelho!")
            .fadeIn(3000)
            .css({
                border: '2px solid',
                backgroundColor:'#F08080'
            })
            //ou .css('border', '2px solid')
            .delay(1000)
            .fadeOut('fast');
    });

    $('#idEsconde').click(function(){
        $('#idTitulo').fadeOut('fast');
        $("#idMensagem")
            .fadeIn()
            .delay(1000)
            .fadeOut('fast');
    });

    //slide show
    $("#opc2").click(function(){
        $("#img1").hide();
        $("#img2").show();
    });
    
    $("#opc1").click(function(){
        $("#img2").hide();
        $("#img1").show();
    });
});

/*ou para verificar se o documento carregou
$(function(){
    $('button').click(function(){
        $('h1').hide();
    });
});*/