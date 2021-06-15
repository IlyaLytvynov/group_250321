class Persone {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log('MOVED!');
  }

  speak(whatToSay) {
    console.log(whatToSay);
  }

  sleep() {
    console.log('Sleeped');
  }
}

class Developer extends Persone {
  constructor(name, lang) {
    super(name);
    this.lang = lang;
  }

  toCode() {
    console.log('Written few lines of code in ' + this.lang);
  }
}

class Doctor extends Persone {
  heal() {
    console.log('Healed!');
  }
}

const jsDev = new Developer('John', 'Javascript');
const psyhologiest = new Doctor('Jack');
console.log(jsDev);
console.log(psyhologiest);

jsDev.speak('HELLO!');
jsDev.toCode();

psyhologiest.speak('WELCOME');
psyhologiest.sleep('WELCOME');
