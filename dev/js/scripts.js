$(document).ready(function() {

	function customScroll() {
		if(window.innerWidth < 1199){
			$('html').getNiceScroll().remove();
		} else {
			$('html').niceScroll({
				cursorcolor: '#0076b3',
				cursoropacitymin: 0.4,
				cursorwidth: '7px',
				cursorborder: 'none',
				cursorborderradius: 5,
				autohidemode: 'leave',
				background: '#ddd'
			});
		}
	}
	customScroll();

	window.addEventListener('resize', function () {
		customScroll();
	})

    // Slider Principal
    $('.slider-principal').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        speed: 2000
    });

	function loadDestaquesHomeSliderrMobile(){
		if(window.innerWidth < 992){
			$('.destaques-home').slick({
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToPlay: 1
						}
					},
					{
						breakpoint: 769,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		}
	}
	loadDestaquesHomeSliderrMobile();

	window.addEventListener('resize', function(){
		loadDestaquesHomeSliderrMobile();
	})

	$('.destaques-interna').slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,
		draggable: false,
		vertical: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToPlay: 1,
					infinite: true,
					vertical: false,
					arrows: true,
					draggable: true
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					vertical: false,
					arrows: true,
					draggable: true
				}
			}
		]
	});
	$('.produtos-destaque-slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,
		draggable: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToPlay: 1,
					infinite: true,
					arrows: true,
					draggable: true
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					arrows: true,
					draggable: true
				}
			}
		]
	});

	//Produto Interno (Descrição)
    $('.produto-slider').slick({
        dots: true
    });

    // Menu responsivo
    $(function() {
        $('.nav-btn--abrir').click(function() {
            $('html').addClass('menu-ativo');
        });

        $('.nav-btn--fechar').click(function() {
            $('html').removeClass('menu-ativo');
        });
    });

	//Active menu item with current url
	$(function() {
		var pgurl = window.location.href.substr(window.location.href
				.lastIndexOf("/")+1);
		$(".nav-menu > li > a").each(function(){
			if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
				$(this).addClass("active");
		})
	});

	function backToTop() {
		var $btnBackLink = $('a.btn-topo--voltar');

		$(document).on('scroll', showHideBtnScroll);
		function showHideBtnScroll() {
			var $screenY = $(this).scrollTop();
			$screenY > 500 ? $btnBackLink.fadeIn() : $btnBackLink.fadeOut();
		}

		$($btnBackLink).click(scrollBackWhenClick);
		function scrollBackWhenClick() {
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
			return false;
		}
	}
	backToTop();

});