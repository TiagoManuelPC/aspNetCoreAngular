import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {
    header: any;
    error: any;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation()
    let errorString = navigation?.extras?.state?.error;
    this.header = errorString.toString().split(/\r?\n/, 1);
    this.error = errorString.toString().replace(this.header, "");
  }

  ngOnInit(): void {
  }

}
