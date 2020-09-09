/*
*
* Script: Wanted-Level
* Author: Keanu
* GitHub: github.com/KeanuLox
*
*/
var globalLevel = 0;
mp.events.add("globalWantedLevel",(player,level) => {
  globalLevel = level;
  mp.players.forEach(_player => {
    _player.call("wantedLevel",[globalLevel]);
  });
});
mp.events.add("wantedLevel",(player,level) => {
  player.call("wantedLevel",[level]);
});

mp.events.add("playerJoin",(player) => {
  player.call("wantedLevel",[globalLevel]);
});




mp.events.addCommand("globalWanted",(player,wantedLevel) => {
  globalLevel = Number(wantedLevel);
  mp.players.forEach(_player => {
    _player.call("wantedLevel",[globalLevel]);
  });
});

mp.events.addCommand("wanted",(player,wantedLevel) => {
  player.call("wantedLevel",[Number(wantedLevel)]);
});