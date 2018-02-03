var $scope = {
    $$watchers: [],
    $createWatcher: createWatcher,
    $digest: function () {
        this.$$watchers.forEach(function (w) { return w(); });
    }
};
$scope.bindingOne = 'Hello';
$scope.bindingTwo = 'from';
$scope.bindingThree = 'the otherside';
var domParser = new DOMParser();
function compile(html) {
    /**
     * extract bindings
     */
    var DOM = domParser.parseFromString(html, 'text/html');
    var allElem = DOM.getElementsByTagName("*");
    for (var i = 0; i < allElem.length; i++) {
        var textContent = allElem[i].innerHTML.trim();
        console.log(textContent);
        if (textContent.indexOf('{{') === 0 && textContent.indexOf('}}') === textContent.length - 2) {
            $scope.$createWatcher(allElem[i], textContent.replace(/\{|\}/gi, ''));
        }
    }
    $scope.$digest();
    return DOM.firstChild;
}
;
function createWatcher(domElement, name) {
    this.$$watchers.push(function () {
        var oldValue = null;
        var newValue = $scope[name];
        if (oldValue !== newValue) {
            domElement.textContent = newValue;
            $scope[name] = newValue;
            oldValue = newValue;
        }
    });
}
document.body.appendChild(compile("\n        <div> {{bindingOne}} </div>\n        <div>{{bindingTwo}}</div>\n        <div> {{bindingThree}} </div>\n        <div> {{bindingOne}} </div>\n"));
document.querySelector('input').addEventListener('input', function (event) {
    $scope.bindingOne = event.target.value;
    $scope.$digest();
});
