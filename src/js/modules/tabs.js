export default function tabs() {
	/**
	 * handle tabs click event.
	 */
	$('.js-tabs').on('click', '.tabs__nav a', function(event) {
		event.preventDefault();

		const $this = $(this);
		const $activeTab = $($this.attr('href'));

		$this
			.parent()
				 .addClass('is-current')
				 .siblings()
				 	.removeClass('is-current');


		$activeTab
			.addClass('is-current')
				.siblings()
					.removeClass('is-current');
	});
}
