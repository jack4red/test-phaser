var play_state = {
    create: function() { 
		//载入所需资源
		// game.hysics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'sky');
        platforms = game.add.group();
        platforms.enableBody = true;
        var ground = platforms.create(0, game.world.height - 32, 'ground');
        ground.scale.setTo(10, 2);
        ground.body.immovable = true;
        var ledge = platforms.create(150, 500, 'ground');
        ledge.body.immovable = true;
        ledge = platforms.create(270, 450, 'ground');
        ledge.body.immovable = true;  

        player = game.add.sprite(32, game.world.height - 150, 'dude');
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.1;  
        player.body.gravity.y = 600;  
        // player.body.collideWorldBounds = true;
        player.animations.add('left', [0], 10, true);  
        player.animations.add('right', [1], 10, true); 

        stars = game.add.group(); 
        stars.enableBody = true; 
        for (var i = 0; i < 4; i++)  
        {  
            star = stars.create(120 + i * 70, 350, 'star');  
            star.body.gravity.y = 6000;  
            star.body.bounce.y = 0.7 + Math.random() * 0.2;  
            // star.body.collideWorldBounds = true;;  
        }

        scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });  

        cursors = game.input.keyboard.createCursorKeys(); 
    },

    update: function() {
        game.physics.arcade.collide(stars, platforms); 
        game.physics.arcade.collide(player, platforms); 
        player.body.velocity.x = 0;  
        if (cursors.left.isDown)  
        {  
            player.body.velocity.x = -150;  
            player.animations.play('left');  
        }  
        else if (cursors.right.isDown)  
        {  
            player.body.velocity.x = 150;  
            player.animations.play('right');  
        }  
        else  
        {  
            player.animations.stop();  
            // player.frame = 4;  
        }  
          
        if (cursors.up.isDown && player.body.touching.down)  
        {  
            player.body.velocity.y = -350;  
        }  

        game.physics.arcade.overlap(player, stars, this.collectStar, null, this);   
        if (player.inWorld == false)
            this.restart_game();    
    },
	
	//收集星星
    collectStar: function(player, star) {
        star.kill(); 
        score += 10;  
        scoreText.text = 'Score: ' + score; 
    },
	//重新开始函数
    restart_game: function() {
        this.game.time.events.remove(this.timer);
		
        this.game.state.start('gameover');
    }
};