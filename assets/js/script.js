var timeBlock = $(".timeBlock");
var saveBtn = $(".saveBtn");

//create a native .date to read the current date/time and display it to the currentDay id
const d = new Date();
let text = d.toString();
document.getElementById("currentDay").innerHTML = text;

function saveSchedule() {
  timeBlock.textarea;
}

saveBtn.on("click", function () {
  saveSchedule();
});
