$(function() {
  var deg = 360 / Math.floor($(".pic li").length);
  $(".pic li").each(function(i) {
    $(this).css({
      transform: "rotateY(" + i * deg + "deg) translateZ(240px)"
    });
  });
  var i = 0;
  window.onload = function() {
    var text = document.getElementsByClassName("text")[0];
    var str =
      "能够遇见你是我最大的幸运，有了你生活变得丰富多彩，有了你，世界变得如此迷人；你是我的世界，我的世界是你，对我来说，不是在最美好的时光遇见了你，而是遇见你后都是最美好的时光！";
    var timer;
    setTimeout(function () {
      timer = setInterval(function() {
        text.innerHTML += str[i++];
        if (i == str.length) {
          clearInterval(timer);
        }
      }, 150);
    }, 1000)
  };
  var minSize = 20,
    maxSize = 70,
    endTop = $(window).height() - 100,
    flower = $("<span>❄</span>").css({
      position: "absolute",
      top: 0,
      color: "#fff"
    }),
    durationFull = 3000 * Math.random() + 5000;
  setInterval(function() {
    var startLeft = Math.random() * $(window).width(),
      endLeft = Math.random() * $(window).width(),
      opacity = Math.random() * 0.3 + 0.7;
    flower
      .clone()
      .css({
        "font-size": Math.floor(Math.random() * maxSize) + minSize,
        left: startLeft + "px",
        opacity: opacity
      })
      .animate(
        {
          opacity: 0.1,
          left: endLeft,
          top: endTop
        },
        durationFull,
        "swing",
        function() {
          $(this).remove();
        }
      )
      .appendTo($("body"));
  }, 100);
});
