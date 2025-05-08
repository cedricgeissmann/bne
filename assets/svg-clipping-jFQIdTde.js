import{j as e}from"./index-B2qCcbtg.js";import{C as t}from"./Chapter-Bxzgta08.js";import{F as r}from"./FiddleSVG-CbJJ5PYM.js";import{E as s}from"./Example-C700Bojd.js";import"./index-CJwiPXpQ.js";function d(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i.components};return e.jsxs(t,{children:[e.jsx(n.h2,{children:"Clipping"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipping"}),` ist eine Methode wo man nur einen Teil des Bildes darstellt, und
den Rest versteckt. Die Methode wird sehr oft bei Profilbildern verwendet, wo
das Bild mit einem Kreis überlagert wird, und aber nur der Teil angezeigt wird
der innerhalb des Kreises liegt. Man sagt dazu manchmal auch `,e.jsx(n.strong,{children:"masking"}),`. Das
wird aber mehr bei Rastergrafiken verwendet, weil die Maske dort sagt, welche
Pixel gezeichnet werden und welche nicht. Bei `,e.jsx(n.code,{children:"SVG"}),`, also ebi Vektorgrafiken,
wird geometrisch bestimmt was gezeichnet wird, deshalb spricht man dort von
`,e.jsx(n.strong,{children:"clipping"}),"."]}),e.jsxs(n.p,{children:["Aber wie funktioniert ",e.jsx(n.strong,{children:"clipping"}),` überhaupt. Das ist ganz einfach. Wir können
ein Element vorgeben, das wir dann als `,e.jsx(n.code,{children:"clip-path"}),` in einem anderen Element
verwenden.`]})]}),e.jsxs(s,{title:"Clipping mit einem Kreis",children:[e.jsxs(n.p,{children:[`Wir definieren unsere Zeichenfläche als einen Kreis. Das können wir mit dem
`,e.jsx(n.code,{children:"clipPath"}),`-Element erreichen. Dann erstellen wir ein Rechteck innerhalb von
diesem Kreis, und geben diesem Kreis das `,e.jsx(n.code,{children:"clip-path"}),`-Attribut. DAfür müssen wir
die ID von dem `,e.jsx(n.code,{children:"clipPath"}),"-Element verwenden."]}),e.jsx(r,{svg:`<svg height="300" width="300">
  <clipPath id="clip-circle">
    <circle cx="150" cy="150" r="145" />
  </clipPath>
  <rect x="50" y="100" width="300" height="200"
  clip-path="url(#clip-circle)">
</svg>`}),e.jsx(n.h3,{children:"Aufgabe: Weitere Elemente hinzufügen"}),e.jsxs(n.p,{children:[`Fügen Sie mindestens 2 weitere Elemente hinzu. Eines davon soll auch von dem
`,e.jsx(n.code,{children:"clipPath"}),`-Element eingeschrängt werden, das andere soll frei gezeichnet werden
können.`]})]}),e.jsx(n.h2,{children:"Elemente vordefinieren"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:["Wie Sie beim ",e.jsx(n.strong,{children:"clipping"}),` bereits gesehen haben, gibt es Elemente die wir
verwenden möchten, aber nicht unbedingt zeichnen. Diese Technik kann auch
verwendet werden, um Elemente zu definieren, und diese dann in geänderter Form
zeichnen lassen. Zum Beispiel wäre es praktisch ein Dreieck zu definieren, das
wir in anderen Farben, Grössen und Rotationen wiederverwenden können.`]}),e.jsxs(n.p,{children:["Dafür brauchen wir 2 weitere ",e.jsx(n.code,{children:"SVG"}),"-Elemente. Das ",e.jsx(n.code,{children:"defs"}),`-Element um die Elemente
zu definieren, aber nicht zu zeichenen, und das `,e.jsx(n.code,{children:"use"}),`-Element, mit dem wir ein
definiertes Element angeben können, dass dann gezeichnet wird.`]})]}),e.jsxs(s,{title:"Dreiecke vordefinieren",children:[e.jsxs(n.p,{children:["Hier werden wir ein Dreieck mit einem ",e.jsx(n.code,{children:"defs"}),`-Element beschreiben, und dieses
dann in verschiedenen Formen zeichnen.`]}),e.jsx(r,{svg:`<svg height="300" width="300">
  <defs>
    <path id="triangle" fill="transparent"
    d="M 0 0 L 100 0 L 50 100 Z" />
  </defs>
  <use href="#triangle" stroke="red" />
  <use href="#triangle" x="100" y="100" stroke="green" />
  <use href="#triangle" transform="translate(100, 100) rotate(180)" stroke="blue" />
</svg>`}),e.jsx(n.h3,{children:"Aufgabe: Mehr Dreiecke"}),e.jsxs(n.p,{children:["Erstellen Sie mindestens 4 weitere Dreiecke, und testen Sie was ",e.jsx(n.code,{children:"x"})," und ",e.jsx(n.code,{children:"y"}),`
machen, und was `,e.jsx(n.code,{children:"transform"})," macht."]})]})]})}function m(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{m as default};
