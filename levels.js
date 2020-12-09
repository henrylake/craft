/* VERIFICATION API EXAMPLES

verificationFunction: () => true,

verificationFunction: verificationAPI => verificationAPI.isPlayerAt([8, 4]),

verificationFunction: verificationAPI => (
  verificationAPI.isBlockOfTypeAtPositionOnPlane([3,4], "farmlandWet", "ground") &&
  verificationAPI.isBlockOfTypeAtPositionOnPlane([3,4], "cropTomato", "action")
)

verificationFunction: verificationAPI => (
  verificationAPI.getInventoryAmount("cropTomato") === 1
) 

verificationFunction: verificationAPI => (
  verificationAPI.getInventoryAmount("cropTomato") === 1 &&
  verificationAPI.getCommandExecutedCount("checkInventory") >= 1 &&
  verificationAPI.isPlayerAt([3, 6])
) 

verificationFunction: verificationAPI => (
  verificationAPI.getInventoryAmount("cropTomato") === 2 &&
  verificationAPI.getCommandExecutedCount("checkInventory") >= 1 &&
  verificationAPI.countOfTypeOnMap("cropTomato") >= 4
) 

verificationFunction: verificationAPI  => {
  const blocksAndPositions = {
    "farmlandWet": ["ground", [[4,2], [4,3], [4,4]]]
  }
  
  for (var blockType in blocksAndPositions) {
    var blockPlane = blocksAndPositions[blockType][0]
    var blockPositions = blocksAndPositions[blockType][1]
    
    for (let i = 0; i < blockPositions.length; i++) {  
      if(!verificationAPI.isBlockOfTypeAtPositionOnPlane(blockPositions[i], blockType, blockPlane)) {
        return false;
      }
    }
  }
  return true;
},

verificationFunction: verificationAPI =>
  verificationAPI.solutionMapMatchesResultMap([
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "cropWheat", "", "cropWheat", "", "", "",
    "", "", "", "", "cropWheat", "", "cropWheat", "", "", "",
    "", "", "", "", "cropWheat", "", "cropWheat", "", "", "",
    "", "", "", "", "cropWheat", "", "cropWheat", "", "", "",
    "", "", "", "", "cropWheat", "", "cropWheat", "", "", "",
    "", "", "", "", "cropWheat", "", "cropWheat", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ]),

verificationFunction: verificationAPI =>
  verificationAPI.isPlayerNextTo("sheep"),


verificationFunction: verificationAPI  => {
  const successPositions = [[7, 4] , [7, 5]];
  for (let i = 0; i < successPositions.length; i++) {
    if (verificationAPI.isEntityAt("Player" , successPositions[i])) {
      return true;
    }
  }
},

verificationAPI.areBlocksAtPositions(
{
  "cropPotato": ["action", [[4,3]]]
})

TARGET ENTITY

entities: [["target", 8, 4, 1]]
*/


var turing_levels = {
  planes: {
    grass: [
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
      "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    ],
    greenhouse_deco: [
      "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
    ],
    empty: [
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
    ],
    greenhouse_fluff: [
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouse",
    ]
  },
  simple: {
  groundPlane: [
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
  ],
  groundDecorationPlane: [
    "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  actionPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  fluffPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouse",
  ],
  playerStartPosition: [4, 2],
  playerStartDirection: 2,
  entities: [["home", 4, 2, 2],["target", 8, 4, 1]],
  verificationFunction: () => true,
},
templateA: {
  groundPlane: [
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmlandWet", "grass", "farmlandWet", "grass", "grass", "grass", "farmlandWet", "grass", "farmlandWet", "grass",
    "farmlandWet", "grass", "farmlandWet", "grass", "grass", "grass", "farmlandWet", "grass", "farmlandWet", "grass",
    "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass",
    "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass",
    "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "farmlandWet", "grass",
    "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath",
  ],
  groundDecorationPlane: [
    "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "",
    "waterPumpDown", "", "waterPumpDown", "", "", "", "", "", "", "",
    "waterPipeDown", "", "waterPipeDown", "", "homeDown", "", "", "", "", "",
    "waterPipeDown", "", "waterPipeDown", "", "target", "", "", "", "", "",
    "waterPipeEndDown", "", "waterPipeEndDown", "", "", "", "", "", "", "",
    "waterPumpDown", "", "waterPumpDown", "", "", "", "", "", "", "",
    "waterPipeDown", "", "waterPipeDown", "", "", "", "", "", "", "",
    "waterPipeDown", "", "waterPipeDown", "", "", "", "", "", "", "",
    "waterPipeEndDown", "", "waterPipeEndDown", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  actionPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "farmCratesRight", "",
    "cropTomato", "", "cropAubergine", "", "", "", "cropPumpkin", "", "cropTurnip", "",
    "cropTomato", "", "cropAubergine", "", "", "", "cropPumpkin", "", "cropTurnip", "",
    "cropTomato", "", "cropAubergine", "", "cropPotato", "", "cropPumpkin", "", "cropTurnip", "",
    "", "", "", "", "", "", "", "", "", "",
    "cropTomato", "", "cropAubergine", "", "cropPotato", "", "cropPumpkin", "", "cropTurnip", "",
    "cropTomato", "", "cropAubergine", "", "cropPotato", "", "cropPumpkin", "", "cropTurnip", "",
    "cropTomato", "", "cropAubergine", "", "cropPotato", "", "cropPumpkin", "", "cropTurnip", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  fluffPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouse",
    "", "", "", "", "", "", "", "", "", "",
  ],
  playerStartPosition: [4, 2],
  playerStartDirection: 2,
  entities: [["target", 8, 4, 1]],
  verificationFunction: () => true,
},
templateB: {
  groundPlane: [
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath",
  ],
  groundDecorationPlane: [
    "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "",
    "farmCratesLeft", "farmCratesLeft", "farmCratesLeft", "", "", "", "", "waterBarrell", "farmCratesRight", "",
    "farmCratesLeft", "", "", "", "", "", "", "", "farmCratesRight", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "homeDown", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "waterBarrell", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  actionPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "cropPumpkin", "", "cropPumpkin", "", "cropPumpkin", "", "cropPumpkin", "", "",
    "", "", "cropPumpkin", "", "", "", "cropPumpkin", "", "", "",
    "", "cropPumpkin", "", "", "", "", "", "cropPumpkin", "", "",
    "", "", "cropPumpkin", "", "", "", "cropPumpkin", "", "", "",
    "", "cropPumpkin", "", "cropPumpkin", "", "cropPumpkin", "", "cropPumpkin", "", "",
    "", "", "cropPumpkin", "", "cropPumpkin", "", "cropPumpkin", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  fluffPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouse",
    "", "", "", "", "", "", "", "", "", "",
  ],
  playerStartPosition: [4, 4],
  playerStartDirection: 2,
  verificationFunction: () => true,
},
templateC: {
  groundPlane: [
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath",
  ],
  groundDecorationPlane: [
    "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "homeRight", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  actionPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "",
    "cropTomato", "cropAubergine", "", "", "", "", "cropTomato", "cropAubergine", "", "",
    "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "",
    "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "",
    "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "",
    "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "cropTomato", "cropAubergine", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  fluffPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouse",
    "", "", "", "", "", "", "", "", "", "",
  ],
  playerStartPosition: [2, 3],
  playerStartDirection: 1,
  verificationFunction: () => true,
},
templateD: {
  groundPlane: [
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "farmlandWet", "farmlandWet", "grass", "grass",
    "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath",
  ],
  groundDecorationPlane: [
    "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "",
    "waterBarrell", "", "", "waterBarrell", "", "", "waterBarrell", "", "", "",
    "", "", "homeRight", "", "", "", "", "", "farmCratesRight", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "farmCratesRight", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "farmCratesRight", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "farmCratesRight", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  actionPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "cropPumpkin", "cropPumpkin", "", "", "", "", "cropPumpkin", "cropPumpkin", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "cropTurnip", "cropTurnip", "", "", "", "", "cropTurnip", "cropTurnip", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "cropPumpkin", "cropPumpkin", "", "", "", "", "cropPumpkin", "cropPumpkin", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "cropTurnip", "cropTurnip", "", "cropTurnip", "cropTurnip", "", "cropTurnip", "cropTurnip", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  fluffPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouse",
    "", "", "", "", "", "", "", "", "", "",
  ],
  playerStartPosition: [2, 2],
  playerStartDirection: 1,
  verificationFunction: () => true,
},
templateE: {
  groundPlane: [
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass", "grass", "grass",
    "farmlandWet", "grass", "grass", "grass", "grass", "grass", "grass", "farmlandWet", "grass", "grass",
    "farmlandWet", "grass", "grass", "farmlandWet", "farmlandWet", "grass", "grass", "farmlandWet", "grass", "grass",
    "farmlandWet", "grass", "farmlandWet", "grass", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "grass",
    "farmlandWet", "grass", "farmlandWet", "grass", "grass", "farmlandWet", "grass", "farmlandWet", "grass", "grass",
    "farmlandWet", "grass", "grass", "farmlandWet", "farmlandWet", "grass", "grass", "farmlandWet", "grass", "grass",
    "farmlandWet", "grass", "grass", "grass", "grass", "grass", "grass", "farmlandWet", "grass", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass", "grass", "grass",
    "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath",
  ],
  groundDecorationPlane: [
    "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "",
    "", "", "", "", "", "", "", "waterBarrell", "farmCratesRight", "",
    "", "", "", "", "", "", "", "", "farmCratesRight", "",
    "", "", "", "", "", "homeLeft", "", "", "farmCratesRight", "",
    "", "", "", "", "", "", "", "", "farmCratesRight", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "waterBarrell", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  actionPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "", "", "",
    "cropTomato", "", "", "", "", "", "", "cropPumpkin", "", "",
    "cropTomato", "", "", "cropAubergine", "cropAubergine", "", "", "cropPumpkin", "", "",
    "cropTomato", "", "cropTomato", "", "", "cropPumpkin", "", "cropPumpkin", "", "",
    "cropTomato", "", "cropTomato", "", "", "cropPumpkin", "", "cropPumpkin", "", "",
    "cropTomato", "", "", "cropTurnip", "cropTurnip", "", "", "cropPumpkin", "", "",
    "cropTomato", "", "", "", "", "", "", "cropPumpkin", "", "",
    "", "cropTurnip", "cropTurnip", "cropTurnip", "cropTurnip", "cropTurnip", "cropTurnip", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  fluffPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouse",
    "", "", "", "", "", "", "", "", "", "",
  ],
  playerStartPosition: [5, 3],
  playerStartDirection: 3,
  verificationFunction: () => true
},
templateF: {
  groundPlane: [
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "grass", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath",
  ],
  groundDecorationPlane: [
    "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "",
    "farmCratesLeft", "", "", "", "", "", "", "", "", "",
    "waterBarrell", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "homeRight", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  actionPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "cropTomato", "cropTomato", "cropTomato", "cropTomato", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "",
    "", "cropTomato", "cropTomato", "cropTomato", "cropTomato", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "",
    "", "cropTomato", "cropTomato", "cropTomato", "cropTomato", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "",
    "", "cropTomato", "cropTomato", "cropTomato", "cropTomato", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "",
    "", "cropTomato", "cropTomato", "cropTomato", "cropTomato", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "",
    "", "cropTomato", "cropTomato", "cropTomato", "cropTomato", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "",
    "", "cropTomato", "cropTomato", "cropTomato", "cropTomato", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "",
    "", "cropTomato", "cropTomato", "cropTomato", "cropTomato", "cropAubergine", "cropAubergine", "cropAubergine", "cropAubergine", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  fluffPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouse",
    "", "", "", "", "", "", "", "", "", "",
  ],
  playerStartPosition: [0, 4],
  playerStartDirection: 1,
  verificationFunction: () => true
},
templateG: {
  groundPlane: [
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass",
    "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "farmlandWet", "grass",
    "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath", "farmPath",
  ],
  groundDecorationPlane: [
    "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "greenhouseFrontDeco", "", "", "",
    "farmCratesLeft", "waterBarrell", "", "", "", "", "homeDown", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  actionPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "cropTomato", "cropAubergine", "cropPumpkin", "cropTurnip", "cropPotato", "cropTomato", "cropAubergine", "cropPumpkin", "cropTurnip", "",
    "cropAubergine", "cropPumpkin", "cropTurnip", "cropPotato", "cropTomato", "cropAubergine", "cropPumpkin", "cropTurnip", "cropTomato", "",
    "cropPumpkin", "cropTurnip", "cropPotato", "cropTomato", "cropAubergine", "cropPumpkin", "cropTurnip", "cropTomato","cropAubergine", "",
    "cropTurnip", "cropPotato", "cropTomato", "cropAubergine", "cropPumpkin", "cropTurnip", "cropTomato","cropAubergine","cropPumpkin", "",
    "cropPotato", "cropTomato", "cropAubergine", "cropPumpkin", "cropTurnip", "cropTomato","cropAubergine","cropPumpkin","cropTurnip", "",
    "cropTomato", "cropAubergine", "cropPumpkin", "cropTurnip", "cropTomato","cropAubergine","cropPumpkin","cropTurnip","cropPotato",  "",
    "cropAubergine", "cropPumpkin", "cropTurnip", "cropTomato","cropAubergine","cropPumpkin","cropTurnip","cropPotato", "cropTomato", "",
    "", "", "", "", "", "", "", "", "", "",
  ],
  fluffPlane: [
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "greenhouseArchedRoof",
    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", "",
    "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouseArch", "", "", "greenhouse",
    "", "", "", "", "", "", "", "", "", "",
  ],
  playerStartPosition: [6, 1],
  playerStartDirection: 2,
  verificationFunction: () => true
}
};

window.turing_levels = turing_levels