import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Hallo YouTube';

  ngOnInit() {
    console.log('Hallo ngOnInit');
    setInterval(() => {
      this.title = 'Hallo YouTube ' + new Date().getSeconds();
      console.log('Hallo setInterval', this.title);
    }, 1000);
  }

  ngAfterViewInit() {
    console.log('Hallo ngAfterViewInit');
  }

}

