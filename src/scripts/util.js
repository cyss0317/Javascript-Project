

const Util = {
    inherits(ChildClass, ParentClass) {
        function Surrogate () {};
        Surrogate.prototype = ParentClass.prototype;
        ChildClass.prototype = new Surrogate();
        ChildClass.prototype.constructor = this.prototype;
    },

    randomPosition() {
        //for x and y
        const result = Math.random() * (600 - 150) + 150;
        return result;
    },

    randomX() {
        let x = [-50, 650];
        return x[Math.floor(Math.random() * x.length)];
    }
}


module.exports = Util;