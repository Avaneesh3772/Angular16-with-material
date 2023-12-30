import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
import { AgeCustomValidator } from 'src/app/shared/validators/age.validator';
import { PasswordValidator } from 'src/app/shared/validators/password.validator';
import { AdminConstants } from '../admin.constants';


@Component({
  selector: 'app-le-calculation',
  templateUrl: './le-calculation.component.html',
  styleUrls: ['./le-calculation.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class LeCalculationComponent implements OnInit {

  public employeeForm!: FormGroup;
  public charLength: number = 0;
  public char: string = '';
  public forbiddenName: string = '';
  public proficiencyList:  string[] = AdminConstants.proficiencyOptions;
  public mindate = moment().subtract(10, 'years');
  public maxdate = moment();
  public chooseAccountOrPortfolio: string[] = AdminConstants.accOrPort;


  constructor(private formBuilder: FormBuilder) {    }

  get EmpName():FormControl  { return this.employeeForm.get('userName') as FormControl }
  get EmpAge():FormControl  { return this.employeeForm.get('userAge') as FormControl }
  get EmpPassword():FormControl  { return this.employeeForm.get('password') as FormControl}
  get EmpConfirmPassword():FormControl  { return this.employeeForm.get('confirmPassword') as FormControl}
  get EmpJoiningDate():FormControl  { return this.employeeForm.get('joiningDate') as FormControl}
  get EmpOffers():FormControl  { return this.employeeForm.get('promotionalOffer') as FormControl}
  get EmpEmail():FormControl  { return this.employeeForm.get('userEmail') as FormControl}
  get EmpSkills():FormControl  { return this.employeeForm.get('skills.userSkills') as FormControl}
  get EmpExperience():FormControl  { return this.employeeForm.get('skills.userExperience') as FormControl}
  get EmpProficiency():FormControl { return this.employeeForm.get('skills.userProficiency') as FormControl}
  get Qualification():FormArray { return this.employeeForm.get('qualification') as FormArray}


  ngOnInit() {
    /* this.employeeForm = new FormGroup({
      userName : new FormControl('Avaneesh'),
      userEmail : new FormControl(''),
      skills: new FormGroup({
        userSkills : new FormControl(''),
        userExperience : new FormControl(''),
        userProficiency : new FormControl('')
      })
     }) */


     this.employeeForm = this.formBuilder.group({
      userName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      userAge: ['',[Validators.required, AgeCustomValidator]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      joiningDate: [this.maxdate, [Validators.required]],
      userEmail: [null, []],
      promotionalOffer: [],
      chooseAccoOrPort: [this.chooseAccountOrPortfolio[0], [Validators.required]],
      skills: this.formBuilder.group({
        userSkills: ['', [Validators.required]],
        userExperience: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        userProficiency: ['', [Validators.required]]
      }),
      qualification: this.formBuilder.array([this.createQualification()])
     }, { validator: PasswordValidator });


     this.employeeForm.get('userEmail')?.disable();



     this.employeeForm.get('userName')?.valueChanges.subscribe(value => {
       this.char = value;
       if(this.char) {
        this.charLength = this.char.length;
       }
     })


      this.employeeForm.get("promotionalOffer")?.valueChanges.subscribe( newValue => {
        const email = this.employeeForm.get("userEmail");
        if(newValue) {
          this.employeeForm.get('userEmail')?.enable();
          email?.setValidators(Validators.required);
          email?.setValidators(Validators.email);
          email?.setValidators(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"));
        } else {
          this.employeeForm.get('userEmail')?.disable();
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
     })

     // Moment JS Date and Time Formatting Examples for Learning
     // By default, moment parses and displays in local time.

     console.log(`current time is ${moment()}`); // Sun Mar 14 2021 19:22:26 GMT-0400
     console.log(`Current Local date and time Format is ${moment().format()}`); // 2021-03-14T19:22:26-04:00
     console.log(`Current Month Year ${moment().format("MMYYYY")}`);// 032021
     console.log(`L Format Date ${moment().format("L")}`);// 03/14/2021 as per USA standards i.e. MMDDYYYY
     console.log(`Current Date Day Month Year ${moment().format("dddd MMM Mo YYYY")}`);//Sunday Mar 3rd 2021
     console.log(`Current Local date time Format ${moment().format("MM-DD-YYYY")}`);// 03-14-2021
     console.log(`moment from a string is ${moment("1995-12-25")}`);// Mon Dec 25 1995 00:00:00 GMT-0500
     console.log(`string plus format moment is ${moment("12-25-1995", "MM-DD-YYYY")}`);// Mon Dec 25 1995 00:00:00 GMT-0500
     console.log(`Array moment is ${moment([2010, 1, 14, 15, 25, 50, 125])}`); // Sun Feb 14 2010 15:25:50 GMT-0500
     console.log(`Array moment is ${moment([2010, 6, 10])}`);// Sat Jul 10 2010 00:00:00 GMT-0400
     console.log(`Moment Validation ${moment().isValid()}`); // true
     console.log(`FromNow Method ${moment("2020-12-25").fromNow()}`); // 3 months ago
     console.log(`Add Method to add 1 year in current year ${moment().add(1, "year")}`); // Mon Mar 14 2022 19:37:27 GMT-0400
     console.log(`Substract Method to Substract 5 year ${moment().subtract(5, "years")}`); // Mon Mar 14 2016 19:57:56 GMT-0400
     console.log(`Diff Method for Time difference in days ${moment().diff(moment("2010-12-25"), "days")}`); // 3732
     console.log(`isSame Method to compare date ${moment("2010-12-25").isSame("2010-12-25")}`); // true
     console.log(`isBefore Method to check date ${moment("2010-12-25").isBefore("2010-12-26")}`); // true
     // If you want to parse or display a moment in UTC, you can use moment.utc() instead of moment().
     // While in UTC mode, all display methods will display in UTC time instead of local time.
     console.log(`UTC date and time is ${moment.utc()}`);// Sun Mar 14 2021 23:24:28 GMT+0000
     console.log(`UTC date and time Format  is ${moment.utc().format()}`);// 2021-03-14T23:24:28Z


  }

    createQualification(): FormGroup {
      return this.formBuilder.group({
        userQualification: ['',[Validators.required, Validators.minLength(3)]],
        userUniversity: ['', [Validators.required, Validators.minLength(5)]]
      })
    }

    addNewQualification() {
      this.Qualification.push(this.createQualification());
    }

    deleteQualification(i: number){
      this.Qualification.removeAt(i);
    }

    updateProficiency(event: any) {
      console.log(`updateProficiency value is ${event.target.value}`);
      this.EmpProficiency.setValue(event.target.value, {
        onlySelf: true
      })
    }

    onSubmit() {
      this.employeeForm.get('joiningDate')?.setValue(this.employeeForm.value.joiningDate.format('L'))
      console.log("this.employeeForm", this.employeeForm);
      console.log("this.employeeForm", this.employeeForm.value);
    }

}
