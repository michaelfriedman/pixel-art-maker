(() => {
  'use strict';
  const pixelGrid = document.getElementById('pixel-grid');
  let currentColor = null;
  const colorIndicator = document.getElementById('colorIndicator');
  let customColor = document.getElementById('customColor').value;
  const input = document.getElementById('customColor');
  const palette = document.getElementById('palette');
  let isMouseDown = false;
  const namedColors = ['LightSalmon', 'Salmon', 'DarkSalmon', 'LightCoral',
    'IndianRed', 'Crimson', 'FireBrick', 'DarkRed', 'Red', 'Pink', 'LightPink',
    'HotPink', 'DeepPink', 'PaleVioletRed', 'MediumVioletRed', 'OrangeRed',
    'Tomato', 'Coral', 'DarkOrange', 'Orange', 'Yellow', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin',
    'PeachPuff', 'PaleGoldenrod', 'Khaki', 'DarkKhaki', 'Gold', 'Cornsilk',
    'BlanchedAlmond', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'RosyBrown', 'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon', 'DarkOliveGreen',
    'Olive', 'OliveDrab', 'YellowGreen', 'LimeGreen', 'Lime', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'SpringGreen', 'MediumSpringGreen',
    'LightGreen', 'PaleGreen', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green',
    'DarkGreen', 'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise',
    'AquaMarine', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'LightSteelBlue',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'Steelblue', 'RoyalBlue', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue', 'Lavender', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'MediumPurple', 'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'DarkMagenta', 'Purple', 'Indigo', 'DarkSlateBlue', 'SlateBlue',
    'MediumSlateBlue', 'White', 'Snow', 'Honeydew', 'MintCream', 'Azure',
    'AliceBlue', 'GhostWhite', 'WhiteSmoke', 'Seashell', 'Beige', 'OldLace',
    'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush',
    'MistyRose', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'];

  const colorIndicatorMessage =
  document.getElementById('colorIndicatorMessage');
  const brushIndicator = () => {
    colorIndicator.style.backgroundColor = currentColor;
    colorIndicatorMessage.textContent = `Brush Indicator: ${currentColor}`;
  };

  (() => {
    for (const namedColor of namedColors) {
      const swatch = document.createElement('span');

      document.getElementById('palette').appendChild(swatch);
      swatch.style.backgroundColor = namedColor;
      if (swatch.style.backgroundColor === 'black') {
        swatch.style.border = '1px solid white';
      }
    }
  })();

  (() => {
    for (let i = 0; i < 1749; i++) {
      const pixel = document.createElement('div');
      document.getElementById('pixel-grid').appendChild(pixel);
    }
  })();

  input.addEventListener('input', () => {
    customColor = document.getElementById('customColor').value;
    currentColor = customColor;
    brushIndicator();
  });

  palette.addEventListener('click', (event) => {
    currentColor = event.target.style.backgroundColor;
    colorIndicator.style.backgroundColor = currentColor;
    brushIndicator();
  });

  pixelGrid.addEventListener('click', (event) => {
    event.target.style.backgroundColor = currentColor;
  });

  pixelGrid.addEventListener('mousedown', () => {
    isMouseDown = true;
  });

  window.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  pixelGrid.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
      event.target.style.backgroundColor = currentColor;
    }
  });
})();
