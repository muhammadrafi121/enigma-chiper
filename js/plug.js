function Plug(c1, c2, p1, p2) {
	this.point1 = p1;
    this.point2 = p2;
    this.conn1 = c1;
    this.conn2 = c2;

    this.setPlugPoint = function(plugPointNo, newPoint, connNo) {
        newPoint.occupied = true;
        if (connNo == 1) {
            this.point1 = newPoint;
            this.conn1 = plugPointNo;
        } else if (connNo == 2) {
            this.point2 = newPoint;
            this.conn2 = plugPointNo;
        }
    }
}