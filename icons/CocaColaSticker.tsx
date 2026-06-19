import * as React from 'react';
import { View } from 'react-native';
import Svg, { Rect, Path, G, Circle, Defs, ClipPath } from 'react-native-svg';

interface CocaColaStickerProps {
  size?: number;
}

export function CocaColaSticker({ size = 100 }: CocaColaStickerProps) {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 100 100">
        {/* Can body */}
        <Rect x="25" y="20" width="50" height="70" rx="4" fill="#F40009" />
        
        {/* Top lid */}
        <Rect x="27" y="15" width="46" height="8" rx="2" fill="#E0E0E0" />
        
        {/* Bottom lid */}
        <Rect x="27" y="88" width="46" height="6" rx="2" fill="#E0E0E0" />
        
        {/* White wave stripe */}
        <Path
          d="M25 45 Q35 40, 50 45 Q65 50, 75 45 L75 65 Q65 60, 50 65 Q35 70, 25 65 Z"
          fill="white"
        />
        
        {/* Coca-Cola logo text area */}
        <G>
          {/* Simplified "Coca-Cola" script style */}
          <Path
            d="M32 52 Q34 48, 38 50 Q42 52, 40 56 Q38 58, 35 57"
            fill="white"
            stroke="white"
            strokeWidth="1"
          />
          <Path
            d="M43 50 Q45 48, 48 50 Q50 52, 48 55 Q46 57, 44 56"
            fill="white"
          />
          <Path
            d="M52 50 Q54 48, 57 50 Q59 52, 57 55 Q55 57, 53 56"
            fill="white"
          />
          <Path
            d="M61 50 Q63 48, 66 50 Q68 52, 66 55 Q64 57, 62 56"
            fill="white"
          />
        </G>
        
        {/* Highlight */}
        <Rect x="28" y="25" width="3" height="55" rx="1" fill="rgba(255,255,255,0.3)" />
      </Svg>
    </View>
  );
}