/**
 * jQuery elements.
 */
const $header = $('.js-header');
const $body = $('body');

/**
 * Handle nav trigger click event.
 *
 * @param {Event} event
 * @returns {void}
 */
const handleNavTriggerClick = (event) => {
	event.preventDefault();

	$body.toggleClass('menu-visible');
	$header.toggleClass('menu-visible');
}

/**
 * Hide menu on desktop view
 *
 *  @returns {void}
 */
function hideMenuOnDesktop() {
	if ($(this).innerWidth() < 1023) {
		return;
	}

	$header.removeClass('menu-visible');
	$body.removeClass('menu-visible');
}

/**
 * Handle events.
*/
$(window).on('load resize', hideMenuOnDesktop);

$('.js-nav-trigger').on('click', handleNavTriggerClick);
