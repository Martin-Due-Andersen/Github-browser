import { Component, OnInit } from '@angular/core';
import { RepoService } from './repo.service';

@Component({
    selector: 'app-repo-list',
    templateUrl: './repo-list.component.html'
})
export class RepoListComponent implements OnInit {
    pageTitle = 'Min Repo liste';
    imageWidth = 60;
    imageMargin = 2;
    toogleImage: boolean = false;

    repos: any[];

    constructor(private _reposvc: RepoService) {}
    onButtonClick(): void {
        this.toogleImage = !this.toogleImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Repos List: ' + message;
    }

    ngOnInit(){
        const observable = this._reposvc.getRepos();

        observable.subscribe(
            data => this.repos = data
        )
    }
}