
var int;
function setInt() {
  clearInterval(int);
  int = setInterval(function() {
    var btns = document.getElementsByName("carousel");
    for(var i = 0; i < btns.length; i++) {
      if(btns[i].checked) {
        btns[i].checked = false;
        if(i + 1 == btns.length) {
          btns[0].checked = true;
        }
        else {
          btns[i + 1].checked = true;
        }
        return;
      }
    }
  }, 5000); 
}
setInt();
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
//  toast
// Get the modal element
      var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var sendButton = document.getElementById("sendButton");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // Get the email input field
        var emailInput = document.getElementById("emailInput");

        // When the user clicks the button, check if email is provided and open the modal
        sendButton.onclick = function (event) {
          if (emailInput.checkValidity()) {
              modal.style.display = "block";
          }
          event.preventDefault(); // Prevent the default form submission behavior
      }
      

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


        // experiment
        
        