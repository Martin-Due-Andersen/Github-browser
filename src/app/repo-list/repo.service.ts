import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RepoService {
    private _repoUrl = "./../../assets/api/gitrepos.json";
    //private _repoUrl = "https://api.github.com/users/peter/repos";

    constructor (private _http: HttpClient){}

    getRepos(): Observable<any>{
        return this._http.get<any[]>(this._repoUrl)
        .do(data => console.log('all: ' + JSON.stringify(data)));
    }
}