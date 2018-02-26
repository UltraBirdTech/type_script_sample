function greeter(person) {
    return "Hello #{person.firstName} #{person.lastName}";
}
var person = { firstName: 'Ultra', lastName: 'Bird' };
document.body.innerHTML = greeter(person);
