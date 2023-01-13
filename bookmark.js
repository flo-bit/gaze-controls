javascript: (function () {
  var script = document.createElement("script");
  script.onload = function () {
    let allData = [];
    webgazer.showPredictionPoints(false);
    webgazer.showVideo(false);
    webgazer
      .setGazeListener(function (data) {
        if (data == null) {
          return;
        }
        allData.push({
          x: data.x / window.innerWidth,
          y: data.y / window.innerHeight,
        });
        if (allData.length > 20) {
          allData.shift();
        }
        let avgX = 0,
          avgY = 0;
        for (let i = 0; i < allData.length; i++) {
          avgX += allData[i].x;
          avgY += allData[i].y;
        }
        avgX /= allData.length;
        avgY /= allData.length;
        let point = document.getElementById("point");
        if (point == undefined) {
          point = document.createElement("div");
          point.id = "point";
          point.style =
            "position:fixed;width:30px;height:30px;border-radius:50%;background-color:rgba(0, 0, 0, 0.2);border:0.5px solid black;";
          document.body.appendChild(point);
        }
        point.style.left = avgX * 100 + "%";
        point.style.top = avgY * 100 + "%";
        if (avgY > 0.7) {
          window.scrollBy(0, 2);
        }
        if (avgY < 0.3) {
          window.scrollBy(0, -2);
        }
      })
      .begin();
  };
  script.src = "//flo-bit.github.io/gaze-controls/webgazer.js";
  document.head.appendChild(script);
})();
