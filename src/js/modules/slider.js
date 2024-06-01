/**
 * External dependencies
 */
import Swiper from '../../../node_modules/swiper/swiper-bundle.min.mjs';

export default function slider() {
	/**
	 * Init slider
	 * 
	 * @param {jQuery Object} $sliders 
	 * @param {Function} additionalOptionsCallback 
	 * @return {Void}
	 */
	const initSwiper = ($sliders, additionalOptions) => {
		$sliders.each((idx, slider) => {
			const $slider = $(slider);
			const sliderContainer = $slider.find('.slider__clip')[0];
	
			const swiper = new Swiper(sliderContainer,{
				loop: true,
				speed: 1500,
				spaceBetween: 45,
				slidesPerView: 1,
				allowTouchMove: true,
				pagination: {
					el: $slider.find('.slider__pagination')[0],
					clickable: true,
					renderBullet: function (index, className) {
					  return '<span class="' + className + '">' + "</span>";
					},
				  },
				...additionalOptions,
			});
		});
	};

	/**
	 * Init slider hero.
	 */
	initSwiper($('.js-slider'))
}
	
