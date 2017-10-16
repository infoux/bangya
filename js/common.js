
$(document).ready(function () {





  $(window).resize(function(){
    $(".no-resize").removeAttr("style");
    $(".no-resize .outline").removeAttr("style");

    $(".toggle button").each(function() {
      if ($(this).hasClass("active")) {
          $(this).click();
      }
    });

  });


  $(".toggle .search").click(function(){

      if ($(this).hasClass("active")) {

        $("body").removeClass("modal");
        $(this).removeClass("active");
        $(this).find("i").removeClass("icon-close").addClass("icon-search");
        $("#header .search-form").hide();

      } else {

        $("body").addClass("modal");
        $(this).addClass("active");
        $(this).find("i").addClass("icon-close").removeClass("icon-search");
        $("#header .search-form").show();

      }

      if ($(".toggle .menu").hasClass("active")) {
        $("#header .buttons").hide();
        $(".toggle .menu").removeClass("active");
        $(".toggle .menu").find("i").removeClass("icon-close").addClass("icon-menu");
      }
  });


  $(".toggle .menu").click(function(){

      if ($(this).hasClass("active")) {

        $("body").removeClass("modal");
        $(this).removeClass("active");
        $(this).find("i").removeClass("icon-close").addClass("icon-menu");
        $("#header .buttons").hide();

      } else {

        $("body").addClass("modal");
        $(this).addClass("active");
        $(this).find("i").addClass("icon-close").removeClass("icon-menu");
        $("#header .buttons").show();

      }

      if ($(".toggle .search").hasClass("active")) {
        $("#header .search-form").hide();
        $(".toggle .search").removeClass("active");

        $(".toggle .search").find("i").removeClass("icon-close").addClass("icon-search");

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


    $("button.lodge-type").click(function(){
      $(this).toggleClass("active");
      $("div.lodge-type").toggle();

      var offset = $(this).offset();
      $("div.lodge-type").css("height", $(document).height());
      if ($(window).width() < 1199) {
        $('html, body').animate({scrollTop: $(this).offset().top - 200}, 500);
      } else {
        $("div.lodge-type .outline").css({top: offset.top, left: offset.left });
      }
    });

    $("button.lodge-price").click(function(){
      $(this).toggleClass("active");
      $("div.lodge-price").toggle();

      var offset = $(this).offset();
      $("div.lodge-price").css("height", $(document).height());
      if ($(window).width() < 1199) {
        $('html, body').animate({scrollTop: $(this).offset().top - 200}, 500);
      } else {
        $("div.lodge-price .outline").css({top: offset.top, left: offset.left });
      }
    });

    $("div.lodge-type button").click(function(){
      $("div.lodge-type").toggle();
      $("button.lodge-type").toggleClass("active");
    });

    $("div.lodge-price button").click(function(){
      $("div.lodge-price").toggle();
      $("button.lodge-price").toggleClass("active");
    });


    $(".btn-map").click(function(){
      $(this).toggleClass("active");
      $(".item-map").toggle();
    });






    $("div.count button").click(function(){
      $("button.count").toggleClass("active");
      $("div.count").toggle();

      var txt = "성인 "+ $("#age01").val() +" / 청소년 "+ $("#age02").val() +" / 유아 "+ $("#age03").val() +"";

      $("button.count strong").html(txt);

    });

  $("fieldset.lodge-search .close").click(function(){
      $("fieldset.lodge-search").toggle();
      $("div.region").hide();
  });

  $("article#navigator .modify").click(function(){
      $("fieldset.lodge-search").toggle();

  });





  $(".agree dt button").click(function(){
    $(this).parent().toggleClass("open");
    $(this).parent().next().toggleClass("open");
  });


  $(".agree #all").click(function(){
    var checkBoxes = $(".agree dt input");
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
  });

  $(".item-list p.image").each(function() {
    $(this).css("background", "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover");
  });

  $(".big-photo .slider li").each(function() {
    $(this).css("background", "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover");
  });

  $(".room-info .photo").each(function() {
    $(this).css("background", "url(" + $(this).find("img").attr("src") + ") no-repeat center / cover");
  });


  /* STAR_RATE*/
  var $starRate = $('.opinion .grade');

  if ($starRate.length > 0) $starRate.on('click', 'a', function() {
    var starValue = $(this).attr("data");
    $starRate.find('a').each(function() {
      $(this).find("i").removeClass("on");

      if ($(this).attr("data") <= starValue) {
        $(this).find("i").addClass("on");
      }
    });
  });



  if ($("#content.main section").hasClass("hero") || $("#content").hasClass("lodge")) {

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

  }


    if ($("#content section").hasClass("view-info")) {
      var bigSlider = $('.big-photo .slider').bxSlider({
        pager: false,
        controls: false,
        infiniteLoop: true
      });

      $(".slider-prev").click(function(){
        bigSlider.goToPrevSlide();
      });

      $(".slider-next").click(function(){
        bigSlider.goToNextSlide();
      });

    }










});
