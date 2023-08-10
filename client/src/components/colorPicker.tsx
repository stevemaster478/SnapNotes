/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColor,
  onSelectColor,
}) => {
  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color ${selectedColor === color ? "selected" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;

