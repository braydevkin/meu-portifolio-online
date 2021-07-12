import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { MyProjectsModel } from 'src/app/models/projects.model';
import { environment } from 'src/environments/environment';
import { RepoLanguagesPercentageModel } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class MyProjectsService {

  constructor(private api: HttpClient) { }

  API_URL = environment.apiUrl as string
  PROJECT_API_URL = environment.projectApiUrl as string
  PINNED_REPO_API_URL = environment.pinnedReposApiUrl as string

  getRepos(): Observable<MyProjectsModel[]> {
    return this.api.get<MyProjectsModel[]>(this.API_URL)
  }

  getLanguages(repoName: string): Observable<RepoLanguagesPercentageModel> {
    return this.api.get<RepoLanguagesPercentageModel>(`${this.PROJECT_API_URL}/${repoName}/languages`)
  }

  getPinnedRepos(): Observable<MyProjectsModel[]> {
    return this.api.get<MyProjectsModel[]>(this.PINNED_REPO_API_URL)
  }
}

