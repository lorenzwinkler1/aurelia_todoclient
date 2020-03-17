import { inject, customElement, containerless } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
@customElement("app-entrytextfield")
@containerless()
export class EntryTextFieldComponent {
  public entryvalue: string;

  constructor(private eventAggregator: EventAggregator) {

  }

  public btnsubmitclick() {
    this.eventAggregator.publish('filterchanged', this.entryvalue);
  }
}
