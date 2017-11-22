(function(){
	window.pipe=function(){
		this.image1=game.Robj["pipe_up"];
		this.image2=game.Robj["pipe_down"];

		this.kaikou=80;
		this.height2=_.random(10,200);
		this.height1=380-this.kaikou-this.height2;

		this.x=300;
		this.flag=false;
		// game.actors.push(this);
		// game.pipes.push(this);
	}

	pipe.prototype.update=function(){
		this.x-=3;

		if (this.x<-52) {
			// game.actors=_.without(game.actors,this);
			game.sm.pipes=_.without(game.sm.pipes,this);
		}
		// if((this.x<game.bird.x + 7 + 34) && (this.height2>game.bird.y+7)&&(this.x>game.bird.x-42)){
		if((this.x<game.bird.x + 7 + 34) && (this.height2>game.bird.y+7)&&(this.x>game.bird.x-42)){
			game.sm.changeSence(2);
		}else if((this.x<game.bird.x+7+34)&&(400-this.height1<game.bird.y+42)&&(this.x>game.bird.x-52)){
			game.sm.changeSence(2);
		}
		if (!this.flag&&(this.x+52<game.bird.x)) {
			this.flag=true;
			game.score++;
		}
		
	}
	pipe.prototype.render=function(){
		game.ctx.drawImage(this.image2,0,320-this.height2,52,this.height2,this.x,0,52,this.height2);
		game.ctx.drawImage(this.image1,0,0,52,this.height1,this.x,400-this.height1,52,this.height1);
		// game.ctx.font="30px 黑体";
		// game.ctx.fillText(this.flag,this.x,20,52,this.height2)
	}
})();