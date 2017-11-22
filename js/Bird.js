(function(){
	window.Bird=function(){
		this.imageArr=[game.Robj["bird0"],game.Robj["bird1"],game.Robj["bird2"]];
		this.wing=0;
		this.x=game.canvas.width/3;
		this.y=100;
		this.f=0;
		this.angle=0;
		this.state="A";
		// game.actors.push(this);
		
	}
	Bird.prototype.flyHigh=function(){
		this.state="B";
		this.f=0;
	}

	Bird.prototype.update=function(){
		if (game.sm.sceneNumber==2) {
			this.y+=3;
			if (this.y>=350) {
				this.y=350;
			}
			return;
		}
		if (game.frameNumber % 10==0) {
			this.wing=++this.wing % 3;
		}
		if (this.state == "A") {
			this.f++;
			this.y+=Math.pow(this.f,2)/100;
			this.angle=this.f/20;
		}else if(this.state="B"){
			this.f++;
			this.y-=Math.pow((20-this.f),2)/100;
			this.angle=-(20-this.f)/35;
			if(this.f>20){
				this.state="A";
				this.f=0;
			}
		}
		if (this.y>300) {
			game.sm.changeSence(2);
		}
	}
	Bird.prototype.render=function(){
		game.ctx.save();
		game.ctx.translate(this.x+24,this.y+24);
		game.ctx.rotate(this.angle);
		game.ctx.drawImage(this.imageArr[this.wing],-24,-24);
		game.ctx.restore();
	}
})();