import { Component, OnInit, Input } from '@angular/core';
import { ApoliceService } from './apolice.service';
import { Apolice } from './apolice';
import { SearchParams } from './searchParams';

@Component({
  selector: 'app-apolice-form',
  templateUrl: './apolice-form.component.html',
  styleUrls: ['./apolice-form.component.css']
})
export class ApoliceFormComponent implements OnInit {

  apolices: Apolice[] = [];

  @Input() params: SearchParams;
  
  constructor(private apoliceService: ApoliceService){} 

  ngOnInit(): void {

  }

  find(): void {
    this.apoliceService.findApolices(this.params).subscribe(apolices => this.apolices = apolices);
  }



}
