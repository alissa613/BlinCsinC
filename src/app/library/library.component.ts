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
  totalLength = 0;
  selected = [];
  images=[];          // array of images we are currently viewing
  imageEmotions = []; //array of emotions we are currently viewing
  removeImage = [];   // array of images to be removed
  removeEmotion = []; // array of emotions to be removed
  emotions = [];      // array of all emotions
  allImages = [];     //array of all images
  allEmotions = [];   //array of all image emotions

  constructor(private fb: FormBuilder, private neo4j: AngularService) {}

  ngOnInit() {
    var query = 'MATCH (a:Image) RETURN a.location, a.emotion'

      this.neo4j.run(query).then(res => {
        this.results = res;
        console.log(res)
        var length = this.results.length;
        this.totalLength = length;
        for(var i=0; i<length; i++){
          this.allImages.push(res[i][0])
          this.allEmotions.push(res[i][1])
        }
      });

    this.images = this.allImages; // on start, all images are displayed
    this.imageEmotions = this.allEmotions; // on start, all emotions are displayed
    this.selected = this.allEmotions;

    query = 'MATCH (a:Image) RETURN a.emotion'; // creates array of all emotions used

    this.neo4j.run(query).then(res => {
      this.results = res;
      var length = this.results.length;
      for(var i=0; i<length; i++){
        var found = this.emotions.includes(res[i][0]);
        if (!found){
          this.emotions.push(res[i][0])
        }
      }
    })
  }

  async emotionChange(emotion){
    this.removeImage = [];   // array of images to be removed
    this.removeEmotion = []; // array of emotions to be removed

    if (this.totalLength == this.images.length){ //if all images were displayed before this change
      for(var i = 0; i < this.images.length; i++){ 
        if(emotion != this.imageEmotions[i]){ 
          this.removeImage.push(this.images[i])
          this.removeEmotion.push(this.imageEmotions[i])
        }
      }

      for (var x=0; x<this.removeImage.length; x++){
        this.images = this.images.filter(item => item != this.removeImage[x])
      }

      for (var y=0; y< this.removeEmotion.length;y++){
        this.imageEmotions = this.imageEmotions.filter(item => item != this.removeEmotion[y])
      }
      this.selected = [];
      this.selected.push(emotion);
    }

    else if (this.images.length != this.totalLength){ //if only part of the images are currently showing
      var found = this.imageEmotions.includes(emotion);
      if (found) { //if emotion already displayed, remove it
        for(var i = 0; i < this.images.length; i++){ 
          if(emotion == this.imageEmotions[i]){ 
            this.removeImage.push(this.images[i])
            this.removeEmotion.push(this.imageEmotions[i])
          }
        }

        for (var x=0; x<this.removeImage.length; x++){
          this.images = this.images.filter(item => item != this.removeImage[x])
        }
  
        for (var y=0; y< this.removeEmotion.length;y++){
          this.imageEmotions = this.imageEmotions.filter(item => item != this.removeEmotion[y])
        }

        this.selected = this.selected.filter(item => item != emotion)
      }

      else { // if emotion is not displayed yet, add it
        for(var i =0; i <this.allImages.length;i++){
          if(emotion == this.allEmotions[i]){
            this.images.push(this.allImages[i])
            this.imageEmotions.push(this.allEmotions[i])
          }
        }
        this.selected.push(emotion);
      }
    }

    if (this.images.length == 0) { //if all emotions are not selected, automatically display all images 
      this.images = this.allImages;
      this.imageEmotions = this.allEmotions;
      this.selected = this.allEmotions;
    }
  }

  isActive(emotion){
    return this.selected.includes(emotion);
  }
}
