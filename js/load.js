var load_state = {  
//预加载游戏资源
    preload: function() { 
        game.load.image('sky', 'assets/sky.png');  
        game.load.image('ground', 'assets/platform.png');  
        game.load.image('star', 'assets/star.png');  
        game.load.spritesheet('dude', 'assets/dude1.png', 32, 32); 
    },

    create: function() {
        // 所有资源加载完成后，进入'menu'state
        this.game.state.start('menu');		
    }
};