import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  query(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  save(data: any): Observable<any> {
    return !data.id
      ? this.http.post(this.baseUrl, data)
      : this.http.put(`${this.baseUrl}/${data.id}`, data);
  }

  destroy(id: number) { // status 204
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
