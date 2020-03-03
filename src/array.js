
module.exports = Object.assign({}, {

    exists: function (array, item) {
        var result = false;
        $.grep(array, function (n, i) {
            if (n == item)
                result = true;
        });
        return result;
    },
    getItemIds: function (array) {
        var result = [];
        $.grep(array, function (n, i) {
            result.push(n.id);
        });
        return result;
    },
    remove: function (array, item) {
        var result = [];
        $.grep(array, function (n, i) {
            if (n != item)
                result.push(n);
        });
        return result;
    },
    startsWith: function (array, text, propertyName, maxCount) {

        var result = $.grep(array, function (n, i) {
            if (propertyName != undefined && propertyName != null) {
                if (dk.array.getPropByString(n, propertyName).toUpperCase().startsWith(text.toUpperCase()))
                    return n;
            }
            else {
                if (n.toUpperCase().startsWith(item.toUpperCase()))
                    return n;
            }


        });

        if (maxCount != undefined && maxCount != null) {
            result = result.slice(0, maxCount);
        }
        return result;

    },
    find: function (array, text, propertyName, maxCount) {

        var result = $.grep(array, function (n, i) {
            if (propertyName != undefined && propertyName != null) {
                if (dk.array.getPropByString(n, propertyName).toUpperCase().indexOf(text.toUpperCase()) >= 0)
                    return n;

            }
            else {
                if (n.toUpperCase().indexOf(item.toUpperCase()) >= 0)
                    return n;

            }


        });

        if (maxCount != undefined && maxCount != null) {
            result = result.slice(0, maxCount);
        }
        return result;

    },
    distinct: function (array, propertyName) {
        var result = [];
        $.grep(array, function (n, i) {
            if (dk.array.find(result, dk.array.getPropByString(n, propertyName), propertyName, 1) == 0)
                result.push(n);
        });
        return result;
    },


});