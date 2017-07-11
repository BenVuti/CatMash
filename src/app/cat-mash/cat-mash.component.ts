import { Component, OnInit } from '@angular/core';
import { Mash } from '../mash';
import { Cat } from '../cat';
import { CatMashService } from '../cat-mash.service';

@Component({
  selector: 'app-cat-mash',
  templateUrl: './cat-mash.component.html',
  styleUrls: ['./cat-mash.component.css']
})
export class CatMashComponent implements OnInit {

  mash: Mash;
  selectedcat: Cat;
 
  constructor(private catMashService: CatMashService) {
  }
 
  ngOnInit() {
    this.catMashService.getMash().then(mash => this.mash = mash);
  }

  voteOnCat(likedCat: Cat, mehCat: Cat) {
    this.catMashService.voteMash(likedCat.id)
  }
}
