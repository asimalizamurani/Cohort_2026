(function() {
  const config = {
    colors: { primary: '#3b82f6', secondary: '#6366f1', danger: '#ef4444', dark: '#1f2937', gray: '#9ca3af', light: '#f3f4f6', white: '#fff' },
    spacing: { '0': '0', '1': '0.25rem', '2': '0.5rem', '4': '1rem', '8': '2rem', '12': '3rem', '16': '4rem' },
    fontSizes: { 'xs': '0.75rem', 'sm': '0.875rem', 'base': '1rem', 'lg': '1.125rem', 'xl': '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem' },
    rounded: { 'none': '0', 'sm': '0.125rem', 'md': '0.375rem', 'lg': '0.5rem', 'full': '9999px' }
  };

  // BASIC STYLES
  let css = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: sans-serif; line-height: 1.5; background: ${config.colors.light}; }
    
    /* Fluid Media */
    img, video { max-width: 100%; height: auto; display: block; }
    audio { width: 100%; }
    
    /* Section Defaults */
    section { width: 100%; padding: ${config.spacing['8']} 0; }
    
    /* Flex & Grid Core */
    .flex { display: flex; } .flex-col { flex-direction: column; }
    .justify-center { justify-content: center; } .items-center { align-items: center; }
    .grid { display: grid; } .gap-4 { gap: 1rem; }
  `;
  
  // Headings h1-h6
  for (let i = 1; i <= 6; i++) {
    css += `h${i} { font-size: ${4 - i * 0.5}rem; font-weight: 800; margin-bottom: 1rem; }\n`;
  }

  // Padding/Margin
  Object.entries(config.spacing).forEach(([key, val]) => {
    css += `.p-${key} { padding: ${val}; } .m-${key} { margin: ${val}; }\n`;
    css += `.mt-${key} { margin-top: ${val}; } .mb-${key} { margin-bottom: ${val}; }\n`;
    css += `.py-${key} { padding-top: ${val}; padding-bottom: ${val}; }\n`;
  });

  // Colors (Text & Background)
  Object.entries(config.colors).forEach(([name, hex]) => {
    css += `.bg-${name} { background-color: ${hex}; }\n`;
    css += `.text-${name} { color: ${hex}; }\n`;
  });

  // Typography Sizes
  Object.entries(config.fontSizes).forEach(([name, size]) => {
    css += `.text-${name} { font-size: ${size}; }\n`;
  });

  // Border Radius
  Object.entries(config.rounded).forEach(([name, val]) => {
    css += `.rounded-${name} { border-radius: ${val}; }\n`;
  });

  const style = document.createElement('style');
  style.id = "baloch-styles";
  style.innerHTML = css;
  document.head.appendChild(style);

  console.log("Baloch Framework Loaded Successfully");
})();