

const Util = {
    inherits(ChildClass, ParentClass) {
        function Surrogate () {};
        Surrogate.prototype = ParentClass.prototype;
        ChildClass.prototype = new Surrogate();
        ChildClass.prototype.constructor = ChildClass.prototype;
    },
    
    randomY() {
        //for x and y
        const numbers = [0,1,3,4,5,6,7,8,9];
        const result = numbers[Math.floor(Math.random() * numbers.length)] * 50;
        return result;
    },
    
    randomX() {
        let x = [-50, 500];
        return x[Math.floor(Math.random() * x.length)];
    },
    
    randomPosition(){
        let result = [this.randomX(), this.randomY()];
        return result;
    },

    randomSpeed() {
        const speed = [1,1.5];
        let result = Math.random() * speed[Math.floor(Math.random() * speed.length)];
        if (result < 0.1) {
            return result += 0.6;
        } 
        return result; 
    },

    distance(obj1, obj2){
        let result = Math.sqrt(Math.pow(obj1.pos[0] - obj2.pos[0], 2) + Math.pow(obj1.pos[1] - obj2.pos[1], 2));
        return result;
    },

     wrap(x, maxGrid) {
        if (x < 0) {
            //      
            return maxGrid
        } else  {
            return 0;
        } 
    }
}


module.exports = Util;