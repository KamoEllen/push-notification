// Randomly generate position and view for notification
var positions = ["top", "bottom", "left", "right"];
var views = ["10px", "20px", "30px", "40px"];

var randomPosition = positions[Math.floor(Math.random() * positions.length)];
var randomView = views[Math.floor(Math.random() * views.length)];

var notification = document.getElementById("my-notification");
notification.style[randomPosition] = randomView;
