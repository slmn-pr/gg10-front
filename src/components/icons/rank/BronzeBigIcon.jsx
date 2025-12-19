export default function BronzeBigIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0002 0.744995L26.8431 7.8725V22.1275L15.0002 29.255L3.1573 22.1275V7.8725L15.0002 0.744995Z"
        fill="url(#paint0_linear_61457_9547)"
      />
      <g filter="url(#filter0_n_61457_9547)">
        <path
          d="M15 4.07471L24.2472 9.53739V20.4628L15 25.9254L5.75281 20.4628V9.53739L15 4.07471Z"
          fill="#2C1B11"
        />
      </g>
      <path
        d="M9.44281 12.3988L14.9066 16.0339L20.3703 12.3988L20.4328 12.4706V14.8844C19.2776 15.4017 17.7477 16.3069 16.5769 17.1833C15.7652 17.7868 15.1407 18.3758 14.9066 18.85C14.688 18.3902 14.048 17.7868 13.2362 17.1833C12.0654 16.3069 10.5356 15.4161 9.38037 14.8844V12.4563L9.44281 12.3988Z"
        fill="#A97142"
      />
      <defs>
        <filter
          id="filter0_n_61457_9547"
          x="5.75293"
          y="4.07471"
          width="18.4941"
          height="21.8507"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.55555558204650879 0.55555558204650879"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="1585"
          />
          <feComponentTransfer in="noise" result="coloredNoise1">
            <feFuncR type="linear" slope="2" intercept="-0.5" />
            <feFuncG type="linear" slope="2" intercept="-0.5" />
            <feFuncB type="linear" slope="2" intercept="-0.5" />
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
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
          <feMerge result="effect1_noise_61457_9547">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
        <linearGradient
          id="paint0_linear_61457_9547"
          x1="15.0002"
          y1="0.744995"
          x2="15.0002"
          y2="29.255"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B66952" />
          <stop offset="1" stop-color="#502E24" stop-opacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
