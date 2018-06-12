import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const spinReverse = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

const Svg = styled.svg`
  width: 50%;

  & .cls-1 {
    fill: #fde2d1;
  }

  & .cls-2 {
    fill: #3d1c09;
  }

  & .cls-3 {
    fill: #f2f2f2;
  }

  & .cls-4 {
    fill: #0d8ec5;
  }

  & .cls-5 {
    fill: #2e1507;
  }

  & .cls-6 {
    fill: #b3b3b3;
  }

  & .cls-6,
  .cls-7 {
    stroke: #363f44;
  }

  & .cls-10,
  .cls-6,
  .cls-7,
  .cls-8,
  .cls-9 {
    stroke-miterlimit: 10;
  }

  & .cls-7 {
    fill: #e6e6e6;
  }

  & .cls-10,
  .cls-8,
  .cls-9 {
    fill: none;
  }

  & .cls-8,
  .cls-9 {
    stroke: #fff;
  }

  & .cls-8 {
    stroke-width: 2px;
  }

  & .cls-9 {
    stroke-width: 1.5px;
  }

  & .cls-10 {
    stroke: #ccc;
  }
`;

const Gear = styled.path`
  transform-origin: center center;
  transform-box: fill-box;
`;

const GearForward = Gear.extend`
  animation: ${spin} 4s linear infinite;
`;

const GearBack = Gear.extend`
  animation: ${spinReverse} 4s linear infinite;
`;

const BeforeEllaGraphic = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.2 344.28">
    <title>Asset 46</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <g id="person">
            <path d="M32.24,300.36" />
            <path
              className="cls-1"
              d="M82.75,188c-5,13-3,27.47,4,39.42,4.61,7.8,11.23,15.53,19.33,15.53s15-8,19.77-15.87a45.44,45.44,0,0,0,5.41-32.49c-2.72-13.26-9.26-29.07-24.93-26.5C93.16,170.23,86.26,178.8,82.75,188Z"
            />
            <path
              className="cls-2"
              d="M80.84,211.8s-1.12-12.93,1.71-20a6.74,6.74,0,0,1,6.29-4.1H97.7a16.69,16.69,0,0,0,5.63-1l16.71-6a81.62,81.62,0,0,0,7.44,11.52c4.36,5.54,4.77,18,4.77,18s1-16.8,3.39-19.68l-3.39-9.84V176l-4.77-1.68-2.4-4.08-6.48-7.2-.72,2.4s-14.88-10.32-30.47,1S80.84,211.8,80.84,211.8Z"
            />
            <path
              className="cls-1"
              d="M129.67,219l1.61-16.36s4.47-3.07,3.75,4.84S129.67,219,129.67,219Z"
            />
            <path
              className="cls-1"
              d="M82.82,219l-2.15-16.36s-4.47-3.07-3.75,4.84A16.15,16.15,0,0,0,82.82,219Z"
            />
            <path className="cls-3" d="M100,206.7c-3.48-4.56-9.72,0-9.72,0s5.64,5.24,9.92.28Z" />
            <path
              className="cls-4"
              d="M93.23,205.18a2.09,2.09,0,0,0,2.21,2,3,3,0,0,0,2.77-2A6.1,6.1,0,0,0,93.23,205.18Z"
            />
            <path className="cls-3" d="M122,207.39c-3.48-4.56-9.72,0-9.72,0s5.64,5.24,9.92.28Z" />
            <path
              className="cls-4"
              d="M115.21,205.87a2.09,2.09,0,0,0,2.21,2,3,3,0,0,0,2.77-2A6.1,6.1,0,0,0,115.21,205.87Z"
            />
            <polygon
              className="cls-5"
              points="112.8 202.22 111.84 205 125.67 205.36 127.87 207.22 126.03 202.86 112.8 202.22"
            />
            <path
              className="cls-5"
              d="M85.64,206.66l2-2,13.76-3a23.92,23.92,0,0,0-1.52-2.56c-.12,0-13,2.95-13,2.95Z"
            />
            <rect
              className="cls-6"
              x="36.24"
              y="213.03"
              width="140"
              height="87.33"
              rx="14.76"
              ry="14.76"
            />
            <path
              className="cls-7"
              d="M84.57,316.7H127.9l-5.66-50.33a10.89,10.89,0,0,0-10.82-9.67H101.06a10.89,10.89,0,0,0-10.82,9.67Z"
            />
          </g>
          <g id="text-big">
            <polygon points="123.05 51.23 123.05 76.84 131.86 76.84 127.28 86.17 140.17 76.84 171.1 76.84 171.1 51.23 123.05 51.23" />
            <line className="cls-8" x1="128.6" y1="57.53" x2="165.55" y2="57.53" />
            <line className="cls-8" x1="128.6" y1="63.12" x2="165.55" y2="63.12" />
            <line className="cls-8" x1="128.6" y1="68.7" x2="165.55" y2="68.7" />
          </g>
          <g id="text-small">
            <polygon points="187.32 26.16 187.32 44.63 180.96 44.63 184.27 51.36 174.97 44.63 152.66 44.63 152.66 26.16 187.32 26.16" />
            <line className="cls-9" x1="183.32" y1="30.7" x2="156.66" y2="30.7" />
            <line className="cls-9" x1="183.32" y1="34.73" x2="156.66" y2="34.73" />
            <line className="cls-9" x1="183.32" y1="38.76" x2="156.66" y2="38.76" />
          </g>
          <g id="graph">
            <rect x="3.34" y="177.41" width="11.5" height="27.5" />
            <rect x="19.28" y="166.56" width="11.5" height="38.34" />
            <rect x="35.22" y="154.5" width="11.5" height="50.41" />
          </g>
          <GearForward
            id="gear-big"
            d="M199.18,154.12c-.41,1.18-.9,2.34-1.2,3.55a2.1,2.1,0,0,1-2.66,1.77l-.89-.12c-4.09-.61-6.68,2.51-5.39,6.47.89,2.75.85,2.84-1.69,4.22l-.48.25c-3.26,1.77-3.26,1.77-5.51-1.15a4.82,4.82,0,0,0-7.75.75,5.74,5.74,0,0,1-.93,1.74,6.16,6.16,0,0,1-2.05,1c-.24.08-.57-.12-.86-.21-5.1-1.54-4.85-.85-4.24-6a3.2,3.2,0,0,0-.79-2,5.18,5.18,0,0,0-1.94-1.59,6.93,6.93,0,0,0-2.77-.48,6.6,6.6,0,0,0-2,.67,1.86,1.86,0,0,1-2.68-1c-.13-.27-.28-.53-.42-.8-2.35-4.28-2.34-3.86,1.28-6.63,1.92-1.47,1.44-5.89-.72-7-3.81-1.91-3.82-1.6-2.47-5.84,1-3,.93-3,4-2.59a4.68,4.68,0,0,0,5.31-6.31c-1-2.94-.95-3,1.81-4.46l1.13-.58c2.36-1.24,2.52-1.21,4.15.92,1.9,2.48,3.22,3,6.19,1.91a3.94,3.94,0,0,0,1.76-1.87c1.77-3.33,1.73-3.35,5.39-2.24l.17.06c3.15,1,3.17,1,2.7,4.31a4.66,4.66,0,0,0,6.08,5.11c3.31-1.09,3.31-1.09,4.94,2,.25.48.47,1,.75,1.44a2,2,0,0,1-.62,3.09c-.3.2-.58.44-.86.66a5.42,5.42,0,0,0-1.52,6.5c.35.66,1.25,1,1.93,1.5.92.64,1.87,1.25,2.81,1.88Zm-33.38-4.43a9.83,9.83,0,1,0,9.4-10.35A9.88,9.88,0,0,0,165.8,149.69Z"
          />
          <GearForward
            id="gear-small"
            d="M116.5,136.91c.24-1.07.4-2,2-2,1.18,0,1.87-1.6,1.15-2.74s-.25-1.6.5-2.26a1.45,1.45,0,0,1,2.2,0,1.87,1.87,0,0,0,3.09-1c.27-.86.54-1.4,1.59-1.23s1.82.24,1.85,1.63c0,1.16,1.62,2.19,2.46,1.59,1.91-1.36,2.5.08,3.4,1.36-.39.56-1,1.09-1.14,1.72-.19,1.09,0,2.28,1.41,2.5s1.22,1.07,1.21,2-.46,1.31-1.43,1.42a2,2,0,0,0-1.49,3.13c.53,1,.16,1.41-.51,1.95s-1.21,1-2.16.26c-1.38-1.14-2.77-.73-3.25,1a1.32,1.32,0,0,1-1.92,1,2.4,2.4,0,0,1-1.45-1.35c-.47-1.67-1.5-2.21-3.16-1.57a1.79,1.79,0,0,1-1.61-.26c-.44-.49-.92-1.45-.72-1.93,1.16-2.82,1.14-3-1.91-4.09Zm9.65-3.47a4,4,0,1,0,4.24,3.77A4,4,0,0,0,126.16,133.43Z"
          />
          <GearBack
            id="gear-mid"
            d="M146.74,110.89c1.42-.39,2.14.31,2.45,1.86a2.64,2.64,0,0,0,4.34,1.61c1.33-1.2,2.19-.83,3.38.19s1.39,1.83.46,3.17a2.71,2.71,0,0,0,2.2,4.25c1.36.1,2,.61,1.94,2s.54,2.58-1.55,3c-2.54.46-3.31,2.8-1.66,4.8,1.23,1.5.08,2.22-.67,3.19s-1.5,1.29-2.71.47c-2.14-1.46-4.36-.36-4.54,2.24-.12,1.72-1.21,1.65-2.37,1.74s-2.19.13-2.5-1.53c-.47-2.57-2.73-3.39-4.72-1.73-1.47,1.21-2.22.15-3.22-.63a1.77,1.77,0,0,1-.44-2.76c1.41-2.16.38-4.21-2.25-4.5-1.35-.15-1.71-.88-1.67-2.06s-.6-2.37,1.28-2.82c2.88-.7,3.51-2.61,1.67-4.93-1-1.3-.12-2,.58-2.75s1.26-1.73,2.66-.88c2.59,1.56,4.33.71,4.81-2.32C144.44,110.87,145.49,111,146.74,110.89Zm-5.21,14.63a5.84,5.84,0,1,0,5.36-6.32A5.92,5.92,0,0,0,141.53,125.52Z"
          />
          <g id="player">
            <path d="M62.81,113.92H61.12l-.61-.07A14.49,14.49,0,0,1,47.75,102c-.1-.55-.15-1.11-.23-1.67s0-1.13,0-1.69c0-.36.08-.72.13-1.08A14.48,14.48,0,0,1,63.41,85.12a13.78,13.78,0,0,1,8,3.49,14.14,14.14,0,0,1,4.94,10.24,13.74,13.74,0,0,1-2,8,14.23,14.23,0,0,1-9.91,6.84C63.91,113.8,63.36,113.84,62.81,113.92ZM74.15,99.48A12.18,12.18,0,1,0,62,111.66,12.2,12.2,0,0,0,74.15,99.48Z" />
            <path d="M57.9,99.48q0-2.57,0-5.13c0-.1,0-.21,0-.31A.7.7,0,0,1,59,93.4c.8.42,1.57.89,2.35,1.34l6.71,3.92a2.2,2.2,0,0,1,.51.4.59.59,0,0,1,0,.84,2,2,0,0,1-.46.37l-8.83,5.16c-.87.5-1.37.21-1.37-.79Q57.9,102.06,57.9,99.48Z" />
            <circle cx="48.84" cy="122.14" r="3.51" />
            <rect x="40.37" y="120.3" width="43.2" height="3.68" rx="1.84" ry="1.84" />
          </g>
          <g id="doc">
            <g>
              <path d="M22.85,40.43V34.74H4.39A4.39,4.39,0,0,0,0,39.14V74.6A4.39,4.39,0,0,0,4.39,79H34.62A4.39,4.39,0,0,0,39,74.6V50.91H33.33A10.51,10.51,0,0,1,22.85,40.43ZM34.72,70.84a4.08,4.08,0,0,1-4.08,4.08H8.37a4.08,4.08,0,0,1-4.08-4.08V53.67H34.72Z" />
              <path d="M34.85,34.74H25v4.92a9.09,9.09,0,0,0,9.06,9.06H39V38.91A4.16,4.16,0,0,0,34.85,34.74Z" />
              <path
                className="cls-3"
                d="M4.29,70.84a4.08,4.08,0,0,0,4.08,4.08H30.64a4.08,4.08,0,0,0,4.08-4.08V53.67H4.29Z"
              />
            </g>
            <g>
              <path
                className="cls-3"
                d="M4.57,44.69a12,12,0,0,1,1.83-.12,3.84,3.84,0,0,1,2.45.64,2.64,2.64,0,0,1,1,2.25,3,3,0,0,1-1,2.42,4.29,4.29,0,0,1-2.76.77,11.69,11.69,0,0,1-1.53-.09Zm1.36,4.88a2.51,2.51,0,0,0,.47,0,1.85,1.85,0,0,0,2-2.09,1.71,1.71,0,0,0-1.88-1.9,2.8,2.8,0,0,0-.61.05Z"
              />
              <path
                className="cls-3"
                d="M16.21,47.53a2.85,2.85,0,0,1-2.93,3.15,2.79,2.79,0,0,1-2.81-3,2.89,2.89,0,0,1,2.91-3.13A2.78,2.78,0,0,1,16.21,47.53Zm-4.32.08c0,1.17.55,2,1.45,2s1.44-.87,1.44-2-.51-2-1.45-2S11.89,46.45,11.89,47.61Z"
              />
              <path
                className="cls-3"
                d="M21.48,50.41a3.85,3.85,0,0,1-1.53.26,2.84,2.84,0,0,1-3.13-3,3,3,0,0,1,3.26-3.17,3.52,3.52,0,0,1,1.47.27l-.27,1.07a2.92,2.92,0,0,0-1.13-.22,2,2,0,0,0,0,3.93,3.37,3.37,0,0,0,1.13-.2Z"
              />
            </g>
            <line className="cls-10" x1="8.15" y1="56.87" x2="31" y2="56.87" />
            <line className="cls-10" x1="8.15" y1="61.24" x2="31" y2="61.24" />
          </g>
          <g id="pdf">
            <g>
              <path d="M72,6.51V0H50.91a5,5,0,0,0-5,5V45.64a5,5,0,0,0,5,5H85.52a5,5,0,0,0,5-5V18.51H84A12,12,0,0,1,72,6.51ZM85.63,41.33A4.67,4.67,0,0,1,81,46H55.47a4.67,4.67,0,0,1-4.67-4.67V21.67H85.63Z" />
              <path d="M85.78,0H74.54V5.63A10.41,10.41,0,0,0,84.92,16h5.63V4.77A4.77,4.77,0,0,0,85.78,0Z" />
              <path
                className="cls-3"
                d="M50.8,41.33A4.67,4.67,0,0,0,55.47,46H81a4.67,4.67,0,0,0,4.67-4.67V21.67H50.8Z"
              />
            </g>
            <line className="cls-10" x1="55.21" y1="25.33" x2="81.38" y2="25.33" />
            <line className="cls-10" x1="55.21" y1="30.33" x2="81.38" y2="30.33" />
            <line className="cls-10" x1="55.21" y1="35.33" x2="81.38" y2="35.33" />
            <g>
              <path
                className="cls-3"
                d="M50.8,11.14A13.7,13.7,0,0,1,53.06,11a3.56,3.56,0,0,1,2.27.59,2.17,2.17,0,0,1,.79,1.72,2.37,2.37,0,0,1-.68,1.76,3.44,3.44,0,0,1-2.41.78,4.24,4.24,0,0,1-.57,0v2.65H50.8Zm1.66,3.37a2.56,2.56,0,0,0,.56,0c.89,0,1.44-.45,1.44-1.21s-.47-1.09-1.31-1.09a2.88,2.88,0,0,0-.69.07Z"
              />
              <path
                className="cls-3"
                d="M57.19,11.14A14.92,14.92,0,0,1,59.46,11a4.77,4.77,0,0,1,3,.79,3.28,3.28,0,0,1,1.25,2.8,3.76,3.76,0,0,1-1.23,3,5.33,5.33,0,0,1-3.42,1,14.51,14.51,0,0,1-1.9-.11Zm1.68,6.05a3.12,3.12,0,0,0,.58,0A2.3,2.3,0,0,0,62,14.63a2.13,2.13,0,0,0-2.33-2.36,3.48,3.48,0,0,0-.76.07Z"
              />
              <path className="cls-3" d="M64.85,11h4.53v1.38H66.53v1.69H69.2v1.36H66.53v3H64.85Z" />
            </g>
          </g>
          <ellipse id="base" className="cls-3" cx="106.24" cy="338.61" rx="92.96" ry="5.66" />
        </g>
      </g>
    </g>
  </Svg>
);

export default BeforeEllaGraphic;