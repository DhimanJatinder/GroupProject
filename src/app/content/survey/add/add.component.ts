import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  form: any = {
    name: null,
    desc: null,
  };

  isSuccessfull = true;
  errorMessage = '';

  constructor(private surveyService: SurveyService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.surveyService.addSurvey(this.form).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessfull = true;
        this.backToList();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSuccessfull = false;
      },
    });
  }

  backToList(): void {
    this.router.navigate(['/movies/list']);
  }
}
