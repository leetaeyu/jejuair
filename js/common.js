$(function(){
    const moBt = $(".mo_button");
    const d1b = $(".mo_depth1 > .mo_button");


    $(".pc_button1").click(function(){
        $(".pc_depth2_box").removeClass("click");
        $(".depth2_box1").toggleClass("click");
    });
    $(".pc_button2").click(function(){
        $(".pc_depth2_box").removeClass("click");
        $(".depth2_box2").toggleClass("click");
    });
    $(".pc_button3").click(function(){
        $(".pc_depth2_box").removeClass("click");
        $(".depth2_box3").toggleClass("click");
    });
    $(".pc_button4").click(function(){
        $(".pc_depth2_box").removeClass("click");
        $(".depth2_box4").toggleClass("click");
    });

    $(".pc_depth2_box").mouseleave(function(){
        $(this).removeClass("click");
    });

    $(".gnb_button").click(function(){
        $("body").toggleClass("hidden");
        $(".map").toggleClass("active");
    });

    $(".mo_depth1 > button").click(function(){
        $(this).parent().siblings().find(".mo_depth2_box").stop().slideUp(500);
        $(this).next().stop().slideToggle(500);
        $(this).parent().siblings().removeClass("active");
        $(this).parent().toggleClass("active");
    });


});