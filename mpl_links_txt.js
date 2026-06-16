"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Vanessa Dela Cruz
   Date: April 23, 2024
   
   Filename: mpl_links.js

*/
//event listener for the load event that runs an anonymous function
window.addEventListener("load", function()
{
   //referencing all "select" elements nested within the govlinks form
   var allSelect = document.querySelectorAll("form[name = 'govLinks'] select");
   //loop through each "select" element
   allSelect.forEach(function(select)
   {
      //creates an anonymous function for the onchange event
      select.addEventListener("change", function(event)
      {
         //gets the value of the selected option
         var targetValue = event.target.value;
         //changes the page shown in the browser window to the value of the target option
         window.location.href = targetValue;
      });
   });
});
