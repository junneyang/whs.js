import THREE from 'three';

import Shape from '../core/Shape';
import {extend} from '../extras/api';

class Ring extends Shape {
  constructor(params = {}) {
    super(params, 'ring');

    extend(params.geometry, {

      innerRadius: 0,
      outerRadius: 50,
      thetaSegments: 8,
      phiSegments: 8,
      thetaStart: 0,
      thetaLength: Math.PI * 2

    });

    this.build(params);
    super.wrap('onlyvis');
  }

  build(params = {}) {
    const _scope = this,
      material = super._initMaterial(params.material);

    return new Promise((resolve) => {
      _scope.setNative(new THREE.Mesh(
        new THREE.RingGeometry(

          params.geometry.innerRadius,
          params.geometry.outerRadius,
          params.geometry.thetaSegments,
          params.geometry.phiSegments,
          params.geometry.thetaStart,
          params.geometry.thetaLength

        ),

        material
      ));

      resolve();
    });
  }

  clone() {
    return new Ring(this.getParams(), this._type).copy(this);
  }
}

export {
  Ring as default
};