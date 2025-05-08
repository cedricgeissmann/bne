import{j as e}from"./index-B2qCcbtg.js";import{E as r}from"./Example-C700Bojd.js";import{C as s}from"./Chapter-Bxzgta08.js";function t(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i.components};return e.jsxs(s,{children:[e.jsxs(n.h2,{children:["Javascript Rückgabewerte (",e.jsx(n.code,{children:"return"}),")"]}),e.jsx(n.p,{children:`Funktionen haben einen Rückgabewert, das heisst sie geben einen Wert an die
Stelle zurück, wo die Funktion aufgerufen wurde. Sie haben das selber im Code
schon oft verwendet.`}),e.jsxs(r,{title:"Beispiel: In Kleinbuchstaben umwandeln",children:[e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const letterCapitalA = "A"
const letterSmallA = letterCapitalA.toLowerCase()
`})}),e.jsx(n.p,{children:`Was hier in der Zeile zwei passiert, ist dass eine Funktion ausgeführt wird, und
die Kleinbuchstabenversion von einem Text zurück gibt. Diesen Rückgabewert wird
dann in einer neuen Variable gespeichert.`})]}),e.jsx(n.h3,{children:"Eigene Rückgabewerte erstellen"}),e.jsx(n.p,{children:`In eigenen Funktionen können Sie auch selber Rückgabewerte schreiben, damit
können Sie Werte aus einer Funktion an den Aufrufer zurückgeben.`}),e.jsxs(r,{title:"Beispiel: Wahr/Falsch Funktion",children:[e.jsxs(n.p,{children:[`Sollten Sie eine Funktion schreiben wollen, die entscheidet ob etwas ist, oder
nicht, möchten Sie einen Wahrheitswert (`,e.jsx(n.code,{children:"boolean"}),") zurückgeben."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function containsNumber(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const asciiCode = currentElement.charCodeAt(0)
    if (48 <= asciiCode && asciiCode <= 57) {
      return true
    }
  }
  return false
}
`})}),e.jsxs(n.p,{children:[`Diese Funktion geht die Eingabe Zeichen für Zeichen durch, und sobald ein
Zeichen kommt dass eine Ziffer ist, gibt die Funktion `,e.jsx("pre",{children:"true"}),` zurück und
bricht ab. Wird keine Ziffer gefunden, wird ganz am Ende `,e.jsx("pre",{children:"false"}),`
zurückgegeben. Diese Funktion kann uns also sagen ob in einem Text eine Zahl
vorkommt oder nicht.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`if (containsNumber("ABCDEF 4 abcdef")) {
  alert("Enthält eine Zahl")
} else {
  alert("Enthält KEINE Zahl")
}
`})}),e.jsxs(n.p,{children:[`So können wir dann Funktionen die wir selber erstellt haben, verwenden um Logik
in den Code zu bringen. Man kann damit die Logik in deskriptiven Code auslagern,
und muss die "komplexen" `,e.jsx(n.code,{children:"if"}),"s nicht immer lesen."]})]})]})}function l(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{l as default};
