$(document).ready(function(){

		    $('#l').attr('src', '../img/logi.png');
            $('#l').attr('width', '100px');
            $('#l').css('padding-top', '15px');
            $('#l').css('margin-left', '100px');
            $('.barra').addClass('fixed');
            $('.s').removeClass('menu');
            $('.logo').css('float', 'left');
            $('.banner').css('margin-top', '0px');
            $('.logo').css('width', '100px');
            $('nav').css('float', 'right');
            $('nav').css('margin-right', '80px');
            $('nav').addClass('down');
            $('nav').removeClass('int');
            $('#l').hover(function(){
            $('#l').attr('src', '../img/logir.png');
            },function(){
            $('#l').attr('src', '../img/logi.png');
            });
            
});	
	
