const $scope: any = {
    $$watchers: [],
    $createWatcher: createWatcher,
    $digest: function () {
        this.$$watchers.forEach(w => w());
    }
};

$scope.bindingOne = 'Hello';
$scope.bindingTwo = 'from';
$scope.bindingThree = 'the otherside';

const domParser = new DOMParser();
function compile(html) {
    /**
     * extract bindings
     */
    const DOM = domParser.parseFromString(html, 'text/html');
    const allElem = DOM.getElementsByTagName("*");
    for (var i = 0; i < allElem.length; i++) {
        const textContent = allElem[i].innerHTML.trim();
        console.log(textContent);
        if (textContent.indexOf('{{') === 0 && textContent.indexOf('}}') === textContent.length - 2) {
            $scope.$createWatcher(allElem[i], textContent.replace(/\{|\}/gi, ''));
        }
    }
    $scope.$digest()
    return DOM.firstChild;
};

function createWatcher(domElement: Element, name: string) {
    this.$$watchers.push(() => {
        let oldValue = null;
        let newValue = $scope[name];
        if (oldValue !== newValue) {
            domElement.textContent = newValue;
            $scope[name] = newValue;
            oldValue = newValue;
        }
    })
}



document.body.appendChild(
    compile(`
        <div> {{bindingOne}} </div>
        <div>{{bindingTwo}}</div>
        <div> {{bindingThree}} </div>
        <div> {{bindingOne}} </div>
`))

document.querySelector('input').addEventListener('input', (event: any) => {
    $scope.bindingOne = event.target.value;
    $scope.$digest();
})

