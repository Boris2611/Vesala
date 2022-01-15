let letter;
let words = ['PLANINA', 'KABINA', 'DRVO', 'MAGARAC', 'KRUŠKA', 'JABUKA',
'PATIKA', 'TELEFON', 'BATERIJA', 'EKRAN', 'LEPTIR', 'PEŠKIR', 'RAMPA',
'SLUŠALICE', 'SUNĐER', 'KUPUS', 'SAT', 'PETARDA', 'TRUBA', 'ŠRAFCIGER',
'LAMPA', 'KAMIN', 'KARMIN', 'KOALA', 'KRAVA', 'PRASE', 'ČEKIĆ', 'PEĆ']

// --------- Letters ----------------

const a = () => {
    letter = "A";
    check()
}
const b = () => {
    letter = "B";
    check()
}
const v = () => {
    letter = "V";
    check()
}
const g = () => {
    letter = "G";
    check()
}
const d = () => {
    letter = "D";
    check()
}
const đ = () => {
    letter = "Đ";
    check()
}
const e = () => {
    letter = "E";
    check()
}
const ž = () => {
    letter = "Ž";
    check()
}
const z = () => {
    letter = "Z";
    check()
}
const i = () => {
    letter = "I";
    check()
}
const j = () => {
    letter = "J";
    check()
}
const k = () => {
    letter = "K";
    check()
}
const l = () => {
    letter = "L";
    check()
}
const lj = () => {
    letter = "LJ";
    check()
}
const m = () => {
    letter = "M";
    check()
}
const n = () => {
    letter = "N";
    check()
}
const nj = () => {
    letter = "NJ";
    check()
}
const o = () => {
    letter = "O";
    check()
}
const p = () => {
    letter = "P";
    check()
}
const r = () => {
    letter = "R";
    check()
}
const s = () => {
    letter = "S";
    check()
}
const t = () => {
    letter = "T";
    check()
}
const ć = () => {
    letter = "Ć";
    check()
}
const u = () => {
    letter = "U";
    check()
}
const f = () => {
    letter = "F";
    check()
}
const h = () => {
    letter = "H";
    check()
}
const c = () => {
    letter = "C";
    check()
}
const č = () => {
    letter = "Č";
    check()
}
const dž = () => {
    letter = "DŽ";
    check()
}
const š = () => {
    letter = "Š";
    check()
}
// --------------------------------





let id;
let random;
let choosen;
window.onload = () => {
    // -------- RANDOM ----------------
    random = Math.floor(Math.random() * words.length);
    // --------------------------------
 
    // --------- CHOOSING WORD -------
    choosen = words[random]
    // -------------------------------

    // ---------- PRINTING LINES ------
    for (let i = 0; i < choosen.length; i++) {
        id = "lines" + (i + 1);
        document.getElementById(id).innerHTML = "_";
    // --------------------------------
    }
  };





// -------- CHECKING LETTERS -----
const lineSound = new Audio("line.wav")
const correctSound = new Audio("correct.wav")
let wrong = 0;
let right = 0;
function check() {
    for (let i = 0; i < choosen.length; i++){
        if (letter == choosen[i]) {
            id = "lines" + (i+1);
            document.getElementById(id).innerHTML = letter;
            document.getElementById(letter).style.visibility = "hidden";
            right += 1;
        }
        else {
            document.getElementById(letter).style.visibility = "hidden";
        }
    }

    if (!choosen.includes(letter)) {
        lineSound.play()
        wrong += 1;
    }

    if (choosen.includes(letter)){
        correctSound.play()
    }
    
    
    if (wrong == 1) {
        document.getElementById("head").style.visibility = "visible";
    }
    if (wrong == 2) {
        document.getElementById("line1").style.visibility = "visible";
    }
    if (wrong == 3) {
        document.getElementById("line2").style.visibility = "visible";
    }
    if (wrong == 4) {
        document.getElementById("line3").style.visibility = "visible";
    }
    if (wrong == 5) {
        document.getElementById("line4").style.visibility = "visible";
    }
    if (wrong == 6) {
        document.getElementById("line5").style.visibility = "visible";
        alert("Izgubio Si! " + " Tačna rec je : " + choosen)
        setTimeout(location.reload(), 1000)
    }

    if (right == choosen.length) {
        alert("Svaka Čast !")
        setTimeout(location.reload(), 1000)
    }
}
// ---------------------------------------