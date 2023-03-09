import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
selector: 'app-job-details',
templateUrl: './job-details.component.html',
styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

jobForm: FormGroup;
job: Job | undefined;

constructor(
private route: ActivatedRoute,
private router: Router,
private fb: FormBuilder,
private jobService: JobService
) {
this.jobForm = this.fb.group({
job_number: ['', Validators.required],
job_title: ['', Validators.required],
job_start_date: ['', Validators.required],
job_close_date: ['', Validators.required],
experience_required: ['', Validators.required],
number_of_openings: ['', Validators.required],
job_notes: ['', Validators.required]
});
}

ngOnInit(): void {
const jobId = Number(this.route.snapshot.paramMap.get('id'));
this.jobService.getJobs().subscribe(jobs => {
  const job = jobs.find(j => j.id === jobId);
  if (job) {
    this.job = job;
    this.jobForm.patchValue(job);
  }
});

}

updateJob(): void {
const jobToUpdate: Job = { ...this.job, ...this.jobForm.value };
this.jobService.updateJob(jobToUpdate)
.subscribe(() => this.router.navigate(['/jobs']));
}
}