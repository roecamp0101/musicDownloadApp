import { Component } from '@angular/core';
import {ContentService} from './content.service';
import {HighlightDirective } from './portfolio.directive'; 



@Component({
  selector: 'portfolio',
  templateUrl: 'partials/portfolio.html',
  styleUrls: ['partials/css/portfolio.css'],
  providers: [ContentService],
  directives: [HighlightDirective]
})

export class PortfolioComponent {


content: any [];

    
constructor(contentService: ContentService){
    this.content = contentService.getContent();

}
    

    


}
