function onComplete(result) {
  if(result == "default") {
    window.parent.postMessage({ type: 'runTests'}, '*');
    return
  }
  
  // check if complete
  completed = true
  if(result instanceof Array) {
   for(let i=0; i < result.length; i++) {
        if(result[i].pass == false) {
          completed = false
        }
      }
  } else {
		completed = result.pass
  }

  // send corresponding test results
  let testResults = {}
  if(result instanceof Array) {
   for(let i=0; i < result.length; i++) {
     if(result[i].pass) {
      testResults[i+1] = result[i]
     } else if(!result[i].pass && result[i].errorMessage) {
      testResults[i+1] = result[i]
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
      1: result
    }
  }
  
  window.parent.postMessage({ type: 'test-results', testResults }, '*');
}
