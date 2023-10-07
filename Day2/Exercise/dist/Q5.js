/**2) Create two interfaces named Readable and Writable. Readable contains read()
method with return type string and Writable contains write() method which takes
string type parameter.
Writable interface extends Readable interface.
Create one class named Book which implements Writable interface.
Book class have one property named data which type is string. delcare Writable
 interface methods in Book class.
read() method returns data(string). and write method takes string as parameter
and add that parameter's value in data.
Create one object of Book class and perform read() and write() on it. Done**/
class Book {
    constructor(data) {
        this.data = data;
    }
    write(pharas) {
        this.data = pharas;
        return this.data;
    }
    read() {
        return this.data;
    }
}
const b1 = new Book('Disney Land');
b1.read();
b1.write('My story');
