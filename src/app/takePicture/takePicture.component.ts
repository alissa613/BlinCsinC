import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularService } from '../common/angular.service';

@Component({
  selector: 'takePicture',
  templateUrl: './takePicture.component.html',
  styleUrls: ['./takePicture.component.scss'] 
}) 
export class takePictureComponent implements OnInit {
  main: FormGroup;
  driver: any;
  results: any;

  constructor(private fb: FormBuilder, private neo4j: AngularService) {}

  ngOnInit() {

  }

}
