import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.services';
import { FaceSnap } from '../models/face-snap.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: Router) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap !';
  }
  
  // toutes les intercations avec les FaceSnap passent par le service !
  onSnap() {
     if (this.buttonText === 'Oh Snap !') {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap'); //literal types
        this.buttonText = 'Oops unSnap !';
     } else {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap') // literal types
        this.buttonText = 'Oh Snap !';
     }
  }

  onViewFaceSnap() {
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
