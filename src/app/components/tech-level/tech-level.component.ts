import { Component, OnInit } from '@angular/core';
import { TechInfo } from './tech.model';
@Component({
  selector: 'app-tech-level',
  templateUrl: './tech-level.component.html',
  styleUrls: ['./tech-level.component.css'],
})
export class TechLevelComponent implements OnInit {

  techs: TechInfo[] = [
    {
      name: "Javascript / Typescript",
      percentage: "89%"
    },
    {
      name: "HTML / CSS",
      percentage: "94%"
    },
    {
      name: "NodeJS",
      percentage: "80%"
    },
    {
      name: "ReactJS",
      percentage: "90%"
    },
    {
      name: "AWS / Infraestrutura",
      percentage: "60%"
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
