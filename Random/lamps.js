function checkIllumination(N, lamps, queries) {
    // Store count of how many lamps are illuminating that particular line
    //keep track of how many lamps are illuminating each row, column, diagonalUP, and diagDown
    // row : [0,0,2,3]
    // column: [0,1,1,0]
    // diagUP: [0,0,0,1,0,1,0]     x+y
    // diagDowd: [0,0,0,2,0,0,0]        n+x-y
    let rows = [];
    let columns = [];
    let diagUp = [];
    let diagDown = [];

    // Build 'matrix'
    for (let i = 0; i < N; i++) rows.push(0), columns.push(0);
    for (let i = 0; i < (N - 1) * 2 + 1; i++) diagUp.push(0), diagDown.push(0);

    // add all lamps
    addLamps(lamps, addLamps);


    //query lamps
    let out = [];
    for (let q of queries) {
        if (query(q)) out.push("LIGHT")
        else out.push("DARK");
    }

    return out;


    

    //Helper Functions
    function query(lamp) {
        const row = lamp[0];
        const column = lamp[1];

        //remove surrounding lamps including current position
        let neighbors = [];
        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                let neighbor = lamps.filter((l) => l[0] == row + y && l[1] == column + x)[0] //should only return 1
                if (neighbor) {
                    removeNeighbor(neighbor);
                    neighbors.push(neighbor);
                }
            }
        }

        // check to see if coresponding row/column/diagUp/diagDown is still illuminated
        let illuminated = rows[row] > 0 || columns[column] > 0 || diagUp[column + row] > 0 || diagDown[N + column - row] > 0;

        // re-add lamps;
        addLamps(neighbors);

        return illuminated;
    }

    function addLamps(arr) {
        // add lamps ([2,1], [3,2])
        // numbers indicate illumination
        //      0 1 0 1 0
        //      2 1 1 0 1
        //      1 2 2 2 0
        //      1 2 2 2 0
        for (let lamp of arr) {
            const row = lamp[0];
            const column = lamp[1];

            rows[row]++;
            columns[column]++;
            diagUp[column + row]++;
            diagDown[N + column - row]++;
        }
    }

    function removeNeighbor(lamp) {
        // decrement line counts
        const row = lamp[0];
        const column = lamp[1];

        rows[row]--;
        columns[column]--;
        diagUp[column + row]--;
        diagDown[N + column - row]--;
    }
}