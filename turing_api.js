// Turinglab API set
var target = 'Player'

var goForward = () => {
  gameController.codeOrgAPI.moveForward(null, target, () => { console.log("finished") });
}

var moveDirection = (direction) => {
  enum_direction = -1
  switch (direction) {
    case "NORTH":
      enum_direction = 0
      break
    case "EAST":
      enum_direction = 1
      break;
    case "SOUTH":
      enum_direction = 2
      break;
    case "WEST":
      enum_direction = 3
      break;
  }
  if (enum_direction >= 0) {
    gameController.codeOrgAPI.moveDirection(null, target, enum_direction)
  } else {
    console.log("No Correct Direction was Provided. Try Capital letters, i.e - NORTH")
  }
}

var turnDirection = (direction) => {
  turn_direction = false
  switch (direction) {
    case "LEFT":
      turn_direction = 'left'
      break;
    case "RIGHT":
      turn_direction = 'right'
      break;
  }
  if (turn_direction) {
    gameController.codeOrgAPI.turn(null, turn_direction, target, null);
  }
}

var plantCrop = (crop) => {
  if (crop == "wheat") {
    gameController.codeOrgAPI.placeInFront(null, "cropWheat", target);
    console.log("called plant")
  }
}

var harvestCrop = () => {
  gameController.codeOrgAPI.destroyBlock(null, target);
}

var tillSoil = () => {
  gameController.codeOrgAPI.tillSoil(null, target);
}

var dropWaterBucket = () => {
  gameController.codeOrgAPI.drop(null, "cropWheat", target);
}

var hasCrops = (position) => {
  var cropMap = {
    0: [4, 7],
    1: [4, 6],
    2: [4, 5],
    3: [4, 4],
    4: [4, 3],
    5: [4, 2]
  }
  let blockAtPosition = gameController.getBlockTypeAtPosition(cropMap[position], "action")
  if (blockAtPosition.blockType == "cropWheat") {
    console.log(cropMap[position], "true")
    return true
  } else {
    console.log(cropMap[position], "false")
    return false
  }
}

var hasCropsAtPosition = (position) => {
  let blockAtPosition = gameController.getBlockTypeAtPosition(position, "action")
  if (blockAtPosition.blockType == "cropWheat") {
    return true
  } else {
    return false
  }
}

var wait = () => {
  gameController.codeOrgAPI.wait(null, 1, target)
}

var shipCrops = () => {
  gameController.codeOrgAPI.checkInventory(null, target)
}


window.turnDirection = turnDirection
window.hasCropsAtPosition = hasCropsAtPosition
window.shipCrops = shipCrops
window.wait = wait
window.goForward = goForward
window.moveDirection = moveDirection
window.plantCrop = plantCrop
window.harvestCrop = harvestCrop
window.tillSoil = tillSoil
window.dropWaterBucket = dropWaterBucket
window.hasCrops = hasCrops