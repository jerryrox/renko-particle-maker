# renko-particle-maker
  
This project aims to provide a visual-editing experience in working with the ParticleSystem component in [animate-renko-utils](https://github.com/jerryrox/animate-renko-utils) library.  
Without this app, it would be a tedious task to code a single particle effect with all those simulations going on in your head.  
By using this application, you can easily create particle effects by using its GUIs and automatic code generation routine provided for you.  
Below is an example of the code which you'd get after some tweaks.  
```
this.stop();

this.particle = null;
this.settings = null;
this.emission = null;
this.shapeMod = null;
this.alphaMod = null;
this.colorMod = null;
this.gravityMod = null;


this.playParticle = function() {
    this.particle.play();
}
this.stopParticle = function() {
    this.particle.stop();
}
this.setActive = function(isActive) {
    this.particle.setActive(isActive);
    if(!isActive) {
        this.particle.clear();
    }
}
this.destroy = function() {
    this.particle.destroy();
}
this.setSpeed = function(speed) {
    this.settings.setSpeed(speed);
}

this.setEmissionRate = function(rate) {
    this.emission.setEmissionRate(rate);
}

this.setGravity = function(gravity) {
    this.gravityMod.setGravity(gravity);
}

renko.registerAwake(this, function() {

    this.particle = new ParticleSystem(this, function() {
        return new lib.My_Sprite_Class();
    });
    this.settings = this.particle.settings;
    this.settings.setMaxParticles(1000);
    this.settings.setDuration(5);
    this.settings.setIsLoop(true);
    this.settings.setSpeed(1);
    this.settings.setAliveTime(1, 1);
    this.settings.setStartRotation(0, 0);
    this.settings.setStartScale(1, 1);
    this.settings.setStartColor({"r":1,"g":1,"b":1,"a":1}, {"r":1,"g":1,"b":1,"a":1});
    this.setActive(false);

    this.emission = this.particle.emission;
    this.emission.setEmissionRate(10);

    this.shapeMod = new ParticleShape(this.particle);
    this.particle.addModifier(this.shapeMod);
    this.shapeMod.setOffset(0, -120);
    this.shapeMod.setRotation(0);
    this.shapeMod.setShapeLine(200, false);

    this.alphaMod = new ParticleAlpha(this.particle);
    this.particle.addModifier(this.alphaMod);
    this.alphaMod.setEase(function(progress) {
        progress = Easing.CubicEaseIn(progress, 0, 1, this.settings.duration);

        if(progress < 0.05)
            return Easing.Linear((progress - 0) / (0.05), 0, 1, 0);

        return Easing.Linear((progress - 0.05) / (0.95), 1, -1, 0);
    }.bind(this));

    this.colorMod = new ParticleColor(this.particle);
    this.particle.addModifier(this.colorMod);
    this.colorMod.setEase(function(color, progress) {
        progress = Easing.Linear(progress, 0, 1, this.settings.duration);

        if(progress < 0.5) {
            progress = (progress - 0) / (0.5);
            color[0] = Easing.Linear(progress, 1, -1, 0);
            color[1] = Easing.Linear(progress, 1, -1, 0);
            color[2] = Easing.Linear(progress, 1, 0, 0);
            color[3] = Easing.Linear(progress, 1, 0, 0);
            return color;
        }

        progress = (progress - 0.5) / (0.5);
        color[0] = Easing.Linear(progress, 0, 1, 0);
        color[1] = Easing.Linear(progress, 0, 0, 0);
        color[2] = Easing.Linear(progress, 1, -1, 0);
        color[3] = Easing.Linear(progress, 1, 0, 0);
        return color;

    }.bind(this));

    this.gravityMod = new ParticleGravity(this.particle);
    this.particle.addModifier(this.gravityMod);
    this.gravityMod.setGravity(9.81);

});
```

### To-Dos
- Fix texts overflowing outside the bounds.
- Support scrolling on the left-side panel.
- Catch other possible exceptions.
- Show alert messages wherever necessary
- Improve code line spacing
