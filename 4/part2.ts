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

  private isValidByr(): boolean {
    const byr = parseInt(this.byr);
    return this.byr != null && this.byr.length === 4 && byr >= 1920 && byr <= 2002;
  }

  private isValidIyr(): boolean {
    const iyr = parseInt(this.iyr);
    return this.iyr != null && this.iyr.length === 4 && iyr >= 2010 && iyr <= 2020;
  }

  private isValidEyr(): boolean {
    const eyr = parseInt(this.eyr);
    return this.eyr != null && this.eyr.length === 4 && eyr >= 2020 && eyr <= 2030;
  }

  private isValidHgt(): boolean {
    if (this.hgt != null) {
      const number = parseInt(this.hgt.substr(0, this.hgt.length - 2));
      const unit = this.hgt.substr(this.hgt.length - 2);
      switch (unit) {
        case 'cm':
          return number >= 150 && number <= 193;
        case 'in':
          return number >= 59 && number <= 76;
        default:
          return false;
      }
    } else {
      return false;
    }
  }

  private isValidHcl(): boolean {
    return this.hcl != null && /^#[a-f0-9]{6}$/.test(this.hcl);
  }

  private isValidEcl(): boolean {
    return this.ecl != null && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(this.ecl);
  }

  private isValidPid(): boolean {
    return this.pid != null && this.pid.length === 9 && /^\d+$/.test(this.pid);
  }

  public isValid(): boolean {
    return this.isValidByr() && this.isValidIyr() && this.isValidEyr() && this.isValidHgt() 
      && this.isValidHcl() && this.isValidEcl() && this.isValidPid();
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
