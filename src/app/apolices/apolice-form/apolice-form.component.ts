import { Component, OnInit } from '@angular/core';
import { ApoliceService } from './apolice.service';
import { Apolice } from './apolice';

@Component({
  selector: 'app-apolice-form',
  templateUrl: './apolice-form.component.html',
  styleUrls: ['./apolice-form.component.css']
})
export class ApoliceFormComponent implements OnInit {

  apolices: Apolice[] = []
  
  constructor(private apoliceService: ApoliceService){} 

  ngOnInit(): void {


    this.apoliceService
      .listApolices()
      .subscribe(apolices => this.apolices = apolices);
  }

}
