
export default function bars() {
  $('.js-bar').each((index, bar) => {
	const $barScore = $(bar).find('.bar__score');
	const $barLabel = $(bar).find('.bar__label');
	const score = $barScore.data('percent');
  
	$barScore.css({'width': `${score}%`});
  
	$barLabel.html(`${score}%`)
  })
}
