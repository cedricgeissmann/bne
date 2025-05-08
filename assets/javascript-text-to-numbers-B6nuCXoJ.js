import{j as e,L as a}from"./index-B2qCcbtg.js";import{E as r}from"./Example-C700Bojd.js";import{C as t}from"./Chapter-Bxzgta08.js";function i(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s.components};return e.jsxs(t,{children:[e.jsx(n.h2,{children:"Datentypen in Javascript"}),e.jsxs(n.p,{children:[`In Javascript gibt es verschiedene Datentypen. Die beiden wichtigsten für uns
sind im Moment `,e.jsx(n.code,{children:"Text"})," und ",e.jsx(n.code,{children:"Zahlen"}),`. Es gibt noch eine genauere Unterscheidung,
für uns reicht es aber zu wissen dass diese Beiden nicht gleich sind.`]}),e.jsx(n.h3,{children:"Rechnen in Javascript"}),e.jsxs(n.p,{children:[`Javascript kann mit verschiedenen Datentypen rechnen, und verwendet dabei ganz
normal das `,e.jsx(n.code,{children:"+"}),"-Zeichen. Wir können also ganz einfach ",e.jsx(n.code,{children:"3 + 6"}),` in Javascript
ausrechnen lassen. Wir können auch mit den Werten von Variablen rechnen
(`,e.jsx(n.code,{children:"let a = 10; a + 19"}),")."]}),e.jsx(n.h3,{children:"Text addieren"}),e.jsxs(n.p,{children:["In Javascript können wir auch Text addieren ",e.jsx(n.code,{children:'"Hello" + " " + "World"'}),`. Das
`,e.jsx(n.code,{children:"+"}),`-Zeichen, wird also für Text und Zahlen verwendet. Das heisst wir müssen
aufpassen wenn wir in Javascript addieren. Ist ein Teil davon ein `,e.jsx(n.code,{children:"Text"}),`, dann
wird einfach alles zusammen gehängt und es git keine normale Addition.`]}),e.jsx(n.p,{children:`Es ergibt daher Sinn, wenn wir Text zuerst in eine Zahl umwandeln lassen. Das
ist immer dann nötig wenn wir ein Element aus dem HTML auslesen, denn alles was
aus HTML kommt, wird als Text angesehen.`}),e.jsxs(r,{title:"Beispiel: Text in Zahl umwandeln",children:[e.jsxs(n.p,{children:["Wir haben ein HTML-Element mit der ID ",e.jsx(n.code,{children:"zahl"}),`, darin steht eine
7. Möchten wir nun diese 7 auslesen und 3 dazu addieren, können wir das
mit dem folgenden Code machen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function plusThree() {
  const numberElement = document.querySelector("#zahl")
  let num = parseInt(numberElement.textContent)
  num = num + 3
  numberElement.textContent = num
}
`})}),e.jsxs(n.p,{children:["Mit ",e.jsx(n.code,{children:"parseInt()"}),` wird der Text als Zahl gelesen, und man kann dann damit ganz
normal rechnen. Testen Sie mal was passiert wenn Sie diese Funktion weglassen.`]})]}),e.jsxs("div",{className:"btn-container",children:[e.jsx(a,{className:"btn",to:"/javascript-change-page",children:e.jsx(n.p,{children:"Zurück"})}),e.jsx("span",{})]})]})}function h(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
