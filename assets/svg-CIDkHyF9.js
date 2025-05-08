import{j as e}from"./index-B2qCcbtg.js";import{C as d}from"./Chapter-Bxzgta08.js";import{F as r}from"./FiddleSVG-CbJJ5PYM.js";import{E as s}from"./Example-C700Bojd.js";import"./index-CJwiPXpQ.js";function t(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...i.components};return e.jsxs(d,{children:[e.jsx(n.h2,{children:"Vektorgrafiken mit SVG"}),e.jsx(n.p,{children:`In der Informatik unterscheidet man zwischen 2 arten von Bildern. Zum einen gibt
es Vektorgrafiken, bei denen man die Abbildung mithilfe von Mathematik
beschriebt. Die andere Art von Bildern nennt man Rastergrafiken, dort wird das
Bild Pixel für Pixel beschrieben. Wir beschäftigen uns mit Vektorgrafiken, da
wir so komplexere Bilder einfach beschreiben und zusammensetzen können.`}),e.jsxs(s,{title:"Kreis",children:[e.jsx(n.p,{children:"Wir können zum Beispiel ein Bild mit einem Kreis wie folgt beschreiben:"}),e.jsx(r,{svg:`<svg height="300" width="300">
  <circle cx="150" cy="150" r="50" />
</svg>`}),e.jsxs(n.p,{children:[`Zunächst müssen wir das Koordinatensystem des Bildes beschreiben. Hierfür
erstellen wir ein `,e.jsx(n.code,{children:"SVG"}),"-Element und legen die Höhe und Breite fest."]}),e.jsxs(n.p,{children:[`Das Bild hat eine Höhe und eine Breite von 300 Einheiten. Der Kreis hat den
Mittelpunkt genau in der Mitte des Bildes, mit `,e.jsx(n.code,{children:'cx="150"'})," und ",e.jsx(n.code,{children:'cy="150"'}),`. Der
Radius wird mit dem `,e.jsx(n.strong,{children:"Attribut"})," ",e.jsx(n.code,{children:"r"})," angegeben."]}),e.jsx(n.h3,{children:"Aufgabe: Kreis verschieben"}),e.jsx(n.p,{children:`Verändern Sie den Mittelpunkt und den Radius des Kreises so, das nur der obere
linke Teil des Viertelkreises zu sehen ist.`})]}),e.jsx(n.h2,{children:"Mehrere Elemente in einem SVG"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[`Im oberen Beispiel haben wir nur einen Kreis gezeichnet. Wir können aber auch
mehrere Elemente in ein Bild nehmen. Dazu können wir ganz einfach wie in `,e.jsx(n.code,{children:"HTML"}),`
mehrere Elemente in das gleiche `,e.jsx(n.code,{children:"SVG"}),`-Element schreiben. Damit wir die Elemente
auch gut unterscheiden können, möchten wir verschiedene Farben dafür verwenden.`]}),e.jsxs(n.p,{children:["In SVG werden alle Eigenschaften von einem Objekt als ",e.jsx(n.strong,{children:"Attribute"}),` angegeben.
Wenn wir eine Füllfarbe festlegen möchten, können wir das mit dem `,e.jsx(n.strong,{children:"Attribut"}),`
`,e.jsx(n.code,{children:"fill"})," machen."]})]}),e.jsxs(s,{title:"Aufgabe: Olympische Ringe",children:[e.jsxs(n.p,{children:["Es gibt neben ",e.jsx(n.code,{children:"fill"})," auch ",e.jsx(n.code,{children:"stroke"})," und ",e.jsx(n.code,{children:"stroke-width"}),`. Versuchen Sie damit die
olymischen Ringe zu zeichnen.`]}),e.jsx(r,{svg:`<svg height="300" width="300">
  <circle cx="100" cy="150" r="40" fill="blue"/>
  <circle cx="200" cy="150" r="40" fill="green"/>
</svg>`}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tipp"}),`: Wenn Sie möchten das ein Ring nicht ausgefüllt wird, dann können Sie
`,e.jsx(n.code,{children:'fill="transparent"'})," verwenden."]})]})]})}function m(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{m as default};
