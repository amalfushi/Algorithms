// Given two straight line segments (represented as a start point and an end point, compute the point of intersection if any)

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(start, end) {
        let deltaY = end.y - start.y;
        let deltaX = end.x - start.x;
        this.slope = deltaY / deltaX;
        this.yIntercept = end.y - this.slope * end.x;
        // console.log(start, end, deltaX, deltaY, this.slope)
    }
}
let p1 = new Point(0, 0);
let p2 = new Point(4, 4);
let p3 = new Point(0, 3);
let p4 = new Point(12, 9);

console.log(getIntersection(p1, p2, p3, p4))

function getIntersection(start1, end1, start2, end2) {
    // rearrange these so that, in order of x values: start is before end and 1 is before 2
    if (start1.x > end1.x) swap(start1, end1);
    if (start2.x > end2.x) swap(start2, end2);
    if (start1.x > start2.x) {
        swap(start1, start2);
        swap(end1, end2);
    }

    //compute lines;
    let line1 = new Line(start1, end1);
    let line2 = new Line(start2, end2);
    // console.log(line1, line2)

    //if lines are parallel, they only intercept if they have the same y;
    if (line1.slope == line2.slope) {
        if (line1.yIntercept == line2.yIntercept && pointsBetween(start1, start2, end1)) return start2;
        return null;
    }

    //get intersect coords;
    let x = (line2.yIntercept - line1.yIntercept) / (line1.slope - line2.slope);
    let y = x * line1.slope + line1.yIntercept;
    let intersection = new Point(x, y);
    // console.log(intersection)

    //check if  between line segment range;
    if (pointsBetween(start1, intersection, end1) && pointsBetween(start2, intersection, end2)) return intersection;
    return null
}

function pointsBetween(startP, middleP, endP) {
    return coordsBetween(startP.x, middleP.x, endP.x) && coordsBetween(startP.y, middleP.y, endP.y);
}

function coordsBetween(start, middle, end) {
    if (start > end) {
        return end <= middle && middle <= start;
    }
    return start <= middle && middle <= end;
}

function swap(firstP, secondP) {
    let x = firstP.x;
    let y = firstP.y;
    firstP.setLocation(secondP.x, secondP.y);
    secondP.setLocation(x, y);
}