import { F } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Transaction } from '../../../shared/transaction/interfaces/transaction';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})



export class CreateComponent {

  cadastro!: FormGroup

  constructor(
    private fb: FormBuilder
  ){
    this.cadastro = this.fb.group({
      id: [null],
      title: [null, [Validators.required]],
      value: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });

    console.log(this.cadastro.controls);
  }


}
