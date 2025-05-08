import{j as e}from"./index-B2qCcbtg.js";import{C as l}from"./Chapter-Bxzgta08.js";import{F as r}from"./FiddleSVG-CbJJ5PYM.js";import{E as t}from"./Example-C700Bojd.js";import"./index-CJwiPXpQ.js";function s(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i.components};return e.jsxs(l,{children:[e.jsx(n.h2,{children:"Animationen"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[`Im modernen Web ist fast alles in irgend einer Art animiert, und das möchten wir
hier auch erreichen. Animationen mit `,e.jsx(n.code,{children:"SVG"}),` können sehr komplex werden, man kann
damit aber auch sehr tolle Dinge darstellen. Wir beschäftigen uns leider nur mit
den Basics. DAmit können aber auch bereits sehr komplexe Animationen erstellt
werden.`]}),e.jsxs(n.p,{children:["Generell gibt es 2 Arten von Animationen die Sie in ",e.jsx(n.code,{children:"SVG"})," unterscheiden müssen."]}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Verformung"}),`
`,e.jsx(n.li,{children:"Bewegung"}),`
`]}),e.jsx(n.p,{children:"Mit diesen beiden Typen können Sie bereits sehr komplexe Animationen erstellen."})]}),e.jsxs(t,{title:"Ellipse zerquetschen",children:[e.jsx(n.p,{children:`Wir können eine Ellipse definieren, und den Wert der vertikalen Achse
kontinuierlich verändern, damit erreichen wir den Effekt von einer Quetschung
eines Kreises.`}),e.jsx(r,{svg:`<svg height="300" width="300">
  <ellipse cx="150" cy="150" rx="50" ry="50" fill="green">
    <animate attributeName="ry" values="50;25;50" dur="1s" repeatCount="indefinite"/>
  </ellipse>
</svg>`}),e.jsx(n.h3,{children:"Aufgabe: Emoji"}),e.jsx(n.p,{children:"Erstellen Sie ein Emoji, das Sie mit einem Auge anblinzelt."})]}),e.jsx(n.h2,{children:"Elemente bewegen"}),e.jsx("section",{children:e.jsx(n.p,{children:`Die zweite Art der Animation ist ein Element zu bewegen. Dafür definiert man
oftmals einen Pfad, und das Objekt bewegt sich dann entlang von dem Pfad.`})}),e.jsxs(t,{title:"Im Kreis drehen",children:[e.jsx(n.p,{children:"Wir lassen einen Kreis einer Linie entlang gehen."}),e.jsx(r,{svg:`<svg height="300" width="300" version="1.1">
  <path id="circle-motion" d="M 50 150 L 250 150 Z" stroke="black" />
  <circle r="40" fill="red">
    <animateMotion dur="5s" repeatCount="indefinite">
      <mpath xlink:href="#circle-motion"/>
    </animateMotion>
  </circle>
</svg>`}),e.jsx(n.h3,{children:"Aufgabe: Komplexere Pfade"}),e.jsx(n.p,{children:`Erstellen Sie weitere Objekte die sich an anderen Pfaden entlang bewegen. Diese
Pfade sollen komplexer sein wie die gerade Linie.`})]})]})}function m(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
