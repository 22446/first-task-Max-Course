import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvesmentService } from '../../core/services/invesment.service';
import { Iinvesment } from '../../core/Interfaces/iinvesment';
import { ResultComponent } from "../result/result.component";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, ResultComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  _InvesmentServices=inject(InvesmentService)
  data!:Iinvesment
  initialInput='0'
  AnnaullInput='0'
  ExcpectedlInput='5'
  durationlInput='10'
  
OnSubmitForm(){
 this._InvesmentServices.calculateInvestmentResults(this.data={
  annualInvestment:+this.AnnaullInput,
  duration:+this.durationlInput,
  expectedReturn:+this.ExcpectedlInput,
  initialInvestment:+this.initialInput
 })


}
}
