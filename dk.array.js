dk.array = {}



dk.array.exist = function(array, item)
{
    $.grep( array, function( n, i ) {
        if (n == item)
            return true;
    });
    return false;
}
dk.array.getItemIds = function (array) {
    var result = [];
    $.grep(array, function (n, i) {
        result.push(n.id);
    });
    return result;
}
dk.array.remove = function (array, item) {
    var result = [];
    $.grep(array, function (n, i) {
        if (n != item)
			result.push(n);
    });
    return result;
}
dk.array.startsWith = function (array, text, propertyName) {
    var result = [];
    $.grep(array, function (n, i) {
        if (propertyName != undefined && propertyName != null)
        {
            if (n[propertyName].toUpperCase().startsWith(text.toUpperCase()))
			    result.push(n);
        }
        else
        {
            if (n.toUpperCase().startsWith(item.toUpperCase()))
			    result.push(n);
        }
        
        
    });
    return result;
}
dk.array.find = function (array, text, propertyName) {
    var result = {};
    $.grep(array, function (n, i) {
        if (propertyName != undefined && propertyName != null)
        {
            if (n[propertyName].toUpperCase().startsWith(text.toUpperCase()))
            {
			    result = n;
                return;
            }
        }
        else
        {
            if (n.toUpperCase().startsWith(item.toUpperCase()))
			{
			    result = n;
                return;
            }
        }
        
        
    });
    return result;
}