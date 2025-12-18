import { Component, OnInit } from '@angular/core';
import { BugService } from '../../services/bug.service';
import { Bug } from '../../models/bug.model';
import { BugStatus } from 'src/app/models/bug-status.enum';

@Component({
  selector: 'app-bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.css']
})
export class BugsListComponent implements OnInit {

  // 🔁 tutorial → bug
  tutorials: Bug[] = [];
  currentBug?: Bug;
  currentIndex = -1;

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private bugService: BugService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.bugService.getPaginated({
      pageNumber: this.page,
      pageSize: this.pageSize
    }).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.tutorials = res.data.items;
          this.count = res.data.totalCount;
        }
      },
      error: err => console.error(err)
    });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTutorials();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentBug = undefined;
    this.currentIndex = -1;
  }

  setActiveBug(bug: Bug, index: number): void {
    this.currentBug = bug;
    this.currentIndex = index;
  }
  getStatusText(status: number): string {
    return BugStatus[status] ?? 'Unknown';
  }

  deleteBug(id: number): void {
  if (confirm('Are you sure you want to delete this bug?')) {
    this.bugService.delete(id).subscribe({
      next: () => {
        this.retrieveTutorials(); // refresh list
      },
      error: err => console.error(err)
    });
  }
}


}
