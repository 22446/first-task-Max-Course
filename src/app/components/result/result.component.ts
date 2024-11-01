import { IResult } from './../../core/Interfaces/iresult';
import { Component, EventEmitter, inject, Input } from '@angular/core';
import { InvesmentService } from '../../core/services/invesment.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @Input()result:IResult[]=[]

  
  

}
