import { Injectable } from '@angular/core';
import { MyProjectsService } from 'src/app/components/my-projects/my-projects.service';



@Injectable({
  providedIn: 'root'
})
export class RepoLanguagesPercentage {

  constructor(private myProjectsService: MyProjectsService) { }


  formatLanguagePercentage(languagesNumber: number[]): void {
    let total = 0
    let percentage = 0
    for (let i = 0; i < languagesNumber.length; i++) {
      total += languagesNumber[i];
    }

    languagesNumber.forEach((n) => {
      console.log((Math.floor(n * 100) / total).toFixed(2))
    })
  }
}
