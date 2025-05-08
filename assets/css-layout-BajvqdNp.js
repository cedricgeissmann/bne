import{j as e}from"./index-B2qCcbtg.js";import{C as r}from"./Chapter-Bxzgta08.js";import{E as a}from"./Example-C700Bojd.js";import{F as t}from"./Fiddle-BoYqa3y3.js";import"./index-CJwiPXpQ.js";function i(s){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(r,{children:[e.jsx(n.h2,{children:"Einfache Layouts"}),e.jsxs(n.p,{children:[`Oftmals möchten Sie gerne mehrere Elemente in einer Zeile haben, welche dann
alle gleich breit sind, und die Abstände dazwischen automatisch angepasst
werden. Das kann einfach mit dem `,e.jsx(n.strong,{children:"Flexbox"})," Modell von CSS erreicht werden."]}),e.jsxs(a,{title:"Beispiel: Navbar",children:[e.jsx(n.p,{children:`Auf vielen Webseiten wird eine Navbar am oberen Rand verwendet. In diesem
Beispiel versuchen wir so eine Navbar nach zubauen, und zu verstehen wie das
funktioniert.`}),e.jsx(n.p,{children:"Erstellen Sie zuerst eine Liste mit 3 Links darin."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ul class="navbar">
  <li><a href="/">Home</a></li>
  <li><a href="#section-1">Abschnitt 1</a></li>
  <li><a href="#section-2">Abschnitt 2</a></li>
</ul>
`})}),e.jsx(n.p,{children:`Diese Liste sieht noch schrecklich aus, und überhaupt nicht so wie wir das
brauchen. Mit dem folgenden CSS Code kann das aber einfach geändert werden.`}),e.jsx(n.p,{children:`Zuerst sagen wir dass die Liste horizontal angezeigt werden soll, und dass alle
Elemente gleichmässig verteilt werden.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 20px 0;
}
`})}),e.jsxs(n.p,{children:["Das ",e.jsx(n.code,{children:"display: flex;"}),` mit dem restlichen Code, sorgt dafür dass die Elemente
entsprechend automatisch angeordnet werden. Wir müssen keine Breite dafür
angeben, müssen aber aufpassen wenn die Liste zu gross wird, oder die Elemente
zu breit werden. Das kann auch schlecht aussehen wenn es auf dem Smartphone
angeschaut wird.`]}),e.jsxs(n.p,{children:[`Wir müssen dann noch die Stiele für die Links angeben. Das passen Sie am besten
in dem folgenden Selektor an: `,e.jsx(n.code,{children:".navbar > li > a"})]})]}),e.jsx(t,{html:`<div class="my-container">
<div class="my-box">box</div>
</div>`,css:`
  .my-box {
    background-color: green;
    width: 100px;
    height: 100px;
    margin: 0px;
    padding: 20px;
    border: 2px dotted red;
  }
`})]})}function m(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{m as default};
