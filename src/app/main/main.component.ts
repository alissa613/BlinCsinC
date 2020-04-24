import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularService } from '../common/angular.service';

declare var moveRPtoPC:any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'] 
}) 
export class mainComponent implements OnInit {
  main: FormGroup;
  driver: any;
  results: any;

  constructor(private fb: FormBuilder, private neo4j: AngularService) {}

  ngOnInit(){
    
  }

  uploadImages(){
    new moveRPtoPC();
  }

  
}
