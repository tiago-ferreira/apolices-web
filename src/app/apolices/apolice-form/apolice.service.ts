import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apolice } from './apolice';
import * as _ from 'lodash';
import { SearchParams } from './searchParams';
import { delay } from 'q';



const API = 'http://localhost:8080';


@Injectable({ providedIn: 'root' })
export class ApoliceService {

    constructor(private httpClient: HttpClient) {}

    listApolices() {
        return this.httpClient
                .get<Apolice[]>(API+'/apolices');
    }

    findApolices(parameters: SearchParams) {
        console.log('parameters'+parameters);
        let params = new HttpParams();

        //Begin assigning parameters
        if (!_.isUndefined(parameters)) {
            params = _.isUndefined(parameters.cpf) ? params : params.append('cpf', parameters.cpf);
            params = _.isUndefined(parameters.documento_vigente) ? params : params.append('documento_vigente', parameters.documento_vigente);
            params = _.isUndefined(parameters.companhia) ? params : params.append('companhia', parameters.companhia);
        }


         return this.httpClient.get<Apolice[]>(API+'/apolices', {params});

    }
}