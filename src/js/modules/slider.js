import Swiper from 'swiper/bundle';

import { players } from './videos';

/**
 * Init slider
 *
 * @param {jQuery Object} $sliders
 * @param {Function} additionalOptionsCallback
 * @return {Void}
 */
const initSwiper = ($sliders, additionalOptions, isMethod) => {
	$sliders.each((idx, slider) => {
		const $slider = $(slider);
		const sliderContainer = $slider.find('.slider__clip')[0];

		const swiper = new Swiper(sliderContainer, {
			loop: false,
			speed: 500,
			spaceBetween: 45,
			slidesPerView: 1,
			touchReleaseOnEdges: true,
			allowTouchMove: true,
			pagination: {
				el: $slider.find('.slider__pagination')[0],
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + '</span>';
				},
			},
			...additionalOptions,
		});

		if (isMethod) {
			swiper.on('slideChangeTransitionEnd', function () {
				const activeIndex = swiper.activeIndex - 1;
				const activeSlide = $(swiper.slides[activeIndex]);
				const $video = activeSlide.find('.js-video');
				const player = players.get($video[0]);

				if (player) {
					player.pause();
					$video.removeClass('is-playing');
				}
			});
		}
	});
};

/**
 * Init slider.
 */
initSwiper($('.js-slider'), {}, true);

/**
 * Init slider patterns.
 */

$('.js-slider-patterns').each((index, slider) => {
	const $slider = $(slider);
	const sliderContainer = $slider.find('.slider__clip')[0];

	new Swiper(sliderContainer, {
		effect: 'fade',
		speed: 400,
		spaceBetween: 0,
		slidesPerView: 1,
		allowTouchMove: false,
		pagination: {
			el: Array.from($slider[0].querySelectorAll('.slider__pagination')),
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '</span>';
			},
		},
	});
});

/**
 * Init slider cycle.
 */
initSwiper($('.js-slider-cycle'), {
	effect: 'fade',
	speed: 400,
	allowTouchMove: false,
});

/**
 * Init slider testimonials.
 */
initSwiper($('.js-slider-testimonials'), {
	slidesPerView: 'auto',
	spaceBetween: 27,
	loop: false,
	freeMode: true,
});
