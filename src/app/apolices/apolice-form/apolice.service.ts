import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apolice } from './apolice';



const API = 'http://localhost:8080';


@Injectable({ providedIn: 'root' })
export class ApoliceService {

    constructor(private httpClient: HttpClient) {}

    listApolices() {
        return this.httpClient
                .get<Apolice[]>(API+'/apolices');
    }
}