var lightbox = $('.gal a').simpleLightbox({showCounter: false});
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        820:{
            items:2,
            nav:false,
            margin:0
        },
        1200:{
            items:2,
            nav:true,
        }
    }
})
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 500, 'swing', function () {
 window.location.hash = target;
 });
 });


$(document).ready(function () {
        $("#callback").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
            e.preventDefault();
            var form_data = $(this).serialize(); // Собираем все данные из формы
            $.ajax({
                type: "POST", // Метод отправки
                url: "send.php", // Путь до php файла отправителя
                data: form_data,
                success: function () {
                    // Код в этом блоке выполняется при успешной отправке сообщения
                    alert("Ваше сообщение отправлено!");
                }
            });
        });
    });    


$(function(){
    
    $('.menuBurger').on('click', function(){
        
        $('.menu').slideToggle(300, function(){
            
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
        }
        
    });
    
 });
    
});