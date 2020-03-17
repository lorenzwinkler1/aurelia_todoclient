export class Person {
  public constructor(public firstname: string, public lastname: string, public email: string) {

  }

  public get fullname() {
    return this.firstname + " " + this.lastname;
  }

  
}
