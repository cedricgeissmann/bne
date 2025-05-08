import{j as e}from"./index-B2qCcbtg.js";import{E as s}from"./Example-C700Bojd.js";import{C as r}from"./Chapter-Bxzgta08.js";function t(i){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i.components};return e.jsxs(r,{children:[e.jsx(n.h2,{children:"Schalter in Javascript"}),e.jsx(n.p,{children:`Schalter sind verschiedene Fälle die in Javascript auftretten können. Mit
Schalter, oder auch Switches genannt, können wir die Logik im Code recht einfach
steuern.`}),e.jsxs(s,{title:"Beispiel: In 2 Listen aufteilen",children:[e.jsxs(n.p,{children:[`Oftmals kann es sein das Sie einen Text in 2 Teile unterteilen möchten,
dann können wir das mit dem Code ganz einfach in 2 verschiedene Fälle
aufteilen. Angenommen Sie möchten alles bis zum Zeichen `,e.jsx(n.code,{children:"|"}),`
in einen ersten Teil lesen, und alles dannach in einen zweiten Teil,
dann können wir das mit Switches machen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const text = "das ist im ersten Teil|und das hier im zweiten"
let switchFirst = true
const listFirst = []
const listSecond = []
for (let i = 0; i < text.length; i++) {
  if (text[i] === "|") {
    switchFirst = false
  } else {
    if (switchFirst === true) {
      listFirst.push(text[i])
    } else {
      listSecond.push(text[i])
    }
  }
}
const result = [listFirst.join(""), listSecond.join("")]
`})}),e.jsx(n.p,{children:`Solange wir nur 2 Fälle haben, ist der Code sehr einfach. Mit mehr Fällen kann
es komplexer werden, aber nicht unbedingt schwieriger.`})]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{h as default};
