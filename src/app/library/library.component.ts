import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularService } from '../common/angular.service';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'] 
}) 
export class libraryComponent implements OnInit {
  main: FormGroup;
  driver: any;
  results: any;
  calmness = false;
  happiness = false;
  laughter = false;
  nostalgia = false;
  all: boolean;
  images=[];
  calmnessIm=[];
  happinessIm=[];
  laughterIm=[];
  nostalgiaIm=[];

  constructor(private fb: FormBuilder, private neo4j: AngularService) {}

  ngOnInit() {
    this.all = true;

    const query = 'MATCH (a:Image) RETURN a.location'

      this.neo4j.run(query).then(res => {
        this.results = res
        var length = this.results.length
        for(var i=0; i<length; i++){
          this.images.push(res[i][0])
        }
      });
  }

  calmnessChange(){
    this.all = false;
    this.calmness = !this.calmness 

    const query = 'MATCH (a:Image) WHERE a.emotion= "calmness" RETURN a.location'

    this.neo4j.run(query).then(res => {
      this.results = res;
      var length = this.results.length
      if(this.calmness){
        for(var i=0; i<length; i++){
          this.calmnessIm.push(res[i][0])
        }
      }
      else{
        for(var i=0; i<length; i++){
          this.calmnessIm.pop()
        }
      }
    });

    if (this.calmness==false && this.laughter==false && this.happiness==false && this.nostalgia==false){
      this.all = true;
    }
  }

  happinessChange(){
    this.all = false;
    this.happiness = !this.happiness 

    const query = 'MATCH (a:Image) WHERE a.emotion= "happiness" RETURN a.location'

    this.neo4j.run(query).then(res => {
      this.results = res;
      var length = this.results.length
      if(this.happiness){
        for(var i=0; i<length; i++){
          this.happinessIm.push(res[i][0])
        }
      }
      else{
        for(var i=0; i<length; i++){
          this.happinessIm.pop()
        }
      }
    });

    if (this.calmness==false && this.laughter==false && this.happiness==false && this.nostalgia==false){
      this.all = true;
    }
  }

  laughterChange(){
    this.all = false;
    this.laughter = !this.laughter 

    const query = 'MATCH (a:Image) WHERE a.emotion= "laughter" RETURN a.location'

    this.neo4j.run(query).then(res => {
      this.results = res;
      var length = this.results.length
      if(this.laughter){
        for(var i=0; i<length; i++){
          this.laughterIm.push(res[i][0])
        }
      }
      else{
        for(var i=0; i<length; i++){
          this.laughterIm.pop()
        }
      }
    });

    if (this.calmness==false && this.laughter==false && this.happiness==false && this.nostalgia==false){
      this.all = true;
    }
  }

  nostalgiaChange(){
    this.all = false;
    this.nostalgia = !this.nostalgia 

    const query = 'MATCH (a:Image) WHERE a.emotion= "nostalgia" RETURN a.location'

    this.neo4j.run(query).then(res => {
      this.results = res;
      var length = this.results.length
      if(this.nostalgia){
        for(var i=0; i<length; i++){
          this.nostalgiaIm.push(res[i][0])
        }
      }
      else{
        for(var i=0; i<length; i++){
          this.nostalgiaIm.pop()
        }
      }
    });

    if (this.calmness==false && this.laughter==false && this.happiness==false && this.nostalgia==false){
      this.all = true;
    }
    
  }

}
