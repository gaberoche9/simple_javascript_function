function simpleFunction(name, height, country) {
    var msg = '';
    msg += 'name: ' + name + '\n';
    msg += 'height: ' + height + '\n';
    msg += 'country: ' + country + '\n';
    var out = '';
    out += name + ' ';
    out += height + ' ';
    out += country + ' ';
    window.alert(msg);
    return out;
}

console.log(simpleFunction('bob', '100', 'US'))
