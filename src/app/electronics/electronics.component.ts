import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  items: any = Array();
  selectedCategory;
  categories: any = [];

  getSelectedItems() {
    this.items = [];
    this.service.getSelectedItems(this.selectedCategory).subscribe(
      data => {
        // console.log(data);
        for (const item of data.items) {
          this.items.push({parent: item[0].parent_item, child: item[0].child_item});
        }
        // console.log('items', this.items);
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllItemsAndParents() {
    this.service.getAllItemsAndParents().subscribe(
      data => {
        // console.log(data.electronics);
        for (const item of data.electronics) {
         this.items.push({parent: item['A'].parent_item, child: item['B'].child_item});
        }
        // console.log('items', this.items);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCategories() {
    this.service.getAllCategories().subscribe(
      data => {
        // console.log(data);
      for (const item of data.categories) {
        // this.items.push(item['Electronic'].item);
        this.categories.push(item['Electronic']);
        // console.log(item['Electronic'].item);
      }
      },
      error => {
      alert('No records found');
      }
  );
  }

  constructor(private service: ApiCallsService) { }

  ngOnInit() {
    this.getAllItemsAndParents();
    this.getCategories();
  }

}
