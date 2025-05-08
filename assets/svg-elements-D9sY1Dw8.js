import{j as e}from"./index-B2qCcbtg.js";import{C as t}from"./Chapter-Bxzgta08.js";import{F as s}from"./FiddleSVG-CbJJ5PYM.js";import{E as r}from"./Example-C700Bojd.js";import"./index-CJwiPXpQ.js";function d(i){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(t,{children:[e.jsxs(n.h2,{children:["Weitere ",e.jsx(n.code,{children:"SVG"}),"-Elemente"]}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SVG"}),` bietet natürlich noch weitere Elemente wie nur den Kreis. Elemente die man
häufig brauchen kann, sind `,e.jsx(n.code,{children:"line"}),", ",e.jsx(n.code,{children:"ellipse"}),", ",e.jsx(n.code,{children:"rect"}),", ",e.jsx(n.code,{children:"polygon"})," und ",e.jsx(n.code,{children:"path"}),`. Sie
können auf `,e.jsx(n.a,{href:"https://www.w3schools.com/graphics/svg_intro.asp",children:"w3schools"}),` und
auf`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element",children:"mdn web docs"}),`
jeweils mehr zu den `,e.jsx(n.code,{children:"SVG"}),"-Elementen nachlesen. Wir schauen uns hier nur ",e.jsx(n.code,{children:"rect"}),`
und `,e.jsx(n.code,{children:"path"})," an."]}),e.jsxs(r,{title:"Rechteck",children:[e.jsxs(n.p,{children:["Das ",e.jsx(n.code,{children:"<rect>"}),`-Element ist sehr selbsterklärend und kann am besten in einem
Beispiel gezeigt werden. Die ganzen generellen `,e.jsx(n.strong,{children:"Attribute"}),`, die Sie schon vom
Kreis kennen, gelten natürlich noch immer (`,e.jsx(n.code,{children:"fill"}),", ",e.jsx(n.code,{children:"stroke"})," und ",e.jsx(n.code,{children:"stroke-width"}),`).
Bei einem Rechteck können Sie jedoch nicht den Mittelpunkt angeben wie das beim
Kreis der Fall ist, sondern Sie müssen die Koordinaten vom linken oberen
Eckpunkt angeben, sowie die Höhe und die Breite.`]}),e.jsx(s,{svg:`<svg height="300" width="300">
  <rect x="50" y="20" height="50" width="100" />
</svg>`}),e.jsx(n.h3,{children:"Aufgabe: Weiteres Rechteck hinzufügen"}),e.jsx(n.p,{children:`Fügen Sie ein weiteres Rechteck hinzu, das nur einen blauen Rand hat und
quadratisch ist. Der obere linke Eckpunkt soll auf dem unteren rechten Eckpunkt
des anderen Rechtecks liegen.`})]}),e.jsxs(n.h2,{children:["Das ",e.jsx(n.code,{children:"path"}),"-Element"]}),e.jsx("section",{children:e.jsxs(n.p,{children:["Das ",e.jsx(n.code,{children:"path"}),`-Element ist ein sehr flexibles Element, mit dem Sie fast alles
zeichnen können. Leider ist es darum auch ein wenig komplexer wie die anderen
Elemente. Die Komplexität kommt davon dass das `,e.jsx(n.code,{children:"path"}),`-Element eine eigene
`,e.jsx(n.em,{children:"Sprache"}),` verwendet, um den Pfad zu beschreiben. Diese Sprache ist sehr kurz
gehalten und nicht immer sehr leserlich, sie ist jedoch nicht schwierig. Am
besten ist es das ganze an einem Beispiel zu erklären.`]})}),e.jsxs(r,{title:"Aufgabe: Dreieck zeichnen mit einem Pfad",children:[e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"SVG"}),` gibt es das Dreieck nicht als eigenes Element. Denn im Gegensatz zum
Kreis und zum Rechteck, kann das Dreieck nicht so einfach generalisiert werden.
Wir können aber Pfade verwenden um ein Dreieck zu zeichnen, da geben wir einfach
die Punkte an die wir zeichnen möchten.`]}),e.jsx(s,{svg:`<svg height="300" width="300">
  <path fill="transparent" stroke="green" stroke-width="5" d="M 100 100 L 200 100 L 150 200 Z"/>
</svg>`})]}),e.jsx(n.h2,{children:"Pfade lesen"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:["Wie ist das ganze zu lesen? Das ",e.jsx(n.strong,{children:"Attribut"})," ",e.jsx(n.code,{children:"d"}),` beinhaltet die Daten des Pfads.
In der einfachsten Form ist es immer als Triple zu lesen `,e.jsx(n.code,{children:"(aktion x y)"}),`. wir
können also den Pfad von oben so aufteilen:`]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"M 100 100"})," - Bewege den Stift zum Punkt ",e.jsx(n.code,{children:"100, 100"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"L 200 100"})," - Zeichne vom aktuellen Punkt zum Punkt ",e.jsx(n.code,{children:"200, 100"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"L 150 200"})," - Zeichne vom aktuellen Punkt zum Punkt ",e.jsx(n.code,{children:"150, 200"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Z"})," - Schliesse den Pfad, indem du zurück zum Startpunkt zeichnest."]}),`
`]})]}),e.jsxs(r,{title:"Aufgabe: Stern zeichnen",children:[e.jsx(n.p,{children:`Verändern Sie den folgenden Pfad so, das es einen Stern gibt. Die Anzahl der
Spitzen dürfen Sie selber bestimmen, es müssen aber mindestens 5 sein. Der Stern
muss nicht ganz regelmässig sein.`}),e.jsx(s,{svg:`<svg height="300" width="300">
  <path fill="transparent" stroke="blue" stroke-width="5" d="M 100 200 L 200 200 L 150 100 Z"/>
</svg>`}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Bonus:"}),` Stellen Sie den Stern in zwei verschiedenen Farben dar. Am besten
verwenden Sie 2 Pfade dafür.`]})]})]})}function m(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{m as default};
