
//desktop start menu

$('.start-btn').on('click', function(e){
   e.preventDefault();
  $(this).toggleClass('active');
  $('.start-menu').toggleClass('open');
});


//desktop draggables

$( function() {
  $( "#draggable1" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
    });
    $( "#draggable2" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
    });
    $( "#draggable3" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
    $( "#draggable4" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
    $( "#draggable5" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
    $( "#draggable6" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
    $( "#draggable7" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
  });

$(function () {
  $(".drag").draggable({            
    stack: ".drag"
  });
});




//desktop open and close windows

$(document).ready(function(){
  $("#exit-about").click(function(){
    $(".about-window").hide();
  });
  $("#about-icon").click(function(){
    $(".about-window").show();
  });


  $("#exit-archive").click(function(){
    $(".archive-window").hide();
  });
  $("#archive-icon").click(function(){
    $(".archive-window").show();
  });


  $("#exit-radio").click(function(){
    $(".radio-window").hide();
  });
  $("#radio-icon").click(function(){
    $(".radio-window").show();
  });


  $("#exit-shop").click(function(){
    $(".shop-window").hide();
  });
  $("#shop-icon").click(function(){
    $(".shop-window").show();
  });


  $("#exit-chat").click(function(){
    $(".chat-window").hide();
  });
  $("#chat-icon").click(function(){
    $(".chat-window").show();
  });


  $("#exit-contact").click(function(){
    $(".contact-window").hide();
  });
  $("#contact-icon").click(function(){
    $(".contact-window").show();
  });

  $("#exit-twitch").click(function(){
    $(".twitch-window").hide();
  });
  $("#twitch-icon").click(function(){
    $(".twitch-window").show();
  });
});





//cursor orange

 $(document).mousemove(function (e) {
            $(".pointer").css({ left: e.pageX, top: e.pageY });
        });


