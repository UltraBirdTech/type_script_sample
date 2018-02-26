interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello #{person.firstName} #{person.lastName}";
}

let person = { firstName: 'Ultra', lastName: 'Bird' };
document.body.innerHTML = greeter(person);
