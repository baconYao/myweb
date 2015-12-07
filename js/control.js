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
      // big photo
      $("#mit3").on({
        mouseenter: function(){
          $(this).addClass("active grey");
        },
        mouseleave: function(){
          $(this).removeClass("active grey");
        },
        click: function(){
          $('html,body').animate({scrollTop:$('#bigphoto').offset().top},600);
        }
      });
      // My story
      $("#mit4").on({
        mouseenter: function(){
          $(this).addClass("active teal");
        },
        mouseleave: function(){
          $(this).removeClass("active teal");
        },
        click: function(){
          $('html,body').animate({scrollTop:$('#mystory').offset().top},600);
        }
      });

      // our story
      $("#mit5").on({
        mouseenter: function(){
          $(this).addClass("active yellow");
        },
        mouseleave: function(){
          $(this).removeClass("active yellow");
        },
        click: function(){
          $('html,body').animate({scrollTop:$('#contactme').offset().top},600);
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

      //control heart icon 
      $("#heart_icon").on({
        mouseenter: function(){
          $(this).addClass('animated rubberBand');
        },
        mouseleave: function(){
          $(this).removeClass('animated rubberBand');
        },
      });

      // show the modal
      $("#showmybtn").click(function(){
        $('.ui.modal')
          .modal('show');
      });

      // contact me form control
      $('.ui.form.segment')
        .form({
          on: 'blur',
          fields: {
            empty: {
              identifier  : 'yourname',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your name'
                }
              ]
            },
            email: {
              identifier  : 'youremail',
              rules: [
                {
                  type   : 'email',
                  prompt : 'Please enter a valid e-mail'
                }
              ]
            },
            tellempty: {
              identifier  : 'tellmewhat',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter value in You want to tell me what'
                }
              ]
            }
          }
        });


      //aniview control
      var options = {
          animateThreshold: 100,
          scrollPollInterval: 20
      }
      $('.aniview').AniView(options);


});
