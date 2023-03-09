import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) { }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.baseUrl, job);
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl);
  }

  updateJob(job: Job): Observable<Job> {
    const url = `${this.baseUrl}/${job.id}`;
    return this.http.put<Job>(url, job);
  }
}
