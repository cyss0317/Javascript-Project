/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// const MovingObject = require(\"./scripts/moving_object.js\");\nconst Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\nconst Util = __webpack_require__(/*! ./scripts/util.js */ \"./src/scripts/util.js\")\nconst GameView = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\nconst Chicken = __webpack_require__(/*! ./scripts/chicken.js */ \"./src/scripts/chicken.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext('2d');\n    ctx.canvas.height = 550;\n    ctx.canvas.width = 450;\n\n\n    const game = new Game();\n    new GameView(game, ctx).start();\n\n    // game.win();\n    // const chicken = new Chicken();\n    // chicken.draw(ctx);\n    // ctx.rect(0, 0, 50, 50);\n    // ctx.stroke();\n\n    // function move(e){\n    //     if (e.keyCode == 39){\n    //         chicken.pos[0] += 3;\n    //     } else if (e.keyCode == 37) {\n    //         chicken.pos[0] -= 3;\n    //     } else if (e.keyCode == 38){\n    //         chicken.pos[1] -= 3;\n    //     } else if (e.keyCode == 40){\n    //         chicken.pos[1] += 3;\n    //     }\n    // }\n    // document.onkeydown = move;\n\n\n})\n\n\n\n//# sourceURL=webpack://Javascript-Project/./src/index.js?");

/***/ }),

/***/ "./src/scripts/chicken.js":
/*!********************************!*\
  !*** ./src/scripts/chicken.js ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/scripts/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n\nfunction Chicken(options) {\n    this.pos = [210 ,500];\n    this.animal = new Image();\n    this.animal.src = './img/Chicken_front.png'\n    this.radius = 25;\n\n}\n\nUtil.inherits(Chicken, MovingObject);\n\n\nChicken.prototype.moves = function(move) {\n    //update position\n    \n    if ( move[0] < 0 ){\n        this.animal.src = './img/Chicken_left_move.png'\n    } else if ( move[0] > 0 ){\n        this.animal.src = './img/Chicken_right_move.png'\n    } else if ( move[1] < 0 ) {\n        //move step forward\n        this.animal.src = './img/Chicken_front.png'\n    } else if ( move[1] > 0 ) {\n        this.animal.src = './img/Chicken_back.png'\n    }\n    \n\n    //left wall\n    if ( this.pos[0] + move[0] < 0) {\n        this.pos[0] = 0;\n        //right wall\n    }else if ( this.pos[0] + move[0] > 400){ \n        this.pos[0] = 400;\n    } else {\n        this.pos[0] += move[0];\n    }\n\n    //top wall\n    // if (this.pos[1] + move[1] < 0) {\n    //     this.pos[1] = 0;\n    if (this.pos[1] + move[1] < 0  && this.pos[0] < 200 ) {\n        this.pos[1] = 25;\n    } else if (this.pos[1] + move[1] <0 && this.pos[0] > 250) {\n        this.pos[1] = 25;\n    }\n        //bottom wallddd\n    if (this.pos[1] + move[1] > 500) {\n        this.pos[1] = 500;\n    } else {\n        this.pos[1] += move[1];\n    }\n\n    if ( this.pos[1] < -40 ){\n        alert(\"YOU WON!!! Press 'okay' to play again\")\n        window.location.reload();\n    }\n    //bottom water wall\n\n\n    //top water wall\n    // if (this.pos[1] + move[1] > 100 && this.pos[0] < 200) {\n    //     this.pos[1] = 150;\n    // } else if (this.pos[1] + move[1] < 150 && this.pos[0] > 250) {\n    //     this.pos[1] = 150;\n    // }\n  \n\n}\n\n\nmodule.exports = Chicken;\n\n//# sourceURL=webpack://Javascript-Project/./src/scripts/chicken.js?");

/***/ }),

/***/ "./src/scripts/croco.js":
/*!******************************!*\
  !*** ./src/scripts/croco.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\nfunction Croco(options){\n    this.pos = [80, 100];\n}\n\nUtil.inherits(Croco, MovingObject);\n\nmodule.exports = Croco;\n\n//# sourceURL=webpack://Javascript-Project/./src/scripts/croco.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Chicken = __webpack_require__(/*! ./chicken.js */ \"./src/scripts/chicken.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/scripts/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\nconst Croco = __webpack_require__(/*! ./croco.js */ \"./src/scripts/croco.js\");\n\nfunction Game() {\n    this.movingObjects = [];\n    this.addMovingObject();\n    this.chicken = new Chicken();\n    this.croco = new Croco();\n}\n\nGame.DIM_X = 450;\nGame.DIM_Y = 550;\nGame.NUM_MOVINGOBJECTS = 45;\n\nGame.prototype.win = function() {\n    if ( this.chicken.pos[1] < -20 ){\n        alert(\"YOU DID IT!!!, refresh the page to play again\");\n        \n    }\n}\n\nGame.prototype.checkCollisions = function () {\n    // this.MovingObjects.forEach((object) => {\n    //     if (this.chicken.isCollidedwith(object)) {\n    //         alert(\"RIP..... press 'okay' to play again\");\n    //         window.location.reload();\n    //     }\n    // })\n\n\n    for (let i = 0; i < this.movingObjects.length; i++) {\n        // this.movingObjects[i].isCollidedWith(this.chicken);\n        if (this.movingObjects[i].isCollidedWith(this.chicken) === true) {\n            // alert(\"RIP..... press 'okay' to play again\");\n            // window.location.reload();\n            return true;\n        } return false;\n    }\n\n}\n\nGame.prototype.addMovingObject = function(){\n    for (let i = 0; i < Game.NUM_MOVINGOBJECTS; i++) {   \n        let character = new MovingObject({game: this});\n        \n        if( character.pos[0] === 650) {\n            character.animal.src = character.randomLeftCharacter();\n            character.dir = [-(Util.randomSpeed()), 0];\n        } else {\n            character.animal.src = character.randomRightCharacter();\n            character.dir = [Util.randomSpeed(), 0];\n        }\n        this.movingObjects.push(character);\n    }\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect( 0, 0, Game.DIM_X, Game.DIM_Y);\n    for (let i = 0; i < this.movingObjects.length; i++) {\n        this.movingObjects[i].draw(ctx);\n    }\n    this.chicken.draw(ctx);\n    // this.croco.draw(ctx);\n    \n}\n\nGame.prototype.moveObjects = function() {\n    for (let i = 0; i < this.movingObjects.length; i++) {\n        this.movingObjects[i].move();\n    }\n}\n\nGame.prototype.wrap = function(pos) {\n    return [\n        Util.wrap(pos[0], Game.DIM_X), pos[1]\n    ];\n}\n\nGame.prototype.isOutOfBound = function(pos) {\n    return (pos[0] < -50 || pos[0] > 650);\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://Javascript-Project/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Chicken = __webpack_require__(/*! ./chicken.js */ \"./src/scripts/chicken.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n\nfunction GameView(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n}\n\n\nGameView.prototype.start = function() {\n    this.bindKeyHandlers();\n    const interval = setInterval( () => { \n        this.game.moveObjects();\n        this.game.draw(this.ctx);\n        if (this.game.checkCollisions()) {\n            this.end(interval);\n        }\n        // this.game.win();\n        \n    }, 10);\n\n\n    // this.game.moveObjects();\n    // requestAnimationFrame(this.game.draw(this.ctx)\n\n};\nGameView.prototype.end = function(interval){\n    alert(\"RIP..... press 'okay' to play again\");\n    // window.location.reload();\n    clearInterval(interval);\n}\n\nGameView.MOVES = {\n    w: [0, -25],\n    a: [-25, 0],\n    s: [0, 25],\n    d: [25, 0],\n};\n\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n    const chicken = this.game.chicken;\n\n    Object.keys(GameView.MOVES).forEach(function (k) {\n        const move = GameView.MOVES[k];\n        key(k, function () { chicken.moves(move); });\n    });\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://Javascript-Project/./src/scripts/game_view.js?");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/scripts/util.js\");\n\nfunction MovingObject(options) {\n        this.animal = new Image();\n        // this.animal.src = options.url;\n        // this.dir = options.dir;\n        this.radius = 25;\n        this.pos =  Util.randomPosition();\n        this.game = options.game\n        \n}\n\nMovingObject.prototype.randomLeftCharacter = function() {\n    let characters = ['./img/Bear_left.png', './img/Wolf_left.png', './img/Lion_left.png'];\n    return characters[Math.floor(Math.random() * characters.length)];\n}\n\n\nMovingObject.prototype.randomRightCharacter = function () {\n    let characters = ['./img/Bear_right.png', './img/Wolf_right.png', './img/Lion_right.png'];\n    return characters[Math.floor(Math.random() * characters.length)];\n}\n\nMovingObject.prototype.draw = function(ctx){\n\n\n    // this.animal.onload = () => ctx.drawImage(this.animal, this.pos[0], this.pos[1], 50, 50);\n    ctx.drawImage(this.animal, this.pos[0], this.pos[1], 50, 50);\n\n};\n\n\n\nMovingObject.prototype.move = function(){\n    this.pos = [this.pos[0] + this.dir[0] ,this.pos[1] + this.dir[1] ];\n\n    if (this.game.isOutOfBound(this.pos)){\n        this.pos = this.game.wrap(this.pos);\n    } \n}\n\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    // posotion, width 50, height 50\n\n    let distance = Util.distance(this, otherObject);\n    console.log(distance);\n    console.log(this.radius);\n    console.log(otherObject.radius);\n    return distance < (this.radius + otherObject.radius)\n}\n\n\nmodule.exports = MovingObject;\n\n\n    // movingRightImg(){\n    //     let characters = [bearRight, wolfRight];\n    //     return characters[Math.floor(Math.random * characters.length)];\n    // }\n    // movingLeftImg() {\n    //     let characters = [bearLeft, wolfLeft];\n    //     return characters[Math.floor(Math.random * characters.length)];\n    // }\n    \n    \n    // move(ctx) {\n        \n    //     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    //     const randomY = Util.randomPosition();\n    //     const randomX = Util.randomX();\n    //     // console.log(animal);\n    //     //ctx.drawImage(image, sx, sy, sw, sh , dx, dy, dw, dh)\n    //     // ctx.drawImage(animal, x, 50, 50, 50 );\n    \n    //     //move right to left   \n    //     if ( randomX === 650 ) {\n\n    //         ctx.drawImage(this.animal, randomX, randomY, 50, 50);\n    //         x--;      \n    //         requestAnimationFrame(() => this.move(ctx));  \n    //         }\n    //     } else {\n    //         //move left to right\n    //         for (let x = randomX; x < 650; x++) {\n    //             ctx.drawImage(this.animal, randomX, randomY, 50, 50);\n    //             requestAnimationFrame(() => this.move(ctx));\n    //         }\n    //     }\n    // }\n    \n\n\n\n\n//random images moving to the right\n\n\n\n//# sourceURL=webpack://Javascript-Project/./src/scripts/moving_object.js?");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(module) {

eval("\n\nconst Util = {\n    inherits(ChildClass, ParentClass) {\n        function Surrogate () {};\n        Surrogate.prototype = ParentClass.prototype;\n        ChildClass.prototype = new Surrogate();\n        ChildClass.prototype.constructor = ChildClass.prototype;\n    },\n    \n    randomY() {\n        //for x and y\n        const numbers = [0,1,3,4,5,6,7,8,9];\n        const result = numbers[Math.floor(Math.random() * numbers.length)] * 50;\n        return result;\n    },\n    \n    randomX() {\n        let x = [-50, 650];\n        return x[Math.floor(Math.random() * x.length)];\n    },\n    \n    randomPosition(){\n        let result = [this.randomX(), this.randomY()];\n        return result;\n    },\n\n    randomSpeed() {\n        const speed = [1,1.5];\n        let result = Math.random() * speed[Math.floor(Math.random() * speed.length)];\n        if (result < 0.1) {\n            result += 0.3;\n        } \n        return result; \n    },\n\n    distance(obj1, obj2){\n        let result = Math.sqrt(Math.pow(obj1.pos[0] - obj2.pos[0], 2) + Math.pow(obj1.pos[1] - obj2.pos[1], 2));\n        return result;\n    },\n\n     wrap(x, maxGrid) {\n        if (x < 0) {\n            //      \n            return maxGrid\n        } else  {\n            return 0;\n        } \n    }\n}\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://Javascript-Project/./src/scripts/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;