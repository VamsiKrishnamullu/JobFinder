import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  jobs: Job[] = [];
  

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
      .subscribe(jobs => this.jobs = jobs);
      console.log(this.jobs,"job array")
  }

  createJob(): void {
    this.router.navigateByUrl('/jobs/new');
  }
}
