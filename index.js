window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const poo = document.querySelectorAll(".plus");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });

  // Below changes the poo image each time a pad is clicked. Its changing the Div Class from "plus" to "minus" using "toggle"
  $(".plus").click(function () {
    $(this).toggleClass("minus");
    console.log("clicked");
  })

  $(".pad1").click(function () {
    $(poo).toggleClass("minus");
    console.log("clicked");
  })
  $(".pad2").click(function () {
    $(poo).toggleClass("minus");
    console.log("clicked");
  })
  $(".pad3").click(function () {
    $(poo).toggleClass("minus");
    console.log("clicked");
  })
  $(".pad4").click(function () {
    $(poo).toggleClass("minus");
    console.log("clicked");
  })
  $(".pad6").click(function () {
    $(poo).toggleClass("minus");
    console.log("clicked");
  })
  $(".pad7").click(function () {
    $(poo).toggleClass("minus");
    console.log("clicked");
  })
  $(".pad8").click(function () {
    $(poo).toggleClass("minus");
    console.log("clicked");
  })
  $(".pad9").click(function () {
    $(poo).toggleClass("minus");
    console.log("clicked");
  })

});
