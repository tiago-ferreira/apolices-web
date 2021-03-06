import { Component, OnInit, Input } from '@angular/core';
import { ApoliceService } from '../apolice-form/apolice.service';
import { Apolice } from '../apolice-form/apolice';

@Component({
  selector: 'app-apolice-list',
  templateUrl: './apolice-list.component.html',
  styleUrls: ['./apolice-list.component.css']
})
export class ApoliceListComponent  implements OnInit {

  apolice: Apolice;
  isHidden;

  @Input()  apoliceInput;
  
  ngOnInit(): void {
      this.isHidden = true;
      this.apolice = this.apoliceInput;
  }
}
