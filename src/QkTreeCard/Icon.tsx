import React from 'react';
export default function Icon(props: { open?: boolean }) {
  const { open } = props;

  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="ESG盘查相关"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="切图及卡片解析" transform="translate(-658.000000, -797.000000)">
          <g id="编组-35备份-7" transform="translate(658.000000, 797.000000)">
            <circle
              id="椭圆形"
              fill="currentColor"
              cx="12"
              cy="12"
              r="12"
            ></circle>
            <g
              id="编组-38"
              transform="translate(5.000000, 5.000000)"
              fill="#FFFFFF"
            >
              <rect id="矩形" x="0" y="6" width="14" height="2" rx="1"></rect>
              {open && (
                <rect
                  id="矩形备份"
                  transform="translate(7.000000, 7.000000) rotate(-270.000000) translate(-7.000000, -7.000000) "
                  x="-7.27595761e-12"
                  y="6"
                  width="14"
                  height="2"
                  rx="1"
                ></rect>
              )}
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
