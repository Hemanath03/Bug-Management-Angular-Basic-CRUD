import { BugStatus } from '../models/bug-status.enum';

export interface UpdateBugRequest {
  title: string;
  description: string;
  status: BugStatus;
  priority: string;
}
