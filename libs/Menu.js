function ShowCompileError(menuTitle, message) {
    alert(`Error while compiling at ${menuTitle} menu: ${message}`);
}
function FindParticleMod(particle, className) {
    for(var i=0; i<particle.modifiers.length; i++) {
        var mod = particle.modifiers[i];
        if(mod.constructor.name === className) {
            return mod;
        }
    }
    return null;
}

class ContainerInfo {

    // this.menuInfo;

    constructor(menuInfo) {
        this.menuInfo = menuInfo;
    }

    /**
     * Handles certain task for compilation.
     * Returns whether compilation was successful.
     */
    compile(particle) {
        if(typeof this.menuInfo.compile === "function") {
            return this.menuInfo.compile(particle);
        }
        return true;
    }

    /**
     * Handles code building.
     * Returns an object that contains code information.
     */
    buildCode(particle) {
        if(typeof this.menuInfo.buildCode === "function") {
            return this.menuInfo.buildCode(particle);
        }
        return new CodeInfo();
    }
}

class GeneralMenuInfo {

    // this.title;
    // this.items;

    constructor() {
        this.title = "General";
        this.items = [
            new MenuItemInput("MaxParticles", 1000),
            new MenuItemInput("Duration", 5),
            new MenuItemToggle("IsLoop", true),
            new MenuItemInput("Speed", 1),
            new MenuItemInput("AliveTime", 1),
            new MenuItemInput("StartRotation", 0),
            new MenuItemInput("StartScale", 1),
            new MenuItemInput("StartColor", null),
            new MenuItemInput("SpriteClass", "lib.My_Sprite_Class")
        ];
    }

    compile(particle) {
        var maxParticles = parseInt(this.items[0].value);
        var duration = parseFloat(this.items[1].value);
        var isLoop = this.items[2].value;
        var speed = parseFloat(this.items[3].value);
        var aliveTime = parseFloat(this.items[4].value);

        var startRotation = this.items[5].value;
        if(startRotation.indexOf(",") < 0) {
            startRotation = parseFloat(startRotation);
        }
        else {
            startRotation = startRotation.split(",");
            startRotation[0] = parseFloat(startRotation[0]);
            startRotation[1] = parseFloat(startRotation[1]);
        }

        var startScale = this.items[6].value;
        if(startScale.indexOf(",") < 0) {
            startScale = parseFloat(startScale);
        }
        else {
            startScale = startScale.split(",");
            startScale[0] = parseFloat(startScale[0]);
            startScale[1] = parseFloat(startScale[1]);
        }

        var startColor = this.items[7].value;
        if(startColor.indexOf("null") >= 0) {
            startColor = "#fff";
        }
        if(startColor.indexOf(",") < 0) {
            startColor = renko.hexColor.create(startColor);
        }
        else {
            startColor = startColor.split(",");
            startColor[0] = renko.hexColor.create(startColor[0]);
            startColor[1] = renko.hexColor.create(startColor[1]);
        }

        if(isNaN(maxParticles)) {
            ShowCompileError(this.title, "MaxParticles is not a valid number!");
            return false;
        }
        if(isNaN(duration)) {
            ShowCompileError(this.title, "Duration is not a valid number!");
            return false;
        }
        if(isNaN(speed)) {
            ShowCompileError(this.title, "Speed is not a valid number!");
            return false;
        }
        if(isNaN(aliveTime)) {
            ShowCompileError(this.title, "AliveTime is not a valid number!");
            return false;
        }
        if((!(startRotation instanceof Array) && isNaN(startRotation)) ||
            (startRotation instanceof Array && (isNaN(startRotation[0]) || isNaN(startRotation[1])))) {
            ShowCompileError(this.title, "StartRotation is not a valid number nor Array<number>!");
            return false;
        }
        if((!(startScale instanceof Array) && isNaN(startScale)) ||
            (startScale instanceof Array && (isNaN(startScale[0]) || isNaN(startScale[1])))) {
            ShowCompileError(this.title, "StartScale is not a valid number nor Array<number>!");
            return false;
        }

        particle.settings.setMaxParticles(maxParticles);
        particle.settings.setDuration(duration);
        particle.settings.setIsLoop(isLoop);
        particle.settings.setSpeed(speed);
        particle.settings.setAliveTime(aliveTime);

        if(startRotation instanceof Array) {
            particle.settings.setStartRotation(startRotation[0], startRotation[1]);
        }
        else {
            particle.settings.setStartRotation(startRotation);
        }

        if(startScale instanceof Array) {
            particle.settings.setStartScale(startScale[0], startScale[1]);
        }
        else {
            particle.settings.setStartScale(startScale);
        }

        if(startColor instanceof Array) {
            particle.settings.setStartColor(startColor[0], startColor[1]);
        }
        else {
            particle.settings.setStartColor(startColor);
        }
        
        return true;
    }

    buildCode(particle) {
        var settings = particle.settings;

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("particle"));
        codeInfo.addModifier(new ModifierCodeInfo("settings"));
        codeInfo.addController(new ControllerCodeInfo(`
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
        `));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.particle = new ParticleSystem(this, function() {
        return new ${this.items[8].value}();
    });
    this.settings = this.particle.settings;
    this.settings.setMaxParticles(${settings.maxParticles});
    this.settings.setDuration(${settings.duration});
    this.settings.setIsLoop(${settings.isLoop});
    this.settings.setSpeed(${settings.speed});
    this.settings.setAliveTime(${settings.aliveTime[0]}, ${settings.aliveTime[1]});
    this.settings.setStartRotation(${settings.startRotation[0]}, ${settings.startRotation[1]});
    this.settings.setStartScale(${settings.startScale[0]}, ${settings.startScale[1]});
    this.settings.setStartColor(${JSON.stringify(settings.startColor[0])}, ${JSON.stringify(settings.startColor[1])});
    this.setActive(false);
        `));
        return codeInfo;
    }
}

class EmissionMenuInfo {

    // this.title;
    // this.items;
    // this.burstItems;

    constructor() {
        this.title = "Emission";
        this.items = [
            new MenuItemInput("EmissionRate", 10),
            new MenuItemButton("Add Burst")
        ];
        this.burstItems = [];

        this.items[1].setListener(this.onAddBurst.bind(this));
    }

    onAddBurst() {
        var input = new MenuItemInput("Params", "0,0,0");
        this.burstItems.push(input);
        this.items.push(input);

        const removeButton = new MenuItemButton("Remove");
        removeButton.setListener(function() {
            for(var i=0; i<this.items.length; i++) {
                if(this.items[i] === removeButton) {
                    this.items.splice(i-1, 2);
                    this.burstItems.splice(i-2-1, 2);
                    renko.views.sidebar.bindInfo();
                    break;
                }
            }
        }.bind(this));
        this.burstItems.push(removeButton);
        this.items.push(removeButton);

        renko.views.sidebar.bindInfo();
    }

    compile(particle) {
        var emissionRate = this.items[0].value;
        var burstCount = this.burstItems.length / 2;
        var bursts = [];
        for(var i=0; i<burstCount; i++) {
            var burst = this.burstItems[i*2].value.split(",");
            if(burst.length < 2) {
                ShowCompileError(this.title, `Burst at index ${i/2} is not a valid format!`);
                return false;
            }
            burst[0] = parseFloat(burst[0]);
            burst[1] = parseInt(burst[1]);
            if(isNaN(burst[0])) {
                ShowCompileError(this.title, `Burst time at index ${i/2} is not a valid number!`);
                return false;
            }
            if(isNaN(burst[1])) {
                ShowCompileError(this.title, `Burst minCount at index ${i/2} is not a valid number!`);
                return false;
            }
            if(burst.length > 2) {
                burst[2] = parseInt(burst[2]);
                if(isNaN(burst[2])) {
                    ShowCompileError(this.title, `Burst maxCount at index ${i/2} is not a valid number!`);
                    return false;
                }
            }
            bursts.push(burst);
        }
        this.sortBurst(bursts);

        if(isNaN(emissionRate)) {
            ShowCompileError(this.title, "EmissionRate is not a valid number!");
            return false;
        }

        particle.emission.setEmissionRate(emissionRate);
        for(var i=0; i<bursts.length; i++) {
            var burst = bursts[i];
            if(burst.length === 2) {
                particle.emission.addBurst(burst[0], burst[1]);
            }
            else {
                particle.emission.addBurst(burst[0], burst[1], burst[2]);
            }
        }

        return true;
    }

    buildCode(particle) {
        var emission = particle.emission;

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("emission"));
        codeInfo.addController(new ControllerCodeInfo(`
this.setEmissionRate = function(rate) {
    this.emission.setEmissionRate(rate);
}
        `));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.emission = this.particle.emission;
    this.emission.setEmissionRate(${emission.emissionRate});
        `));
        for(var i=0; i<emission.bursts.length; i++) {
            var burst = emission.bursts[i];
            codeInfo.addBuilder(new BuilderCodeInfo(
    `this.emission.addBurst(${burst.time}, ${burst.range[0]}, ${burst.range[1]});
            `));
        }
        return codeInfo;
    }

    sortBurst(bursts) {
        bursts.sort((a, b) => a[0] - b[0]);
    }
}

class ShapeMenuInfo {

    // this.title;
    // this.items;

    constructor() {
        this.title = "Shape";
        this.items = [
            new MenuItemToggle("IsEnabled", false),
            new MenuItemInput("Offset", "0,0"),
            new MenuItemInput("Rotation", 0),
            new MenuItemToggle("ShapeNone", true),
            new MenuItemToggle("ShapeCircle", false),
            new MenuItemToggle("ShapeLine", false),
            new MenuItemToggle("ShapeRectangle", false),
        ];

        this.items[0].setListener(function() {renko.views.sidebar.bindInfo()});
        this.items[3].setListener(this.onShapeNone.bind(this));
        this.items[4].setListener(this.onShapeCircle.bind(this));
        this.items[5].setListener(this.onShapeLine.bind(this));
        this.items[6].setListener(this.onShapeRectangle.bind(this));
    }

    isEnabled() { return this.items[0].value; }

    trimShapeItems() {
        if(this.items.length > 7) {
            this.items.splice(7, this.items.length-7);
        }
    }

    setShapeFocus(index) {
        for(var i=3; i<7; i++) {
            this.items[i].value = i === index;
            this.items[i].refreshItem();
        }
    }

    onShapeNone() {
        this.trimShapeItems();
        this.setShapeFocus(3);
        renko.views.sidebar.bindInfo();
    }

    onShapeCircle() {
        this.trimShapeItems();
        this.setShapeFocus(4);
        this.items.push(new MenuItemInput("Radius", 0));
        this.items.push(new MenuItemToggle("IsOnEdge", true));
        renko.views.sidebar.bindInfo();
    }

    onShapeLine() {
        this.trimShapeItems();
        this.setShapeFocus(5);
        this.items.push(new MenuItemInput("Width", 0));
        this.items.push(new MenuItemToggle("IsVertical", true));
        renko.views.sidebar.bindInfo();
    }

    onShapeRectangle() {
        this.trimShapeItems();
        this.setShapeFocus(6);
        this.items.push(new MenuItemInput("Width", 0));
        this.items.push(new MenuItemInput("Height", 0));
        this.items.push(new MenuItemToggle("IsOnEdge", true));
        renko.views.sidebar.bindInfo();
    }

    compile(particle) {
        var isEnabled = this.items[0].value;
        if(isEnabled !== true) {
            return true;
        }
        var offset = this.items[1].value.split(",");
        if(!(offset instanceof Array)) {
            ShowCompileError(this.title, "Offset is not a valid Array<number>!");
            return false;
        }
        else {
            if(offset.length < 2) {
                ShowCompileError(this.title, "Offset array must have a length of 2!");
                return false;
            }
            offset[0] = parseFloat(offset[0]);
            offset[1] = parseFloat(offset[1]);
            if(isNaN(offset[0]) || isNaN(offset[1])) {
                ShowCompileError(this.title, "Offset array has a non-number value!");
                return false;
            }
        }
        var rotation = parseFloat(this.items[2].value);
        if(isNaN(rotation)) {
            ShowCompileError(this.title, "Rotation is not a valid number!");
            return false;
        }

        var shapeMod = new ParticleShape(particle);

        if(this.items[3].value === true) {
        }
        else if(this.items[4].value === true) {
            var radius = parseFloat(this.items[7].value);
            var isOnEdge = this.items[8].value;
            if(isNaN(radius)) {
                ShowCompileError(this.title, "Radius is not a valid number!");
                return false;
            }
            shapeMod.setShapeCircle(radius, isOnEdge);
        }
        else if(this.items[5].value === true) {
            var width = parseFloat(this.items[7].value);
            var isVertical = this.items[8].value;
            if(isNaN(width)) {
                ShowCompileError(this.title, "Width is not a valid number!");
                return false;
            }
            shapeMod.setShapeLine(width, isVertical);
        }
        else if(this.items[6].value === true) {
            var width = parseFloat(this.items[7].value);
            var height = parseFloat(this.items[8].value);
            var isOnEdge = this.items[9].value;
            if(isNaN(width)) {
                ShowCompileError(this.title, "Width is not a valid number!");
                return false;
            }
            if(isNaN(height)) {
                ShowCompileError(this.title, "Height is not a valid number!");
                return false;
            }
            shapeMod.setShapeRectangle(width, height, isOnEdge);
        }
        else {
            ShowCompileError(this.title, "Unknown shape mode!");
            return false;
        }

        shapeMod.setOffset(offset[0], offset[1]);
        shapeMod.setRotation(rotation);
        particle.addModifier(shapeMod);

        return true;
    }

    buildCode(particle) {
        var shape = FindParticleMod(particle, "ParticleShape");
        if(shape === null) {
            return null;
        }

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("shapeMod"));
        codeInfo.addController(new ControllerCodeInfo(`
this.setOffset = function(x, y) {
    this.shapeMod.setOffset(x, y);
}
        `));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.shapeMod = new ParticleShape(this.particle);
    this.particle.addModifier(this.shapeMod);
    this.shapeMod.setOffset(${shape.offsets[0]}, ${shape.offsets[1]});
    this.shapeMod.setRotation(${shape.rotation});`
        ));
        if(shape.modeParams[0] === 0) {
            codeInfo.addBuilder(new BuilderCodeInfo(`
    this.shapeMod.setShapeNone();
            `));
        }
        else if(shape.modeParams[0] === 1) {
            codeInfo.addBuilder(new BuilderCodeInfo(`
    this.shapeMod.setShapeCircle(${shape.modeParams[1]}, ${shape.modeParams[2]});
            `));
        }
        else if(shape.modeParams[0] === 2) {
            codeInfo.addBuilder(new BuilderCodeInfo(`
    this.shapeMod.setShapeLine(${shape.modeParams[1]}, ${shape.modeParams[2]});
            `));
        }
        else if(shape.modeParams[0] === 3) {
            codeInfo.addBuilder(new BuilderCodeInfo(`
    this.shapeMod.setShapeRectangle(${shape.modeParams[1]}, ${shape.modeParams[2]}, ${shape.modeParams[3]});
            `));
        }
        return codeInfo;
    }
}

class AlphaMenuInfo {

    // this.title;
    // this.items;
    // this.keys;
    // this.easeFunction;

    constructor() {
        this.title = "Alpha";
        this.items = [
            new MenuItemToggle("IsEnabled", false),
            new MenuItemInput("EaseType", "Linear"),
            new MenuItemButton("Add Key"),
            new MenuItemButton("Remove Last"),
            new MenuItemInput("Key", "0,0"),
            new MenuItemInput("Key", "0.1,1"),
            new MenuItemInput("Key", "1,0")
        ];
        this.keys = [];
        this.easeFunction = "Linear";

        this.items[0].setListener(function() {renko.views.sidebar.bindInfo()});
        this.items[2].setListener(this.onAddKey.bind(this));
        this.items[3].setListener(this.onRemoveLast.bind(this));
    }

    isEnabled() { return this.items[0].value; }

    onAddKey() {
        this.items.push(new MenuItemInput("Key", "0,0"))
        renko.views.sidebar.bindInfo();
    }

    onRemoveLast() {
        if(this.items.length > 4) {
            this.items.pop();
        }
        renko.views.sidebar.bindInfo();
    }

    compile(particle) {
        var isEnabled = this.items[0].value;
        if(isEnabled !== true) {
            return true;
        }
        var easeType = Easing[this.items[1].value];
        if(typeof easeType !== "function") {
            ShowCompileError(this.title, "EaseType is not a valid Easing function!");
            return false;
        }

        var keys = [];
        var keyCount = this.items.length - 4;
        if(keyCount <= 0) {
            ShowCompileError(this.title, "There must be at least one key!");
            return false;
        }
        for(var i=0; i<keyCount; i++) {
            var key = this.items[i+4].value.split(",");
            if(key.length < 2) {
                ShowCompileError(this.title, `Key at index ${i} has an invalid format!`);
                return false;
            }
            key[0] = parseFloat(key[0]);
            key[1] = parseFloat(key[1]);
            if(isNaN(key[0])) {
                ShowCompileError(this.title, `Key time at index ${i} is not a valid number!`);
                return false;
            }
            if(isNaN(key[1])) {
                ShowCompileError(this.title, `Key alpha at index ${i} is not a valid number!`);
                return false;
            }
            keys.push(key);
        }
        this.sortKeys(keys);

        this.keys = keys;
        this.easeFunction = this.items[1].value;

        var alphaMod = new ParticleAlpha(particle);
        if(keys.length === 1) {
            alphaMod.setEase(function() {
                return keys[0][1];
            });
        }
        else {
            alphaMod.setEase(function(progress) {
                progress = easeType(progress, 0, 1, particle.settings.duration);
                for(var i=0; i<keys.length-1; i++) {
                    var curKey = keys[i];
                    var nextKey = keys[i+1];
                    if(progress > nextKey[0]) {
                        continue;
                    }
                    return Easing.Linear(
                        (progress - curKey[0]) / (nextKey[0] - curKey[0]),
                        curKey[1],
                        nextKey[1] - curKey[1],
                        0
                    );
                }
                return keys.getLast()[1];
            });
        }
        particle.addModifier(alphaMod);

        return true;
    }

    buildCode(particle) {
        var alpha = FindParticleMod(particle, "ParticleAlpha");
        if(alpha === null) {
            return null;
        }

        var easeContent = "";
        if(this.keys.length === 1) {
            easeContent = `\t\treturn ${this.keys[0][1]}`;
        }
        else {
            for(var i=1; i<this.keys.length; i++) {
                var prevKey = this.keys[i-1];
                var key = this.keys[i];

                easeContent += (`
        ${i==this.keys.length-1 ? "" : `${i==1 ? "" : "else "}if(progress < ${key[0]})`}
        ${i==this.keys.length-1 ? "" : "\t"}return Easing.Linear((progress - ${prevKey[0]}) / (${key[0] - prevKey[0]}), ${prevKey[1]}, ${key[1]-prevKey[1]}, 0);`
                );
            }
        }

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("alphaMod"));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.alphaMod = new ParticleAlpha(this.particle);
    this.particle.addModifier(this.alphaMod);
    this.alphaMod.setEase(function(progress) {
        progress = Easing.${this.easeFunction}(progress, 0, 1, this.settings.duration);
        ${easeContent}
    }.bind(this));
        `));
        return codeInfo;
    }

    sortKeys(keys) {
        keys.sort((a, b) => a[0] - b[0]);
    }
}

class ColorMenuInfo {

    // this.title;
    // this.items;
    // this.keys;
    // this.easeFunction;

    constructor() {
        this.title = "Color";
        this.items = [
            new MenuItemToggle("IsEnabled", false),
            new MenuItemInput("EaseType", "Linear"),
            new MenuItemButton("Add Key"),
            new MenuItemButton("Remove Last"),
            new MenuItemInput("Key", "0,#ffffff"),
            new MenuItemInput("Key", "1,#000000")
        ];
        this.keys = [];
        this.easeFunction = "Linear";

        this.items[0].setListener(function() {renko.views.sidebar.bindInfo()});
        this.items[2].setListener(this.onAddKey.bind(this));
        this.items[3].setListener(this.onRemoveLast.bind(this));
    }

    isEnabled() { return this.items[0].value; }

    onAddKey() {
        this.items.push(new MenuItemInput("Key", "0,#ffffff"))
        renko.views.sidebar.bindInfo();
    }

    onRemoveLast() {
        if(this.items.length > 4) {
            this.items.pop();
        }
        renko.views.sidebar.bindInfo();
    }

    compile(particle) {
        var isEnabled = this.items[0].value;
        if(isEnabled !== true) {
            return true;
        }
        var easeType = Easing[this.items[1].value];
        if(typeof easeType !== "function") {
            ShowCompileError(this.title, "EaseType is not a valid Easing function!");
            return false;
        }

        var keys = [];
        var keyCount = this.items.length - 4;
        if(keyCount <= 0) {
            ShowCompileError(this.title, "There must be at least one key!");
            return false;
        }
        for(var i=0; i<keyCount; i++) {
            var key = this.items[i+4].value.split(",");
            if(key.length < 2) {
                ShowCompileError(this.title, `Key at index ${i} has an invalid format!`);
                return false;
            }
            key[0] = parseFloat(key[0]);
            key[1] = renko.hexColor.create(key[1]);
            key[1] = [key[1].r, key[1].g, key[1].b, key[1].a];
            if(isNaN(key[0])) {
                ShowCompileError(this.title, `Key time at index ${i} is not a valid number!`);
                return false;
            }
            keys.push(key);
        }
        this.sortKeys(keys);

        this.keys = keys;
        this.easeFunction = this.items[1].value;

        var colorMod = new ParticleColor(particle);
        if(keys.length === 1) {
            colorMod.setEase(function() {
                return keys[0][1];
            });
        }
        else {
            colorMod.setEase(function(color, progress) {
                progress = easeType(progress, 0, 1, particle.settings.duration);
                for(var i=0; i<keys.length-1; i++) {
                    var curKey = keys[i];
                    var nextKey = keys[i+1];
                    if(progress > nextKey[0]) {
                        continue;
                    }
                    progress = (progress - curKey[0]) / (nextKey[0] - curKey[0]);
                    for(var c=0; c<4; c++) {
                        color[c] = Easing.Linear(progress, curKey[1][c], nextKey[1][c] - curKey[1][c], 0);
                    }
                    return color;
                }
                return keys.getLast()[1];
            });
        }
        particle.addModifier(colorMod);

        return true;
    }

    buildCode(particle) {
        var color = FindParticleMod(particle, "ParticleColor");
        if(color === null) {
            return null;
        }

        var easeContent = "";
        if(this.keys.length === 1) {
            easeContent = `
        color[0] = ${this.keys[0][1][0]};
        color[1] = ${this.keys[0][1][1]};
        color[2] = ${this.keys[0][1][2]};
        color[3] = ${this.keys[0][1][3]};
        return color;
            `;
        }
        else {
            for(var i=1; i<this.keys.length; i++) {
                var prevKey = this.keys[i-1];
                var key = this.keys[i];

                easeContent += (`
        ${i==this.keys.length-1 ? "" : `${i==1 ? "" : "else "}if(progress < ${key[0]}) {`}
        ${i==this.keys.length-1 ? "" : "\t"}progress = (progress - ${prevKey[0]}) / (${key[0] - prevKey[0]});
        ${i==this.keys.length-1 ? "" : "\t"}color[0] = Easing.Linear(progress, ${prevKey[1][0]}, ${key[1][0]-prevKey[1][0]}, 0);
        ${i==this.keys.length-1 ? "" : "\t"}color[1] = Easing.Linear(progress, ${prevKey[1][1]}, ${key[1][1]-prevKey[1][1]}, 0);
        ${i==this.keys.length-1 ? "" : "\t"}color[2] = Easing.Linear(progress, ${prevKey[1][2]}, ${key[1][2]-prevKey[1][2]}, 0);
        ${i==this.keys.length-1 ? "" : "\t"}color[3] = Easing.Linear(progress, ${prevKey[1][3]}, ${key[1][3]-prevKey[1][3]}, 0);
        ${i==this.keys.length-1 ? "" : "\t"}return color;
        ${i==this.keys.length-1 ? "" : "}"}`
                );
            }
        }

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("colorMod"));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.colorMod = new ParticleColor(this.particle);
    this.particle.addModifier(this.colorMod);
    this.colorMod.setEase(function(color, progress) {
        progress = Easing.${this.easeFunction}(progress, 0, 1, this.settings.duration);
        ${easeContent}
    }.bind(this));
        `));
        return codeInfo;
    }

    sortKeys(keys) {
        keys.sort((a, b) => a[0] - b[0]);
    }
}

class ScaleMenuInfo {

    // this.title;
    // this.items;
    // this.keys;
    // this.easeFunction;

    constructor() {
        this.title = "Scale";
        this.items = [
            new MenuItemToggle("IsEnabled", false),
            new MenuItemInput("EaseType", "Linear"),
            new MenuItemButton("Add Key"),
            new MenuItemButton("Remove Last"),
            new MenuItemInput("Key", "0,1"),
            new MenuItemInput("Key", "1,0")
        ];
        this.keys = [];
        this.easeFunction = "Linear";

        this.items[0].setListener(function() {renko.views.sidebar.bindInfo()});
        this.items[2].setListener(this.onAddKey.bind(this));
        this.items[3].setListener(this.onRemoveLast.bind(this));
    }

    isEnabled() { return this.items[0].value; }

    onAddKey() {
        this.items.push(new MenuItemInput("Key", "0,0"))
        renko.views.sidebar.bindInfo();
    }

    onRemoveLast() {
        if(this.items.length > 4) {
            this.items.pop();
        }
        renko.views.sidebar.bindInfo();
    }

    compile(particle) {
        var isEnabled = this.items[0].value;
        if(isEnabled !== true) {
            return true;
        }
        var easeType = Easing[this.items[1].value];
        if(typeof easeType !== "function") {
            ShowCompileError(this.title, "EaseType is not a valid Easing function!");
            return false;
        }

        var keys = [];
        var keyCount = this.items.length - 4;
        if(keyCount <= 0) {
            ShowCompileError(this.title, "There must be at least one key!");
            return false;
        }
        for(var i=0; i<keyCount; i++) {
            var key = this.items[i+4].value.split(",");
            if(key.length < 2) {
                ShowCompileError(this.title, `Key at index ${i} has an invalid format!`);
                return false;
            }
            key[0] = parseFloat(key[0]);
            key[1] = parseFloat(key[1]);
            if(isNaN(key[0])) {
                ShowCompileError(this.title, `Key time at index ${i} is not a valid number!`);
                return false;
            }
            if(isNaN(key[1])) {
                ShowCompileError(this.title, `Key scale at index ${i} is not a valid number!`);
                return false;
            }
            keys.push(key);
        }
        this.sortKeys(keys);

        this.keys = keys;
        this.easeFunction = this.items[1].value;

        var scaleMod = new ParticleScale(particle);
        if(keys.length === 1) {
            scaleMod.setEaseXY(function() {
                return keys[0][1];
            });
        }
        else {
            scaleMod.setEaseXY(function(progress) {
                progress = easeType(progress, 0, 1, particle.settings.duration);
                for(var i=0; i<keys.length-1; i++) {
                    var curKey = keys[i];
                    var nextKey = keys[i+1];
                    if(progress > nextKey[0]) {
                        continue;
                    }
                    return Easing.Linear(
                        (progress - curKey[0]) / (nextKey[0] - curKey[0]),
                        curKey[1],
                        nextKey[1] - curKey[1],
                        0
                    );
                }
                return keys.getLast()[1];
            });
        }
        particle.addModifier(scaleMod);

        return true;
    }

    buildCode(particle) {
        var scale = FindParticleMod(particle, "ParticleScale");
        if(scale === null) {
            return null;
        }

        var easeContent = "";
        if(this.keys.length === 1) {
            easeContent = `\t\treturn ${this.keys[0][1]}`;
        }
        else {
            for(var i=1; i<this.keys.length; i++) {
                var prevKey = this.keys[i-1];
                var key = this.keys[i];

                easeContent += (`
        ${i==this.keys.length-1 ? "" : `${i==1 ? "" : "else "}if(progress < ${key[0]})`}
        ${i==this.keys.length-1 ? "" : "\t"}return Easing.Linear((progress - ${prevKey[0]}) / (${key[0] - prevKey[0]}), ${prevKey[1]}, ${key[1]-prevKey[1]}, 0);`)
                ;
            }
        }

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("scaleMod"));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.scaleMod = new ParticleScale(this.particle);
    this.particle.addModifier(this.scaleMod);
    this.scaleMod.setEaseXY(function(progress) {
        progress = Easing.${this.easeFunction}(progress, 0, 1, this.settings.duration);
        ${easeContent}
    }.bind(this));
        `));
        return codeInfo;
    }

    sortKeys(keys) {
        keys.sort((a, b) => a[0] - b[0]);
    }
}

class GravityMenuInfo {

    // this.title;
    // this.items;

    constructor() {
        this.title = "Gravity";
        this.items = [
            new MenuItemToggle("IsEnabled", false),
            new MenuItemInput("Gravity", 9.81)
        ];

        this.items[0].setListener(function() {renko.views.sidebar.bindInfo()});
    }

    isEnabled() { return this.items[0].value; }

    compile(particle) {
        var isEnabled = this.items[0].value;
        if(isEnabled !== true) {
            return true;
        }

        var gravity = parseFloat(this.items[1].value);
        if(isNaN(gravity)) {
            ShowCompileError(this.title, "Gravity is not a valid number!");
            return false;
        }

        var gravityMod = new ParticleGravity(particle);
        gravityMod.setGravity(gravity);
        particle.addModifier(gravityMod);

        return true;
    }

    buildCode(particle) {
        var gravity = FindParticleMod(particle, "ParticleGravity");
        if(gravity === null) {
            return null;
        }

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("gravityMod"));
        codeInfo.addController(new ControllerCodeInfo(`
this.setGravity = function(gravity) {
    this.gravityMod.setGravity(gravity);
}
        `));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.gravityMod = new ParticleGravity(this.particle);
    this.particle.addModifier(this.gravityMod);
    this.gravityMod.setGravity(${gravity.gravity});
        `));
        return codeInfo;
    }
}

class MovementMenuInfo {

    // this.title;
    // this.items;

    constructor() {
        this.title = "Movement";
        this.items = [
            new MenuItemToggle("IsEnabled", false),
            new MenuItemToggle("MoveRange", true),
            new MenuItemToggle("MoveRandom", false),
            new MenuItemToggle("MoveDirectional", false),
        ];

        this.items[0].setListener(function() {renko.views.sidebar.bindInfo()});
        this.items[1].setListener(this.onMoveRange.bind(this));
        this.items[2].setListener(this.onMoveRandom.bind(this));
        this.items[3].setListener(this.onMoveDirectional.bind(this));

        // Handling onMoveRange logic without calling the function because of an error
        this.items.push(new MenuItemInput("Range", "0,0,0,0"));
    }

    isEnabled() { return this.items[0].value; }

    trimMenuItems() {
        if(this.items.length > 4) {
            this.items.splice(4, this.items.length-4);
        }
    }

    setMoveFocus(index) {
        for(var i=1; i<4; i++) {
            this.items[i].value = i === index;
            this.items[i].refreshItem();
        }
    }

    onMoveRange() {
        this.trimMenuItems();
        this.setMoveFocus(1);
        this.items.push(new MenuItemInput("Range", "0,0,0,0"));
        renko.views.sidebar.bindInfo();
    }

    onMoveRandom() {
        this.trimMenuItems();
        this.setMoveFocus(2);
        this.items.push(new MenuItemInput("Random", "0,0"));
        renko.views.sidebar.bindInfo();
    }

    onMoveDirectional() {
        this.trimMenuItems();
        this.setMoveFocus(3);
        this.items.push(new MenuItemInput("Direction", "0,0"));
        renko.views.sidebar.bindInfo();
    }

    compile(particle) {
        var isEnabled = this.items[0].value;
        if(isEnabled !== true) {
            return true;
        }

        var movementMod = new ParticleMovement(particle);

        if(this.items[1].value === true) {
            var range = this.items[4].value.split(",");
            if(range.length < 4) {
                ShowCompileError(this.title, "Range is not a valid Array<number>!");
                return false;
            }
            range[0] = parseFloat(range[0]);
            range[1] = parseFloat(range[1]);
            range[2] = parseFloat(range[2]);
            range[3] = parseFloat(range[3]);
            for(var i=0; i<4; i++) {
                if(isNaN(range[i])) {
                    ShowCompileError(this.title, `Argument at index ${i} is not a valid number!`);
                    return false;
                }
            }
            movementMod.setMoveRange(range[0], range[1], range[2], range[3]);
        }
        else if(this.items[2].value === true) {
            var random = this.items[4].value.split(",");
            if(random.length < 2) {
                ShowCompileError(this.title, "Random is not a valid Array<number>!");
                return false;
            }
            random[0] = parseFloat(random[0]);
            random[1] = parseFloat(random[1]);
            for(var i=0; i<2; i++) {
                if(isNaN(random[i])) {
                    ShowCompileError(this.title, `Argument at index ${i} is not a valid number!`);
                    return false;
                }
            }
            movementMod.setMoveRandom(random[0], random[1]);
        }
        else if(this.items[3].value === true) {
            var direction = this.items[4].value.split(",");
            if(direction.length < 2) {
                ShowCompileError(this.title, "Direction is not a valid Array<number>!");
                return false;
            }
            direction[0] = parseFloat(direction[0]);
            direction[1] = parseFloat(direction[1]);
            for(var i=0; i<2; i++) {
                if(isNaN(direction[i])) {
                    ShowCompileError(this.title, `Argument at index ${i} is not a valid number!`);
                    return false;
                }
            }
            movementMod.setMoveDirectional(direction[0], direction[1]);
        }
        else {
            ShowCompileError(this.title, "Unknown movement type!");
            return false;
        }

        particle.addModifier(movementMod);

        return true;
    }

    buildCode(particle) {
        var movement = FindParticleMod(particle, "ParticleMovement");
        if(movement === null) {
            return null;
        }

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("movementMod"));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.movementMod = new ParticleMovement(this.particle);
    this.particle.addModifier(this.movementMod);`
        ));
        if(movement.modeParams[0] === 0) {
            codeInfo.addBuilder(new BuilderCodeInfo(`
    this.movementMod.setMoveRange(${movement.modeParams[1]}, ${movement.modeParams[2]}, ${movement.modeParams[3]}, ${movement.modeParams[4]});
            `));
        }
        else if(movement.modeParams[0] === 1) {
            codeInfo.addBuilder(new BuilderCodeInfo(`
    this.movementMod.setMoveRandom(${movement.modeParams[1]}, ${movement.modeParams[2]});
            `));
        }
        else if(movement.modeParams[0] === 2) {
            codeInfo.addBuilder(new BuilderCodeInfo(`
    this.movementMod.setMoveDirectional(${movement.modeParams[1]}, ${movement.modeParams[2]});
            `));
        }
        return codeInfo;
    }
}

class AccelerationMenuInfo {

    // this.title;
    // this.items;

    constructor() {
        this.title = "Acceleration";
        this.items = [
            new MenuItemToggle("IsEnabled", false),
            new MenuItemInput("Scale", 1)
        ];

        this.items[0].setListener(function() {renko.views.sidebar.bindInfo()});
    }

    isEnabled() { return this.items[0].value; }

    compile(particle) {
        var isEnabled = this.items[0].value;
        if(isEnabled !== true) {
            return true;
        }

        var scale = parseFloat(this.items[1].value);
        if(isNaN(scale)) {
            ShowCompileError(this.title, "Scale is not a valid number!");
            return null;
        }

        var accelerationMod = new ParticleAcceleration(particle);
        accelerationMod.setAccelScale(scale);
        particle.addModifier(accelerationMod);

        return true;
    }

    buildCode(particle) {
        var acceleration = FindParticleMod(particle, "ParticleAcceleration");
        if(acceleration === null) {
            return null;
        }

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("accelerationMod"));
        codeInfo.addController(new ControllerCodeInfo(`
this.setAcceleration = function(acceleration) {
    this.accelerationMod.setAccelScale(acceleration);
}
        `));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.accelerationMod = new ParticleAcceleration(this.particle);
    this.particle.addModifier(this.accelerationMod);
    this.accelerationMod.setAccelScale(${acceleration.accelScale});
        `));
        return codeInfo;
    }
}

class RotationMenuInfo {
    
    // this.title;
    // this.items;

    constructor() {
        this.title = "Rotation";
        this.items = [
            new MenuItemToggle("IsEnabled", false),
            new MenuItemInput("Speed", "0,0")
        ];

        this.items[0].setListener(function() {renko.views.sidebar.bindInfo()});
    }

    isEnabled() { return this.items[0].value; }

    compile(particle) {
        var isEnabled = this.items[0].value;
        if(isEnabled !== true) {
            return true;
        }

        var speed = this.items[1].value.split(",");
        if(speed.length < 1) {
            ShowCompileError(this.title, "Speed is not a valid number nor Array<number>!");
            return false;
        }
        
        var rotationMod = new ParticleRotation(particle);

        if(speed.length === 1) {
            speed = parseFloat(speed[0]);
            if(isNaN(speed)) {
                ShowCompileError(this.title, "Speed is not a valid number!");
                return false;
            }
            rotationMod.setRotateSpeed(speed);
        }
        else {
            speed[0] = parseFloat(speed[0]);
            speed[1] = parseFloat(speed[1]);
            if(isNaN(speed[0]) || isNaN(speed[1])) {
                ShowCompileError(this.title, "Speed range is not a valid number!");
                return false;
            }
            rotationMod.setRotateSpeed(speed[0], speed[1]);
        }

        particle.addModifier(rotationMod);

        return true;
    }

    buildCode(particle) {
        var rotation = FindParticleMod(particle, "ParticleRotation");
        if(rotation === null) {
            return null;
        }

        var codeInfo = new CodeInfo();
        codeInfo.addModifier(new ModifierCodeInfo("rotationMod"));
        codeInfo.addController(new ControllerCodeInfo(`
this.setRotateSpeed = function(min, max) {
    this.rotationMod.setRotateSpeed(min, max);
}
        `));
        codeInfo.addBuilder(new BuilderCodeInfo(`
    this.rotationMod = new ParticleRotation(this.particle);
    this.particle.addModifier(this.rotationMod);
    this.rotationMod.setRotateSpeed(${rotation.rotation[0]}, ${rotation.rotation[1]});
        `));
        return codeInfo;
    }
}

class MenuItemButton {

    // this.label;
    // this.listener;
    // this.item;

    constructor(label) {
        this.label = label;
    }

    setListener(listener) {
        this.listener = listener;
    }

    link(item) {
        this.item = item;
        this.refreshItem();
    }

    refreshItem() {
        this.item.setLabel(this.label);
        this.item.onButtonClicked = this.listener;
    }
}

class MenuItemInput {

    // this.label;
    // this.value;
    // this.defaultValue;
    // this.listener;
    // this.item;

    constructor(label, defaultValue) {
        this.label = label;
        this.value = String(defaultValue);
        this.defaultValue = String(defaultValue);
    }

    setListener(listener) {
        this.listener = listener;
    }
    
    link(item) {
        this.item = item;
        this.refreshItem();
    }

    refreshItem() {
        this.item.setLabel(this.label);
        this.item.setValue(this.value);
        this.item.onValueChange = function(value) {
            this.value = String(value);
            if(typeof this.listener === "function") {
                this.listener(this.value);
            }
        }.bind(this);
    }
}

class MenuItemToggle {

    // this.label;
    // this.value;
    // this.defaultValue;
    // this.listener;
    // this.item;

    constructor(label, defaultValue) {
        this.label = label;
        this.defaultValue = defaultValue;
        this.value = defaultValue;
    }

    setListener(listener) {
        this.listener = listener;
    }

    link(item) {
        this.item = item;
        this.refreshItem();
    }

    refreshItem() {
        this.item.setLabel(this.label);
        this.item.setValue(this.value);
        this.item.onValueChange = function(value) {
            this.value = value;
            if(typeof this.listener === "function") {
                this.listener(value);
            }
        }.bind(this);
    }
}

class MenuItemLabel {

    // this.label;
    // this.item;

    constructor(label) {
        this.label = label;
    }

    link(item) {
        this.item = item;
        this.refreshItem();
    }

    refreshItem() {
        this.item.setLabel(this.label);
    }
}

const MenuStates = {};

function ResetMenuState() {
    MenuStates.general = new ContainerInfo(new GeneralMenuInfo());
    MenuStates.emission = new ContainerInfo(new EmissionMenuInfo()),
    MenuStates.shape = new ContainerInfo(new ShapeMenuInfo()),
    MenuStates.alpha = new ContainerInfo(new AlphaMenuInfo()),
    MenuStates.color = new ContainerInfo(new ColorMenuInfo()),
    MenuStates.scale = new ContainerInfo(new ScaleMenuInfo()),
    MenuStates.gravity = new ContainerInfo(new GravityMenuInfo()),
    MenuStates.movement = new ContainerInfo(new MovementMenuInfo()),
    MenuStates.acceleration = new ContainerInfo(new AccelerationMenuInfo()),
    MenuStates.rotation = new ContainerInfo(new RotationMenuInfo())
}
ResetMenuState();