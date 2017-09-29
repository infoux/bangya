
$(document).ready(function () {

  $(window).resize(function(){
    $("header *").removeAttr("style");
    $(".no-resize").removeAttr("style");
  });


  $(".toggle .search").click(function(){
    $(this).toggleClass("active");
    $(this).find("i").toggleClass("icon-close").toggleClass("icon-search");
    $("#header .search-form").toggle();

    $("body").toggleClass("modal");

    if ($(".toggle .menu").hasClass("active")) {
      $(".toggle .menu").removeClass("active");
      $(".toggle .menu").find("i").toggleClass("icon-close").toggleClass("icon-menu");
      $("#header .buttons").toggle();
    }
  });


  $(".toggle .menu").click(function(){
    $(this).toggleClass("active");
    $(this).find("i").toggleClass("icon-close").toggleClass("icon-menu");
    $("#header .buttons").toggle();

    $("body").toggleClass("modal");

    if ($(".toggle .search").hasClass("active")) {
      $(".toggle .search").removeClass("active");
      $(".toggle .search").find("i").toggleClass("icon-close").toggleClass("icon-search");
      $("#header .search-form").toggle();
    }
  });

  $("div.count .icon-plus-circle").click(function(){
  		$(this).parent().find("input").val() + 1;
      var num = +$(this).parent().find("input").val() + 1;
      $(this).parent().find("input").val(num);
  });


    $("div.count .icon-minus-circle").click(function(){
    		$(this).parent().find("input").val() + 1;
        var num = +$(this).parent().find("input").val() - 1;
        if (num <= 0) {
          num = 0;
        }
        $(this).parent().find("input").val(num);
    });


    $("button.region").click(function(){
          $(this).toggleClass("active");

          var offset = $(this).offset();

          $("div.region").css({
            top: offset.top, left: offset.left
          });


          $("div.region").toggle();



        });

    $("button.count").click(function(){
      $(this).toggleClass("active");
      $("div.count").toggle();

      var offset = $(this).offset();
      $("div.count .outline").css({top: offset.top, left: offset.left });
      $("div.count").css("height", $(document).height());
      if ($(window).width() < 1199) {
        $('html, body').animate({scrollTop: $(this).offset().top - 60}, 500);
      }
    });

    $("div.count button").click(function(){
      $("button.count").toggleClass("active");
      $("div.count").toggle();

      var txt = "성인 "+ $("#age01").val() +" / 청소년"+ $("#age02").val() +" / 유아"+ $("#age03").val() +"";

      $("button.count strong").html(txt);

    });



  $('.input-date').dateRangePicker({
    separator: ' ~ ',
    language:'ko',
    getValue: function()
  	{
  		return $(this).find("strong").html();
  	},
  	setValue: function(s)
  	{
  		$(this).find("strong").html(s);
    }


  });


});
