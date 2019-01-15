class ParticleBuilder {

    // this.textArea;

    constructor() {
    }

    compile(particle) {
        // Simple reset the particle's modifiers instead of creating a new ParticleSystem.
        particle = new ParticleSystem(particle.container, particle.instantiator);
        for(var containerInfo in MenuStates) {
            if(renko.isNullOrUndefined(containerInfo)) {
                continue;
            }
            containerInfo = MenuStates[containerInfo];
            if(!containerInfo.compile(particle)) {
                return null;
            }
        }
        return particle;
    }

    copyCode(particle) {
        if(renko.isNullOrUndefined(this.textArea)) {
            this.textArea = document.createElement("textarea");
            this.textArea.setAttribute("id", "particleBuilderTextArea");
            canvas.parentElement.appendChild(this.textArea);
            var style = this.textArea.style;
            style.position = "absolute";
            style.left = -10000;
            style.top = -10000;
        }

        var code = new CodeInfo();
        for(var containerInfo in MenuStates) {
            if(renko.isNullOrUndefined(containerInfo)) {
                continue;
            }

            var info = MenuStates[containerInfo].buildCode(particle);
            if(info !== null) {
                code.combineFrom(info);
            }
        }
        
        this.textArea.style.visibility = "";
        this.textArea.style.display = "";
        this.textArea.value = code.getCode();
        this.textArea.select();
        document.execCommand("copy");
        
        this.textArea.style.visibility = "hidden";
        this.textArea.style.display = "none";
        alert("Copied code to clipboard.");
    }
}
const particleBuilder = new ParticleBuilder();