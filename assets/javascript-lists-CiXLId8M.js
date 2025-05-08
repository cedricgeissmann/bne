import{j as e}from"./index-B2qCcbtg.js";import{E as t}from"./Example-C700Bojd.js";import{C as s}from"./Chapter-Bxzgta08.js";function r(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i.components};return e.jsxs(s,{children:[e.jsx(n.h2,{children:"Listen in Javascript"}),e.jsx(n.p,{children:`Listen in Javascript sind eine Sammlung von Daten. Text kann als eine Liste von
Zeichen agesehen werden, was es ermöglicht einfach mit Text zu arbeiten.`}),e.jsx(n.p,{children:`Wir haben bis jetzt in allen Aufgaben so getan als ob der Text eine Liste ist.
Wir sind dabei jedes Element der Liste durchgegangen, und haben geprüft was die
einzelnen Elemente sind. Meistens haben wir diese Elemente dann an eine weitere
Liste angehängt. Diesen Workflow werden wir auch weiterhin verwenden, aber wir
erweitern das Konzept noch ein wenig.`}),e.jsx(n.h3,{children:"Mehrere Rückgabewerte"}),e.jsx(n.p,{children:`Eine Funktion kann nur einen Wert auf einmal zurückgeben. Wenn wir mehrere Werte
zurückgeben möchten, dann können wir eine Liste von den Werten zurückgeben. Das
wird beim Programmieren sehr oft so gemacht, deshalb ist es wichtig dies zu
können.`}),e.jsxs(t,{title:"Beispiel: Text bis zum ersten '.' zurückgeben",children:[e.jsx(n.p,{children:`Wir möchten nur den Teil vom Text bis zum ersten Punkt zurückgeben, zusätzlich
möchten wir noch sagen ob dannach noch mehr Text kommt. Der Code dazu könnte
also wie folgt aussehen:`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function firstSentence() {
  const text = "Hier ist Text. Und hier noch mehr."
  const result = []
  for (let i = 0; i < text.length; i++) {
    result.push(text[i])
    if (text[i] === ".") {
      if (text.length - 1 === i) {
        return [result.join(""), false]
      } else {
        return [result.join(""), true]
      }
    }
  }
  return [result.join(""), false]
}
`})}),e.jsxs(n.p,{children:["Wenn der zweite Eintrag in der Liste ",e.jsx(n.code,{children:"false"}),` ist, wissen wir das kein weiterer
Text mehr kommt.`]})]}),e.jsx(n.h3,{children:"Text in Stücke aufteilen"}),e.jsx(n.p,{children:`Es kommt sehr oft vor das man einen Text bekommt, den man in verschiedene Stücke
aufteilen möchte. Es kann zum Beispiel sein dass Sie eine Liste von allen Sätzen
in einem Text haben möchten.`}),e.jsxs(t,{title:"Beispiel: Liste von Sätzen",children:[e.jsxs(n.p,{children:[`Wir gehen für dieses Beispiel davon aus das Sätze immer nur von einem
Punkt getrennt sind. Dann können wir wie bisher den Text Zeichen für
Zeichen lesen, und jedes mal wenn wir einen `,e.jsx(n.code,{children:"."}),` sehen,
einen neuen Eintrag in einer Liste erstellen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const text = "Erster Satz. Und ein zweiter Satz. Auch noch ein dritter Satz."
const phrases = []
let currentPhrase = []
for (let i = 0; i < text.length; i++) {
  const currentElement = text[i]
  if (currentElement === ".") {
    // Wenn wir hier sind haben wir einen '.' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
    phrases.push(currentPhrase.join(""))
    currentPhrase = [] // Damit löschen wir alles was im aktuellen Satz drin war.
  } else {
    // Wenn wir keinen '.' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
    currentPhrase.push(currentElement)
  }
}
phases.push(currentPhrase.join(""))
console.log(phrases)
`})}),e.jsx(n.p,{children:`So wie wir den Code hier geschrieben haben, wird der Punkt jeweils weggelassen.
Das ist normalerweise auch so wenn man einen Text an einem bestimmten Zeichen
aufteilt.`})]}),e.jsx(n.h3,{children:"Eingebaute Funktionen in Javascript nutzen"}),e.jsxs(n.p,{children:["Das was wir gerade implementiert haben, ist die ",e.jsx(n.code,{children:"split()"}),` -Funktion in
Javascript. Diese ist wie `,e.jsx(n.code,{children:"join()"}),` eine bereits eingebaute Funktion in
Javascript, und kann Ihnen das Leben deutlich einfacher machen. Wir haben die
Funktion hier aber selber geschrieben, um zu verstehen was genau hinter dem Code
steckt.`]}),e.jsx(t,{title:"Aufgabe: Die split-Funktion",children:e.jsxs(n.p,{children:["Lesen Sie im Internet nach was die ",e.jsx(n.code,{children:"split()"}),`-Funktion in Javascript macht.
Erstellen Sie eine zweite Version von dem vorherigen Code, mit der
`,e.jsx(n.code,{children:"split()"}),"-Funktion."]})})]})}function l(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{l as default};
