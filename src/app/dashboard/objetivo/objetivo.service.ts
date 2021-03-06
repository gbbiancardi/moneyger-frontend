import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewObjetivo } from './new-objetivo';

const API_URL = "http://localhost:8080"

@Injectable()

export class ObjetivoService {

    constructor(private http: HttpClient) { }

    addObjetivo(newObjetivo: NewObjetivo) {
        
        return this.http.post(API_URL + '/objetivos', newObjetivo);
    }
}