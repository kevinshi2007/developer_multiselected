import { Component, OnInit } from '@angular/core';
import { ButtonListService} from '../services/button-list.service';
import {Button} from '../models/button.model';
import {AppCode} from '../models/appcode.model';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {
  buttons: Button[];
  dropdownList = [];//AppCode[];
  selectedItems = [];
  dropdownSettings = {};
  constructor(private buttonService: ButtonListService) { }

  ngOnInit() {
    this.buttonService.getButtonList().subscribe(items => this.buttons = items, error => console.log(error));

    this.buttonService.getMultiList().subscribe(items => this.dropdownList = items , error => console.log(error));
    
    /*this.dropdownList = [
      {"id":1,"itemName":"India"},
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":5,"itemName":"South Korea"},
      {"id":6,"itemName":"Germany"},
      {"id":7,"itemName":"France"},
      {"id":8,"itemName":"Russia"},
      {"id":9,"itemName":"Italy"},
      {"id":10,"itemName":"Sweden"}
    ];
    
this.selectedItems = [
        {"id":2,"itemName":"Singapore"},
        {"id":3,"itemName":"Australia"},
        {"id":4,"itemName":"Canada"},
        {"id":5,"itemName":"South Korea"}
    ];*/
this.dropdownSettings = { 
          singleSelection: false, 
          text:"Select App Code",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          classes:"myclass custom-class"
        };            
}
onItemSelect(item:any){
console.log(item);
//console.log(this.selectedItems2);
}
OnItemDeSelect(item:any){
console.log(item);
//console.log(this.selectedItems2);
}
onSelectAll(items: any){
console.log(items);
}
onDeSelectAll(items: any){
console.log(items);
}
  }


