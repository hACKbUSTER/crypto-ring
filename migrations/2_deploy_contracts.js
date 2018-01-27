var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Contracts = [
  //"ClockAuction.sol",
  "ClockAuctionBase.sol",
  //"SaleClockAuction.sol",
  "Debuggable.sol",
  //"ERC721.sol",
  //"GeneScienceInterface.sol",
  "KittyAccessControl.sol",
  "KittyAuction.sol",
  "KittyBase.sol",
  "KittyCore.sol",
  "KittyCoreRinkeby.sol",
  "KittyCoreTest.sol",
  "KittyMinting.sol",
  "KittyOwnership.sol",
  "Migrations.sol",
  "SimpleStorage.sol",
  "Pausable.sol",
  "Ownable.sol"
];

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  for (i = 0; i < Contracts.length; i++)
  {
    deployer.deploy(artifacts.require("./" + Contracts[i]));
  }
};
