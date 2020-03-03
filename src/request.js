
module.exports = Object.assign({}, {

    doGet: function (route, params, callback, callbackParams, async) {
        async = (typeof async === 'undefined') ? true : async;
        $.ajax({
            type: 'GET',
            url: route,
            data: params,
            //dataType: 'jsonp',
            async: async,
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                if (dk.outputContent) console.log(response);
                if (callback != null)
                    myCallback(response);
            },
            error: function (error) {
                console.log(error.responseText);
            }
        });

        function myCallback(response) {
            callback(response, callbackParams, params);
        }


    },
    doGetS: function (route, params, callback, callbackParams, async) {
        async = (typeof async === 'undefined') ? true : async;
        $.ajax({
            type: 'GET',
            url: route,
            data: params,
            dataType: 'jsonp',
            async: async,
            contentType: 'application/json; charset=utf-8',
            success: function (response) {

                if (dk.outputContent) console.log(response);
                myCallback(response)
            },
            error: function (error) {
                console.log(error.responseText);
            }
        });

        function myCallback(response) {
            callback(response, callbackParams, params);
        }


    },
    doPost: function (route, params, callback, callbackParams, async) {
        async = (typeof async === 'undefined') ? true : async;
        $.ajax({
            type: 'POST',
            url: route,
            data: JSON.stringify(params),
            async: async,
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                if (dk.outputContent) console.log(response);
                if (callback != null)
                    myCallback(response);
            },
            error: function (error) {
                console.log(error.responseText);
            }
        });

        function myCallback(response) {
            callback(response, callbackParams, params);
        }


    },
    doPostS: function (route, params, callback, callbackParams, async) {
        async = (typeof async === 'undefined') ? true : async;
        $.ajax({
            type: 'POST',
            url: route,
            data: JSON.stringify(params),
            dataType: 'jsonp',
            async: async,
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                if (dk.outputContent) console.log(response);
                if (callback != null)
                    myCallback(response);
            },
            error: function (error) {
                console.log(error.responseText);
            }
        });

        function myCallback(response) {
            callback(response, callbackParams, params);
        }


    },
    

});