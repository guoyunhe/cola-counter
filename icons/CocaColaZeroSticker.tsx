import * as React from 'react';
import { View } from 'react-native';
import Svg, { Rect, Path, G, Circle } from 'react-native-svg';

interface CocaColaZeroStickerProps {
  size?: number;
}

export function CocaColaZeroSticker({ size = 100 }: CocaColaZeroStickerProps) {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 100 100">
        {/* Can body - Black */}
        <Rect x="25" y="20" width="50" height="70" rx="4" fill="#1A1A1A" />
        
        {/* Top lid */}
        <Rect x="27" y="15" width="46" height="8" rx="2" fill="#E0E0E0" />
        
        {/* Bottom lid */}
        <Rect x="27" y="88" width="46" height="6" rx="2" fill="#E0E0E0" />
        
        {/* Red accent band */}
        <Rect x="25" y="42" width="50" height="26" fill="#F40009" />
        
        {/* White wave stripe */}
        <Path
          d="M25 45 Q35 40, 50 45 Q65 50, 75 45 L75 65 Q65 60, 50 65 Q35 70, 25 65 Z"
          fill="white"
        />
        
        {/* Coca-Cola Zero logo text area */}
        <G>
          {/* Simplified script style */}
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
        
        {/* Zero label */}
        <G>
          <Path
            d="M38 72 Q50 68, 62 72"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </G>
        
        {/* Highlight */}
        <Rect x="28" y="25" width="3" height="15" rx="1" fill="rgba(255,255,255,0.2)" />
      </Svg>
    </View>
  );
}