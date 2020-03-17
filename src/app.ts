import { Person } from './models/person';
import { PersonService } from 'services/person.service';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(PersonService, EventAggregator)
export class App {
  public message: string = 'Hello World!';
  public price: number = 0;
  public persons: Person[];
  public isPersonAdded: boolean = false;
  public removedIndex: number;

  constructor(private personService: PersonService, private eventAggregator: EventAggregator) {
    this.eventAggregator.subscribe('personAdded', () => {
      console.log("person was added");
    });
    this.eventAggregator.subscribe('personRemoved', (index) => {
      console.log("person " + (index + 1) + " was removed");
    });
    this.eventAggregator.subscribe('filterchanged', (filter: string) => {
      console.log(filter);
      if (this.persons != null) {
        this.persons = this.persons.filter(item => {
          return item.firstname.indexOf(filter) >= 0 ||
            item.lastname.indexOf(filter) >= 0 ||
            item.email.indexOf(filter) >= 0
        }
        );
      }
    });
  }

 async activate() {
    this.personService.getPersons().then((item) => {
      this.persons = item;
    })
  }

  public increment(): void {
    this.message = "Hallo 5 BI";
    this.price += 1;
  }

  public personRemoved(obj) {
    this.removedIndex = obj.idx;
    this.isPersonAdded = false;

  }
  public personAdded() {
    this.isPersonAdded = true;
    this.removedIndex = null;
  }
}

