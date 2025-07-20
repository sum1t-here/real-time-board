'use client';

import { colorToCss } from '@/lib/utils';
import { Color } from '@/types/canvas';

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton color={{ r: 243, g: 82, b: 35 }} onClick={onChange} /> {/* Red-Orange */}
      <ColorButton color={{ r: 255, g: 195, b: 0 }} onClick={onChange} /> {/* Yellow */}
      <ColorButton color={{ r: 76, g: 175, b: 80 }} onClick={onChange} /> {/* Green */}
      <ColorButton color={{ r: 33, g: 150, b: 243 }} onClick={onChange} /> {/* Blue */}
      <ColorButton color={{ r: 156, g: 39, b: 176 }} onClick={onChange} /> {/* Purple */}
      <ColorButton color={{ r: 255, g: 87, b: 34 }} onClick={onChange} /> {/* Deep Orange */}
      <ColorButton color={{ r: 158, g: 158, b: 158 }} onClick={onChange} /> {/* Grey */}
      <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} /> {/* Black */}
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
};
