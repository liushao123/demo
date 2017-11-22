(function(){
	window.Background=function(){
		this.image=game.Robj["beijing1"];
		this.x=0;
		// game.actors.push(this);
	}

	Background.prototype.update=function(){
				this.x--;
			if(this.x<-game.canvas.width){
				this.x=0;
			}
	}
	Background.prototype.render=function(){
		game.ctx.drawImage(this.image,this.x,0,game.canvas.width,game.canvas.height);
		game.ctx.drawImage(this.image,game.canvas.width+this.x,0,game.canvas.width,game.canvas.height);
		
	}
})();