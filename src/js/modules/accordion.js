
/**
 *
 * Handle accordion trigger click.
 */
$('.js-accordion').on('click', '.accordion__head', function() {
	$(this)
	.next()
	.parent().toggleClass('is-open')
	.siblings()
	.removeClass('is-open');
	});
