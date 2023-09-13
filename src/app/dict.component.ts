import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html'
})
export class DictComponent implements OnInit {
  
  @Input() parentForm: FormGroup;
  //@Input() dictIndex: number;

  ngOnInit() {
  }
}

