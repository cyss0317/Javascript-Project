

const Util = {
    inherits(ChildClass, ParentClass) {
        function Surrogate () {};
        Surrogate.prototype = ParentClass.prototype;
        ChildClass.prototype = new Surrogate();
        ChildClass.prototype.constructor = this.prototype;
    },
    
    randomY() {
        //for x and y
        const numbers = [1,2,4,5,6,7,8,9,10,11,12];
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
    },

    distance(obj1, obj2){
        let result = Math.sqrt(Math.pos(obj1.pos[0] - obj2.pos[0], 2) + Math.pow(obj1.pos[1] - obj2.pos[1], 2));
        return result;
    }
}


module.exports = Util;