declare module 'three' {
  export const NormalBlending: number;

  export class Scene {
    fog: unknown;
    position: unknown;
    add(...objects: unknown[]): void;
    clear(): void;
  }

  export class FogExp2 {
    constructor(color: number, density: number);
  }

  export class PerspectiveCamera {
    aspect: number;
    position: {
      x: number;
      y: number;
      z: number;
    };
    constructor(fov: number, aspect: number, near: number, far: number);
    lookAt(target: unknown): void;
    updateProjectionMatrix(): void;
  }

  export class WebGLRenderer {
    domElement: HTMLCanvasElement;
    constructor(parameters?: unknown);
    setSize(width: number, height: number): void;
    setPixelRatio(value: number): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    dispose(): void;
  }

  export class AmbientLight {
    constructor(color: number, intensity?: number);
  }

  export class PointLight {
    position: {
      set(x: number, y: number, z: number): void;
    };
    constructor(color: number, intensity?: number, distance?: number);
  }

  export class BufferGeometry {
    setAttribute(name: string, attribute: BufferAttribute): void;
  }

  export class BufferAttribute {
    constructor(array: Float32Array, itemSize: number);
  }

  export class PointsMaterial {
    constructor(parameters?: unknown);
  }

  export class Points {
    rotation: {
      x: number;
      y: number;
    };
    constructor(geometry: BufferGeometry, material: PointsMaterial);
  }

  export class MeshStandardMaterial {
    constructor(parameters?: unknown);
  }

  export class IcosahedronGeometry {
    constructor(radius?: number, detail?: number);
  }

  export class TorusKnotGeometry {
    constructor(
      radius?: number,
      tube?: number,
      tubularSegments?: number,
      radialSegments?: number
    );
  }

  export class OctahedronGeometry {
    constructor(radius?: number, detail?: number);
  }

  export class Mesh {
    position: {
      y: number;
      set(x: number, y: number, z: number): void;
    };
    rotation: {
      x: number;
      y: number;
    };
    constructor(geometry: unknown, material: unknown);
  }

  export class Clock {
    getElapsedTime(): number;
  }
}
