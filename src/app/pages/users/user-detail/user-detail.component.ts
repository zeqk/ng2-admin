import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';

import { PageInitialData } from './pageInitialData.model';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  initialData: PageInitialData = null;
  public form:FormGroup;
  public username:AbstractControl;
  public firstName:AbstractControl;  
  public lastName:AbstractControl;
  public startingPageId:AbstractControl;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.data
    .subscribe((data: { initialData: PageInitialData }) => {
        this.initialData = data.initialData;
    });


    this.form = this.fb.group({
      username: [''],
      firstName: [''],
      lastName: [''],
      startingPageId: ['', Validators.compose([Validators.required])]
    });

    this.username = this.form.controls['username'];
    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    
  }

  onSubmit(value : any) {

    // let profile : ProfileModel = <ProfileModel> {
    //   startingPageId: value.startingPageId
    // };
        
    
  }
  

  clearForm() {
    this.form.reset();
  }


}
