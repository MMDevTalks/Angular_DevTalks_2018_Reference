"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
class Injector {
    constructor() {
        this.dependencies = [];
    }
    add(dependency) {
        this.dependencies.push(dependency);
    }
    get(dependency) {
        const c = this.dependencies.find((c) => c === dependency);
        if (!c) {
            throw new Error(`No provider found for ${dependency.name}`);
        }
        return this._createInstance(c);
    }
    _getResolvedDependencies(dependency) {
        const _deps = Reflect.getMetadata('design:paramtypes', dependency);
        // console.log(_deps);
        return _deps ? _deps.map((_dep) => this.get(_dep)) : [];
    }
    _createInstance(c) {
        const _transientDependencies = this._getResolvedDependencies(c);
        return Reflect.construct(c, _transientDependencies);
    }
}
exports.Injector = Injector;
