class Recycler {

    // this.instantiator;
    // this.recycledObjects[];

    constructor(instantiator) {
        this.instantiator = instantiator;
        this.recycledObjects = [];
    }

    returnObject(object) {
        object.setActive(false);
        this.recycledObjects.push(object);
    }

    getObject() {
        if(this.recycledObjects.length === 0) {
            var newObj = this.instantiator();
            this.overrideFrame0(newObj);
            newObj.setActive(true);
            return newObj;
        }
        var obj = this.recycledObjects.pop();
        obj.setActive(true);
        return obj;
    }

    /**
     * Overrides frame_0 to prevent the internal engine from calling it after 1 frame.
     */
    overrideFrame0(object) {
        // If frame 0 is not defined, just return
        if(typeof object.frame_0 !== "function") {
            return;
        }

        // Get binded frame_0 function
        const originalFrame0 = object.frame_0.bind(object);

        // Override the function
        object.frame_0 = function() {
            if(object.isRecycleInitialized) {
                return;
            }
            object.isRecycleInitialized = true;
            originalFrame0();
        }.bind(this);

        // Call the overrided function to initialize it right now.
        object.frame_0();
    }
}

class ModifierCodeInfo {

    // this.modifierName;

    constructor(modifierName) {
        this.modifierName = modifierName;
    }

    getCode() {
        return `this.${this.modifierName} = null;`;
    }
}

class ControllerCodeInfo {

    // this.code;

    constructor(code) {
        this.code = code;
    }

    getCode() {
        return this.code;
    }
}

class BuilderCodeInfo {

    // this.code;

    constructor(code) {
        this.code = code;
    }

    getCode() {
        return this.code;
    }
}

class CodeInfo {

    // this.modifiers[];
    // this.controllers[];
    // this.builders[];

    constructor() {
        this.modifiers = [];
        this.controllers = [];
        this.builders = [];
    }

    addModifier(modifier) { this.modifiers.push(modifier); }

    addController(controller) { this.controllers.push(controller); }

    addBuilder(builder) { this.builders.push(builder); }

    combineFrom(other) {
        other.modifiers.forEach((modifier) => this.modifiers.push(modifier));
        other.controllers.forEach((controller) => this.controllers.push(controller));
        other.builders.forEach((builder) => this.builders.push(builder));
    }

    getModifiersCode() {
        var code = "";
        for(var i=0; i<this.modifiers.length; i++) {
            code += this.modifiers[i].getCode() + "\n";
        }
        return code;
    }

    getControllersCode() {
        var code = "";
        for(var i=0; i<this.controllers.length; i++) {
            code += this.controllers[i].getCode();
        }
        return code;
    }

    getBuildersCode() {
        var code = "";
        for(var i=0; i<this.builders.length; i++) {
            code += this.builders[i].getCode();
        }
        return code;
    }

    getCode() {
        var code = `
this.stop();

${this.getModifiersCode()}
${this.getControllersCode()}
renko.registerAwake(this, function() {
${this.getBuildersCode()}
});
        `;
        return code;
    }
}