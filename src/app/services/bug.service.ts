import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Bug } from '../models/bug.model'; 

import { CreateBugRequest } from '../requests/create-bug.request';
import { UpdateBugRequest } from '../requests/update-bug.request';
import { PaginationRequest } from '../requests/pagination.request';
import { ApiResponse } from '../common/api-response.model';
import { PaginatedResult } from '../common/paginated-result.model';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  private readonly baseUrl = 'http://localhost:5091/api/bugs';

  constructor(private http: HttpClient) {}

  // CREATE
  create(request: CreateBugRequest): Observable<ApiResponse<Bug>> {
    return this.http.post<ApiResponse<Bug>>(this.baseUrl, request);
  }

  // UPDATE
  update(id: number, request: UpdateBugRequest): Observable<ApiResponse<Bug>> {
    return this.http.put<ApiResponse<Bug>>(`${this.baseUrl}/${id}`, request);
  }

  // DELETE
  delete(id: number): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(`${this.baseUrl}/${id}`);
  }

  // GET BY ID
  getById(id: number): Observable<ApiResponse<Bug>> {
    return this.http.get<ApiResponse<Bug>>(`${this.baseUrl}/${id}`);
  }

  // PAGINATION
  getPaginated(request: PaginationRequest):
    Observable<ApiResponse<PaginatedResult<Bug>>> {
    return this.http.post<ApiResponse<PaginatedResult<Bug>>>(
      `${this.baseUrl}/pagination`,
      request
    );
  }
}
