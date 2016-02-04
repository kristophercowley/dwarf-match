app.service('GameService', function () {

	var imgRoot = 'assets/img/cards/'

	 function Deck() {
		this.cards = [{
			title: 'Big Bird',
			url: imgRoot + 'bigbird.png',
		}, {
				title: 'Elmo',
				url: imgRoot + 'elmo.png',
			}, {
				title: 'Grover',
				url: imgRoot + 'grover.png',
			}, {
				title: 'Zoe',
				url: imgRoot + 'zoe.png',
			}, {
				title: 'Telly',
				url: imgRoot + 'telly.png',
			}, {
				title: 'Rosita',
				url: imgRoot + 'rosita.png',
			}, {
				title: 'Ernie',
				url: imgRoot + 'ernie.png',
			}, {
				title: 'Burt',
				url: imgRoot + 'brt.png',
			}, {
				title: 'Snuffy',
				url: imgRoot + 'snuffy.png',
			}, {
				title: 'Cookie',
				url: imgRoot + 'cookie.png',
			}, {
				title: 'Oscar',
				url: imgRoot + 'oscar.png',
			}, {
				title: 'Count',
				url: imgRoot + 'count.png',
			}];
	}

	this.getDeck = function () {
		var pairs = shuffle(new Deck().cards).concat(shuffle(new Deck().cards));
		var shuffled = shuffle(shuffle(pairs));

		return shuffled;
	}


	function shuffle(deck) {
    for (var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
    return deck;
	}

})