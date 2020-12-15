var completed = false

var gameController = new GameController({
  Phaser: window.Phaser,
  containerId: 'phaser-game',
  assetRoot: '/assets/',
  audioPlayer: new Sounds(),
  debug: false,
  earlyLoadAssetPacks: localLevel.earlyLoadAssetPacks,
  earlyLoadNiceToHaveAssetPacks: localLevel.earlyLoadNiceToHaveAssetPacks,
  afterAssetsLoaded: () => {
    gameController.codeOrgAPI.resetAttempt();
  }
});

function onComplete(result, level) {
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
     testResults[i+1] = {pass:result[i]}
    } 
  } else {
		testResults = {
      1: {pass: result}
    }
  }
  
  window.parent.postMessage({ type: 'test-results', testResults }, '*');
}

function checkComplete () {
  return completed
}

gameController.loadLevel(localLevel);

$('#Run_panelButton', window.parent.document).click(function () {
  setTimeout(() => {
    gameController.codeOrgAPI.resetAttempt();
    gameController.codeOrgAPI.startAttempt(onComplete);
    brython()
  }, 0)
  
});

$('#reset_panelButton', window.parent.document).click(function () {
  gameController.codeOrgAPI.resetAttempt();
});
