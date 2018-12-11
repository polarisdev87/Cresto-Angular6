import { Component, Input, OnInit } from '@angular/core';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.sass']
})
export class ReferralsComponent implements OnInit {

  @Input()
  public referrals;
  public sortable = {
    'username': {
      'type': 'string',
      'order': 'asc'
    },
    'createdAt': {
      'type': 'date',
      'order': 'asc'
    },
    'commission': {
      'type': 'number',
      'order': 'asc'
    },
    'source': {
      'type': 'string',
      'order': 'asc'
    }
  };

  public constructor() { }

  public ngOnInit() {
  }

  public sort(field: string) {
    const sortInfo = this.sortable[field];
    this.referrals = orderBy(this.referrals, [field], [sortInfo.order]);
    sortInfo.order = (sortInfo.order === 'asc') ? 'desc' : 'asc';
    this.sortable[field] = sortInfo;
  }

}
