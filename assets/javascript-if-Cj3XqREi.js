import{j as e}from"./index-B2qCcbtg.js";import{E as i}from"./Example-C700Bojd.js";import{C as t}from"./Chapter-Bxzgta08.js";function r(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s.components};return e.jsxs(t,{children:[e.jsxs(n.h2,{children:["Bedingungen in Javascript (",e.jsx(n.code,{children:"if"}),")"]}),e.jsx(n.p,{children:`Bedingungen bieten die Möglichkeit Code nur dann auszuführen wenn gewisse
"Bedingungen" erfüllt sind. Dadurch können wir Logik in unser Programm bringen,
und besser auf Eingaben vom Benutzer reagieren.`}),e.jsxs(i,{title:"Beispiel: Einfache Bedingung",children:[e.jsxs(n.p,{children:["In Javascript können ",e.jsx(n.code,{children:"Expressions"}),` auf ihren Wahrheitswert
überprüft werden. Wir können also überprüfen ob eine Variable einen
bestimmten Wert hat.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const value = 7
if (value === 0) {
  alert("Hat den Wert Null")
} else {
  alert("Hat NICHT den Wert Null")
}
`})}),e.jsx(n.p,{children:`Das Beispiel zeigt dass nur der Code ausgeführt wird, der im entsprechenden
Block steht, so können wir die Logik von einem Programm steuern.`})]}),e.jsx(n.h3,{children:"Wert einlesen und Logik anwenden"}),e.jsx(n.p,{children:`Wir können einen ganze einfachen Passwortschutz erstellen. Im Prinzip müssen wir
nur wissen ob der Benutzer ein bestimmtes Wort eingegeben hat, wenn 'Ja' zeigen
wir das Geheimnis an.`}),e.jsxs(i,{title:"Beispiel: Passwort geschützt",children:[e.jsx(n.p,{children:"Wir haben den folgenden HTML-Code, der uns ein Element versteckt:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div>
  <p id="secret" style="display: none">Dieser Text ist streng geheim</p>
  <input type="password" id="password" />
  <button onclick="showSecret()">Geheimnis anzeigen</button>
</div>
`})}),e.jsx(n.p,{children:"Und die folgende Javascript-Funktion dazu:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function showSecret() {
  const secretElem = document.querySelector("#secret")
  const passwordElem = document.querySelector("#password")
  if (passwordElem.value === "Geheim") {
    secretElem.style.display = block
  } else {
    alert("Das Passwort ist leider falsch...")
  }
}
`})}),e.jsx(n.p,{children:`So kann man auf einfach Art und Weise gewisse Teile einer Webseite auslassen,
wenn jemand diese nicht sehen soll. In der Praxis ist das natürlich viel
aufwendiger, denn hier kann sowohl das Passwort wie auch das Geheimnis im Code
gelesen werden.`})]})]})}function c(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{c as default};
