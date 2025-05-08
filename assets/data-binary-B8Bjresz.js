import{r as t,j as e}from"./index-B2qCcbtg.js";import{C as R}from"./Chapter-Bxzgta08.js";import{E as S}from"./Example-C700Bojd.js";import{M as W}from"./Katex-DlwNy_u_.js";import{M as O}from"./editor-CwV6J4ag.js";import{h as A}from"./hexy-CgJrN9Xi.js";function E(){const[i,n]=t.useState("abcdef"),[s,j]=t.useState({width:2,numbering:"none",format:"twos",radix:2}),o=t.useRef(null),d=a=>{j(u=>({...u,radix:a}))},c=a=>{n(a)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"1rem"},children:[e.jsx("button",{onClick:()=>d(2),children:"Binary"}),e.jsx("button",{onClick:()=>d(8),children:"Octal"}),e.jsx("button",{onClick:()=>d(10),children:"Decimal"}),e.jsx("button",{onClick:()=>d(16),children:"Hexadecimal"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",gap:"1em"},children:[e.jsx(O,{language:"json",value:i,height:"300px",theme:"vs-dark",onChange:c}),e.jsx("pre",{ref:o,style:{border:"1px solid black",width:"320px",height:"300px",marginRight:"1em",overflowY:"scroll"},children:A.hexy(i,s)})]})]})}function k(i){let n="";for(let s=0;s<8-i.length;s++)n+="0";return n+i}function h(i){return i.split("").map(n=>{const s=n.charCodeAt(0).toString(2);return k(s)}).join(" ")}function V(){const[i,n]=t.useState("abc"),[s,j]=t.useState(h(i)),[o,d]=t.useState("012"),[c,a]=t.useState(h(o)),[u,C]=t.useState(""),[B,v]=t.useState(h(u));t.useEffect(()=>{g(s,c)},[]);const z=({target:r})=>{const l=h(r.value);j(m=>(g(l,c),n(r.value),l))},I=({target:r})=>{const l=h(r.value);a(m=>(g(s,l),d(r.value),l))},g=(r,l)=>{const m=r.split(" "),x=l.split(" "),p=m.map((b,w)=>{if(w<x.length){let f=parseInt(b,2)^parseInt(x[w],2);return f=f.toString(2),k(f)}});v(p.join(" ")),C(D(p.join(" ")))},D=r=>r.split(" ").map(x=>{const p=parseInt(x,2);return String.fromCharCode(p)}).join("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",gap:"1em"},children:[e.jsx("input",{type:"text",value:i,onChange:z,style:{border:"1px solid black",width:"20em",height:"2em",marginRight:"1em",display:"flex",alignItems:"center",justifyContent:"left"}}),e.jsx("pre",{style:{border:"1px solid black",width:"30em",height:"2em",marginRight:"1em",display:"flex",alignItems:"center",justifyContent:"left"},children:s})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",gap:"1em"},children:[e.jsx("input",{type:"text",value:o,onChange:I,style:{border:"1px solid black",width:"20em",height:"2em",marginRight:"1em",display:"flex",alignItems:"center",justifyContent:"left"}}),e.jsx("pre",{style:{border:"1px solid black",width:"30em",height:"2em",marginRight:"1em",display:"flex",alignItems:"center",justifyContent:"left"},children:c})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",gap:"1em"},children:[e.jsx("input",{type:"text",value:u,disabled:!0,onChange:()=>{},style:{border:"1px solid black",width:"20em",height:"2em",marginRight:"1em",display:"flex",alignItems:"center",justifyContent:"left"}}),e.jsx("pre",{style:{border:"1px solid black",width:"30em",height:"2em",marginRight:"1em",display:"flex",alignItems:"center",justifyContent:"left"},children:B})]})]})}function y(i){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...i.components};return e.jsxs(R,{children:[e.jsx(n.h2,{children:"Binäre Daten"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[`Immer wenn Sie mit dem Computer zu tun haben, haben Sie indirekt mit
binären Daten zu tun. Der Computer selber kann Daten nur mit `,e.jsx(n.code,{children:"0"}),` und
`,e.jsx(n.code,{children:"1"}),` darstellen. Für uns als Menschen wird das sehr schnell viel zu
kompliziert und auch unübersichtlich, dafür sind dann weitere
Datenformate und Programmiersprachen erfunden worden.`]}),e.jsx(n.p,{children:`Sie hatten indirekt schon mit dem Binärformat zu tun, als wir uns mit
dem ASCII-Code beschäftigt haben. Wir haben dort einfach nicht die
Binärdarstellung angeschaut, sondern die Dezimaldarstellung.`})]}),e.jsxs(S,{title:"Beispiel: ASCII-Code in verschiedenen Darstellungen",children:[e.jsx(n.p,{children:`In der folgenden Zelle finden Sie links ein Textfeld und rechts die
entsprechende Repräsentation im Binärformat. Ganz auf der rechten Seite
sehen Sie noch welche beiden Zeichen gerade im Binärformat dargestellt
werden. Sie können hier sehr einfach sehen dass das Binärformat extrem
schwierig zu lesen ist.`}),e.jsx(n.p,{children:`Testen Sie die anderen Formate und schauen Sie sich an ob Sie den
ASCII-Code wieder erkennen.`}),e.jsx(E,{}),e.jsx(n.p,{children:`Sie können den Text nach belieben ändern, um zu sehen wie die Daten im
Computerspeicher aussehen. Arbeiten Sie die folgenden Aufgaben durch:`}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Finden Sie heraus welchen Wert der Buchstabe ",e.jsx(n.code,{children:"A"})," in allen Formaten hat."]}),`
`,e.jsxs(n.li,{children:["Was fällt auf wenn Sie die Buchstaben ",e.jsx(n.code,{children:"A"})," und ",e.jsx(n.code,{children:"a"}),` im Binär-, Oktal- und
Hexadezimalsystem anschauen?`]}),`
`,e.jsxs(n.li,{children:["Was fällt Ihnen auf wenn Sie ",e.jsx(n.code,{children:"abcdef"})," im Binärformat anschauen?"]}),`
`,e.jsx(n.li,{children:"Was passiert wenn Sie einen Leerschlag eingeben?"}),`
`,e.jsx(n.li,{children:"Was passiert wenn Sie einen Zeilenumbruch eingeben?"}),`
`,e.jsx(n.li,{children:`Geben Sie ein kleines Objekt im JSON-format ein. Was können Sie jeweils
in den verschiedenen Formaten beobachten?`}),`
`]})]}),e.jsxs("section",{children:[e.jsx(n.h3,{children:"Wieso Binärcode?"}),e.jsxs(n.p,{children:[`Der Binärcode scheint extrem unübersichtlich zu sein, und somit zu nichts
zu gebrauchen, zumindest wenn wir den Binärcode direkt anschauen. Aber es
gibt Verwendungszwecke wo wir den Binärcode direkt brauchen, und er sogar
`,e.jsx(n.em,{children:"übersichtlicher"})," ist. Das ist in vor allem in der Verschlüsselung."]}),e.jsxs(n.p,{children:[`Moderne Verschlüsselungsverfahren verwenden jeweils die XOR-Operation
zusammen mit einem Schlüssel. Dann wird jedes `,e.jsx(n.code,{children:"Bit"}),` im Klartext und im
Schlüssel mit der XOR-Operation verrechnet, und ergibt dann das `,e.jsx(n.code,{children:"Bit"}),` im
Ciphertext. Moderne Verschlüsselungsverfahren verwenden natürlic noch mehr
Tricks, aber dies ist ein einfaches Beispiel für die XOR-Operation und
wieso dass Binärcode `,e.jsx(n.em,{children:"praktisch"})," ist."]})]}),e.jsxs(S,{title:"Beispiel: Verschlüsseln mit der XOR-Operation",children:[e.jsx(n.p,{children:`In dem folgenden Beispiel werden die Zeichenketten jeweils in ASCII
übersetzt, und dann im Binärformat dargestellt. Die dritte Zeile ist die
XOR-Operation der beiden ersten, das Resultat wird dann wieder in eine
Zeichenkette übersetzt und dargestellt.`}),e.jsx(n.p,{children:`Es ist an dem Beispiel einfach zu erkennen das es nicht möglich ist die
Verschlüsselung ohne Schlüssel zu knacken, da verschiedene Zeichen aus der
Eingabe, auf die gleiche Ausgabe geschickt werden. Das bedeutet dass Sie
die Verschlüsselung nur mit dem Schlüssel aufheben können.`}),e.jsx(V,{}),e.jsx(n.p,{children:"Nutzen Sie das Widget um die folgenden Fragen zu beantworten."}),e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Was genau macht die XOR-Operation?"}),`
`,e.jsx(n.li,{children:"Was passiert wenn Sie den gleichen Schlüssel wie die Eingabe verwenden?"}),`
`,e.jsx(n.li,{children:`Was passiert wenn Sie mehrere Leerzeichen als Schlüssel verwenden? Wieso
passiert das?`}),`
`,e.jsx(n.li,{children:`Was passiert wenn Sie die gleichen Buchstaben im Schlüssel und in der
Eingabe verwenden, aber jeweils in der Klein- bzw. Grossbuchstabenform.`}),`
`,e.jsxs(n.li,{children:["Können Sie die Eingabe und den Schlüssel so wählen, dass ",e.jsx(n.code,{children:"0123456789"}),`
herauskommt?`]}),`
`,e.jsx(n.li,{children:"Wie können Sie die Verschlüsselung rückgängig machen?"}),`
`,e.jsx(n.li,{children:`Was ist ein schlechter Schlüssel für diese Art der Verschlüsselung und
wieso?`}),`
`,e.jsx(n.li,{children:"Wieso ist diese Art der Verschlüsselung praktisch für den Computer?"}),`
`]})]}),e.jsxs("section",{children:[e.jsx(n.h3,{children:"Vom Binär ins Dezimalsystem umrechnen"}),e.jsx(n.p,{children:`Das Binärsystem funktioniert zur Basis 2 statt wie gewohnt zur Basis 10.
Die Umrechnung vom Binär- zum Dezimalsystem ist sehr simpel, Sie können
diesem Schema folgen.`}),e.jsxs(n.p,{children:["Jede Stelle im Binärsystem ist eine Ziffer mit dem Wert ",e.jsx(n.code,{children:"0"})," oder ",e.jsx(n.code,{children:"1"}),`. Sie
multiplizieren dann jede Ziffer mit der jeweiligen Stelle`]}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(W,{children:String.raw`{1001} \rightarrow 1 \cdot 2^3 + 0 \cdot 2^2 + 0 \cdot 2^1 + 1
  \cdot 2^0 = 9`})}),e.jsx(n.p,{children:`Berechnen Sie die jeweiligen dezimaldarstellungen von den gegebenen
Binärzahlen:`}),e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"10010"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"11010"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"10011"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"10100"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"110110"})}),`
`]}),e.jsx(n.p,{children:`Können Sie das auch in die andere Richtung berechnen? Suchen Sie einen Weg
wie man das umkehren kann.`})]})]})}function H(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(y,{...i})}):y(i)}export{H as default};
