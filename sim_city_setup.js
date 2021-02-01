function onComplete(result) {
  // check if complete
  completed = true
  if(result instanceof Array) {
   for(let i=0; i < result.length; i++) {
        if(result[i] == false) {
          completed = false
        }
      }
  } else {
		completed = result
  }

  // send corresponding test results
  let testResults = {}
  if(result instanceof Array) {
   for(let i=0; i < result.length; i++) {
     if(result[i]) {
      testResults[i+1] = {pass:result[i]}
     } else {
      const errorMessages = ["Not quite", "Try again", "This one needs a bit more work", "Have another go"];
      const random = Math.floor(Math.random() * errorMessages.length);
      testResults[i+1] = {
        pass: result[i],
        errorMessage: errorMessages[random]
      }
     }
    }
  } else {
		testResults = {
      1: {pass: result}
    }
  }
  
  window.parent.postMessage({ type: 'test-results', testResults }, '*');
}

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