import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import ApexCharts from 'apexcharts/dist/apexcharts.common.js'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    @Output() cancelRegister = new EventEmitter()
    model: any = {};
    registerForm: FormGroup;

    constructor(private accountService: AccountService,
        private toastr: ToastrService) { }

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm() {
        this.registerForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
            confirmPassword: new FormControl('', [Validators.required, this.matchValues('password')])
        });

        this.registerForm.controls.password.valueChanges.subscribe(() => {
            this.registerForm.controls.confirmPassword.updateValueAndValidity();
        })
    }

    matchValues(matchTo: string): ValidatorFn {
        return (control: AbstractControl) => {
            return control?.value === control?.parent?.controls[matchTo].value ? null : {isMatching: true};
        }
    }

    register() {
        // this.accountService.register(this.model).subscribe( {
        //     next: (v) => {
        //         this.cancel();
        //     },
        //     error: (e) => {
        //         this.toastr.error(e.error)
        //         console.error(e)
        //     },
        //     complete: () => console.log('completed')
        // })
    }

    cancel() {
        this.cancelRegister.emit(false);
    }
}
