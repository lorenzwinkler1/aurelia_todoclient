export class Person {
  public constructor(public firstname: string, public lastname: string, public email: string) {

  }

  public get fullname() {
    return this.firstname + " " + this.lastname;
  }

  public static getPersons(): Person[] {
    return [
      new Person("Karl", "Sepp", "karl@sepp.com"),
      new Person("Susi", "Müller", "susi@müller.com"),
    ]
  }
}
