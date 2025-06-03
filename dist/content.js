(function () {
  'use strict';var __vite_style__ = document.createElement('style');__vite_style__.textContent = "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #343538; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #757575; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #757575; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\n.ext-absolute {\n  position: absolute;\n}\n.ext-relative {\n  position: relative;\n}\n.ext-bottom-\\[-2px\\] {\n  bottom: -2px;\n}\n.ext-top-0 {\n  top: 0px;\n}\n.ext-z-\\[100\\] {\n  z-index: 100;\n}\n.ext-my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.ext-mb-\\[15px\\] {\n  margin-bottom: 15px;\n}\n.ext-mb-\\[4px\\] {\n  margin-bottom: 4px;\n}\n.ext-mb-\\[6px\\] {\n  margin-bottom: 6px;\n}\n.ext-ml-2 {\n  margin-left: 0.5rem;\n}\n.ext-mt-4 {\n  margin-top: 1rem;\n}\n.ext-mt-\\[10px\\] {\n  margin-top: 10px;\n}\n.ext-mt-\\[14px\\] {\n  margin-top: 14px;\n}\n.ext-mt-\\[6px\\] {\n  margin-top: 6px;\n}\n.ext-flex {\n  display: flex;\n}\n.ext-h-4 {\n  height: 1rem;\n}\n.ext-h-\\[12px\\] {\n  height: 12px;\n}\n.ext-h-\\[1px\\] {\n  height: 1px;\n}\n.ext-h-\\[351px\\] {\n  height: 351px;\n}\n.ext-min-h-\\[343px\\] {\n  min-height: 343px;\n}\n.ext-w-4 {\n  width: 1rem;\n}\n.ext-w-\\[10px\\] {\n  width: 10px;\n}\n.ext-w-\\[12px\\] {\n  width: 12px;\n}\n.ext-w-\\[328px\\] {\n  width: 328px;\n}\n.ext-w-\\[56px\\] {\n  width: 56px;\n}\n.ext-w-\\[5px\\] {\n  width: 5px;\n}\n.ext-w-full {\n  width: 100%;\n}\n.ext-min-w-\\[312px\\] {\n  min-width: 312px;\n}\n.ext-max-w-\\[312px\\] {\n  max-width: 312px;\n}\n.ext-flex-1 {\n  flex: 1 1 0%;\n}\n@keyframes ext-pulseOnce {\n\n  0%, 100% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.1;\n  }\n}\n.ext-animate-pulse-once {\n  animation: ext-pulseOnce 1s ease-in-out;\n}\n.ext-appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.ext-flex-col {\n  flex-direction: column;\n}\n.ext-items-start {\n  align-items: flex-start;\n}\n.ext-items-end {\n  align-items: flex-end;\n}\n.ext-items-center {\n  align-items: center;\n}\n.ext-items-baseline {\n  align-items: baseline;\n}\n.ext-justify-end {\n  justify-content: flex-end;\n}\n.ext-justify-center {\n  justify-content: center;\n}\n.ext-justify-between {\n  justify-content: space-between;\n}\n.ext-gap-1 {\n  gap: 0.25rem;\n}\n.ext-gap-2 {\n  gap: 0.5rem;\n}\n.ext-gap-4 {\n  gap: 1rem;\n}\n.ext-gap-\\[10px\\] {\n  gap: 10px;\n}\n.ext-gap-\\[7px\\] {\n  gap: 7px;\n}\n.ext-whitespace-nowrap {\n  white-space: nowrap;\n}\n.ext-rounded-\\[5px\\] {\n  border-radius: 5px;\n}\n.ext-rounded-full {\n  border-radius: 9999px;\n}\n.ext-rounded-lg {\n  border-radius: 0.5rem;\n}\n.ext-rounded-md {\n  border-radius: 0.375rem;\n}\n.ext-border {\n  border-width: 1px;\n}\n.ext-border-4 {\n  border-width: 4px;\n}\n.ext-border-r {\n  border-right-width: 1px;\n}\n.ext-border-dotted {\n  border-style: dotted;\n}\n.ext-border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(52 53 56 / var(--tw-border-opacity, 1));\n}\n.ext-border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(117 117 117 / var(--tw-border-opacity, 1));\n}\n.ext-border-gray-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(136 136 138 / var(--tw-border-opacity, 1));\n}\n.ext-border-green-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(99 215 189 / var(--tw-border-opacity, 1));\n}\n.ext-border-green-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(22 101 52 / var(--tw-border-opacity, 1));\n}\n.ext-border-red-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 92 92 / var(--tw-border-opacity, 1));\n}\n.ext-bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(16 17 21 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-blue-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(35 36 40 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-blue-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 64 175 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(11 19 15 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(52 53 56 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-green-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(13 51 47 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(87 191 168 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(99 215 189 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(147 51 234 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-red-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(46 15 15 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 92 92 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n.ext-bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.ext-p-1 {\n  padding: 0.25rem;\n}\n.ext-p-2 {\n  padding: 0.5rem;\n}\n.ext-px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.ext-px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.ext-px-\\[11px\\] {\n  padding-left: 11px;\n  padding-right: 11px;\n}\n.ext-px-\\[15px\\] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.ext-px-\\[20px\\] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.ext-py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.ext-py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.ext-py-\\[10px\\] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.ext-py-\\[6px\\] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.ext-py-\\[9px\\] {\n  padding-top: 9px;\n  padding-bottom: 9px;\n}\n.ext-pr-1 {\n  padding-right: 0.25rem;\n}\n.ext-pt-1 {\n  padding-top: 0.25rem;\n}\n.ext-text-center {\n  text-align: center;\n}\n.ext-text-\\[10px\\] {\n  font-size: 10px;\n}\n.ext-text-\\[9px\\] {\n  font-size: 9px;\n}\n.ext-text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.ext-text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.ext-text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.ext-font-bold {\n  font-weight: 700;\n}\n.ext-font-medium {\n  font-weight: 500;\n}\n.ext-text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(72 72 72 / var(--tw-text-opacity, 1));\n}\n.ext-text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(117 117 117 / var(--tw-text-opacity, 1));\n}\n.ext-text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1));\n}\n.ext-text-green-300 {\n  --tw-text-opacity: 1;\n  color: rgb(136 136 138 / var(--tw-text-opacity, 1));\n}\n.ext-text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(99 215 189 / var(--tw-text-opacity, 1));\n}\n.ext-text-purple-500 {\n  --tw-text-opacity: 1;\n  color: rgb(135 80 231 / var(--tw-text-opacity, 1));\n}\n.ext-text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.ext-text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.ext-placeholder-gray-400::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(117 117 117 / var(--tw-placeholder-opacity, 1));\n}\n.ext-placeholder-gray-400::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(117 117 117 / var(--tw-placeholder-opacity, 1));\n}\n.ext-opacity-25 {\n  opacity: 0.25;\n}\n.ext-shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.ext-shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.ext-shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.ext-transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.ext-transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.ext-duration-200 {\n  transition-duration: 200ms;\n}\n.ext-ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.hover\\:ext-bg-green-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(99 215 189 / var(--tw-bg-opacity, 1));\n}\n.hover\\:ext-bg-purple-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(126 34 206 / var(--tw-bg-opacity, 1));\n}\n.hover\\:ext-bg-red-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n.focus\\:ext-border-transparent:focus {\n  border-color: transparent;\n}\n.focus\\:ext-bg-black:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.focus\\:ext-text-green-400:focus {\n  --tw-text-opacity: 1;\n  color: rgb(87 191 168 / var(--tw-text-opacity, 1));\n}\n.focus\\:ext-outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ext-ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ext-ring-indigo-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity, 1));\n}\n.focus\\:ext-ring-purple-600:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 51 234 / var(--tw-ring-opacity, 1));\n}\n.focus\\:ext-ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n.focus\\:ext-ring-offset-indigo-200:focus {\n  --tw-ring-offset-color: #c7d2fe;\n}\n.disabled\\:ext-cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n.disabled\\:ext-bg-black:disabled {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.disabled\\:ext-bg-gray-300:disabled {\n  --tw-bg-opacity: 1;\n  background-color: rgb(72 72 72 / var(--tw-bg-opacity, 1));\n}\n.disabled\\:ext-text-gray-500:disabled {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n@media (prefers-color-scheme: dark) {\n\n  .dark\\:ext-text-gray-50 {\n    --tw-text-opacity: 1;\n    color: rgb(249 250 251 / var(--tw-text-opacity, 1));\n  }\n}\n/*$vite$:1*/";document.head.appendChild(__vite_style__);

  const sharedConfig = {
    context: undefined,
    registry: undefined,
    effects: undefined,
    done: false,
    getContextId() {
      return getContextId(this.context.count);
    },
    getNextContextId() {
      return getContextId(this.context.count++);
    }
  };
  function getContextId(count) {
    const num = String(count),
      len = num.length - 1;
    return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
  }
  function setHydrateContext(context) {
    sharedConfig.context = context;
  }

  const IS_DEV = false;
  const equalFn = (a, b) => a === b;
  const $PROXY = Symbol("solid-proxy");
  const SUPPORTS_PROXY = typeof Proxy === "function";
  const $TRACK = Symbol("solid-track");
  const signalOptions = {
    equals: equalFn
  };
  let runEffects = runQueue;
  const STALE = 1;
  const PENDING = 2;
  const UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  };
  var Owner = null;
  let Transition = null;
  let ExternalSourceConfig = null;
  let Listener = null;
  let Updates = null;
  let Effects = null;
  let ExecCount = 0;
  function createRoot(fn, detachedOwner) {
    const listener = Listener,
      owner = Owner,
      unowned = fn.length === 0,
      current = detachedOwner === undefined ? owner : detachedOwner,
      root = unowned ? UNOWNED : {
        owned: null,
        cleanups: null,
        context: current ? current.context : null,
        owner: current
      },
      updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
    Owner = root;
    Listener = null;
    try {
      return runUpdates(updateFn, true);
    } finally {
      Listener = listener;
      Owner = owner;
    }
  }
  function createSignal(value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s = {
      value,
      observers: null,
      observerSlots: null,
      comparator: options.equals || undefined
    };
    const setter = value => {
      if (typeof value === "function") {
        value = value(s.value);
      }
      return writeSignal(s, value);
    };
    return [readSignal.bind(s), setter];
  }
  function createComputed(fn, value, options) {
    const c = createComputation(fn, value, true, STALE);
    updateComputation(c);
  }
  function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, false, STALE);
    updateComputation(c);
  }
  function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, false, STALE);
    if (!options || !options.render) c.user = true;
    Effects ? Effects.push(c) : updateComputation(c);
  }
  function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c = createComputation(fn, value, true, 0);
    c.observers = null;
    c.observerSlots = null;
    c.comparator = options.equals || undefined;
    updateComputation(c);
    return readSignal.bind(c);
  }
  function batch(fn) {
    return runUpdates(fn, false);
  }
  function untrack(fn) {
    if (Listener === null) return fn();
    const listener = Listener;
    Listener = null;
    try {
      if (ExternalSourceConfig) ;
      return fn();
    } finally {
      Listener = listener;
    }
  }
  function on(deps, fn, options) {
    const isArray = Array.isArray(deps);
    let prevInput;
    let defer = options && options.defer;
    return prevValue => {
      let input;
      if (isArray) {
        input = Array(deps.length);
        for (let i = 0; i < deps.length; i++) input[i] = deps[i]();
      } else input = deps();
      if (defer) {
        defer = false;
        return prevValue;
      }
      const result = untrack(() => fn(input, prevInput, prevValue));
      prevInput = input;
      return result;
    };
  }
  function onMount(fn) {
    createEffect(() => untrack(fn));
  }
  function onCleanup(fn) {
    if (Owner === null) ;else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
    return fn;
  }
  function getListener() {
    return Listener;
  }
  function getOwner() {
    return Owner;
  }
  function runWithOwner(o, fn) {
    const prev = Owner;
    const prevListener = Listener;
    Owner = o;
    Listener = null;
    try {
      return runUpdates(fn, true);
    } catch (err) {
      handleError(err);
    } finally {
      Owner = prev;
      Listener = prevListener;
    }
  }
  function createContext(defaultValue, options) {
    const id = Symbol("context");
    return {
      id,
      Provider: createProvider(id),
      defaultValue
    };
  }
  function useContext(context) {
    let value;
    return Owner && Owner.context && (value = Owner.context[context.id]) !== undefined ? value : context.defaultValue;
  }
  function children(fn) {
    const children = createMemo(fn);
    const memo = createMemo(() => resolveChildren(children()));
    memo.toArray = () => {
      const c = memo();
      return Array.isArray(c) ? c : c != null ? [c] : [];
    };
    return memo;
  }
  function readSignal() {
    if (this.sources && (this.state)) {
      if ((this.state) === STALE) updateComputation(this);else {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(this), false);
        Updates = updates;
      }
    }
    if (Listener) {
      const sSlot = this.observers ? this.observers.length : 0;
      if (!Listener.sources) {
        Listener.sources = [this];
        Listener.sourceSlots = [sSlot];
      } else {
        Listener.sources.push(this);
        Listener.sourceSlots.push(sSlot);
      }
      if (!this.observers) {
        this.observers = [Listener];
        this.observerSlots = [Listener.sources.length - 1];
      } else {
        this.observers.push(Listener);
        this.observerSlots.push(Listener.sources.length - 1);
      }
    }
    return this.value;
  }
  function writeSignal(node, value, isComp) {
    let current = node.value;
    if (!node.comparator || !node.comparator(current, value)) {
      node.value = value;
      if (node.observers && node.observers.length) {
        runUpdates(() => {
          for (let i = 0; i < node.observers.length; i += 1) {
            const o = node.observers[i];
            const TransitionRunning = Transition && Transition.running;
            if (TransitionRunning && Transition.disposed.has(o)) ;
            if (TransitionRunning ? !o.tState : !o.state) {
              if (o.pure) Updates.push(o);else Effects.push(o);
              if (o.observers) markDownstream(o);
            }
            if (!TransitionRunning) o.state = STALE;
          }
          if (Updates.length > 10e5) {
            Updates = [];
            if (IS_DEV) ;
            throw new Error();
          }
        }, false);
      }
    }
    return value;
  }
  function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const time = ExecCount;
    runComputation(node, node.value, time);
  }
  function runComputation(node, value, time) {
    let nextValue;
    const owner = Owner,
      listener = Listener;
    Listener = Owner = node;
    try {
      nextValue = node.fn(value);
    } catch (err) {
      if (node.pure) {
        {
          node.state = STALE;
          node.owned && node.owned.forEach(cleanNode);
          node.owned = null;
        }
      }
      node.updatedAt = time + 1;
      return handleError(err);
    } finally {
      Listener = listener;
      Owner = owner;
    }
    if (!node.updatedAt || node.updatedAt <= time) {
      if (node.updatedAt != null && "observers" in node) {
        writeSignal(node, nextValue);
      } else node.value = nextValue;
      node.updatedAt = time;
    }
  }
  function createComputation(fn, init, pure, state = STALE, options) {
    const c = {
      fn,
      state: state,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: init,
      owner: Owner,
      context: Owner ? Owner.context : null,
      pure
    };
    if (Owner === null) ;else if (Owner !== UNOWNED) {
      {
        if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
      }
    }
    return c;
  }
  function runTop(node) {
    if ((node.state) === 0) return;
    if ((node.state) === PENDING) return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
    const ancestors = [node];
    while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
      if (node.state) ancestors.push(node);
    }
    for (let i = ancestors.length - 1; i >= 0; i--) {
      node = ancestors[i];
      if ((node.state) === STALE) {
        updateComputation(node);
      } else if ((node.state) === PENDING) {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(node, ancestors[0]), false);
        Updates = updates;
      }
    }
  }
  function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = false;
    if (!init) Updates = [];
    if (Effects) wait = true;else Effects = [];
    ExecCount++;
    try {
      const res = fn();
      completeUpdates(wait);
      return res;
    } catch (err) {
      if (!wait) Effects = null;
      Updates = null;
      handleError(err);
    }
  }
  function completeUpdates(wait) {
    if (Updates) {
      runQueue(Updates);
      Updates = null;
    }
    if (wait) return;
    const e = Effects;
    Effects = null;
    if (e.length) runUpdates(() => runEffects(e), false);
  }
  function runQueue(queue) {
    for (let i = 0; i < queue.length; i++) runTop(queue[i]);
  }
  function runUserEffects(queue) {
    let i,
      userLength = 0;
    for (i = 0; i < queue.length; i++) {
      const e = queue[i];
      if (!e.user) runTop(e);else queue[userLength++] = e;
    }
    if (sharedConfig.context) {
      if (sharedConfig.count) {
        sharedConfig.effects || (sharedConfig.effects = []);
        sharedConfig.effects.push(...queue.slice(0, userLength));
        return;
      }
      setHydrateContext();
    }
    if (sharedConfig.effects && (!sharedConfig.count)) {
      queue = [...sharedConfig.effects, ...queue];
      userLength += sharedConfig.effects.length;
      delete sharedConfig.effects;
    }
    for (i = 0; i < userLength; i++) runTop(queue[i]);
  }
  function lookUpstream(node, ignore) {
    node.state = 0;
    for (let i = 0; i < node.sources.length; i += 1) {
      const source = node.sources[i];
      if (source.sources) {
        const state = source.state;
        if (state === STALE) {
          if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
        } else if (state === PENDING) lookUpstream(source, ignore);
      }
    }
  }
  function markDownstream(node) {
    for (let i = 0; i < node.observers.length; i += 1) {
      const o = node.observers[i];
      if (!o.state) {
        o.state = PENDING;
        if (o.pure) Updates.push(o);else Effects.push(o);
        o.observers && markDownstream(o);
      }
    }
  }
  function cleanNode(node) {
    let i;
    if (node.sources) {
      while (node.sources.length) {
        const source = node.sources.pop(),
          index = node.sourceSlots.pop(),
          obs = source.observers;
        if (obs && obs.length) {
          const n = obs.pop(),
            s = source.observerSlots.pop();
          if (index < obs.length) {
            n.sourceSlots[s] = index;
            obs[index] = n;
            source.observerSlots[index] = s;
          }
        }
      }
    }
    if (node.tOwned) {
      for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
      delete node.tOwned;
    }
    if (node.owned) {
      for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
      node.owned = null;
    }
    if (node.cleanups) {
      for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
      node.cleanups = null;
    }
    node.state = 0;
  }
  function castError(err) {
    if (err instanceof Error) return err;
    return new Error(typeof err === "string" ? err : "Unknown error", {
      cause: err
    });
  }
  function handleError(err, owner = Owner) {
    const error = castError(err);
    throw error;
  }
  function resolveChildren(children) {
    if (typeof children === "function" && !children.length) return resolveChildren(children());
    if (Array.isArray(children)) {
      const results = [];
      for (let i = 0; i < children.length; i++) {
        const result = resolveChildren(children[i]);
        Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
      }
      return results;
    }
    return children;
  }
  function createProvider(id, options) {
    return function provider(props) {
      let res;
      createRenderEffect(() => res = untrack(() => {
        Owner.context = {
          ...Owner.context,
          [id]: props.value
        };
        return children(() => props.children);
      }), undefined);
      return res;
    };
  }

  const FALLBACK = Symbol("fallback");
  function dispose(d) {
    for (let i = 0; i < d.length; i++) d[i]();
  }
  function mapArray(list, mapFn, options = {}) {
    let items = [],
      mapped = [],
      disposers = [],
      len = 0,
      indexes = mapFn.length > 1 ? [] : null;
    onCleanup(() => dispose(disposers));
    return () => {
      let newItems = list() || [],
        newLen = newItems.length,
        i,
        j;
      newItems[$TRACK];
      return untrack(() => {
        let newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
        if (newLen === 0) {
          if (len !== 0) {
            dispose(disposers);
            disposers = [];
            items = [];
            mapped = [];
            len = 0;
            indexes && (indexes = []);
          }
          if (options.fallback) {
            items = [FALLBACK];
            mapped[0] = createRoot(disposer => {
              disposers[0] = disposer;
              return options.fallback();
            });
            len = 1;
          }
        }
        else if (len === 0) {
          mapped = new Array(newLen);
          for (j = 0; j < newLen; j++) {
            items[j] = newItems[j];
            mapped[j] = createRoot(mapper);
          }
          len = newLen;
        } else {
          temp = new Array(newLen);
          tempdisposers = new Array(newLen);
          indexes && (tempIndexes = new Array(newLen));
          for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
          for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
            temp[newEnd] = mapped[end];
            tempdisposers[newEnd] = disposers[end];
            indexes && (tempIndexes[newEnd] = indexes[end]);
          }
          newIndices = new Map();
          newIndicesNext = new Array(newEnd + 1);
          for (j = newEnd; j >= start; j--) {
            item = newItems[j];
            i = newIndices.get(item);
            newIndicesNext[j] = i === undefined ? -1 : i;
            newIndices.set(item, j);
          }
          for (i = start; i <= end; i++) {
            item = items[i];
            j = newIndices.get(item);
            if (j !== undefined && j !== -1) {
              temp[j] = mapped[i];
              tempdisposers[j] = disposers[i];
              indexes && (tempIndexes[j] = indexes[i]);
              j = newIndicesNext[j];
              newIndices.set(item, j);
            } else disposers[i]();
          }
          for (j = start; j < newLen; j++) {
            if (j in temp) {
              mapped[j] = temp[j];
              disposers[j] = tempdisposers[j];
              if (indexes) {
                indexes[j] = tempIndexes[j];
                indexes[j](j);
              }
            } else mapped[j] = createRoot(mapper);
          }
          mapped = mapped.slice(0, len = newLen);
          items = newItems.slice(0);
        }
        return mapped;
      });
      function mapper(disposer) {
        disposers[j] = disposer;
        if (indexes) {
          const [s, set] = createSignal(j);
          indexes[j] = set;
          return mapFn(newItems[j], s);
        }
        return mapFn(newItems[j]);
      }
    };
  }
  function createComponent(Comp, props) {
    return untrack(() => Comp(props || {}));
  }
  function trueFn() {
    return true;
  }
  const propTraps = {
    get(_, property, receiver) {
      if (property === $PROXY) return receiver;
      return _.get(property);
    },
    has(_, property) {
      if (property === $PROXY) return true;
      return _.has(property);
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor(_, property) {
      return {
        configurable: true,
        enumerable: true,
        get() {
          return _.get(property);
        },
        set: trueFn,
        deleteProperty: trueFn
      };
    },
    ownKeys(_) {
      return _.keys();
    }
  };
  function resolveSource(s) {
    return !(s = typeof s === "function" ? s() : s) ? {} : s;
  }
  function resolveSources() {
    for (let i = 0, length = this.length; i < length; ++i) {
      const v = this[i]();
      if (v !== undefined) return v;
    }
  }
  function mergeProps(...sources) {
    let proxy = false;
    for (let i = 0; i < sources.length; i++) {
      const s = sources[i];
      proxy = proxy || !!s && $PROXY in s;
      sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
    }
    if (SUPPORTS_PROXY && proxy) {
      return new Proxy({
        get(property) {
          for (let i = sources.length - 1; i >= 0; i--) {
            const v = resolveSource(sources[i])[property];
            if (v !== undefined) return v;
          }
        },
        has(property) {
          for (let i = sources.length - 1; i >= 0; i--) {
            if (property in resolveSource(sources[i])) return true;
          }
          return false;
        },
        keys() {
          const keys = [];
          for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
          return [...new Set(keys)];
        }
      }, propTraps);
    }
    const sourcesMap = {};
    const defined = Object.create(null);
    for (let i = sources.length - 1; i >= 0; i--) {
      const source = sources[i];
      if (!source) continue;
      const sourceKeys = Object.getOwnPropertyNames(source);
      for (let i = sourceKeys.length - 1; i >= 0; i--) {
        const key = sourceKeys[i];
        if (key === "__proto__" || key === "constructor") continue;
        const desc = Object.getOwnPropertyDescriptor(source, key);
        if (!defined[key]) {
          defined[key] = desc.get ? {
            enumerable: true,
            configurable: true,
            get: resolveSources.bind(sourcesMap[key] = [desc.get.bind(source)])
          } : desc.value !== undefined ? desc : undefined;
        } else {
          const sources = sourcesMap[key];
          if (sources) {
            if (desc.get) sources.push(desc.get.bind(source));else if (desc.value !== undefined) sources.push(() => desc.value);
          }
        }
      }
    }
    const target = {};
    const definedKeys = Object.keys(defined);
    for (let i = definedKeys.length - 1; i >= 0; i--) {
      const key = definedKeys[i],
        desc = defined[key];
      if (desc && desc.get) Object.defineProperty(target, key, desc);else target[key] = desc ? desc.value : undefined;
    }
    return target;
  }
  function splitProps(props, ...keys) {
    if (SUPPORTS_PROXY && $PROXY in props) {
      const blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
      const res = keys.map(k => {
        return new Proxy({
          get(property) {
            return k.includes(property) ? props[property] : undefined;
          },
          has(property) {
            return k.includes(property) && property in props;
          },
          keys() {
            return k.filter(property => property in props);
          }
        }, propTraps);
      });
      res.push(new Proxy({
        get(property) {
          return blocked.has(property) ? undefined : props[property];
        },
        has(property) {
          return blocked.has(property) ? false : property in props;
        },
        keys() {
          return Object.keys(props).filter(k => !blocked.has(k));
        }
      }, propTraps));
      return res;
    }
    const otherObject = {};
    const objects = keys.map(() => ({}));
    for (const propName of Object.getOwnPropertyNames(props)) {
      const desc = Object.getOwnPropertyDescriptor(props, propName);
      const isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
      let blocked = false;
      let objectIndex = 0;
      for (const k of keys) {
        if (k.includes(propName)) {
          blocked = true;
          isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
        }
        ++objectIndex;
      }
      if (!blocked) {
        isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
      }
    }
    return [...objects, otherObject];
  }
  let counter = 0;
  function createUniqueId() {
    const ctx = sharedConfig.context;
    return ctx ? sharedConfig.getNextContextId() : `cl-${counter++}`;
  }

  const narrowedError = name => `Stale read from <${name}>.`;
  function For(props) {
    const fallback = "fallback" in props && {
      fallback: () => props.fallback
    };
    return createMemo(mapArray(() => props.each, props.children, fallback || undefined));
  }
  function Show(props) {
    const keyed = props.keyed;
    const conditionValue = createMemo(() => props.when, undefined, undefined);
    const condition = keyed ? conditionValue : createMemo(conditionValue, undefined, {
      equals: (a, b) => !a === !b
    });
    return createMemo(() => {
      const c = condition();
      if (c) {
        const child = props.children;
        const fn = typeof child === "function" && child.length > 0;
        return fn ? untrack(() => child(keyed ? c : () => {
          if (!untrack(condition)) throw narrowedError("Show");
          return conditionValue();
        })) : child;
      }
      return props.fallback;
    }, undefined, undefined);
  }

  const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
  const Properties = /*#__PURE__*/new Set(["className", "value", "readOnly", "noValidate", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
  const ChildProperties = /*#__PURE__*/new Set(["innerHTML", "textContent", "innerText", "children"]);
  const Aliases = /*#__PURE__*/Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for"
  });
  const PropAliases = /*#__PURE__*/Object.assign(Object.create(null), {
    class: "className",
    novalidate: {
      $: "noValidate",
      FORM: 1
    },
    formnovalidate: {
      $: "formNoValidate",
      BUTTON: 1,
      INPUT: 1
    },
    ismap: {
      $: "isMap",
      IMG: 1
    },
    nomodule: {
      $: "noModule",
      SCRIPT: 1
    },
    playsinline: {
      $: "playsInline",
      VIDEO: 1
    },
    readonly: {
      $: "readOnly",
      INPUT: 1,
      TEXTAREA: 1
    }
  });
  function getPropAlias(prop, tagName) {
    const a = PropAliases[prop];
    return typeof a === "object" ? a[tagName] ? a["$"] : undefined : a;
  }
  const DelegatedEvents = /*#__PURE__*/new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
  const SVGElements = /*#__PURE__*/new Set([
  "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect",
  "set", "stop",
  "svg", "switch", "symbol", "text", "textPath",
  "tref", "tspan", "use", "view", "vkern"]);
  const SVGNamespace = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
  };

  const memo = fn => createMemo(() => fn());

  function reconcileArrays(parentNode, a, b) {
    let bLength = b.length,
      aEnd = a.length,
      bEnd = bLength,
      aStart = 0,
      bStart = 0,
      after = a[aEnd - 1].nextSibling,
      map = null;
    while (aStart < aEnd || bStart < bEnd) {
      if (a[aStart] === b[bStart]) {
        aStart++;
        bStart++;
        continue;
      }
      while (a[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      }
      if (aEnd === aStart) {
        const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
        while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
      } else if (bEnd === bStart) {
        while (aStart < aEnd) {
          if (!map || !map.has(a[aStart])) a[aStart].remove();
          aStart++;
        }
      } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
        const node = a[--aEnd].nextSibling;
        parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
        parentNode.insertBefore(b[--bEnd], node);
        a[aEnd] = b[bEnd];
      } else {
        if (!map) {
          map = new Map();
          let i = bStart;
          while (i < bEnd) map.set(b[i], i++);
        }
        const index = map.get(a[aStart]);
        if (index != null) {
          if (bStart < index && index < bEnd) {
            let i = aStart,
              sequence = 1,
              t;
            while (++i < aEnd && i < bEnd) {
              if ((t = map.get(a[i])) == null || t !== index + sequence) break;
              sequence++;
            }
            if (sequence > index - bStart) {
              const node = a[aStart];
              while (bStart < index) parentNode.insertBefore(b[bStart++], node);
            } else parentNode.replaceChild(b[bStart++], a[aStart++]);
          } else aStart++;
        } else a[aStart++].remove();
      }
    }
  }

  const $$EVENTS = "_$DX_DELEGATE";
  function render(code, element, init, options = {}) {
    let disposer;
    createRoot(dispose => {
      disposer = dispose;
      element === document ? code() : insert(element, code(), element.firstChild ? null : undefined, init);
    }, options.owner);
    return () => {
      disposer();
      element.textContent = "";
    };
  }
  function template(html, isImportNode, isSVG, isMathML) {
    let node;
    const create = () => {
      const t = document.createElement("template");
      t.innerHTML = html;
      return t.content.firstChild;
    };
    const fn = () => (node || (node = create())).cloneNode(true);
    fn.cloneNode = fn;
    return fn;
  }
  function delegateEvents(eventNames, document = window.document) {
    const e = document[$$EVENTS] || (document[$$EVENTS] = new Set());
    for (let i = 0, l = eventNames.length; i < l; i++) {
      const name = eventNames[i];
      if (!e.has(name)) {
        e.add(name);
        document.addEventListener(name, eventHandler);
      }
    }
  }
  function setAttribute(node, name, value) {
    if (isHydrating(node)) return;
    if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
  }
  function setAttributeNS(node, namespace, name, value) {
    if (isHydrating(node)) return;
    if (value == null) node.removeAttributeNS(namespace, name);else node.setAttributeNS(namespace, name, value);
  }
  function setBoolAttribute(node, name, value) {
    if (isHydrating(node)) return;
    value ? node.setAttribute(name, "") : node.removeAttribute(name);
  }
  function className(node, value) {
    if (isHydrating(node)) return;
    if (value == null) node.removeAttribute("class");else node.className = value;
  }
  function addEventListener(node, name, handler, delegate) {
    if (delegate) {
      if (Array.isArray(handler)) {
        node[`$$${name}`] = handler[0];
        node[`$$${name}Data`] = handler[1];
      } else node[`$$${name}`] = handler;
    } else if (Array.isArray(handler)) {
      const handlerFn = handler[0];
      node.addEventListener(name, handler[0] = e => handlerFn.call(node, handler[1], e));
    } else node.addEventListener(name, handler, typeof handler !== "function" && handler);
  }
  function classList(node, value, prev = {}) {
    const classKeys = Object.keys(value || {}),
      prevKeys = Object.keys(prev);
    let i, len;
    for (i = 0, len = prevKeys.length; i < len; i++) {
      const key = prevKeys[i];
      if (!key || key === "undefined" || value[key]) continue;
      toggleClassKey(node, key, false);
      delete prev[key];
    }
    for (i = 0, len = classKeys.length; i < len; i++) {
      const key = classKeys[i],
        classValue = !!value[key];
      if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
      toggleClassKey(node, key, true);
      prev[key] = classValue;
    }
    return prev;
  }
  function style(node, value, prev) {
    if (!value) return prev ? setAttribute(node, "style") : value;
    const nodeStyle = node.style;
    if (typeof value === "string") return nodeStyle.cssText = value;
    typeof prev === "string" && (nodeStyle.cssText = prev = undefined);
    prev || (prev = {});
    value || (value = {});
    let v, s;
    for (s in prev) {
      value[s] == null && nodeStyle.removeProperty(s);
      delete prev[s];
    }
    for (s in value) {
      v = value[s];
      if (v !== prev[s]) {
        nodeStyle.setProperty(s, v);
        prev[s] = v;
      }
    }
    return prev;
  }
  function spread(node, props = {}, isSVG, skipChildren) {
    const prevProps = {};
    if (!skipChildren) {
      createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
    }
    createRenderEffect(() => typeof props.ref === "function" && use(props.ref, node));
    createRenderEffect(() => assign(node, props, isSVG, true, prevProps, true));
    return prevProps;
  }
  function use(fn, element, arg) {
    return untrack(() => fn(element, arg));
  }
  function insert(parent, accessor, marker, initial) {
    if (marker !== undefined && !initial) initial = [];
    if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
    createRenderEffect(current => insertExpression(parent, accessor(), current, marker), initial);
  }
  function assign(node, props, isSVG, skipChildren, prevProps = {}, skipRef = false) {
    props || (props = {});
    for (const prop in prevProps) {
      if (!(prop in props)) {
        if (prop === "children") continue;
        prevProps[prop] = assignProp(node, prop, null, prevProps[prop], isSVG, skipRef, props);
      }
    }
    for (const prop in props) {
      if (prop === "children") {
        continue;
      }
      const value = props[prop];
      prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG, skipRef, props);
    }
  }
  function getNextElement(template) {
    let node,
      key,
      hydrating = isHydrating();
    if (!hydrating || !(node = sharedConfig.registry.get(key = getHydrationKey()))) {
      return template();
    }
    if (sharedConfig.completed) sharedConfig.completed.add(node);
    sharedConfig.registry.delete(key);
    return node;
  }
  function isHydrating(node) {
    return !!sharedConfig.context && true && (!node || node.isConnected);
  }
  function toPropertyName(name) {
    return name.toLowerCase().replace(/-([a-z])/g, (_, w) => w.toUpperCase());
  }
  function toggleClassKey(node, key, value) {
    const classNames = key.trim().split(/\s+/);
    for (let i = 0, nameLen = classNames.length; i < nameLen; i++) node.classList.toggle(classNames[i], value);
  }
  function assignProp(node, prop, value, prev, isSVG, skipRef, props) {
    let isCE, isProp, isChildProp, propAlias, forceProp;
    if (prop === "style") return style(node, value, prev);
    if (prop === "classList") return classList(node, value, prev);
    if (value === prev) return prev;
    if (prop === "ref") {
      if (!skipRef) value(node);
    } else if (prop.slice(0, 3) === "on:") {
      const e = prop.slice(3);
      prev && node.removeEventListener(e, prev, typeof prev !== "function" && prev);
      value && node.addEventListener(e, value, typeof value !== "function" && value);
    } else if (prop.slice(0, 10) === "oncapture:") {
      const e = prop.slice(10);
      prev && node.removeEventListener(e, prev, true);
      value && node.addEventListener(e, value, true);
    } else if (prop.slice(0, 2) === "on") {
      const name = prop.slice(2).toLowerCase();
      const delegate = DelegatedEvents.has(name);
      if (!delegate && prev) {
        const h = Array.isArray(prev) ? prev[0] : prev;
        node.removeEventListener(name, h);
      }
      if (delegate || value) {
        addEventListener(node, name, value, delegate);
        delegate && delegateEvents([name]);
      }
    } else if (prop.slice(0, 5) === "attr:") {
      setAttribute(node, prop.slice(5), value);
    } else if (prop.slice(0, 5) === "bool:") {
      setBoolAttribute(node, prop.slice(5), value);
    } else if ((forceProp = prop.slice(0, 5) === "prop:") || (isChildProp = ChildProperties.has(prop)) || !isSVG && ((propAlias = getPropAlias(prop, node.tagName)) || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-") || "is" in props)) {
      if (forceProp) {
        prop = prop.slice(5);
        isProp = true;
      } else if (isHydrating(node)) return value;
      if (prop === "class" || prop === "className") className(node, value);else if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;else node[propAlias || prop] = value;
    } else {
      const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
      if (ns) setAttributeNS(node, ns, prop, value);else setAttribute(node, Aliases[prop] || prop, value);
    }
    return value;
  }
  function eventHandler(e) {
    let node = e.target;
    const key = `$$${e.type}`;
    const oriTarget = e.target;
    const oriCurrentTarget = e.currentTarget;
    const retarget = value => Object.defineProperty(e, "target", {
      configurable: true,
      value
    });
    const handleNode = () => {
      const handler = node[key];
      if (handler && !node.disabled) {
        const data = node[`${key}Data`];
        data !== undefined ? handler.call(node, data, e) : handler.call(node, e);
        if (e.cancelBubble) return;
      }
      node.host && typeof node.host !== "string" && !node.host._$host && node.contains(e.target) && retarget(node.host);
      return true;
    };
    const walkUpTree = () => {
      while (handleNode() && (node = node._$host || node.parentNode || node.host));
    };
    Object.defineProperty(e, "currentTarget", {
      configurable: true,
      get() {
        return node || document;
      }
    });
    if (e.composedPath) {
      const path = e.composedPath();
      retarget(path[0]);
      for (let i = 0; i < path.length - 2; i++) {
        node = path[i];
        if (!handleNode()) break;
        if (node._$host) {
          node = node._$host;
          walkUpTree();
          break;
        }
        if (node.parentNode === oriCurrentTarget) {
          break;
        }
      }
    }
    else walkUpTree();
    retarget(oriTarget);
  }
  function insertExpression(parent, value, current, marker, unwrapArray) {
    const hydrating = isHydrating(parent);
    if (hydrating) {
      !current && (current = [...parent.childNodes]);
      let cleaned = [];
      for (let i = 0; i < current.length; i++) {
        const node = current[i];
        if (node.nodeType === 8 && node.data.slice(0, 2) === "!$") node.remove();else cleaned.push(node);
      }
      current = cleaned;
    }
    while (typeof current === "function") current = current();
    if (value === current) return current;
    const t = typeof value,
      multi = marker !== undefined;
    parent = multi && current[0] && current[0].parentNode || parent;
    if (t === "string" || t === "number") {
      if (hydrating) return current;
      if (t === "number") {
        value = value.toString();
        if (value === current) return current;
      }
      if (multi) {
        let node = current[0];
        if (node && node.nodeType === 3) {
          node.data !== value && (node.data = value);
        } else node = document.createTextNode(value);
        current = cleanChildren(parent, current, marker, node);
      } else {
        if (current !== "" && typeof current === "string") {
          current = parent.firstChild.data = value;
        } else current = parent.textContent = value;
      }
    } else if (value == null || t === "boolean") {
      if (hydrating) return current;
      current = cleanChildren(parent, current, marker);
    } else if (t === "function") {
      createRenderEffect(() => {
        let v = value();
        while (typeof v === "function") v = v();
        current = insertExpression(parent, v, current, marker);
      });
      return () => current;
    } else if (Array.isArray(value)) {
      const array = [];
      const currentArray = current && Array.isArray(current);
      if (normalizeIncomingArray(array, value, current, unwrapArray)) {
        createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
        return () => current;
      }
      if (hydrating) {
        if (!array.length) return current;
        if (marker === undefined) return current = [...parent.childNodes];
        let node = array[0];
        if (node.parentNode !== parent) return current;
        const nodes = [node];
        while ((node = node.nextSibling) !== marker) nodes.push(node);
        return current = nodes;
      }
      if (array.length === 0) {
        current = cleanChildren(parent, current, marker);
        if (multi) return current;
      } else if (currentArray) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else reconcileArrays(parent, current, array);
      } else {
        current && cleanChildren(parent);
        appendNodes(parent, array);
      }
      current = array;
    } else if (value.nodeType) {
      if (hydrating && value.parentNode) return current = multi ? [value] : value;
      if (Array.isArray(current)) {
        if (multi) return current = cleanChildren(parent, current, marker, value);
        cleanChildren(parent, current, null, value);
      } else if (current == null || current === "" || !parent.firstChild) {
        parent.appendChild(value);
      } else parent.replaceChild(value, parent.firstChild);
      current = value;
    } else ;
    return current;
  }
  function normalizeIncomingArray(normalized, array, current, unwrap) {
    let dynamic = false;
    for (let i = 0, len = array.length; i < len; i++) {
      let item = array[i],
        prev = current && current[normalized.length],
        t;
      if (item == null || item === true || item === false) ; else if ((t = typeof item) === "object" && item.nodeType) {
        normalized.push(item);
      } else if (Array.isArray(item)) {
        dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
      } else if (t === "function") {
        if (unwrap) {
          while (typeof item === "function") item = item();
          dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item], Array.isArray(prev) ? prev : [prev]) || dynamic;
        } else {
          normalized.push(item);
          dynamic = true;
        }
      } else {
        const value = String(item);
        if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);else normalized.push(document.createTextNode(value));
      }
    }
    return dynamic;
  }
  function appendNodes(parent, array, marker = null) {
    for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
  }
  function cleanChildren(parent, current, marker, replacement) {
    if (marker === undefined) return parent.textContent = "";
    const node = replacement || document.createTextNode("");
    if (current.length) {
      let inserted = false;
      for (let i = current.length - 1; i >= 0; i--) {
        const el = current[i];
        if (node !== el) {
          const isParent = el.parentNode === parent;
          if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && el.remove();
        } else inserted = true;
      }
    } else parent.insertBefore(node, marker);
    return [node];
  }
  function getHydrationKey() {
    return sharedConfig.getNextContextId();
  }
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  function createElement(tagName, isSVG = false) {
    return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
  }
  function Portal(props) {
    const {
        useShadow
      } = props,
      marker = document.createTextNode(""),
      mount = () => props.mount || document.body,
      owner = getOwner();
    let content;
    let hydrating = !!sharedConfig.context;
    createEffect(() => {
      if (hydrating) getOwner().user = hydrating = false;
      content || (content = runWithOwner(owner, () => createMemo(() => props.children)));
      const el = mount();
      if (el instanceof HTMLHeadElement) {
        const [clean, setClean] = createSignal(false);
        const cleanup = () => setClean(true);
        createRoot(dispose => insert(el, () => !clean() ? content() : dispose(), null));
        onCleanup(cleanup);
      } else {
        const container = createElement(props.isSVG ? "g" : "div", props.isSVG),
          renderRoot = useShadow && container.attachShadow ? container.attachShadow({
            mode: "open"
          }) : container;
        Object.defineProperty(container, "_$host", {
          get() {
            return marker.parentNode;
          },
          configurable: true
        });
        insert(renderRoot, content);
        el.appendChild(container);
        props.ref && props.ref(container);
        onCleanup(() => el.removeChild(container));
      }
    }, undefined, {
      render: !hydrating
    });
    return marker;
  }
  function createDynamic(component, props) {
    const cached = createMemo(component);
    return createMemo(() => {
      const component = cached();
      switch (typeof component) {
        case "function":
          return untrack(() => component(props));
        case "string":
          const isSvg = SVGElements.has(component);
          const el = sharedConfig.context ? getNextElement() : createElement(component, isSvg);
          spread(el, props, isSvg);
          return el;
      }
    });
  }
  function Dynamic(props) {
    const [, others] = splitProps(props, ["component"]);
    return createDynamic(() => props.component, others);
  }

  var TabsKeyboardDelegate = class {
    collection;
    direction;
    orientation;
    constructor(collection, direction, orientation) {
      this.collection = collection;
      this.direction = direction;
      this.orientation = orientation;
    }
    flipDirection() {
      return this.direction() === "rtl" && this.orientation() === "horizontal";
    }
    getKeyLeftOf(key) {
      if (this.flipDirection()) {
        return this.getNextKey(key);
      }
      if (this.orientation() === "horizontal") {
        return this.getPreviousKey(key);
      }
      return void 0;
    }
    getKeyRightOf(key) {
      if (this.flipDirection()) {
        return this.getPreviousKey(key);
      }
      if (this.orientation() === "horizontal") {
        return this.getNextKey(key);
      }
      return void 0;
    }
    getKeyAbove(key) {
      if (this.orientation() === "vertical") {
        return this.getPreviousKey(key);
      }
      return void 0;
    }
    getKeyBelow(key) {
      if (this.orientation() === "vertical") {
        return this.getNextKey(key);
      }
      return void 0;
    }
    getFirstKey() {
      let key = this.collection().getFirstKey();
      if (key == null) {
        return;
      }
      const item = this.collection().getItem(key);
      if (item?.disabled) {
        key = this.getNextKey(key);
      }
      return key;
    }
    getLastKey() {
      let key = this.collection().getLastKey();
      if (key == null) {
        return;
      }
      const item = this.collection().getItem(key);
      if (item?.disabled) {
        key = this.getPreviousKey(key);
      }
      return key;
    }
    getNextKey(key) {
      let nextKey = key;
      let nextItem;
      do {
        nextKey = this.collection().getKeyAfter(nextKey) ?? this.collection().getFirstKey();
        if (nextKey == null) {
          return;
        }
        nextItem = this.collection().getItem(nextKey);
        if (nextItem == null) {
          return;
        }
      } while (nextItem.disabled);
      return nextKey;
    }
    getPreviousKey(key) {
      let previousKey = key;
      let previousItem;
      do {
        previousKey = this.collection().getKeyBefore(previousKey) ?? this.collection().getLastKey();
        if (previousKey == null) {
          return;
        }
        previousItem = this.collection().getItem(previousKey);
        if (previousItem == null) {
          return;
        }
      } while (previousItem.disabled);
      return previousKey;
    }
  };

  const isNonNullable = (i) => i != null;
  const filterNonNullable = (arr) => arr.filter(isNonNullable);
  /**
   * Returns a function that will call all functions in the order they were chained with the same arguments.
   */
  function chain(callbacks) {
      return (...args) => {
          for (const callback of callbacks)
              callback && callback(...args);
      };
  }
  /**
   * Accesses the value of a MaybeAccessor
   * @example
   * ```ts
   * access("foo") // => "foo"
   * access(() => "foo") // => "foo"
   * ```
   */
  const access$1 = (v) => typeof v === "function" && !v.length ? v() : v;
  const asArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
  /** If value is a function – call it with a given arguments – otherwise get the value as is */
  function accessWith(valueOrFn, ...args) {
      return typeof valueOrFn === "function" ? valueOrFn(...args) : valueOrFn;
  }
  /**
   * Solid's `onCleanup` that doesn't warn in development if used outside of a component.
   */
  const tryOnCleanup = onCleanup;
  /**
   * Handle items removed and added to the array by diffing it by refference.
   *
   * @param current new array instance
   * @param prev previous array copy
   * @param handleAdded called once for every added item to array
   * @param handleRemoved called once for every removed from array
   */
  function handleDiffArray(current, prev, handleAdded, handleRemoved) {
      const currLength = current.length;
      const prevLength = prev.length;
      let i = 0;
      if (!prevLength) {
          for (; i < currLength; i++)
              handleAdded(current[i]);
          return;
      }
      if (!currLength) {
          for (; i < prevLength; i++)
              handleRemoved(prev[i]);
          return;
      }
      for (; i < prevLength; i++) {
          if (prev[i] !== current[i])
              break;
      }
      let prevEl;
      let currEl;
      prev = prev.slice(i);
      current = current.slice(i);
      for (prevEl of prev) {
          if (!current.includes(prevEl))
              handleRemoved(prevEl);
      }
      for (currEl of current) {
          if (!prev.includes(currEl))
              handleAdded(currEl);
      }
  }

  function makeEventListener(target, type, handler, options) {
      target.addEventListener(type, handler, options);
      return tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
  }
  function createEventListener(targets, type, handler, options) {
      const attachListeners = () => {
          asArray(access$1(targets)).forEach(el => {
              if (el)
                  asArray(access$1(type)).forEach(type => makeEventListener(el, type, handler, options));
          });
      };
      // if the target is an accessor the listeners will be added on the first effect (onMount)
      // so that when passed a jsx ref it will be availabe
      if (typeof targets === "function")
          createEffect(attachListeners);
      // if the target prop is NOT an accessor, the event listeners can be added right away
      else
          createRenderEffect(attachListeners);
  }
  // // /* TypeCheck */
  // const mouseHandler = (e: MouseEvent) => {};
  // const touchHandler = (e: TouchEvent) => {};
  // const el = document.createElement("div");
  // // dom events
  // createEventListener(window as Window | undefined, "mousemove", mouseHandler);
  // createEventListener(document, "touchstart", touchHandler);
  // createEventListener(el, "mousemove", mouseHandler);
  // createEventListener(() => el, "touchstart", touchHandler);
  // const mouseSignal = createEventSignal(window, "mousemove");
  // const touchSignal = createEventSignal(() => document, "touchstart");
  // // custom events
  // createEventListener<{ test: MouseEvent }>(window, "test", mouseHandler);
  // createEventListener<{ test: Event; custom: MouseEvent }, "custom">(
  //   () => el,
  //   "custom",
  //   mouseHandler
  // );
  // createEventListener<{ test: Event }>(new EventTarget(), "test", () => console.log("test"));
  // const testSignal = createEventSignal<{ test: MouseEvent }>(window, "test");
  // const customSignal = createEventSignal<{ test: Event; custom: MouseEvent }, "custom">(
  //   () => document,
  //   "custom"
  // );
  // // directive
  // eventListener(el, () => ["mousemove", mouseHandler, { passive: true }]);
  // eventListener(el, () => ["custom", e => {}]);

  const extractCSSregex = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
  /**
   * converts inline string styles to object form
   * @example
   * const styles = stringStyleToObject("margin: 24px; border: 1px solid #121212");
   * styles; // { margin: "24px", border: "1px solid #121212" }
   * */
  function stringStyleToObject(style) {
      const object = {};
      let match;
      while ((match = extractCSSregex.exec(style))) {
          object[match[1]] = match[2];
      }
      return object;
  }
  function combineStyle(a, b) {
      if (typeof a === "string") {
          if (typeof b === "string")
              return `${a};${b}`;
          a = stringStyleToObject(a);
      }
      else if (typeof b === "string") {
          b = stringStyleToObject(b);
      }
      return { ...a, ...b };
  }
  // type check
  // const com = combineProps(
  //   {
  //     onSomething: 123,
  //     onWheel: (e: WheelEvent) => 213,
  //     something: "foo",
  //     style: { margin: "24px" },
  //     once: true,
  //     onMount: (fn: VoidFunction) => undefined
  //   },
  //   {
  //     onSomething: [(n: number, s: string) => "fo", 123],
  //     once: "ovv"
  //   },
  //   {
  //     onWheel: false,
  //     onMount: (n: number) => void 0
  //   }
  // );
  // com.onSomething; // (s: string) => void;
  // com.once; // string;
  // com.onWheel; // false;
  // com.onMount; // ((fn: VoidFunction) => undefined) & ((n: number) => undefined);
  // com.something; // string;
  // com.style; // string | JSX.CSSProperties;

  /**
   * Utility for chaining multiple `ref` assignments with `props.ref` forwarding.
   * @param refs list of ref setters. Can be a `props.ref` prop for ref forwarding or a setter to a local variable (`el => ref = el`).
   * @example
   * ```tsx
   * interface ButtonProps {
   *    ref?: Ref<HTMLButtonElement>
   * }
   * function Button (props: ButtonProps) {
   *    let ref: HTMLButtonElement | undefined
   *    onMount(() => {
   *        // use the local ref
   *    })
   *    return <button ref={mergeRefs(props.ref, el => ref = el)} />
   * }
   *
   * // in consumer's component:
   * let ref: HTMLButtonElement | undefined
   * <Button ref={ref} />
   * ```
   */
  function mergeRefs(...refs) {
      return chain(refs);
  }

  // src/array.ts
  function addItemToArray(array, item, index = -1) {
    if (!(index in array)) {
      return [...array, item];
    }
    return [...array.slice(0, index), item, ...array.slice(index)];
  }

  // src/assertion.ts
  function isNumber(value) {
    return typeof value === "number";
  }
  function isString(value) {
    return Object.prototype.toString.call(value) === "[object String]";
  }
  function isFunction(value) {
    return typeof value === "function";
  }

  // src/create-generate-id.ts
  function createGenerateId(baseId) {
    return (suffix) => `${baseId()}-${suffix}`;
  }
  function getDocument(node) {
    return node ? node.ownerDocument || node : document;
  }

  // src/platform.ts
  function testUserAgent(re) {
    if (typeof window === "undefined" || window.navigator == null) {
      return false;
    }
    return (
      // @ts-ignore
      window.navigator.userAgentData?.brands.some(
        (brand) => re.test(brand.brand)
      ) || re.test(window.navigator.userAgent)
    );
  }
  function testPlatform(re) {
    return typeof window !== "undefined" && window.navigator != null ? re.test(
      // @ts-ignore
      window.navigator.userAgentData?.platform || window.navigator.platform
    ) : false;
  }
  function isMac() {
    return testPlatform(/^Mac/i);
  }
  function isIPhone() {
    return testPlatform(/^iPhone/i);
  }
  function isIPad() {
    return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    isMac() && navigator.maxTouchPoints > 1;
  }
  function isIOS() {
    return isIPhone() || isIPad();
  }
  function isAppleDevice() {
    return isMac() || isIOS();
  }
  function isWebKit() {
    return testUserAgent(/AppleWebKit/i) && !isChrome();
  }
  function isChrome() {
    return testUserAgent(/Chrome/i);
  }

  // src/events.ts
  function callHandler(event, handler) {
    if (handler) {
      if (isFunction(handler)) {
        handler(event);
      } else {
        handler[0](handler[1], event);
      }
    }
    return event?.defaultPrevented;
  }
  function composeEventHandlers(handlers) {
    return (event) => {
      for (const handler of handlers) {
        callHandler(event, handler);
      }
    };
  }

  // src/focus-without-scrolling.ts
  function focusWithoutScrolling(element) {
    if (!element) {
      return;
    }
    if (supportsPreventScroll()) {
      element.focus({ preventScroll: true });
    } else {
      const scrollableElements = getScrollableElements(element);
      element.focus();
      restoreScrollPosition(scrollableElements);
    }
  }
  var supportsPreventScrollCached = null;
  function supportsPreventScroll() {
    if (supportsPreventScrollCached == null) {
      supportsPreventScrollCached = false;
      try {
        const focusElem = document.createElement("div");
        focusElem.focus({
          get preventScroll() {
            supportsPreventScrollCached = true;
            return true;
          }
        });
      } catch (e) {
      }
    }
    return supportsPreventScrollCached;
  }
  function getScrollableElements(element) {
    let parent = element.parentNode;
    const scrollableElements = [];
    const rootScrollingElement = document.scrollingElement || document.documentElement;
    while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
      if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
        scrollableElements.push({
          element: parent,
          scrollTop: parent.scrollTop,
          scrollLeft: parent.scrollLeft
        });
      }
      parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) {
      scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
      });
    }
    return scrollableElements;
  }
  function restoreScrollPosition(scrollableElements) {
    for (const { element, scrollTop, scrollLeft } of scrollableElements) {
      element.scrollTop = scrollTop;
      element.scrollLeft = scrollLeft;
    }
  }

  // src/tabbable.ts
  var focusableElements = [
    "input:not([type='hidden']):not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "[tabindex]",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]:not([contenteditable='false'])"
  ];
  var tabbableElements = [
    ...focusableElements,
    '[tabindex]:not([tabindex="-1"]):not([disabled])'
  ];
  var FOCUSABLE_ELEMENT_SELECTOR = `${focusableElements.join(
  ":not([hidden]),"
)},[tabindex]:not([disabled]):not([hidden])`;
  var TABBABLE_ELEMENT_SELECTOR = tabbableElements.join(
    ':not([hidden]):not([tabindex="-1"]),'
  );
  function isElementVisible(element, childElement) {
    return element.nodeName !== "#comment" && isStyleVisible(element) && isAttributeVisible(element, childElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
  }
  function isStyleVisible(element) {
    if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
      return false;
    }
    const { display, visibility } = element.style;
    let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
    if (isVisible) {
      if (!element.ownerDocument.defaultView) {
        return isVisible;
      }
      const { getComputedStyle } = element.ownerDocument.defaultView;
      const { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
      isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
    }
    return isVisible;
  }
  function isAttributeVisible(element, childElement) {
    return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
  }
  function getFocusableTreeWalker(root, opts, scope) {
    const selector = opts?.tabbable ? TABBABLE_ELEMENT_SELECTOR : FOCUSABLE_ELEMENT_SELECTOR;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
      acceptNode(node) {
        if (opts?.from?.contains(node)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (node.matches(selector) && isElementVisible(node) && (true) && (!opts?.accept || opts.accept(node))) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
      }
    });
    if (opts?.from) {
      walker.currentNode = opts.from;
    }
    return walker;
  }
  function mergeDefaultProps(defaultProps, props) {
    return mergeProps(defaultProps, props);
  }

  // src/run-after-transition.ts
  var transitionsByElement = /* @__PURE__ */ new Map();
  var transitionCallbacks = /* @__PURE__ */ new Set();
  function setupGlobalEvents() {
    if (typeof window === "undefined") {
      return;
    }
    const onTransitionStart = (e) => {
      if (!e.target) {
        return;
      }
      let transitions = transitionsByElement.get(e.target);
      if (!transitions) {
        transitions = /* @__PURE__ */ new Set();
        transitionsByElement.set(e.target, transitions);
        e.target.addEventListener(
          "transitioncancel",
          onTransitionEnd
        );
      }
      transitions.add(e.propertyName);
    };
    const onTransitionEnd = (e) => {
      if (!e.target) {
        return;
      }
      const properties = transitionsByElement.get(e.target);
      if (!properties) {
        return;
      }
      properties.delete(e.propertyName);
      if (properties.size === 0) {
        e.target.removeEventListener(
          "transitioncancel",
          onTransitionEnd
        );
        transitionsByElement.delete(e.target);
      }
      if (transitionsByElement.size === 0) {
        for (const cb of transitionCallbacks) {
          cb();
        }
        transitionCallbacks.clear();
      }
    };
    document.body.addEventListener("transitionrun", onTransitionStart);
    document.body.addEventListener("transitionend", onTransitionEnd);
  }
  if (typeof document !== "undefined") {
    if (document.readyState !== "loading") {
      setupGlobalEvents();
    } else {
      document.addEventListener("DOMContentLoaded", setupGlobalEvents);
    }
  }

  // src/scroll-into-view.ts
  function scrollIntoView(scrollView, element) {
    const offsetX = relativeOffset(scrollView, element, "left");
    const offsetY = relativeOffset(scrollView, element, "top");
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    const maxX = x + scrollView.offsetWidth;
    const maxY = y + scrollView.offsetHeight;
    if (offsetX <= x) {
      x = offsetX;
    } else if (offsetX + width > maxX) {
      x += offsetX + width - maxX;
    }
    if (offsetY <= y) {
      y = offsetY;
    } else if (offsetY + height > maxY) {
      y += offsetY + height - maxY;
    }
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
  }
  function relativeOffset(ancestor, child, axis) {
    const prop = axis === "left" ? "offsetLeft" : "offsetTop";
    let sum = 0;
    while (child.offsetParent) {
      sum += child[prop];
      if (child.offsetParent === ancestor) {
        break;
      }
      if (child.offsetParent.contains(ancestor)) {
        sum -= ancestor[prop];
        break;
      }
      child = child.offsetParent;
    }
    return sum;
  }

  function buildNodes(params) {
    let index = params.startIndex ?? 0;
    const level = params.startLevel ?? 0;
    const nodes = [];
    const getKey = (data) => {
      if (data == null) {
        return "";
      }
      const _getKey = params.getKey ?? "key";
      const dataKey = isString(_getKey) ? data[_getKey] : _getKey(data);
      return dataKey != null ? String(dataKey) : "";
    };
    const getTextValue = (data) => {
      if (data == null) {
        return "";
      }
      const _getTextValue = params.getTextValue ?? "textValue";
      const dataTextValue = isString(_getTextValue) ? data[_getTextValue] : _getTextValue(data);
      return dataTextValue != null ? String(dataTextValue) : "";
    };
    const getDisabled = (data) => {
      if (data == null) {
        return false;
      }
      const _getDisabled = params.getDisabled ?? "disabled";
      return (isString(_getDisabled) ? data[_getDisabled] : _getDisabled(data)) ?? false;
    };
    const getSectionChildren = (data) => {
      if (data == null) {
        return void 0;
      }
      if (isString(params.getSectionChildren)) {
        return data[params.getSectionChildren];
      }
      return params.getSectionChildren?.(data);
    };
    for (const data of params.dataSource) {
      if (isString(data) || isNumber(data)) {
        nodes.push({
          type: "item",
          rawValue: data,
          key: String(data),
          textValue: String(data),
          disabled: getDisabled(data),
          level,
          index
        });
        index++;
        continue;
      }
      if (getSectionChildren(data) != null) {
        nodes.push({
          type: "section",
          rawValue: data,
          key: "",
          // not applicable here
          textValue: "",
          // not applicable here
          disabled: false,
          // not applicable here
          level,
          index
        });
        index++;
        const sectionChildren = getSectionChildren(data) ?? [];
        if (sectionChildren.length > 0) {
          const childNodes = buildNodes({
            dataSource: sectionChildren,
            getKey: params.getKey,
            getTextValue: params.getTextValue,
            getDisabled: params.getDisabled,
            getSectionChildren: params.getSectionChildren,
            startIndex: index,
            startLevel: level + 1
          });
          nodes.push(...childNodes);
          index += childNodes.length;
        }
      } else {
        nodes.push({
          type: "item",
          rawValue: data,
          key: getKey(data),
          textValue: getTextValue(data),
          disabled: getDisabled(data),
          level,
          index
        });
        index++;
      }
    }
    return nodes;
  }
  function createCollection(props, deps = []) {
    return createMemo(() => {
      const nodes = buildNodes({
        dataSource: access$1(props.dataSource),
        getKey: access$1(props.getKey),
        getTextValue: access$1(props.getTextValue),
        getDisabled: access$1(props.getDisabled),
        getSectionChildren: access$1(props.getSectionChildren)
      });
      for (let i = 0; i < deps.length; i++) deps[i]();
      return props.factory(nodes);
    });
  }

  var RTL_SCRIPTS = /* @__PURE__ */ new Set(["Avst", "Arab", "Armi", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]);
  var RTL_LANGS = /* @__PURE__ */ new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
  function isRTL(locale) {
    if (Intl.Locale) {
      const script = new Intl.Locale(locale).maximize().script ?? "";
      return RTL_SCRIPTS.has(script);
    }
    const lang = locale.split("-")[0];
    return RTL_LANGS.has(lang);
  }
  function getReadingDirection(locale) {
    return isRTL(locale) ? "rtl" : "ltr";
  }
  function getDefaultLocale() {
    let locale = typeof navigator !== "undefined" && // @ts-ignore
    (navigator.language || navigator.userLanguage) || "en-US";
    try {
      Intl.DateTimeFormat.supportedLocalesOf([locale]);
    } catch (_err) {
      locale = "en-US";
    }
    return {
      locale,
      direction: getReadingDirection(locale)
    };
  }
  var currentLocale = getDefaultLocale();
  var listeners = /* @__PURE__ */ new Set();
  function updateLocale() {
    currentLocale = getDefaultLocale();
    for (const listener of listeners) {
      listener(currentLocale);
    }
  }
  function createDefaultLocale() {
    const [defaultClientLocale, setDefaultClientLocale] = createSignal(currentLocale);
    const defaultLocale = createMemo(() => defaultClientLocale());
    onMount(() => {
      if (listeners.size === 0) {
        window.addEventListener("languagechange", updateLocale);
      }
      listeners.add(setDefaultClientLocale);
      onCleanup(() => {
        listeners.delete(setDefaultClientLocale);
        if (listeners.size === 0) {
          window.removeEventListener("languagechange", updateLocale);
        }
      });
    });
    return {
      locale: () => defaultLocale().locale,
      direction: () => defaultLocale().direction
    };
  }
  var I18nContext = createContext();
  function useLocale() {
    const defaultLocale = createDefaultLocale();
    const context = useContext(I18nContext);
    return context || defaultLocale;
  }

  function createControllableSignal(props) {
    const [_value, _setValue] = createSignal(props.defaultValue?.());
    const isControlled = createMemo(() => props.value?.() !== void 0);
    const value = createMemo(() => isControlled() ? props.value?.() : _value());
    const setValue = (next) => {
      untrack(() => {
        const nextValue = accessWith(next, value());
        if (!Object.is(nextValue, value())) {
          if (!isControlled()) {
            _setValue(nextValue);
          }
          props.onChange?.(nextValue);
        }
        return nextValue;
      });
    };
    return [value, setValue];
  }
  function createControllableArraySignal(props) {
    const [_value, setValue] = createControllableSignal(props);
    const value = () => _value() ?? [];
    return [value, setValue];
  }

  var Selection = class _Selection extends Set {
    anchorKey;
    currentKey;
    constructor(keys, anchorKey, currentKey) {
      super(keys);
      if (keys instanceof _Selection) {
        this.anchorKey = anchorKey || keys.anchorKey;
        this.currentKey = currentKey || keys.currentKey;
      } else {
        this.anchorKey = anchorKey;
        this.currentKey = currentKey;
      }
    }
  };
  function createControllableSelectionSignal(props) {
    const [_value, setValue] = createControllableSignal(props);
    const value = () => _value() ?? new Selection();
    return [value, setValue];
  }
  function isNonContiguousSelectionModifier(e) {
    return isAppleDevice() ? e.altKey : e.ctrlKey;
  }
  function isCtrlKeyPressed(e) {
    if (isMac()) {
      return e.metaKey;
    }
    return e.ctrlKey;
  }
  function convertSelection(selection) {
    return new Selection(selection);
  }
  function isSameSelection(setA, setB) {
    if (setA.size !== setB.size) {
      return false;
    }
    for (const item of setA) {
      if (!setB.has(item)) {
        return false;
      }
    }
    return true;
  }
  function createMultipleSelectionState(props) {
    const mergedProps = mergeDefaultProps({
      selectionMode: "none",
      selectionBehavior: "toggle"
    }, props);
    const [isFocused, setFocused] = createSignal(false);
    const [focusedKey, setFocusedKey] = createSignal();
    const selectedKeysProp = createMemo(() => {
      const selection = access$1(mergedProps.selectedKeys);
      if (selection != null) {
        return convertSelection(selection);
      }
      return selection;
    });
    const defaultSelectedKeys = createMemo(() => {
      const defaultSelection = access$1(mergedProps.defaultSelectedKeys);
      if (defaultSelection != null) {
        return convertSelection(defaultSelection);
      }
      return new Selection();
    });
    const [selectedKeys, _setSelectedKeys] = createControllableSelectionSignal({
      value: selectedKeysProp,
      defaultValue: defaultSelectedKeys,
      onChange: (value) => mergedProps.onSelectionChange?.(value)
    });
    const [selectionBehavior, setSelectionBehavior] = createSignal(access$1(mergedProps.selectionBehavior));
    const selectionMode = () => access$1(mergedProps.selectionMode);
    const disallowEmptySelection = () => access$1(mergedProps.disallowEmptySelection) ?? false;
    const setSelectedKeys = (keys) => {
      if (access$1(mergedProps.allowDuplicateSelectionEvents) || !isSameSelection(keys, selectedKeys())) {
        _setSelectedKeys(keys);
      }
    };
    createEffect(() => {
      const selection = selectedKeys();
      if (access$1(mergedProps.selectionBehavior) === "replace" && selectionBehavior() === "toggle" && typeof selection === "object" && selection.size === 0) {
        setSelectionBehavior("replace");
      }
    });
    createEffect(() => {
      setSelectionBehavior(access$1(mergedProps.selectionBehavior) ?? "toggle");
    });
    return {
      selectionMode,
      disallowEmptySelection,
      selectionBehavior,
      setSelectionBehavior,
      isFocused,
      setFocused,
      focusedKey,
      setFocusedKey,
      selectedKeys,
      setSelectedKeys
    };
  }
  function createTypeSelect(props) {
    const [search, setSearch] = createSignal("");
    const [timeoutId, setTimeoutId] = createSignal(-1);
    const onKeyDown = (e) => {
      if (access$1(props.isDisabled)) {
        return;
      }
      const delegate = access$1(props.keyboardDelegate);
      const manager = access$1(props.selectionManager);
      if (!delegate.getKeyForSearch) {
        return;
      }
      const character = getStringForKey(e.key);
      if (!character || e.ctrlKey || e.metaKey) {
        return;
      }
      if (character === " " && search().trim().length > 0) {
        e.preventDefault();
        e.stopPropagation();
      }
      let newSearch = setSearch((prev) => prev + character);
      let key = delegate.getKeyForSearch(newSearch, manager.focusedKey()) ?? delegate.getKeyForSearch(newSearch);
      if (key == null && isAllSameLetter(newSearch)) {
        newSearch = newSearch[0];
        key = delegate.getKeyForSearch(newSearch, manager.focusedKey()) ?? delegate.getKeyForSearch(newSearch);
      }
      if (key != null) {
        manager.setFocusedKey(key);
        props.onTypeSelect?.(key);
      }
      clearTimeout(timeoutId());
      setTimeoutId(window.setTimeout(() => setSearch(""), 500));
    };
    return {
      typeSelectHandlers: {
        onKeyDown
      }
    };
  }
  function getStringForKey(key) {
    if (key.length === 1 || !/^[A-Z]/i.test(key)) {
      return key;
    }
    return "";
  }
  function isAllSameLetter(search) {
    return search.split("").every((letter) => letter === search[0]);
  }
  function createSelectableCollection(props, ref, scrollRef) {
    const defaultProps = {
      selectOnFocus: () => access$1(props.selectionManager).selectionBehavior() === "replace"
    };
    const mergedProps = mergeProps(defaultProps, props);
    const finalScrollRef = () => ref();
    const {
      direction
    } = useLocale();
    let scrollPos = {
      top: 0,
      left: 0
    };
    createEventListener(() => !access$1(mergedProps.isVirtualized) ? finalScrollRef() : void 0, "scroll", () => {
      const scrollEl = finalScrollRef();
      if (!scrollEl) {
        return;
      }
      scrollPos = {
        top: scrollEl.scrollTop,
        left: scrollEl.scrollLeft
      };
    });
    const {
      typeSelectHandlers
    } = createTypeSelect({
      isDisabled: () => access$1(mergedProps.disallowTypeAhead),
      keyboardDelegate: () => access$1(mergedProps.keyboardDelegate),
      selectionManager: () => access$1(mergedProps.selectionManager)
    });
    const orientation = () => access$1(mergedProps.orientation) ?? "vertical";
    const onKeyDown = (e) => {
      callHandler(e, typeSelectHandlers.onKeyDown);
      if (e.altKey && e.key === "Tab") {
        e.preventDefault();
      }
      const refEl = ref();
      if (!refEl?.contains(e.target)) {
        return;
      }
      const manager = access$1(mergedProps.selectionManager);
      const selectOnFocus = access$1(mergedProps.selectOnFocus);
      const navigateToKey = (key) => {
        if (key != null) {
          manager.setFocusedKey(key);
          if (e.shiftKey && manager.selectionMode() === "multiple") {
            manager.extendSelection(key);
          } else if (selectOnFocus && !isNonContiguousSelectionModifier(e)) {
            manager.replaceSelection(key);
          }
        }
      };
      const delegate = access$1(mergedProps.keyboardDelegate);
      const shouldFocusWrap = access$1(mergedProps.shouldFocusWrap);
      const focusedKey = manager.focusedKey();
      switch (e.key) {
        case (orientation() === "vertical" ? "ArrowDown" : "ArrowRight"): {
          if (delegate.getKeyBelow) {
            e.preventDefault();
            let nextKey;
            if (focusedKey != null) {
              nextKey = delegate.getKeyBelow(focusedKey);
            } else {
              nextKey = delegate.getFirstKey?.();
            }
            if (nextKey == null && shouldFocusWrap) {
              nextKey = delegate.getFirstKey?.(focusedKey);
            }
            navigateToKey(nextKey);
          }
          break;
        }
        case (orientation() === "vertical" ? "ArrowUp" : "ArrowLeft"): {
          if (delegate.getKeyAbove) {
            e.preventDefault();
            let nextKey;
            if (focusedKey != null) {
              nextKey = delegate.getKeyAbove(focusedKey);
            } else {
              nextKey = delegate.getLastKey?.();
            }
            if (nextKey == null && shouldFocusWrap) {
              nextKey = delegate.getLastKey?.(focusedKey);
            }
            navigateToKey(nextKey);
          }
          break;
        }
        case (orientation() === "vertical" ? "ArrowLeft" : "ArrowUp"): {
          if (delegate.getKeyLeftOf) {
            e.preventDefault();
            const isRTL = direction() === "rtl";
            let nextKey;
            if (focusedKey != null) {
              nextKey = delegate.getKeyLeftOf(focusedKey);
            } else {
              nextKey = isRTL ? delegate.getFirstKey?.() : delegate.getLastKey?.();
            }
            navigateToKey(nextKey);
          }
          break;
        }
        case (orientation() === "vertical" ? "ArrowRight" : "ArrowDown"): {
          if (delegate.getKeyRightOf) {
            e.preventDefault();
            const isRTL = direction() === "rtl";
            let nextKey;
            if (focusedKey != null) {
              nextKey = delegate.getKeyRightOf(focusedKey);
            } else {
              nextKey = isRTL ? delegate.getLastKey?.() : delegate.getFirstKey?.();
            }
            navigateToKey(nextKey);
          }
          break;
        }
        case "Home":
          if (delegate.getFirstKey) {
            e.preventDefault();
            const firstKey = delegate.getFirstKey(focusedKey, isCtrlKeyPressed(e));
            if (firstKey != null) {
              manager.setFocusedKey(firstKey);
              if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") {
                manager.extendSelection(firstKey);
              } else if (selectOnFocus) {
                manager.replaceSelection(firstKey);
              }
            }
          }
          break;
        case "End":
          if (delegate.getLastKey) {
            e.preventDefault();
            const lastKey = delegate.getLastKey(focusedKey, isCtrlKeyPressed(e));
            if (lastKey != null) {
              manager.setFocusedKey(lastKey);
              if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") {
                manager.extendSelection(lastKey);
              } else if (selectOnFocus) {
                manager.replaceSelection(lastKey);
              }
            }
          }
          break;
        case "PageDown":
          if (delegate.getKeyPageBelow && focusedKey != null) {
            e.preventDefault();
            const nextKey = delegate.getKeyPageBelow(focusedKey);
            navigateToKey(nextKey);
          }
          break;
        case "PageUp":
          if (delegate.getKeyPageAbove && focusedKey != null) {
            e.preventDefault();
            const nextKey = delegate.getKeyPageAbove(focusedKey);
            navigateToKey(nextKey);
          }
          break;
        case "a":
          if (isCtrlKeyPressed(e) && manager.selectionMode() === "multiple" && access$1(mergedProps.disallowSelectAll) !== true) {
            e.preventDefault();
            manager.selectAll();
          }
          break;
        case "Escape":
          if (!e.defaultPrevented) {
            e.preventDefault();
            if (!access$1(mergedProps.disallowEmptySelection)) {
              manager.clearSelection();
            }
          }
          break;
        case "Tab": {
          if (!access$1(mergedProps.allowsTabNavigation)) {
            if (e.shiftKey) {
              refEl.focus();
            } else {
              const walker = getFocusableTreeWalker(refEl, {
                tabbable: true
              });
              let next;
              let last;
              do {
                last = walker.lastChild();
                if (last) {
                  next = last;
                }
              } while (last);
              if (next && !next.contains(document.activeElement)) {
                focusWithoutScrolling(next);
              }
            }
            break;
          }
        }
      }
    };
    const onFocusIn = (e) => {
      const manager = access$1(mergedProps.selectionManager);
      const delegate = access$1(mergedProps.keyboardDelegate);
      const selectOnFocus = access$1(mergedProps.selectOnFocus);
      if (manager.isFocused()) {
        if (!e.currentTarget.contains(e.target)) {
          manager.setFocused(false);
        }
        return;
      }
      if (!e.currentTarget.contains(e.target)) {
        return;
      }
      manager.setFocused(true);
      if (manager.focusedKey() == null) {
        const navigateToFirstKey = (key) => {
          if (key == null) {
            return;
          }
          manager.setFocusedKey(key);
          if (selectOnFocus) {
            manager.replaceSelection(key);
          }
        };
        const relatedTarget = e.relatedTarget;
        if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) {
          navigateToFirstKey(manager.lastSelectedKey() ?? delegate.getLastKey?.());
        } else {
          navigateToFirstKey(manager.firstSelectedKey() ?? delegate.getFirstKey?.());
        }
      } else if (!access$1(mergedProps.isVirtualized)) {
        const scrollEl = finalScrollRef();
        if (scrollEl) {
          scrollEl.scrollTop = scrollPos.top;
          scrollEl.scrollLeft = scrollPos.left;
          const element = scrollEl.querySelector(`[data-key="${manager.focusedKey()}"]`);
          if (element) {
            focusWithoutScrolling(element);
            scrollIntoView(scrollEl, element);
          }
        }
      }
    };
    const onFocusOut = (e) => {
      const manager = access$1(mergedProps.selectionManager);
      if (!e.currentTarget.contains(e.relatedTarget)) {
        manager.setFocused(false);
      }
    };
    const onMouseDown = (e) => {
      if (finalScrollRef() === e.target) {
        e.preventDefault();
      }
    };
    const tryAutoFocus = () => {
      const autoFocus = access$1(mergedProps.autoFocus);
      if (!autoFocus) {
        return;
      }
      const manager = access$1(mergedProps.selectionManager);
      const delegate = access$1(mergedProps.keyboardDelegate);
      let focusedKey;
      if (autoFocus === "first") {
        focusedKey = delegate.getFirstKey?.();
      }
      if (autoFocus === "last") {
        focusedKey = delegate.getLastKey?.();
      }
      const selectedKeys = manager.selectedKeys();
      if (selectedKeys.size) {
        focusedKey = selectedKeys.values().next().value;
      }
      manager.setFocused(true);
      manager.setFocusedKey(focusedKey);
      const refEl = ref();
      if (refEl && focusedKey == null && !access$1(mergedProps.shouldUseVirtualFocus)) {
        focusWithoutScrolling(refEl);
      }
    };
    onMount(() => {
      if (mergedProps.deferAutoFocus) {
        setTimeout(tryAutoFocus, 0);
      } else {
        tryAutoFocus();
      }
    });
    createEffect(on([finalScrollRef, () => access$1(mergedProps.isVirtualized), () => access$1(mergedProps.selectionManager).focusedKey()], (newValue) => {
      const [scrollEl, isVirtualized, focusedKey] = newValue;
      if (isVirtualized) {
        focusedKey && mergedProps.scrollToKey?.(focusedKey);
      } else {
        if (focusedKey && scrollEl) {
          const element = scrollEl.querySelector(`[data-key="${focusedKey}"]`);
          if (element) {
            scrollIntoView(scrollEl, element);
          }
        }
      }
    }));
    const tabIndex = createMemo(() => {
      if (access$1(mergedProps.shouldUseVirtualFocus)) {
        return void 0;
      }
      return access$1(mergedProps.selectionManager).focusedKey() == null ? 0 : -1;
    });
    return {
      tabIndex,
      onKeyDown,
      onMouseDown,
      onFocusIn,
      onFocusOut
    };
  }
  function createSelectableItem(props, ref) {
    const manager = () => access$1(props.selectionManager);
    const key = () => access$1(props.key);
    const shouldUseVirtualFocus = () => access$1(props.shouldUseVirtualFocus);
    const onSelect = (e) => {
      if (manager().selectionMode() === "none") {
        return;
      }
      if (manager().selectionMode() === "single") {
        if (manager().isSelected(key()) && !manager().disallowEmptySelection()) {
          manager().toggleSelection(key());
        } else {
          manager().replaceSelection(key());
        }
      } else if (e?.shiftKey) {
        manager().extendSelection(key());
      } else if (manager().selectionBehavior() === "toggle" || isCtrlKeyPressed(e) || "pointerType" in e && e.pointerType === "touch") {
        manager().toggleSelection(key());
      } else {
        manager().replaceSelection(key());
      }
    };
    const isSelected = () => manager().isSelected(key());
    const isDisabled = () => access$1(props.disabled) || manager().isDisabled(key());
    const allowsSelection = () => !isDisabled() && manager().canSelectItem(key());
    let pointerDownType = null;
    const onPointerDown = (e) => {
      if (!allowsSelection()) {
        return;
      }
      pointerDownType = e.pointerType;
      if (e.pointerType === "mouse" && e.button === 0 && !access$1(props.shouldSelectOnPressUp)) {
        onSelect(e);
      }
    };
    const onPointerUp = (e) => {
      if (!allowsSelection()) {
        return;
      }
      if (e.pointerType === "mouse" && e.button === 0 && access$1(props.shouldSelectOnPressUp) && access$1(props.allowsDifferentPressOrigin)) {
        onSelect(e);
      }
    };
    const onClick = (e) => {
      if (!allowsSelection()) {
        return;
      }
      if (access$1(props.shouldSelectOnPressUp) && !access$1(props.allowsDifferentPressOrigin) || pointerDownType !== "mouse") {
        onSelect(e);
      }
    };
    const onKeyDown = (e) => {
      if (!allowsSelection() || !["Enter", " "].includes(e.key)) {
        return;
      }
      if (isNonContiguousSelectionModifier(e)) {
        manager().toggleSelection(key());
      } else {
        onSelect(e);
      }
    };
    const onMouseDown = (e) => {
      if (isDisabled()) {
        e.preventDefault();
      }
    };
    const onFocus = (e) => {
      const refEl = ref();
      if (shouldUseVirtualFocus() || isDisabled() || !refEl) {
        return;
      }
      if (e.target === refEl) {
        manager().setFocusedKey(key());
      }
    };
    const tabIndex = createMemo(() => {
      if (shouldUseVirtualFocus() || isDisabled()) {
        return void 0;
      }
      return key() === manager().focusedKey() ? 0 : -1;
    });
    const dataKey = createMemo(() => {
      return access$1(props.virtualized) ? void 0 : key();
    });
    createEffect(on([ref, key, shouldUseVirtualFocus, () => manager().focusedKey(), () => manager().isFocused()], ([refEl, key2, shouldUseVirtualFocus2, focusedKey, isFocused]) => {
      if (refEl && key2 === focusedKey && isFocused && !shouldUseVirtualFocus2 && document.activeElement !== refEl) {
        if (props.focus) {
          props.focus();
        } else {
          focusWithoutScrolling(refEl);
        }
      }
    }));
    return {
      isSelected,
      isDisabled,
      allowsSelection,
      tabIndex,
      dataKey,
      onPointerDown,
      onPointerUp,
      onClick,
      onKeyDown,
      onMouseDown,
      onFocus
    };
  }
  var SelectionManager = class {
    collection;
    state;
    constructor(collection, state) {
      this.collection = collection;
      this.state = state;
    }
    /** The type of selection that is allowed in the collection. */
    selectionMode() {
      return this.state.selectionMode();
    }
    /** Whether the collection allows empty selection. */
    disallowEmptySelection() {
      return this.state.disallowEmptySelection();
    }
    /** The selection behavior for the collection. */
    selectionBehavior() {
      return this.state.selectionBehavior();
    }
    /** Sets the selection behavior for the collection. */
    setSelectionBehavior(selectionBehavior) {
      this.state.setSelectionBehavior(selectionBehavior);
    }
    /** Whether the collection is currently focused. */
    isFocused() {
      return this.state.isFocused();
    }
    /** Sets whether the collection is focused. */
    setFocused(isFocused) {
      this.state.setFocused(isFocused);
    }
    /** The current focused key in the collection. */
    focusedKey() {
      return this.state.focusedKey();
    }
    /** Sets the focused key. */
    setFocusedKey(key) {
      if (key == null || this.collection().getItem(key)) {
        this.state.setFocusedKey(key);
      }
    }
    /** The currently selected keys in the collection. */
    selectedKeys() {
      return this.state.selectedKeys();
    }
    /** Returns whether a key is selected. */
    isSelected(key) {
      if (this.state.selectionMode() === "none") {
        return false;
      }
      const retrievedKey = this.getKey(key);
      if (retrievedKey == null) {
        return false;
      }
      return this.state.selectedKeys().has(retrievedKey);
    }
    /** Whether the selection is empty. */
    isEmpty() {
      return this.state.selectedKeys().size === 0;
    }
    /** Whether all items in the collection are selected. */
    isSelectAll() {
      if (this.isEmpty()) {
        return false;
      }
      const selectedKeys = this.state.selectedKeys();
      return this.getAllSelectableKeys().every((k) => selectedKeys.has(k));
    }
    firstSelectedKey() {
      let first;
      for (const key of this.state.selectedKeys()) {
        const item = this.collection().getItem(key);
        const isItemBeforeFirst = item?.index != null && first?.index != null && item.index < first.index;
        if (!first || isItemBeforeFirst) {
          first = item;
        }
      }
      return first?.key;
    }
    lastSelectedKey() {
      let last;
      for (const key of this.state.selectedKeys()) {
        const item = this.collection().getItem(key);
        const isItemAfterLast = item?.index != null && last?.index != null && item.index > last.index;
        if (!last || isItemAfterLast) {
          last = item;
        }
      }
      return last?.key;
    }
    /** Extends the selection to the given key. */
    extendSelection(toKey) {
      if (this.selectionMode() === "none") {
        return;
      }
      if (this.selectionMode() === "single") {
        this.replaceSelection(toKey);
        return;
      }
      const retrievedToKey = this.getKey(toKey);
      if (retrievedToKey == null) {
        return;
      }
      const selectedKeys = this.state.selectedKeys();
      const anchorKey = selectedKeys.anchorKey || retrievedToKey;
      const selection = new Selection(selectedKeys, anchorKey, retrievedToKey);
      for (const key of this.getKeyRange(anchorKey, selectedKeys.currentKey || retrievedToKey)) {
        selection.delete(key);
      }
      for (const key of this.getKeyRange(retrievedToKey, anchorKey)) {
        if (this.canSelectItem(key)) {
          selection.add(key);
        }
      }
      this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
      const fromItem = this.collection().getItem(from);
      const toItem = this.collection().getItem(to);
      if (fromItem && toItem) {
        if (fromItem.index != null && toItem.index != null && fromItem.index <= toItem.index) {
          return this.getKeyRangeInternal(from, to);
        }
        return this.getKeyRangeInternal(to, from);
      }
      return [];
    }
    getKeyRangeInternal(from, to) {
      const keys = [];
      let key = from;
      while (key != null) {
        const item = this.collection().getItem(key);
        if (item && item.type === "item") {
          keys.push(key);
        }
        if (key === to) {
          return keys;
        }
        key = this.collection().getKeyAfter(key);
      }
      return [];
    }
    getKey(key) {
      const item = this.collection().getItem(key);
      if (!item) {
        return key;
      }
      if (!item || item.type !== "item") {
        return null;
      }
      return item.key;
    }
    /** Toggles whether the given key is selected. */
    toggleSelection(key) {
      if (this.selectionMode() === "none") {
        return;
      }
      if (this.selectionMode() === "single" && !this.isSelected(key)) {
        this.replaceSelection(key);
        return;
      }
      const retrievedKey = this.getKey(key);
      if (retrievedKey == null) {
        return;
      }
      const keys = new Selection(this.state.selectedKeys());
      if (keys.has(retrievedKey)) {
        keys.delete(retrievedKey);
      } else if (this.canSelectItem(retrievedKey)) {
        keys.add(retrievedKey);
        keys.anchorKey = retrievedKey;
        keys.currentKey = retrievedKey;
      }
      if (this.disallowEmptySelection() && keys.size === 0) {
        return;
      }
      this.state.setSelectedKeys(keys);
    }
    /** Replaces the selection with only the given key. */
    replaceSelection(key) {
      if (this.selectionMode() === "none") {
        return;
      }
      const retrievedKey = this.getKey(key);
      if (retrievedKey == null) {
        return;
      }
      const selection = this.canSelectItem(retrievedKey) ? new Selection([retrievedKey], retrievedKey, retrievedKey) : new Selection();
      this.state.setSelectedKeys(selection);
    }
    /** Replaces the selection with the given keys. */
    setSelectedKeys(keys) {
      if (this.selectionMode() === "none") {
        return;
      }
      const selection = new Selection();
      for (const key of keys) {
        const retrievedKey = this.getKey(key);
        if (retrievedKey != null) {
          selection.add(retrievedKey);
          if (this.selectionMode() === "single") {
            break;
          }
        }
      }
      this.state.setSelectedKeys(selection);
    }
    /** Selects all items in the collection. */
    selectAll() {
      if (this.selectionMode() === "multiple") {
        this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
      }
    }
    /**
     * Removes all keys from the selection.
     */
    clearSelection() {
      const selectedKeys = this.state.selectedKeys();
      if (!this.disallowEmptySelection() && selectedKeys.size > 0) {
        this.state.setSelectedKeys(new Selection());
      }
    }
    /**
     * Toggles between select all and an empty selection.
     */
    toggleSelectAll() {
      if (this.isSelectAll()) {
        this.clearSelection();
      } else {
        this.selectAll();
      }
    }
    select(key, e) {
      if (this.selectionMode() === "none") {
        return;
      }
      if (this.selectionMode() === "single") {
        if (this.isSelected(key) && !this.disallowEmptySelection()) {
          this.toggleSelection(key);
        } else {
          this.replaceSelection(key);
        }
      } else if (this.selectionBehavior() === "toggle" || e && e.pointerType === "touch") {
        this.toggleSelection(key);
      } else {
        this.replaceSelection(key);
      }
    }
    /** Returns whether the current selection is equal to the given selection. */
    isSelectionEqual(selection) {
      if (selection === this.state.selectedKeys()) {
        return true;
      }
      const selectedKeys = this.selectedKeys();
      if (selection.size !== selectedKeys.size) {
        return false;
      }
      for (const key of selection) {
        if (!selectedKeys.has(key)) {
          return false;
        }
      }
      for (const key of selectedKeys) {
        if (!selection.has(key)) {
          return false;
        }
      }
      return true;
    }
    canSelectItem(key) {
      if (this.state.selectionMode() === "none") {
        return false;
      }
      const item = this.collection().getItem(key);
      return item != null && !item.disabled;
    }
    isDisabled(key) {
      const item = this.collection().getItem(key);
      return !item || item.disabled;
    }
    getAllSelectableKeys() {
      const keys = [];
      const addKeys = (key) => {
        while (key != null) {
          if (this.canSelectItem(key)) {
            const item = this.collection().getItem(key);
            if (!item) {
              continue;
            }
            if (item.type === "item") {
              keys.push(key);
            }
          }
          key = this.collection().getKeyAfter(key);
        }
      };
      addKeys(this.collection().getFirstKey());
      return keys;
    }
  };
  var ListCollection = class {
    keyMap = /* @__PURE__ */ new Map();
    iterable;
    firstKey;
    lastKey;
    constructor(nodes) {
      this.iterable = nodes;
      for (const node of nodes) {
        this.keyMap.set(node.key, node);
      }
      if (this.keyMap.size === 0) {
        return;
      }
      let last;
      let index = 0;
      for (const [key, node] of this.keyMap) {
        if (last) {
          last.nextKey = key;
          node.prevKey = last.key;
        } else {
          this.firstKey = key;
          node.prevKey = void 0;
        }
        if (node.type === "item") {
          node.index = index++;
        }
        last = node;
        last.nextKey = void 0;
      }
      this.lastKey = last.key;
    }
    *[Symbol.iterator]() {
      yield* this.iterable;
    }
    getSize() {
      return this.keyMap.size;
    }
    getKeys() {
      return this.keyMap.keys();
    }
    getKeyBefore(key) {
      return this.keyMap.get(key)?.prevKey;
    }
    getKeyAfter(key) {
      return this.keyMap.get(key)?.nextKey;
    }
    getFirstKey() {
      return this.firstKey;
    }
    getLastKey() {
      return this.lastKey;
    }
    getItem(key) {
      return this.keyMap.get(key);
    }
    at(idx) {
      const keys = [...this.getKeys()];
      return this.getItem(keys[idx]);
    }
  };
  function createListState(props) {
    const selectionState = createMultipleSelectionState(props);
    const factory = (nodes) => {
      return props.filter ? new ListCollection(props.filter(nodes)) : new ListCollection(nodes);
    };
    const collection = createCollection({
      dataSource: () => access$1(props.dataSource),
      getKey: () => access$1(props.getKey),
      getTextValue: () => access$1(props.getTextValue),
      getDisabled: () => access$1(props.getDisabled),
      getSectionChildren: () => access$1(props.getSectionChildren),
      factory
    }, [() => props.filter]);
    const selectionManager = new SelectionManager(collection, selectionState);
    createComputed(() => {
      const focusedKey = selectionState.focusedKey();
      if (focusedKey != null && !collection().getItem(focusedKey)) {
        selectionState.setFocusedKey(void 0);
      }
    });
    return {
      collection,
      selectionManager: () => selectionManager
    };
  }

  var DomCollectionContext = createContext();
  function useOptionalDomCollectionContext() {
    return useContext(DomCollectionContext);
  }
  function useDomCollectionContext() {
    const context = useOptionalDomCollectionContext();
    if (context === void 0) {
      throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");
    }
    return context;
  }
  function isElementPreceding(a, b) {
    return Boolean(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
  }
  function findDOMIndex(items, item) {
    const itemEl = item.ref();
    if (!itemEl) {
      return -1;
    }
    let length = items.length;
    if (!length) {
      return -1;
    }
    while (length--) {
      const currentItemEl = items[length]?.ref();
      if (!currentItemEl) {
        continue;
      }
      if (isElementPreceding(currentItemEl, itemEl)) {
        return length + 1;
      }
    }
    return 0;
  }
  function sortBasedOnDOMPosition(items) {
    const pairs = items.map((item, index) => [index, item]);
    let isOrderDifferent = false;
    pairs.sort(([indexA, a], [indexB, b]) => {
      const elementA = a.ref();
      const elementB = b.ref();
      if (elementA === elementB) {
        return 0;
      }
      if (!elementA || !elementB) {
        return 0;
      }
      if (isElementPreceding(elementA, elementB)) {
        if (indexA > indexB) {
          isOrderDifferent = true;
        }
        return -1;
      }
      if (indexA < indexB) {
        isOrderDifferent = true;
      }
      return 1;
    });
    if (isOrderDifferent) {
      return pairs.map(([_, item]) => item);
    }
    return items;
  }
  function setItemsBasedOnDOMPosition(items, setItems) {
    const sortedItems = sortBasedOnDOMPosition(items);
    if (items !== sortedItems) {
      setItems(sortedItems);
    }
  }
  function getCommonParent(items) {
    const firstItem = items[0];
    const lastItemEl = items[items.length - 1]?.ref();
    let parentEl = firstItem?.ref()?.parentElement;
    while (parentEl) {
      if (lastItemEl && parentEl.contains(lastItemEl)) {
        return parentEl;
      }
      parentEl = parentEl.parentElement;
    }
    return getDocument(parentEl).body;
  }
  function createTimeoutObserver(items, setItems) {
    createEffect(() => {
      const timeout = setTimeout(() => {
        setItemsBasedOnDOMPosition(items(), setItems);
      });
      onCleanup(() => clearTimeout(timeout));
    });
  }
  function createSortBasedOnDOMPosition(items, setItems) {
    if (typeof IntersectionObserver !== "function") {
      createTimeoutObserver(items, setItems);
      return;
    }
    let previousItems = [];
    createEffect(() => {
      const callback = () => {
        const hasPreviousItems = !!previousItems.length;
        previousItems = items();
        if (!hasPreviousItems) {
          return;
        }
        setItemsBasedOnDOMPosition(items(), setItems);
      };
      const root = getCommonParent(items());
      const observer = new IntersectionObserver(callback, {
        root
      });
      for (const item of items()) {
        const itemEl = item.ref();
        if (itemEl) {
          observer.observe(itemEl);
        }
      }
      onCleanup(() => observer.disconnect());
    });
  }
  function createDomCollection(props = {}) {
    const [items, setItems] = createControllableArraySignal({
      value: () => access$1(props.items),
      onChange: (value) => props.onItemsChange?.(value)
    });
    createSortBasedOnDOMPosition(items, setItems);
    const registerItem = (item) => {
      setItems((prevItems) => {
        const index = findDOMIndex(prevItems, item);
        return addItemToArray(prevItems, item, index);
      });
      return () => {
        setItems((prevItems) => {
          const nextItems = prevItems.filter((prevItem) => prevItem.ref() !== item.ref());
          if (prevItems.length === nextItems.length) {
            return prevItems;
          }
          return nextItems;
        });
      };
    };
    const DomCollectionProvider = (props2) => {
      return createComponent(DomCollectionContext.Provider, {
        value: {
          registerItem
        },
        get children() {
          return props2.children;
        }
      });
    };
    return {
      DomCollectionProvider
    };
  }
  function createDomCollectionItem(props) {
    const context = useDomCollectionContext();
    const mergedProps = mergeDefaultProps({
      shouldRegisterItem: true
    }, props);
    createEffect(() => {
      if (!mergedProps.shouldRegisterItem) {
        return;
      }
      const unregister = context.registerItem(mergedProps.getItem());
      onCleanup(unregister);
    });
  }

  function Polymorphic(props) {
    const [local, others] = splitProps(props, ["as"]);
    if (!local.as) {
      throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");
    }
    return (
      // @ts-ignore: Props are valid but not worth calculating
      createComponent(Dynamic, mergeProps(others, {
        get component() {
          return local.as;
        }
      }))
    );
  }

  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
  };

  var access = (v) => typeof v === "function" ? v() : v;

  var createPresence = (props) => {
    const refStyles = createMemo(() => {
      const element = access(props.element);
      if (!element) return;
      return getComputedStyle(element);
    });
    const getAnimationName = () => {
      return refStyles()?.animationName ?? "none";
    };
    const [presentState, setPresentState] = createSignal(access(props.show) ? "present" : "hidden");
    let animationName = "none";
    createEffect((prevShow) => {
      const show = access(props.show);
      untrack(() => {
        if (prevShow === show) return show;
        const prevAnimationName = animationName;
        const currentAnimationName = getAnimationName();
        if (show) {
          setPresentState("present");
        } else if (currentAnimationName === "none" || refStyles()?.display === "none") {
          setPresentState("hidden");
        } else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (prevShow === true && isAnimating) {
            setPresentState("hiding");
          } else {
            setPresentState("hidden");
          }
        }
      });
      return show;
    });
    createEffect(() => {
      const element = access(props.element);
      if (!element) return;
      const handleAnimationStart = (event) => {
        if (event.target === element) {
          animationName = getAnimationName();
        }
      };
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName();
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === element && isCurrentAnimation && presentState() === "hiding") {
          setPresentState("hidden");
        }
      };
      element.addEventListener("animationstart", handleAnimationStart);
      element.addEventListener("animationcancel", handleAnimationEnd);
      element.addEventListener("animationend", handleAnimationEnd);
      onCleanup(() => {
        element.removeEventListener("animationstart", handleAnimationStart);
        element.removeEventListener("animationcancel", handleAnimationEnd);
        element.removeEventListener("animationend", handleAnimationEnd);
      });
    });
    return {
      present: () => presentState() === "present" || presentState() === "hiding",
      state: presentState,
      setState: setPresentState
    };
  };
  var presence_default = createPresence;
  var src_default = presence_default;

  /**
   * Instantiate a new ResizeObserver that automatically get's disposed on cleanup.
   *
   * @param callback handler called once element size changes
   * @param options ResizeObserver options
   * @returns `observe` and `unobserve` functions
   */
  function makeResizeObserver(callback, options) {
      const observer = new ResizeObserver(callback);
      onCleanup(observer.disconnect.bind(observer));
      return {
          observe: ref => observer.observe(ref, options),
          unobserve: observer.unobserve.bind(observer),
      };
  }
  /**
   * Create resize observer instance, listening for changes to size of the reactive {@link targets} array.
   *
   * @param targets Elements to be observed. Can be a reactive signal or store top-level array.
   * @param onResize - Function handler to trigger on element resize
   *
   * @example
   * ```tsx
   * let ref
   * createResizeObserver(() => ref, ({ width, height }, el) => {
   *   if (el === ref) console.log(width, height)
   * });
   * <div ref={ref}/>
   * ```
   */
  function createResizeObserver(targets, onResize, options) {
      const previousMap = new WeakMap(), { observe, unobserve } = makeResizeObserver(entries => {
          for (const entry of entries) {
              const { contentRect, target } = entry, width = Math.round(contentRect.width), height = Math.round(contentRect.height), previous = previousMap.get(target);
              if (!previous || previous.width !== width || previous.height !== height) {
                  onResize(contentRect, target, entry);
                  previousMap.set(target, { width, height });
              }
          }
      }, options);
      createEffect((prev) => {
          const refs = filterNonNullable(asArray(access$1(targets)));
          handleDiffArray(refs, prev, observe, unobserve);
          return refs;
      }, []);
  }

  var tabs_exports = {};
  __export(tabs_exports, {
    Content: () => TabsContent,
    Indicator: () => TabsIndicator,
    List: () => TabsList$1,
    Root: () => TabsRoot,
    Tabs: () => Tabs,
    Trigger: () => TabsTrigger
  });
  var TabsContext = createContext();
  function useTabsContext() {
    const context = useContext(TabsContext);
    if (context === void 0) {
      throw new Error("[kobalte]: `useTabsContext` must be used within a `Tabs` component");
    }
    return context;
  }
  function TabsContent(props) {
    const [ref, setRef] = createSignal();
    const context = useTabsContext();
    const [local, others] = splitProps(props, ["ref", "id", "value", "forceMount"]);
    const [tabIndex, setTabIndex] = createSignal(0);
    const id = () => local.id ?? context.generateContentId(local.value);
    const isSelected = () => context.listState().selectedKey() === local.value;
    const {
      present
    } = src_default({
      show: () => local.forceMount || isSelected(),
      element: () => ref() ?? null
    });
    createEffect(on([() => ref(), () => present()], ([ref2, isPresent]) => {
      if (ref2 == null || !isPresent) {
        return;
      }
      const updateTabIndex = () => {
        const walker = getFocusableTreeWalker(ref2, {
          tabbable: true
        });
        setTabIndex(walker.nextNode() ? void 0 : 0);
      };
      updateTabIndex();
      const observer = new MutationObserver(updateTabIndex);
      observer.observe(ref2, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["tabindex", "disabled"]
      });
      onCleanup(() => {
        observer.disconnect();
      });
    }));
    createEffect(on([() => local.value, id], ([value, id2]) => {
      context.contentIdsMap().set(value, id2);
    }));
    return createComponent(Show, {
      get when() {
        return present();
      },
      get children() {
        return createComponent(Polymorphic, mergeProps({
          as: "div",
          ref(r$) {
            var _ref$ = mergeRefs(setRef, local.ref);
            typeof _ref$ === "function" && _ref$(r$);
          },
          get id() {
            return id();
          },
          role: "tabpanel",
          get tabIndex() {
            return tabIndex();
          },
          get ["aria-labelledby"]() {
            return context.triggerIdsMap().get(local.value);
          },
          get ["data-orientation"]() {
            return context.orientation();
          },
          get ["data-selected"]() {
            return isSelected() ? "" : void 0;
          }
        }, others));
      }
    });
  }
  function TabsIndicator(props) {
    const context = useTabsContext();
    const [local, others] = splitProps(props, ["style"]);
    const [style, setStyle] = createSignal({
      width: void 0,
      height: void 0
    });
    const {
      direction
    } = useLocale();
    const computeStyle = () => {
      const selectedTab = context.selectedTab();
      if (selectedTab == null) {
        return;
      }
      const styleObj = {
        transform: void 0,
        width: void 0,
        height: void 0
      };
      const offset = direction() === "rtl" ? -1 * (selectedTab.offsetParent?.offsetWidth - selectedTab.offsetWidth - selectedTab.offsetLeft) : selectedTab.offsetLeft;
      styleObj.transform = context.orientation() === "vertical" ? `translateY(${selectedTab.offsetTop}px)` : `translateX(${offset}px)`;
      if (context.orientation() === "horizontal") {
        styleObj.width = `${selectedTab.offsetWidth}px`;
      } else {
        styleObj.height = `${selectedTab.offsetHeight}px`;
      }
      setStyle(styleObj);
    };
    onMount(() => {
      queueMicrotask(() => {
        computeStyle();
      });
    });
    createEffect(on([context.selectedTab, context.orientation, direction], () => {
      computeStyle();
    }, {
      defer: true
    }));
    const [resizing, setResizing] = createSignal(false);
    let timeout = null;
    let prevTarget = null;
    createResizeObserver(context.selectedTab, (_, t) => {
      if (prevTarget !== t) {
        prevTarget = t;
        return;
      }
      setResizing(true);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        setResizing(false);
      }, 1);
      computeStyle();
    });
    return createComponent(Polymorphic, mergeProps({
      as: "div",
      role: "presentation",
      get style() {
        return combineStyle(style(), local.style);
      },
      get ["data-orientation"]() {
        return context.orientation();
      },
      get ["data-resizing"]() {
        return resizing();
      }
    }, others));
  }
  function TabsList$1(props) {
    let ref;
    const context = useTabsContext();
    const [local, others] = splitProps(props, ["ref", "onKeyDown", "onMouseDown", "onFocusIn", "onFocusOut"]);
    const {
      direction
    } = useLocale();
    const delegate = new TabsKeyboardDelegate(() => context.listState().collection(), direction, context.orientation);
    const selectableCollection = createSelectableCollection({
      selectionManager: () => context.listState().selectionManager(),
      keyboardDelegate: () => delegate,
      selectOnFocus: () => context.activationMode() === "automatic",
      shouldFocusWrap: false,
      // handled by the keyboard delegate
      disallowEmptySelection: true
    }, () => ref);
    createEffect(() => {
      if (ref == null) {
        return;
      }
      const selectedTab = ref.querySelector(`[data-key="${context.listState().selectedKey()}"]`);
      if (selectedTab != null) {
        context.setSelectedTab(selectedTab);
      }
    });
    return createComponent(Polymorphic, mergeProps({
      as: "div",
      ref(r$) {
        var _ref$2 = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$2 === "function" && _ref$2(r$);
      },
      role: "tablist",
      get ["aria-orientation"]() {
        return context.orientation();
      },
      get ["data-orientation"]() {
        return context.orientation();
      },
      get onKeyDown() {
        return composeEventHandlers([local.onKeyDown, selectableCollection.onKeyDown]);
      },
      get onMouseDown() {
        return composeEventHandlers([local.onMouseDown, selectableCollection.onMouseDown]);
      },
      get onFocusIn() {
        return composeEventHandlers([local.onFocusIn, selectableCollection.onFocusIn]);
      },
      get onFocusOut() {
        return composeEventHandlers([local.onFocusOut, selectableCollection.onFocusOut]);
      }
    }, others));
  }
  function createSingleSelectListState(props) {
    const [selectedKey, setSelectedKey] = createControllableSignal({
      value: () => access$1(props.selectedKey),
      defaultValue: () => access$1(props.defaultSelectedKey),
      onChange: (value) => props.onSelectionChange?.(value)
    });
    const selectedKeys = createMemo(() => {
      const selection = selectedKey();
      return selection != null ? [selection] : [];
    });
    const [, defaultCreateListStateProps] = splitProps(props, ["onSelectionChange"]);
    const createListStateProps = mergeProps(defaultCreateListStateProps, {
      selectionMode: "single",
      disallowEmptySelection: true,
      allowDuplicateSelectionEvents: true,
      selectedKeys,
      onSelectionChange: (keys) => {
        const key = keys.values().next().value;
        if (key === selectedKey()) {
          props.onSelectionChange?.(key);
        }
        setSelectedKey(key);
      }
    });
    const {
      collection,
      selectionManager
    } = createListState(createListStateProps);
    const selectedItem = createMemo(() => {
      const selection = selectedKey();
      return selection != null ? collection().getItem(selection) : void 0;
    });
    return {
      collection,
      selectionManager,
      selectedKey,
      setSelectedKey,
      selectedItem
    };
  }
  function TabsRoot(props) {
    const defaultId = `tabs-${createUniqueId()}`;
    const mergedProps = mergeDefaultProps({
      id: defaultId,
      orientation: "horizontal",
      activationMode: "automatic"
    }, props);
    const [local, others] = splitProps(mergedProps, ["value", "defaultValue", "onChange", "orientation", "activationMode", "disabled"]);
    const [items, setItems] = createSignal([]);
    const [selectedTab, setSelectedTab] = createSignal();
    const {
      DomCollectionProvider
    } = createDomCollection({
      items,
      onItemsChange: setItems
    });
    const listState = createSingleSelectListState({
      selectedKey: () => local.value,
      defaultSelectedKey: () => local.defaultValue,
      onSelectionChange: (key) => local.onChange?.(String(key)),
      dataSource: items
    });
    let lastSelectedKey = listState.selectedKey();
    createEffect(on([() => listState.selectionManager(), () => listState.collection(), () => listState.selectedKey()], ([selectionManager, collection, currentSelectedKey]) => {
      let selectedKey = currentSelectedKey;
      if (selectionManager.isEmpty() || selectedKey == null || !collection.getItem(selectedKey)) {
        selectedKey = collection.getFirstKey();
        let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : void 0;
        while (selectedItem?.disabled && selectedItem.key !== collection.getLastKey()) {
          selectedKey = collection.getKeyAfter(selectedItem.key);
          selectedItem = selectedKey != null ? collection.getItem(selectedKey) : void 0;
        }
        if (selectedItem?.disabled && selectedKey === collection.getLastKey()) {
          selectedKey = collection.getFirstKey();
        }
        if (selectedKey != null) {
          selectionManager.setSelectedKeys([selectedKey]);
        }
      }
      if (selectionManager.focusedKey() == null || !selectionManager.isFocused() && selectedKey !== lastSelectedKey) {
        selectionManager.setFocusedKey(selectedKey);
      }
      lastSelectedKey = selectedKey;
    }));
    const triggerIdsMap = /* @__PURE__ */ new Map();
    const contentIdsMap = /* @__PURE__ */ new Map();
    const context = {
      isDisabled: () => local.disabled ?? false,
      orientation: () => local.orientation,
      activationMode: () => local.activationMode,
      triggerIdsMap: () => triggerIdsMap,
      contentIdsMap: () => contentIdsMap,
      listState: () => listState,
      selectedTab,
      setSelectedTab,
      generateTriggerId: (value) => `${others.id}-trigger-${value}`,
      generateContentId: (value) => `${others.id}-content-${value}`
    };
    return createComponent(DomCollectionProvider, {
      get children() {
        return createComponent(TabsContext.Provider, {
          value: context,
          get children() {
            return createComponent(Polymorphic, mergeProps({
              as: "div",
              get ["data-orientation"]() {
                return context.orientation();
              }
            }, others));
          }
        });
      }
    });
  }
  function TabsTrigger(props) {
    let ref;
    const context = useTabsContext();
    const mergedProps = mergeDefaultProps({
      type: "button"
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref", "id", "value", "disabled", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]);
    const id = () => local.id ?? context.generateTriggerId(local.value);
    const isHighlighted = () => context.listState().selectionManager().focusedKey() === local.value;
    const isDisabled = () => local.disabled || context.isDisabled();
    const contentId = () => context.contentIdsMap().get(local.value);
    createDomCollectionItem({
      getItem: () => ({
        ref: () => ref,
        type: "item",
        key: local.value,
        textValue: "",
        // not applicable here
        disabled: isDisabled()
      })
    });
    const selectableItem = createSelectableItem({
      key: () => local.value,
      selectionManager: () => context.listState().selectionManager(),
      disabled: isDisabled
    }, () => ref);
    const onClick = (e) => {
      if (isWebKit()) {
        focusWithoutScrolling(e.currentTarget);
      }
    };
    createEffect(on([() => local.value, id], ([value, id2]) => {
      context.triggerIdsMap().set(value, id2);
    }));
    return createComponent(Polymorphic, mergeProps({
      as: "button",
      ref(r$) {
        var _ref$3 = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$3 === "function" && _ref$3(r$);
      },
      get id() {
        return id();
      },
      role: "tab",
      get tabIndex() {
        return memo(() => !!!isDisabled())() ? selectableItem.tabIndex() : void 0;
      },
      get disabled() {
        return isDisabled();
      },
      get ["aria-selected"]() {
        return selectableItem.isSelected();
      },
      get ["aria-disabled"]() {
        return isDisabled() || void 0;
      },
      get ["aria-controls"]() {
        return memo(() => !!selectableItem.isSelected())() ? contentId() : void 0;
      },
      get ["data-key"]() {
        return selectableItem.dataKey();
      },
      get ["data-orientation"]() {
        return context.orientation();
      },
      get ["data-selected"]() {
        return selectableItem.isSelected() ? "" : void 0;
      },
      get ["data-highlighted"]() {
        return isHighlighted() ? "" : void 0;
      },
      get ["data-disabled"]() {
        return isDisabled() ? "" : void 0;
      },
      get onPointerDown() {
        return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
      },
      get onPointerUp() {
        return composeEventHandlers([local.onPointerUp, selectableItem.onPointerUp]);
      },
      get onClick() {
        return composeEventHandlers([local.onClick, selectableItem.onClick, onClick]);
      },
      get onKeyDown() {
        return composeEventHandlers([local.onKeyDown, selectableItem.onKeyDown]);
      },
      get onMouseDown() {
        return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
      },
      get onFocus() {
        return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
      }
    }, others));
  }
  var Tabs = Object.assign(TabsRoot, {
    Content: TabsContent,
    Indicator: TabsIndicator,
    List: TabsList$1,
    Trigger: TabsTrigger
  });

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var classnames = {exports: {}};

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */

  var hasRequiredClassnames;

  function requireClassnames () {
  	if (hasRequiredClassnames) return classnames.exports;
  	hasRequiredClassnames = 1;
  	(function (module) {
  		/* global define */

  		(function () {

  			var hasOwn = {}.hasOwnProperty;

  			function classNames () {
  				var classes = '';

  				for (var i = 0; i < arguments.length; i++) {
  					var arg = arguments[i];
  					if (arg) {
  						classes = appendClass(classes, parseValue(arg));
  					}
  				}

  				return classes;
  			}

  			function parseValue (arg) {
  				if (typeof arg === 'string' || typeof arg === 'number') {
  					return arg;
  				}

  				if (typeof arg !== 'object') {
  					return '';
  				}

  				if (Array.isArray(arg)) {
  					return classNames.apply(null, arg);
  				}

  				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  					return arg.toString();
  				}

  				var classes = '';

  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes = appendClass(classes, key);
  					}
  				}

  				return classes;
  			}

  			function appendClass (value, newClass) {
  				if (!newClass) {
  					return value;
  				}
  			
  				if (value) {
  					return value + ' ' + newClass;
  				}
  			
  				return value + newClass;
  			}

  			if (module.exports) {
  				classNames.default = classNames;
  				module.exports = classNames;
  			} else {
  				window.classNames = classNames;
  			}
  		}()); 
  	} (classnames));
  	return classnames.exports;
  }

  var classnamesExports = requireClassnames();
  const cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

  const stats = "data:image/svg+xml,%3csvg%20width='10'%20height='9'%20viewBox='0%200%2010%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%3e%3cpath%20d='M2.5%205.14258H0.357143C0.159898%205.14258%200%205.28648%200%205.46399V8.6781C0%208.85561%200.159898%208.99951%200.357143%208.99951H2.5C2.69724%208.99951%202.85714%208.85561%202.85714%208.6781V5.46399C2.85714%205.28648%202.69724%205.14258%202.5%205.14258Z'%20fill='white'/%3e%3cpath%20d='M9.64258%202.57227H7.49972C7.30248%202.57227%207.14258%202.71617%207.14258%202.89368V8.67907C7.14258%208.85658%207.30248%209.00048%207.49972%209.00048H9.64258C9.83982%209.00048%209.99972%208.85658%209.99972%208.67907V2.89368C9.99972%202.71617%209.83982%202.57227%209.64258%202.57227Z'%20fill='white'/%3e%3cpath%20d='M6.07129%200H3.92843C3.73119%200%203.57129%200.1439%203.57129%200.321411V8.67809C3.57129%208.8556%203.73119%208.9995%203.92843%208.9995H6.07129C6.26853%208.9995%206.42843%208.8556%206.42843%208.67809V0.321411C6.42843%200.1439%206.26853%200%206.07129%200Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e";

  const tips = "data:image/svg+xml,%3csvg%20width='10'%20height='9'%20viewBox='0%200%2010%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%203.74957C7.76142%203.74957%2010%202.9102%2010%201.87478C10%200.839369%207.76142%200%205%200C2.23858%200%200%200.839369%200%201.87478C0%202.9102%202.23858%203.74957%205%203.74957Z'%20fill='%2388888A'/%3e%3cpath%20d='M5%203.74957C7.76142%203.74957%2010%202.9102%2010%201.87478C10%200.839369%207.76142%200%205%200C2.23858%200%200%200.839369%200%201.87478C0%202.9102%202.23858%203.74957%205%203.74957Z'%20fill='%2388888A'/%3e%3cpath%20d='M8.85176%204.26648C7.80809%204.65779%206.4402%204.87332%205%204.87332C3.5598%204.87332%202.19189%204.65779%201.14824%204.26648C0.670625%204.0874%200.294668%203.88387%200%203.66797V4.46085C0%204.96162%200.520059%205.43244%201.46447%205.78651C2.40883%206.14063%203.66443%206.33566%205%206.33566C6.33557%206.33566%207.59117%206.14065%208.53553%205.78653C9.4799%205.43244%2010%204.96162%2010%204.46085V3.66797C9.70533%203.88387%209.32938%204.08736%208.85176%204.26648Z'%20fill='%2388888A'/%3e%3cpath%20d='M8.85176%206.85435C7.80813%207.24566%206.4402%207.46119%205%207.46119C3.5598%207.46119%202.19187%207.24566%201.14824%206.85433C0.670605%206.67525%200.294648%206.47176%200%206.25586V7.12375C0%208.15914%202.23857%208.99851%205%208.99851C7.76143%208.99851%2010%208.15914%2010%207.12373V6.25588C9.70537%206.47174%209.32939%206.67527%208.85176%206.85435Z'%20fill='%2388888A'/%3e%3c/svg%3e";

  const gas = "data:image/svg+xml,%3csvg%20width='9'%20height='9'%20viewBox='0%200%209%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.55486%201.45811L8.02999%200.532161C7.92014%200.338415%207.65663%200.26144%207.44132%200.360317C7.22604%200.459177%207.14058%200.696412%207.2504%200.890176L7.60796%201.52099C7.03567%201.69202%206.62159%202.17807%206.62159%202.74987V3.71581C6.62159%203.87896%206.76853%204.01123%206.9498%204.01123H7.72746V5.00081C7.72746%205.44009%207.33043%205.79745%206.84241%205.79745H6.30967V0.725802C6.30965%200.3256%205.94795%200%205.50332%200H1.63341C1.07318%200%200.61738%200.410239%200.61738%200.914504V7.56024C0.263646%207.63702%200%207.92409%200%208.26573V8.7046C0%208.86774%200.146939%209%200.32819%209H6.59888C6.78013%209%206.92709%208.86774%206.92709%208.7046V8.26573C6.92709%207.92409%206.6634%207.63702%206.30967%207.56024V6.58517H6.84241C7.813%206.58517%208.60267%205.87441%208.60267%205.00076V1.63711C8.60265%201.57488%208.58627%201.51354%208.55486%201.45811ZM4.92209%202.941H2.00498C1.85392%202.941%201.73147%202.83079%201.73147%202.69482V1.25967C1.73147%201.1237%201.85392%201.01349%202.00498%201.01349H4.92209C5.07315%201.01349%205.1956%201.1237%205.1956%201.25967V2.69484C5.1956%202.83079%205.07315%202.941%204.92209%202.941Z'%20fill='%238750E7'/%3e%3c/svg%3e";

  const burger = "data:image/svg+xml,%3csvg%20width='10'%20height='9'%20viewBox='0%200%2010%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.95308%207.28606H0.571707C0.256649%207.28606%200.000245337%207.57451%200.000245337%207.92895C0.000245337%208.51954%200.427311%209.00043%200.952675%209.00043H8.57211C9.09748%209.00043%209.52454%208.51954%209.52454%207.92895C9.52453%207.57449%209.26814%207.28606%208.95308%207.28606ZM0.200245%203.85732H9.31843C9.36605%203.85732%209.41786%203.83074%209.4533%203.79475C9.48794%203.75945%209.50955%203.71082%209.51387%203.65846C9.57559%202.96844%209.35881%202.29341%208.88641%201.70537C8.04065%200.653606%206.46039%200%204.76239%200C3.06174%200%201.47994%200.654883%200.635329%201.70922C0.162909%202.29856%20-0.052717%202.97443%200.0109048%203.66533C0.0208201%203.77417%200.102729%203.85732%200.200245%203.85732ZM7.29432%201.77694C7.3686%201.69338%207.48937%201.69338%207.56367%201.77694L7.94464%202.20553C8.01892%202.28954%208.01892%202.42496%207.94464%202.50855C7.90768%202.55055%207.85892%202.57154%207.81016%202.57154C7.7614%202.57154%207.71262%202.55055%207.67529%202.50855L7.29432%202.07996C7.22004%201.9964%207.22004%201.86095%207.29432%201.77694ZM5.77043%202.63414L6.1514%202.20555C6.22568%202.12198%206.34645%202.12198%206.42075%202.20555C6.49503%202.28956%206.49503%202.42498%206.42075%202.50857L6.03978%202.93716C6.00282%202.97916%205.95406%203.00015%205.9053%203.00015C5.85654%203.00015%205.80777%202.97916%205.77043%202.93716C5.69615%202.85357%205.69615%202.71814%205.77043%202.63414ZM4.62752%200.919769C4.70181%200.836204%204.82258%200.836204%204.89687%200.919769L5.27784%201.34836C5.35212%201.43236%205.35212%201.56779%205.27784%201.65137C5.2409%201.69338%205.19212%201.71437%205.14336%201.71437C5.0946%201.71437%205.04583%201.69338%205.00849%201.65137L4.62752%201.22279C4.55322%201.1392%204.55322%201.00377%204.62752%200.919769ZM3.10363%201.77694L3.4846%201.34836C3.55888%201.26479%203.67965%201.26479%203.75395%201.34836C3.82823%201.43236%203.82823%201.56779%203.75395%201.65137L3.37298%202.07996C3.33602%202.12196%203.28726%202.14295%203.2385%202.14295C3.18975%202.14295%203.14097%202.12196%203.10363%202.07996C3.02935%201.9964%203.02935%201.86095%203.10363%201.77694ZM1.57974%202.20555C1.65402%202.12198%201.77479%202.12198%201.84909%202.20555L2.23006%202.63414C2.30434%202.71814%202.30434%202.85357%202.23006%202.93716C2.21248%202.95716%202.19153%202.97303%202.16844%202.98385C2.14536%202.99466%202.12059%203.0002%202.09558%203.00015C2.07052%203.00017%202.0457%202.99461%202.02255%202.9838C1.99941%202.97299%201.97839%202.95714%201.96071%202.93716L1.57974%202.50857C1.50546%202.42498%201.50546%202.28956%201.57974%202.20555ZM0.571707%204.28593C0.546684%204.2859%200.521902%204.29143%200.498779%204.30219C0.475657%204.31295%200.454647%204.32873%200.436953%204.34864C0.419259%204.36854%200.405229%204.39218%200.395664%204.41819C0.3861%204.4442%200.381189%204.47208%200.381214%204.50023C0.381189%204.52838%200.3861%204.55626%200.395664%204.58228C0.405229%204.60829%200.419259%204.63193%200.436953%204.65183C0.454647%204.67174%200.475657%204.68752%200.498779%204.69828C0.521902%204.70904%200.546684%204.71457%200.571707%204.71454H3.57414L5.81997%205.97759C5.84642%205.99265%205.87566%206.00043%205.9053%206.0003C5.95445%206.0003%206.00321%205.97887%206.03978%205.9373L7.12708%204.71454H8.95308C9.05823%204.71454%209.14358%204.61854%209.14358%204.50023C9.14358%204.38195%209.05824%204.28593%208.95308%204.28593H0.571707Z'%20fill='%238750E7'/%3e%3cpath%20d='M0.762188%206.85888H8.7626C9.2251%206.85888%209.59197%206.39344%209.51387%205.85684C9.45215%205.43554%209.09938%205.14453%208.71992%205.14453H7.55415L6.2497%206.61203C6.19318%206.67564%206.1203%206.71761%206.04139%206.732C5.96248%206.74639%205.88154%206.73246%205.81006%206.69219L3.0583%205.14455H0.804472C0.425029%205.14455%200.0722442%205.43556%200.0105198%205.85686C-0.067575%206.39342%200.299683%206.85888%200.762188%206.85888Z'%20fill='%238750E7'/%3e%3c/svg%3e";

  var TradeDir = /* @__PURE__ */ ((TradeDir2) => {
    TradeDir2["Buy"] = "Buy";
    TradeDir2["Sell"] = "Sell";
    return TradeDir2;
  })(TradeDir || {});
  const statIcons = {
    stats,
    tips,
    gas,
    burger,
    calc: chrome.runtime.getURL("assets2/calc.svg")
  };
  var BCellColor = /* @__PURE__ */ ((BCellColor2) => {
    BCellColor2["green"] = "green";
    BCellColor2["red"] = "red";
    BCellColor2["white"] = "white";
    return BCellColor2;
  })(BCellColor || {});
  const statMid = [{
    icon: "stats",
    color: "gray",
    value: "20%"
  }, {
    icon: "tips",
    color: "gray",
    value: "0.001"
  }, {
    icon: "gas",
    color: "gray",
    value: "Auto"
  }, {
    icon: "burger",
    color: "gray",
    value: "On"
  }, {
    icon: "calc",
    color: "gray",
    value: "5"
  }];
  const defaultBuyQuicks = [{
    value: "0.0026"
  }, {
    value: "1"
  }, {
    value: "2"
  }, {
    value: "5"
  }];
  const defaultSellQuicks = [{
    value: "10"
  }, {
    value: "25"
  }, {
    value: "40"
  }, {
    value: "75"
  }];

  var _tmpl$$i = /* @__PURE__ */ template(`<div class="ext-flex ext-gap-1 ext-pr-1 ext-border-r ext-items-center"><div><img alt=props.icon></div><div>`);
  const StatsCell = (props) => (() => {
    var _el$ = _tmpl$$i(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$2.nextSibling;
    insert(_el$4, () => props.value);
    createRenderEffect((_p$) => {
      var _v$ = statIcons[props.icon], _v$2 = cn("ext-text-xs", {
        [`ext-text-gray-300`]: props.color === "gray",
        [`ext-text-purple-500`]: props.color === "purple"
      });
      _v$ !== _p$.e && setAttribute(_el$3, "src", _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$4, _p$.t = _v$2);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$;
  })();

  var _tmpl$$h = /* @__PURE__ */ template(`<div class="ext-flex ext-justify-center ext-w-full ext-gap-1 ext-my-4">`);
  const StatsContainer = (props) => (() => {
    var _el$ = _tmpl$$h();
    insert(_el$, () => props.children);
    return _el$;
  })();

  var _tmpl$$g = /* @__PURE__ */ template(`<div><div class="ext-flex ext-flex-col"><div class="ext-text-[9px] ext-text-gray-400"></div><div class="ext-flex ext-items-baseline ext-gap-1 ext-justify-center"><div class=ext-w-[10px]><img width=10px alt=sol_icon></div><div>`);
  const BottomStatsCell = (props) => {
    const sol = chrome.runtime.getURL("assets2/sol.svg");
    return (() => {
      var _el$ = _tmpl$$g(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$5.nextSibling;
      insert(_el$3, () => props.title);
      setAttribute(_el$6, "src", sol);
      insert(_el$7, () => props.value);
      createRenderEffect((_p$) => {
        var _v$ = cn("ext-flex ext-gap-1 ext-px-3 ext-border-r ext-items-start ext-flex-1 ext-justify-center", props.cn), _v$2 = cn("ext-pt-1 ext-whitespace-nowrap", {
          [`ext-text-green-500`]: props.color === BCellColor.green,
          [`ext-text-red-600`]: props.color === BCellColor.red,
          [`ext-text-white`]: props.color === BCellColor.white || !props.color
        });
        _v$ !== _p$.e && className(_el$, _p$.e = _v$);
        _v$2 !== _p$.t && className(_el$7, _p$.t = _v$2);
        return _p$;
      }, {
        e: void 0,
        t: void 0
      });
      return _el$;
    })();
  };

  function createTagName(ref, fallback) {
    const [tagName, setTagName] = createSignal(stringOrUndefined(fallback?.()));
    createEffect(() => {
      setTagName(ref()?.tagName.toLowerCase() || stringOrUndefined(fallback?.()));
    });
    return tagName;
  }
  function stringOrUndefined(value) {
    return isString(value) ? value : void 0;
  }

  var button_exports = {};
  __export(button_exports, {
    Button: () => Button$1,
    Root: () => ButtonRoot
  });
  var BUTTON_INPUT_TYPES = ["button", "color", "file", "image", "reset", "submit"];
  function isButton(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName === "button") {
      return true;
    }
    if (tagName === "input" && element.type) {
      return BUTTON_INPUT_TYPES.indexOf(element.type) !== -1;
    }
    return false;
  }
  function ButtonRoot(props) {
    let ref;
    const mergedProps = mergeDefaultProps({
      type: "button"
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref", "type", "disabled"]);
    const tagName = createTagName(() => ref, () => "button");
    const isNativeButton = createMemo(() => {
      const elementTagName = tagName();
      if (elementTagName == null) {
        return false;
      }
      return isButton({
        tagName: elementTagName,
        type: local.type
      });
    });
    const isNativeInput = createMemo(() => {
      return tagName() === "input";
    });
    const isNativeLink = createMemo(() => {
      return tagName() === "a" && ref?.getAttribute("href") != null;
    });
    return createComponent(Polymorphic, mergeProps({
      as: "button",
      ref(r$) {
        var _ref$ = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$ === "function" && _ref$(r$);
      },
      get type() {
        return isNativeButton() || isNativeInput() ? local.type : void 0;
      },
      get role() {
        return !isNativeButton() && !isNativeLink() ? "button" : void 0;
      },
      get tabIndex() {
        return !isNativeButton() && !isNativeLink() && !local.disabled ? 0 : void 0;
      },
      get disabled() {
        return isNativeButton() || isNativeInput() ? local.disabled : void 0;
      },
      get ["aria-disabled"]() {
        return !isNativeButton() && !isNativeInput() && local.disabled ? true : void 0;
      },
      get ["data-disabled"]() {
        return local.disabled ? "" : void 0;
      }
    }, others));
  }
  var Button$1 = ButtonRoot;

  const SolAmountButton = (props) => {
    const common = "ext-w-[56px] ext-text-xs ext-whitespace-nowrap ext-py-[6px] ext-text-white ext-text-center ext-text-base ext-rounded-lg ext-font-medium";
    const unactive = "ext-bg-green-100 ext-border ext-border-green-500 hover:ext-bg-green-500 ext-transition ext-ease-in ext-duration-200";
    const active = "ext-bg-green-400";
    return createComponent(Button$1, mergeProps({
      get type() {
        return props.type ?? "button";
      },
      get ["class"]() {
        return cn(common, {
          [`${unactive}`]: !props.active,
          [`${active}`]: props.active
        }, props.cn);
      }
    }, props));
  };

  function createRegisterId(setter) {
    return (id) => {
      setter(id);
      return () => setter(void 0);
    };
  }

  var FORM_CONTROL_PROP_NAMES = ["id", "name", "validationState", "required", "disabled", "readOnly"];
  function createFormControl(props) {
    const defaultId = `form-control-${createUniqueId()}`;
    const mergedProps = mergeDefaultProps({
      id: defaultId
    }, props);
    const [labelId, setLabelId] = createSignal();
    const [fieldId, setFieldId] = createSignal();
    const [descriptionId, setDescriptionId] = createSignal();
    const [errorMessageId, setErrorMessageId] = createSignal();
    const getAriaLabelledBy = (fieldId2, fieldAriaLabel, fieldAriaLabelledBy) => {
      const hasAriaLabelledBy = fieldAriaLabelledBy != null || labelId() != null;
      return [
        fieldAriaLabelledBy,
        labelId(),
        // If there is both an aria-label and aria-labelledby, add the field itself has an aria-labelledby
        hasAriaLabelledBy && fieldAriaLabel != null ? fieldId2 : void 0
      ].filter(Boolean).join(" ") || void 0;
    };
    const getAriaDescribedBy = (fieldAriaDescribedBy) => {
      return [
        descriptionId(),
        // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA.
        // See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
        errorMessageId(),
        fieldAriaDescribedBy
      ].filter(Boolean).join(" ") || void 0;
    };
    const dataset = createMemo(() => ({
      "data-valid": access$1(mergedProps.validationState) === "valid" ? "" : void 0,
      "data-invalid": access$1(mergedProps.validationState) === "invalid" ? "" : void 0,
      "data-required": access$1(mergedProps.required) ? "" : void 0,
      "data-disabled": access$1(mergedProps.disabled) ? "" : void 0,
      "data-readonly": access$1(mergedProps.readOnly) ? "" : void 0
    }));
    const formControlContext = {
      name: () => access$1(mergedProps.name) ?? access$1(mergedProps.id),
      dataset,
      validationState: () => access$1(mergedProps.validationState),
      isRequired: () => access$1(mergedProps.required),
      isDisabled: () => access$1(mergedProps.disabled),
      isReadOnly: () => access$1(mergedProps.readOnly),
      labelId,
      fieldId,
      descriptionId,
      errorMessageId,
      getAriaLabelledBy,
      getAriaDescribedBy,
      generateId: createGenerateId(() => access$1(mergedProps.id)),
      registerLabel: createRegisterId(setLabelId),
      registerField: createRegisterId(setFieldId),
      registerDescription: createRegisterId(setDescriptionId),
      registerErrorMessage: createRegisterId(setErrorMessageId)
    };
    return {
      formControlContext
    };
  }
  var FormControlContext = createContext();
  function useFormControlContext() {
    const context = useContext(FormControlContext);
    if (context === void 0) {
      throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
    }
    return context;
  }
  function FormControlDescription(props) {
    const context = useFormControlContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("description")
    }, props);
    createEffect(() => onCleanup(context.registerDescription(mergedProps.id)));
    return createComponent(Polymorphic, mergeProps({
      as: "div"
    }, () => context.dataset(), mergedProps));
  }

  var FORM_CONTROL_FIELD_PROP_NAMES = ["id", "aria-label", "aria-labelledby", "aria-describedby"];
  function createFormControlField(props) {
    const context = useFormControlContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("field")
    }, props);
    createEffect(() => onCleanup(context.registerField(access$1(mergedProps.id))));
    return {
      fieldProps: {
        id: () => access$1(mergedProps.id),
        ariaLabel: () => access$1(mergedProps["aria-label"]),
        ariaLabelledBy: () => context.getAriaLabelledBy(access$1(mergedProps.id), access$1(mergedProps["aria-label"]), access$1(mergedProps["aria-labelledby"])),
        ariaDescribedBy: () => context.getAriaDescribedBy(access$1(mergedProps["aria-describedby"]))
      }
    };
  }

  function FormControlLabel(props) {
    let ref;
    const context = useFormControlContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("label")
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref"]);
    const tagName = createTagName(() => ref, () => "label");
    createEffect(() => onCleanup(context.registerLabel(others.id)));
    return createComponent(Polymorphic, mergeProps({
      as: "label",
      ref(r$) {
        var _ref$ = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$ === "function" && _ref$(r$);
      },
      get ["for"]() {
        return memo(() => tagName() === "label")() ? context.fieldId() : void 0;
      }
    }, () => context.dataset(), others));
  }

  function createFormResetListener(element, handler) {
    createEffect(on(element, (element2) => {
      if (element2 == null) {
        return;
      }
      const form = getClosestForm(element2);
      if (form == null) {
        return;
      }
      form.addEventListener("reset", handler, {
        passive: true
      });
      onCleanup(() => {
        form.removeEventListener("reset", handler);
      });
    }));
  }
  function getClosestForm(element) {
    return isFormElement(element) ? element.form : element.closest("form");
  }
  function isFormElement(element) {
    return element.matches("textarea, input, select, button");
  }

  function FormControlErrorMessage(props) {
    const context = useFormControlContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("error-message")
    }, props);
    const [local, others] = splitProps(mergedProps, ["forceMount"]);
    const isInvalid = () => context.validationState() === "invalid";
    createEffect(() => {
      if (!isInvalid()) {
        return;
      }
      onCleanup(context.registerErrorMessage(others.id));
    });
    return createComponent(Show, {
      get when() {
        return local.forceMount || isInvalid();
      },
      get children() {
        return createComponent(Polymorphic, mergeProps({
          as: "div"
        }, () => context.dataset(), others));
      }
    });
  }

  var text_field_exports = {};
  __export(text_field_exports, {
    Description: () => FormControlDescription,
    ErrorMessage: () => FormControlErrorMessage,
    Input: () => TextFieldInput,
    Label: () => FormControlLabel,
    Root: () => TextFieldRoot,
    TextArea: () => TextFieldTextArea,
    TextField: () => TextField
  });
  var TextFieldContext = createContext();
  function useTextFieldContext() {
    const context = useContext(TextFieldContext);
    if (context === void 0) {
      throw new Error("[kobalte]: `useTextFieldContext` must be used within a `TextField` component");
    }
    return context;
  }
  function TextFieldInput(props) {
    return createComponent(TextFieldInputBase, mergeProps({
      type: "text"
    }, props));
  }
  function TextFieldInputBase(props) {
    const formControlContext = useFormControlContext();
    const context = useTextFieldContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("input")
    }, props);
    const [local, formControlFieldProps, others] = splitProps(mergedProps, ["onInput"], FORM_CONTROL_FIELD_PROP_NAMES);
    const {
      fieldProps
    } = createFormControlField(formControlFieldProps);
    return createComponent(Polymorphic, mergeProps({
      as: "input",
      get id() {
        return fieldProps.id();
      },
      get name() {
        return formControlContext.name();
      },
      get value() {
        return context.value();
      },
      get required() {
        return formControlContext.isRequired();
      },
      get disabled() {
        return formControlContext.isDisabled();
      },
      get readonly() {
        return formControlContext.isReadOnly();
      },
      get ["aria-label"]() {
        return fieldProps.ariaLabel();
      },
      get ["aria-labelledby"]() {
        return fieldProps.ariaLabelledBy();
      },
      get ["aria-describedby"]() {
        return fieldProps.ariaDescribedBy();
      },
      get ["aria-invalid"]() {
        return formControlContext.validationState() === "invalid" || void 0;
      },
      get ["aria-required"]() {
        return formControlContext.isRequired() || void 0;
      },
      get ["aria-disabled"]() {
        return formControlContext.isDisabled() || void 0;
      },
      get ["aria-readonly"]() {
        return formControlContext.isReadOnly() || void 0;
      },
      get onInput() {
        return composeEventHandlers([local.onInput, context.onInput]);
      }
    }, () => formControlContext.dataset(), others));
  }
  function TextFieldRoot(props) {
    let ref;
    const defaultId = `textfield-${createUniqueId()}`;
    const mergedProps = mergeDefaultProps({
      id: defaultId
    }, props);
    const [local, formControlProps, others] = splitProps(mergedProps, ["ref", "value", "defaultValue", "onChange"], FORM_CONTROL_PROP_NAMES);
    const initialValue = local.value;
    const [value, setValue] = createControllableSignal({
      value: () => initialValue === void 0 ? void 0 : local.value ?? "",
      defaultValue: () => local.defaultValue,
      onChange: (value2) => local.onChange?.(value2)
    });
    const {
      formControlContext
    } = createFormControl(formControlProps);
    createFormResetListener(() => ref, () => setValue(local.defaultValue ?? ""));
    const onInput = (e) => {
      if (formControlContext.isReadOnly() || formControlContext.isDisabled()) {
        return;
      }
      const target = e.target;
      setValue(target.value);
      target.value = value() ?? "";
    };
    const context = {
      value,
      generateId: createGenerateId(() => access$1(formControlProps.id)),
      onInput
    };
    return createComponent(FormControlContext.Provider, {
      value: formControlContext,
      get children() {
        return createComponent(TextFieldContext.Provider, {
          value: context,
          get children() {
            return createComponent(Polymorphic, mergeProps({
              as: "div",
              ref(r$) {
                var _ref$ = mergeRefs((el) => ref = el, local.ref);
                typeof _ref$ === "function" && _ref$(r$);
              },
              role: "group",
              get id() {
                return access$1(formControlProps.id);
              }
            }, () => formControlContext.dataset(), others));
          }
        });
      }
    });
  }
  function TextFieldTextArea(props) {
    let ref;
    const context = useTextFieldContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("textarea")
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref", "autoResize", "submitOnEnter", "onKeyPress"]);
    createEffect(on([() => ref, () => local.autoResize, () => context.value()], ([ref2, autoResize]) => {
      if (!ref2 || !autoResize) {
        return;
      }
      adjustHeight(ref2);
    }));
    const onKeyPress = (event) => {
      if (ref && local.submitOnEnter && event.key === "Enter" && !event.shiftKey) {
        if (ref.form) {
          ref.form.requestSubmit();
          event.preventDefault();
        }
      }
    };
    return createComponent(TextFieldInputBase, mergeProps({
      as: "textarea",
      get ["aria-multiline"]() {
        return local.submitOnEnter ? "false" : void 0;
      },
      get onKeyPress() {
        return composeEventHandlers([local.onKeyPress, onKeyPress]);
      },
      ref(r$) {
        var _ref$2 = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$2 === "function" && _ref$2(r$);
      }
    }, others));
  }
  function adjustHeight(el) {
    const prevAlignment = el.style.alignSelf;
    const prevOverflow = el.style.overflow;
    const isFirefox = "MozAppearance" in el.style;
    if (!isFirefox) {
      el.style.overflow = "hidden";
    }
    el.style.alignSelf = "start";
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight + (el.offsetHeight - el.clientHeight)}px`;
    el.style.overflow = prevOverflow;
    el.style.alignSelf = prevAlignment;
  }
  var TextField = Object.assign(TextFieldRoot, {
    Description: FormControlDescription,
    ErrorMessage: FormControlErrorMessage,
    Input: TextFieldInput,
    Label: FormControlLabel,
    TextArea: TextFieldTextArea
  });

  const TradeInput = (props) => {
    const [value, setValue] = createSignal(null);
    const handleOnInput = (e) => {
      e.preventDefault();
      props.onChange(e.currentTarget.value);
    };
    createEffect(() => {
      setValue(props.getInputValue());
    });
    return createComponent(TextField, {
      get children() {
        return createComponent(TextField.Input, {
          get value() {
            return value();
          },
          onInput: handleOnInput,
          get onChange() {
            return props.onChange;
          },
          "class": "ext-bg-gray-100 ext-border-green-500 ext-border ext-px-[20px] ext-py-[10px] ext-text-white ext-text-xs ext-w-full ext-rounded-[5px]",
          placeholder: "Enter SOL amount"
        });
      }
    });
  };

  const pin = "data:image/svg+xml,%3csvg%20width='5'%20height='5'%20viewBox='0%200%205%205'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.76394%200.10463C3.58539%20-0.0739191%203.28297%20-0.0156777%203.1835%200.216413L2.68114%201.3886C2.2684%201.26631%201.80322%201.36797%201.47725%201.69394L1.08991%202.08128C1.00628%202.16491%201.00628%202.30051%201.08991%202.38414L1.70146%202.99569L0.0627233%204.63442C-0.0209078%204.71805%20-0.0209077%204.85365%200.0627231%204.93728C0.146354%205.02091%200.281946%205.02091%200.365577%204.93728L2.00431%203.29854L2.61587%203.91011C2.6995%203.99374%202.8351%203.99374%202.91873%203.91011L3.30606%203.52277C3.63204%203.1968%203.7337%202.7316%203.61141%202.31887L4.78359%201.8165C5.01568%201.71704%205.07392%201.41461%204.89537%201.23607L3.76394%200.10463Z'%20fill='white'/%3e%3c/svg%3e";

  const wallet = "data:image/svg+xml,%3csvg%20width='10'%20height='9'%20viewBox='0%200%2010%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.04609%206.82435C6.58627%206.82433%206.21217%206.45025%206.21217%205.99043V4.60552C6.21217%204.14569%206.58627%203.77161%207.04609%203.77161H9.21901C9.23218%203.77161%209.24526%203.77201%209.25828%203.7726V2.393C9.25828%202.03788%208.97039%201.75%208.61527%201.75H0.643023C0.287881%201.74998%200%202.03786%200%202.39298V8.20294C0%208.55806%200.287881%208.84597%200.643023%208.84597H8.61527C8.97039%208.84597%209.25828%208.55808%209.25828%208.20294V6.82335C9.24526%206.82396%209.23218%206.82435%209.21901%206.82435H7.04609Z'%20fill='%234F4F4F'/%3e%3cpath%20d='M9.21955%204.22646H7.04663C6.83844%204.22646%206.66966%204.39524%206.66966%204.60343V5.98834C6.66966%206.19653%206.83844%206.36531%207.04663%206.36531H9.21955C9.42774%206.36531%209.59652%206.19655%209.59652%205.98834V4.60343C9.59652%204.39522%209.42774%204.22646%209.21955%204.22646ZM7.79538%205.83996C7.49488%205.83996%207.25128%205.59636%207.25128%205.29586C7.25128%204.99536%207.49488%204.75176%207.79538%204.75176C8.09588%204.75176%208.33948%204.99536%208.33948%205.29586C8.33948%205.59636%208.09588%205.83996%207.79538%205.83996ZM7.49618%200.570061C7.35232%200.13464%206.88273%20-0.101717%206.44733%200.0421397L3.18066%201.12136H7.67831L7.49618%200.570061Z'%20fill='%234F4F4F'/%3e%3c/svg%3e";

  const $RAW = Symbol("store-raw"),
    $NODE = Symbol("store-node"),
    $HAS = Symbol("store-has"),
    $SELF = Symbol("store-self");
  function wrap$1(value) {
    let p = value[$PROXY];
    if (!p) {
      Object.defineProperty(value, $PROXY, {
        value: p = new Proxy(value, proxyTraps$1)
      });
      if (!Array.isArray(value)) {
        const keys = Object.keys(value),
          desc = Object.getOwnPropertyDescriptors(value);
        for (let i = 0, l = keys.length; i < l; i++) {
          const prop = keys[i];
          if (desc[prop].get) {
            Object.defineProperty(value, prop, {
              enumerable: desc[prop].enumerable,
              get: desc[prop].get.bind(p)
            });
          }
        }
      }
    }
    return p;
  }
  function isWrappable(obj) {
    let proto;
    return obj != null && typeof obj === "object" && (obj[$PROXY] || !(proto = Object.getPrototypeOf(obj)) || proto === Object.prototype || Array.isArray(obj));
  }
  function unwrap(item, set = new Set()) {
    let result, unwrapped, v, prop;
    if (result = item != null && item[$RAW]) return result;
    if (!isWrappable(item) || set.has(item)) return item;
    if (Array.isArray(item)) {
      if (Object.isFrozen(item)) item = item.slice(0);else set.add(item);
      for (let i = 0, l = item.length; i < l; i++) {
        v = item[i];
        if ((unwrapped = unwrap(v, set)) !== v) item[i] = unwrapped;
      }
    } else {
      if (Object.isFrozen(item)) item = Object.assign({}, item);else set.add(item);
      const keys = Object.keys(item),
        desc = Object.getOwnPropertyDescriptors(item);
      for (let i = 0, l = keys.length; i < l; i++) {
        prop = keys[i];
        if (desc[prop].get) continue;
        v = item[prop];
        if ((unwrapped = unwrap(v, set)) !== v) item[prop] = unwrapped;
      }
    }
    return item;
  }
  function getNodes(target, symbol) {
    let nodes = target[symbol];
    if (!nodes) Object.defineProperty(target, symbol, {
      value: nodes = Object.create(null)
    });
    return nodes;
  }
  function getNode(nodes, property, value) {
    if (nodes[property]) return nodes[property];
    const [s, set] = createSignal(value, {
      equals: false,
      internal: true
    });
    s.$ = set;
    return nodes[property] = s;
  }
  function proxyDescriptor$1(target, property) {
    const desc = Reflect.getOwnPropertyDescriptor(target, property);
    if (!desc || desc.get || !desc.configurable || property === $PROXY || property === $NODE) return desc;
    delete desc.value;
    delete desc.writable;
    desc.get = () => target[$PROXY][property];
    return desc;
  }
  function trackSelf(target) {
    getListener() && getNode(getNodes(target, $NODE), $SELF)();
  }
  function ownKeys(target) {
    trackSelf(target);
    return Reflect.ownKeys(target);
  }
  const proxyTraps$1 = {
    get(target, property, receiver) {
      if (property === $RAW) return target;
      if (property === $PROXY) return receiver;
      if (property === $TRACK) {
        trackSelf(target);
        return receiver;
      }
      const nodes = getNodes(target, $NODE);
      const tracked = nodes[property];
      let value = tracked ? tracked() : target[property];
      if (property === $NODE || property === $HAS || property === "__proto__") return value;
      if (!tracked) {
        const desc = Object.getOwnPropertyDescriptor(target, property);
        if (getListener() && (typeof value !== "function" || target.hasOwnProperty(property)) && !(desc && desc.get)) value = getNode(nodes, property, value)();
      }
      return isWrappable(value) ? wrap$1(value) : value;
    },
    has(target, property) {
      if (property === $RAW || property === $PROXY || property === $TRACK || property === $NODE || property === $HAS || property === "__proto__") return true;
      getListener() && getNode(getNodes(target, $HAS), property)();
      return property in target;
    },
    set() {
      return true;
    },
    deleteProperty() {
      return true;
    },
    ownKeys: ownKeys,
    getOwnPropertyDescriptor: proxyDescriptor$1
  };
  function setProperty(state, property, value, deleting = false) {
    if (!deleting && state[property] === value) return;
    const prev = state[property],
      len = state.length;
    if (value === undefined) {
      delete state[property];
      if (state[$HAS] && state[$HAS][property] && prev !== undefined) state[$HAS][property].$();
    } else {
      state[property] = value;
      if (state[$HAS] && state[$HAS][property] && prev === undefined) state[$HAS][property].$();
    }
    let nodes = getNodes(state, $NODE),
      node;
    if (node = getNode(nodes, property, prev)) node.$(() => value);
    if (Array.isArray(state) && state.length !== len) {
      for (let i = state.length; i < len; i++) (node = nodes[i]) && node.$();
      (node = getNode(nodes, "length", len)) && node.$(state.length);
    }
    (node = nodes[$SELF]) && node.$();
  }
  function mergeStoreNode(state, value) {
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      setProperty(state, key, value[key]);
    }
  }
  function updateArray(current, next) {
    if (typeof next === "function") next = next(current);
    next = unwrap(next);
    if (Array.isArray(next)) {
      if (current === next) return;
      let i = 0,
        len = next.length;
      for (; i < len; i++) {
        const value = next[i];
        if (current[i] !== value) setProperty(current, i, value);
      }
      setProperty(current, "length", len);
    } else mergeStoreNode(current, next);
  }
  function updatePath(current, path, traversed = []) {
    let part,
      prev = current;
    if (path.length > 1) {
      part = path.shift();
      const partType = typeof part,
        isArray = Array.isArray(current);
      if (Array.isArray(part)) {
        for (let i = 0; i < part.length; i++) {
          updatePath(current, [part[i]].concat(path), traversed);
        }
        return;
      } else if (isArray && partType === "function") {
        for (let i = 0; i < current.length; i++) {
          if (part(current[i], i)) updatePath(current, [i].concat(path), traversed);
        }
        return;
      } else if (isArray && partType === "object") {
        const {
          from = 0,
          to = current.length - 1,
          by = 1
        } = part;
        for (let i = from; i <= to; i += by) {
          updatePath(current, [i].concat(path), traversed);
        }
        return;
      } else if (path.length > 1) {
        updatePath(current[part], path, [part].concat(traversed));
        return;
      }
      prev = current[part];
      traversed = [part].concat(traversed);
    }
    let value = path[0];
    if (typeof value === "function") {
      value = value(prev, traversed);
      if (value === prev) return;
    }
    if (part === undefined && value == undefined) return;
    value = unwrap(value);
    if (part === undefined || isWrappable(prev) && isWrappable(value) && !Array.isArray(value)) {
      mergeStoreNode(prev, value);
    } else setProperty(current, part, value);
  }
  function createStore(...[store, options]) {
    const unwrappedStore = unwrap(store || {});
    const isArray = Array.isArray(unwrappedStore);
    const wrappedStore = wrap$1(unwrappedStore);
    function setStore(...args) {
      batch(() => {
        isArray && args.length === 1 ? updateArray(unwrappedStore, args[0]) : updatePath(unwrappedStore, args);
      });
    }
    return [wrappedStore, setStore];
  }

  const initValue$4 = {
    dir: TradeDir.Buy,
    // buy
    buyQuicks: defaultBuyQuicks,
    activeBuyQuickIndex: null,
    solCount: null,
    buySellButtonLabel: "",
    disablebuySellButton: true,
    buyInputValue: null,
    // sell
    sellQuicks: defaultSellQuicks,
    activeSellQuickIndex: null,
    sellPercents: null,
    sellButtonLabel: "",
    disableSellButton: true,
    sellInputValue: null,
    // external
    tokenStatus: null,
    tradeStats: null,
    lastTradeEvent: null,
    //
    loading: true,
    // Trade Stats
    solBalanceLabel: "",
    labelBuyToken: "",
    labelSellToken: "",
    labelTokenBalance: ""
  };

  const selectBuyQuick = (quickItem) => {
    const activeBuyQuickIndex = tradeWidgetState.buyQuicks.findIndex(
      (item) => item.value === quickItem.value
    );
    setTradeWidgetState("activeBuyQuickIndex", activeBuyQuickIndex);
    setTradeWidgetState(
      "buyInputValue",
      tradeWidgetState.buyQuicks[activeBuyQuickIndex].value
    );
    const solCount = tradeWidgetState.buyQuicks[activeBuyQuickIndex].value;
    setTradeWidgetState("solCount", solCount);
  };

  const stringToFloat = (input) => {
    const num = parseFloat(input);
    return isNaN(num) ? null : num;
  };

  const initValue$3 = {
    logs: []
  };
  const [logStore, setLogStore] = createStore(initValue$3);
  const addLogRecord = (message) => setLogStore("logs", (prev) => [
    { type: message.eventName, event: message },
    ...prev
  ]);

  var CabalMessageType = /* @__PURE__ */ ((CabalMessageType2) => {
    CabalMessageType2["CabalEvent"] = "CABAL_EVENT";
    return CabalMessageType2;
  })(CabalMessageType || {});
  var BackgroundMessages = /* @__PURE__ */ ((BackgroundMessages2) => {
    BackgroundMessages2["INIT_CABAL"] = "INIT_CABAL";
    BackgroundMessages2["SUBSCRIBE_TOKEN"] = "SUBSCRIBE_TOKEN";
    BackgroundMessages2["BUY_MARKET"] = "BUY_MARKET";
    BackgroundMessages2["SELL_MARKET"] = "SELL_MARKET";
    BackgroundMessages2["SET_APIKEY"] = "SET_APIKEY";
    return BackgroundMessages2;
  })(BackgroundMessages || {});
  var CabalCommonMessages = /* @__PURE__ */ ((CabalCommonMessages2) => {
    CabalCommonMessages2["readyStatus"] = "readyStatus";
    return CabalCommonMessages2;
  })(CabalCommonMessages || {});

  const initValue$2 = {
    status: void 0
  };
  const [cabalTradeStream, setCabalTradeStream] = createStore(initValue$2);

  const initValue$1 = {
    status: void 0
  };
  const [cabalUserActivity, setCabalUserActivity] = createStore(initValue$1);

  const sendMessage = ({
    payload,
    cb
  }) => {
    chrome.runtime.sendMessage(payload, cb);
  };

  const buyMarket$1 = ({
    mint,
    amountSol,
    cb
  }) => {
    const payload = {
      type: BackgroundMessages.BUY_MARKET,
      data: { mint, amountSol }
    };
    sendMessage({ payload, cb });
  };

  var events = {exports: {}};

  var hasRequiredEvents;

  function requireEvents () {
  	if (hasRequiredEvents) return events.exports;
  	hasRequiredEvents = 1;

  	var R = typeof Reflect === 'object' ? Reflect : null;
  	var ReflectApply = R && typeof R.apply === 'function'
  	  ? R.apply
  	  : function ReflectApply(target, receiver, args) {
  	    return Function.prototype.apply.call(target, receiver, args);
  	  };

  	var ReflectOwnKeys;
  	if (R && typeof R.ownKeys === 'function') {
  	  ReflectOwnKeys = R.ownKeys;
  	} else if (Object.getOwnPropertySymbols) {
  	  ReflectOwnKeys = function ReflectOwnKeys(target) {
  	    return Object.getOwnPropertyNames(target)
  	      .concat(Object.getOwnPropertySymbols(target));
  	  };
  	} else {
  	  ReflectOwnKeys = function ReflectOwnKeys(target) {
  	    return Object.getOwnPropertyNames(target);
  	  };
  	}

  	function ProcessEmitWarning(warning) {
  	  if (console && console.warn) console.warn(warning);
  	}

  	var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  	  return value !== value;
  	};

  	function EventEmitter() {
  	  EventEmitter.init.call(this);
  	}
  	events.exports = EventEmitter;
  	events.exports.once = once;

  	// Backwards-compat with node 0.10.x
  	EventEmitter.EventEmitter = EventEmitter;

  	EventEmitter.prototype._events = undefined;
  	EventEmitter.prototype._eventsCount = 0;
  	EventEmitter.prototype._maxListeners = undefined;

  	// By default EventEmitters will print a warning if more than 10 listeners are
  	// added to it. This is a useful default which helps finding memory leaks.
  	var defaultMaxListeners = 10;

  	function checkListener(listener) {
  	  if (typeof listener !== 'function') {
  	    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  	  }
  	}

  	Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  	  enumerable: true,
  	  get: function() {
  	    return defaultMaxListeners;
  	  },
  	  set: function(arg) {
  	    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
  	      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
  	    }
  	    defaultMaxListeners = arg;
  	  }
  	});

  	EventEmitter.init = function() {

  	  if (this._events === undefined ||
  	      this._events === Object.getPrototypeOf(this)._events) {
  	    this._events = Object.create(null);
  	    this._eventsCount = 0;
  	  }

  	  this._maxListeners = this._maxListeners || undefined;
  	};

  	// Obviously not all Emitters should be limited to 10. This function allows
  	// that to be increased. Set to zero for unlimited.
  	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  	  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
  	    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  	  }
  	  this._maxListeners = n;
  	  return this;
  	};

  	function _getMaxListeners(that) {
  	  if (that._maxListeners === undefined)
  	    return EventEmitter.defaultMaxListeners;
  	  return that._maxListeners;
  	}

  	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  	  return _getMaxListeners(this);
  	};

  	EventEmitter.prototype.emit = function emit(type) {
  	  var args = [];
  	  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  	  var doError = (type === 'error');

  	  var events = this._events;
  	  if (events !== undefined)
  	    doError = (doError && events.error === undefined);
  	  else if (!doError)
  	    return false;

  	  // If there is no 'error' event listener then throw.
  	  if (doError) {
  	    var er;
  	    if (args.length > 0)
  	      er = args[0];
  	    if (er instanceof Error) {
  	      // Note: The comments on the `throw` lines are intentional, they show
  	      // up in Node's output if this results in an unhandled exception.
  	      throw er; // Unhandled 'error' event
  	    }
  	    // At least give some kind of context to the user
  	    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
  	    err.context = er;
  	    throw err; // Unhandled 'error' event
  	  }

  	  var handler = events[type];

  	  if (handler === undefined)
  	    return false;

  	  if (typeof handler === 'function') {
  	    ReflectApply(handler, this, args);
  	  } else {
  	    var len = handler.length;
  	    var listeners = arrayClone(handler, len);
  	    for (var i = 0; i < len; ++i)
  	      ReflectApply(listeners[i], this, args);
  	  }

  	  return true;
  	};

  	function _addListener(target, type, listener, prepend) {
  	  var m;
  	  var events;
  	  var existing;

  	  checkListener(listener);

  	  events = target._events;
  	  if (events === undefined) {
  	    events = target._events = Object.create(null);
  	    target._eventsCount = 0;
  	  } else {
  	    // To avoid recursion in the case that type === "newListener"! Before
  	    // adding it to the listeners, first emit "newListener".
  	    if (events.newListener !== undefined) {
  	      target.emit('newListener', type,
  	                  listener.listener ? listener.listener : listener);

  	      // Re-assign `events` because a newListener handler could have caused the
  	      // this._events to be assigned to a new object
  	      events = target._events;
  	    }
  	    existing = events[type];
  	  }

  	  if (existing === undefined) {
  	    // Optimize the case of one listener. Don't need the extra array object.
  	    existing = events[type] = listener;
  	    ++target._eventsCount;
  	  } else {
  	    if (typeof existing === 'function') {
  	      // Adding the second element, need to change to array.
  	      existing = events[type] =
  	        prepend ? [listener, existing] : [existing, listener];
  	      // If we've already got an array, just append.
  	    } else if (prepend) {
  	      existing.unshift(listener);
  	    } else {
  	      existing.push(listener);
  	    }

  	    // Check for listener leak
  	    m = _getMaxListeners(target);
  	    if (m > 0 && existing.length > m && !existing.warned) {
  	      existing.warned = true;
  	      // No error code for this since it is a Warning
  	      // eslint-disable-next-line no-restricted-syntax
  	      var w = new Error('Possible EventEmitter memory leak detected. ' +
  	                          existing.length + ' ' + String(type) + ' listeners ' +
  	                          'added. Use emitter.setMaxListeners() to ' +
  	                          'increase limit');
  	      w.name = 'MaxListenersExceededWarning';
  	      w.emitter = target;
  	      w.type = type;
  	      w.count = existing.length;
  	      ProcessEmitWarning(w);
  	    }
  	  }

  	  return target;
  	}

  	EventEmitter.prototype.addListener = function addListener(type, listener) {
  	  return _addListener(this, type, listener, false);
  	};

  	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  	EventEmitter.prototype.prependListener =
  	    function prependListener(type, listener) {
  	      return _addListener(this, type, listener, true);
  	    };

  	function onceWrapper() {
  	  if (!this.fired) {
  	    this.target.removeListener(this.type, this.wrapFn);
  	    this.fired = true;
  	    if (arguments.length === 0)
  	      return this.listener.call(this.target);
  	    return this.listener.apply(this.target, arguments);
  	  }
  	}

  	function _onceWrap(target, type, listener) {
  	  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  	  var wrapped = onceWrapper.bind(state);
  	  wrapped.listener = listener;
  	  state.wrapFn = wrapped;
  	  return wrapped;
  	}

  	EventEmitter.prototype.once = function once(type, listener) {
  	  checkListener(listener);
  	  this.on(type, _onceWrap(this, type, listener));
  	  return this;
  	};

  	EventEmitter.prototype.prependOnceListener =
  	    function prependOnceListener(type, listener) {
  	      checkListener(listener);
  	      this.prependListener(type, _onceWrap(this, type, listener));
  	      return this;
  	    };

  	// Emits a 'removeListener' event if and only if the listener was removed.
  	EventEmitter.prototype.removeListener =
  	    function removeListener(type, listener) {
  	      var list, events, position, i, originalListener;

  	      checkListener(listener);

  	      events = this._events;
  	      if (events === undefined)
  	        return this;

  	      list = events[type];
  	      if (list === undefined)
  	        return this;

  	      if (list === listener || list.listener === listener) {
  	        if (--this._eventsCount === 0)
  	          this._events = Object.create(null);
  	        else {
  	          delete events[type];
  	          if (events.removeListener)
  	            this.emit('removeListener', type, list.listener || listener);
  	        }
  	      } else if (typeof list !== 'function') {
  	        position = -1;

  	        for (i = list.length - 1; i >= 0; i--) {
  	          if (list[i] === listener || list[i].listener === listener) {
  	            originalListener = list[i].listener;
  	            position = i;
  	            break;
  	          }
  	        }

  	        if (position < 0)
  	          return this;

  	        if (position === 0)
  	          list.shift();
  	        else {
  	          spliceOne(list, position);
  	        }

  	        if (list.length === 1)
  	          events[type] = list[0];

  	        if (events.removeListener !== undefined)
  	          this.emit('removeListener', type, originalListener || listener);
  	      }

  	      return this;
  	    };

  	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

  	EventEmitter.prototype.removeAllListeners =
  	    function removeAllListeners(type) {
  	      var listeners, events, i;

  	      events = this._events;
  	      if (events === undefined)
  	        return this;

  	      // not listening for removeListener, no need to emit
  	      if (events.removeListener === undefined) {
  	        if (arguments.length === 0) {
  	          this._events = Object.create(null);
  	          this._eventsCount = 0;
  	        } else if (events[type] !== undefined) {
  	          if (--this._eventsCount === 0)
  	            this._events = Object.create(null);
  	          else
  	            delete events[type];
  	        }
  	        return this;
  	      }

  	      // emit removeListener for all listeners on all events
  	      if (arguments.length === 0) {
  	        var keys = Object.keys(events);
  	        var key;
  	        for (i = 0; i < keys.length; ++i) {
  	          key = keys[i];
  	          if (key === 'removeListener') continue;
  	          this.removeAllListeners(key);
  	        }
  	        this.removeAllListeners('removeListener');
  	        this._events = Object.create(null);
  	        this._eventsCount = 0;
  	        return this;
  	      }

  	      listeners = events[type];

  	      if (typeof listeners === 'function') {
  	        this.removeListener(type, listeners);
  	      } else if (listeners !== undefined) {
  	        // LIFO order
  	        for (i = listeners.length - 1; i >= 0; i--) {
  	          this.removeListener(type, listeners[i]);
  	        }
  	      }

  	      return this;
  	    };

  	function _listeners(target, type, unwrap) {
  	  var events = target._events;

  	  if (events === undefined)
  	    return [];

  	  var evlistener = events[type];
  	  if (evlistener === undefined)
  	    return [];

  	  if (typeof evlistener === 'function')
  	    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  	  return unwrap ?
  	    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  	}

  	EventEmitter.prototype.listeners = function listeners(type) {
  	  return _listeners(this, type, true);
  	};

  	EventEmitter.prototype.rawListeners = function rawListeners(type) {
  	  return _listeners(this, type, false);
  	};

  	EventEmitter.listenerCount = function(emitter, type) {
  	  if (typeof emitter.listenerCount === 'function') {
  	    return emitter.listenerCount(type);
  	  } else {
  	    return listenerCount.call(emitter, type);
  	  }
  	};

  	EventEmitter.prototype.listenerCount = listenerCount;
  	function listenerCount(type) {
  	  var events = this._events;

  	  if (events !== undefined) {
  	    var evlistener = events[type];

  	    if (typeof evlistener === 'function') {
  	      return 1;
  	    } else if (evlistener !== undefined) {
  	      return evlistener.length;
  	    }
  	  }

  	  return 0;
  	}

  	EventEmitter.prototype.eventNames = function eventNames() {
  	  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  	};

  	function arrayClone(arr, n) {
  	  var copy = new Array(n);
  	  for (var i = 0; i < n; ++i)
  	    copy[i] = arr[i];
  	  return copy;
  	}

  	function spliceOne(list, index) {
  	  for (; index + 1 < list.length; index++)
  	    list[index] = list[index + 1];
  	  list.pop();
  	}

  	function unwrapListeners(arr) {
  	  var ret = new Array(arr.length);
  	  for (var i = 0; i < ret.length; ++i) {
  	    ret[i] = arr[i].listener || arr[i];
  	  }
  	  return ret;
  	}

  	function once(emitter, name) {
  	  return new Promise(function (resolve, reject) {
  	    function errorListener(err) {
  	      emitter.removeListener(name, resolver);
  	      reject(err);
  	    }

  	    function resolver() {
  	      if (typeof emitter.removeListener === 'function') {
  	        emitter.removeListener('error', errorListener);
  	      }
  	      resolve([].slice.call(arguments));
  	    }
  	    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
  	    if (name !== 'error') {
  	      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
  	    }
  	  });
  	}

  	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  	  if (typeof emitter.on === 'function') {
  	    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  	  }
  	}

  	function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  	  if (typeof emitter.on === 'function') {
  	    if (flags.once) {
  	      emitter.once(name, listener);
  	    } else {
  	      emitter.on(name, listener);
  	    }
  	  } else if (typeof emitter.addEventListener === 'function') {
  	    // EventTarget does not have `error` event semantics like Node
  	    // EventEmitters, we do not listen for `error` events here.
  	    emitter.addEventListener(name, function wrapListener(arg) {
  	      // IE does not have builtin `{ once: true }` support so we
  	      // have to do it manually.
  	      if (flags.once) {
  	        emitter.removeEventListener(name, wrapListener);
  	      }
  	      listener(arg);
  	    });
  	  } else {
  	    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  	  }
  	}
  	return events.exports;
  }

  requireEvents();

  var CabalUserActivityStreamMessages = /* @__PURE__ */ ((CabalUserActivityStreamMessages2) => {
    CabalUserActivityStreamMessages2["userActivityConnected"] = "userActivityConnected";
    CabalUserActivityStreamMessages2["userActivityStreamMessage"] = "userActivityStreamMessage";
    CabalUserActivityStreamMessages2["userActivityPing"] = "userActivityPing";
    CabalUserActivityStreamMessages2["userActivityPong"] = "userActivityPong";
    CabalUserActivityStreamMessages2["userActivityError"] = "userActivityError";
    CabalUserActivityStreamMessages2["tradeStats"] = "tradeStats";
    CabalUserActivityStreamMessages2["txnCb"] = "txnCb";
    return CabalUserActivityStreamMessages2;
  })(CabalUserActivityStreamMessages || {});
  var CabalTradeStreamMessages = /* @__PURE__ */ ((CabalTradeStreamMessages2) => {
    CabalTradeStreamMessages2["tradeConnected"] = "tradeConnected";
    CabalTradeStreamMessages2["tradeDisconnected"] = "tradeDisconnected";
    CabalTradeStreamMessages2["tradeStreamMessage"] = "tradeStreamMessage";
    CabalTradeStreamMessages2["tradePing"] = "tradePing";
    CabalTradeStreamMessages2["tradePong"] = "tradePong";
    CabalTradeStreamMessages2["tradeError"] = "tradeError";
    CabalTradeStreamMessages2["tradeEvent"] = "tradeEvent";
    CabalTradeStreamMessages2["tokenStatus"] = "tokenStatus";
    return CabalTradeStreamMessages2;
  })(CabalTradeStreamMessages || {});

  const startListnenBackgroundMessages = (messageListener) => chrome.runtime.onMessage.addListener(messageListener);

  const initValue = {
    mint: void 0,
    isReady: false,
    url: "",
    shouldSetApiKey: false
  };
  const [contentAppStore, setContentAppStore] = createStore(initValue);

  const registerTab = ({ locationHref }) => {
    const payload = {
      type: BackgroundMessages.INIT_CABAL,
      data: { url: locationHref }
    };
    const cb = (response) => {
      console.log("### respose", response);
      setContentAppStore("url", response.url);
      setContentAppStore("mint", response.mint);
      setContentAppStore("isReady", response.isReady);
      setContentAppStore("shouldSetApiKey", !response.apiKey);
      if (response.isReady) {
        setCabalUserActivity("status", {
          isReady: true,
          count: String(Date.now())
        });
        setCabalTradeStream("status", {
          isReady: true,
          count: String(Date.now())
        });
      }
    };
    sendMessage({ payload, cb });
  };

  const sellMarket$1 = ({
    mint,
    amountBps,
    cb
  }) => {
    const payload = {
      type: BackgroundMessages.SELL_MARKET,
      data: { mint, amountBps }
    };
    sendMessage({ payload, cb });
  };

  const subscribeToken = ({
    mint,
    cb
  }) => {
    const payload = {
      type: BackgroundMessages.SUBSCRIBE_TOKEN,
      data: { mint }
    };
    sendMessage({ payload, cb });
  };

  const handleUserActivityConnected = () => setCabalUserActivity("status", { isReady: true, count: "" });
  const handleUserActivityPong = (eventValue) => {
    setCabalUserActivity("status", eventValue);
  };
  const handleUserActivityTradeStats = (event) => {
    console.log("!!!!!!!handleUserActivityTradeStats", event);
    setLogStore("logs", (prev) => [...prev, { type: "tokenTradeStats", event }]);
    setTradeWidgetState("tradeStats", event.data);
  };
  const handleUserActivityError = () => {
    setCabalUserActivity("status", void 0);
  };
  const handleTradeStreamConnected = () => setCabalTradeStream("status", { isReady: true, count: "" });
  const handleTradeStreamPong = (eventValue) => {
    setCabalTradeStream("status", eventValue);
  };
  const handleTradeEvent = (event) => {
    setLogStore("logs", (prev) => [...prev, { type: "tradeEvent", event }]);
    setTradeWidgetState("lastTradeEvent", event.data);
  };
  const handleTradeTokenStatus = (event) => {
    setLogStore("logs", (prev) => [...prev, { type: "tokenStatus", event }]);
    setTradeWidgetState("tokenStatus", event.data);
  };
  const handleTradeError = () => {
    setCabalTradeStream("status", void 0);
  };
  const handleReadyStatus = (message) => {
    addLogRecord(message);
    const isReady = message.data.isReady;
    const shouldSetApiKey = message.data.shouldSetApiKey;
    setContentAppStore("isReady", isReady);
    setContentAppStore("shouldSetApiKey", shouldSetApiKey);
    const status = message.data.isReady ? { isReady, count: String(Date.now()) } : void 0;
    setCabalUserActivity("status", status);
    setCabalTradeStream("status", status);
  };
  const messageListener = (message, sender, sendResponse) => {
    console.log(`received message: ${message?.type} name: ${message?.eventName}`);
    const messageType = message?.type;
    if (messageType !== CabalMessageType.CabalEvent) {
      sendResponse({ ok: true });
      return;
    }
    const messageEventName = message?.eventName;
    switch (messageEventName) {
      case CabalCommonMessages.readyStatus:
        console.log(`%%%% %%% ${CabalCommonMessages.readyStatus}`, message);
        handleReadyStatus(message);
        break;
      case CabalUserActivityStreamMessages.userActivityConnected:
        handleUserActivityConnected();
        break;
      case CabalUserActivityStreamMessages.userActivityPong:
        handleUserActivityPong(message.data);
        break;
      case CabalUserActivityStreamMessages.tradeStats:
        handleUserActivityTradeStats(message);
        break;
      case CabalUserActivityStreamMessages.userActivityError:
        handleUserActivityError();
        break;
      // trade streams
      case CabalTradeStreamMessages.tradeConnected:
        handleTradeStreamConnected();
        break;
      case CabalTradeStreamMessages.tradePong:
        handleTradeStreamPong(message.data);
        break;
      case CabalTradeStreamMessages.tradeEvent:
        handleTradeEvent(message);
        break;
      case CabalTradeStreamMessages.tokenStatus:
        handleTradeTokenStatus(message);
        break;
      case CabalTradeStreamMessages.tradeError:
        handleTradeError();
        break;
      default:
        console.log(`unknown message: ${messageType}`);
    }
    sendResponse({ ok: true });
  };
  const marketBuy = async ({
    amount,
    mint
  }) => {
    buyMarket$1({
      mint,
      amountSol: amount,
      cb: (response) => {
        console.log("marketBuy", response);
      }
    });
  };
  const marketSell = async ({
    percents,
    mint
  }) => {
    sellMarket$1({
      mint,
      amountBps: percents,
      cb: (response) => {
        console.log("marketBuy", response);
      }
    });
  };
  const sendApiKey = (apiKey) => {
    const payload = {
      type: BackgroundMessages.SET_APIKEY,
      data: { apiKey }
    };
    const cb = (response) => {
      console.log("res", response);
    };
    sendMessage({ payload, cb });
  };
  function useStartCabalService() {
    return {
      sendApiKey,
      registerTab,
      subscribeToken,
      marketBuy,
      marketSell,
      startListen: () => startListnenBackgroundMessages(messageListener),
      clean: () => chrome.runtime.onMessage.removeListener(messageListener)
    };
  }

  const buyMarket = async () => {
    try {
      if (!tradeWidgetState.solCount) {
        return;
      }
      if (!tradeWidgetState.tokenStatus) {
        return;
      }
      const amount = stringToFloat(tradeWidgetState.solCount);
      const mintValue = tradeWidgetState.tokenStatus.mint;
      if (!amount || !mintValue) {
        return;
      }
      const result = await marketBuy({ amount, mint: mintValue });
      console.log("$$$#", result);
    } catch (error) {
      console.error(error);
    }
  };

  const onBuyInputChange = (value) => {
    if (typeof value !== "string") {
      setTradeWidgetState("buyInputValue", tradeWidgetState.buyInputValue);
    }
    const num = parseFloat(value);
    if (!isNaN(num) && num.toString() === value.trim()) {
      setTradeWidgetState("buyInputValue", value);
      setTradeWidgetState("solCount", String(value));
    } else {
      setTradeWidgetState("buyInputValue", tradeWidgetState.buyInputValue);
    }
  };

  const selectSellQuick = (quickItem) => {
    const activeSellQuickIndex = tradeWidgetState.sellQuicks.findIndex(
      (item) => item.value === quickItem.value
    );
    setTradeWidgetState("activeSellQuickIndex", activeSellQuickIndex);
    setTradeWidgetState(
      "sellInputValue",
      tradeWidgetState.sellQuicks[activeSellQuickIndex].value
    );
    const sellPercents = tradeWidgetState.sellQuicks[activeSellQuickIndex].value;
    setTradeWidgetState("sellPercents", sellPercents);
  };

  const sellMarket = () => {
    try {
      if (!tradeWidgetState.sellPercents) {
        return;
      }
      if (!tradeWidgetState.tokenStatus) {
        return;
      }
      const amount = stringToFloat(tradeWidgetState.sellPercents);
      const mintValue = tradeWidgetState.tokenStatus.mint;
      if (!amount || !mintValue) {
        return;
      }
      const result = marketSell({ mint: mintValue, percents: amount });
      console.log("#$$$#", result);
    } catch (error) {
      console.error(error);
    }
  };

  const onSellInputChange = (value) => {
    if (typeof value !== "string") {
      setTradeWidgetState("sellInputValue", tradeWidgetState.sellInputValue);
    }
    const num = parseFloat(value);
    if (!isNaN(num) && num.toString() === value.trim()) {
      setTradeWidgetState("sellInputValue", value);
      setTradeWidgetState("sellPercents", String(value));
    } else {
      setTradeWidgetState("sellInputValue", tradeWidgetState.sellInputValue);
    }
  };

  const formatLamports = ({
    solBalance,
    tokenDecimals
  }) => Number(Number(solBalance) / Math.pow(10, tokenDecimals)).toFixed(2);

  const [tradeWidgetState, setTradeWidgetState] = createStore(initValue$4);
  createEffect(() => {
    if (!tradeWidgetState.tokenStatus) {
      return;
    }
    if (tradeWidgetState.activeBuyQuickIndex === null) {
      return;
    }
    setTradeWidgetState(
      "buySellButtonLabel",
      `${tradeWidgetState.dir} ${tradeWidgetState.solCount} SOL | ${tradeWidgetState.tokenStatus.ticker}`
    );
    const disablebuySellButton = false;
    setTradeWidgetState("disablebuySellButton", disablebuySellButton);
  });
  createEffect(() => {
    if (!tradeWidgetState.tokenStatus) {
      return;
    }
    if (tradeWidgetState.activeSellQuickIndex === null) {
      return;
    }
    setTradeWidgetState(
      "sellButtonLabel",
      `!${tradeWidgetState.dir} ${tradeWidgetState.sellPercents}% | ${tradeWidgetState.tokenStatus.ticker}`
    );
    const disableSellButton = false;
    setTradeWidgetState("disableSellButton", disableSellButton);
  });
  createEffect(() => {
    if (!tradeWidgetState.tradeStats) {
      return;
    }
    const solBalanceLabel = formatLamports({
      solBalance: tradeWidgetState.tradeStats.solBalance,
      tokenDecimals: 9
    });
    const tokenDecimals = tradeWidgetState.tradeStats.tokenDecimals;
    const labelBuyToken = formatLamports({
      solBalance: tradeWidgetState.tradeStats.buyBase,
      tokenDecimals
    });
    const labelSellToken = formatLamports({
      solBalance: tradeWidgetState.tradeStats.sellBase,
      tokenDecimals
    });
    const labelTokenBalance = formatLamports({
      solBalance: tradeWidgetState.tradeStats.tokenBalance,
      tokenDecimals
    });
    setTradeWidgetState("solBalanceLabel", solBalanceLabel);
    setTradeWidgetState("labelBuyToken", labelBuyToken);
    setTradeWidgetState("labelSellToken", labelSellToken);
    setTradeWidgetState("labelTokenBalance", labelTokenBalance);
  });
  const handlers = {
    selectBuyQuick,
    buyMarket,
    onBuyInputChange,
    selectSellQuick,
    sellMarket,
    onSellInputChange
  };

  var _tmpl$$f = /* @__PURE__ */ template(`<div>`), _tmpl$2$5 = /* @__PURE__ */ template(`<div class="ext-flex ext-gap-1 ext-justify-end ext-mb-[6px]"><div class="ext-bg-gray-150 ext-border ext-border-gray-200 ext-w-[12px] ext-h-[12px] ext-flex ext-justify-center ext-items-end"><div class="ext-bg-white ext-h-[1px] ext-w-[5px] ext-mb-[4px]"></div></div><div class="ext-bg-gray-150 ext-border ext-w-[12px] ext-h-[12px] ext-flex ext-justify-center"><img class=ext-w-[5px] alt=pin>`), _tmpl$3 = /* @__PURE__ */ template(`<div class="ext-flex ext-gap-2"><div class="ext-flex ext-gap-1 ext-items-baseline"><div><img alt=wallet></div><div class="ext-text-xs ext-text-white ext-font-medium">1</div></div><div class="ext-flex ext-gap-1 ext-items-baseline"><div><img alt=sol></div><div class="ext-text-xs ext-text-white ext-font-medium">`), _tmpl$4 = /* @__PURE__ */ template(`<div class=ext-flex-1>`), _tmpl$5 = /* @__PURE__ */ template(`<div class="ext-flex ext-px-[11px] ext-items-baseline">`), _tmpl$6 = /* @__PURE__ */ template(`<div class="ext-bg-gray-200 ext-h-[1px] ext-mt-[6px] ext-mb-[15px]">`);
  const Card = (props) => (() => {
    var _el$ = _tmpl$$f();
    insert(_el$, () => props.children);
    createRenderEffect(() => className(_el$, cn("ext-px-[15px] ext-py-[9px] ext-shadow-lg ext-rounded-lg ext-border", props.cn)));
    return _el$;
  })();
  const Body = (props) => (() => {
    var _el$2 = _tmpl$$f();
    insert(_el$2, () => props.children);
    createRenderEffect(() => className(_el$2, cn("", props.cn)));
    return _el$2;
  })();
  const CardToolbar = (props) => (() => {
    var _el$3 = _tmpl$$f();
    insert(_el$3, () => props.children);
    createRenderEffect(() => className(_el$3, cn(props.cn)));
    return _el$3;
  })();
  const Container = ({
    children
  }) => createComponent(Card, {
    cn: "ext-max-w-[312px] ext-bg-blue-100 ext-border-gray-400",
    children
  });
  const Header = () => createComponent(CardToolbar, {
    get children() {
      var _el$4 = _tmpl$2$5(), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$6.firstChild;
      setAttribute(_el$7, "src", pin);
      return _el$4;
    }
  });
  const Settings = () => {
    const sol = chrome.runtime.getURL("assets2/sol.svg");
    return (() => {
      var _el$8 = _tmpl$3(), _el$9 = _el$8.firstChild, _el$0 = _el$9.firstChild, _el$1 = _el$0.firstChild, _el$10 = _el$9.nextSibling, _el$11 = _el$10.firstChild, _el$12 = _el$11.firstChild, _el$13 = _el$11.nextSibling;
      setAttribute(_el$1, "src", wallet);
      setAttribute(_el$12, "src", sol);
      insert(_el$13, () => tradeWidgetState.solBalanceLabel);
      return _el$8;
    })();
  };
  const TabsList = () => (() => {
    var _el$14 = _tmpl$4();
    insert(_el$14, createComponent(Tabs.List, {
      "class": "ext-relative ext-flex ext-gap-[10px]",
      get children() {
        return [createComponent(Tabs.Trigger, {
          "class": "ext-text-white ext-text-[10px]",
          value: "market",
          children: "Market"
        }), createComponent(Tabs.Trigger, {
          "class": "ext-text-white ext-text-[10px]",
          value: "limit",
          children: "Limit"
        }), createComponent(Tabs.Trigger, {
          "class": "ext-text-white ext-text-[10px]",
          value: "trailing",
          children: "Trailing"
        }), createComponent(Tabs.Trigger, {
          "class": "ext-text-white ext-text-[10px]",
          value: "autolimit",
          children: "Auto Limit"
        }), createComponent(Tabs.Indicator, {
          "class": "ext-h-[1px] ext-bg-white ext-absolute ext-bottom-[-2px] ext-transition-all"
        })];
      }
    }));
    return _el$14;
  })();
  const TabsHeader = ({
    children
  }) => (() => {
    var _el$15 = _tmpl$5();
    insert(_el$15, children);
    return _el$15;
  })();
  const Hr = () => _tmpl$6();

  var _tmpl$$e = /* @__PURE__ */ template(`<div class="ext-flex ext-gap-2">`), _tmpl$2$4 = /* @__PURE__ */ template(`<div class=ext-mt-[14px]>`);
  const BuyAmoutInput = (props) => {
    return createComponent(Card, {
      cn: "ext-border-green-500",
      get children() {
        return [(() => {
          var _el$ = _tmpl$$e();
          insert(_el$, createComponent(For, {
            get each() {
              return props.getQuicks();
            },
            children: (amountSol, index) => createComponent(SolAmountButton, {
              get active() {
                return index() === props.getActiveQuick();
              },
              onClick: () => props.onSelectQuick(amountSol),
              get children() {
                return amountSol.value;
              }
            })
          }));
          return _el$;
        })(), (() => {
          var _el$2 = _tmpl$2$4();
          insert(_el$2, createComponent(TradeInput, {
            get getInputValue() {
              return props.getInputValue;
            },
            get onChange() {
              return props.onChange;
            }
          }));
          return _el$2;
        })()];
      }
    });
  };

  const TradeTabButton = (props) => {
    const color = props.mode === TradeDir.Buy ? "green" : "red";
    console.log(props.mode, color);
    const active = `ext-bg-${color}-400 ext-border-${color}-400 hover:ext-bg-${color}-500 ext-transition ext-ease-in ext-duration-200 focus:ext-outline-none`;
    const unActive = "ext-border-grey-200 ext-bg-blue-100";
    return createComponent(Button$1, mergeProps({
      get type() {
        return props.type ?? "button";
      },
      get ["class"]() {
        return cn("ext-py-1 ext-px-4 ext-w-full ext-border ext-rounded-[5px] ext-text-center ext-text-base ext-text-white ext-font-bold disabled:ext-bg-black", {
          [`${active}`]: props.active,
          [`${unActive}`]: !props.active
        }, props.cn);
      }
    }, props));
  };

  const isBuy = (value) => value === TradeDir.Buy;
  const isSell = (value) => value === TradeDir.Sell;

  var _tmpl$$d = /* @__PURE__ */ template(`<div class="ext-flex ext-gap-[7px] ext-mb-[15px]">`);
  const TradeDirSelector = ({
    getDir,
    onSelect
  }) => {
    return (() => {
      var _el$ = _tmpl$$d();
      insert(_el$, createComponent(TradeTabButton, {
        get mode() {
          return TradeDir.Buy;
        },
        get active() {
          return isBuy(getDir());
        },
        onClick: () => onSelect(TradeDir.Buy),
        children: "Buy"
      }), null);
      insert(_el$, createComponent(TradeTabButton, {
        get mode() {
          return TradeDir.Sell;
        },
        get active() {
          return isSell(getDir());
        },
        onClick: () => onSelect(TradeDir.Sell),
        children: "Sell"
      }), null);
      return _el$;
    })();
  };

  const PercentAmountButton = (props) => {
    const common = "ext-w-[56px] ext-text-xs ext-whitespace-nowrap ext-py-[6px] ext-text-white ext-text-center ext-text-base ext-rounded-lg ext-font-medium";
    const unactive = "ext-bg-red-200 ext-border ext-border-red-400 hover:ext-bg-red-500 ext-transition ext-ease-in ext-duration-200";
    const active = "ext-bg-red-400";
    return createComponent(Button$1, mergeProps({
      get type() {
        return props.type ?? "button";
      },
      get ["class"]() {
        return cn(common, {
          [`${unactive}`]: !props.active,
          [`${active}`]: props.active
        }, props.cn);
      }
    }, props));
  };

  var _tmpl$$c = /* @__PURE__ */ template(`<div class="ext-flex ext-gap-2">`), _tmpl$2$3 = /* @__PURE__ */ template(`<div class=ext-mt-[14px]>`);
  const SellAmoutInput = (props) => {
    return createComponent(Card, {
      cn: "ext-bg-blue-300 ext-border-red-400",
      get children() {
        return [(() => {
          var _el$ = _tmpl$$c();
          insert(_el$, createComponent(For, {
            get each() {
              return props.getQuicks();
            },
            children: (amountSol, index) => createComponent(PercentAmountButton, {
              get active() {
                return index() === props.getActiveQuick();
              },
              onClick: () => props.onSelectQuick(amountSol),
              get children() {
                return [memo(() => amountSol.value), "%"];
              }
            })
          }));
          return _el$;
        })(), (() => {
          var _el$2 = _tmpl$2$3();
          insert(_el$2, createComponent(TradeInput, {
            get getInputValue() {
              return props.getInputValue;
            },
            get onChange() {
              return props.onChange;
            }
          }));
          return _el$2;
        })()];
      }
    });
  };

  var _tmpl$$b = /* @__PURE__ */ template(`<div class=ext-flex><div>PnL</div><div><img alt=arrows>`);
  const PnL = (props) => {
    const arrows = chrome.runtime.getURL("assets2/arrows.svg");
    return (() => {
      var _el$ = _tmpl$$b(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.firstChild;
      setAttribute(_el$4, "src", arrows);
      return _el$;
    })();
  };

  var _tmpl$$a = /* @__PURE__ */ template(`<div>`), _tmpl$2$2 = /* @__PURE__ */ template(`<div class="ext-flex ext-w-full ext-justify-between ext-mt-[10px]">`);
  const TradeWidget = () => {
    const [buyInputValue, setBuyInputValue] = createSignal(null);
    const [sellInputValue, setSellInputValue] = createSignal(null);
    const [isShowBuyButton, setIsShowBuyButton] = createSignal(false);
    const [isShowSellButton, setIsShowSellButton] = createSignal(false);
    createEffect(() => {
      setBuyInputValue(tradeWidgetState.buyInputValue);
    });
    createEffect(() => {
      setSellInputValue(tradeWidgetState.sellInputValue);
    });
    createEffect(() => {
      setIsShowBuyButton(isBuy(tradeWidgetState.dir) && !tradeWidgetState.disablebuySellButton);
    });
    createEffect(() => {
      setIsShowSellButton(isSell(tradeWidgetState.dir) && !tradeWidgetState.disableSellButton);
    });
    const statsBottom = createMemo(() => [{
      title: "Bought",
      color: BCellColor.green,
      value: tradeWidgetState.labelBuyToken
    }, {
      title: "Sold",
      color: BCellColor.red,
      value: tradeWidgetState.labelSellToken
    }, {
      title: "Holding",
      color: BCellColor.white,
      value: tradeWidgetState.labelTokenBalance
    }]);
    console.log("^&*^*&^*&^", statsBottom);
    return createComponent(Container, {
      get children() {
        return [createComponent(Header, {}), createComponent(Body, {
          get children() {
            return [createComponent(TradeDirSelector, {
              getDir: () => tradeWidgetState.dir,
              onSelect: (value) => setTradeWidgetState("dir", value)
            }), createComponent(Tabs, {
              get children() {
                return [createComponent(TabsHeader, {
                  get children() {
                    return [createComponent(TabsList, {}), createComponent(Settings, {})];
                  }
                }), createComponent(Hr, {}), createComponent(Show, {
                  get when() {
                    return isBuy(tradeWidgetState.dir);
                  },
                  get children() {
                    return createComponent(BuyAmoutInput, {
                      getQuicks: () => tradeWidgetState.buyQuicks,
                      getActiveQuick: () => tradeWidgetState.activeBuyQuickIndex,
                      onSelectQuick: (value) => handlers.selectBuyQuick(value),
                      getInputValue: buyInputValue,
                      get onChange() {
                        return handlers.onBuyInputChange;
                      }
                    });
                  }
                }), createComponent(Show, {
                  get when() {
                    return isSell(tradeWidgetState.dir);
                  },
                  get children() {
                    return createComponent(SellAmoutInput, {
                      getQuicks: () => tradeWidgetState.sellQuicks,
                      getActiveQuick: () => tradeWidgetState.activeSellQuickIndex,
                      onSelectQuick: (value) => handlers.selectSellQuick(value),
                      getInputValue: sellInputValue,
                      get onChange() {
                        return handlers.onSellInputChange;
                      }
                    });
                  }
                }), createComponent(StatsContainer, {
                  get children() {
                    return createComponent(For, {
                      each: statMid,
                      children: (statsItem) => createComponent(StatsCell, {
                        get icon() {
                          return statsItem.icon;
                        },
                        get color() {
                          return statsItem.color;
                        },
                        get value() {
                          return statsItem.value;
                        }
                      })
                    });
                  }
                }), createComponent(Tabs.Content, {
                  "class": "ext-tabs__content",
                  value: "market",
                  get children() {
                    return [createComponent(Show, {
                      get when() {
                        return isShowBuyButton();
                      },
                      get children() {
                        var _el$ = _tmpl$$a();
                        insert(_el$, createComponent(TradeTabButton, {
                          get mode() {
                            return TradeDir.Buy;
                          },
                          active: true,
                          onClick: () => handlers.buyMarket(),
                          get children() {
                            return tradeWidgetState.buySellButtonLabel;
                          }
                        }));
                        return _el$;
                      }
                    }), createComponent(Show, {
                      get when() {
                        return isShowSellButton();
                      },
                      get children() {
                        var _el$2 = _tmpl$$a();
                        insert(_el$2, createComponent(TradeTabButton, {
                          get mode() {
                            return TradeDir.Sell;
                          },
                          active: true,
                          onClick: () => handlers.sellMarket(),
                          get children() {
                            return tradeWidgetState.sellButtonLabel;
                          }
                        }));
                        return _el$2;
                      }
                    }), (() => {
                      var _el$3 = _tmpl$2$2();
                      insert(_el$3, createComponent(For, {
                        get each() {
                          return statsBottom();
                        },
                        children: ({
                          title,
                          color,
                          value
                        }) => createComponent(BottomStatsCell, {
                          title,
                          color,
                          value
                        })
                      }), null);
                      insert(_el$3, createComponent(BottomStatsCell, {
                        get title() {
                          return createComponent(PnL, {
                            color: "purple"
                          });
                        },
                        get color() {
                          return BCellColor.green;
                        },
                        value: "+0 (+0%)",
                        cn: "flex-2"
                      }), null);
                      return _el$3;
                    })()];
                  }
                }), createComponent(Tabs.Content, {
                  "class": "ext-tabs__content",
                  value: "limit",
                  children: "Dashboard details"
                }), createComponent(Tabs.Content, {
                  "class": "ext-tabs__content",
                  value: "trailing",
                  children: "Settings details"
                }), createComponent(Tabs.Content, {
                  "class": "ext-tabs__content",
                  value: "autolimit",
                  children: "Contact details"
                })];
              }
            })];
          }
        })];
      }
    });
  };

  var _tmpl$$9 = /* @__PURE__ */ template(`<div>`);
  var Layout = class {
    x;
    y;
    width;
    height;
    constructor(rect) {
      this.x = Math.floor(rect.x);
      this.y = Math.floor(rect.y);
      this.width = Math.floor(rect.width);
      this.height = Math.floor(rect.height);
    }
    get rect() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      };
    }
    get left() {
      return this.x;
    }
    get top() {
      return this.y;
    }
    get right() {
      return this.x + this.width;
    }
    get bottom() {
      return this.y + this.height;
    }
    get center() {
      return {
        x: this.x + this.width * 0.5,
        y: this.y + this.height * 0.5
      };
    }
    get corners() {
      return {
        topLeft: {
          x: this.left,
          y: this.top
        },
        topRight: {
          x: this.right,
          y: this.top
        },
        bottomRight: {
          x: this.left,
          y: this.bottom
        },
        bottomLeft: {
          x: this.right,
          y: this.bottom
        }
      };
    }
  };
  var elementLayout = (element) => {
    let layout = new Layout(element.getBoundingClientRect());
    const {
      transform
    } = getComputedStyle(element);
    if (transform) {
      layout = stripTransformFromLayout(layout, transform);
    }
    return layout;
  };
  var stripTransformFromLayout = (layout, transform) => {
    let translateX, translateY;
    if (transform.startsWith("matrix3d(")) {
      const matrix = transform.slice(9, -1).split(/, /);
      translateX = +matrix[12];
      translateY = +matrix[13];
    } else if (transform.startsWith("matrix(")) {
      const matrix = transform.slice(7, -1).split(/, /);
      translateX = +matrix[4];
      translateY = +matrix[5];
    } else {
      translateX = 0;
      translateY = 0;
    }
    return new Layout({
      ...layout,
      x: layout.x - translateX,
      y: layout.y - translateY
    });
  };
  var noopTransform = () => ({
    x: 0,
    y: 0
  });
  var transformsAreEqual = (firstTransform, secondTransform) => {
    return firstTransform.x === secondTransform.x && firstTransform.y === secondTransform.y;
  };
  var transformLayout = (layout, transform) => {
    return new Layout({
      ...layout,
      x: layout.x + transform.x,
      y: layout.y + transform.y
    });
  };
  var intersectionRatioOfLayouts = (firstLayout, secondLayout) => {
    const top = Math.max(firstLayout.top, secondLayout.top);
    const left = Math.max(firstLayout.left, secondLayout.left);
    const right = Math.min(firstLayout.right, secondLayout.right);
    const bottom = Math.min(firstLayout.bottom, secondLayout.bottom);
    const width = right - left;
    const height = bottom - top;
    if (left < right && top < bottom) {
      const layout1Area = firstLayout.width * firstLayout.height;
      const layout2Area = secondLayout.width * secondLayout.height;
      const intersectionArea = width * height;
      return intersectionArea / (layout1Area + layout2Area - intersectionArea);
    }
    return 0;
  };
  var layoutsAreEqual = (firstLayout, secondLayout) => {
    return firstLayout.x === secondLayout.x && firstLayout.y === secondLayout.y && firstLayout.width === secondLayout.width && firstLayout.height === secondLayout.height;
  };
  var mostIntersecting = (draggable, droppables, context) => {
    const draggableLayout = draggable.transformed;
    const collision = {
      ratio: 0,
      droppable: null
    };
    for (const droppable of droppables) {
      const ratio = intersectionRatioOfLayouts(draggableLayout, droppable.layout);
      if (ratio > collision.ratio) {
        collision.ratio = ratio;
        collision.droppable = droppable;
      } else if (ratio > 0 && ratio === collision.ratio && droppable.id === context.activeDroppableId) {
        collision.droppable = droppable;
      }
    }
    return collision.droppable;
  };
  var Context = createContext();
  var DragDropProvider = (passedProps) => {
    const props = mergeProps({
      collisionDetector: mostIntersecting
    }, passedProps);
    const [state, setState] = createStore({
      draggables: {},
      droppables: {},
      sensors: {},
      active: {
        draggableId: null,
        get draggable() {
          return state.active.draggableId !== null ? state.draggables[state.active.draggableId] : null;
        },
        droppableId: null,
        get droppable() {
          return state.active.droppableId !== null ? state.droppables[state.active.droppableId] : null;
        },
        sensorId: null,
        get sensor() {
          return state.active.sensorId !== null ? state.sensors[state.active.sensorId] : null;
        },
        overlay: null
      }
    });
    const addTransformer = (type, id, transformer) => {
      type.substring(0, type.length - 1);
      if (!untrack(() => state[type][id])) {
        return;
      }
      setState(type, id, "transformers", transformer.id, transformer);
    };
    const removeTransformer = (type, id, transformerId) => {
      type.substring(0, type.length - 1);
      if (!untrack(() => state[type][id])) {
        return;
      }
      if (!untrack(() => state[type][id]["transformers"][transformerId])) {
        return;
      }
      setState(type, id, "transformers", transformerId, void 0);
    };
    const addDraggable = ({
      id,
      node,
      layout,
      data
    }) => {
      const existingDraggable = state.draggables[id];
      const draggable = {
        id,
        node,
        layout,
        data,
        _pendingCleanup: false
      };
      let transformer;
      if (!existingDraggable) {
        Object.defineProperties(draggable, {
          transformers: {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
          },
          transform: {
            enumerable: true,
            configurable: true,
            get: () => {
              if (state.active.overlay) {
                return noopTransform();
              }
              const transformers = Object.values(state.draggables[id].transformers);
              transformers.sort((a, b) => a.order - b.order);
              return transformers.reduce((transform, transformer2) => {
                return transformer2.callback(transform);
              }, noopTransform());
            }
          },
          transformed: {
            enumerable: true,
            configurable: true,
            get: () => {
              return transformLayout(state.draggables[id].layout, state.draggables[id].transform);
            }
          }
        });
      } else if (state.active.draggableId === id && !state.active.overlay) {
        const layoutDelta = {
          x: existingDraggable.layout.x - layout.x,
          y: existingDraggable.layout.y - layout.y
        };
        const transformerId = "addDraggable-existing-offset";
        const existingTransformer = existingDraggable.transformers[transformerId];
        const transformOffset = existingTransformer ? existingTransformer.callback(layoutDelta) : layoutDelta;
        transformer = {
          id: transformerId,
          order: 100,
          callback: (transform) => {
            return {
              x: transform.x + transformOffset.x,
              y: transform.y + transformOffset.y
            };
          }
        };
        onDragEnd(() => removeTransformer("draggables", id, transformerId));
      }
      batch(() => {
        setState("draggables", id, draggable);
        if (transformer) {
          addTransformer("draggables", id, transformer);
        }
      });
      if (state.active.draggable) {
        recomputeLayouts();
      }
    };
    const removeDraggable = (id) => {
      if (!untrack(() => state.draggables[id])) {
        return;
      }
      setState("draggables", id, "_pendingCleanup", true);
      queueMicrotask(() => cleanupDraggable(id));
    };
    const cleanupDraggable = (id) => {
      if (state.draggables[id]?._pendingCleanup) {
        const cleanupActive = state.active.draggableId === id;
        batch(() => {
          if (cleanupActive) {
            setState("active", "draggableId", null);
          }
          setState("draggables", id, void 0);
        });
      }
    };
    const addDroppable = ({
      id,
      node,
      layout,
      data
    }) => {
      const existingDroppable = state.droppables[id];
      const droppable = {
        id,
        node,
        layout,
        data,
        _pendingCleanup: false
      };
      if (!existingDroppable) {
        Object.defineProperties(droppable, {
          transformers: {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
          },
          transform: {
            enumerable: true,
            configurable: true,
            get: () => {
              const transformers = Object.values(state.droppables[id].transformers);
              transformers.sort((a, b) => a.order - b.order);
              return transformers.reduce((transform, transformer) => {
                return transformer.callback(transform);
              }, noopTransform());
            }
          },
          transformed: {
            enumerable: true,
            configurable: true,
            get: () => {
              return transformLayout(state.droppables[id].layout, state.droppables[id].transform);
            }
          }
        });
      }
      setState("droppables", id, droppable);
      if (state.active.draggable) {
        recomputeLayouts();
      }
    };
    const removeDroppable = (id) => {
      if (!untrack(() => state.droppables[id])) {
        return;
      }
      setState("droppables", id, "_pendingCleanup", true);
      queueMicrotask(() => cleanupDroppable(id));
    };
    const cleanupDroppable = (id) => {
      if (state.droppables[id]?._pendingCleanup) {
        const cleanupActive = state.active.droppableId === id;
        batch(() => {
          if (cleanupActive) {
            setState("active", "droppableId", null);
          }
          setState("droppables", id, void 0);
        });
      }
    };
    const addSensor = ({
      id,
      activators
    }) => {
      setState("sensors", id, {
        id,
        activators,
        coordinates: {
          origin: {
            x: 0,
            y: 0
          },
          current: {
            x: 0,
            y: 0
          },
          get delta() {
            return {
              x: state.sensors[id].coordinates.current.x - state.sensors[id].coordinates.origin.x,
              y: state.sensors[id].coordinates.current.y - state.sensors[id].coordinates.origin.y
            };
          }
        }
      });
    };
    const removeSensor = (id) => {
      if (!untrack(() => state.sensors[id])) {
        return;
      }
      const cleanupActive = state.active.sensorId === id;
      batch(() => {
        if (cleanupActive) {
          setState("active", "sensorId", null);
        }
        setState("sensors", id, void 0);
      });
    };
    const setOverlay = ({
      node,
      layout
    }) => {
      const existing = state.active.overlay;
      const overlay = {
        node,
        layout
      };
      if (!existing) {
        Object.defineProperties(overlay, {
          id: {
            enumerable: true,
            configurable: true,
            get: () => state.active.draggable?.id
          },
          data: {
            enumerable: true,
            configurable: true,
            get: () => state.active.draggable?.data
          },
          transformers: {
            enumerable: true,
            configurable: true,
            get: () => Object.fromEntries(Object.entries(state.active.draggable ? state.active.draggable.transformers : {}).filter(([id]) => id !== "addDraggable-existing-offset"))
          },
          transform: {
            enumerable: true,
            configurable: true,
            get: () => {
              const transformers = Object.values(state.active.overlay ? state.active.overlay.transformers : []);
              transformers.sort((a, b) => a.order - b.order);
              return transformers.reduce((transform, transformer) => {
                return transformer.callback(transform);
              }, noopTransform());
            }
          },
          transformed: {
            enumerable: true,
            configurable: true,
            get: () => {
              return state.active.overlay ? transformLayout(state.active.overlay.layout, state.active.overlay.transform) : new Layout({
                x: 0,
                y: 0,
                width: 0,
                height: 0
              });
            }
          }
        });
      }
      setState("active", "overlay", overlay);
    };
    const clearOverlay = () => setState("active", "overlay", null);
    const sensorStart = (id, coordinates) => {
      batch(() => {
        setState("sensors", id, "coordinates", {
          origin: {
            ...coordinates
          },
          current: {
            ...coordinates
          }
        });
        setState("active", "sensorId", id);
      });
    };
    const sensorMove = (coordinates) => {
      const sensorId = state.active.sensorId;
      if (!sensorId) {
        return;
      }
      setState("sensors", sensorId, "coordinates", "current", {
        ...coordinates
      });
    };
    const sensorEnd = () => setState("active", "sensorId", null);
    const draggableActivators = (draggableId, asHandlers) => {
      const eventMap = {};
      for (const sensor of Object.values(state.sensors)) {
        if (sensor) {
          for (const [type, activator] of Object.entries(sensor.activators)) {
            eventMap[type] ??= [];
            eventMap[type].push({
              sensor,
              activator
            });
          }
        }
      }
      const listeners = {};
      for (const key in eventMap) {
        let handlerKey = key;
        if (asHandlers) {
          handlerKey = `on${key}`;
        }
        listeners[handlerKey] = (event) => {
          for (const {
            activator
          } of eventMap[key]) {
            if (state.active.sensor) {
              break;
            }
            activator(event, draggableId);
          }
        };
      }
      return listeners;
    };
    const recomputeLayouts = () => {
      let anyLayoutChanged = false;
      const draggables = Object.values(state.draggables);
      const droppables = Object.values(state.droppables);
      const overlay = state.active.overlay;
      batch(() => {
        const cache = /* @__PURE__ */ new WeakMap();
        for (const draggable of draggables) {
          if (draggable) {
            const currentLayout = draggable.layout;
            if (!cache.has(draggable.node)) cache.set(draggable.node, elementLayout(draggable.node));
            const layout = cache.get(draggable.node);
            if (!layoutsAreEqual(currentLayout, layout)) {
              setState("draggables", draggable.id, "layout", layout);
              anyLayoutChanged = true;
            }
          }
        }
        for (const droppable of droppables) {
          if (droppable) {
            const currentLayout = droppable.layout;
            if (!cache.has(droppable.node)) cache.set(droppable.node, elementLayout(droppable.node));
            const layout = cache.get(droppable.node);
            if (!layoutsAreEqual(currentLayout, layout)) {
              setState("droppables", droppable.id, "layout", layout);
              anyLayoutChanged = true;
            }
          }
        }
        if (overlay) {
          const currentLayout = overlay.layout;
          const layout = elementLayout(overlay.node);
          if (!layoutsAreEqual(currentLayout, layout)) {
            setState("active", "overlay", "layout", layout);
            anyLayoutChanged = true;
          }
        }
      });
      return anyLayoutChanged;
    };
    const detectCollisions = () => {
      const draggable = state.active.overlay ?? state.active.draggable;
      if (draggable) {
        const droppable = props.collisionDetector(draggable, Object.values(state.droppables), {
          activeDroppableId: state.active.droppableId
        });
        const droppableId = droppable ? droppable.id : null;
        if (state.active.droppableId !== droppableId) {
          setState("active", "droppableId", droppableId);
        }
      }
    };
    const dragStart = (draggableId) => {
      const transformer = {
        id: "sensorMove",
        order: 0,
        callback: (transform) => {
          if (state.active.sensor) {
            return {
              x: transform.x + state.active.sensor.coordinates.delta.x,
              y: transform.y + state.active.sensor.coordinates.delta.y
            };
          }
          return transform;
        }
      };
      recomputeLayouts();
      batch(() => {
        setState("active", "draggableId", draggableId);
        addTransformer("draggables", draggableId, transformer);
      });
      detectCollisions();
    };
    const dragEnd = () => {
      const draggableId = untrack(() => state.active.draggableId);
      batch(() => {
        if (draggableId !== null) {
          removeTransformer("draggables", draggableId, "sensorMove");
        }
        setState("active", ["draggableId", "droppableId"], null);
      });
      recomputeLayouts();
    };
    const onDragStart = (handler) => {
      createEffect(() => {
        const draggable = state.active.draggable;
        if (draggable) {
          untrack(() => handler({
            draggable
          }));
        }
      });
    };
    const onDragMove = (handler) => {
      createEffect(() => {
        const draggable = state.active.draggable;
        if (draggable) {
          const overlay = untrack(() => state.active.overlay);
          Object.values(overlay ? overlay.transform : draggable.transform);
          untrack(() => handler({
            draggable,
            overlay
          }));
        }
      });
    };
    const onDragOver = (handler) => {
      createEffect(() => {
        const draggable = state.active.draggable;
        const droppable = state.active.droppable;
        if (draggable) {
          untrack(() => handler({
            draggable,
            droppable,
            overlay: state.active.overlay
          }));
        }
      });
    };
    const onDragEnd = (handler) => {
      createEffect(({
        previousDraggable,
        previousDroppable,
        previousOverlay
      }) => {
        const draggable = state.active.draggable;
        const droppable = draggable ? state.active.droppable : null;
        const overlay = draggable ? state.active.overlay : null;
        if (!draggable && previousDraggable) {
          untrack(() => handler({
            draggable: previousDraggable,
            droppable: previousDroppable,
            overlay: previousOverlay
          }));
        }
        return {
          previousDraggable: draggable,
          previousDroppable: droppable,
          previousOverlay: overlay
        };
      }, {
        previousDraggable: null,
        previousDroppable: null,
        previousOverlay: null
      });
    };
    onDragMove(() => detectCollisions());
    props.onDragStart && onDragStart(props.onDragStart);
    props.onDragMove && onDragMove(props.onDragMove);
    props.onDragOver && onDragOver(props.onDragOver);
    props.onDragEnd && onDragEnd(props.onDragEnd);
    const actions = {
      addTransformer,
      removeTransformer,
      addDraggable,
      removeDraggable,
      addDroppable,
      removeDroppable,
      addSensor,
      removeSensor,
      setOverlay,
      clearOverlay,
      recomputeLayouts,
      detectCollisions,
      draggableActivators,
      sensorStart,
      sensorMove,
      sensorEnd,
      dragStart,
      dragEnd,
      onDragStart,
      onDragMove,
      onDragOver,
      onDragEnd
    };
    const context = [state, actions];
    return createComponent(Context.Provider, {
      value: context,
      get children() {
        return props.children;
      }
    });
  };
  var useDragDropContext = () => {
    return useContext(Context) || null;
  };
  var createPointerSensor = (id = "pointer-sensor") => {
    const [state, {
      addSensor,
      removeSensor,
      sensorStart,
      sensorMove,
      sensorEnd,
      dragStart,
      dragEnd
    }] = useDragDropContext();
    const activationDelay = 250;
    const activationDistance = 10;
    onMount(() => {
      addSensor({
        id,
        activators: {
          pointerdown: attach
        }
      });
    });
    onCleanup(() => {
      removeSensor(id);
    });
    const isActiveSensor = () => state.active.sensorId === id;
    const initialCoordinates = {
      x: 0,
      y: 0
    };
    let activationDelayTimeoutId = null;
    let activationDraggableId = null;
    const attach = (event, draggableId) => {
      if (event.button !== 0) return;
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
      activationDraggableId = draggableId;
      initialCoordinates.x = event.clientX;
      initialCoordinates.y = event.clientY;
      activationDelayTimeoutId = window.setTimeout(onActivate, activationDelay);
    };
    const detach = () => {
      if (activationDelayTimeoutId) {
        clearTimeout(activationDelayTimeoutId);
        activationDelayTimeoutId = null;
      }
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("selectionchange", clearSelection);
    };
    const onActivate = () => {
      if (!state.active.sensor) {
        sensorStart(id, initialCoordinates);
        dragStart(activationDraggableId);
        clearSelection();
        document.addEventListener("selectionchange", clearSelection);
      } else if (!isActiveSensor()) {
        detach();
      }
    };
    const onPointerMove = (event) => {
      const coordinates = {
        x: event.clientX,
        y: event.clientY
      };
      if (!state.active.sensor) {
        const transform = {
          x: coordinates.x - initialCoordinates.x,
          y: coordinates.y - initialCoordinates.y
        };
        if (Math.sqrt(transform.x ** 2 + transform.y ** 2) > activationDistance) {
          onActivate();
        }
      }
      if (isActiveSensor()) {
        event.preventDefault();
        sensorMove(coordinates);
      }
    };
    const onPointerUp = (event) => {
      detach();
      if (isActiveSensor()) {
        event.preventDefault();
        dragEnd();
        sensorEnd();
      }
    };
    const clearSelection = () => {
      window.getSelection()?.removeAllRanges();
    };
  };
  var DragDropSensors = (props) => {
    createPointerSensor();
    return memo(() => props.children);
  };
  var transformStyle = (transform) => {
    return {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
    };
  };
  var createDraggable = (id, data = {}) => {
    const [state, {
      addDraggable,
      removeDraggable,
      draggableActivators
    }] = useDragDropContext();
    const [node, setNode] = createSignal(null);
    onMount(() => {
      const resolvedNode = node();
      if (resolvedNode) {
        addDraggable({
          id,
          node: resolvedNode,
          layout: elementLayout(resolvedNode),
          data
        });
      }
    });
    onCleanup(() => removeDraggable(id));
    const isActiveDraggable = () => state.active.draggableId === id;
    const transform = () => {
      return state.draggables[id]?.transform || noopTransform();
    };
    const draggable = Object.defineProperties((element, accessor) => {
      const config = accessor ? accessor() : {};
      createEffect(() => {
        const resolvedNode = node();
        const activators = draggableActivators(id);
        if (resolvedNode) {
          for (const key in activators) {
            resolvedNode.addEventListener(key, activators[key]);
          }
        }
        onCleanup(() => {
          if (resolvedNode) {
            for (const key in activators) {
              resolvedNode.removeEventListener(key, activators[key]);
            }
          }
        });
      });
      setNode(element);
      if (!config.skipTransform) {
        createEffect(() => {
          const resolvedTransform = transform();
          if (!transformsAreEqual(resolvedTransform, noopTransform())) {
            const style = transformStyle(transform());
            element.style.setProperty("transform", style.transform ?? null);
          } else {
            element.style.removeProperty("transform");
          }
        });
      }
    }, {
      ref: {
        enumerable: true,
        value: setNode
      },
      isActiveDraggable: {
        enumerable: true,
        get: isActiveDraggable
      },
      dragActivators: {
        enumerable: true,
        get: () => {
          return draggableActivators(id, true);
        }
      },
      transform: {
        enumerable: true,
        get: transform
      }
    });
    return draggable;
  };
  var DragOverlay = (props) => {
    const [state, {
      onDragStart,
      onDragEnd,
      setOverlay,
      clearOverlay
    }] = useDragDropContext();
    let node;
    onDragStart(({
      draggable
    }) => {
      setOverlay({
        node: draggable.node,
        layout: draggable.layout
      });
      queueMicrotask(() => {
        if (node) {
          const layout = elementLayout(node);
          const delta = {
            x: (draggable.layout.width - layout.width) / 2,
            y: (draggable.layout.height - layout.height) / 2
          };
          layout.x += delta.x;
          layout.y += delta.y;
          setOverlay({
            node,
            layout
          });
        }
      });
    });
    onDragEnd(() => queueMicrotask(clearOverlay));
    const style$1 = () => {
      const overlay = state.active.overlay;
      const draggable = state.active.draggable;
      if (!overlay || !draggable) return {};
      return {
        position: "fixed",
        transition: "transform 0s",
        top: `${overlay.layout.top}px`,
        left: `${overlay.layout.left}px`,
        "min-width": `${draggable.layout.width}px`,
        "min-height": `${draggable.layout.height}px`,
        ...transformStyle(overlay.transform),
        ...props.style
      };
    };
    return createComponent(Portal, {
      get mount() {
        return document.body;
      },
      get children() {
        return createComponent(Show, {
          get when() {
            return state.active.draggable;
          },
          get children() {
            var _el$ = _tmpl$$9();
            var _ref$ = node;
            typeof _ref$ === "function" ? use(_ref$, _el$) : node = _el$;
            insert(_el$, (() => {
              var _c$ = memo(() => typeof props.children === "function");
              return () => _c$() ? props.children(state.active.draggable) : props.children;
            })());
            createRenderEffect((_p$) => {
              var _v$ = props.class, _v$2 = style$1();
              _v$ !== _p$.e && className(_el$, _p$.e = _v$);
              _p$.t = style(_el$, _v$2, _p$.t);
              return _p$;
            }, {
              e: void 0,
              t: void 0
            });
            return _el$;
          }
        });
      }
    });
  };

  var _tmpl$$8 = /* @__PURE__ */ template(`<div class="ext-absolute ext-bg-blue-800">`);
  const Draggable = (props) => {
    const draggable = createDraggable(props.id);
    return (() => {
      var _el$ = _tmpl$$8();
      use(draggable, _el$, () => true);
      _el$.style.setProperty("top", "200px");
      _el$.style.setProperty("right", "350px");
      insert(_el$, () => props.children);
      createRenderEffect(() => _el$.classList.toggle("ext-opacity-25", !!draggable.isActiveDraggable));
      return _el$;
    })();
  };

  var _tmpl$$7 = /* @__PURE__ */ template(`<div class="ext-absolute ext-border-dotted ext-border-4 ext-border-green-800 ext-w-[328px] ext-h-[351px]">`);
  const DragContainer = ({
    children
  }) => {
    let transform = {
      x: 0,
      y: 0
    };
    const onDragMove = ({
      overlay
    }) => {
      if (overlay) {
        transform = {
          ...overlay.transform
        };
      }
    };
    const onDragEnd = ({
      draggable
    }) => {
      const node = draggable.node;
      node.style.setProperty("top", node.offsetTop + transform.y + "px");
      node.style.setProperty("left", node.offsetLeft + transform.x + "px");
    };
    return createComponent(DragDropProvider, {
      onDragMove,
      onDragEnd,
      get children() {
        return [createComponent(DragDropSensors, {}), createComponent(Draggable, {
          id: 2,
          children
        }), createComponent(DragOverlay, {
          children: () => _tmpl$$7()
        })];
      }
    });
  };

  var _tmpl$$6 = /* @__PURE__ */ template(`<div class="ext-flex ext-gap-4"><div class="ext-flex ext-items-center"><span></span><p class="ext-ml-2 ext-text-gray-700 ext-text-md dark:ext-text-gray-50"></p></div><div class="ext-flex ext-items-center"><span></span><p class="ext-ml-2 ext-text-gray-700 ext-text-md dark:ext-text-gray-50">`);
  const OnlineStatusWidged = () => {
    const [isPulsingUA, setIsPulsingUA] = createSignal(false);
    const [isPulsingTrade, setIsPulsingTrade] = createSignal(false);
    const [user, setUser] = createSignal(false);
    const [trades, setTrades] = createSignal(false);
    let lastCountUA = cabalUserActivity.status?.count;
    let lastCountTrade = cabalUserActivity.status?.count;
    createEffect(() => {
      setUser(!!cabalUserActivity.status);
      const currentCount = cabalUserActivity.status?.count;
      if (currentCount !== void 0 && currentCount !== lastCountUA) {
        lastCountUA = currentCount;
        setIsPulsingUA(true);
        setTimeout(() => setIsPulsingUA(false), 600);
      }
    });
    createEffect(() => {
      setTrades(!!cabalTradeStream.status);
      const currentCount = cabalTradeStream.status?.count;
      if (currentCount !== void 0 && currentCount !== lastCountTrade) {
        lastCountTrade = currentCount;
        setIsPulsingTrade(true);
        setTimeout(() => setIsPulsingTrade(false), 600);
      }
    });
    return (() => {
      var _el$ = _tmpl$$6(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$2.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling;
      insert(_el$4, createComponent(Show, {
        get when() {
          return user();
        },
        fallback: "offline",
        get children() {
          return [" ", "user"];
        }
      }));
      insert(_el$7, createComponent(Show, {
        get when() {
          return trades();
        },
        fallback: "offline",
        get children() {
          return [" ", "trades"];
        }
      }));
      createRenderEffect((_p$) => {
        var _v$ = cn("ext-relative ext-w-4 ext-h-4 ext-p-2 ext-rounded-full", {
          "ext-bg-green-500": !!cabalUserActivity.status,
          "ext-bg-red-500": !cabalUserActivity.status,
          "ext-animate-pulse-once": isPulsingUA()
        }), _v$2 = cn("ext-relative ext-w-4 ext-h-4 ext-p-2 ext-rounded-full", {
          "ext-bg-green-500": !!cabalTradeStream.status,
          "ext-bg-red-500": !cabalTradeStream.status,
          "ext-animate-pulse-once": isPulsingTrade()
        });
        _v$ !== _p$.e && className(_el$3, _p$.e = _v$);
        _v$2 !== _p$.t && className(_el$6, _p$.t = _v$2);
        return _p$;
      }, {
        e: void 0,
        t: void 0
      });
      return _el$;
    })();
  };

  function onUrlChange(callback) {
    let lastUrl = location.href;
    const observer = new MutationObserver(() => {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        callback(location.href);
      }
    });
    observer.observe(document, { subtree: true, childList: true });
    const pushState = history.pushState;
    const replaceState = history.replaceState;
    history.pushState = function(...args) {
      pushState.apply(this, args);
      window.dispatchEvent(new Event("locationchange"));
    };
    history.replaceState = function(...args) {
      replaceState.apply(this, args);
      window.dispatchEvent(new Event("locationchange"));
    };
    window.addEventListener("popstate", () => {
      window.dispatchEvent(new Event("locationchange"));
    });
    window.addEventListener("locationchange", () => {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        callback(location.href);
      }
    });
  }

  var _tmpl$$5 = /* @__PURE__ */ template(`<div class="ext-bg-blue-600 ext-text-[9px]">`), _tmpl$2$1 = /* @__PURE__ */ template(`<div class="ext-flex ext-flex-col"><div class=ext-flex><div></div><div><button class=ext-bg-blue-500>`);
  const ShowLogItem = ({
    logItem
  }) => {
    const showStrinify = logItem.type === CabalCommonMessages.readyStatus || logItem.type === "tradeEvent" || logItem.type === "tokenStatus" || logItem.type === "tokenTradeStats";
    const [show, setShow] = createSignal(false);
    return (() => {
      var _el$ = _tmpl$2$1(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild;
      insert(_el$3, () => logItem.type);
      _el$5.$$click = () => setShow((prev) => !prev);
      insert(_el$5, () => `${show() ? "[[X]]" : "^^^"}`);
      insert(_el$, createComponent(Show, {
        get when() {
          return showStrinify && show();
        },
        get children() {
          var _el$6 = _tmpl$$5();
          insert(_el$6, () => JSON.stringify(logItem.event, null, 2));
          return _el$6;
        }
      }), null);
      return _el$;
    })();
  };
  delegateEvents(["click"]);

  var _tmpl$$4 = /* @__PURE__ */ template(`<div class="ext-flex ext-flex-col">`);
  const LogWidget = () => {
    return (() => {
      var _el$ = _tmpl$$4();
      insert(_el$, createComponent(For, {
        get each() {
          return logStore.logs;
        },
        children: (logItem, index) => createComponent(ShowLogItem, {
          logItem
        })
      }));
      return _el$;
    })();
  };

  var _tmpl$$3 = /* @__PURE__ */ template(`<input>`);
  const Button = (props) => createComponent(Button$1, mergeProps({
    get type() {
      return props.type ?? "button";
    },
    get ["class"]() {
      return cn("ext-py-2 ext-px-4 ext-bg-purple-600 ext-text-white ext-transition ext-ease-in ext-duration-200 ext-text-center ext-text-base ext-shadow-md ext-rounded-lg ", "focus:ext-ring-indigo-500 focus:ext-ring-offset-indigo-200 focus:ext-outline-none focus:ext-ring-2 focus:ext-ring-offset-2", "hover:ext-bg-purple-700", "disabled:ext-bg-gray-300 disabled:ext-text-gray-500 disabled:ext-cursor-not-allowed", props.className);
    }
  }, props));
  const Btn = (props) => createComponent(Button$1, mergeProps({
    get type() {
      return props.type ?? "button";
    },
    get ["class"]() {
      return cn("ext-bg-blue-500", props.className);
    }
  }, props));
  const Input = (props) => (() => {
    var _el$ = _tmpl$$3();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("ext-rounded-lg ext-appearance-none ext-border ext-border-gray-600 ext-py-2 ext-px-4 ext-bg-white ext-text-gray-700 ext-placeholder-gray-400 ext-shadow-sm ext-text-base focus:ext-outline-none focus:ext-ring-2 focus:ext-ring-purple-600 focus:ext-border-transparent", {
          [`${props.cn}`]: !!props.cn
        });
      }
    }, props), false, false);
    return _el$;
  })();

  var _tmpl$$2 = /* @__PURE__ */ template(`<div><div class=ext-flex>url: </div><div class=ext-flex>mint: `), _tmpl$2 = /* @__PURE__ */ template(`<div class="ext-absolute ext-z-[100] ext-top-0 ext-bg-green-100 ext-rounded-md ext-p-1 ext-min-w-[312px] ext-min-h-[343px]"><div class="ext-flex ext-gap-2">`);
  const ContentContainer = ({
    children
  }) => {
    const {
      startListen,
      registerTab,
      subscribeToken,
      clean,
      sendApiKey
    } = useStartCabalService();
    const [urlValue, setUrlValue] = createSignal("");
    const [showDebug, setShowDebug] = createSignal(false);
    const handleStart = () => {
      startListen();
      registerTab({
        locationHref: location.href
      });
    };
    const handleOnUrlChange = (url) => {
      setUrlValue(url);
    };
    onMount(() => {
      setTimeout(() => handleStart(), 100);
      onUrlChange(handleOnUrlChange);
    });
    const handleSubscribe = () => {
      if (!contentAppStore.mint) {
        return;
      }
      subscribeToken({
        mint: contentAppStore.mint,
        cb: (res) => {
        }
      });
    };
    createEffect(() => {
      if (!contentAppStore.isReady || !contentAppStore.mint) {
        return;
      }
      handleSubscribe();
    });
    onCleanup(() => clean());
    const logout = () => {
      sendApiKey(null);
    };
    return (() => {
      var _el$ = _tmpl$2(), _el$2 = _el$.firstChild;
      insert(_el$2, createComponent(OnlineStatusWidged, {}), null);
      insert(_el$2, createComponent(Btn, {
        onClick: () => handleSubscribe(),
        children: "start"
      }), null);
      insert(_el$2, createComponent(Btn, {
        onClick: () => setShowDebug((prev) => !prev),
        children: "log"
      }), null);
      insert(_el$2, createComponent(Btn, {
        onClick: () => logout(),
        children: "logout"
      }), null);
      insert(_el$, createComponent(Show, {
        get when() {
          return showDebug();
        },
        get children() {
          var _el$3 = _tmpl$$2(), _el$4 = _el$3.firstChild; _el$4.firstChild; var _el$6 = _el$4.nextSibling; _el$6.firstChild;
          insert(_el$4, urlValue, null);
          insert(_el$6, () => contentAppStore.mint, null);
          insert(_el$3, createComponent(LogWidget, {}), null);
          return _el$3;
        }
      }), null);
      insert(_el$, children, null);
      return _el$;
    })();
  };

  var util;
  (function (util) {
      util.assertEqual = (_) => { };
      function assertIs(_arg) { }
      util.assertIs = assertIs;
      function assertNever(_x) {
          throw new Error();
      }
      util.assertNever = assertNever;
      util.arrayToEnum = (items) => {
          const obj = {};
          for (const item of items) {
              obj[item] = item;
          }
          return obj;
      };
      util.getValidEnumValues = (obj) => {
          const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
          const filtered = {};
          for (const k of validKeys) {
              filtered[k] = obj[k];
          }
          return util.objectValues(filtered);
      };
      util.objectValues = (obj) => {
          return util.objectKeys(obj).map(function (e) {
              return obj[e];
          });
      };
      util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
          ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
          : (object) => {
              const keys = [];
              for (const key in object) {
                  if (Object.prototype.hasOwnProperty.call(object, key)) {
                      keys.push(key);
                  }
              }
              return keys;
          };
      util.find = (arr, checker) => {
          for (const item of arr) {
              if (checker(item))
                  return item;
          }
          return undefined;
      };
      util.isInteger = typeof Number.isInteger === "function"
          ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
          : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
          return array.map((val) => (typeof val === "string" ? `'${val}'` : val)).join(separator);
      }
      util.joinValues = joinValues;
      util.jsonStringifyReplacer = (_, value) => {
          if (typeof value === "bigint") {
              return value.toString();
          }
          return value;
      };
  })(util || (util = {}));
  var objectUtil;
  (function (objectUtil) {
      objectUtil.mergeShapes = (first, second) => {
          return {
              ...first,
              ...second, // second overwrites first
          };
      };
  })(objectUtil || (objectUtil = {}));
  const ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set",
  ]);
  const getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
          case "undefined":
              return ZodParsedType.undefined;
          case "string":
              return ZodParsedType.string;
          case "number":
              return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
          case "boolean":
              return ZodParsedType.boolean;
          case "function":
              return ZodParsedType.function;
          case "bigint":
              return ZodParsedType.bigint;
          case "symbol":
              return ZodParsedType.symbol;
          case "object":
              if (Array.isArray(data)) {
                  return ZodParsedType.array;
              }
              if (data === null) {
                  return ZodParsedType.null;
              }
              if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                  return ZodParsedType.promise;
              }
              if (typeof Map !== "undefined" && data instanceof Map) {
                  return ZodParsedType.map;
              }
              if (typeof Set !== "undefined" && data instanceof Set) {
                  return ZodParsedType.set;
              }
              if (typeof Date !== "undefined" && data instanceof Date) {
                  return ZodParsedType.date;
              }
              return ZodParsedType.object;
          default:
              return ZodParsedType.unknown;
      }
  };

  const ZodIssueCode = util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite",
  ]);
  class ZodError extends Error {
      get errors() {
          return this.issues;
      }
      constructor(issues) {
          super();
          this.issues = [];
          this.addIssue = (sub) => {
              this.issues = [...this.issues, sub];
          };
          this.addIssues = (subs = []) => {
              this.issues = [...this.issues, ...subs];
          };
          const actualProto = new.target.prototype;
          if (Object.setPrototypeOf) {
              // eslint-disable-next-line ban/ban
              Object.setPrototypeOf(this, actualProto);
          }
          else {
              this.__proto__ = actualProto;
          }
          this.name = "ZodError";
          this.issues = issues;
      }
      format(_mapper) {
          const mapper = _mapper ||
              function (issue) {
                  return issue.message;
              };
          const fieldErrors = { _errors: [] };
          const processError = (error) => {
              for (const issue of error.issues) {
                  if (issue.code === "invalid_union") {
                      issue.unionErrors.map(processError);
                  }
                  else if (issue.code === "invalid_return_type") {
                      processError(issue.returnTypeError);
                  }
                  else if (issue.code === "invalid_arguments") {
                      processError(issue.argumentsError);
                  }
                  else if (issue.path.length === 0) {
                      fieldErrors._errors.push(mapper(issue));
                  }
                  else {
                      let curr = fieldErrors;
                      let i = 0;
                      while (i < issue.path.length) {
                          const el = issue.path[i];
                          const terminal = i === issue.path.length - 1;
                          if (!terminal) {
                              curr[el] = curr[el] || { _errors: [] };
                              // if (typeof el === "string") {
                              //   curr[el] = curr[el] || { _errors: [] };
                              // } else if (typeof el === "number") {
                              //   const errorArray: any = [];
                              //   errorArray._errors = [];
                              //   curr[el] = curr[el] || errorArray;
                              // }
                          }
                          else {
                              curr[el] = curr[el] || { _errors: [] };
                              curr[el]._errors.push(mapper(issue));
                          }
                          curr = curr[el];
                          i++;
                      }
                  }
              }
          };
          processError(this);
          return fieldErrors;
      }
      static assert(value) {
          if (!(value instanceof ZodError)) {
              throw new Error(`Not a ZodError: ${value}`);
          }
      }
      toString() {
          return this.message;
      }
      get message() {
          return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
          return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
          const fieldErrors = {};
          const formErrors = [];
          for (const sub of this.issues) {
              if (sub.path.length > 0) {
                  fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                  fieldErrors[sub.path[0]].push(mapper(sub));
              }
              else {
                  formErrors.push(mapper(sub));
              }
          }
          return { formErrors, fieldErrors };
      }
      get formErrors() {
          return this.flatten();
      }
  }
  ZodError.create = (issues) => {
      const error = new ZodError(issues);
      return error;
  };

  const errorMap = (issue, _ctx) => {
      let message;
      switch (issue.code) {
          case ZodIssueCode.invalid_type:
              if (issue.received === ZodParsedType.undefined) {
                  message = "Required";
              }
              else {
                  message = `Expected ${issue.expected}, received ${issue.received}`;
              }
              break;
          case ZodIssueCode.invalid_literal:
              message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
              break;
          case ZodIssueCode.unrecognized_keys:
              message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
              break;
          case ZodIssueCode.invalid_union:
              message = `Invalid input`;
              break;
          case ZodIssueCode.invalid_union_discriminator:
              message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
              break;
          case ZodIssueCode.invalid_enum_value:
              message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
              break;
          case ZodIssueCode.invalid_arguments:
              message = `Invalid function arguments`;
              break;
          case ZodIssueCode.invalid_return_type:
              message = `Invalid function return type`;
              break;
          case ZodIssueCode.invalid_date:
              message = `Invalid date`;
              break;
          case ZodIssueCode.invalid_string:
              if (typeof issue.validation === "object") {
                  if ("includes" in issue.validation) {
                      message = `Invalid input: must include "${issue.validation.includes}"`;
                      if (typeof issue.validation.position === "number") {
                          message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                      }
                  }
                  else if ("startsWith" in issue.validation) {
                      message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                  }
                  else if ("endsWith" in issue.validation) {
                      message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                  }
                  else {
                      util.assertNever(issue.validation);
                  }
              }
              else if (issue.validation !== "regex") {
                  message = `Invalid ${issue.validation}`;
              }
              else {
                  message = "Invalid";
              }
              break;
          case ZodIssueCode.too_small:
              if (issue.type === "array")
                  message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
              else if (issue.type === "string")
                  message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
              else if (issue.type === "number")
                  message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
              else if (issue.type === "date")
                  message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
              else
                  message = "Invalid input";
              break;
          case ZodIssueCode.too_big:
              if (issue.type === "array")
                  message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
              else if (issue.type === "string")
                  message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
              else if (issue.type === "number")
                  message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
              else if (issue.type === "bigint")
                  message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
              else if (issue.type === "date")
                  message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
              else
                  message = "Invalid input";
              break;
          case ZodIssueCode.custom:
              message = `Invalid input`;
              break;
          case ZodIssueCode.invalid_intersection_types:
              message = `Intersection results could not be merged`;
              break;
          case ZodIssueCode.not_multiple_of:
              message = `Number must be a multiple of ${issue.multipleOf}`;
              break;
          case ZodIssueCode.not_finite:
              message = "Number must be finite";
              break;
          default:
              message = _ctx.defaultError;
              util.assertNever(issue);
      }
      return { message };
  };

  let overrideErrorMap = errorMap;
  function getErrorMap() {
      return overrideErrorMap;
  }

  const makeIssue = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...(issueData.path || [])];
      const fullIssue = {
          ...issueData,
          path: fullPath,
      };
      if (issueData.message !== undefined) {
          return {
              ...issueData,
              path: fullPath,
              message: issueData.message,
          };
      }
      let errorMessage = "";
      const maps = errorMaps
          .filter((m) => !!m)
          .slice()
          .reverse();
      for (const map of maps) {
          errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
          ...issueData,
          path: fullPath,
          message: errorMessage,
      };
  };
  function addIssueToContext(ctx, issueData) {
      const overrideMap = getErrorMap();
      const issue = makeIssue({
          issueData: issueData,
          data: ctx.data,
          path: ctx.path,
          errorMaps: [
              ctx.common.contextualErrorMap, // contextual error map is first priority
              ctx.schemaErrorMap, // then schema-bound map if available
              overrideMap, // then global override map
              overrideMap === errorMap ? undefined : errorMap, // then global default map
          ].filter((x) => !!x),
      });
      ctx.common.issues.push(issue);
  }
  class ParseStatus {
      constructor() {
          this.value = "valid";
      }
      dirty() {
          if (this.value === "valid")
              this.value = "dirty";
      }
      abort() {
          if (this.value !== "aborted")
              this.value = "aborted";
      }
      static mergeArray(status, results) {
          const arrayValue = [];
          for (const s of results) {
              if (s.status === "aborted")
                  return INVALID;
              if (s.status === "dirty")
                  status.dirty();
              arrayValue.push(s.value);
          }
          return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
          const syncPairs = [];
          for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                  key,
                  value,
              });
          }
          return ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
          const finalObject = {};
          for (const pair of pairs) {
              const { key, value } = pair;
              if (key.status === "aborted")
                  return INVALID;
              if (value.status === "aborted")
                  return INVALID;
              if (key.status === "dirty")
                  status.dirty();
              if (value.status === "dirty")
                  status.dirty();
              if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
                  finalObject[key.value] = value.value;
              }
          }
          return { status: status.value, value: finalObject };
      }
  }
  const INVALID = Object.freeze({
      status: "aborted",
  });
  const DIRTY = (value) => ({ status: "dirty", value });
  const OK = (value) => ({ status: "valid", value });
  const isAborted = (x) => x.status === "aborted";
  const isDirty = (x) => x.status === "dirty";
  const isValid = (x) => x.status === "valid";
  const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

  var errorUtil;
  (function (errorUtil) {
      errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      // biome-ignore lint:
      errorUtil.toString = (message) => typeof message === "string" ? message : message?.message;
  })(errorUtil || (errorUtil = {}));

  var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
  };
  var _ZodEnum_cache, _ZodNativeEnum_cache;
  class ParseInputLazyPath {
      constructor(parent, value, path, key) {
          this._cachedPath = [];
          this.parent = parent;
          this.data = value;
          this._path = path;
          this._key = key;
      }
      get path() {
          if (!this._cachedPath.length) {
              if (Array.isArray(this._key)) {
                  this._cachedPath.push(...this._path, ...this._key);
              }
              else {
                  this._cachedPath.push(...this._path, this._key);
              }
          }
          return this._cachedPath;
      }
  }
  const handleResult = (ctx, result) => {
      if (isValid(result)) {
          return { success: true, data: result.value };
      }
      else {
          if (!ctx.common.issues.length) {
              throw new Error("Validation failed but no issues detected.");
          }
          return {
              success: false,
              get error() {
                  if (this._error)
                      return this._error;
                  const error = new ZodError(ctx.common.issues);
                  this._error = error;
                  return this._error;
              },
          };
      }
  };
  function processCreateParams(params) {
      if (!params)
          return {};
      const { errorMap, invalid_type_error, required_error, description } = params;
      if (errorMap && (invalid_type_error || required_error)) {
          throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap)
          return { errorMap: errorMap, description };
      const customMap = (iss, ctx) => {
          const { message } = params;
          if (iss.code === "invalid_enum_value") {
              return { message: message ?? ctx.defaultError };
          }
          if (typeof ctx.data === "undefined") {
              return { message: message ?? required_error ?? ctx.defaultError };
          }
          if (iss.code !== "invalid_type")
              return { message: ctx.defaultError };
          return { message: message ?? invalid_type_error ?? ctx.defaultError };
      };
      return { errorMap: customMap, description };
  }
  class ZodType {
      get description() {
          return this._def.description;
      }
      _getType(input) {
          return getParsedType(input.data);
      }
      _getOrReturnCtx(input, ctx) {
          return (ctx || {
              common: input.parent.common,
              data: input.data,
              parsedType: getParsedType(input.data),
              schemaErrorMap: this._def.errorMap,
              path: input.path,
              parent: input.parent,
          });
      }
      _processInputParams(input) {
          return {
              status: new ParseStatus(),
              ctx: {
                  common: input.parent.common,
                  data: input.data,
                  parsedType: getParsedType(input.data),
                  schemaErrorMap: this._def.errorMap,
                  path: input.path,
                  parent: input.parent,
              },
          };
      }
      _parseSync(input) {
          const result = this._parse(input);
          if (isAsync(result)) {
              throw new Error("Synchronous parse encountered promise.");
          }
          return result;
      }
      _parseAsync(input) {
          const result = this._parse(input);
          return Promise.resolve(result);
      }
      parse(data, params) {
          const result = this.safeParse(data, params);
          if (result.success)
              return result.data;
          throw result.error;
      }
      safeParse(data, params) {
          const ctx = {
              common: {
                  issues: [],
                  async: params?.async ?? false,
                  contextualErrorMap: params?.errorMap,
              },
              path: params?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data,
              parsedType: getParsedType(data),
          };
          const result = this._parseSync({ data, path: ctx.path, parent: ctx });
          return handleResult(ctx, result);
      }
      "~validate"(data) {
          const ctx = {
              common: {
                  issues: [],
                  async: !!this["~standard"].async,
              },
              path: [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data,
              parsedType: getParsedType(data),
          };
          if (!this["~standard"].async) {
              try {
                  const result = this._parseSync({ data, path: [], parent: ctx });
                  return isValid(result)
                      ? {
                          value: result.value,
                      }
                      : {
                          issues: ctx.common.issues,
                      };
              }
              catch (err) {
                  if (err?.message?.toLowerCase()?.includes("encountered")) {
                      this["~standard"].async = true;
                  }
                  ctx.common = {
                      issues: [],
                      async: true,
                  };
              }
          }
          return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result)
              ? {
                  value: result.value,
              }
              : {
                  issues: ctx.common.issues,
              });
      }
      async parseAsync(data, params) {
          const result = await this.safeParseAsync(data, params);
          if (result.success)
              return result.data;
          throw result.error;
      }
      async safeParseAsync(data, params) {
          const ctx = {
              common: {
                  issues: [],
                  contextualErrorMap: params?.errorMap,
                  async: true,
              },
              path: params?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data,
              parsedType: getParsedType(data),
          };
          const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
          const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
          return handleResult(ctx, result);
      }
      refine(check, message) {
          const getIssueProperties = (val) => {
              if (typeof message === "string" || typeof message === "undefined") {
                  return { message };
              }
              else if (typeof message === "function") {
                  return message(val);
              }
              else {
                  return message;
              }
          };
          return this._refinement((val, ctx) => {
              const result = check(val);
              const setError = () => ctx.addIssue({
                  code: ZodIssueCode.custom,
                  ...getIssueProperties(val),
              });
              if (typeof Promise !== "undefined" && result instanceof Promise) {
                  return result.then((data) => {
                      if (!data) {
                          setError();
                          return false;
                      }
                      else {
                          return true;
                      }
                  });
              }
              if (!result) {
                  setError();
                  return false;
              }
              else {
                  return true;
              }
          });
      }
      refinement(check, refinementData) {
          return this._refinement((val, ctx) => {
              if (!check(val)) {
                  ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                  return false;
              }
              else {
                  return true;
              }
          });
      }
      _refinement(refinement) {
          return new ZodEffects({
              schema: this,
              typeName: ZodFirstPartyTypeKind.ZodEffects,
              effect: { type: "refinement", refinement },
          });
      }
      superRefine(refinement) {
          return this._refinement(refinement);
      }
      constructor(def) {
          /** Alias of safeParseAsync */
          this.spa = this.safeParseAsync;
          this._def = def;
          this.parse = this.parse.bind(this);
          this.safeParse = this.safeParse.bind(this);
          this.parseAsync = this.parseAsync.bind(this);
          this.safeParseAsync = this.safeParseAsync.bind(this);
          this.spa = this.spa.bind(this);
          this.refine = this.refine.bind(this);
          this.refinement = this.refinement.bind(this);
          this.superRefine = this.superRefine.bind(this);
          this.optional = this.optional.bind(this);
          this.nullable = this.nullable.bind(this);
          this.nullish = this.nullish.bind(this);
          this.array = this.array.bind(this);
          this.promise = this.promise.bind(this);
          this.or = this.or.bind(this);
          this.and = this.and.bind(this);
          this.transform = this.transform.bind(this);
          this.brand = this.brand.bind(this);
          this.default = this.default.bind(this);
          this.catch = this.catch.bind(this);
          this.describe = this.describe.bind(this);
          this.pipe = this.pipe.bind(this);
          this.readonly = this.readonly.bind(this);
          this.isNullable = this.isNullable.bind(this);
          this.isOptional = this.isOptional.bind(this);
          this["~standard"] = {
              version: 1,
              vendor: "zod",
              validate: (data) => this["~validate"](data),
          };
      }
      optional() {
          return ZodOptional.create(this, this._def);
      }
      nullable() {
          return ZodNullable.create(this, this._def);
      }
      nullish() {
          return this.nullable().optional();
      }
      array() {
          return ZodArray.create(this);
      }
      promise() {
          return ZodPromise.create(this, this._def);
      }
      or(option) {
          return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
          return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
          return new ZodEffects({
              ...processCreateParams(this._def),
              schema: this,
              typeName: ZodFirstPartyTypeKind.ZodEffects,
              effect: { type: "transform", transform },
          });
      }
      default(def) {
          const defaultValueFunc = typeof def === "function" ? def : () => def;
          return new ZodDefault({
              ...processCreateParams(this._def),
              innerType: this,
              defaultValue: defaultValueFunc,
              typeName: ZodFirstPartyTypeKind.ZodDefault,
          });
      }
      brand() {
          return new ZodBranded({
              typeName: ZodFirstPartyTypeKind.ZodBranded,
              type: this,
              ...processCreateParams(this._def),
          });
      }
      catch(def) {
          const catchValueFunc = typeof def === "function" ? def : () => def;
          return new ZodCatch({
              ...processCreateParams(this._def),
              innerType: this,
              catchValue: catchValueFunc,
              typeName: ZodFirstPartyTypeKind.ZodCatch,
          });
      }
      describe(description) {
          const This = this.constructor;
          return new This({
              ...this._def,
              description,
          });
      }
      pipe(target) {
          return ZodPipeline.create(this, target);
      }
      readonly() {
          return ZodReadonly.create(this);
      }
      isOptional() {
          return this.safeParse(undefined).success;
      }
      isNullable() {
          return this.safeParse(null).success;
      }
  }
  const cuidRegex = /^c[^\s-]{8,}$/i;
  const cuid2Regex = /^[0-9a-z]+$/;
  const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  // const uuidRegex =
  //   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
  const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  const nanoidRegex = /^[a-z0-9_-]{21}$/i;
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  // from https://stackoverflow.com/a/46181/1550155
  // old version: too slow, didn't support unicode
  // const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  //old email regex
  // const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
  // eslint-disable-next-line
  // const emailRegex =
  //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
  // const emailRegex =
  //   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  // const emailRegex =
  //   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
  const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  // const emailRegex =
  //   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
  // from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
  const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  let emojiRegex;
  // faster, simpler, safer
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  // const ipv6Regex =
  // /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  // https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
  const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  // https://base64.guru/standards/base64url
  const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  // simple
  // const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
  // no leap year validation
  // const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
  // with leap year validation
  const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  const dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
      let secondsRegexSource = `[0-5]\\d`;
      if (args.precision) {
          secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
      }
      else if (args.precision == null) {
          secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
      }
      const secondsQuantifier = args.precision ? "+" : "?"; // require seconds if precision is nonzero
      return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
  }
  function timeRegex(args) {
      return new RegExp(`^${timeRegexSource(args)}$`);
  }
  // Adapted from https://stackoverflow.com/a/3143231
  function datetimeRegex(args) {
      let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
          opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
          return true;
      }
      if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
          return true;
      }
      return false;
  }
  function isValidJWT(jwt, alg) {
      if (!jwtRegex.test(jwt))
          return false;
      try {
          const [header] = jwt.split(".");
          // Convert base64url to base64
          const base64 = header
              .replace(/-/g, "+")
              .replace(/_/g, "/")
              .padEnd(header.length + ((4 - (header.length % 4)) % 4), "=");
          const decoded = JSON.parse(atob(base64));
          if (typeof decoded !== "object" || decoded === null)
              return false;
          if ("typ" in decoded && decoded?.typ !== "JWT")
              return false;
          if (!decoded.alg)
              return false;
          if (alg && decoded.alg !== alg)
              return false;
          return true;
      }
      catch {
          return false;
      }
  }
  function isValidCidr(ip, version) {
      if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
          return true;
      }
      if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
          return true;
      }
      return false;
  }
  class ZodString extends ZodType {
      _parse(input) {
          if (this._def.coerce) {
              input.data = String(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.string) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.string,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const status = new ParseStatus();
          let ctx = undefined;
          for (const check of this._def.checks) {
              if (check.kind === "min") {
                  if (input.data.length < check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_small,
                          minimum: check.value,
                          type: "string",
                          inclusive: true,
                          exact: false,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "max") {
                  if (input.data.length > check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_big,
                          maximum: check.value,
                          type: "string",
                          inclusive: true,
                          exact: false,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "length") {
                  const tooBig = input.data.length > check.value;
                  const tooSmall = input.data.length < check.value;
                  if (tooBig || tooSmall) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      if (tooBig) {
                          addIssueToContext(ctx, {
                              code: ZodIssueCode.too_big,
                              maximum: check.value,
                              type: "string",
                              inclusive: true,
                              exact: true,
                              message: check.message,
                          });
                      }
                      else if (tooSmall) {
                          addIssueToContext(ctx, {
                              code: ZodIssueCode.too_small,
                              minimum: check.value,
                              type: "string",
                              inclusive: true,
                              exact: true,
                              message: check.message,
                          });
                      }
                      status.dirty();
                  }
              }
              else if (check.kind === "email") {
                  if (!emailRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "email",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "emoji") {
                  if (!emojiRegex) {
                      emojiRegex = new RegExp(_emojiRegex, "u");
                  }
                  if (!emojiRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "emoji",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "uuid") {
                  if (!uuidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "uuid",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "nanoid") {
                  if (!nanoidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "nanoid",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "cuid") {
                  if (!cuidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "cuid",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "cuid2") {
                  if (!cuid2Regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "cuid2",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "ulid") {
                  if (!ulidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "ulid",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "url") {
                  try {
                      new URL(input.data);
                  }
                  catch {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "url",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "regex") {
                  check.regex.lastIndex = 0;
                  const testResult = check.regex.test(input.data);
                  if (!testResult) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "regex",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "trim") {
                  input.data = input.data.trim();
              }
              else if (check.kind === "includes") {
                  if (!input.data.includes(check.value, check.position)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: { includes: check.value, position: check.position },
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "toLowerCase") {
                  input.data = input.data.toLowerCase();
              }
              else if (check.kind === "toUpperCase") {
                  input.data = input.data.toUpperCase();
              }
              else if (check.kind === "startsWith") {
                  if (!input.data.startsWith(check.value)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: { startsWith: check.value },
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "endsWith") {
                  if (!input.data.endsWith(check.value)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: { endsWith: check.value },
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "datetime") {
                  const regex = datetimeRegex(check);
                  if (!regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: "datetime",
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "date") {
                  const regex = dateRegex;
                  if (!regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: "date",
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "time") {
                  const regex = timeRegex(check);
                  if (!regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: "time",
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "duration") {
                  if (!durationRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "duration",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "ip") {
                  if (!isValidIP(input.data, check.version)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "ip",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "jwt") {
                  if (!isValidJWT(input.data, check.alg)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "jwt",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "cidr") {
                  if (!isValidCidr(input.data, check.version)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "cidr",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "base64") {
                  if (!base64Regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "base64",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "base64url") {
                  if (!base64urlRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "base64url",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else {
                  util.assertNever(check);
              }
          }
          return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
          return this.refinement((data) => regex.test(data), {
              validation,
              code: ZodIssueCode.invalid_string,
              ...errorUtil.errToObj(message),
          });
      }
      _addCheck(check) {
          return new ZodString({
              ...this._def,
              checks: [...this._def.checks, check],
          });
      }
      email(message) {
          return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
      }
      url(message) {
          return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
      }
      emoji(message) {
          return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
      }
      uuid(message) {
          return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
      }
      nanoid(message) {
          return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
      }
      cuid(message) {
          return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
      }
      cuid2(message) {
          return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
      }
      ulid(message) {
          return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
      }
      base64(message) {
          return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
      }
      base64url(message) {
          // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
          return this._addCheck({
              kind: "base64url",
              ...errorUtil.errToObj(message),
          });
      }
      jwt(options) {
          return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
      }
      ip(options) {
          return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
      }
      cidr(options) {
          return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
      }
      datetime(options) {
          if (typeof options === "string") {
              return this._addCheck({
                  kind: "datetime",
                  precision: null,
                  offset: false,
                  local: false,
                  message: options,
              });
          }
          return this._addCheck({
              kind: "datetime",
              precision: typeof options?.precision === "undefined" ? null : options?.precision,
              offset: options?.offset ?? false,
              local: options?.local ?? false,
              ...errorUtil.errToObj(options?.message),
          });
      }
      date(message) {
          return this._addCheck({ kind: "date", message });
      }
      time(options) {
          if (typeof options === "string") {
              return this._addCheck({
                  kind: "time",
                  precision: null,
                  message: options,
              });
          }
          return this._addCheck({
              kind: "time",
              precision: typeof options?.precision === "undefined" ? null : options?.precision,
              ...errorUtil.errToObj(options?.message),
          });
      }
      duration(message) {
          return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
      }
      regex(regex, message) {
          return this._addCheck({
              kind: "regex",
              regex: regex,
              ...errorUtil.errToObj(message),
          });
      }
      includes(value, options) {
          return this._addCheck({
              kind: "includes",
              value: value,
              position: options?.position,
              ...errorUtil.errToObj(options?.message),
          });
      }
      startsWith(value, message) {
          return this._addCheck({
              kind: "startsWith",
              value: value,
              ...errorUtil.errToObj(message),
          });
      }
      endsWith(value, message) {
          return this._addCheck({
              kind: "endsWith",
              value: value,
              ...errorUtil.errToObj(message),
          });
      }
      min(minLength, message) {
          return this._addCheck({
              kind: "min",
              value: minLength,
              ...errorUtil.errToObj(message),
          });
      }
      max(maxLength, message) {
          return this._addCheck({
              kind: "max",
              value: maxLength,
              ...errorUtil.errToObj(message),
          });
      }
      length(len, message) {
          return this._addCheck({
              kind: "length",
              value: len,
              ...errorUtil.errToObj(message),
          });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
          return this.min(1, errorUtil.errToObj(message));
      }
      trim() {
          return new ZodString({
              ...this._def,
              checks: [...this._def.checks, { kind: "trim" }],
          });
      }
      toLowerCase() {
          return new ZodString({
              ...this._def,
              checks: [...this._def.checks, { kind: "toLowerCase" }],
          });
      }
      toUpperCase() {
          return new ZodString({
              ...this._def,
              checks: [...this._def.checks, { kind: "toUpperCase" }],
          });
      }
      get isDatetime() {
          return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
          return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
          return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
          return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
          return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
          return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
          return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
          return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
          return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
          return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
          return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
          return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
          return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
          return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
          return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
          // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
          return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
          }
          return min;
      }
      get maxLength() {
          let max = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return max;
      }
  }
  ZodString.create = (params) => {
      return new ZodString({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodString,
          coerce: params?.coerce ?? false,
          ...processCreateParams(params),
      });
  };
  // https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
  function floatSafeRemainder(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return (valInt % stepInt) / 10 ** decCount;
  }
  class ZodNumber extends ZodType {
      constructor() {
          super(...arguments);
          this.min = this.gte;
          this.max = this.lte;
          this.step = this.multipleOf;
      }
      _parse(input) {
          if (this._def.coerce) {
              input.data = Number(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.number) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.number,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          let ctx = undefined;
          const status = new ParseStatus();
          for (const check of this._def.checks) {
              if (check.kind === "int") {
                  if (!util.isInteger(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_type,
                          expected: "integer",
                          received: "float",
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "min") {
                  const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                  if (tooSmall) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_small,
                          minimum: check.value,
                          type: "number",
                          inclusive: check.inclusive,
                          exact: false,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "max") {
                  const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                  if (tooBig) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_big,
                          maximum: check.value,
                          type: "number",
                          inclusive: check.inclusive,
                          exact: false,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "multipleOf") {
                  if (floatSafeRemainder(input.data, check.value) !== 0) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.not_multiple_of,
                          multipleOf: check.value,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "finite") {
                  if (!Number.isFinite(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.not_finite,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else {
                  util.assertNever(check);
              }
          }
          return { status: status.value, value: input.data };
      }
      gte(value, message) {
          return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
          return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
          return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
          return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
          return new ZodNumber({
              ...this._def,
              checks: [
                  ...this._def.checks,
                  {
                      kind,
                      value,
                      inclusive,
                      message: errorUtil.toString(message),
                  },
              ],
          });
      }
      _addCheck(check) {
          return new ZodNumber({
              ...this._def,
              checks: [...this._def.checks, check],
          });
      }
      int(message) {
          return this._addCheck({
              kind: "int",
              message: errorUtil.toString(message),
          });
      }
      positive(message) {
          return this._addCheck({
              kind: "min",
              value: 0,
              inclusive: false,
              message: errorUtil.toString(message),
          });
      }
      negative(message) {
          return this._addCheck({
              kind: "max",
              value: 0,
              inclusive: false,
              message: errorUtil.toString(message),
          });
      }
      nonpositive(message) {
          return this._addCheck({
              kind: "max",
              value: 0,
              inclusive: true,
              message: errorUtil.toString(message),
          });
      }
      nonnegative(message) {
          return this._addCheck({
              kind: "min",
              value: 0,
              inclusive: true,
              message: errorUtil.toString(message),
          });
      }
      multipleOf(value, message) {
          return this._addCheck({
              kind: "multipleOf",
              value: value,
              message: errorUtil.toString(message),
          });
      }
      finite(message) {
          return this._addCheck({
              kind: "finite",
              message: errorUtil.toString(message),
          });
      }
      safe(message) {
          return this._addCheck({
              kind: "min",
              inclusive: true,
              value: Number.MIN_SAFE_INTEGER,
              message: errorUtil.toString(message),
          })._addCheck({
              kind: "max",
              inclusive: true,
              value: Number.MAX_SAFE_INTEGER,
              message: errorUtil.toString(message),
          });
      }
      get minValue() {
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
          }
          return min;
      }
      get maxValue() {
          let max = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return max;
      }
      get isInt() {
          return !!this._def.checks.find((ch) => ch.kind === "int" || (ch.kind === "multipleOf" && util.isInteger(ch.value)));
      }
      get isFinite() {
          let max = null;
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
                  return true;
              }
              else if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
              else if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return Number.isFinite(min) && Number.isFinite(max);
      }
  }
  ZodNumber.create = (params) => {
      return new ZodNumber({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodNumber,
          coerce: params?.coerce || false,
          ...processCreateParams(params),
      });
  };
  class ZodBigInt extends ZodType {
      constructor() {
          super(...arguments);
          this.min = this.gte;
          this.max = this.lte;
      }
      _parse(input) {
          if (this._def.coerce) {
              try {
                  input.data = BigInt(input.data);
              }
              catch {
                  return this._getInvalidInput(input);
              }
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.bigint) {
              return this._getInvalidInput(input);
          }
          let ctx = undefined;
          const status = new ParseStatus();
          for (const check of this._def.checks) {
              if (check.kind === "min") {
                  const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                  if (tooSmall) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_small,
                          type: "bigint",
                          minimum: check.value,
                          inclusive: check.inclusive,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "max") {
                  const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                  if (tooBig) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_big,
                          type: "bigint",
                          maximum: check.value,
                          inclusive: check.inclusive,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "multipleOf") {
                  if (input.data % check.value !== BigInt(0)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.not_multiple_of,
                          multipleOf: check.value,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else {
                  util.assertNever(check);
              }
          }
          return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.bigint,
              received: ctx.parsedType,
          });
          return INVALID;
      }
      gte(value, message) {
          return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
          return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
          return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
          return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
          return new ZodBigInt({
              ...this._def,
              checks: [
                  ...this._def.checks,
                  {
                      kind,
                      value,
                      inclusive,
                      message: errorUtil.toString(message),
                  },
              ],
          });
      }
      _addCheck(check) {
          return new ZodBigInt({
              ...this._def,
              checks: [...this._def.checks, check],
          });
      }
      positive(message) {
          return this._addCheck({
              kind: "min",
              value: BigInt(0),
              inclusive: false,
              message: errorUtil.toString(message),
          });
      }
      negative(message) {
          return this._addCheck({
              kind: "max",
              value: BigInt(0),
              inclusive: false,
              message: errorUtil.toString(message),
          });
      }
      nonpositive(message) {
          return this._addCheck({
              kind: "max",
              value: BigInt(0),
              inclusive: true,
              message: errorUtil.toString(message),
          });
      }
      nonnegative(message) {
          return this._addCheck({
              kind: "min",
              value: BigInt(0),
              inclusive: true,
              message: errorUtil.toString(message),
          });
      }
      multipleOf(value, message) {
          return this._addCheck({
              kind: "multipleOf",
              value,
              message: errorUtil.toString(message),
          });
      }
      get minValue() {
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
          }
          return min;
      }
      get maxValue() {
          let max = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return max;
      }
  }
  ZodBigInt.create = (params) => {
      return new ZodBigInt({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodBigInt,
          coerce: params?.coerce ?? false,
          ...processCreateParams(params),
      });
  };
  class ZodBoolean extends ZodType {
      _parse(input) {
          if (this._def.coerce) {
              input.data = Boolean(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.boolean) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.boolean,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodBoolean.create = (params) => {
      return new ZodBoolean({
          typeName: ZodFirstPartyTypeKind.ZodBoolean,
          coerce: params?.coerce || false,
          ...processCreateParams(params),
      });
  };
  class ZodDate extends ZodType {
      _parse(input) {
          if (this._def.coerce) {
              input.data = new Date(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.date) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.date,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          if (Number.isNaN(input.data.getTime())) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_date,
              });
              return INVALID;
          }
          const status = new ParseStatus();
          let ctx = undefined;
          for (const check of this._def.checks) {
              if (check.kind === "min") {
                  if (input.data.getTime() < check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_small,
                          message: check.message,
                          inclusive: true,
                          exact: false,
                          minimum: check.value,
                          type: "date",
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "max") {
                  if (input.data.getTime() > check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_big,
                          message: check.message,
                          inclusive: true,
                          exact: false,
                          maximum: check.value,
                          type: "date",
                      });
                      status.dirty();
                  }
              }
              else {
                  util.assertNever(check);
              }
          }
          return {
              status: status.value,
              value: new Date(input.data.getTime()),
          };
      }
      _addCheck(check) {
          return new ZodDate({
              ...this._def,
              checks: [...this._def.checks, check],
          });
      }
      min(minDate, message) {
          return this._addCheck({
              kind: "min",
              value: minDate.getTime(),
              message: errorUtil.toString(message),
          });
      }
      max(maxDate, message) {
          return this._addCheck({
              kind: "max",
              value: maxDate.getTime(),
              message: errorUtil.toString(message),
          });
      }
      get minDate() {
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
          }
          return min != null ? new Date(min) : null;
      }
      get maxDate() {
          let max = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return max != null ? new Date(max) : null;
      }
  }
  ZodDate.create = (params) => {
      return new ZodDate({
          checks: [],
          coerce: params?.coerce || false,
          typeName: ZodFirstPartyTypeKind.ZodDate,
          ...processCreateParams(params),
      });
  };
  class ZodSymbol extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.symbol) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.symbol,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodSymbol.create = (params) => {
      return new ZodSymbol({
          typeName: ZodFirstPartyTypeKind.ZodSymbol,
          ...processCreateParams(params),
      });
  };
  class ZodUndefined extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.undefined) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.undefined,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodUndefined.create = (params) => {
      return new ZodUndefined({
          typeName: ZodFirstPartyTypeKind.ZodUndefined,
          ...processCreateParams(params),
      });
  };
  class ZodNull extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.null) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.null,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodNull.create = (params) => {
      return new ZodNull({
          typeName: ZodFirstPartyTypeKind.ZodNull,
          ...processCreateParams(params),
      });
  };
  class ZodAny extends ZodType {
      constructor() {
          super(...arguments);
          // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
          this._any = true;
      }
      _parse(input) {
          return OK(input.data);
      }
  }
  ZodAny.create = (params) => {
      return new ZodAny({
          typeName: ZodFirstPartyTypeKind.ZodAny,
          ...processCreateParams(params),
      });
  };
  class ZodUnknown extends ZodType {
      constructor() {
          super(...arguments);
          // required
          this._unknown = true;
      }
      _parse(input) {
          return OK(input.data);
      }
  }
  ZodUnknown.create = (params) => {
      return new ZodUnknown({
          typeName: ZodFirstPartyTypeKind.ZodUnknown,
          ...processCreateParams(params),
      });
  };
  class ZodNever extends ZodType {
      _parse(input) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.never,
              received: ctx.parsedType,
          });
          return INVALID;
      }
  }
  ZodNever.create = (params) => {
      return new ZodNever({
          typeName: ZodFirstPartyTypeKind.ZodNever,
          ...processCreateParams(params),
      });
  };
  class ZodVoid extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.undefined) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.void,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodVoid.create = (params) => {
      return new ZodVoid({
          typeName: ZodFirstPartyTypeKind.ZodVoid,
          ...processCreateParams(params),
      });
  };
  class ZodArray extends ZodType {
      _parse(input) {
          const { ctx, status } = this._processInputParams(input);
          const def = this._def;
          if (ctx.parsedType !== ZodParsedType.array) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.array,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          if (def.exactLength !== null) {
              const tooBig = ctx.data.length > def.exactLength.value;
              const tooSmall = ctx.data.length < def.exactLength.value;
              if (tooBig || tooSmall) {
                  addIssueToContext(ctx, {
                      code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                      minimum: (tooSmall ? def.exactLength.value : undefined),
                      maximum: (tooBig ? def.exactLength.value : undefined),
                      type: "array",
                      inclusive: true,
                      exact: true,
                      message: def.exactLength.message,
                  });
                  status.dirty();
              }
          }
          if (def.minLength !== null) {
              if (ctx.data.length < def.minLength.value) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.too_small,
                      minimum: def.minLength.value,
                      type: "array",
                      inclusive: true,
                      exact: false,
                      message: def.minLength.message,
                  });
                  status.dirty();
              }
          }
          if (def.maxLength !== null) {
              if (ctx.data.length > def.maxLength.value) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.too_big,
                      maximum: def.maxLength.value,
                      type: "array",
                      inclusive: true,
                      exact: false,
                      message: def.maxLength.message,
                  });
                  status.dirty();
              }
          }
          if (ctx.common.async) {
              return Promise.all([...ctx.data].map((item, i) => {
                  return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
              })).then((result) => {
                  return ParseStatus.mergeArray(status, result);
              });
          }
          const result = [...ctx.data].map((item, i) => {
              return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          });
          return ParseStatus.mergeArray(status, result);
      }
      get element() {
          return this._def.type;
      }
      min(minLength, message) {
          return new ZodArray({
              ...this._def,
              minLength: { value: minLength, message: errorUtil.toString(message) },
          });
      }
      max(maxLength, message) {
          return new ZodArray({
              ...this._def,
              maxLength: { value: maxLength, message: errorUtil.toString(message) },
          });
      }
      length(len, message) {
          return new ZodArray({
              ...this._def,
              exactLength: { value: len, message: errorUtil.toString(message) },
          });
      }
      nonempty(message) {
          return this.min(1, message);
      }
  }
  ZodArray.create = (schema, params) => {
      return new ZodArray({
          type: schema,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: ZodFirstPartyTypeKind.ZodArray,
          ...processCreateParams(params),
      });
  };
  function deepPartialify(schema) {
      if (schema instanceof ZodObject) {
          const newShape = {};
          for (const key in schema.shape) {
              const fieldSchema = schema.shape[key];
              newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
          }
          return new ZodObject({
              ...schema._def,
              shape: () => newShape,
          });
      }
      else if (schema instanceof ZodArray) {
          return new ZodArray({
              ...schema._def,
              type: deepPartialify(schema.element),
          });
      }
      else if (schema instanceof ZodOptional) {
          return ZodOptional.create(deepPartialify(schema.unwrap()));
      }
      else if (schema instanceof ZodNullable) {
          return ZodNullable.create(deepPartialify(schema.unwrap()));
      }
      else if (schema instanceof ZodTuple) {
          return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
      }
      else {
          return schema;
      }
  }
  class ZodObject extends ZodType {
      constructor() {
          super(...arguments);
          this._cached = null;
          /**
           * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
           * If you want to pass through unknown properties, use `.passthrough()` instead.
           */
          this.nonstrict = this.passthrough;
          // extend<
          //   Augmentation extends ZodRawShape,
          //   NewOutput extends util.flatten<{
          //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
          //       ? Augmentation[k]["_output"]
          //       : k extends keyof Output
          //       ? Output[k]
          //       : never;
          //   }>,
          //   NewInput extends util.flatten<{
          //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
          //       ? Augmentation[k]["_input"]
          //       : k extends keyof Input
          //       ? Input[k]
          //       : never;
          //   }>
          // >(
          //   augmentation: Augmentation
          // ): ZodObject<
          //   extendShape<T, Augmentation>,
          //   UnknownKeys,
          //   Catchall,
          //   NewOutput,
          //   NewInput
          // > {
          //   return new ZodObject({
          //     ...this._def,
          //     shape: () => ({
          //       ...this._def.shape(),
          //       ...augmentation,
          //     }),
          //   }) as any;
          // }
          /**
           * @deprecated Use `.extend` instead
           *  */
          this.augment = this.extend;
      }
      _getCached() {
          if (this._cached !== null)
              return this._cached;
          const shape = this._def.shape();
          const keys = util.objectKeys(shape);
          this._cached = { shape, keys };
          return this._cached;
      }
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.object) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.object,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const { status, ctx } = this._processInputParams(input);
          const { shape, keys: shapeKeys } = this._getCached();
          const extraKeys = [];
          if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
              for (const key in ctx.data) {
                  if (!shapeKeys.includes(key)) {
                      extraKeys.push(key);
                  }
              }
          }
          const pairs = [];
          for (const key of shapeKeys) {
              const keyValidator = shape[key];
              const value = ctx.data[key];
              pairs.push({
                  key: { status: "valid", value: key },
                  value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                  alwaysSet: key in ctx.data,
              });
          }
          if (this._def.catchall instanceof ZodNever) {
              const unknownKeys = this._def.unknownKeys;
              if (unknownKeys === "passthrough") {
                  for (const key of extraKeys) {
                      pairs.push({
                          key: { status: "valid", value: key },
                          value: { status: "valid", value: ctx.data[key] },
                      });
                  }
              }
              else if (unknownKeys === "strict") {
                  if (extraKeys.length > 0) {
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.unrecognized_keys,
                          keys: extraKeys,
                      });
                      status.dirty();
                  }
              }
              else if (unknownKeys === "strip") ;
              else {
                  throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
              }
          }
          else {
              // run catchall validation
              const catchall = this._def.catchall;
              for (const key of extraKeys) {
                  const value = ctx.data[key];
                  pairs.push({
                      key: { status: "valid", value: key },
                      value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                      ),
                      alwaysSet: key in ctx.data,
                  });
              }
          }
          if (ctx.common.async) {
              return Promise.resolve()
                  .then(async () => {
                  const syncPairs = [];
                  for (const pair of pairs) {
                      const key = await pair.key;
                      const value = await pair.value;
                      syncPairs.push({
                          key,
                          value,
                          alwaysSet: pair.alwaysSet,
                      });
                  }
                  return syncPairs;
              })
                  .then((syncPairs) => {
                  return ParseStatus.mergeObjectSync(status, syncPairs);
              });
          }
          else {
              return ParseStatus.mergeObjectSync(status, pairs);
          }
      }
      get shape() {
          return this._def.shape();
      }
      strict(message) {
          errorUtil.errToObj;
          return new ZodObject({
              ...this._def,
              unknownKeys: "strict",
              ...(message !== undefined
                  ? {
                      errorMap: (issue, ctx) => {
                          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
                          if (issue.code === "unrecognized_keys")
                              return {
                                  message: errorUtil.errToObj(message).message ?? defaultError,
                              };
                          return {
                              message: defaultError,
                          };
                      },
                  }
                  : {}),
          });
      }
      strip() {
          return new ZodObject({
              ...this._def,
              unknownKeys: "strip",
          });
      }
      passthrough() {
          return new ZodObject({
              ...this._def,
              unknownKeys: "passthrough",
          });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
          return new ZodObject({
              ...this._def,
              shape: () => ({
                  ...this._def.shape(),
                  ...augmentation,
              }),
          });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
          const merged = new ZodObject({
              unknownKeys: merging._def.unknownKeys,
              catchall: merging._def.catchall,
              shape: () => ({
                  ...this._def.shape(),
                  ...merging._def.shape(),
              }),
              typeName: ZodFirstPartyTypeKind.ZodObject,
          });
          return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
          return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
          return new ZodObject({
              ...this._def,
              catchall: index,
          });
      }
      pick(mask) {
          const shape = {};
          for (const key of util.objectKeys(mask)) {
              if (mask[key] && this.shape[key]) {
                  shape[key] = this.shape[key];
              }
          }
          return new ZodObject({
              ...this._def,
              shape: () => shape,
          });
      }
      omit(mask) {
          const shape = {};
          for (const key of util.objectKeys(this.shape)) {
              if (!mask[key]) {
                  shape[key] = this.shape[key];
              }
          }
          return new ZodObject({
              ...this._def,
              shape: () => shape,
          });
      }
      /**
       * @deprecated
       */
      deepPartial() {
          return deepPartialify(this);
      }
      partial(mask) {
          const newShape = {};
          for (const key of util.objectKeys(this.shape)) {
              const fieldSchema = this.shape[key];
              if (mask && !mask[key]) {
                  newShape[key] = fieldSchema;
              }
              else {
                  newShape[key] = fieldSchema.optional();
              }
          }
          return new ZodObject({
              ...this._def,
              shape: () => newShape,
          });
      }
      required(mask) {
          const newShape = {};
          for (const key of util.objectKeys(this.shape)) {
              if (mask && !mask[key]) {
                  newShape[key] = this.shape[key];
              }
              else {
                  const fieldSchema = this.shape[key];
                  let newField = fieldSchema;
                  while (newField instanceof ZodOptional) {
                      newField = newField._def.innerType;
                  }
                  newShape[key] = newField;
              }
          }
          return new ZodObject({
              ...this._def,
              shape: () => newShape,
          });
      }
      keyof() {
          return createZodEnum(util.objectKeys(this.shape));
      }
  }
  ZodObject.create = (shape, params) => {
      return new ZodObject({
          shape: () => shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params),
      });
  };
  ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
          shape: () => shape,
          unknownKeys: "strict",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params),
      });
  };
  ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
          shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params),
      });
  };
  class ZodUnion extends ZodType {
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          const options = this._def.options;
          function handleResults(results) {
              // return first issue-free validation if it exists
              for (const result of results) {
                  if (result.result.status === "valid") {
                      return result.result;
                  }
              }
              for (const result of results) {
                  if (result.result.status === "dirty") {
                      // add issues from dirty option
                      ctx.common.issues.push(...result.ctx.common.issues);
                      return result.result;
                  }
              }
              // return invalid
              const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_union,
                  unionErrors,
              });
              return INVALID;
          }
          if (ctx.common.async) {
              return Promise.all(options.map(async (option) => {
                  const childCtx = {
                      ...ctx,
                      common: {
                          ...ctx.common,
                          issues: [],
                      },
                      parent: null,
                  };
                  return {
                      result: await option._parseAsync({
                          data: ctx.data,
                          path: ctx.path,
                          parent: childCtx,
                      }),
                      ctx: childCtx,
                  };
              })).then(handleResults);
          }
          else {
              let dirty = undefined;
              const issues = [];
              for (const option of options) {
                  const childCtx = {
                      ...ctx,
                      common: {
                          ...ctx.common,
                          issues: [],
                      },
                      parent: null,
                  };
                  const result = option._parseSync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: childCtx,
                  });
                  if (result.status === "valid") {
                      return result;
                  }
                  else if (result.status === "dirty" && !dirty) {
                      dirty = { result, ctx: childCtx };
                  }
                  if (childCtx.common.issues.length) {
                      issues.push(childCtx.common.issues);
                  }
              }
              if (dirty) {
                  ctx.common.issues.push(...dirty.ctx.common.issues);
                  return dirty.result;
              }
              const unionErrors = issues.map((issues) => new ZodError(issues));
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_union,
                  unionErrors,
              });
              return INVALID;
          }
      }
      get options() {
          return this._def.options;
      }
  }
  ZodUnion.create = (types, params) => {
      return new ZodUnion({
          options: types,
          typeName: ZodFirstPartyTypeKind.ZodUnion,
          ...processCreateParams(params),
      });
  };
  function mergeValues(a, b) {
      const aType = getParsedType(a);
      const bType = getParsedType(b);
      if (a === b) {
          return { valid: true, data: a };
      }
      else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
          const bKeys = util.objectKeys(b);
          const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
          const newObj = { ...a, ...b };
          for (const key of sharedKeys) {
              const sharedValue = mergeValues(a[key], b[key]);
              if (!sharedValue.valid) {
                  return { valid: false };
              }
              newObj[key] = sharedValue.data;
          }
          return { valid: true, data: newObj };
      }
      else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
          if (a.length !== b.length) {
              return { valid: false };
          }
          const newArray = [];
          for (let index = 0; index < a.length; index++) {
              const itemA = a[index];
              const itemB = b[index];
              const sharedValue = mergeValues(itemA, itemB);
              if (!sharedValue.valid) {
                  return { valid: false };
              }
              newArray.push(sharedValue.data);
          }
          return { valid: true, data: newArray };
      }
      else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
          return { valid: true, data: a };
      }
      else {
          return { valid: false };
      }
  }
  class ZodIntersection extends ZodType {
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const handleParsed = (parsedLeft, parsedRight) => {
              if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                  return INVALID;
              }
              const merged = mergeValues(parsedLeft.value, parsedRight.value);
              if (!merged.valid) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.invalid_intersection_types,
                  });
                  return INVALID;
              }
              if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                  status.dirty();
              }
              return { status: status.value, value: merged.data };
          };
          if (ctx.common.async) {
              return Promise.all([
                  this._def.left._parseAsync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  }),
                  this._def.right._parseAsync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  }),
              ]).then(([left, right]) => handleParsed(left, right));
          }
          else {
              return handleParsed(this._def.left._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx,
              }), this._def.right._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx,
              }));
          }
      }
  }
  ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
          left: left,
          right: right,
          typeName: ZodFirstPartyTypeKind.ZodIntersection,
          ...processCreateParams(params),
      });
  };
  // type ZodTupleItems = [ZodTypeAny, ...ZodTypeAny[]];
  class ZodTuple extends ZodType {
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.array) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.array,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          if (ctx.data.length < this._def.items.length) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: this._def.items.length,
                  inclusive: true,
                  exact: false,
                  type: "array",
              });
              return INVALID;
          }
          const rest = this._def.rest;
          if (!rest && ctx.data.length > this._def.items.length) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: this._def.items.length,
                  inclusive: true,
                  exact: false,
                  type: "array",
              });
              status.dirty();
          }
          const items = [...ctx.data]
              .map((item, itemIndex) => {
              const schema = this._def.items[itemIndex] || this._def.rest;
              if (!schema)
                  return null;
              return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
          })
              .filter((x) => !!x); // filter nulls
          if (ctx.common.async) {
              return Promise.all(items).then((results) => {
                  return ParseStatus.mergeArray(status, results);
              });
          }
          else {
              return ParseStatus.mergeArray(status, items);
          }
      }
      get items() {
          return this._def.items;
      }
      rest(rest) {
          return new ZodTuple({
              ...this._def,
              rest,
          });
      }
  }
  ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
          throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
          items: schemas,
          typeName: ZodFirstPartyTypeKind.ZodTuple,
          rest: null,
          ...processCreateParams(params),
      });
  };
  class ZodMap extends ZodType {
      get keySchema() {
          return this._def.keyType;
      }
      get valueSchema() {
          return this._def.valueType;
      }
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.map) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.map,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const keyType = this._def.keyType;
          const valueType = this._def.valueType;
          const pairs = [...ctx.data.entries()].map(([key, value], index) => {
              return {
                  key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                  value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
              };
          });
          if (ctx.common.async) {
              const finalMap = new Map();
              return Promise.resolve().then(async () => {
                  for (const pair of pairs) {
                      const key = await pair.key;
                      const value = await pair.value;
                      if (key.status === "aborted" || value.status === "aborted") {
                          return INVALID;
                      }
                      if (key.status === "dirty" || value.status === "dirty") {
                          status.dirty();
                      }
                      finalMap.set(key.value, value.value);
                  }
                  return { status: status.value, value: finalMap };
              });
          }
          else {
              const finalMap = new Map();
              for (const pair of pairs) {
                  const key = pair.key;
                  const value = pair.value;
                  if (key.status === "aborted" || value.status === "aborted") {
                      return INVALID;
                  }
                  if (key.status === "dirty" || value.status === "dirty") {
                      status.dirty();
                  }
                  finalMap.set(key.value, value.value);
              }
              return { status: status.value, value: finalMap };
          }
      }
  }
  ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
          valueType,
          keyType,
          typeName: ZodFirstPartyTypeKind.ZodMap,
          ...processCreateParams(params),
      });
  };
  class ZodSet extends ZodType {
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.set) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.set,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const def = this._def;
          if (def.minSize !== null) {
              if (ctx.data.size < def.minSize.value) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.too_small,
                      minimum: def.minSize.value,
                      type: "set",
                      inclusive: true,
                      exact: false,
                      message: def.minSize.message,
                  });
                  status.dirty();
              }
          }
          if (def.maxSize !== null) {
              if (ctx.data.size > def.maxSize.value) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.too_big,
                      maximum: def.maxSize.value,
                      type: "set",
                      inclusive: true,
                      exact: false,
                      message: def.maxSize.message,
                  });
                  status.dirty();
              }
          }
          const valueType = this._def.valueType;
          function finalizeSet(elements) {
              const parsedSet = new Set();
              for (const element of elements) {
                  if (element.status === "aborted")
                      return INVALID;
                  if (element.status === "dirty")
                      status.dirty();
                  parsedSet.add(element.value);
              }
              return { status: status.value, value: parsedSet };
          }
          const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
          if (ctx.common.async) {
              return Promise.all(elements).then((elements) => finalizeSet(elements));
          }
          else {
              return finalizeSet(elements);
          }
      }
      min(minSize, message) {
          return new ZodSet({
              ...this._def,
              minSize: { value: minSize, message: errorUtil.toString(message) },
          });
      }
      max(maxSize, message) {
          return new ZodSet({
              ...this._def,
              maxSize: { value: maxSize, message: errorUtil.toString(message) },
          });
      }
      size(size, message) {
          return this.min(size, message).max(size, message);
      }
      nonempty(message) {
          return this.min(1, message);
      }
  }
  ZodSet.create = (valueType, params) => {
      return new ZodSet({
          valueType,
          minSize: null,
          maxSize: null,
          typeName: ZodFirstPartyTypeKind.ZodSet,
          ...processCreateParams(params),
      });
  };
  class ZodLazy extends ZodType {
      get schema() {
          return this._def.getter();
      }
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          const lazySchema = this._def.getter();
          return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
  }
  ZodLazy.create = (getter, params) => {
      return new ZodLazy({
          getter: getter,
          typeName: ZodFirstPartyTypeKind.ZodLazy,
          ...processCreateParams(params),
      });
  };
  class ZodLiteral extends ZodType {
      _parse(input) {
          if (input.data !== this._def.value) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  received: ctx.data,
                  code: ZodIssueCode.invalid_literal,
                  expected: this._def.value,
              });
              return INVALID;
          }
          return { status: "valid", value: input.data };
      }
      get value() {
          return this._def.value;
      }
  }
  ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
          value: value,
          typeName: ZodFirstPartyTypeKind.ZodLiteral,
          ...processCreateParams(params),
      });
  };
  function createZodEnum(values, params) {
      return new ZodEnum({
          values,
          typeName: ZodFirstPartyTypeKind.ZodEnum,
          ...processCreateParams(params),
      });
  }
  class ZodEnum extends ZodType {
      constructor() {
          super(...arguments);
          _ZodEnum_cache.set(this, void 0);
      }
      _parse(input) {
          if (typeof input.data !== "string") {
              const ctx = this._getOrReturnCtx(input);
              const expectedValues = this._def.values;
              addIssueToContext(ctx, {
                  expected: util.joinValues(expectedValues),
                  received: ctx.parsedType,
                  code: ZodIssueCode.invalid_type,
              });
              return INVALID;
          }
          if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
              __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
          }
          if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
              const ctx = this._getOrReturnCtx(input);
              const expectedValues = this._def.values;
              addIssueToContext(ctx, {
                  received: ctx.data,
                  code: ZodIssueCode.invalid_enum_value,
                  options: expectedValues,
              });
              return INVALID;
          }
          return OK(input.data);
      }
      get options() {
          return this._def.values;
      }
      get enum() {
          const enumValues = {};
          for (const val of this._def.values) {
              enumValues[val] = val;
          }
          return enumValues;
      }
      get Values() {
          const enumValues = {};
          for (const val of this._def.values) {
              enumValues[val] = val;
          }
          return enumValues;
      }
      get Enum() {
          const enumValues = {};
          for (const val of this._def.values) {
              enumValues[val] = val;
          }
          return enumValues;
      }
      extract(values, newDef = this._def) {
          return ZodEnum.create(values, {
              ...this._def,
              ...newDef,
          });
      }
      exclude(values, newDef = this._def) {
          return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
              ...this._def,
              ...newDef,
          });
      }
  }
  _ZodEnum_cache = new WeakMap();
  ZodEnum.create = createZodEnum;
  class ZodNativeEnum extends ZodType {
      constructor() {
          super(...arguments);
          _ZodNativeEnum_cache.set(this, void 0);
      }
      _parse(input) {
          const nativeEnumValues = util.getValidEnumValues(this._def.values);
          const ctx = this._getOrReturnCtx(input);
          if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
              const expectedValues = util.objectValues(nativeEnumValues);
              addIssueToContext(ctx, {
                  expected: util.joinValues(expectedValues),
                  received: ctx.parsedType,
                  code: ZodIssueCode.invalid_type,
              });
              return INVALID;
          }
          if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
              __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
          }
          if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
              const expectedValues = util.objectValues(nativeEnumValues);
              addIssueToContext(ctx, {
                  received: ctx.data,
                  code: ZodIssueCode.invalid_enum_value,
                  options: expectedValues,
              });
              return INVALID;
          }
          return OK(input.data);
      }
      get enum() {
          return this._def.values;
      }
  }
  _ZodNativeEnum_cache = new WeakMap();
  ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
          values: values,
          typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
          ...processCreateParams(params),
      });
  };
  class ZodPromise extends ZodType {
      unwrap() {
          return this._def.type;
      }
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.promise,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
          return OK(promisified.then((data) => {
              return this._def.type.parseAsync(data, {
                  path: ctx.path,
                  errorMap: ctx.common.contextualErrorMap,
              });
          }));
      }
  }
  ZodPromise.create = (schema, params) => {
      return new ZodPromise({
          type: schema,
          typeName: ZodFirstPartyTypeKind.ZodPromise,
          ...processCreateParams(params),
      });
  };
  class ZodEffects extends ZodType {
      innerType() {
          return this._def.schema;
      }
      sourceType() {
          return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
              ? this._def.schema.sourceType()
              : this._def.schema;
      }
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const effect = this._def.effect || null;
          const checkCtx = {
              addIssue: (arg) => {
                  addIssueToContext(ctx, arg);
                  if (arg.fatal) {
                      status.abort();
                  }
                  else {
                      status.dirty();
                  }
              },
              get path() {
                  return ctx.path;
              },
          };
          checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
          if (effect.type === "preprocess") {
              const processed = effect.transform(ctx.data, checkCtx);
              if (ctx.common.async) {
                  return Promise.resolve(processed).then(async (processed) => {
                      if (status.value === "aborted")
                          return INVALID;
                      const result = await this._def.schema._parseAsync({
                          data: processed,
                          path: ctx.path,
                          parent: ctx,
                      });
                      if (result.status === "aborted")
                          return INVALID;
                      if (result.status === "dirty")
                          return DIRTY(result.value);
                      if (status.value === "dirty")
                          return DIRTY(result.value);
                      return result;
                  });
              }
              else {
                  if (status.value === "aborted")
                      return INVALID;
                  const result = this._def.schema._parseSync({
                      data: processed,
                      path: ctx.path,
                      parent: ctx,
                  });
                  if (result.status === "aborted")
                      return INVALID;
                  if (result.status === "dirty")
                      return DIRTY(result.value);
                  if (status.value === "dirty")
                      return DIRTY(result.value);
                  return result;
              }
          }
          if (effect.type === "refinement") {
              const executeRefinement = (acc) => {
                  const result = effect.refinement(acc, checkCtx);
                  if (ctx.common.async) {
                      return Promise.resolve(result);
                  }
                  if (result instanceof Promise) {
                      throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                  }
                  return acc;
              };
              if (ctx.common.async === false) {
                  const inner = this._def.schema._parseSync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  });
                  if (inner.status === "aborted")
                      return INVALID;
                  if (inner.status === "dirty")
                      status.dirty();
                  // return value is ignored
                  executeRefinement(inner.value);
                  return { status: status.value, value: inner.value };
              }
              else {
                  return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
                      if (inner.status === "aborted")
                          return INVALID;
                      if (inner.status === "dirty")
                          status.dirty();
                      return executeRefinement(inner.value).then(() => {
                          return { status: status.value, value: inner.value };
                      });
                  });
              }
          }
          if (effect.type === "transform") {
              if (ctx.common.async === false) {
                  const base = this._def.schema._parseSync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  });
                  if (!isValid(base))
                      return base;
                  const result = effect.transform(base.value, checkCtx);
                  if (result instanceof Promise) {
                      throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                  }
                  return { status: status.value, value: result };
              }
              else {
                  return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
                      if (!isValid(base))
                          return base;
                      return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                          status: status.value,
                          value: result,
                      }));
                  });
              }
          }
          util.assertNever(effect);
      }
  }
  ZodEffects.create = (schema, effect, params) => {
      return new ZodEffects({
          schema,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect,
          ...processCreateParams(params),
      });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects({
          schema,
          effect: { type: "preprocess", transform: preprocess },
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          ...processCreateParams(params),
      });
  };
  class ZodOptional extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === ZodParsedType.undefined) {
              return OK(undefined);
          }
          return this._def.innerType._parse(input);
      }
      unwrap() {
          return this._def.innerType;
      }
  }
  ZodOptional.create = (type, params) => {
      return new ZodOptional({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodOptional,
          ...processCreateParams(params),
      });
  };
  class ZodNullable extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === ZodParsedType.null) {
              return OK(null);
          }
          return this._def.innerType._parse(input);
      }
      unwrap() {
          return this._def.innerType;
      }
  }
  ZodNullable.create = (type, params) => {
      return new ZodNullable({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodNullable,
          ...processCreateParams(params),
      });
  };
  class ZodDefault extends ZodType {
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          let data = ctx.data;
          if (ctx.parsedType === ZodParsedType.undefined) {
              data = this._def.defaultValue();
          }
          return this._def.innerType._parse({
              data,
              path: ctx.path,
              parent: ctx,
          });
      }
      removeDefault() {
          return this._def.innerType;
      }
  }
  ZodDefault.create = (type, params) => {
      return new ZodDefault({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodDefault,
          defaultValue: typeof params.default === "function" ? params.default : () => params.default,
          ...processCreateParams(params),
      });
  };
  class ZodCatch extends ZodType {
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          // newCtx is used to not collect issues from inner types in ctx
          const newCtx = {
              ...ctx,
              common: {
                  ...ctx.common,
                  issues: [],
              },
          };
          const result = this._def.innerType._parse({
              data: newCtx.data,
              path: newCtx.path,
              parent: {
                  ...newCtx,
              },
          });
          if (isAsync(result)) {
              return result.then((result) => {
                  return {
                      status: "valid",
                      value: result.status === "valid"
                          ? result.value
                          : this._def.catchValue({
                              get error() {
                                  return new ZodError(newCtx.common.issues);
                              },
                              input: newCtx.data,
                          }),
                  };
              });
          }
          else {
              return {
                  status: "valid",
                  value: result.status === "valid"
                      ? result.value
                      : this._def.catchValue({
                          get error() {
                              return new ZodError(newCtx.common.issues);
                          },
                          input: newCtx.data,
                      }),
              };
          }
      }
      removeCatch() {
          return this._def.innerType;
      }
  }
  ZodCatch.create = (type, params) => {
      return new ZodCatch({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodCatch,
          catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
          ...processCreateParams(params),
      });
  };
  class ZodNaN extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.nan) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.nan,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return { status: "valid", value: input.data };
      }
  }
  ZodNaN.create = (params) => {
      return new ZodNaN({
          typeName: ZodFirstPartyTypeKind.ZodNaN,
          ...processCreateParams(params),
      });
  };
  class ZodBranded extends ZodType {
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          const data = ctx.data;
          return this._def.type._parse({
              data,
              path: ctx.path,
              parent: ctx,
          });
      }
      unwrap() {
          return this._def.type;
      }
  }
  class ZodPipeline extends ZodType {
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.common.async) {
              const handleAsync = async () => {
                  const inResult = await this._def.in._parseAsync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  });
                  if (inResult.status === "aborted")
                      return INVALID;
                  if (inResult.status === "dirty") {
                      status.dirty();
                      return DIRTY(inResult.value);
                  }
                  else {
                      return this._def.out._parseAsync({
                          data: inResult.value,
                          path: ctx.path,
                          parent: ctx,
                      });
                  }
              };
              return handleAsync();
          }
          else {
              const inResult = this._def.in._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx,
              });
              if (inResult.status === "aborted")
                  return INVALID;
              if (inResult.status === "dirty") {
                  status.dirty();
                  return {
                      status: "dirty",
                      value: inResult.value,
                  };
              }
              else {
                  return this._def.out._parseSync({
                      data: inResult.value,
                      path: ctx.path,
                      parent: ctx,
                  });
              }
          }
      }
      static create(a, b) {
          return new ZodPipeline({
              in: a,
              out: b,
              typeName: ZodFirstPartyTypeKind.ZodPipeline,
          });
      }
  }
  class ZodReadonly extends ZodType {
      _parse(input) {
          const result = this._def.innerType._parse(input);
          const freeze = (data) => {
              if (isValid(data)) {
                  data.value = Object.freeze(data.value);
              }
              return data;
          };
          return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
          return this._def.innerType;
      }
  }
  ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodReadonly,
          ...processCreateParams(params),
      });
  };
  var ZodFirstPartyTypeKind;
  (function (ZodFirstPartyTypeKind) {
      ZodFirstPartyTypeKind["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  const stringType = ZodString.create;
  ZodNever.create;
  ZodArray.create;
  const objectType = ZodObject.create;
  ZodUnion.create;
  ZodIntersection.create;
  ZodTuple.create;
  ZodEnum.create;
  ZodPromise.create;
  ZodOptional.create;
  ZodNullable.create;

  var _tmpl$$1 = /* @__PURE__ */ template(`<form><div class=ext-flex><div><img alt=cabal></div><div><img alt=cabal></div></div><div class="ext-flex ext-justify-center"><div class=ext-text-xl>To start enter an API key: </div></div><div class="ext-flex ext-justify-center ext-mt-4 ext-w-full"></div><div class="ext-flex ext-justify-center ext-mt-4 ext-w-full">`);
  const schema = objectType({
    apiKey: stringType().min(1, "required")
  });
  const cabalImg = chrome.runtime.getURL("assets2/cabal.svg");
  const cabalTextImg = chrome.runtime.getURL("assets2/cabal_text.svg");
  const ApiKeyWidget = ({
    onApiKey
  }) => {
    const [apiKey, setApiKey] = createSignal("");
    const [error, setError] = createSignal("");
    const handleApiKeyWidgetSubmit = ({
      apiKey: apiKey2
    }) => {
      onApiKey(apiKey2);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const result = schema.safeParse({
        apiKey: apiKey()
      });
      if (!result.success) {
        setError(result.error.errors[0].message);
        return;
      }
      setError("");
      handleApiKeyWidgetSubmit({
        apiKey: apiKey()
      });
    };
    const handleOnInput = (e) => setApiKey(e.currentTarget.value);
    return (() => {
      var _el$ = _tmpl$$1(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$3.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$2.nextSibling, _el$8 = _el$7.nextSibling, _el$9 = _el$8.nextSibling;
      _el$.addEventListener("submit", handleSubmit);
      setAttribute(_el$4, "src", cabalImg);
      setAttribute(_el$6, "src", cabalTextImg);
      insert(_el$8, createComponent(Input, {
        cn: "focus:ext-bg-black focus:ext-text-green-400",
        type: "text",
        name: "name",
        placeholder: "key 427P1H3...",
        get value() {
          return apiKey();
        },
        onInput: handleOnInput
      }));
      insert(_el$9, createComponent(Button, {
        type: "submit",
        get disabled() {
          return !apiKey();
        },
        children: "Connect to Cabal"
      }));
      return _el$;
    })();
  };

  var _tmpl$ = /* @__PURE__ */ template(`<div class="ext-flex ext-justify-center ext-items-center"><div class=ext-text-green-300>loading...`);
  const Content = () => {
    const [allSourcesReady, setAllSourcesReady] = createSignal(false);
    const [shouldPromptApiKey, setShouldPromptApiKey] = createSignal(false);
    const {
      sendApiKey
    } = useStartCabalService();
    createEffect(() => {
      setShouldPromptApiKey(contentAppStore.shouldSetApiKey);
    });
    createEffect(() => {
      console.log("### ###", tradeWidgetState.tokenStatus, tradeWidgetState.tradeStats);
      const value = !!(tradeWidgetState.tokenStatus && tradeWidgetState.tradeStats && contentAppStore.isReady);
      setAllSourcesReady(value);
    });
    const handleApiKey = (apiKey) => {
      sendApiKey(apiKey);
    };
    return createComponent(DragContainer, {
      get children() {
        return createComponent(ContentContainer, {
          get children() {
            return [createComponent(Show, {
              get when() {
                return shouldPromptApiKey();
              },
              get children() {
                return createComponent(ApiKeyWidget, {
                  onApiKey: handleApiKey
                });
              }
            }), createComponent(Show, {
              get when() {
                return allSourcesReady();
              },
              get children() {
                return createComponent(TradeWidget, {});
              }
            }), createComponent(Show, {
              get when() {
                return memo(() => !!!shouldPromptApiKey())() && !allSourcesReady();
              },
              get children() {
                return _tmpl$();
              }
            })];
          }
        });
      }
    });
  };

  var SiteWhitelist = /* @__PURE__ */ ((SiteWhitelist2) => {
    SiteWhitelist2["gmgnai"] = "https://gmgn.ai/sol/token/";
    return SiteWhitelist2;
  })(SiteWhitelist || {});

  const getTokenGMGNAI = (url) => {
    const result = url.split(SiteWhitelist.gmgnai);
    return result[1];
  };

  if (getTokenGMGNAI(location.href)) {
    const root = document.createElement("div");
    root.id = "cabal-extension-root";
    document.body.appendChild(root);
    render(() => createComponent(Content, {}), root);
  } else {
    console.log("not supported");
  }

})();
//# sourceMappingURL=content.js.map
