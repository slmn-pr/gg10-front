export default function TimeIcon({ color = '#020202' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="7" stroke={color} />
      <line
        x1="11.75"
        y1="7.25"
        x2="11.75"
        y2="12.25"
        stroke={color}
        stroke-linecap="round"
      />
      <path
        d="M11.625 12.25H11.125V13.25H11.625V12.75V12.25ZM16.875 13.25C17.1511 13.25 17.375 13.0261 17.375 12.75C17.375 12.4739 17.1511 12.25 16.875 12.25V12.75V13.25ZM11.625 12.75V13.25L16.875 13.25V12.75V12.25L11.625 12.25V12.75Z"
        fill={color}
      />
    </svg>
  );
}
