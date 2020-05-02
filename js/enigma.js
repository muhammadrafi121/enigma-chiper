function Enigma() {
	this.rotor1;
    this.rotor2;
    this.rotor3;
    this.end = new EndThing();
    this.plugBoard = new PlugBoard();

    this.setRotors = function(first, second, third) {
        if (first != second && second != third && third != first) {
            this.rotor1 = new Rotor(first);
            this.rotor2 = new Rotor(second);
            this.rotor3 = new Rotor(third);
        }
    }

    this.runMachine = function(inputChar) {
        if (this.rotor1.rotorNo == this.rotor2.rotorNo || this.rotor3.rotorNo == this.rotor2.rotorNo  || this.rotor1.rotorNo == this.rotor3.rotorNo ) {
            console.log("Error rotors cannot have the same number");
            return '1';
        }

        if (!letterOrderLowerCase.includes(inputChar)) {
            console.log(inputChar);
            return '0';
        }
        let inputNo = letterOrderLowerCase.indexOf(inputChar);

        let currentNo = inputNo;
        currentNo = this.plugBoard.runThrough(currentNo);
        currentNo = this.rotor1.runThrough(currentNo, true);
        currentNo = this.rotor2.runThrough(currentNo, true);
        currentNo = this.rotor3.runThrough(currentNo, true);
        currentNo = this.end.runThrough(currentNo, true);
        currentNo = this.rotor3.runThrough(currentNo, false);
        currentNo = this.rotor2.runThrough(currentNo, false);
        currentNo = this.rotor1.runThrough(currentNo, false);
        currentNo = this.plugBoard.runThrough(currentNo);
        this.moveRotor();

        return letterOrderLowerCase[currentNo];
    }

    this.moveRotor = function() {
        this.rotor1.position += 1;
        if (this.rotor1.position == 26) {
            this.rotor1.position = 0;
            this.rotor2.position+=1;
            if (this.rotor2.position == 26) {
                this.rotor2.position = 0;
                this.rotor3.position+=1;
                if (this.rotor3.position == 26) {
                    this.rotor3.position = 0;
                }
            }
        }
    }

    this.setRotorPositions = function(first, second, third) {
        this.rotor1.position = first;
        this.rotor2.position = second;
        this.rotor3.position = third;
    }

    this.processWord = function(input) {
        let output = [];

        for (let i = 0; i < input.length; i++) {
            let o = this.runMachine(input[i]);
            output.push(o);
        }
        return output;
    }
}