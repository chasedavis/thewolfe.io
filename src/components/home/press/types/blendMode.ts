import type { Property } from 'csstype';

export type BlendMode = Property.MixBlendMode;

export interface BlendModeProps {
  blendMode?: BlendMode;
}