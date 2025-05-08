import{j as e}from"./index-B2qCcbtg.js";import{C as d}from"./Chapter-Bxzgta08.js";import{E as r}from"./Example-C700Bojd.js";import{V as t}from"./Video-g5WL5qln.js";function s(i){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i.components};return e.jsxs(d,{children:[e.jsx(n.h2,{children:"Merge Konflikte"}),e.jsxs(n.p,{children:["Merge Konflikte passieren wenn ",e.jsx(n.strong,{children:"Git"})," zwei ",e.jsx(n.code,{children:"branches"}),` nicht einfach
zusammenführen kann. Das ist der Fall wenn in beiden`," "," ",e.jsx(n.code,{children:"branches"}),` Änderungen
an den gleichen Codestellen (Zeilen) gemacht wurden. Diese müssen dann von Hand
gelöst werden.`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Git"})," schreibt bei einem ",e.jsx(n.code,{children:"merge"}),`-Konflikt die beiden Stellen in die Datei.
Diese kann dann von Hand oder mit Hilfe des Editors gelöst werden. Meist reicht
es aus wenn eine der beiden Versionen akzeptiert wird. Manchmal müssen aber noch
Anpassungen gemacht werden.`]}),e.jsxs(r,{title:"Beispiel: Merge Konflikt im CSS",children:[e.jsx(n.p,{children:`Nehmen wir an Sie haben 2 unterschiedliche Designs entwickelt und
möchten nun Änderungen von beiden nehmen.`}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"design-A"}),` gibt Boxen eine leicht andere Hintergrundfarbe, einen Rand und einen
Schatten. `,e.jsx(n.code,{children:"design-B"}),` verwendet abgerundete Ecken und einen dickeren Rand links
und rechts.`]}),e.jsxs(n.p,{children:["Die ",e.jsx(n.code,{children:"style.css"})," Datei kann dann nach dem"," "]}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"merge"}),"-Konflikt so aussehen."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`<<<<<<< HEAD
padding: 10px 20px;
background-color: rgb(248, 193, 163);
font-weight: bold;
letter-spacing: 1pt;
text-align: center;
box-shadow: 3px 1px 3px 2px darkgray;
=======
padding: 15px 20px;
background-color: rgb(145, 166, 132);
font-weight: bold;
letter-spacing: 1pt;
text-align: center;
border-radius: 15px;
border-left-width: 5px;
border-right-width: 5px;
>>>>>>> design-B
`})}),e.jsx(n.p,{children:"Sie müssen dann von Hand den Code anpassen, so das er am Ende so aussieht."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`padding: 15px 20px;
background-color: rgb(145, 166, 132);
font-weight: bold;
letter-spacing: 1pt;
text-align: center;
box-shadow: 3px 5px 2px 2px rgb(50, 50, 50);
border-radius: 15px;
border-left-width: 5px;
border-right-width: 5px;
`})}),e.jsxs(n.p,{children:[`Danach müssen Sie die Datei nur noch speichern und die Änderungen wieder zum
neuen `,e.jsx(n.code,{children:"commit"})," hinzufügen."]})]}),e.jsx(n.p,{children:"Das folgende Video zeigt nochmals wie man einen solchen"}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"merge"}),"-Konflikt bearbeiten kann."]}),e.jsx(t,{url:"xloRotL7BPU"}),e.jsx(r,{title:"Aufgabe: Lösen Sie einen Merge-Konflikt",children:e.jsxs(n.p,{children:["Erstellen Sie 2 ",e.jsx(n.code,{children:"branches"}),` mit unterschiedlichen Designs. Fügen Sie die
`,e.jsx(n.code,{children:"branches"})," zusammen und lösen Sie den ",e.jsx(n.code,{children:"merge"}),"-Konflikt."]})}),e.jsx(r,{title:"Aufgabe: Merge-Konflikte an mehreren Stellen",children:e.jsxs(n.p,{children:["Erstellen Sie wieder 2 unterschiedliche ",e.jsx(n.code,{children:"branches"}),` und führen Sie diese
zusammen. Machen Sie Ihre Änderungen so, dass `,e.jsx(n.code,{children:"merge"}),` -Konflikte an mehreren
Stellen erscheinen.`]})})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{h as default};
