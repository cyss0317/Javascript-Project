const Util = {
    inherits(ChildClass, ParentClass) {
        function Surrogate () {};
        Surrogate.prototype = ParentClass.prototype;
        ChildClass.prototype = new Surrogate();
        ChildClass.prototype.constructor = this.prototype;
    }
}

// function randomPosition() {
//     //for x and y
//     const result = Math.random() * (600 - 150) + 150;
//     return result;
// }

module.exports = Util;