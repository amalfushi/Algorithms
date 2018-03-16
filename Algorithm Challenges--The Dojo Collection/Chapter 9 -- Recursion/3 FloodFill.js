// Recreate the 'paintcan fill' of many graphic applications.
// Given a 2-dimensional matrix, a starting point, and a new color, replace every adjacent
// color that matches the starting point with the replacement color;

/*   Example:
 input = ([[3, 2, 3, 4, 3],
           [2, 3, 3, 4, 0],
           [7, 3, 3, 5, 3],
           [6, 5, 3, 4, 1],
           [1, 2, 3, 3, 3]], [2, 2], 1)

output = ([[3, 2, 1, 4, 3],
           [2, 1, 1, 4, 0],
           [7, 1, 1, 5, 3],
           [6, 5, 1, 4, 1],
           [1, 2, 1, 1, 1]])
*/

function FloodFill(canvas, start, color) {
    let sample = canvas[start[0]][start[1]];
    Replace(start);
    return canvas;

    function Replace(coords){
        let y = coords[0],
            x = coords[1];
        canvas[y][x] = color; 
        // if the row above or below exists and matches the sample, recursive call
        if (canvas[y-1] && canvas[y-1][x] == sample) Replace([y-1, x]);
        if (canvas[y+1] && canvas[y+1][x] == sample) Replace([y+1, x]);
        // if the column to the left or right exists and matches the sampe, recursive call
        if (canvas[y][x-1] && canvas[y][x-1] == sample) Replace([y, x-1]);
        if (canvas[y][x+1] && canvas[y][x+1] == sample) Replace([y, x+1]);
    }
}

console.log(FloodFill([[3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0],
    [7, 3, 3, 5, 3],
    [6, 5, 3, 4, 1],
    [1, 2, 3, 3, 3]], [2, 2], 1))