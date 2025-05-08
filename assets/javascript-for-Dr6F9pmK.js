import{r as a,j as e}from"./index-B2qCcbtg.js";import{E as f}from"./Example-C700Bojd.js";import{C as g}from"./Chapter-Bxzgta08.js";function b(){const[t,n]=a.useState("Einfach nur Text..."),[l,p]=a.useState(0),[m,x]=a.useState(u(t)),d=i=>{p(s=>{const r=s+i;return r<0?0:r>=t.length?t.length-1:r})},c=i=>i===l?"active-letter":"";function u(i){return i.split("").map(h=>h!=="a"?h:"A").join("")}const j=({target:i})=>{n(i.value),x(u(i.value))};return e.jsxs("div",{className:"letter-simulator-wrapper",children:[e.jsxs("div",{className:"letter-input-wrapper",children:[e.jsx("label",{htmlFor:"letter-input",children:"Eingabe:"}),e.jsx("input",{type:"text",id:"letter-input",value:t,onChange:j})]}),e.jsxs("div",{className:"letter-wrapper",children:["Input:",t.split("").map((i,s)=>e.jsxs("div",{className:"letter-with-index-wrapper",children:[e.jsx("span",{className:`for-letter ${c(s)}`,children:i}),e.jsxs("span",{children:["i=",s]})]},s))]}),e.jsxs("div",{className:"letter-control-panel",children:[e.jsx("button",{onClick:()=>d(-1),children:"Previous"}),e.jsxs("span",{children:["i = ",l," "]}),e.jsx("button",{onClick:()=>d(1),children:"Next"})]}),e.jsxs("div",{className:"letter-wrapper",children:["Result:",m.split("").slice(0,l+1).map((i,s)=>e.jsx("span",{className:`for-letter ${c(s)}`,children:i},s))]})]})}function o(t){const n={code:"code",h2:"h2",p:"p",pre:"pre",...t.components};return e.jsxs(g,{children:[e.jsxs(n.h2,{children:["Schleifen in Javascript (",e.jsx(n.code,{children:"for"}),")"]}),e.jsx(n.p,{children:`Eine Aufgabe, die beim Programmieren immer wieder auftritt, ist das Iterieren
über Listen, also das Durchgehen aller Elemente einer Liste. Häufig möchten wir
dabei einzelne Elemente auslassen oder sie abändern. Dafür kann ein einfaches
Schema verwendet werden:`}),e.jsxs(f,{title:"Schema: Neue Liste erstellen",children:[e.jsx(n.p,{children:`Es wird eine neue leere Liste erstellt. Anschließend wird jedes Element
der alten Liste überprüft und entweder an die neue Liste angehängt oder
modifiziert.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Nimmt eine Eingabe entgegen, und wandelt alle "a"s in "A"s um, und gibt dies zurück
function aufgabe00(args) {
  const input = args // liest die Eingabe der Funktion in eine Variable
  const result = [] // erstellt eine neue leere Liste

  for (let i = 0; i < input.length; i++) {
    // iteriert über die Eingabe
    const currentElement = input[i] // liest das aktuelle Zeichen der Eingabe aus

    if (currentElement === "a") {
      // prüft ob das aktuelle Zeichen ein "a" ist
      result.push("A") // hängt das Zeichen "A" an die result-Liste hinten an
    } else {
      // wenn der Fall oben NICHT erfüllt ist
      result.push(currentElement) // hängt das aktuelle Zeichen an die result-Liste hinten an
    }
  }

  return result.join("") // wandelt die result-Liste in Text um, und gibt den Text zurück
}
`})}),e.jsx(n.p,{children:`Mit dieser Struktur können Sie praktisch alles lösen, was mit dem Umwandeln von
Text zu tun hat. Versuchen Sie zuerst intuitiv zu verstehen, was die einzelnen
Teile des Codes machen, und bauen Sie sich mit der Zeit ein detailliertes
Verständnis für jede Zeile in diesem Code-Stück auf.`})]}),e.jsxs("section",{children:[e.jsx(n.h2,{children:"Visualisierung vom Schema: Neue Liste erstellen"}),e.jsx(n.p,{children:`Wir können denn Code aus dem Beispiel von oben auch visualisieren. Bei dem
Schema gehen Sie immer genau gleich vor. Sie erstellen eine neue leere Liste,
und schreiben die alte ein Zeichen nach dem anderen ab. So können Sie für jedes
Zeichen prüfen ob Sie dieses behalten möchten, oder mit einem anderen Zeichen
ersetzen.`}),e.jsxs(n.p,{children:[`Die Visualisierung hier, macht genau das Beispiel von oben, wo alle kleinen
`,e.jsx(n.code,{children:"a"}),"'s mir grossen ",e.jsx(n.code,{children:"A"}),`'s ersetzt werden. Wenn Sie eine andere Eingabe untersuchen
möchten, dann können Sie das einfach ändern.`]}),e.jsx(b,{})]})]})}function E(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{E as default};
