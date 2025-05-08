import{j as e,L as s}from"./index-B2qCcbtg.js";import{E as t}from"./Example-C700Bojd.js";import{C as d}from"./Chapter-Bxzgta08.js";function i(r){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r.components};return e.jsxs(d,{children:[e.jsx(n.h2,{children:"Einführung in Javascript"}),e.jsx(n.p,{children:`Javascript ist eine von sehr vielen Programmiersprachen. Javascript wird in der
Webentwicklung verwendet, und ist dafür auch optimiert. Javascript kann in jedem
modernen Webbrowser ausgeführt werden, es muss also nicht zusätzliches
installiert werden, man kann es direkt so verwenden.`}),e.jsx(n.p,{children:`Javascript wird verwendet um Webseiten interaktiv zu machen. Man kann es aber
auch verwenden um die Logik auf einer Webseite zu steuern, man kann Daten von
einer externen Quelle laden und analysieren, oder sogar ganze Spiele als
Webseite entwickeln.`}),e.jsx(n.h3,{children:"Javascript einbinden"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:["Wie bereits bei ",e.jsx(n.code,{children:"CSS"}),` müssen wir auch das Javascript separat einbinden. Dafür
fügen wir den folgenden Code im `,e.jsx(n.code,{children:"<head>"})," von unserem ",e.jsx(n.code,{children:"HTML"})," ein."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script src="script.js" defer><\/script>
`})}),e.jsxs(n.p,{children:["Damit können wir den Code in der Datei ",e.jsx(n.code,{children:"script.js"})," in der Webseite verwenden."]})]}),e.jsx(n.h3,{children:"Funktionen"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Funktionen"}),` sind die Basisbausteine für ein Programm. In Javascript werden
Funktionen zur Verfügung gestellt, die dann von der Webseite aufgerufen werden
können.`]}),e.jsx(n.p,{children:`Funktionen können auch von anderen Funktionen aufgerufen werden, dadurch kann
man Code einmal schreiben, und mehrfach verwenden.`}),e.jsxs(n.p,{children:[`Wir erstellen eine erste Funktion die den Benutzer ganz einfach Grüssen soll.
Dafür fügen wir den folgenden Code in der Datei `,e.jsx(n.code,{children:"script.js"})," ein:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function sayHello() {
  alert("Hello World")
}
`})}),e.jsxs(n.p,{children:[`Dies stellt der Webseite diese Funktion zur Verfügung, wir müssen die Funktion
aber noch aufrufen, damit sie auch ausgeführt wird. Das machen wir mit dem
folgenden `,e.jsx(n.code,{children:"HTML"})," Code."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<button onclick="sayHello()">Begrüssung ausführen</button>
`})}),e.jsxs(n.p,{children:[`So funktionieren alle Codes die wir erstellen. Wir erstellen eine Funktion, und
rufen diese dann aus dem `,e.jsx(n.code,{children:"HTML"})," auf."]})]}),e.jsx(t,{title:"Aufgabe: Andere Begrüssung",children:e.jsx(n.p,{children:`Erstellen Sie eine weitere Funktion um den Benutzer zu begrüssen. Erstellen
Sie auch für diese Funktion einen Button, um die Funktion auszuführen.`})}),e.jsx("div",{className:"btn-container right",children:e.jsx(s,{className:"btn",to:"/javascript-change-page",children:e.jsx(n.p,{children:"Weiter"})})})]})}function o(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{o as default};
