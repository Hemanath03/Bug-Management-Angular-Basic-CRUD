import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BugService } from 'src/app/services/bug.service';
import { CreateBugRequest } from 'src/app/requests/create-bug.request';
import { UpdateBugRequest } from 'src/app/requests/update-bug.request';
import { BugStatus } from 'src/app/models/bug-status.enum';

@Component({
  selector: 'app-add-bug',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.css']
})
export class AddBugComponent implements OnInit {

  // Form model (used for both Add & Edit)
  bug: CreateBugRequest | UpdateBugRequest = {
    title: '',
    description: '',
    status: BugStatus.Open,
    priority: 'Medium'
  };

  submitted = false;
  isEdit = false;
  bugId!: number;

  // Expose enum to template
  BugStatus = BugStatus;
  errorMessage = '';
  validationErrors: string[] = [];

  constructor(
    private bugService: BugService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.isEdit = true;
      this.bugId = Number(idParam);

      // Load bug for edit
      this.bugService.getById(this.bugId).subscribe({
        next: (res: any) => {
          if (res.success) {
            this.bug = {
              title: res.data.title,
              description: res.data.description,
              status: res.data.status,
              priority: res.data.priority
            };
          }
        },
        error: err => console.error(err)
      });
    }
  }

  saveBug(): void {
    this.errorMessage = '';
    this.validationErrors = [];

    const request$ = this.isEdit
      ? this.bugService.update(this.bugId, this.bug as UpdateBugRequest)
      : this.bugService.create(this.bug as CreateBugRequest);

    request$.subscribe({
      next: (res: any) => {
        if (res.success) {
          this.router.navigate(['/bugs']);
        } else {
          this.errorMessage = res.message || 'Operation failed.';
        }
      },
      error: (err) => {
        // 🔥 HANDLE FLUENTVALIDATION ERRORS
        if (err.error?.errors && Array.isArray(err.error.errors)) {
          this.validationErrors = err.error.errors.map(
            (e: any) => e.message
          );
        } else {
          this.errorMessage = 'Server error. Please try again.';
        }
      }
    });
  }

  cancel(): void {
    if (this.isEdit && !confirm('Discard changes?')) {
      return;
    }
    this.router.navigate(['/bugs']);
  }



  newBug(): void {
    this.submitted = false;
    this.bug = {
      title: '',
      description: '',
      status: BugStatus.Open,
      priority: 'Medium'
    };
  }
}
