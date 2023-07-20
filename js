$(function () {
    document.addEventListener("DOMContentLoaded", function() {
        // Add click event listener to the save button in each time-block
        var saveButtons = document.querySelectorAll("save-button");
        saveButtons.forEach(function(saveButton) {
            saveButton.addEventListener("click", function() {
                var userInput = this.previousElementSibling.value;
    
                var timeBlockId = this.parentNode.id;
    
                localStorage.setItem(timeBlockId, userInput);
            });
        });
    
        for (var i = 9; i <= 17; i++) {
            var timeBlockId = "hour-" + i;
            var userInput = localStorage.getItem(timeBlockId);
            if (userInput !== null) {
                document.getElementById(timeBlockId).querySelector(".description").value = userInput;
            }
        }
        function updateTime() {
            let today = moment();
        }
    });
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function applyTimeBlockClass() {
        var currentHour = new Date().getHours();
        for (var i = 9; i <= 17; i++) {
            var timeBlockId = "hour-" + i;
            var timeBlock = document.getElementById(timeBlockId);

            if (i < currentHour) {
                timeBlock.classList.add("past");
                timeBlock.classList.remove("present", "future");
            } else if (i === currentHour) {
                timeBlock.classList.add("present");
                timeBlock.classList.remove("past", "future");
            } else {
                timeBlock.classList.add("future");
                timeBlock.classList.remove("past", "present");
            }
        }
    }       // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  document.getElementById('calendarContainer').
  getElementsByTagName('li')[(new Date()).getDate() - 1].className += ' currentDate';
