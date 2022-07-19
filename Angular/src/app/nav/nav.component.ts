import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    model: any = {};

    constructor(public accountService: AccountService,
        private router: Router,
        private toastr: ToastrService) { }

    ngOnInit(): void {
    }

    login() {
        this.accountService.login(this.model).subscribe({
            next: (v) => {
                this.router.navigateByUrl('/members');
            },
            error: (e) => {
                this.toastr.error(e.error)
                console.error(e)
            },
            complete: () => console.log('completed')
        })
    }

    logout() {
        this.accountService.logout();
        this.router.navigateByUrl('/')
    }
}
