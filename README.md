# Getting started
Add dk.js to your project by including it in your project

#### Reference

```
https://rawgit.com/DK82/dklibs/master/dk.js
```


or download it [HERE](https://github.com/DK82/dk.js/archive/master.zip) and include it in your project manually

## dk.doGet
> Re-useable ajax GET functions accepting and returning additional parameters

[JS Fiddle Examples](http://jsfiddle.net/dk82/wrhLffbq/5/)

```
dk.doGet(route, params, callback, callbackParams, async)
dk.doGetS(route, params, callback, callbackParams, async)
```

## dk.doPost
> Re-useable ajax POST functions accepting and returning additional parameters

[JS Fiddle Examples](http://jsfiddle.net/dk82/saeau9mj/4/)

```
dk.doPost(route, params, callback, callbackParams, async)
```



## dk.array

> A collection of usefull array functions mimicking LINQ syntax

[JS Fiddle Examples](http://jsfiddle.net/dk82/hk9qfn5o/3/)

```
dk.array.exists(array,object)
dk.array.getItemIds(array)
dk.array.remove(array,object)
dk.array.startsWith(array,text,propertyName)
dk.array.startsWith(array,text,propertyName,maxCount)
dk.array.find(array,text,propertyName)
dk.array.find(array,text,propertyName,maxCount)
dk.array.distinct(array,propertyName)
```

#### Advanced

> Lookup nested properties by seperating with '.'

[JS Fiddle Examples](http://jsfiddle.net/dk82/3rax0b32/3/)

```
var exampleArray = 
[
{id:1, name: 'name1', data: {code: 'n11'} }, 
{id:2, name: 'name2',  data: {code: 'n11'} }, 
{id:3, name: 'name3',  data: {code: 'n21'} }, 
{id:4, name: 'name4',  data: {code: 'n22'} } 
]
```

```
dk.array.startsWith(exampleArray,'n1','data.code')
Result:
[
{"id":1,"name":"name1","data":{"code":"n11"}},
{"id":2,"name":"name2","data":{"code":"n11"}}
]
```

```
dk.array.find(exampleArray,'n21','data.code')
Result:
[
{"id":3,"name":"name3","data":{"code":"n21"}}
]
```

```
dk.array.distinct(exampleArray,'data.code')
Result:
[
{"id":1,"name":"name1","data":{"code":"n11"}},
{"id":3,"name":"name3","data":{"code":"n21"}},
{"id":4,"name":"name4","data":{"code":"n22"}}
]
```






## dk.highcharts

> Add **NONE** and **ALL** to any highchart legend with ease!

[JS Fiddle Example](http://jsfiddle.net/dk82/cbLk6s30/)

##### DEPENDENCIES
* jquery.js
* d3.js

##### Declare the container that will hold your highchart

`<div id="container"></div>`
   
##### Initialize your highchart

`Highcharts.chart('container',...`

##### Update the highchart legend 

`dk.highcharts.setLegend(false, 'container');`
> true=vertical, false=horizontal





     
