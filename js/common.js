$(function(){
    $(".button1").click(function(){
        $(".pc_depth2_box").removeClass("click");
        $(".depth2_box1").toggleClass("click");
    });
    $(".button2").click(function(){
        $(".pc_depth2_box").removeClass("click");
        $(".depth2_box2").toggleClass("click");
    });
    $(".button3").click(function(){
        $(".pc_depth2_box").removeClass("click");
        $(".depth2_box3").toggleClass("click");
    });
    $(".button4").click(function(){
        $(".pc_depth2_box").removeClass("click");
        $(".depth2_box4").toggleClass("click");
    });

    $(".pc_depth2_box").mouseleave(function(){
        $(this).removeClass("click");
    });

});