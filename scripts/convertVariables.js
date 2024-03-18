const fs = require("fs");
const options = process.argv.slice(2);
const processedOptions = {};

if (options.length) {
  options.forEach((option) => {
    const [optionKey, optionValue] = option.split('=');
    processedOptions[optionKey] = optionValue;
  });
}
// Load the exported variables from Figma
const data = require("../tokens/tokens.Odo.json");
// node ./convertVariables.js --use-css-vars=true --tokens=../path

// Define the fields that contain colors and their respective Tailwind keywords.
// This can be remove if the Figma variables use the same naming as in Tailwind.
// Thus only Object.keys can be used.
// Otherwise it can be done like: {"Figma Var name": "primary"}.
const COLOR_FIELDS = {
  primary: "primary",
  secondary: "secondary",
  neutral: "neutral",
  success: "success",
  error: "error",
};

// Define the fields that contain spacing, border radius, etc.
const SPACING_FIELD = "Spacing Scale";
const BORDER_RADIUS_FIELD = "border-radius";

// Define the order of border radius values.
const BORDER_RADIUS_ORDER = [
  "button-radius",
  "card-radius",
  "input-fields",
  "select-options",
  "accordion",
];

const processedData = {
  theme: {
    colors: {},
    spacing: {},
    borderRadius: {},
  },
};

// Process colors
Object.entries(COLOR_FIELDS).forEach(([field]) => {
  if (data.colors[field]) {
    processedData.theme.colors[field] = {};
    Object.entries(data.colors[field]).forEach(([key, value]) => {
      const tailwindColorName = `${key.toLowerCase().replace(" ", "-")}`;
      let colorValue = value["$value"];

      // Transform to CSS props.
      if (options.length) {
        if (processedOptions['--use-css-vars'] === 'true') {
          colorValue = `var(--color-${field}-${tailwindColorName})`;
        }
      }

      // Map color names to their respective values.
      processedData.theme.colors[field][tailwindColorName] = colorValue;
    });
  }
});

// Process spacing
if (data[SPACING_FIELD]) {
  Object.entries(data[SPACING_FIELD])
    .sort(([keyA], [keyB]) => parseFloat(keyA) - parseFloat(keyB))
    .forEach(([key, value]) => {
      processedData.theme.spacing[
        key.replace(",", ".")
      ] = `${value["$value"]}px`;
    });
}

// Process border radius
if (data[BORDER_RADIUS_FIELD]) {
  BORDER_RADIUS_ORDER.forEach(orderKey => {
    if (data[BORDER_RADIUS_FIELD][orderKey]) {
      let borderRadiusValue = data[BORDER_RADIUS_FIELD][orderKey]["$value"];

      if (typeof borderRadiusValue === 'string') {
        const borderRadiusSplit = borderRadiusValue.split('.');
        const borderRadiusMappingValue = borderRadiusSplit[borderRadiusSplit.length - 1].replace('}', '');
        borderRadiusValue = data[SPACING_FIELD][borderRadiusMappingValue]["$value"];
      }
      processedData.theme.borderRadius[orderKey] = `${borderRadiusValue}px`;
    }
  });
}

fs.writeFileSync(
  "./variableOutput.js",
  "module.exports = " + JSON.stringify(processedData, null, 2),
  "utf-8",
);
console.log(
  "Processing completed successfully. Output written to 'variableOutput.js'.",
);
