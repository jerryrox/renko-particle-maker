(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.sprite_5 = function() {
	this.initialize(img.sprite_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Sidebar_Shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Shape", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.Sidebar_Scrollview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.buttonItems = [];
		this.inputItems = [];
		this.toggleItems = [];
		this.labelItems = [];
		
		this.bindInfo = function(owner) {
			this.returnItems(this.buttonItems, owner.buttonRecycler);
			this.returnItems(this.inputItems, owner.inputRecycler);
			this.returnItems(this.toggleItems, owner.toggleRecycler);
			this.returnItems(this.labelItems, owner.labelRecycler);
			
			var items = owner.curSection.menuInfo.items;
			for(var i=0; i<items.length; i++) {
				var item = items[i];
				var symbol = null;
				
				if(item instanceof MenuItemButton) {
					symbol = owner.buttonRecycler.getObject();
					this.buttonItems.push(symbol);
				}
				else if(item instanceof MenuItemInput) {
					symbol = owner.inputRecycler.getObject();
					this.inputItems.push(symbol);
				}
				else if(item instanceof MenuItemToggle) {
					symbol = owner.toggleRecycler.getObject();
					this.toggleItems.push(symbol);
				}
				else if(item instanceof MenuItemLabel) {
					symbol = owner.labelRecycler.getObject();
					this.labelItems.push(symbol);
				}
				else {
					continue;
				}
				
				item.link(symbol);
				symbol.y = i * 72;
			}
		}
		
		this.returnItems = function(items, recycler) {
			for(var i=0; i<items.length; i++) {
				recycler.returnObject(items[i]);
			}
			items.length = 0;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_Scrollview, null, null);


(lib.Sidebar_Scale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Scale", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.Sidebar_Rotation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Rotation", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.Sidebar_Movement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Movement", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.Sidebar_ItemBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A4/FoIAArPMAx/AAAIAALPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_ItemBG, new cjs.Rectangle(-160,-36,320,72), null);


(lib.Sidebar_Item_Toggle_FG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8CqQglgNgdgdQgzg0gChHIAAgCIAAgDQAAhKA1g1QAzgyBHgCIADAAIABAAIAEAAIADAAQBGADAzAxQA0A1AABKIAAADIAAACQAAAZgHAWQgNAqggAiQg1A0hLAAQggAAgcgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_Item_Toggle_FG, new cjs.Rectangle(-18,-18,36,36), null);


(lib.Sidebar_Item_Input_Guide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArtEEIAAoHIXbAAIAAIHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_Item_Input_Guide, new cjs.Rectangle(-75,-26,150,52), null);


(lib.Sidebar_Item_Button_Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsfEEIAAoHIY/AAIAAIHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-26,160,52);


(lib.Sidebar_Gravity = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Gravity", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.Sidebar_General = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("General", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.Sidebar_Emission = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Emission", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.Sidebar_Color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Color", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.Sidebar_Alpha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Alpha", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.Sidebar_Acceleration = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Acceleration", "bold 24px 'NanumSquare ExtraBold'", "#333333");
	this.text.lineHeight = 29;
	this.text.lineWidth = 163;
	this.text.parent = this;
	this.text.setTransform(-82.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("As2EEQhJAAg0hMQg0hMAAhrIAAgBIAAgLQADhkAxhIQAmg4AygPQARgFASAAIABAAIZuAAIABAAIABAAQASAAAQAFQAyAPAnA4QAyBIACBkIAAALIAAABQAABrg0BMQg0BMhJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.App_StopButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Stop", "bold 28px 'NanumSquare ExtraBold'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(0,-15.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsfEEIAAoHIY/AAIAAIHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-26,160,52);


(lib.App_ResetButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Reset", "bold 28px 'NanumSquare ExtraBold'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(0,-15.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsfEEIAAoHIY/AAIAAIHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-26,160,52);


(lib.App_PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Play", "bold 28px 'NanumSquare ExtraBold'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(0,-15.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsfEEIAAoHIY/AAIAAIHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-26,160,52);


(lib.App_ParticleSprite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sprite
	this.instance = new lib.sprite_5();
	this.instance.parent = this;
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.App_ParticleSprite, new cjs.Rectangle(-32,-32,64,64), null);


(lib.App_ParticleHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.particle = null;
		this.isPlaying = false;
		
		this.startPlayback = function() {
			this.isPlaying = true;
			this.particle.play();
		}
		
		this.stopPlayback = function() {
			this.isPlaying = false;
			this.particle.stop();
		}
		
		this.setParticle = function(particle) {
			var wasPlaying = this.isPlaying;
			if(this.particle !== null) {
				this.stopPlayback();
				this.particle.destroy();
				this.particle = null;
			}
			
			this.particle = particle;
			
			if(wasPlaying)
				this.startPlayback();
		}
		
		renko.registerAwake(this, function() {
			this.particle = new ParticleSystem(this, function() {
				return new lib.App_ParticleSprite();
			});
			
			this.stopPlayback();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.App_ParticleHolder, null, null);


(lib.App_CompileButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Compile", "bold 28px 'NanumSquare ExtraBold'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(0,-15.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsfEEIAAoHIY/AAIAAIHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-26,160,52);


(lib.App_CodeButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Get Code", "bold 28px 'NanumSquare ExtraBold'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(0,-15.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsfEEIAAoHIY/AAIAAIHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-26,160,52);


(lib.Sidebar_Section = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// this.generalButton;
		// this.emissionButton;
		// this.shapeButton;
		// this.alphaButton;
		// this.colorButton;
		// this.scaleButton;
		// this.gravityButton;
		// this.movementButton;
		// this.accelerationButton;
		// this.rotationButton;
		
		// this.generalDisplay;
		// this.emissionDisplay;
		// this.shapeDisplay;
		// this.alphaDisplay;
		// this.colorDisplay;
		// this.scaleDisplay;
		// this.gravityDisplay;
		// this.movementDisplay;
		// this.accelerationDisplay;
		// this.rotationDisplay;
		
		this.bindInfo = function(owner) {
			this.generalDisplay.visible = true;
			this.emissionDisplay.visible = true;
			this.shapeDisplay.visible = MenuStates.shape.menuInfo.isEnabled();
			this.alphaDisplay.visible = MenuStates.alpha.menuInfo.isEnabled();
			this.colorDisplay.visible = MenuStates.color.menuInfo.isEnabled();
			this.scaleDisplay.visible = MenuStates.scale.menuInfo.isEnabled();
			this.gravityDisplay.visible = MenuStates.gravity.menuInfo.isEnabled();
			this.movementDisplay.visible = MenuStates.movement.menuInfo.isEnabled();
			this.accelerationDisplay.visible = MenuStates.acceleration.menuInfo.isEnabled();
			this.rotationDisplay.visible = MenuStates.rotation.menuInfo.isEnabled();
		}
		
		renko.registerAwake(this, function() {
			this.generalButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.general);
			});
			this.emissionButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.emission);
			});
			this.shapeButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.shape);
			});
			this.alphaButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.alpha);
			});
			this.colorButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.color);
			});
			this.scaleButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.scale);
			});
			this.gravityButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.gravity);
			});
			this.movementButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.movement);
			});
			this.accelerationButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.acceleration);
			});
			this.rotationButton.addEventListener("click", function() {
				renko.views.sidebar.setSection(MenuStates.rotation);
			});
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// General
	this.generalDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.generalDisplay.name = "generalDisplay";
	this.generalDisplay.parent = this;
	this.generalDisplay.setTransform(-201,0,0.5,0.5);

	this.generalButton = new lib.Sidebar_General();
	this.generalButton.name = "generalButton";
	this.generalButton.parent = this;
	this.generalButton.setTransform(-100,0);
	new cjs.ButtonHelper(this.generalButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.generalButton},{t:this.generalDisplay}]}).wait(1));

	// Emission
	this.emissionDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.emissionDisplay.name = "emissionDisplay";
	this.emissionDisplay.parent = this;
	this.emissionDisplay.setTransform(-201,62,0.5,0.5);

	this.emissionButton = new lib.Sidebar_Emission();
	this.emissionButton.name = "emissionButton";
	this.emissionButton.parent = this;
	this.emissionButton.setTransform(-100,62);
	new cjs.ButtonHelper(this.emissionButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.emissionButton},{t:this.emissionDisplay}]}).wait(1));

	// Shape
	this.shapeDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.shapeDisplay.name = "shapeDisplay";
	this.shapeDisplay.parent = this;
	this.shapeDisplay.setTransform(-201,124,0.5,0.5);

	this.shapeButton = new lib.Sidebar_Shape();
	this.shapeButton.name = "shapeButton";
	this.shapeButton.parent = this;
	this.shapeButton.setTransform(-100,124);
	new cjs.ButtonHelper(this.shapeButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shapeButton},{t:this.shapeDisplay}]}).wait(1));

	// Alpha
	this.alphaDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.alphaDisplay.name = "alphaDisplay";
	this.alphaDisplay.parent = this;
	this.alphaDisplay.setTransform(-201,186,0.5,0.5);

	this.alphaButton = new lib.Sidebar_Alpha();
	this.alphaButton.name = "alphaButton";
	this.alphaButton.parent = this;
	this.alphaButton.setTransform(-100,186);
	new cjs.ButtonHelper(this.alphaButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.alphaButton},{t:this.alphaDisplay}]}).wait(1));

	// Color
	this.colorDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.colorDisplay.name = "colorDisplay";
	this.colorDisplay.parent = this;
	this.colorDisplay.setTransform(-201,248,0.5,0.5);

	this.colorButton = new lib.Sidebar_Color();
	this.colorButton.name = "colorButton";
	this.colorButton.parent = this;
	this.colorButton.setTransform(-100,248);
	new cjs.ButtonHelper(this.colorButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.colorButton},{t:this.colorDisplay}]}).wait(1));

	// Scale
	this.scaleDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.scaleDisplay.name = "scaleDisplay";
	this.scaleDisplay.parent = this;
	this.scaleDisplay.setTransform(-201,310,0.5,0.5);

	this.scaleButton = new lib.Sidebar_Scale();
	this.scaleButton.name = "scaleButton";
	this.scaleButton.parent = this;
	this.scaleButton.setTransform(-100,310);
	new cjs.ButtonHelper(this.scaleButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scaleButton},{t:this.scaleDisplay}]}).wait(1));

	// Gravity
	this.gravityDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.gravityDisplay.name = "gravityDisplay";
	this.gravityDisplay.parent = this;
	this.gravityDisplay.setTransform(-201,372,0.5,0.5);

	this.gravityButton = new lib.Sidebar_Gravity();
	this.gravityButton.name = "gravityButton";
	this.gravityButton.parent = this;
	this.gravityButton.setTransform(-100,372);
	new cjs.ButtonHelper(this.gravityButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gravityButton},{t:this.gravityDisplay}]}).wait(1));

	// Movement
	this.movementDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.movementDisplay.name = "movementDisplay";
	this.movementDisplay.parent = this;
	this.movementDisplay.setTransform(-201,434,0.5,0.5);

	this.movementButton = new lib.Sidebar_Movement();
	this.movementButton.name = "movementButton";
	this.movementButton.parent = this;
	this.movementButton.setTransform(-100,434);
	new cjs.ButtonHelper(this.movementButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movementButton},{t:this.movementDisplay}]}).wait(1));

	// Acceleration
	this.accelerationDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.accelerationDisplay.name = "accelerationDisplay";
	this.accelerationDisplay.parent = this;
	this.accelerationDisplay.setTransform(-201,496,0.5,0.5);

	this.accelerationButton = new lib.Sidebar_Acceleration();
	this.accelerationButton.name = "accelerationButton";
	this.accelerationButton.parent = this;
	this.accelerationButton.setTransform(-100,496);
	new cjs.ButtonHelper(this.accelerationButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accelerationButton},{t:this.accelerationDisplay}]}).wait(1));

	// Rotation
	this.rotationDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.rotationDisplay.name = "rotationDisplay";
	this.rotationDisplay.parent = this;
	this.rotationDisplay.setTransform(-201,558,0.5,0.5);

	this.rotationButton = new lib.Sidebar_Rotation();
	this.rotationButton.name = "rotationButton";
	this.rotationButton.parent = this;
	this.rotationButton.setTransform(-100,558);
	new cjs.ButtonHelper(this.rotationButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rotationButton},{t:this.rotationDisplay}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_Section, new cjs.Rectangle(-210,-26,210,610), null);


(lib.Sidebar_Item_Toggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		if(this.onValueChange === null || typeof this.onValueChange === "function")
			return;
		
		// this.titleLabel;
		// this.checkDisplay;
		// this.bgDisplay;
		
		this.onValueChange = null;
		
		this.setActive = function(isActive) {
			this.visible = isActive;
		}
		
		this.setLabel = function(text) {
			this.titleLabel.text = text;
		}
		
		this.setValue = function(value) {
			this.checkDisplay.visible = value;
		}
		
		this.onToggleButton = function() {
			this.setValue(!this.checkDisplay.visible);
			
			if(typeof this.onValueChange === "function")
				this.onValueChange(this.checkDisplay.visible);
		}
		
		renko.registerAwake(this, function() {
			this.bgDisplay.cursor = "pointer";
			this.bgDisplay.addEventListener("click", this.onToggleButton.bind(this));
			
			this.setActive(false);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Title
	this.titleLabel = new cjs.Text("Title", "bold 28px 'NanumSquare ExtraBold'", "#FFFFFF");
	this.titleLabel.name = "titleLabel";
	this.titleLabel.textAlign = "center";
	this.titleLabel.lineHeight = 33;
	this.titleLabel.lineWidth = 232;
	this.titleLabel.parent = this;
	this.titleLabel.setTransform(-31.8,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.titleLabel).wait(1));

	// ToggleFG
	this.checkDisplay = new lib.Sidebar_Item_Toggle_FG();
	this.checkDisplay.name = "checkDisplay";
	this.checkDisplay.parent = this;
	this.checkDisplay.setTransform(124,0);

	this.timeline.addTween(cjs.Tween.get(this.checkDisplay).wait(1));

	// ToggleBG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai3C4QhMhNAAhrQAAhrBMhNQBMhLBrAAQBsAABMBLQBMBNAABrQAABrhMBNQhMBMhsAAQhrAAhMhMgAiNh/Qg1A1AABKIAAADIAAACQACBHAzA0QAdAdAlANQAiAQAogBQBLABA0g1QAjgjAMguQAGgWABgZIAAgCIAAgDQAAhKg1g1QgxgxhHgDIgDAAIgEAAIgBAAIgDAAIgDAAIgHAAQhKAAg1A0g");
	this.shape.setTransform(124,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// BG
	this.bgDisplay = new lib.Sidebar_ItemBG();
	this.bgDisplay.name = "bgDisplay";
	this.bgDisplay.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgDisplay).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_Item_Toggle, new cjs.Rectangle(-160,-36,320,72), null);


(lib.Sidebar_Item_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// this.bgDisplay;
		// this.textLabel;
		
		this.setActive = function(isActive) {
			this.visible = isActive;
		}
		
		this.setLabel = function(text) {
			this.textLabel.text = text;
		}
		
		this.setValue = function(value) {
			this.textLabel.text = value;
		}
		
		renko.registerAwake(this, function() {
			this.setActive(false);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Text
	this.textLabel = new cjs.Text("Text", "bold 28px 'NanumSquare ExtraBold'", "#FFFFFF");
	this.textLabel.name = "textLabel";
	this.textLabel.textAlign = "center";
	this.textLabel.lineHeight = 33;
	this.textLabel.lineWidth = 296;
	this.textLabel.parent = this;
	this.textLabel.setTransform(-0.1,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.textLabel).wait(1));

	// BG
	this.bgDisplay = new lib.Sidebar_ItemBG();
	this.bgDisplay.name = "bgDisplay";
	this.bgDisplay.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgDisplay).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_Item_Text, new cjs.Rectangle(-160,-36,320,72), null);


(lib.Sidebar_Item_Input = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		if(!renko.isNullOrUndefined(this.input))
			return;
		
		// this.titleLabel;
		// this.guideDisplay;
		// this.bgDisplay;
		
		this.onValueChange = null;
		this.input = null;
		this.updateId = null;
		
		this.setActive = function(isActive) {
			this.visible = isActive;
			this.input.setActive(isActive);
			
			if(isActive) {
				if(this.updateId === null)
					this.updateId = renko.monoUpdate.addAction(this.onUpdate.bind(this));
			}
			else {
				if(this.updateId !== null)
					renko.monoUpdate.removeAction(this.updateId);
				this.updateId = null;
			}
		}
		
		this.setLabel = function(text) {
			this.titleLabel.text = text;
		}
		
		this.setValue = function(value) {
			this.input.setValue(value);
		}
		
		this.onUpdate = function() {
			if(this.input === null)
				return;
			
			var scale = renko.getWindowScale() * 2;
			var globalPos = this.guideDisplay.localToGlobal(0, 0);
			this.input.setOffset(globalPos.x / -scale - 170, globalPos.y / scale - 360);
		}
		
		renko.registerAwake(this, function() {
			this.input = new TextInput("sidebar_input_" + new Date().getTime());
			this.input.getStyle().fontFamily = "NanumSquare ExtraBold";
			this.input.setFontSize(28);
			this.input.setTextAlign("center");
			this.input.setColor("#fff");
			this.input.setRect(0, 0, 150, 52);
			this.input.setMaxLength(100);
			this.input.setOnInput(function(input) {
				if(typeof this.onValueChange === "function")
					this.onValueChange(input.getValue());
			}.bind(this));
			
			this.setActive(false);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Title
	this.titleLabel = new cjs.Text("Title", "bold 28px 'NanumSquare ExtraBold'", "#FFFFFF");
	this.titleLabel.name = "titleLabel";
	this.titleLabel.textAlign = "center";
	this.titleLabel.lineHeight = 33;
	this.titleLabel.lineWidth = 136;
	this.titleLabel.parent = this;
	this.titleLabel.setTransform(-80,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.titleLabel).wait(1));

	// InputGuide
	this.guideDisplay = new lib.Sidebar_Item_Input_Guide();
	this.guideDisplay.name = "guideDisplay";
	this.guideDisplay.parent = this;
	this.guideDisplay.setTransform(75.1,0);

	this.timeline.addTween(cjs.Tween.get(this.guideDisplay).wait(1));

	// BG
	this.bgDisplay = new lib.Sidebar_ItemBG();
	this.bgDisplay.name = "bgDisplay";
	this.bgDisplay.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgDisplay).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_Item_Input, new cjs.Rectangle(-160,-36,320,72), null);


(lib.Sidebar_Item_Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		if(this.onButtonClicked === null || typeof this.onButtonClicked === "function")
			return;
		
		// this.titleLabel;
		// this.button;
		// this.bgDisplay;
		
		this.onButtonClicked = null;
		
		this.setActive = function(isActive) {
			this.visible = isActive;
		}
		
		this.setLabel = function(text) {
			this.titleLabel.text = text;
		}
		
		this.setValue = function(value) {
			this.titleLabel.text = value;
		}
		
		this.onButton = function() {
			if(typeof this.onButtonClicked === "function")
				this.onButtonClicked();
		}
		
		renko.registerAwake(this, function() {
			this.button.addEventListener("click", this.onButton.bind(this));
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Title
	this.titleLabel = new cjs.Text("Label", "bold 28px 'NanumSquare ExtraBold'", "#333333");
	this.titleLabel.name = "titleLabel";
	this.titleLabel.textAlign = "center";
	this.titleLabel.lineHeight = 33;
	this.titleLabel.lineWidth = 276;
	this.titleLabel.parent = this;
	this.titleLabel.setTransform(0,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.titleLabel).wait(1));

	// Button
	this.button = new lib.Sidebar_Item_Button_Button();
	this.button.name = "button";
	this.button.parent = this;
	this.button.setTransform(0,0,1.875,1);
	new cjs.ButtonHelper(this.button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// BG
	this.bgDisplay = new lib.Sidebar_ItemBG();
	this.bgDisplay.name = "bgDisplay";
	this.bgDisplay.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgDisplay).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_Item_Button, new cjs.Rectangle(-160,-36,320,72), null);


(lib.Sidebar_Container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		renko.registerView(this, "sidebar");
		
		// this.scrollviewDisplay;
		// this.sectionDisplay;
		
		this.inputRecycler = null;
		this.textRecycler = null;
		this.toggleRecycler = null;
		this.buttonRecycler = null;
		this.curSection = null;
		
		this.onEnabled = function() {
			renko.timer.createFrameDelay(function() {
				this.setSection(MenuStates.general);
			}.bind(this));
		}
		
		this.bindInfo = function() {
			this.scrollviewDisplay.bindInfo(this);
			this.sectionDisplay.bindInfo(this);
		}
		
		this.setSection = function(section) {
			this.curSection = section;
			
			this.bindInfo();
		}
		
		renko.registerAwake(this, function() {
			this.inputRecycler = new Recycler(function() {
				var input = new lib.Sidebar_Item_Input();
				this.scrollviewDisplay.addChild(input);
				return input;
			}.bind(this));
			
			this.textRecycler = new Recycler(function() {
				var text = new lib.Sidebar_Item_Text();
				this.scrollviewDisplay.addChild(text);
				return text;
			}.bind(this));
			
			this.toggleRecycler = new Recycler(function() {
				var toggle = new lib.Sidebar_Item_Toggle();
				this.scrollviewDisplay.addChild(toggle);
				return toggle;
			}.bind(this));
			
			this.buttonRecycler = new Recycler(function() {
				var button = new lib.Sidebar_Item_Button();
				this.scrollviewDisplay.addChild(button);
				return button;
			}.bind(this));
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Section
	this.sectionDisplay = new lib.Sidebar_Section();
	this.sectionDisplay.name = "sectionDisplay";
	this.sectionDisplay.parent = this;
	this.sectionDisplay.setTransform(565,0,1,1,0,0,0,-105,279);

	this.timeline.addTween(cjs.Tween.get(this.sectionDisplay).wait(1));

	// Scrollview
	this.scrollviewDisplay = new lib.Sidebar_Scrollview();
	this.scrollviewDisplay.name = "scrollviewDisplay";
	this.scrollviewDisplay.parent = this;
	this.scrollviewDisplay.setTransform(-479.9,-324);

	this.timeline.addTween(cjs.Tween.get(this.scrollviewDisplay).wait(1));

	// BarBG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.8)").s().p("EgY/A4QMAAAhwfMAx/AAAMAAABwfg");
	this.shape.setTransform(-480,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sidebar_Container, new cjs.Rectangle(-640,-360,1310,720), null);


(lib.App_Container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		renko.registerView(this, "app");
		
		// this.particleDisplay;
		// this.playButton;
		// this.stopButton;
		// this.resetButton;
		// this.compileButton;
		// this.codeButton;
		
		this.onEnabled = function() {
			renko.showView("sidebar");
		}
		
		this.onPlayButton = function() {
			this.particleDisplay.startPlayback();
		}
		
		this.onStopButton = function() {
			this.particleDisplay.stopPlayback();
		}
		
		this.onResetButton = function() {
			ResetMenuState();
			this.onCompileButton();
			renko.views.sidebar.bindInfo();
		}
		
		this.onCompileButton = function() {
			var newParticle = particleBuilder.compile(this.particleDisplay.particle);
			if(newParticle !== null)
				this.particleDisplay.setParticle(newParticle);
		}
		
		this.onCodeButton = function() {
			particleBuilder.copyCode(this.particleDisplay.particle);
		}
		
		renko.registerAwake(this, function() {
			this.playButton.addEventListener("click", this.onPlayButton.bind(this));
			this.stopButton.addEventListener("click", this.onStopButton.bind(this));
			this.resetButton.addEventListener("click", this.onResetButton.bind(this));
			this.compileButton.addEventListener("click", this.onCompileButton.bind(this));
			this.codeButton.addEventListener("click", this.onCodeButton.bind(this));
			
			renko.timer.createDelay(1, 0, function() {
				renko.showView("app");
			}.bind(this));
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// CodeButton
	this.codeButton = new lib.App_CodeButton();
	this.codeButton.name = "codeButton";
	this.codeButton.parent = this;
	this.codeButton.setTransform(95.5,-318.5);
	new cjs.ButtonHelper(this.codeButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.codeButton).wait(1));

	// CompileButton
	this.compileButton = new lib.App_CompileButton();
	this.compileButton.name = "compileButton";
	this.compileButton.parent = this;
	this.compileButton.setTransform(-95.5,-318.5);
	new cjs.ButtonHelper(this.compileButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.compileButton).wait(1));

	// ResetButton
	this.resetButton = new lib.App_ResetButton();
	this.resetButton.name = "resetButton";
	this.resetButton.parent = this;
	this.resetButton.setTransform(170,318.5);
	new cjs.ButtonHelper(this.resetButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.resetButton).wait(1));

	// StopButton
	this.stopButton = new lib.App_StopButton();
	this.stopButton.name = "stopButton";
	this.stopButton.parent = this;
	this.stopButton.setTransform(0,318.5);
	new cjs.ButtonHelper(this.stopButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stopButton).wait(1));

	// PlayButton
	this.playButton = new lib.App_PlayButton();
	this.playButton.name = "playButton";
	this.playButton.parent = this;
	this.playButton.setTransform(-170,318.5);
	new cjs.ButtonHelper(this.playButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(1));

	// Particle
	this.particleDisplay = new lib.App_ParticleHolder();
	this.particleDisplay.name = "particleDisplay";
	this.particleDisplay.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.particleDisplay).wait(1));

	// Temp
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.App_Container, new cjs.Rectangle(-640,-360,1280,720), null);


// stage content:
(lib.ParticleMaker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Prefabs
	this.instance = new lib.Sidebar_Item_Button();
	this.instance.parent = this;
	this.instance.setTransform(640,810.8);

	this.instance_1 = new lib.App_ParticleSprite();
	this.instance_1.parent = this;
	this.instance_1.setTransform(854.5,827.1);

	this.instance_2 = new lib.Sidebar_Item_Toggle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(640,810.8);

	this.instance_3 = new lib.Sidebar_Item_Text();
	this.instance_3.parent = this;
	this.instance_3.setTransform(640,810.8);

	this.instance_4 = new lib.Sidebar_Item_Input();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640,810.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Sidebar
	this.instance_5 = new lib.Sidebar_Container();
	this.instance_5.parent = this;
	this.instance_5.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// App
	this.instance_6 = new lib.App_Container();
	this.instance_6.parent = this;
	this.instance_6.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1310,859.1);
// library properties:
lib.properties = {
	id: '28B88FD4D67144BE8AF924AD041BE53C',
	width: 1280,
	height: 720,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sprite_5.png?1547515953413", id:"sprite_5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['28B88FD4D67144BE8AF924AD041BE53C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;