import { Component, OnInit } from '@angular/core';
import { MyProjectsService } from './my-projects.service';
import { MyProjectsModel } from "src/app/models/projects.model"
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  constructor(private myProjectsService: MyProjectsService, private router: Router) { }

  repositories!: MyProjectsModel[]

  ngOnInit(): void {
    this.myProjectsService.getPinnedRepos().subscribe((repos) => {
      this.repositories = repos
    })
  }

  navigateToRepository(repositoryLink: string): void {
    window.open(repositoryLink)
  }
}
