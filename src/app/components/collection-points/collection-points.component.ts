// src/app/components/collection-points/collection-points.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-points',
  templateUrl: './collection-points.component.html'
})
export class CollectionPointsComponent implements OnInit {
  collectionPoints = [
    { name: 'EcoPonto Central', location: 'Av. Central, 123' },
    { name: 'Recicla Fácil', location: 'Rua Verde, 45' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
