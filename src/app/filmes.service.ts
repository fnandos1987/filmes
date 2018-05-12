import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class FilmesService {

  public baseUrl = 'http://localhost:3000';

  public collection = 'filmes';

  public errorHandler = error => console.error('Service error', error);

  constructor(private http: Http) { }

  insert(objeto) {
    return this.http.post(`${this.baseUrl}/${this.collection}`, objeto)
      .toPromise()
      .catch(this.errorHandler);
  }

  getAll(): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}`)
      .toPromise()
      .then(response => response.json())
      .catch(this.errorHandler);
  }

  findById(id): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise()
      .then(response => response.json())
      .catch(this.errorHandler);
  }

  delete(id) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise()
      .then(response => response.json())
      .catch(this.errorHandler);
  }

  update(objeto) {
    return this.http.put(`${this.baseUrl}/${this.collection}/${objeto.id}`, objeto)
      .toPromise()
      .then(response => response.json())
      .catch(this.errorHandler);
  }

}
