
https://github.com/shubhamjain/svg-loader

SVG Loader

SVGs from an external source can be rendered with <img> tags, but this has multiple drawbacks: you can't customize the fill or stroke colors, use CSS variables, or use focus/hover states.

SVG Loader is a simple JS library that fetches SVGs using XHR and injects the SVG code in the tag's place. This lets you use externally stored SVGs (e.g, on CDN) just like inline SVGs.

It's super-tiny, works with all frameworks, requires no additional code except the initial script load, and has minimal to no impact on performance.

SVG Loader is designed to be plug and play. Hence, all you need to is to include the loader JS anywhere in your code, and then start using the code like this:

<!-- 
    Include this script anywhere in your code, preferably <HEAD> so
    icons can be fetched faster.
-->
<script type="text/javascript" src="svg-loader.min.js" async></script>

<!-- Use an external SVG -->
<svg
  data-src="https://unpkg.com/@mdi/svg@5.9.55/svg/star.svg"
  width="50"
  height="50"
  fill="red"></svg>
<svg
  data-src="https://unpkg.com/@mdi/svg@5.9.55/svg/heart.svg"
  width="50"
  height="50"
  fill="red"></svg>

<svg
  data-src="https://unpkg.com/@mdi/svg@5.9.55/svg/cog.svg"
  width="50"
  height="50"
  fill="currentColor"
  style="color: purple;"></svg>
See Here →

Note: Because SVG Loader fetches file using XHRs, it's limited by CORS policies of the browser. So you need to ensure that correct Access-Control-Allow-Origin headers are sent with the file being served or that the files are hosted on your own domain.
(In other words, you will need a web server even if you are running this on your laptop ￼￼) ￼
