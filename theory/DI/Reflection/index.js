"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Injector_1 = require("./Injector");
function Injectable(target) {
}
let AuthService = class AuthService {
    sayHi() {
        // console.log('hi');
    }
};
AuthService = __decorate([
    Injectable
], AuthService);
let AccountService = class AccountService {
    getAccounts() {
        return [1, 2, 3, 4];
    }
};
AccountService = __decorate([
    Injectable
], AccountService);
let UserService = class UserService {
    constructor(accountService) {
        this.accountService = accountService;
    }
    getUsers() {
        return this.accountService.getAccounts();
    }
};
UserService = __decorate([
    Injectable,
    __metadata("design:paramtypes", [AccountService])
], UserService);
let Demo = class Demo {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.authService.sayHi();
        // console.log(this.userService.getUsers());
    }
};
Demo = __decorate([
    Injectable,
    __metadata("design:paramtypes", [AuthService, UserService])
], Demo);
const injector = new Injector_1.Injector();
injector.add(AuthService);
injector.add(UserService);
Reflect.getMetadata('design:paramtypes', UserService);
console.log('here', JSON.stringify(UserService.prototype));
injector.add(AccountService);
injector.add(Demo);
let demo = injector.get(Demo);
let accSvc = injector.get(AccountService);
// console.log(accSvc.getAccounts()); 
