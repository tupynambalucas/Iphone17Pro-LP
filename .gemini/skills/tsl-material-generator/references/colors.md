# Official Product Colors

This file provides the TSL `color` nodes for the official iPhone 17 Pro color palette, as defined in `product/PRODUCT.md`.

These nodes can be assigned directly to the `colorNode` property of the `AluminumMaterial`.

## TSL Code

Create a file at `packages/engine-react/src/features/canvas/components/Iphone/materials/colors.material.ts` and add the following exports.

```typescript
import { color } from 'three/tsl';

// Colors from PRODUCT.md
export const CosmicOrangeColor = color('#f77314');
export const DeepBlueColor = color('#2b3145');
export const SilverColor = color('#f5f5f5');
export const SpaceBlackColor = color('#1A1A1A');
export const UltramarineColor = color('#5D3FD3');
export const PinkColor = color('#FFB6C1');
export const MidnightColor = color('#191970');
export const StarlightColor = color('#F8F9FA');

// You can also create an object to easily access them by name
export const ProductColors = {
  'Cosmic Orange': CosmicOrangeColor,
  'Deep Blue': DeepBlueColor,
  'Silver': SilverColor,
  'Space Black': SpaceBlackColor,
  'Ultramarine': UltramarineColor,
  'Pink': PinkColor,
  'Midnight': MidnightColor,
  'Starlight': StarlightColor,
};
```

### How to Use

Import the desired color and assign it to the material's `colorNode`.

```typescript
import { AluminumMaterial } from './aluminium.material';
import { DeepBlueColor } from './colors.material';

// Statically set the color
AluminumMaterial.colorNode = DeepBlueColor;
```

For dynamic color changes (e.g., based on UI clicks), you can use `mix()` to animate between color nodes.
