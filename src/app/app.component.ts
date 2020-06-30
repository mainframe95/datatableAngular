import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angulardatatables';
  // title = 'angulardatatables';
  public data = [
    {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
];
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true
    };
  }
}
