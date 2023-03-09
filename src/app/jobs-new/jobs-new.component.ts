import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { AppRoutingModule } from '../app.routing.module';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs-new',
  templateUrl: './jobs-new.component.html',
  styleUrls: ['./jobs-new.component.scss']
})
export class JobsNewComponent implements OnInit ,OnChanges{
  
  jobForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private jobService: JobService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Onchanges  detected');
  }

  
  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      job_number: ['', Validators.required],
      job_title: ['', Validators.required],
      job_start_date: ['', Validators.required],
      job_close_date: ['', Validators.required],
      experience_required: ['', Validators.required],
      number_of_openings: ['', Validators.required],
      job_notes: ['', Validators.required]
    });
    console.log("Oninit")
  }

  onSubmit(): void {
    this.jobService.createJob(this.jobForm.value)
      .subscribe(() => {
        this.router.navigateByUrl('/jobs');
      });
      console.log( this.jobForm.value, "sumbit button done")
  }
}
