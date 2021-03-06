import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SlideInFromLeft} from '../../../transitions';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    SlideInFromLeft()
  ]
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  OnUploadProjectClicked() {
    this.router.navigate(['upload'], {relativeTo: this.route});
  }

  OnStudenProjectClicked() {
    this.router.navigate(['students-project'], {relativeTo: this.route});
  }
}
