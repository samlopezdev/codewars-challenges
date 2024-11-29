// Maze Runner

// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.



// My Solution

// maze -> arr of subbarrays contains numbers
// directions -> arr of strings; 'N', 'S', 'E', 'W'
// return -> 'Finish' if end is reached. 'Dead' if run into wall(1). 'Lost' if still in the maze(not enough moves?)
function mazeRunner(maze, directions) {
    // Find start location
    let ver = maze.findIndex( val => val.includes(2))
    let hor = maze[ver].findIndex( val => val === 2)
  
    // loop thru directions, check location of maze
    for (let step of directions) {
      switch (step) {
          // 'N' = array behind it, w/ same index
          // 'S' = array in front of it, w/ same index
          // 'E' = same arr, index to the right (index + 1)
          // 'W' = same arr, index to the left (index - 1)
          case 'N': ver--; break;
          case 'S': ver++; break;
          case 'W': hor--; break;
          case 'E': hor++
      }
      // if indx = 3 -> 'Finish'
      if (maze[ver] && maze[ver][hor] === 3) return 'Finish'
      // if indx = 1 -> 'Dead'
      if (!maze[ver] || maze[ver][hor] === undefined || maze[ver][hor] === 1) return 'Dead'
    }
    // return 'Lost'
    return 'Lost'
}


// Other Solutions
function mazeRunner(maze, dirs) {
    var y = maze.findIndex(arr => arr.includes(2));
    var x = maze[y].indexOf(2);
    var curPos;
    for (var i = 0; i < dirs.length; i++) {
      if (dirs[i] === 'N') y--;
      if (dirs[i] === 'S') y++;
      if (dirs[i] === 'W') x--;
      if (dirs[i] === 'E') x++;
      if (!maze[y]) return 'Dead';
      curPos = maze[y][x];
      if (curPos === 3) return 'Finish';
      if (curPos === 1 || curPos === undefined) return 'Dead';
    }
    return 'Lost';
}


// 2
function mazeRunner(maze, directions) {
    let row = maze.findIndex(arr => arr.includes(2)),
        col = maze[row].indexOf(2);
        
    const dirs = {
        'N': 'row--',
        'S': 'row++',
        'E': 'col++',
        'W': 'col--'
    }
        
    for (let i = 0; i < directions.length; i++) {
        eval(dirs[directions[i]])
        if (!maze[row] || maze[row][col] == undefined || maze[row][col] == 1) return 'Dead'
        if (maze[row][col] === 3) return 'Finish'
    }
    return 'Lost'
}


// 3
function mazeRunner(maze, directions) {
    var path = Array(), curX, curY;
    for (var i = 0; i < maze.length; i++) {
      for (var j = 0; j < maze[i].length; j++) {
        if (maze[i][j] == 2) {
          curX = j;
          curY = i;
        }
      }
    }
    for (var i = 0; i < directions.length; i++) {
      if (directions[i] == 'N') curY--;
      if (directions[i] == 'S') curY++;
      if (directions[i] == 'W') curX--;
      if (directions[i] == 'E') curX++;
      
      // path.push(maze[curY][curX]);
      if (!maze[curY]) return 'Dead';
      if (maze[curY][curX] == 3) return 'Finish';
      if (maze[curY][curX] == undefined || maze[curY][curX] == 1) return 'Dead';
    }
    return 'Lost';
}