import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Cat } from '../cats';
import * as _ from 'lodash';
import { CATS } from '../mock-cats';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  @Input() cat: Cat | null = null; 
  cats = CATS; 

  constructor(private route: ActivatedRoute) { } 

  ngOnInit(): void {
    
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    if (idFromRoute) {
    
      this.getCatById(+idFromRoute); 
    } 
  }

 
  getCatById(id: number): void {
    let index = _.findIndex(this.cats, (c: Cat) => {
      return c.id === id;
    });
    if (index !== -1) {
      this.cat = this.cats[index]; 
     
    } else {
      console.error('Chat non trouvé');
    }
  }
}


