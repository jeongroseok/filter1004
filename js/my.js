"use strict";
var my = {};
my.includeHTML = function() {
    if (my.isOn != true)
        return;
    w3.includeHTML();
};