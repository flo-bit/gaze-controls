# using your gaze to automatically scroll a webpage

This is a simple project that uses your gaze to automatically scroll a webpage. It uses [webgazer.js](https://github.com/brownhci/WebGazer) to get the gaze data.

The gaze data is averaged over a few frames and then used to calculate the scroll amount.

## how to use

(not working on all webpages and browsers yet, tested on macos chrome with wikipedia)

Add a bookmark with the following code as the URL:

```javascript
javascript: (function () {
  var script = document.createElement("script");
  script.src =
    "https://flo-bit.github.io/gaze-controls/gaze-tracking-bookmark.js";
  document.body.appendChild(script);
})();
```

Then, when you are on a webpage, click on the bookmark and allow camera access.

Click on a few points on the page to calibrate the gaze tracker until the tracking preview is more or less calibrated (meaning it moves to where you look).

The script will then automatically scroll the page up or down while you read.
