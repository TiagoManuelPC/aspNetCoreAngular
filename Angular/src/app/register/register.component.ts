import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    @Output() cancelRegister = new EventEmitter()
    model: any = {};

    constructor(private accountService: AccountService,
        private toastr: ToastrService) { }

    ngOnInit(): void {
    }

    register() {
        this.accountService.register(this.model).subscribe( {
            next: (v) => {
                this.cancel();
            },
            error: (e) => {
                this.toastr.error(e.error)
                console.error(e)
            },
            complete: () => console.log('completed')
        })
    }

    cancel() {
        this.cancelRegister.emit(false);
    }

}
