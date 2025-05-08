import{j as e,L as r}from"./index-B2qCcbtg.js";import{E as i}from"./Example-C700Bojd.js";import{C as d}from"./Chapter-Bxzgta08.js";function s(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...t.components};return e.jsxs(d,{children:[e.jsx(n.h2,{children:"Seiteninhalt mit Javascript verändern"}),e.jsx(n.p,{children:`Eine der häufigsten Aktionen die man in Javascript macht, ist das verändern der
Webseite. Sollten sich Daten verändert haben, dann möchte man das auf der
Webseite neu so anzeigen, ohne diese neu laden zu müssen. Mit Javascript können
wir dafür das einfache Muster verwenden, das Sie im letzte Kapitel bereits
gesehen haben.`}),e.jsx(n.h3,{children:"Werte laden, verändern und zurückschreiben"}),e.jsx(n.p,{children:`Es gibt verschiedene Werte die man verändern kann, jeder Wert kommt jedoch von
einem HTML-Element. Damit wir diesen auch verwenden können, speichern wir das
HTML-Element zuerst in einer Variable, diese können wir dann im Code weiter
verwenden.`}),e.jsxs(i,{title:"Beispiel: Text anpassen",children:[e.jsxs(n.p,{children:[`Wir betrachten die folgende Funktion in Javascript, sie soll den Text von
einem Element mit dem Text `,e.jsx(n.code,{children:'"Dieser Text wurde gelöscht!"'}),`
ersetzen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function deleteText() {
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Dieser Text wurde gelöscht!"
}
`})}),e.jsx(n.p,{children:`Die Funktion existiert nun, und wir müssen sie nur noch ausführen. Wir brauchen
aber auch noch das Element auf dem der Text gelöscht werden soll, das macht der
folgende HTML-Code.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<p id="to-delete">Hier steht Text der später gelöscht werden soll.</p>

<button onclick="deleteText()">Text löschen</button>
`})})]}),e.jsxs("div",{className:"btn-container",children:[e.jsx(r,{className:"btn",to:"/javascript",children:e.jsx(n.p,{children:"Zurück"})}),e.jsx(r,{className:"btn",to:"/javascript-text-to-numbers",children:e.jsx(n.p,{children:"Weiter"})})]})]})}function o(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{o as default};
