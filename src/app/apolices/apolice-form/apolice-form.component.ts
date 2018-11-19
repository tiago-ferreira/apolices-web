import { Component, OnInit, Input } from '@angular/core';
import { ApoliceService } from './apolice.service';
import { Apolice } from './apolice';
import { SearchParams } from './searchParams';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-apolice-form',
  templateUrl: './apolice-form.component.html',
  styleUrls: ['./apolice-form.component.css']
})
export class ApoliceFormComponent implements OnInit {

  apolices: Apolice[] = [];
  showApolices: boolean = this.apolices.length > 0;
  apoliceForm: FormGroup;
  searchParams: SearchParams;

  
  constructor(private apoliceService: ApoliceService, private fb: FormBuilder){
    this.createForm();
  } 

  ngOnInit(): void {

  }

  createForm() {
    this.apoliceForm = this.fb.group({
      cpf: ['', Validators.required ],
      documento_vigente: [],
      companhia:[]
   });
  }

  find(): void {
    this.searchParams = this.apoliceForm.getRawValue() as SearchParams;

    this.apoliceService
      .findApolices(this.searchParams)
      .subscribe(apolices => this.apolices = apolices);
  }



}
