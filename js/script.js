// Плавний Якорь
$(document).ready(function(){
    $(".footer__btn_up").click (function (event) { //обєкто по якому клікаєм
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500); // 1500 - швидкість скорла
    });
});


// Slick-slider
$(document).ready(function(){
  $('.problem__slider_wrapper').slick({
     dots: false, // ідекатори (кружки)
     arrows: true,// стрілки
     prevArrow: '<button class="problem__arrows_item problem__arrows_item_1"><img src="img/arrow__prev.svg" alt="slider arrow"></button>',// стрілка назад
     nextArrow: '<button class="problem__arrows_item problem__arrows_item_2"><img src="img/arrow__next.svg" alt="slider arrow"></button>',// стралка вперед
	  infinite: false,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 1000,// швидкість скрола
	  slidesToShow: 2,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  centerMode: true,
	  centerPadding: '10px',
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});


// Slick-slider
$(document).ready(function(){
  $('.reviews__slider').slick({
     dots: false, // ідекатори (кружки)
     arrows: true,// стрілки
     prevArrow: '<button class="reviews__arrows_item reviews__arrows_prev"><img src="img/arrow__prev.svg" alt="arrow"></button>',// стрілка назад
     nextArrow: '<button class="reviews__arrows_item reviews__arrows_next"><img src="img/arrow__next.svg" alt="arrow"></button>',// стралка вперед
	  infinite: false,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 1000,// швидкість скрола
	  slidesToShow: 2,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  centerMode: true,
	  centerPadding: '100px',
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});


// submit form to email
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(document).ready(function(){ 
     var $menu = $(".header__fixed"); //Обєкт який буде прилипати
     $(window).scroll(function(){
         if ( $(this).scrollTop() > 80 && $menu.hasClass("header__fixed") ){
             $menu.removeClass("header__fixed").addClass("fixed"); //В .fixed пишем pos-fixed і інші "80" - висота після якої буде спрацьовувати
         } else if($(this).scrollTop() <= 80 && $menu.hasClass("fixed")) {
             $menu.removeClass("fixed").addClass("header__fixed");
         }
     });//scroll
 });


$(document).ready(function () {
	$('.answer__item_title').click(function () {
		$(this).toggleClass('answer__title_active');
		$(this).next().toggleClass('answer__item_active').slideToggle();
	})
})

$(document).ready(function () {
	$('.header__burger').click(function () {
		$('.fixed').toggleClass('toggle__menu');
		$('.header').toggleClass('toggle__menu');
		$(this).next().slideToggle();
		$('body').toggleClass('no__scroll');
	})
})