import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html'
})
export class GroupComponent implements OnInit {
  @Input() formmain: FormGroup;
  @Input() parentForm: FormGroup;
  @Input() taskIndex;
  @Input() groupIndex;

  ngOnInit() {
  }
  
  getAttributesFor() {
    console.log(this.taskIndex);
    return (<FormArray>(<FormArray>(<FormArray>this.formmain.get('tasks')).controls[this.taskIndex].get('groups')).controls[this.groupIndex].get('attributes')).controls;
  }

}

