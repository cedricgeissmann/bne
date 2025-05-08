import{r as o,j as e}from"./index-B2qCcbtg.js";import{C as y}from"./Chapter-Bxzgta08.js";import{E as g}from"./Example-C700Bojd.js";import{M as p}from"./Katex-DlwNy_u_.js";import{M as b}from"./editor-CwV6J4ag.js";import"./hexy-CgJrN9Xi.js";function v(){const[r,n]=o.useState(" ° °   °°°°°AaA°"),l=o.useRef(null);o.useEffect(()=>{x(r)},[r]);const x=d=>{const t=l.current.getContext("2d");if(d.length===0){t.clearRect(0,0,t.canvas.width,t.canvas.height);return}const j=Math.ceil(d.length/4),c=new Array(j*4).fill(0);for(let i=3;i<c.length;i+=4)c[i]=255;for(let i=0;i<d.length;i++)c[i]=d.charCodeAt(i);const h=Math.ceil(Math.sqrt(j));l.current.width=h,l.current.height=h;const m=t.createImageData(h,h),u=m.data;for(let i=0;i<c.length;i++)u[i]=c[i];t.clearRect(0,0,t.canvas.width,t.canvas.height),t.putImageData(m,0,0),n(d)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"1rem"}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",gap:"1em"},children:[e.jsx(b,{language:"json",value:r,height:"300px",theme:"vs-dark",onChange:x}),e.jsx("canvas",{ref:l,style:{border:"1px solid black",width:"200px",height:"200px",imageRendering:"pixelated"}})]})]})}function k(){const[r,n]=o.useState("FF 00 00 FF"),l=o.useRef(null);o.useEffect(()=>{x(r)},[r]);const x=d=>{const t=l.current.getContext("2d"),c=d.split("").filter(s=>{const a=s.toUpperCase().charCodeAt(0);return a>=48&&a<=57?!0:a>=65&&a<=70}).map((s,a)=>a%2===1?s.toUpperCase()+" ":s.toUpperCase()).join("");if(d.length===0){t.clearRect(0,0,t.canvas.width,t.canvas.height);return}const h=c.split(" ").filter(s=>s!==""),m=Math.ceil(h.length/4),u=new Array(m*4).fill(255);for(let s=0;s<d.length;s++){const a=parseInt(h[s],16);u[s]=isNaN(a)?255:a}const i=Math.ceil(Math.sqrt(m));l.current.width=i,l.current.height=i;const f=t.createImageData(i,i),z=f.data;for(let s=0;s<u.length;s++)z[s]=u[s];t.clearRect(0,0,t.canvas.width,t.canvas.height),t.putImageData(f,0,0),n(s=>c)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"1rem"}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",gap:"1em"},children:[e.jsx(b,{language:"json",value:r,height:"300px",theme:"vs-dark",onChange:x}),e.jsx("canvas",{ref:l,style:{border:"1px solid black",width:"200px",height:"200px",imageRendering:"pixelated"}})]})]})}function w(r){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...r.components};return e.jsxs(y,{children:[e.jsx(n.h2,{children:"Hexadezimale Daten"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[`Wie Sie im letzten Kapitel bereits gesehen haben, sind binäre Daten
schwer zu lesen und sehr unhandlich. Ein besseres Format dafür sind
hexadezimale Zahlen. Im Hexadezimalsystem können wir jeweils 8 bits mit
2 Stellen darstellen. Wir können also den ganzen ASCII-Code mit maximal
2 Zeichen im Hexadezimalsystem ausdrücken, und müssen nicht so viele
`,e.jsx(n.code,{children:"0"})," und ",e.jsx(n.code,{children:"1"})," lesen."]}),e.jsx(n.p,{children:`Das Hexadezimalsystem eignet sich vor allem um Zahlen zwischen 0 und
255 darzustellen, denn mit der Basis 16 können wir die Zahl`}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(p,{children:String.raw`15 \cdot 16^1 + 15 \cdot 16^0 = 255`})}),e.jsxs(n.p,{children:["einfach darstellen. Oder als ",e.jsx(n.code,{children:"FF"}),` wie es dann im Hexadezimalsystem geschrieben
wird.`]})]}),e.jsxs(g,{title:"Aufgabe: Hexadezimal zu dezimal",children:[e.jsx(n.p,{children:`Wenn wir eine Zahl aus dem Hexadezimalsystem in unser bekanntes
Dezimalsystem übertragen möchten, dann können wir das immer mit dem
folgenden Schema machen.`}),e.jsxs(n.p,{children:["Jede Stelle im Hexadezimalsystem wird als ",e.jsx(n.code,{children:"Ziffer"}),` betrachtet. Die Werte
`,e.jsx(n.code,{children:"10"})," bis ",e.jsx(n.code,{children:"15"})," werden mit den Buchstaben ",e.jsx(n.code,{children:"A"})," bis ",e.jsx(n.code,{children:"F"}),` bezeichnet. Dann können
wir wie im Dezimalsystem die Ziffer mit der Stelle multiplizieren und dann
alles addieren.`]}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(p,{children:String.raw`{A3_{\texttt{hex}}} \rightarrow 10 \cdot 16^1 + 3 \cdot 16^0 =
  163_\texttt{dec}`})}),e.jsx(n.p,{children:"Berechnen Sie die Dezimaldarstellung der folgenden Hexadezimalzahlen:"}),e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"F0"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"0F"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"AA"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"C8"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"3A"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"16"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"A0"})}),`
`]}),e.jsx(n.p,{children:`Können Sie das auch in die andere Richtung berechnen? Suchen Sie einen Weg
wie man das umkehren kann.`})]}),e.jsxs("section",{children:[e.jsx(n.h3,{children:"Hexadezimalsystem in Bildern"}),e.jsxs(n.p,{children:[`Bei Farben haben Sie das schon gesehen, dort gibt es die Möglichkeit eine
Farbe mit einem Hexwert anzugeben, zum Beispiel `,e.jsx(n.code,{children:"#FF0000"}),`. Hier werden
jeweils auch 2 Ziffern zusammen genommen, und diese geben dann jeweils
einen Wert für Rot, Grün und Blau (beim RGB-Farbschema). So können bei
einem Bild jeweils 3 * 8 `,e.jsx(n.code,{children:"Bits"}),` pro Pixel verwendet werden, um die Farben
darzustellen. Kommt noch der Alpha-Kannal dazu, sprechen wir von
RBGA-Farbschema, und es werden 4 * 8 `,e.jsx(n.code,{children:"Bits"})," pro Pixel verwendet."]})]}),e.jsxs(g,{title:"Grösse von Bildern",children:[e.jsxs(n.p,{children:["Die Anzahl ",e.jsx(n.code,{children:"Bits"}),` pro Pixel ist oben beschrieben, jetzt müssen wir nur
noch ausrechnen wie viele Pixel ein Bild hat.`]}),e.jsxs(n.p,{children:["Wieviele ",e.jsx(n.code,{children:"Bits"})," brauchen die folgenden Bilder?"]}),e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"10x10 Pixel"}),`
`,e.jsx(n.li,{children:"100x20 Pixel"}),`
`,e.jsx(n.li,{children:"1980x1080 Pixel"}),`
`]}),e.jsxs(n.p,{children:[`Videos sind nichts anderes als aneinander gehängte Bilder. Wir gehen davon
aus das ein Video 60 Bilder in der Sekunde zeigt. Wie viele `,e.jsx(n.code,{children:"Bits"}),` braucht
dann ein Video von 30 Sekunden bei einer Auflösung von 1980x1200 Pixeln?`]})]}),e.jsxs("section",{children:[e.jsx(n.h3,{children:"Bitmapformat und Hexadezimaldarstellung"}),e.jsxs(n.p,{children:[`Wir betrachten eine Repräsentation vom Bitmapformat wie es im
Computerspeicher aussehen könnte. Hier ist jeweils 1 Pixel mit 4
`,e.jsx(n.code,{children:"Hex"}),`-Werten kodiert und dann kommt gleich der nächste Pixel. Wenn wir den
ersten Pixel einfach Rot darstellen möchten, dann würde das im Speicher so
aussehen: `,e.jsx(n.code,{children:"FF 00 00 FF"}),`. Die ersten zwei Stellen sind für den Rot-Kanal,
dann folgen Grün- und Blau-Kanal. Am Ende kommt noch der Alpha-Kanal, der
sagt wie sehr ein Pixel angezeigt werden soll, der sollte also immer auf
`,e.jsx(n.code,{children:"FF"}),` stehen. Wenn Sie die Farbe ein wenig dunkler haben möchten, dann
können Sie dort einen kleineren Wert verwenden.`]})]}),e.jsxs(g,{title:"Aufgabe: Bild von Hexcodes erzeugen",children:[e.jsx(n.p,{children:`Diese Zelle liest auf der linken Seite einen Hexcode ein, und erstellt
damit ein quadratisches Pixelbild. Versuchen Sie verschiedene Bilder zu
erzeugen.`}),e.jsx(k,{}),e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"1x1 Pixel grün"}),`
`,e.jsx(n.li,{children:"1x1 Pixel gelb"}),`
`,e.jsx(n.li,{children:`2x2 Pixel und die Farben rot, gelb, cyan und schwarz sollen drin
vorkommen`}),`
`,e.jsx(n.li,{children:`3x3 Pixel wo die erste Zeile schwarz, die zweite grün und die dritte rot
und blau ist.`}),`
`,e.jsx(n.li,{children:`3x3 Pixel wie die erste Spalte orange, die zweite dunkelgrün und die
dritte pink ist.`}),`
`,e.jsx(n.li,{children:"4x4 Pixel, mit ihren Lieblingsfarben"}),`
`]})]}),e.jsxs("section",{children:[e.jsx(n.h3,{children:"Verknüpfen der Informationen"}),e.jsx(n.p,{children:`Wir können für das Bitmapschema auch einfach den ASCII-Code statt dem
Hexwert als Eingabe nehmen. Genau das können Sie in der nächsten Zelle
machen. Da wird von jedem Zeichen der ASCII-Wert genommen und das ist dann
der Wert für den Farbkanal beim aktuellen Pixel.`}),e.jsx(n.p,{children:`Spielen Sie mit der nächsten Codezelle herum und versuchen Sie die Aufgaben
von vorhin nachzustellen, oder eigene spannende Aufgaben zu erstellen.`}),e.jsx(v,{})]})]})}function I(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(w,{...r})}):w(r)}export{I as default};
