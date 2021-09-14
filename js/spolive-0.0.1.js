/*메인 슬라이드*/
var mainSwiper = new Swiper('.section_slider .main_slider',{
    speed: 500,
    spaceBetween:0,
    effect : 'fade',
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});
/*메인 미니 슬라이드*/
var miniSwiper = new Swiper('.mini_slider',{
    speed: 500,
    spaceBetween:0,
    effect : 'fade',
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

$(".menu_btn button, .dim").click( function() {
    $(".menu_btn button, .dim").toggleClass("on");
    if ($(".dim").hasClass("on")) {
        $(".dim").fadeIn();
    } else {
        $(".dim").fadeOut();
    }
});

/*헤더 sns*/
$(".sns").on('click',function(){
    $(".sns").toggleClass('on');
});

/*헤더 login*/
$("header .right>li.login button").on('click',function(){
    $("header .right>li.login button").toggleClass('on');
});

/*체크박스 on off*/
$('.check_radio').click(function(){
    var $this = $(this);
    if($this.hasClass('on')){            
        $this.removeClass('on');
    }else{
        $this.addClass('on');
    }
});


/*로그인페이지 탭메뉴*/
$(document).ready(function(){
    $(".choice_btn button").on('click',function(){
        btn_chk = $(this).attr('class');
        if($(this).hasClass('on')){            
        }else{
            $(".choice_btn button").removeClass('on');
            $(this).addClass('on');
            $('.id_find').toggle();
            $('.pw_find').toggle();
        }
    });

    $("input[type='radio']").on('change',function(){
        if($(this).is(":checked")){
            $("input[type='radio']").not(this).parent().parent().parent().removeClass('pop_chk');
            $(this).parent().parent().parent().addClass('pop_chk');
        }
    });
});
/*로그인페이지 탭메뉴 끝*/