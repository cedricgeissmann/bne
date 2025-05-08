import{j as e}from"./index-B2qCcbtg.js";import{C as s}from"./Chapter-Bxzgta08.js";import{E as t}from"./Example-C700Bojd.js";function r(i){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i.components};return e.jsxs(s,{children:[e.jsx(n.h2,{children:"Webseiten strukturieren"}),e.jsx(n.p,{children:`Webseiten sind immer in logische Abschnitte unterteilt. Mit HTML findet diese
Unterteilung mit verschiedenen Tags statt. Welche Tags man wie fest einsetzen
möchte, liegt dabei beim Benutzer. Sinnvoll ist es sich eine einfache Struktur
zu überlegen, und diese so gut es geht beizubehalten.`}),e.jsxs(t,{title:"Beispiel: Artikel mit Abschnitt",children:[e.jsx(n.p,{children:`Ein Artikel hat in der Regel einen Titel und besteht aus verschiedenen
Abschnitten. Dies kann mit HTML einfach dargestellt werden.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<article>
  <h2>Titel</h2>

  <section>Dies ist der erste Abschnitt.</section>
  <section>
    <p>Der zweite Abschnitt hat mehrere Unterabschnitte.</p>
    <p>Dies ist der zweite Unterabschnitt.</p>
  </section>
</article>
`})}),e.jsx(n.p,{children:`Die logische Struktur kann hier einfach vom Programmierer und auch vom Computer
ausgelesen werden. Durch diese Art der Struktur, können später dann verschiedene
Stiele auf die Webseite angewendet werden, was eine schöne und einheitliche
Gestaltung ermöglicht, ohne darüber nachdenken zu müssen.`})]}),e.jsx(n.h2,{children:"Textelemente hervorheben"}),e.jsxs(n.p,{children:[`Wenn wir eine Webseite erstellen, möchten wir nicht nur die Seite strukturieren,
sondern auch einzelne Elemente hervorheben können. Soll ein bestimmtes Wort im
Text hervorgehoben werden, kann man dies entweder durch `,e.jsx("b",{children:"Fettdruck"})," oder"]}),e.jsxs(n.p,{children:[e.jsx("i",{children:"Kursiv"})," erreichen. Es gibt auch noch andere Möglichkeiten Text hervorzuheben."]}),e.jsxs(t,{title:"Aufgabe: Bauen Sie die folgenden Elemente in Ihre Webseite ein.",children:[e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<b>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<i>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<strong>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<mark>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<em>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<sub>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<sup>"})}),`
`]}),e.jsx(n.p,{children:`Wenn Sie noch mehr Elemente brauchen, oder mehr zu den einzelnen Elementen
wissen möchten, finden sie`}),e.jsxs(n.p,{children:[e.jsx("a",{href:"https://www.w3schools.com/html/html_formatting.asp",children:"hier"})," ",`
weitere Informationen.`]})]}),e.jsx(n.h2,{children:"Block- und Inline-Elemente"}),e.jsxs(n.p,{children:[`HTML hat im Prinzip 2 unterschiedliche Elementarten. Einmal gibt es das
Blockelement (`,e.jsx(n.code,{children:"<h1>"}),", ",e.jsx(n.code,{children:"<section>"}),", ",e.jsx(n.code,{children:"<div>"}),`, ...) und es gibt die Inlineelemente
(`,e.jsx(n.code,{children:"<b>"}),", ",e.jsx(n.code,{children:"<strong>"}),","," "," ",e.jsx(n.code,{children:"<a>"}),", ",e.jsx(n.code,{children:"<img>"}),`, ...). Mit diesen beiden Arten kann man
das ganze Design einer Webseite beschreiben. Dafür gibt es eine ganz einfache
Regel. Ein Blockelement nimmt immer die volle Breite der Webseite ein, und
danach kommt ein Umbruch. Ein Inlineelment hingegen, nimmt nur so viel Platz wie
es braucht, und danach geht der Text direkt weiter.`]}),e.jsx(t,{title:"Aufgabe: Spielen mit Block- und Inline-Elementen",children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Was passiert wenn Sie ein Blockelement in ein Inlineelement packen?"}),`
`,e.jsxs(n.li,{children:["Von Typ ist ",e.jsx(n.code,{children:"<img>"}),"?"]}),`
`,e.jsxs(n.li,{children:[`Wie können Sie ein Bild zentriert anzeigen, ohne Text daneben? (Tipp:
`,e.jsx(n.code,{children:"<center>"}),")"]}),`
`]})})]})}function d(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{d as default};
