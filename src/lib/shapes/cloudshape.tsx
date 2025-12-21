import React from 'react';

interface CloudProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  zIndex?: number;
}

const Cloud: React.FC<CloudProps> = ({
  width = '220px',
  height = '120px',
  color = '#E5E7EB',
  zIndex = 1
}) => {
  return (
    <svg
      aria-label="Minimal flat cloud shape"
      height={height}
      role="img"
      style={{ zIndex }}
      viewBox="0 0 220 120"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M60 90
          H150
          C175 90 190 75 190 60
          C190 45 175 35 160 38
          C155 22 138 15 122 22
          C112 8 90 10 82 25
          C65 25 50 38 50 55
          C35 58 30 70 30 80
          C30 88 40 90 60 90
          Z
        "
        fill={color}
      />
    </svg>
  );
};

export default Cloud;
