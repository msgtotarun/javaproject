var deepEqual = function (x, y) {
    if (x === y) {
        return true;
    } else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;

        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop]))
                    return false;
            } else
                return false;
        }

        return true;
    } else
        return false;
}

obj = {
    name: 'tar',
    age: 24,
    coruse: 'msit'
}
obj1 = {
    name: 'tar',
    age: 24,
    coruse: 'msit'
}

console.log(deepEqual(obj, obj1))