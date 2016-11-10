var menu_state={
	create: function(){
		bg = game.add.sprite(0,0,'sky');		//在game.world中坐标(0,0)处画出预加载游戏资源，背景图片
		dude = game.add.sprite(400,450,'dude');		//载入即将闯荡管子世界的Bird
		var style = {font: "30px Arial",fill: "#FFFFFF"};
		var text = game.add.text(400,500,"Press space to start!",style);		//定义显示文本变量,并在game.world显示，参数(坐标,显示文本,文本风格)
		text.anchor.setTo(0.5,0.5);	

		var scoreString = document.cookie.match(/score=\w+/) || [];
		if (scoreString.length === 0) {
			scoreString = 'Your latest score: 0'
		} else {
			scoreString = scoreString[0].replace(/score=/,'Your latest score: ')
		}
		scoreText = game.add.text(16, 16, scoreString, { fontSize: '32px', fill: '#000' });  

		var space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);		//定义接受按键消息变量
		space_key.onDown.add(this.start,this);
	},
	start:function(){
		game.state.start('play');		//调用start()函数后进入'ready'state
	}
};