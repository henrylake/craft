$('#Run_panelButton', window.parent.document).click(function () {
  if(typeof scene !== "undefined") {
  		scene.startAttempt()
  }	
});

$('#Reset_panelButton', window.parent.document).click(function () {
  if(typeof scene !== "undefined") {
  		scene.resetAttempt()
  }	
});