import Plyr from 'plyr/dist/plyr.min.mjs'

export const players = new Map();

/**
 * Variables.
 */
const $videos = $('.js-video');

$videos.each((index,video) => {
	const player = new Plyr($(video).find('.video__wrapper'), {
		playsinline: true
	})

	players.set(video, player);
})

/**
* Pause All Videos Except Current.
*
* @param {Object} players
* @param {object} player
* @returns {Void}
*/
function pauseAllVideosExceptCurrent(players, currentPlayer) {
	players.forEach((player, video) => {
		if (player === currentPlayer) {
			return;
		}

		player.pause();
		$(video).removeClass('is-playing');
	});
}

/**
 * Handle video btn click event.
 */
$videos.on('click', '.video__btn', function (event) {
	event.preventDefault();

	const $video = $(this).closest('.js-video');
	const player = players.get($video[0]);

	$video.addClass('is-playing');

	setTimeout(() => {
		player.play();
	}, 200);

	pauseAllVideosExceptCurrent(players, player)
})
