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

eval("const MovingObject = __webpack_require__(/*! ./scripts/moving_object.js */ \"./src/scripts/moving_object.js\");\nconst Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\nconst Util = __webpack_require__(/*! ./scripts/util.js */ \"./src/scripts/util.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    // const canvas_background = document.getElementById('game-canvas');\n    // const ctx = canvas_background.getContext('2D');\n    // const BACKGROUND_WIDTH = canvas_background.width = 600;\n    // const BACKGROUND_height = canvas_background.height = 600;\n    // const canvas_background = new Image();\n    // canvas_background.src ='./Main-map.jpg'\n    \n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n    const CANVAS_WIDTH = canvas.width;\n    const CANVAS_HEIGHT = canvas.height; \n\n    //wolf\n    const wolfRight = new MovingObject('../../img/Wolf-right.png');\n    const wolfLeft = new MovingObject('../../img/Wolf-left2.png');\n    //bear\n    const bearRight = new MovingObject('../../img/Bear_right.png');\n    const bearLeft = new MovingObject('../../img/Bear_left.png');\n    //chicken\n    const chickenFront = new MovingObject('../../img/Chicken-front.png');\n    const chickenLeft = new MovingObject('../../img/Chicken_left.png');\n    const chickenLeftMove = new MovingObject('../../img/Chicken_left_move.png');\n    const chickenRight = new MovingObject('../../img/Chicken_right.png');\n    const chickenRightMove = new MovingObject('../../img/Chicken_right_move.png');\n    \n\n    \n\n    \n    wolfRight.move(ctx);\n\n    \n    // function moveRight() {\n    //     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\n    //     //ctx.drawImage(image, sx, sy, sw, sh , dx, dy, dw, dh)\n    //     ctx.drawImage(wolf_right, x, 0, 50, 50);\n    //     ctx.drawImage(bear_right, x, 50, 50, 50);\n    //     x++;\n    //     requestAnimationFrame(moveRight);\n    // }\n    // moveRight();\n\n    // // const canvas = document.querySelector(\"#game-canvas\");\n    // canvas.height = Game.DIM_X;\n    // canvas.width = Game.DIM_Y;\n \n\n    \n    // const my_chicken = new MovingObject();\n    // const chicken = document.querySelector(\"#chicken\");\n    // chicken.width = 50;\n    // chicken.wid = 50;\n    \n\n})\n\n\n\n//# sourceURL=webpack://Javascript-Project/./src/index.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function() {

eval("// const Chicken = require(\"./chicken.js\");\n// const MovingObject = require(\"./moving_object.js\");\n\n\n\n// // class Game {\n// //     constructor(options){\n// //         this.DIM_X = 600;\n// //         this.DIM_Y = 450;\n// //         this.timer = 0;\n// //         this.wolf = [];\n// //         this.bear = [];\n// //     }\n// // }\n\n\n// // Game.prototype.randomPosition = function(){\n// //     return [\n// //         Game.DIM_X * Math.random(),\n// //         Game.DIM_Y * Math.random()\n// //     ]\n// // }\n\n// module.exports = Game;\n\n//# sourceURL=webpack://Javascript-Project/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function() {

eval("throw new Error(\"Module parse failed: Unexpected token (62:15)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|             requestAnimationFrame(() => this.move(ctx));  \\n|             }\\n>         } else {\\n|             //move left to right\\n|             for (let x = randomX; x < 650; x++) {\");\n\n//# sourceURL=webpack://Javascript-Project/./src/scripts/moving_object.js?");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(module) {

eval("\n\nconst Util = {\n    inherits(ChildClass, ParentClass) {\n        function Surrogate () {};\n        Surrogate.prototype = ParentClass.prototype;\n        ChildClass.prototype = new Surrogate();\n        ChildClass.prototype.constructor = this.prototype;\n    },\n\n    randomPosition() {\n        //for x and y\n        const result = Math.random() * (600 - 150) + 150;\n        return result;\n    },\n\n    randomX() {\n        let x = [-50, 650];\n        return x[Math.floor(Math.random() * x.length)];\n    }\n}\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://Javascript-Project/./src/scripts/util.js?");

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