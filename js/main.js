$(function(){
    const fpCon = $("#jeju_main_container");

    let ftEl = $(".ft_container").clone();
    fpCon.append(ftEl);

    $("#jeju_main_container").fullpage({
        navigation:true,
        navigationPosition:"left",
        navigationTooltips:["예약하기", "추천항공권", "소식", "안내","푸터"],
        anchors: ["rsv", "price", "news", "info", "ft"],
    });

    var priceSwiper = new Swiper(".price_swiper", {
        slidesPerView: 1,
        spaceBetween:40,
        speed:800,
        // centeredSlides: true,ㄴ
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
        breakpoints: {
          700: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
            spaceBetween: 40,
              
          },

          1024: {
            slidesPerView: 3,  //브라우저가 1278보다 클 때
            spaceBetween: 20,
          },
        },
    });

    var newsSwiper = new Swiper(".news_swiper", {
        slidesPerView: 1,
        // spaceBetween:60,
        speed:800,
        // centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
        breakpoints: {
          700: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
            spaceBetween: 40,
              
          },

          1024: {
            slidesPerView: 4,  //브라우저가 1278보다 클 때
            spaceBetween: 20,
          },
        },
    });

    var infoSwiper = new Swiper(".info_swiper", {
        slidesPerView: 1,
        // spaceBetween:60,
        speed:800,
        // centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
        breakpoints: {
          700: {
            slidesPerView: 3,  //브라우저가 768보다 클 때
            spaceBetween: 40,
              
          },

        //   1024: {
        //     slidesPerView: 4,  //브라우저가 1278보다 클 때
        //     spaceBetween: 20,
        //   },
        },
    });
})