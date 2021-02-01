$('#Run_panelButton', window.parent.document).click(function () {
  if(typeof scene !== "undefined") {
  		scene.startAttempt()
  }	
});

$('#Stop_panelButton', window.parent.document).click(function () {
  if(typeof scene !== "undefined") {
  		scene.resetAttempt()
  }	
});

$('#Reset_panelButton', window.parent.document).click(function () {
  if(typeof scene !== "undefined") {
  		scene.resetAttempt()
  }	
});