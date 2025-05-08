import{j as e,L as s}from"./index-B2qCcbtg.js";import{C as c}from"./Chapter-Bxzgta08.js";import{E as r}from"./Example-C700Bojd.js";function d(i){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...i.components};return e.jsxs(c,{children:[e.jsx(n.h2,{children:"Mit Bildern umgehenzen"}),e.jsx(n.p,{children:"Bilder werden in HTML wie Text behandelt, oder genauer gesagt wie"}),e.jsxs(n.p,{children:[e.jsx(n.em,{children:"inline"}),` Elemente. Sie werden einfach in den Textfluss eingebaut, und die Zeile
danach wird nicht umgebrochen. Möchten wir also ein Bild alleine und zentriert
haben, müssen wir es in einen eigenen Container packen, und diesen dann
gestalten.`]}),e.jsxs(r,{title:"Beispiel: Bild zentrieren",children:[e.jsx(n.p,{children:`Um ein einzelnes Bild zu zentrieren, brauchen Sie zuerst die folgende HTML
Struktur:`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="img-center">
  <img src="" />
</div>
`})}),e.jsxs(n.p,{children:["Dabei ist ",e.jsx(n.code,{children:"div.img-center"}),` das Element welches das Bild zentrieren wird. Wir
bezeichnen dieses Element als den Container.`]}),e.jsx(n.p,{children:`Mit diesem HTML Code können wir dann den CSS Code angeben, der uns das
gewünschte Design gibt. Dafür braucht es 2 Regeln, eine für den Container, und
eine für die Breite des Bildes selber.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.img-center {
  text-align: center;
}

.img-center > img {
  width: 70%;
}
`})}),e.jsx(n.p,{children:`Die zweite Regel wird nicht unbedingt gebraucht, ist aber praktisch, wenn die
Bilder nicht ganz so breit sein sollen wie der Text.`})]}),e.jsx(n.h3,{children:"Rahmen zum Bild hinzufügen"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[`Sie können dem Bild auch einen Rahmen geben. Dafür können Sie den folgenden Code
bei `,e.jsx(n.code,{children:".img-center > img"})," hinzufügen:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`border: 1px solid black;
padding: 2px;
`})})]}),e.jsx(n.h3,{children:"Bilder abrunden"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Bilderecken können auch abgerundet werden. Dadurch können spannende Bildformen
erreicht werden. Mit dem folgenden Code können Sie die Ecken von einem Bild
abrunden.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.round-img {
  border-radius: 25px;
}
`})}),e.jsx(n.p,{children:`Spielen Sie etwas mit dem Wert herum, versuchen Sie auch einen Wert wie 2% oder
50% aus.`})]}),e.jsxs(r,{title:"Beispiel: Abrundungseffekte aufheben",children:[e.jsxs(n.p,{children:["Wie Animationen funktionieren, können Sie"," "]}),e.jsxs(n.p,{children:[e.jsx(s,{to:"/css-animations",children:"hier"}),` nochmals nachlesen. Dort wird erklärt wie
Sie eine Transition erstellen.`]}),e.jsx(n.p,{children:"Um den Effekt zu erreichen, brauchen Sie den folgenden Code:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.round-img:hover {
  border-radius: 0;
  transform: scale(1.2);
}
`})}),e.jsx(n.p,{children:`Es ist durchaus möglich dass Sie den CSS Selektor anpassen müssen. Das hängt
davon ab wie direkt Sie dem Code oben gefolgt sind.`})]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{h as default};
