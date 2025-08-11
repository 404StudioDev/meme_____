import React from 'react';

const TextControls = ({ text, onChange, placeholder }) => {
  const updateText = (updates) => {
    onChange({ ...text, ...updates });
  };

  return (
    <div className="space-y-3">
      
      {/* Text */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Text</label>
        <input
          type="text"
          value={text.content}
          onChange={(e) => updateText({ content: e.target.value })}
          placeholder={placeholder}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Font Size */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Font Size: {text.fontSize}px</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="16"
            max="120"
            value={text.fontSize}
            onChange={(e) => updateText({ fontSize: parseInt(e.target.value) })}
            className="flex-1"
          />
        </div>
      </div>

      {/* Text Color */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Text Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={text.color}
            onChange={(e) => updateText({ color: e.target.value })}
            className="w-10 h-8 border border-gray-300 rounded cursor-pointer"
          />
          <input
            type="text"
            value={text.color}
            onChange={(e) => updateText({ color: e.target.value })}
            className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Outline Color */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Outline Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={text.stroke}
            onChange={(e) => updateText({ stroke: e.target.value })}
            className="w-10 h-8 border border-gray-300 rounded cursor-pointer"
          />
          <input
            type="text"
            value={text.stroke}
            onChange={(e) => updateText({ stroke: e.target.value })}
            className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Outline Width */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Outline Width: {text.strokeWidth}px</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="8"
            value={text.strokeWidth}
            onChange={(e) => updateText({ strokeWidth: parseInt(e.target.value) })}
            className="flex-1"
          />
        </div>
      </div>

      {/* Vertical Position */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Vertical Position: {text.y}%</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="5"
            max="95"
            value={text.y}
            onChange={(e) => updateText({ y: parseInt(e.target.value) })}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default TextControls;
