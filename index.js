function simpleFunction(name, height, country) {
    var msg = '';
    msg += 'name: ' + name + '\n';
    msg += 'height: ' + height + '\n';
    msg += 'country: ' + country + '\n';

    window.alert(msg);
}

simpleFunction('bob', '100', 'US');
