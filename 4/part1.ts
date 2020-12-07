import * as fs from 'fs';

class Passport {
  private byr?: string = null;
  private iyr?: string = null;
  private eyr?: string = null;
  private hgt?: string = null;
  private hcl?: string = null;
  private ecl?: string = null;
  private pid?: string = null;
  private cid?: string = null;

  public isValid(): boolean {
    return this.byr != null && this.iyr != null && this.eyr != null && this.hgt != null
      && this.hcl != null && this.ecl != null && this.pid != null;
  }

  public setProperty(property: string, value: string) {
    switch (property) {
      case 'byr':
        this.byr = value;
        break;
      case 'iyr':
        this.iyr = value;
        break;
      case 'eyr':
        this.eyr = value;
        break;
      case 'hgt':
        this.hgt = value;
        break;
      case 'hcl':
        this.hcl = value;
        break;
      case 'ecl':
        this.ecl = value;
        break;
      case 'pid':
        this.pid = value;
        break;
      case 'cid':
        this.cid = value;
        break;
    }
  }
}

const input = fs.readFileSync('input.txt').toString().split("\n");

let count = 0;
let passport = new Passport();
for (let line of input) {
  if (line === '') {
    if (passport.isValid()) {
      count++;
    }
    passport = new Passport();
  } else {
    const parts = line.split(' ');
    for (let part of parts) {
      const prop = part.split(':');
      passport.setProperty(prop[0], prop[1]);
    }
  }
}
if (passport.isValid()) {
  count++;
}

console.log(count);
