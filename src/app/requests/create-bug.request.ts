import { BugStatus } from "../models/bug-status.enum";

export interface CreateBugRequest {
  title: string;
  description: string;
  status: BugStatus;
  priority: string;
}
