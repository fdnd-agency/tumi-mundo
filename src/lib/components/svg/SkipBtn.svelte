<script>
  export let direction = "left"; // of "right"
</script>

<svg
  width="80"
  height="80"
  viewBox="0 0 42 42"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class:rotate={direction === "right"}
>
  <g filter="url(#filter0_d_4781_1113)">
    <circle cx="13" cy="13" r="13" transform="matrix(-1 0 0 1 34 8)" fill="#9264F4"/>
  </g>
  <path d="M17.7582 20.3511C17.0926 20.7362 17.0926 21.6971 17.7582 22.0822L24.8147 26.1651C25.4814 26.5508 26.3155 26.0698 26.3155 25.2996V17.1338C26.3155 16.3636 25.4814 15.8825 24.8147 16.2682L17.7582 20.3511Z" fill="white"/>
  <rect width="1.3" height="10.8333" rx="0.65" transform="matrix(-1 0 0 1 17.1001 15.8)" fill="white"/>
  <defs>
    <filter id="filter0_d_4781_1113" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4781_1113"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4781_1113" result="shape"/>
    </filter>
  </defs>
</svg>

<style>
  .rotate {
    transform: rotate(180deg);
  }
</style>
