import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-test-errors',
    templateUrl: './test-errors.component.html',
    styleUrls: ['./test-errors.component.scss']
})
export class TestErrorsComponent implements OnInit {

    baseUrl = environment.apiUrl;
    validationErrors: string[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    get404Error(){
        this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
            next: (res) => {
                console.log(res)
            },
            error: (e) => {
                console.error(e)
            },
            complete: () => console.log('completed')
        })
    }

    get400Error(){
        this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
            next: (res) => {
                console.log(res)
            },
            error: (e) => {
                console.log(e)
            },
            complete: () => console.log('completed')
        })
    }

    get500Error(){
        this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
            next: (res) => {
                console.log(res)
            },
            error: (e) => {
                console.log(e)
            },
            complete: () => console.log('completed')
        })
    }

    get401Error(){
        this.http.get(this.baseUrl + 'buggy/auth').subscribe({
            next: (res) => {
                console.log(res)
            },
            error: (e) => {
                console.log(e)
            },
            complete: () => console.log('completed')
        })
    }

    get400ValidationError(){
        this.http.post(this.baseUrl + 'account/register', {}).subscribe({
            next: (res) => {
                console.log(res)
            },
            error: (e) => {
                console.log(e)
                this.validationErrors = e;
            },
            complete: () => console.log('completed')
        })
    }

}
