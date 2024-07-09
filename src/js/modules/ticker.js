/**
 * Create ticker.
 *
 * @param {jQuery Object} $ticker
 * @returns { Void }
 */
function createTicker($tickers) {
	$tickers.each((index, ticker) => {
		const $ticker = $(ticker);
		const $tickerContainer = $ticker.find('.ticker__inner');
		const $tickerItems = $ticker.find('ul');
		const tickerItemsWidth = $tickerItems.outerWidth();

		$tickerContainer.prepend($tickerItems.clone());
		$tickerContainer.prepend($tickerItems.clone());
		$tickerContainer.append($tickerItems.clone());
		$tickerContainer.append($tickerItems.clone());
		$tickerContainer.append($tickerItems.clone());

		$tickerContainer.css('--item-width', `${-tickerItemsWidth}px`);
		$ticker.addClass('is-animated');
	});
}

/**
 * Handle window load event.
 */
$(window).on('load', () => {
	createTicker($('.js-ticker'));
})
