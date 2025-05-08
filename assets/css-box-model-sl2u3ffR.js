import{j as e}from"./index-B2qCcbtg.js";import{C as l}from"./Chapter-Bxzgta08.js";import{E as d}from"./Example-C700Bojd.js";function r(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i.components};return e.jsxs(l,{children:[e.jsx(n.h2,{children:"CSS Box Modell"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Das Box Modell in CSS beschreibt wie die Elemente Platz auf einer Webseite
einnehmen. Alle Elemente in sind in 4 Bereiche eingeteilt.`}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"margin"}),": Der äussere Rand, also der Abstand zu anderen Elemente"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"border"}),`: Der Rand von einem Element. Dieser ist normalerweise nicht sichtbar,
kann aber verwendet werden um Elemente zu umranden.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"padding"}),": Der innere Rand, also der Abstand vom Inhalt zur `border"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content"}),": Der Inhalt des Elements. Dies wird normalerweise in ",e.jsx(n.code,{children:"width"}),` und
`,e.jsx(n.code,{children:"height"})," angegeben."]}),`
`]}),e.jsx(n.p,{children:`Damit das Box Modell möglichst einfach angewendet werden kann, sollten Sie immer
die folgende CSS-Regel einfügen.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`* {
  box-sizing: border-box;
}
`})})]}),e.jsxs(d,{title:"Aufgabe: Spielen mit dem Box-Modell",children:[e.jsxs(n.p,{children:["Erstellen Sie ein Element mit der ID ",e.jsx(n.code,{children:"box"}),`. Spielen Sie dann mit dem folgenden
CSS Code herum, bis Sie verstehen was die einzelnen Teile machen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`#box {
  background-color: cyan;
  border: 2px solid black;
  margin: 50px;
  padding: 10px;
  width: 300px;
  height: 70px;
}
`})})]}),e.jsx(n.h3,{children:"Spezifische Ränder"}),e.jsx(n.p,{children:`Sie können die Randteile auch direkt ansprechen und müssen nicht für alle die
gleichen Abstände verwenden.`}),e.jsx(d,{title:"Aufgabe: Farbiger Rand auf der linken Seite",children:e.jsxs(n.p,{children:["Mit ",e.jsx(n.code,{children:"border-left"}),` können Sie nur den linken Rand ansprechen. Erstellen Sie eine
Klasse `,e.jsx(n.code,{children:"danger"})," die auf der linken Seite einen roten Rand von 5 Pixeln hat."]})}),e.jsxs("section",{children:[e.jsxs(n.p,{children:["Die einzelnen Teile des ",e.jsx(n.code,{children:"margin"}),`s können Sie wie folgt ansprechen, die anderen
sind analog dazu.`]}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"margin-left"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"margin-right"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"margin-top"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"margin-bottom"})}),`
`]})]})]})}function a(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{a as default};
