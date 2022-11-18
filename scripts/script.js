//Scrolling Animation

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

//Projects Mouseover Event Listener

//Listen for video element

let preview1 = document.querySelector("#proj-1");

/* Adding the event listeners on the video to play/pause the video. */
preview1.addEventListener("mouseover", function (e) {
  preview1.play();
});

/* Applying the mouse out event to pause the video */
preview1.addEventListener("mouseout", function (e) {
  preview1.pause();
});

/* ... Project 2 */

let preview2 = document.querySelector("#proj-2");

preview2.addEventListener("mouseover", function (e) {
  preview2.play();
});

preview2.addEventListener("mouseout", function (e) {
  preview2.pause();
});

/* ... Project 3 */

let preview3 = document.querySelector("#proj-3");
preview3.addEventListener("mouseover", function (e) {
  preview3.play();
});

preview3.addEventListener("mouseout", function (e) {
  preview3.pause();
});

/* ... Project 4 */

let preview4 = document.querySelector("#proj-4");
preview4.addEventListener("mouseover", function (e) {
  preview4.play();
});

preview4.addEventListener("mouseout", function (e) {
  preview4.pause();
});

/* ... Project 5 */

let preview5 = document.querySelector("#proj-5");
preview5.addEventListener("mouseover", function (e) {
  preview5.play();
});

preview5.addEventListener("mouseout", function (e) {
  preview5.pause();
});

/* ... Project 6 */

let preview6 = document.querySelector("#proj-6");
preview6.addEventListener("mouseover", function (e) {
  preview6.play();
});

preview6.addEventListener("mouseout", function (e) {
  preview6.pause();
});
