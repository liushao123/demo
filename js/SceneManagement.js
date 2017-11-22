(function(){
	window.SceneManagement=function(){
		//当前场景编号
		this.sceneNumber=0;
		//场景演员列表
		// this.scencActors=[[],[],[]];
		// this.scencActors[0]=[game.background];
		// this.scencActors[1]=[game.background,game.land,game.bird];
		// this.scencActors[2]=[game.background];
		this.f=0;
		this.pipes=[];
	}
	SceneManagement.prototype.changeSence=function(n){
		this.f=0;
		this.sceneNumber=n;
		if (this.sceneNumber==0) {
			game.ctx.drawImage(game.Robj["title"],game.canvas.width/2-89,0);
			game.ctx.drawImage(game.Robj["tutorial"],game.canvas.width/2-57,220);

			this.btnhover=false;
			var self=this;
			game.canvas.onmousedown=function(event){
				var mousex=event.offsetX;
				var mousey=event.offsetY;
				if (mousex>game.canvas.width/2-58&&mousex<game.canvas.width/2+58&&mousey>340&&mousey<410) {
					self.changeSence(1);
				}		
			}
		}else if (this.sceneNumber==1) {
			game.bird=new Bird();
			game.canvas.onmousedown=function(event){
				
				game.bird.flyHigh();	
			}
		}
		else if (this.sceneNumber==2) {
			
		}
	}
	SceneManagement.prototype.render=function(){
		this.f++;
		// _.each(this.scencActors[this.sceneNumber],function(actor){
		// 	actor.update();
		// 	actor.render();
		// });

		if (this.sceneNumber==0) {
			game.background.render();
			if (this.f<20) {
			game.ctx.drawImage(game.Robj["title"],game.canvas.width/2-89,this.f*6);
		}else{
			game.ctx.drawImage(game.Robj["title"],game.canvas.width/2-89,120);
		}

		if (this.f>20) {
			game.ctx.save();
			game.ctx.globalAlpha=this.f%10/2;
			game.ctx.drawImage(game.Robj["tutorial"],game.canvas.width/2-57,220);
			game.ctx.restore();
			game.ctx.drawImage(game.Robj["button_play"],0,0,116,70,game.canvas.width/2-58,340,116,70);
		}
			
			
		}else if (this.sceneNumber==1) {
			game.background.update();
			game.background.render();
			game.land.update();
			game.land.render();
			if (game.frameNumber%120==0) {
				this.pipes.push(new pipe());
			}
			_.each(this.pipes,function(pipe){
				pipe.update();
				pipe.render();
			});
			game.bird.update();
			game.bird.render();
			var weishu=game.score.toString().length;
		for(i=0;i<weishu;i++){
			var zheyiwei=game.score.toString().charAt(i);
			game.ctx.drawImage(game.Robj["number"+zheyiwei],game.canvas.width/2-15*weishu+i*30,60);
			}
		}else if (this.sceneNumber==2) {

			game.background.render();

			game.land.render();
		
			_.each(this.pipes,function(pipe){

				pipe.render();
			});
			// game.bird.y++;
			game.bird.update();
			game.bird.render();
			if (this.f>30) {
				game.ctx.drawImage(game.Robj["text_game_over"],game.canvas.width/2-102,60);
			}
			// if (this.f>60) {
			// 	this.changeSence(0);
			// }
		}
			
	}
})();