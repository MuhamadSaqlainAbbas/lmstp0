import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SlideInFromLeft} from '../../transitions';

@Component({
  selector: 'app-student-queries',
  templateUrl: './student-queries.component.html',
  styleUrls: ['./student-queries.component.css'],
  animations: [
    SlideInFromLeft()
  ]
})
export class StudentQueriesComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onQueriesClicked() {
    this.router.navigate(['queries'], {relativeTo: this.route});
    console.log('Querires Clicked');
  }

  onAnswerQueriesClicked() {
    this.router.navigate(['answerQueries'], {relativeTo: this.route});
  }
}
