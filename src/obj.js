module.exports = Object.assign({}, {

    getPropByString: function (obj, propPath) {
        if (!propPath) return obj;
        var prop, props = propPath.split('.');

        for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
            prop = props[i];

            var candidate = obj[prop];
            if (candidate !== undefined) { obj = candidate; }
            else { break; }
        }
        return obj[props[i]];
    }

});