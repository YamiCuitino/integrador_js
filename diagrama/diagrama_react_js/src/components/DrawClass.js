import React, { useEffect, useState } from 'react';

const DrawClass = ({ data }) => {
  const { name, attributes, methods, borderColor, headColor, titleBackgroundColor, textColor,separatorColor } = data;

  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    // Calcular el ancho máximo entre atributos y métodos
    const elements = [...attributes, ...methods];
    const maxElementWidth = elements.reduce((maxWidth, element) => {
      const elementWidth = element.length * 7; // Estimación del ancho basado en el número de caracteres
      return elementWidth > maxWidth ? elementWidth : maxWidth;
    }, 0);

    // Establecer el ancho del componente basado en el ancho máximo calculado
    const componentWidth = Math.max(200, maxElementWidth + 20); // 200px mínimo, 20px de margen
    setMaxWidth(componentWidth);
  }, [attributes, methods]);

  // Calcular el alto del componente en función de la cantidad de atributos y métodos
  const numAttributes = attributes.length;
  const numMethods = methods.length;
  const totalItems = numAttributes + numMethods;
  const itemHeight = 20; // Altura estimada de cada atributo/método
  const componentHeight = totalItems * itemHeight + 60; // 60px para el encabezado y pie

  return (
    <svg width={maxWidth} height={componentHeight}>
      {/* Rectángulo de fondo */}
      <rect x="0" y="0" width={maxWidth} height={componentHeight} fill={headColor} />

      {/* Nuevo rectángulo para el fondo del título "Person" */}
      <rect x="0" y="0" width={maxWidth} height="40" fill={titleBackgroundColor} />

      {/* Título de la clase */}
      <text x="10" y="30" fontSize="16" fill={textColor}>
        {name}
      </text>

      {/* Línea horizontal debajo del título */}
      <line x1="0" y1="40" x2={maxWidth} y2="40" stroke={borderColor} strokeWidth="2" />

      {/* Atributos */}
      {attributes.map((attr, index) => (
        <text key={`attr-${index}`} x="10" y={60 + index * itemHeight} fontSize="14" fill={textColor}>
          {attr}
        </text>
      ))}

      <line x1="0" y1={45 + numAttributes * itemHeight} x2={maxWidth} y2={45 + numAttributes * itemHeight} strokeWidth="2" stroke={separatorColor} />

      {/* Métodos */}
      {methods.map((method, index) => (
        <text key={`method-${index}`} x="10" y={60 + (numAttributes + index) * itemHeight} fontSize="14" fill={textColor}>
          {method}
        </text>
      ))}

      {/* Borde del rectángulo */}
      <rect x="0" y="0" width={maxWidth} height={componentHeight} fill="transparent" stroke={borderColor} strokeWidth="2" />
    </svg>
  );
};

export default DrawClass;
