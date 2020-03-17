import { bindable, customElement, containerless, inject } from 'aurelia-framework';
import { Person } from 'models/person';
import { EventAggregator } from 'aurelia-event-aggregator'

@customElement("app-personlist")
@containerless()
@inject(EventAggregator)
export class PeresonList {
  @bindable persons: Person[] = null;
  @bindable onAdd: Function = null;
  @bindable onRemove: Function = null;

  constructor(private eventAggregator: EventAggregator) {

  }

  public addPerson(): void {
    this.persons.push(new Person("schirch", "schirch", "schirch@schirch.at"))
    if (this.onAdd != null) {
      this.onAdd();
    }
    this.eventAggregator.publish('personAdded');

  }

  public removePerson(index: number) {
    this.persons.splice(index, 1);
    if (this.onRemove != null) {
      this.onRemove({ idx: index });
    }
    this.eventAggregator.publish('personRemoved', index);
  }
}
