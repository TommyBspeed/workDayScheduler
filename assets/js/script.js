//declare global variables
var timeBlock = $(".timeBlock");
var saveBtn = $(".saveBtn");

//create a native date to read the current date/time and display it to the currentDay id
const dayNow = new Date();
let text = dayNow.toString();
document.getElementById("currentDay").textContent = text;

//create a function to track the current time and compare it to the time blocks.
function timeTracker() {
  var lineTime = $(".time-block").each(function () {
    if (lineTime < dayNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (lineTime === dayNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

//create function for the save button to store values in local storage.
saveBtn.on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("class");

  // Save text in local storage
  localStorage.setItem(time, text);
});
//grab data from local storage if any has been saved.
$(".hour9 .description").val(localStorage.getItem("hour8"));

$(".hour10 .description").val(localStorage.getItem("hour10"));

$(".hour11 .description").val(localStorage.getItem("hour11"));

$(".hour12 .description").val(localStorage.getItem("hour12"));

$(".hour13 .description").val(localStorage.getItem("hour13"));

$(".hour14 .description").val(localStorage.getItem("hour14"));

$(".hour15 .description").val(localStorage.getItem("hour15"));

$(".hour16 .description").val(localStorage.getItem("hour16"));

$(".hour17 .description").val(localStorage.getItem("hour17"));

$(".hour18 .description").val(localStorage.getItem("hour18"));
