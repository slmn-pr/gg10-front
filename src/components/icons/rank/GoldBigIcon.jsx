export default function GoldBigIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0.744995L26.8429 7.8725V22.1275L15 29.255L3.1571 22.1275V7.8725L15 0.744995Z"
        fill="url(#paint0_linear_61165_23915)"
      />

      <g filter="url(#filter0_61165_23915)">
        <path
          d="M15 4.16626L24.1865 9.58316V20.417L15 25.8339L5.81345 20.417V9.58316L15 4.16626Z"
          fill="#3B2A09"
        />
      </g>

      <path
        d="M9.31093 8.72768L14.7444 12.2619L20.1779 8.72768L20.24 8.79752V11.1444C19.0912 11.6473 17.5698 12.5273 16.4055 13.3794C15.5982 13.9662 14.9773 14.5389 14.7444 14.9999C14.5271 14.5529 13.8906 13.9662 13.0833 13.3794C11.919 12.5273 10.3976 11.6612 9.24883 11.1444V8.78355L9.31093 8.72768Z"
        fill="#D3AF37"
      />

      <path
        d="M9.31093 12.434L14.7444 16.1289L20.1779 12.434L20.24 12.5071V14.9606C19.0912 15.4863 17.5698 16.4064 16.4055 17.2972C15.5982 17.9106 14.9773 18.5094 14.7444 18.9913C14.5271 18.524 13.8906 17.9106 13.0833 17.2972C11.919 16.4064 10.3976 15.5009 9.24883 14.9606V12.4924L9.31093 12.434Z"
        fill="#D3AF37"
      />

      <path
        d="M9.31093 16.1406L14.7444 19.6749L20.1779 16.1406L20.24 16.2105V18.5573C19.0912 19.0602 17.5698 19.9403 16.4055 20.7924C15.5982 21.3791 14.9773 21.9519 14.7444 22.4128C14.5271 21.9658 13.8906 21.3791 13.0833 20.7924C11.919 19.9403 10.3976 19.0742 9.24883 18.5573V16.1965L9.31093 16.1406Z"
        fill="#D3AF37"
      />

      <defs>
        <filter
          id="filter0_61165_23915"
          x="5.81345"
          y="4.16626"
          width="18.3731"
          height="21.6676"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />

          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />

          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5555556"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="1585"
          />

          <feComponentTransfer in="noise" result="coloredNoise1">
            <feFuncR type="linear" slope="2" intercept="-0.5" />
            <feFuncG type="linear" slope="2" intercept="-0.5" />
            <feFuncB type="linear" slope="2" intercept="-0.5" />
            <feFuncA type="table" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0" />
          </feComponentTransfer>

          <feComposite
            operator="in"
            in2="shape"
            in="coloredNoise1"
            result="noise1Clipped"
          />

          <feComponentTransfer in="noise1Clipped" result="color1">
            <feFuncA type="table" tableValues="0 0.06" />
          </feComponentTransfer>

          <feMerge>
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>

        <linearGradient
          id="paint0_linear_61165_23915"
          x1="15"
          y1="0.744995"
          x2="15"
          y2="29.255"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AE7E00" />
          <stop offset="1" stopColor="#483400" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
