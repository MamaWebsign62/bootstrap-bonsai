//BACK TOP


			$('#back-top').hide();
			$(function(){

					$(window).scroll(

							function() {

									if ($(this).scrollTop() > 100) {
									$('#back-top').fadeIn();
							}

							else {
									$('#back-top').fadeOut();
							}
							});

							$('#back-top').click(

									function() {
											$('html, body').animate({scrollTop: 0}, 800);
											return false;
									}
							);
			});
// SCROLL ANCRE

			$('a[href^="#"]').click(function(){
				 var the_id = $(this).attr("href");

					$('html, body').animate({
							scrollTop:$(the_id).offset().top       // Régler problème inscrit dans la console
					}, 1000);
					 return false;
			});
// });
