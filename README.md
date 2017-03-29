# Getting started
Add dk.js to your project by including it in your project

`https://cdn.rawgit.com/DK82/dk.js/6b0dc41e/dk.js`

or download it [HERE](https://github.com/DK82/dk.js/archive/master.zip) and include it in your project manually

## dk.doGet
> Re-useable ajax GET functions accepting and returning additional parameters

[JS Fiddle Examples](http://jsfiddle.net/dk82/wrhLffbq/)

## dk.doPost
> Re-useable ajax POST functions accepting and returning additional parameters

[JS Fiddle Examples](http://jsfiddle.net/dk82/saeau9mj/)





## dk.array

> A collection of usefull array functions mimicking LINQ syntax

[JS Fiddle Examples](http://jsfiddle.net/dk82/hk9qfn5o/)

`dk.array.exists(array,object)`

`dk.array.getItemIds(array)`

`dk.array.remove(array,object)`

`dk.array.startsWith(array,text,propertyName)`

`dk.array.startsWith(array,text,propertyName,maxCount)`

`dk.array.find(array,text,propertyName)`

`dk.array.find(array,text,propertyName,maxCount)`

`dk.array.distinct(array,propertyName)`









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





     
