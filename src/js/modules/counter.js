/**
 * External dependencies.
 */
import { CountUp } from '../../../node_modules/countup.js/dist/countUp.js';

/**
 * Init counters.
 *
 * @param {jQuery Object} $counter
 * @returns {Void}
 */
const initCounters = ($counter) => {
	$counter.each((index, stat) => {
		const $stat = $(stat);
		const number = $stat.data('number');
		const decimalPlace = $stat.data('decimal-place');

		const counter = new CountUp(stat, number, {
			decimalPlaces: decimalPlace,
			enableScrollSpy: true,
			separator: "'",
			scrollSpyOnce: true,
			duration: 5.6,
		});
		counter.start();
	});
};

export { initCounters };
