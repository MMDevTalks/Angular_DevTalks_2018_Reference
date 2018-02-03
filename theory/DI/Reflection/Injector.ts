
import "reflect-metadata";
export class Injector {
    private dependencies: Array<Function> = [];

    public add(dependency: Function) {
        this.dependencies.push(dependency);
    }

    public get(dependency: Function) {
        const c = this.dependencies.find((c: Function) => c === dependency) as Function;
        if(!c){
            throw new Error(`No provider found for ${dependency.name}`)
        }
        return this._createInstance(c);
    }

    private _getResolvedDependencies(dependency: Function) {
        const _deps = Reflect.getMetadata('design:paramtypes', dependency);
        // console.log(_deps);
        return _deps ? _deps.map((_dep: Function) => this.get(_dep)) : [];
    }

    private _createInstance(c: Function) {
        const _transientDependencies = this._getResolvedDependencies(c);
        return Reflect.construct(c, _transientDependencies)
    }
}
