var gameover_state = {
	create:function(){
		
		var space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		space_key.onDown.add(this.start,this);	
		
		bg = game.add.sprite(0,0,'sky');

		document.cookie = 'score='+score;
		var scoreString = document.cookie.match(/score=\w+/) || [];
		if (scoreString[0]) {
			scoreString = scoreString[0].replace(/score=/,'Your latest score: ')
		} else {
			scoreString = 'Your latest score: 0'
		}
		scoreText = game.add.text(16, 16, scoreString, { fontSize: '32px', fill: '#000' }); 
	},
	start:function(){
		game.state.start('menu');	
	}
};