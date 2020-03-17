import { Person } from "models/person";


export class PersonService{
  public getPersons(): Promise<Person[]> {
    return new Promise((resolve) => {

      window.setTimeout(() => {
        resolve([
          new Person("Karl", "Sepp", "karl@sepp.com"),
          new Person("Susi", "Müller", "susi@müller.com"),
        ]);
      }, 3000)
    });

  }
}
