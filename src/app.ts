import { Person } from './models/person';


export class App {
  public message: string = 'Hello World!';
  public price: number = 0;
  public persons: Person[];

  activate() {
    this.persons = Person.getPersons();
  }

  public increment(): void {
    this.message = "Hallo 5 BI";
    this.price += 1;
  }
  public addPerson():void{
    this.persons.push(new Person("schirch","schirch","schirch@schirch.at"))
  }
}

