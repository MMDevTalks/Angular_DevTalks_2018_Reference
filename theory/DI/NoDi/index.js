var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(engine) {
        this.engine = engine;
    }
    Vehicle.prototype.makeVroom = function () {
        this.engine.operate(this.attachedTo instanceof Turbo);
    };
    Vehicle.prototype.attach = function (turbo) {
        this.attachedTo = turbo;
        turbo.attach(this);
        return this;
    };
    return Vehicle;
}());
var Engine = /** @class */ (function () {
    function Engine(crankShaft) {
        this.crankShaft = crankShaft;
        this.pistons = new Pistons();
    }
    Engine.prototype.operate = function (withTurbo) {
        this.crankShaft.rotate();
        if (!this.pistons.areDestroyed) {
            if (withTurbo) {
                console.log('Fiuuuu');
            }
            else {
                console.log('I Vroom!');
            }
        }
    };
    return Engine;
}());
var Pistons = /** @class */ (function () {
    function Pistons() {
        this.areDestroyed = false;
    }
    Pistons.prototype.destroy = function () {
        this.areDestroyed = true;
    };
    return Pistons;
}());
var CrankShaft = /** @class */ (function () {
    function CrankShaft() {
    }
    CrankShaft.prototype.rotate = function () {
        console.log("I rotate fast");
    };
    return CrankShaft;
}());
var Turbo = /** @class */ (function () {
    function Turbo() {
        this.attachedTo = null;
    }
    Turbo.prototype.attach = function (component) {
        this.attachedTo = component;
    };
    return Turbo;
}());
var BigEngine = /** @class */ (function (_super) {
    __extends(BigEngine, _super);
    function BigEngine(crankshaft) {
        var _this = _super.call(this, crankshaft) || this;
        _this.crankshaft = crankshaft;
        return _this;
    }
    BigEngine.prototype.operate = function () {
        console.log('TrrrTaKTAKTAK');
        this.crankShaft.rotate();
    };
    return BigEngine;
}(Engine));
var BigCrankshaft = /** @class */ (function (_super) {
    __extends(BigCrankshaft, _super);
    function BigCrankshaft() {
        return _super.call(this) || this;
    }
    BigCrankshaft.prototype.rotate = function () {
        console.log('I rotate slowly');
    };
    return BigCrankshaft;
}(CrankShaft));
var Golf4 = new Vehicle(new Engine(new CrankShaft())).attach(new Turbo());
var Chavdar = new Vehicle(new BigEngine(new BigCrankshaft()));
Golf4.makeVroom();
Chavdar.makeVroom();
