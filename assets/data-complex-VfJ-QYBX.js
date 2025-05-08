import{j as e}from"./index-B2qCcbtg.js";import{C as a}from"./Chapter-Bxzgta08.js";import{E as s}from"./Example-C700Bojd.js";function r(i){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i.components};return e.jsxs(a,{children:[e.jsx(n.h2,{children:"Komplexe Daten"}),e.jsx(n.p,{children:`Im vorherigen Kapitel haben wir gesehen wie man Daten als Objekte beschreibt. Da
haben wir gesagt dass die einfachste Form von interessanten Daten, ein Objekt
ist. Bis jetzt haben wir uns aber nur sehr einfache Objekte angeschaut. In dem
Kapitel schauen wir uns komplexere Objekte an.`}),e.jsxs(s,{title:"Beispiel: Objekte verschachteln",classes:"example",children:[e.jsx(n.p,{children:`Hier haben wir ein ganz einfaches Objekt, das eine Person und deren Wohnandresse
hat.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
  "vorname": "Peter",
  "nachname": "Muster",
  "strasse": "Mustergasse",
  "strassenNr": 7,
  "plz": 4132,
  "stadt": "Muttenz"
}
`})}),e.jsx(n.p,{children:"Jetzt schauen wir uns das gleiche Objekt ein klein wenig anders an."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
  "vorname": "Peter",
  "nachname": "Muster",
  "adresse": {
    "strasse": "Mustergasse",
    "strassenNr": 7,
    "plz": 4132,
    "stadt": "Muttenz"
  }
}
`})}),e.jsx(n.p,{children:"Was fällt Ihnen dabei auf?"})]}),e.jsx(n.h3,{children:"Verschachtelung zur besseren Übersicht"}),e.jsx(n.p,{children:`Wir können ganz einfach Objekte in Objekten erstellen. So können wir unsere
Objekte verschachteln, was es uns ermöglicht ein Objekt besser zu gruppieren.
Das kann uns beim modellieren helfen, und aber auch bei der Lesbarkeit der
Daten. Im Beispiel oben, können wir sehr einfach ablesen, dass jetzt eine
Adresse kommt. Wenn uns diese nicht interessiert, können wir die auch einfach
überlesen.`}),e.jsxs(s,{title:"Aufagbe: Wann ist Verschachtelung gut?",classes:"exercise",children:[e.jsx(n.p,{children:`Finden Sie ein Beispiel wo sich die Verschachtelung der Daten lohnt. Schreiben
Sie das Beispiel auf. Finden Sie ein zweites Beispiel wo sich die
Verschachtelung nicht lohnt, schreiben Sie auch dieses auf, und die Gründe
weshalb es sicht nicht lohnt.`}),e.jsx(n.p,{children:`Es gibt hier keine festen Regeln wann man Verschchtelung verwendet und wann
nicht. Es kommt immer auf den Fall an. Wichtig ist jedoch dass Sie sich mal
Gedanken darüber machen.`})]}),e.jsx(n.h3,{children:"Listen"}),e.jsx(n.p,{children:`Eine weitere komplexe Form von Daten, sind Listen. Wenn wir mehrere Objekte von
der gleichen Art haben, dann lohnt es sich meistens eine Liste zu machen.`}),e.jsxs(s,{title:"Beispiel: Haustiere",classes:"example",children:[e.jsx(n.p,{children:`Eine Person kann oftmals mehrere oder auch garkein Haustier haben. Hier ist es
also praktisch, wenn wir eine Liste erstellen können.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
  "vorname": "Peter",
  "nachname": "Muster",
  "haustiere": ["Carlo", "Memphis", "Spot", "Daisy"]
}
`})}),e.jsx(n.p,{children:`In dem Beispiel hier fehlen die Informationen zu den Haustieren. Diese können
Sie aber ganz einfach hinzufügen, denn Sie können in einer Liste auch Objekte
haben. Mit Informationen könnte das Beispiel dann so aussehen.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
  "vorname": "Peter",
  "nachname": "Muster",
  "haustiere": [
    {
      "name": "Carlo",
      "tierart": "Hamster"
    }, {
      "name": "Memphis",
      "tierart": "Hund"
    }, {
      "name": "Stip",
      "tierart": "Hund"
    }, {
      "name": "Daisy",
      "tierart": "Katze"
    }
  ]
}
`})}),e.jsx(n.p,{children:`Sie können hier auch noch mehr Informationen hinzufügen, aber für dieses
Beispiel lassen wir es so klein wie möglich.`})]}),e.jsx(n.h3,{children:"Gleiche Struktur in den Objekten"}),e.jsx(n.p,{children:`In dem Beispiel oben, sehen Sie das wir immer die gleichen Eigenschaften in den
Objekten in einer Liste haben. Das ist meistens sinnvoll, denn Sie haben ja eine
Liste von einer Art von Objekt (Haustiere in diesem Fall), die müssen alle
ungefähr die gleichen Eigenschaften haben.`}),e.jsx(n.p,{children:`Das muss aber nicht immer so sein. Sie könnten Ihren Haustieren auch einen
zweiten Vornamen geben, und das muss nicht bei allen der Fall sein. Dann
unterscheiden sich die Objekte in der Struktur.`}),e.jsxs(s,{title:"Aufgabe: Familienstruktur erstellen",classes:"exercise",children:[e.jsx(n.p,{children:`Erstellen Sie ein Objekt das die Struktur von Ihrer Familie abbildet. Kinder und
Haustiere sollen dabei Listen sein. Sie dürfen auch noch weitere Listen
einfügen.`}),e.jsx(n.p,{children:`Prüfen Sie ob all die Objekte in einer Liste die gleiche Stuktur haben. Macht es
Sinn dass diese die gleiche Stuktur haben?`})]}),e.jsx(n.h3,{children:"Klassen als Baupläne für Objekte"}),e.jsx(n.p,{children:`Klassen sind ein Konstrukt das nur beim Programmieren vorkommt, und auch dann
nicht in ganz allen Programmiersprachen. Da wir aber Klassen im Spielprojekt
verwenden, schauen wir uns hier die Grundidee hinter den Klassen an.`}),e.jsxs(n.p,{children:[`Sie haben im letzten Beispiel bereits gesehen das wir für gewisse Objekte die
gleiche Struktur haben möchten. Das können wir mit Klassen erreichen. Ein Klasse
gitb uns die Struktur für ein Objekt vor. Das Objekt ist dann eine `,e.jsx(n.em,{children:"Instanz"}),` der
Klasse. Im nächsten Kapitel schauen wir uns das genauer an, und auch was
`,e.jsx(n.strong,{children:"Vererbung"})," mit Klassen bedeutet."]})]})}function c(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{c as default};
