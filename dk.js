


var dk = 
{ 
    test: false,
    outputContent: false
}



dk.getUrl = function(controller, action) {
    try {
        return pageUrl.replace('A', action).replace('C', controller);
    } catch (e) {
        console.log('Add this line to your layout file... [var pageUrl = \'@Url.Action("A","C")\';] ');
        return null;
    }
}

dk.doGet = function (route, params, callback, callbackParams, async)
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


}
dk.doGetS = function(route, params, callback, callbackParams, async)
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





dk.enableContent =  function (cookieKey, parentItem)
{
    return EnableContent(cookieKey, parentItem);
}


//---------
dk.fullscreen = 
{
    charts:
    {
        setExpand: function (mobile, chartName, title) 
        {
            var chart = $('#'+chartName).highcharts();
            var height = chart.chartHeight;
            chart.setTitle(
                {
                    useHTML:true,
                    text:  '<div><span class="d2-replace">' + title + '</span><span class=""> <i class="fa fa-arrows-alt d2-Expand d2-cursorHand" style="margin-left:20px; color: #686868;"></i> </span>',
                });
                $('.d2-Expand').on('click',function()
                {
                    if ($(this).hasClass('fa-arrows-alt'))
                    {
                        ActivateFullScreenChart(this, chartName,height);                    
                    }
                    else
                    {
                        DeactivateFullScreenChart(this, chartName, height);                 
                    }

                });
        },
        go: function (source, chartName, height)
        { 
            ActivateFullScreenChart(source, chartName, height);
        },
    },
    element:
    {

    }
};
//---------

this.ActivateFullScreenChart = function (source, chartId, height)
{
    if (screenfull.enabled) 
    {
     

        $(source).removeClass('fa-arrows-alt').addClass('fa-close');

        setTimeout(function(){ 
            true; 
        },2000);

        var chart = $('#' + chartId).highcharts();
        chart.setSize(null, window.screen.height, true);

        //screenfull.request($('#' + chartId)[0]);
        $('#' + chartId).fullScreen(true);

        

        document.addEventListener(screenfull.raw.fullscreenchange, 
        function ()
        {
           setTimeout(
            function()
            {
                
                if (screenfull.isFullscreen) return;
                
                DeactivateFullScreenChart(source, chartId, height);
            }
          , 200); 
            
        });
    }
    else
    {
        return;
    }




}
this.DeactivateFullScreenChart = function (source, chartId, height)
{
    $(source).removeClass('fa-close').addClass('fa-arrows-alt');
    var chart = $('#' + chartId).highcharts();
    chart.setSize(null, height, true);
    screenfull.exit();
    
}
this.ActivateFullScreen = function (source, chartId, height)
{
    if (screenfull.enabled) 
    {
     

        $(source).removeClass('fa-arrows-alt').addClass('fa-close');

        setTimeout(function(){ 
            true; 
        },2000);

        var chart = $('#' + chartId).highcharts();
        chart.setSize(null, window.screen.height, true);

        screenfull.request($('#' + chartId)[0]);

        

        document.addEventListener(screenfull.raw.fullscreenchange, 
        function ()
        {
           setTimeout(
            function()
            {
                
                if (screenfull.isFullscreen) return;
                
                DeactivateFullScreenChart(source, chartId, height);
            }
          , 200); 
            
        });
    }
    else
    {
        return;
    }




}


this.ActivateModal = function (modalParent,hideOnClose)
{
   
}
this.DeactivateModal = function (modalParent)
{
    var modelItem = $(modalParent.find('.d2-modalItem')[0]);
    var modalItemPlaceHolder = $(modalParent.find('.d2-modalItemPlaceHolder')[0]);
    var modalNode = $(modalParent.find('.modal')[0]);
    var modalPlaceHolder = $(modalParent.find('.d2-modalPlaceHolder')[0]);

    var temp = modelItem.detach();
    modalItemPlaceHolder.append(temp);
    modalNode.modal('hide');
}




this.ActivateModalChart = function (modalParent)
{
    var modelItem = $(modalParent.find('.d2-modalItem')[0]);
    var modalItemPlaceHolder = $(modalParent.find('.d2-modalItemPlaceHolder')[0]);
    var modalNode = $(modalParent.find('.modal')[0]);
    var modalPlaceHolder = $(modalParent.find('.d2-modalPlaceHolder')[0]);

    //modalNode.modal('show');
    //var temp = modelItem.detach();
    //modalPlaceHolder.append(temp); 

    if (screenfull.enabled) 
        {
            screenfull.request($(modelItem)[0]);
        }

    var chart = modelItem.highcharts();
    chart.setSize(_w-20, _h-30, true);

    //alert('clientWidth:' + document.documentElement.clientWidth + ' innerWidth:' + window.innerWidth);
    //alert('clientHeight:' + document.documentElement.clientHeight + ' innerHeight:' + window.innerHeight);
    //alert('modalWidth:' + $('.modal').width() + ' modalHeight:' + $('.modal').height());

    modalNode.on('hidden.bs.modal', function (a,b,c) {
        temp = modelItem.detach();
        modalItemPlaceHolder.append(temp);
        modalNode.modal('hide');
        var chart = modelItem.highcharts();
        chart.setSize(null, 400, true);      
        $('.d2-Expand').toggleClass('fa-arrows-alt fa-window-close');
        //alert('clientWidth:' + document.documentElement.clientWidth + ' innerWidth:' + window.innerWidth);
        //alert('clientHeight:' + document.documentElement.clientHeight + ' innerHeight:' + window.innerHeight);
    });
}
this.DeactivateModalChart = function (modalParent)
{
    var modelItem = $(modalParent.find('.d2-modalItem')[0]);
    var modalItemPlaceHolder = $(modalParent.find('.d2-modalItemPlaceHolder')[0]);
    var modalNode = $(modalParent.find('.modal')[0]);
    var modalPlaceHolder = $(modalParent.find('.d2-modalPlaceHolder')[0]);    
    var chart = modelItem.highcharts();

    var temp = modelItem.detach();
    modalItemPlaceHolder.append(temp);
    modalNode.modal('hide');
    chart.setSize(null, 400, false);
}


this.EnableContent = function (cookieKey, parentItem)
{
 

    var cookie = $.cookie(cookieKey);
    if (cookie == undefined) return false;

    var auth = JSON.parse(cookie);
    if (auth == null) return false;
    if (auth._success) 
    {
        if (parentItem != null)
        {
            var items = $(parentItem).find('.d2-disabled');
            $.each(items,function()
            {
                $(this).removeClass('d2-disabled')
            });
        }
        else
        {
            var items = d3.selectAll('.d2-disabled');
            $.each(items,function()
            {
                $(this).removeClass('d2-disabled')
            });
        }
    }
    return true;
}














