// Turinglab API set
var target = 'Player'

var move_forward = () => {
  gameController.codeOrgAPI.moveForward(null, target, () => {console.log("finished")});
}

var move_direction = (direction) => {
  enum_direction = -1
  switch (direction) {
    case "north":
      enum_direction = 0
      break
    case "east":
      enum_direction = 1
      break;
    case "south": 
      enum_direction = 2
      break;
    case "west":
      enum_direction = 3
      break;
  }
  if(enum_direction >= 0) {
    gameController.codeOrgAPI.moveDirection(null, target, enum_direction)
  } else {
    console.log("No Correct Direction was Provided. Try Capital letters, i.e - NORTH")
  }
}

var turn = (direction) => {
  turn_direction = false
  switch (direction) {
    case "left":
      turn_direction = 'left'
      break;
    case "right":
      turn_direction = 'right'
      break;
  }
  if(turn_direction) {
    gameController.codeOrgAPI.turn(null, turn_direction, target, null);
  }
}

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

var plant = (crop) => {
  crop_type = false
  switch (crop) {
    case "tomato":
      crop_type = 'cropTomato'
      break;
    case "potato":
      crop_type = 'cropPotato'
      break;
    case "pumpkin":
      crop_type = 'cropPumpkin'
      break;
    case "aubergine":
      crop_type = 'cropAubergine'
      break;
    case "turnip":
      crop_type = 'cropTurnip'
      break;
  }
  gameController.codeOrgAPI.placeInFront(null, crop_type, target);
}

var harvest_crop = () => {
  gameController.codeOrgAPI.destroyBlock(null, target);
}

var prepare_soil = () => {
  gameController.codeOrgAPI.tillSoil(null, target);
}

var dropWaterBucket = () => {
  gameController.codeOrgAPI.drop(null,"cropWheat", target);
}

var has_crops = (position) => {
  var cropMap = {
    0: [4,7],
    1: [4,6],
    2: [4,5],
    3: [4,4],
    4: [4,3],
    5: [4,2]
  }
  let blockAtPosition = gameController.getBlockTypeAtPosition(cropMap[position],"action")
  if(blockAtPosition.blockType.substring(0,4) == "crop") {
    return true
  } else {
    return false
  }
}

var has_crops_at_position = (position) => {
  let blockAtPosition = gameController.getBlockTypeAtPosition(position,"action")
  if(blockAtPosition.blockType.substring(0,4) == "crop") {
    return true
  } else {
    return false
  }
}

var wait = () => {
  gameController.codeOrgAPI.wait(null, 1, target)
}

var ship_crops = () => {
  gameController.codeOrgAPI.repeat(null, () =>
  gameController.codeOrgAPI.moveToward(null, target, "target")
  ,[target, "target"], target)
  gameController.codeOrgAPI.checkInventory(null, target)
}

var return_home = () => {
  gameController.codeOrgAPI.repeat(null, () =>
    gameController.codeOrgAPI.moveToward(null, target, "target")
    ,[target, "target"], target)
}


window.turn = turn
window.has_crops_at_position = has_crops_at_position
window.ship_crops = ship_crops
window.wait = wait
window.move_forward = move_forward
window.return_home = return_home
window.move_direction = move_direction
window.plant = plant
window.harvest_crop = harvest_crop
window.prepare_soil = prepare_soil
window.dropWaterBucket= dropWaterBucket
window.has_crops = has_crops