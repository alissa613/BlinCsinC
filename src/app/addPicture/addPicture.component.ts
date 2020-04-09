import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularService } from '../common/angular.service';

@Component({
  selector: 'addPicture',
  templateUrl: './addPicture.component.html',
  styleUrls: ['./addPicture.component.scss'] 
}) 
export class addPictureComponent implements OnInit {
  main: FormGroup;
  driver: any;
  results: any;

  constructor(private fb: FormBuilder, private neo4j: AngularService) {}

  ngOnInit() {
    
  }

}
