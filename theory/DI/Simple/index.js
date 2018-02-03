var Injector = {
    dependencies: {},
    add: function (func) {
        this.dependencies[func.name] = func;
    },
    get: function (func) {
        var obj = new func;
        var dependencies = this.resolveDependencies(func);
        func.apply(obj, dependencies);
        return obj;
    },
    resolveDependencies: function (func) {
        var args = this.getArguments(func);
        return args
            .filter(dep => !!dep)
            .map(depString => {
                const dependencyToken = this.dependencies[depString];
                if (!dependencyToken) {
                    throw new Error(`No token was provided for ${depString}`)
                }
                else {
                    return this.dependencies[depString]
                }
            })
            .map(dep => this.get(dep))
    },
    getArguments: function (func) {
        //This regex is from require.js
        var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        var args = func.toString().match(FN_ARGS)[1].split(',');
        return args;
    }
};


function AuthService(UserService) {
    this.sayHi = function () {
        console.log(UserService.getUsers());
    }
}


function UserService() {
    this.getUsers = function () {
        return [1, 2, 3, 4]
    }
}


function Demo(AuthService) {
    this.AuthService = AuthService;
    this.execute = function () {
        this.AuthService.sayHi();
    }
}
Injector.add(AuthService);
Injector.add(UserService);
Injector.add(Demo);

let demo = Injector.get(Demo);
demo.execute();