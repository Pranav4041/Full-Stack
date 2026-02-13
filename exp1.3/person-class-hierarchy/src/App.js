import "./App.css";

// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Derived class
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getDetails() {
    return `${super.getDetails()}, Course: ${this.course}`;
  }
}

// Derived class
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

function App() {
  const person = new Person("Rahul", 30);
  const student = new Student("Aman", 20, "Computer Science");
  const teacher = new Teacher("Dr. Sharma", 45, "Mathematics");

  const people = [person, student, teacher];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((p, index) => (
        <div key={index} className="card">
          <p>{p.getDetails()}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
