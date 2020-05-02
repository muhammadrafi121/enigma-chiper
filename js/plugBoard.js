function PlugBoard() {
	this.plugs = [];
    this.plugPoints = [];

    for (let i = 0; i < 26; i++) {
        let p = new PlugPoint(i);
        this.plugPoints.push(p);
    }
    
    this.setPlugs = function(input) {
        for (let i = 0; i < 10; i++) {
            let p1 = letterOrderLowerCase.indexOf(input[i][0]);
            let p2 = letterOrderLowerCase.indexOf(input[i][1]);
            let p = new Plug(p1, p2, this.plugPoints[p1], this.plugPoints[p2]);
            this.plugs.push(p);
            this.plugPoints[p1].occupied = true;
            this.plugPoints[p2].occupied = true;
        }
    }

    this.runThrough = function(input) {
        for (let i = 0; i < 10; i++) {
            if (this.plugs[i].conn1 == input) {
                return this.plugs[i].conn2;
            } else if (this.plugs[i].conn2 == input) {
                return this.plugs[i].conn1;
            }
        }
        return input;
    }
}