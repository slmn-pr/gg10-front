export default function GoldSmallIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3.55505L19.7942 7.77755V16.2226L12 20.4451L4.20577 16.2226V7.77755L12 3.55505Z"
        fill="url(#paint0_linear_61059_6259)"
      />
      <g filter="url(#filter0_n_61059_6259)">
        <path
          d="M12 5.58191L18.046 8.79101V15.2092L12 18.4183L5.95401 15.2092V8.79101L12 5.58191Z"
          fill="#3B2A09"
        />
      </g>
      <path
        d="M8.25582 8.2842L11.8318 10.378L15.4077 8.2842L15.4486 8.32558V9.7159C14.6925 10.0138 13.6913 10.5352 12.925 11.04C12.3937 11.3876 11.985 11.7269 11.8318 12C11.6887 11.7352 11.2698 11.3876 10.7386 11.04C9.97228 10.5352 8.97101 10.0221 8.21495 9.7159V8.3173L8.25582 8.2842Z"
        fill="#D3AF37"
      />
      <path
        d="M8.25582 10.4799L11.8318 12.6689L15.4077 10.4799L15.4486 10.5232V11.9767C14.6925 12.2882 13.6913 12.8332 12.925 13.361C12.3937 13.7244 11.985 14.0791 11.8318 14.3646C11.6887 14.0878 11.2698 13.7244 10.7386 13.361C9.97228 12.8332 8.97101 12.2968 8.21495 11.9767V10.5145L8.25582 10.4799Z"
        fill="#D3AF37"
      />
      <path
        d="M8.25582 12.6758L11.8318 14.7696L15.4077 12.6758L15.4486 12.7172V14.1075C14.6925 14.4054 13.6913 14.9268 12.925 15.4316C12.3937 15.7792 11.985 16.1185 11.8318 16.3916C11.6887 16.1268 11.2698 15.7792 10.7386 15.4316C9.97228 14.9268 8.97101 14.4137 8.21495 14.1075V12.7089L8.25582 12.6758Z"
        fill="#D3AF37"
      />
      <defs>
        <filter
          id="filter0_n_61059_6259"
          x="5.95401"
          y="5.58191"
          width="12.092"
          height="12.8364"
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
          <feMerge result="effect1_noise_61059_6259">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
        <linearGradient
          id="paint0_linear_61059_6259"
          x1="12"
          y1="3.55505"
          x2="12"
          y2="20.4451"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AE7E00" />
          <stop offset="1" stop-color="#483400" stop-opacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
