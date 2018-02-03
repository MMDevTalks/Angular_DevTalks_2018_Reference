class Vehicle implements IAttachable {
    public attachedTo: IAttachable;
    constructor(private engine: Engine) {
    }

    makeVroom() {
        this.engine.operate(this.attachedTo instanceof Turbo);
    }

    attach(turbo: Turbo) {
        this.attachedTo = turbo;
        turbo.attach(this);
        return this;
    }
}
class Engine {
    private pistons: Pistons = new Pistons();
    constructor(public crankShaft: CrankShaft) {

    }
    operate(withTurbo: boolean) {
        this.crankShaft.rotate();
        if (!this.pistons.areDestroyed) {
            if (withTurbo) {
                console.log('Fiuuuu');
            }
            else {
                console.log('I Vroom!')
            }
        }
    }
}
class Pistons {
    public areDestroyed: boolean = false;
    destroy() {
        this.areDestroyed = true;
    }
}
class CrankShaft {
    rotate() {
        console.log("I rotate fast")
    }
}
class Turbo implements IAttachable {
    attachedTo = null;
    attach(component: IAttachable) {
        this.attachedTo = component;
    }
}
class BigEngine extends Engine {
    constructor(public crankshaft: CrankShaft) {
        super(crankshaft);
    }

    operate() {
        console.log('TrrrTaKTAKTAK')
        this.crankShaft.rotate();
    }
}
class BigCrankshaft extends CrankShaft {

    rotate() {
        console.log('I rotate slowly')
    }
    constructor() {
        super();
    }
}
interface IAttachable {
    attachedTo: IAttachable;
}

const Golf4 = new Vehicle(new Engine(new CrankShaft())).attach(new Turbo());
const Chavdar = new Vehicle(new BigEngine(new BigCrankshaft()));
Golf4.makeVroom()
Chavdar.makeVroom();