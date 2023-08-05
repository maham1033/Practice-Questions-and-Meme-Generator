/*
For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
    const tower = [];
    for (let floor = 1; floor <= nFloors; floor++) {
      const spaces = " ".repeat(nFloors - floor);
      const stars = "*".repeat(2 * floor - 1);
      tower.push(spaces + stars + spaces);
    }
    return tower;
  }
  
  const tower3Floors = towerBuilder(3);
  const tower6Floors = towerBuilder(6);
  
  console.log(tower3Floors.join('\n'));
  console.log();
  console.log(tower6Floors.join('\n'));
  