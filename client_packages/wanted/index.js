/*
*
* Script: Wanted-Level
* Author: Keanu
* GitHub: github.com/KeanuLox
*
*/
mp.events.add("wantedLevel",(level) => {
  mp.game.gameplay.setFakeWantedLevel(level);
});