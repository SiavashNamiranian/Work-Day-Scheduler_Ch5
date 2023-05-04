// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var mainEl = $('#calender');

dayjs.extend(window.dayjs_plugin_advancedFormat)


$(function () {
var today = dayjs().format('dddd, MMMM Do');
$('#currentDay').text(today);
console.log(today);

dayjs.extend(window.dayjs_plugin_toArray)
console.log (dayjs());
var todayA = dayjs().toArray();
console.log (todayA);
console.log (todayA[3]);





for (var i=9; i<18; i++) {


if (i<12){
var time = i;
var ampm = 'AM';
} else if (i===12) {
 var time = i
  var ampm = 'PM';
} else {
 var time = (i - 12);
 var ampm = 'PM';
};


var timeEl = $('<h2>');
timeEl.text(time + ampm);
timeEl.addClass('time col-2 col-md-1 hour text-center py-3');



var button = $('<button>');
button.addClass('btn saveBtn col-2 col-md-1');
button.attr('aria-lebel', 'save');
button.append('<i class="fas fa-save" aria-hidden="true"></i>');


var entryEl = $('<textarea>');
entryEl.addClass('col-8 col-md-10 description');
entryEl.attr('rows', "3");
entryEl.attr('id')





var timeSlot = $('<p>');
console.log(i);
timeSlot.append(timeEl);
timeSlot.append(entryEl);
timeSlot.append(button);
timeSlot.addClass('row time-block');
timeSlot.attr('id',i);
 if (i === todayA[3]){
    timeSlot.addClass('present');
} else if (i<todayA[3]) {
  timeSlot.addClass('past');
} else {
  timeSlot.addClass('future');
};
mainEl.append(timeSlot);


console.log (entryEl.val());


button.on('click', function(){
var saveEl = $('.description').val();
var idenEl = $(this).closest('p').attr('id');
console.log($(this).closest('p').attr('id'));
localStorage.setItem(idenEl, saveEl);
});

//console.log(idenEl);

}



//var entryEl = localStorage.getItem(idenEl);

$('#document').on('click', function(){
 location.reload();

});



console.log(this);



//var

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  }
  );