import { Injector } from './Injector';

function Injectable(target: any) {
}

@Injectable
class AuthService {
    sayHi() {
        // console.log('hi');
    }
}

@Injectable
class AccountService {
    getAccounts(){
        return [1,2,3,4];
    }
}

@Injectable
class UserService {
    constructor(private accountService: AccountService) { 
    }
    getUsers(){
        return this.accountService.getAccounts();
    }
}
@Injectable
class Demo {
    constructor(private authService: AuthService, private userService: UserService) {
        this.authService.sayHi();
        // console.log(this.userService.getUsers());
    }
}
const injector = new Injector();
injector.add(AuthService);
injector.add(UserService);
Reflect.getMetadata('design:paramtypes',UserService)
console.log('here',JSON.stringify((UserService as any).prototype))
injector.add(AccountService);
injector.add(Demo);


let demo = injector.get(Demo);
let accSvc = injector.get(AccountService) as AccountService;

// console.log(accSvc.getAccounts());