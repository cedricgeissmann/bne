import{j as e}from"./index-B2qCcbtg.js";import{E as r}from"./Example-C700Bojd.js";import{C as a}from"./Chapter-Bxzgta08.js";function s(i){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...i.components};return e.jsxs(a,{children:[e.jsxs(n.h2,{children:["Variablen in Javascript (",e.jsx(n.code,{children:"let"})," und ",e.jsx(n.code,{children:"const"}),")"]}),e.jsxs(n.p,{children:[`Beim Programmieren sind Variablen nichts anderes als benannte Speicherplätze.
Sie können einem `,e.jsx(n.code,{children:"Wert"}),` also einen Namen geben, damit er später einfacher wieder
verwendet werden kann. Die Namen sollten dabei den Wert den Sie speichern
möglichst gut beschreiben.`]}),e.jsxs(r,{title:"Zahlen speichern",children:[e.jsx(n.p,{children:`Das einfachte mögliche Beispiel ist es 2 Zahlen zu speichern und dann deren
Summe in einer neuen Variable zu speichern.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const a = 12
const b = 8
const sum = a + b // Werte können auch berechnet werden, bevor sie gespeichert werden.
`})}),e.jsxs(n.p,{children:["Hier können Sie sehen das wir mit dem Schlüsselwort ",e.jsx(n.code,{children:"const"}),` sagen, dass eine
neue Variable folgt, dann nennen wir deren Namen. Diesen Vorgang bezeichnet man
als `,e.jsx(n.em,{children:"initialisieren"}),` einer Variable. Sie sehen auch, dass wir bei der
Initialisierung bereits eine Berechnung durchführen können. Der Wert rechts vom
Zuweisungszeichen `,e.jsx(n.code,{children:"="}),` wird immer zuerst ausgewertet, bevor er einer Variable
zugewiesen wird.`]})]}),e.jsx(n.h2,{children:"Konstante und nicht konstante Variablen"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:["In Javascript gibt es 2 Arten von Variablen. Die einen sind ",e.jsx(n.strong,{children:"konstant"}),` den
anderen kann man einen neuen Wert zuweisen. Auch Variablen die `,e.jsx(n.strong,{children:"konstant"}),`
sind, können in Javascript noch verändert werden, man kann Ihnen aber keinen
neuen Wert zuweisen. Wir verwenden wenn immer möglich eine `,e.jsx(n.strong,{children:"konstante"}),`
Variable, denn das zwingt uns dazu den Code `,e.jsx(n.em,{children:"expliziter"}),` zu machen, damit wird
er lesbarer und wir machen weniger Fehler.`]}),e.jsxs(n.p,{children:["Neben ",e.jsx(n.code,{children:"const"})," gibt es auch das Schlüsselwort ",e.jsx(n.code,{children:"let"}),". Mit ",e.jsx(n.code,{children:"let"}),` erstellen wir eine
Variable der wir neue Werte zuweisen können. Das ist besonders praktisch, wenn
wir etwas zählen möchten. Beim zählen interessiert uns der alte Wert der
Variable nicht mehr, wir können diese also einfach überschreiben. Durch das
überschreiben von Variablen wir der Code aber weniger `,e.jsx(n.em,{children:"explizit"}),` daher verwenden
wir es nur wenn wir es auch brauchen.`]})]}),e.jsxs(r,{title:"Summe in Javascript",children:[e.jsx(n.p,{children:`Im letzten Beispiel haben wir bereits gesehen das wir die Summe von 2 Zahlen in
einer Variable speichern können. Jetzt möchten wir aber die Summe über eine
Liste berechnen. Normalerweise würde man das mit einer Schleife lösen, da wir
diese aber erst noch einführen, haben wir hier ein Beispiel wie man es sonst
nicht schreibt.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const a = 4
const b = 7
const c = 29
const d = 2

// Das ist unsere Summen-Variable
let sum = 0

// Wir rechnen die ersten beiden Teile der Liste zusammen, und speichern sie in sum
sum = a + b

// Jetzt rechnen wir den nächsten Eintrag dazu
sum = sum + c

// Und nun noch den letzten Eintrag
sum = sum + d
`})}),e.jsxs("section",{children:[e.jsxs(n.p,{children:["Wenn wir einer Variable einen neuen Wert zuweisen, dann brauchen wir kein ",e.jsx(n.code,{children:"let"}),`
mehr hinzuschreiben. Das wäre sogar falsch. Denn mit `,e.jsx(n.code,{children:"let"}),` sagen wir dem
Computer, dass nun eine neue Variable kommen soll. Wir möchten aber keine neue
Variable erstellen, sondern nur einen neuen Wert zuweisen.`]}),e.jsxs(n.p,{children:["Sie sehen auch das wir die Variable ",e.jsx(n.code,{children:"sum"}),` auf der linken wie auf der rechten
Seite des Zuweisungsoperators (`,e.jsx(n.code,{children:"="}),`) haben. Das ist ganz einfach möglich, weil
immer zuerst der Ausdruck auf der rechten Seite ausgewertet wird, und dieser
Wert wird dann in der Variable gespeichert.`]})]})]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{h as default};
