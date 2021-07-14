

const Util = {
    inherits(ChildClass, ParentClass) {
        function Surrogate () {};
        Surrogate.prototype = ParentClass.prototype;
        ChildClass.prototype = new Surrogate();
        ChildClass.prototype.constructor = this.prototype;
    },

    
    randomY() {
        //for x and y
        const numbers = [1,2,3,4,5,6,7,8,9];
        const result = numbers[Math.floor(Math.random() * numbers.length)] * 50;
        return result;
    },
    
    randomX() {
        let x = [-50, 650];
        return x[Math.floor(Math.random() * x.length)];
    },
    
    randomPosition(){
        let result = [this.randomX(), this.randomY()];
        return result;
    }
}


module.exports = Util;