$(document).ready(function(){
  //control the top sidebar menu
  $("#mbutton").on({
    mouseenter: function(){
      $(this).addClass('animated jello');
    },
    mouseleave: function(){
      $(this).removeClass("animated jello");
    },
    click: function(){
      $('.ui.sidebar')
      .sidebar('setting', 'transition', 'push')
      .sidebar('toggle') ;
    }
  });

  //control the top sidebar menu's items
  //home
  $("#mit1").on({
    mouseenter: function(){
      $(this).addClass("active purple");
    },
    mouseleave: function(){
      $(this).removeClass("active purple");
    },
    click: function(){
      $('html,body').animate({scrollTop:$('#home').offset().top},600);
    }
  });
  // self introduction
  $("#mit2").on({
    mouseenter: function(){
      $(this).addClass("active orange");
    },
    mouseleave: function(){
      $(this).removeClass("active orange");
    },
    click: function(){
      $('html,body').animate({scrollTop:$('#selfIntroduction').offset().top},600);
    }
  });

  // projects
  $("#mit5").on({
    mouseenter: function(){
      $(this).addClass("active yellow");
    },
    mouseleave: function(){
      $(this).removeClass("active yellow");
    },
    click: function(){
      $('html,body').animate({scrollTop:$('#projectField').offset().top},600);
    }
  });

  //control scroll back to top button
  $("#gotopbutton").on({
    mouseenter: function(){
      $(this).addClass('animated shake');
    },
    mouseleave: function(){
      $(this).removeClass('animated shake');
    },
    click: function(){
      $('html,body').animate({scrollTop:$('#home').offset().top},600);
    }
  });

  // show the modal
  $("#showmybtn").click(function(){
    $('.ui.modal')
      .modal('show');
  });


  //aniview control
  var options = {
      animateThreshold: 100,
      scrollPollInterval: 20
  }
  $('.aniview').AniView(options);


});
