import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
 import { SinglefruitComponent } from './singlefruit/singlefruit.component'; 
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

fruitlistdata = inject(FruitlistdataService);

fontColorGood = 'green';

fontColorBad = 'red';

  getStarImage(stars: number, count: number): string {
    switch (true) {
      case stars >= count:
        return './assets/img/stars/star.svg';
      case stars >= count - 0.5:
        return './assets/img/stars/star-half.svg';
      default:
        return './assets/img/stars/star-empty.svg';
    }
  }



 

  addComment(comment: string, index:number){

    this.fruitlistdata.addCommentToFruit(comment, index);
  }

  nameLog(name:  string,){
    // console.log(name)
      }
}

