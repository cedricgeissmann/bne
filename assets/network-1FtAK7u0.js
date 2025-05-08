import{j as e}from"./index-B2qCcbtg.js";import{C as t}from"./Chapter-Bxzgta08.js";function i(r){const n={h2:"h2",p:"p",strong:"strong",...r.components};return e.jsxs(t,{children:[e.jsx(n.h2,{children:"Netzwerke"}),e.jsxs(n.p,{children:[`Damit Computer miteinander kommunizieren können, braucht es Netzwerke wie das
Internet, um die verschiedenen Computer miteinander zu verbinden. Daten zwischen
Computern werden über Strom- oder Elektromagnitischeimpulse übertragen, also
werden auch hier alle Daten im Binärformat herum geschickt, wie das bereits im
Computerspeicher selbst der Fall ist. Die Daten werden in kompakten kleinen
Paketen übertragen, so das für eine Übertragung meistens mehrere Pakete
gebraucht werden. Wir schauen uns exemplarisch die Kommunikation von einem
Computer mit einer Webseite an. Dieses Modell nennt sich
`,e.jsx(n.strong,{children:"Server-Client"}),"-Modell, dabei ist der Anbieter der Webseite der ",e.jsx(n.strong,{children:"Server"}),` und
der Computer/Browser von dem die Anfrage kommt der `,e.jsx(n.strong,{children:"Client"}),`. Für Webseiten
wird dann das `,e.jsx(n.strong,{children:"HTTP"}),"-Protokoll verwendet. Dieses schauen wir später noch an."]}),e.jsx(n.h2,{children:"Server-Client-Modell"}),e.jsx(n.p,{children:`Auf diesem Modell basiert mehr oder weniger das ganze Internet, oder zumindest
das surfen auf Webseiten so wie wir es kennen. Hier wird jeweils eine Anfrage an
einen Server geschickt, dieser verarbeitet die Anfrage dann und schickt uns die
Webseite zurück, die wir gerne besuchen möchten. Damit eine Anfrage bis zum
Server gelangt, muss ein Paket über viele Zwischenstationen weitergeleitet
werden, bis es beim richtigen Computer angekommen ist. Diese Zwischenstationen
werden im folgenden Diagramm dargestellt.`}),e.jsxs("svg",{height:"1000",width:"1000",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:[e.jsx("rect",{x:"250",y:"250",height:"100",width:"400",fill:"blue"}),e.jsx("defs",{children:e.jsx("path",{fill:"none","stroke-width":"11",stroke:"white",id:"cloud",d:`M 150 447.9020979020979
A  50 50 0 1 1 144.05593872070312 276.92308268513716 
A  50 50 0 1 1 247.90209576800152 128.6713215221058 
A  50 50 0 1 1 463.2866962139424 122.37762323126094 
A  50 50 0 1 1 616.7831847717712 246.1538252397017 
A  50 50 0 1 1 587.762189958479 432.8671520740003 
A  50 50 0 1 1 377.9720313865822 557.6923145214162 
A  50 50 0 1 1 150 447.9020979020979 Z`,"stroke-linecap":"round","stroke-linejoin":"round"})}),e.jsx("use",{x:"250",href:"#cloud"})]})]})}function o(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{o as default};
