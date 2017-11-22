(function(){
	window.Game=function(){
		this.canvas=document.getElementsByTagName("canvas")[0];
		this.ctx=this.canvas.getContext("2d");
		this.frameNumber=0;
		this.R={
			"beijing1":"images/bg_day.png",
			"bird0":"images/bird0_0.png",
			"bird1":"images/bird0_1.png",
			"bird2":"images/bird0_2.png",
			"land":"images/land.png",
			"pipe_down":"images/pipe_down.png",
			"pipe_up":"images/pipe_up.png",
			"number0":"images/font_048.png",
			"number1":"images/font_049.png",
			"number2":"images/font_050.png",
			"number3":"images/font_051.png",
			"number4":"images/font_052.png",
			"number5":"images/font_053.png",
			"number6":"images/font_054.png",
			"number7":"images/font_055.png",
			"number8":"images/font_056.png",
			"number9":"images/font_057.png",
			"title":"images/title.png",
			"tutorial":"images/tutorial.png",
			"button_play":"images/button_play.png",
			"text_game_over":"images/text_game_over.png"
		}
		this.Ramount=_.keys(this.R).length;
		this.Robj={};
		// this.actors=[];
		// this.pipes=[];
		this.score=0;
		this.loadResource(function(){
			this.start();
			// this.bindEvent();
		});
	}
	Game.prototype.loadResource=function(callback){
		var already=0; 	
		var self=this;
		for (var k in this.R) {
			this.Robj[k]=new Image();
			this.Robj[k].src=this.R[k];
			this.Robj[k].onload=function(){
				already++;
				self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
				self.ctx.fillText("正在加载图片"+already + "/" + this.Ramount,10,40);
				if(already===self.Ramount){
					callback.call(self);
				}
			};
		}
	}
	Game.prototype.start=function(){
		this.background=new Background();
		this.land=new Land();
		this.bird=new Bird();

		this.sm=new SceneManagement();
		this.sm.changeSence(0);
		var self=this;
		this.timer = setInterval(function(){
			self.mainloop();
		},20);
	}
	Game.prototype.mainloop=function(){
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.sm.render();		
		// _.each(this.actors,function(actor){
		// 	actor.update();
		// 	actor.render();
		// });
		// if (this.frameNumber%130==0) {
		// 	this.pipes.push(new pipe());
		// }
		

		this.frameNumber++;
		this.ctx.font="14px consolas";
		this.ctx.fillText("FNO:"+this.frameNumber,10,20);
		this.ctx.fillText("场景编号："+this.sm.sceneNumber,10,40)
	
		
	}
	// Game.prototype.bindEvent=function(){
	// 	var self=this;
	// 	this.canvas.onmousedown=function(){
	// 		self.bird.flyHigh();
	// 	}
	
	// }
})();