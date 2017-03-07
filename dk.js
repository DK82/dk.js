


var dk = 
{ 
    version: 'v1.0',
    highcharts: {version: 'v1.1'},    
    outputContent: false,
    
    
    getUrl: function(controller, action) {
        try {
            return pageUrl.replace('A', action).replace('C', controller);
        } catch (e) {
            console.log('Add this line to your layout file... [var pageUrl = \'@Url.Action("A","C")\';] ');
            return null;
        }
    },
    doGet: function (route, params, callback, callbackParams, async)
    {
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

        function myCallback(response) 
        {
            callback(response,callbackParams);
        }


    },
    doGetS: function(route, params, callback, callbackParams, async)
    {
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

        function myCallback(response) 
        {
            callback(response,callbackParams);
        }


    }
}











