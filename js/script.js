const input = document.querySelector('#text-input');

const rotorNo1 = document.querySelector('.nr1');
const rotorNo2 = document.querySelector('.nr2');
const rotorNo3 = document.querySelector('.nr3');

const rotorPos1 = document.querySelector('.pr1');
const rotorPos2 = document.querySelector('.pr2');
const rotorPos3 = document.querySelector('.pr3');

const plugBoard = document.querySelector('.plug-board');
const output = document.querySelector('#output-text');

const errMsg = "Error, cek kembali agar nomor rotor tidak sama dan plugboard diisi 10 pasang huruf dipisahkan spasi. :)";

let letters = [];
let letterOrder 		 = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let letterOrderLowerCase = 'qwertyuiopasdfghjklzxcvbnm';

let enigma;

function mulai() {

	let textInput = input.value;
        textInput = textInput.toLowerCase();
	let hasil = "";

	let no1 = rotorNo1.value - 1;
	let no2 = rotorNo2.value - 1;
	let no3 = rotorNo3.value - 1;

	let pos1 = Math.floor(rotorPos1.value);
	let pos2 = Math.floor(rotorPos2.value);
	let pos3 = Math.floor(rotorPos3.value);

	// console.log(no1, no2, no3, pos1, pos2, pos3);

	let plugText = plugBoard.value;

	let plugData = plugText.split(" ");

	if (isError(no1, no2, no3, plugData)) {
		output.value = errMsg;
	} else {
		enigma = new Enigma();
		enigma.setRotors(no1, no2, no3);
		enigma.setRotorPositions(pos1, pos2, pos3);
		enigma.plugBoard.setPlugs(plugData);

		for (let i = 0; i < textInput.length; i++) {
			let key = textInput[i];
			if (letterOrderLowerCase.includes(key)) {
				let o = enigma.runMachine(key);
				hasil += o;
			} else {
				hasil += key;
			}
		}
		output.value = hasil;
	}
}

function isError(r1, r2, r3, pb) {
	if ((r1 == r2 || r1 == r3 || r2 == r3) || (pb.length != 10)) {
		return true;
	}
	return false;
}
