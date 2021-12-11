import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: any[] = [
    {
      name: 'n1',
      id: 1,
      price: 100,
      star: 5,
      available: true,
      src: 'https://www.w3schools.com/css/img_avatar.png',
    },
    {
      name: 'n2',
      id: 2,
      price: 200,
      star: 3,
      available: true,
      src: 'https://www.w3schools.com/css/img_avatar.png',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
