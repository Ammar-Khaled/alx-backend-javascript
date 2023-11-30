export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('length must be a number');
    }

    if (students.constructor !== Array && students.every((element) => typeof element === 'string')) {
      this._students = students;
    } else {
      throw TypeError('students must be an array of strings');
    }
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw TypeError('length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (value.constructor === Array && value.every((element) => typeof element === 'string')) {
      this._students = value;
    } else {
      throw TypeError('students must be an array of strings');
    }
  }

  get students() {
    return this._students;
  }
}
