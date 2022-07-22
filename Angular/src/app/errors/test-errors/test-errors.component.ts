import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test-errors',
    templateUrl: './test-errors.component.html',
    styleUrls: ['./test-errors.component.scss']
})
export class TestErrorsComponent implements OnInit {

    baseUrl = 'https://localhost:5001/api/';
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
                console.error(e)
            },
            complete: () => console.log('completed')
        })
    }

    get500Error(){
        this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
            next: (res) => {
                console.log("iworked")
                console.log(res)
            },
            error: (e) => {
                console.error(e)
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
                console.error(e)
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
                console.error(e)
                this.validationErrors = e;
            },
            complete: () => console.log('completed')
        })
    }

}
