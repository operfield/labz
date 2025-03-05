import {NgtCoreModule, NgtDestroyedService, NgtRender} from '@angular-three/core';
import {NgtGLTFLoaderService, NgtSobaLoaderModule} from '@angular-three/soba/loaders';
import {ChangeDetectionStrategy, Component, ElementRef, Input, NgModule, OnInit, ViewChild} from '@angular/core';
import {Observable, takeUntil} from 'rxjs';
import {
  AnimationAction,
  AnimationClip,
  AnimationMixer,
  Group,
  LoopOnce,
  Mesh,
} from 'three';

import {NgtDirectionalLightModule, NgtHemisphereLightModule} from '@angular-three/core/lights';
import {NgtSobaPlaneModule} from '@angular-three/soba/shapes';
import {NgtSobaStarsModule} from '@angular-three/soba/staging';
import {NgtMeshPhongMaterialModule} from '@angular-three/core/materials';
import {NgtGridHelperModule} from '@angular-three/core/helpers';
import {CommonModule} from '@angular/common';
import {NgtPrimitiveModule} from '@angular-three/core/primitive';

@Component({
  selector: 'app-3d-objects',
  templateUrl: './vinyle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtDestroyedService],
})
export class VinyleComponent implements OnInit {

  vinyle$ = this.gltfLoaderService.load('assets/platine.glb'); // Déclaration sans initialisation immédiate

  manette$ = this.gltfLoaderService.load('assets/manette.glb');

  lego$ = this.gltfLoaderService.load('assets/lego.glb');



  constructor(
    private gltfLoaderService: NgtGLTFLoaderService,

  ) {}

  ngOnInit() {
  }

  onReady(model: Group) {

    model.traverse((child) => {
      if ((child as Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  onAnimate(model: Group) {
    model.rotation.y += 0.01;
  }

  onAnimateVinyle(model: Group) {
    this.onAnimate(model);

    model.rotation.x = 0.5;
  }

  onAnimateLego(model: Group) {


    model.rotation.y += 0.01;
  }
}

@NgModule({
  declarations: [ VinyleComponent],
  exports: [VinyleComponent],
  imports: [
    NgtCoreModule,
    NgtHemisphereLightModule,
    NgtDirectionalLightModule,
    NgtSobaPlaneModule,
    NgtSobaStarsModule,
    NgtMeshPhongMaterialModule,
    NgtGridHelperModule,
    CommonModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
  ],
})
export class RobotExpressiveModule {}
