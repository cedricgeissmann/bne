import{r as d,j as e}from"./index-B2qCcbtg.js";import{C as f}from"./Chapter-Bxzgta08.js";import{E as o}from"./Example-C700Bojd.js";import{M as w}from"./editor-CwV6J4ag.js";function S(){const[r,n]=d.useState({ball:{x:100,y:100,radius:10,dx:5,dy:5}}),[u,b]=d.useState(JSON.stringify(r,null,2)),t=d.useRef(null),c=d.useRef(null),x=()=>{const a=Object.entries(r).map(([s,i])=>(i.x+=i.dx,i.y+=i.dy,i.x+i.radius>t.current.width&&(i.x=t.current.width-i.radius,i.dx=-i.dx),i.x-i.radius<0&&(i.x=i.radius,i.dx=-i.dx),i.y+i.radius>t.current.height&&(i.y=t.current.height-i.radius,i.dy=-i.dy),i.y-i.radius<0&&(i.y=i.radius,i.dy=-i.dy),i));n(s=>a)},h=()=>{x(),g(),c.current=requestAnimationFrame(h)},g=()=>{const a=t.current,s=a.getContext("2d");s.clearRect(0,0,a.width,a.height),Object.entries(r).forEach(([i,l])=>{s.beginPath(),s.arc(l.x,l.y,l.radius||10,0,2*Math.PI),s.fillStyle=l.color||"white",s.fill(),s.closePath()})};d.useEffect(()=>(c.current=requestAnimationFrame(h),()=>cancelAnimationFrame(c.current)),[t.current]);const j=()=>{cancelAnimationFrame(c.current),n(a=>{try{return JSON.parse(u)}catch(s){return console.error(s),alert("Es gibt einen Fehler im JSON. Prüfen Sie die Syntax."),a}})},p=()=>{cancelAnimationFrame(c.current),c.current=requestAnimationFrame(h)},k=a=>{b(a)};return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[e.jsx(w,{language:"json",value:u,height:"300",theme:"vs-dark",onChange:k,automaticLayout:!0}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("button",{onClick:()=>j(),children:"Update"}),e.jsx("button",{onClick:()=>p(),children:"Play"})]}),e.jsx("canvas",{ref:t,width:"300px",height:"300px",style:{border:"1px solid black"}})]})}function m(r){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...r.components};return e.jsxs(f,{children:[e.jsx(n.h2,{children:"Objekte"}),e.jsx(n.p,{children:`Im letzten Kapitel haben wir uns schon mit Objekten beschäftigt. Dort haben wir
aber nur die Schreibweise verwendet, ohne uns anzuschauen wie die funktioniert.
Das holen wir in dem Kapitel nach.`}),e.jsx(n.p,{children:`Wenn wir uns mit Daten beschäftigen, sollten das schon ein wenig komplexere
Daten wie einfach nur Zahlen sein. Die einfachste Form von solchen Daten, sind
Objekte. Objekte sind eine Sammlung von Daten zu einem Objekt, wobei jeweils die
Eigenschaften von dem Objekt beschrieben werden. Komplexere Objekte schauen wir
später noch an.`}),e.jsxs(n.h3,{children:["Objekte in Javascript (",e.jsx(n.code,{children:"JSON"}),")"]}),e.jsxs(n.p,{children:[`Objekte sind eine der grundlegenden Datenstrukturen in Javascript. Es gibt
verschiedene Arten wie man Objekte in Javascript schreiben kann. Die einfachste
Methode ist ein Objekt als `,e.jsx(n.code,{children:"JSON"}),` anzugeben. Diese Syntax ist so praktisch und
einfach zu lesen, dass sehr viele Programme `,e.jsx(n.code,{children:"JSON"}),` auch nutzen, um über das
Internet zu kommunizieren oder das eigene Programm zu konfigurieren. VSCode
verwaltet die ganze Konfiguration im `,e.jsx(n.code,{children:"JSON"})," Format."]}),e.jsxs(o,{title:"Ball als Objekt",classes:"example",children:[e.jsx(n.p,{children:`Wenn wir einen Ball als Objekt beschreiben möchten, können wir das durch seine
Eigenschaften machen. Ein Ball hat einen Radius und eine Position. Wir könnten
auch noch eine Farbe dazu angeben. Als Objekt geschrieben, könnte der Ball so
aussehen:`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const ball = {
  radius: 10,
  x: 100,
  y: 100,
}
`})}),e.jsx(n.p,{children:`Wir können also all die Eigenschaften von einem Objekt zusammen gruppieren, und
als eine logische Einheit angeben. Das macht es einfach mit Objekten zu
arbeiten, da alles in einem Platz ist, und wir so alles direkt anschauen und
verändern können. Man müsste das nicht unbedingt so machen, man könnte auch
einige Variablen einführen. Hier sieht man aber sehr einfach dass dies schnell
unpraktisch werden kann, da man schnell die Übersicht verlieren kann.`})]}),e.jsx(n.h3,{children:"JSON (JavaScript Object Notation)"}),e.jsxs(n.p,{children:[`Wie oben bereits erwähnt wurde, nutzen viele Programme die Kommunikation über
`,e.jsx(n.code,{children:"JSON"}),`. Dieses Format ist fast genau gleich wie die Objekte die wir in
Javascript schreiben, zwingt uns aber dazu die exaktere Syntax zu verwenden. In
`,e.jsx(n.code,{children:"JSON"})," muss alles mit ",e.jsx(n.code,{children:'""'})," umfasst werden, ausser es ist eine Zahl."]}),e.jsxs(n.p,{children:["Der Ball von oben wird in ",e.jsx(n.code,{children:"JSON"})," also so geschrieben:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-JSON",children:`{
  "radius": 10,
  "x": 100,
  "y": 100
}
`})}),e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"JSON"}),` können wir ein Objekt auch nicht einer Variablen zuordnen, dafür
können wir komplexere Objekte erstellen. Genau dafür ist `,e.jsx(n.code,{children:"JSON"}),` auch gedacht,
wir möchten damit die Daten von komplexen Sachverhalten beschreiben.`]}),e.jsxs(o,{title:"Einfache Simulation beschreiben",classes:"exercise",children:[e.jsx(n.p,{children:`Wir möchten eine einfache Simulation erstellen, in der wir einen Ball an einer
bestimmten Position erstellen, und diesen dann in eine Richtung bewegen lassen.
Der Ball wird dann an den Wänden reflektiert. Die Logik übernimmt die Simulation
für uns, die wurde bereits geschrieben. Wir müssen nur noch die Eigenschaften
des Balls eingeben.`}),e.jsxs(n.p,{children:["In der Zelle unten, finden Sie die Simulation als ",e.jsx(n.code,{children:"JSON"}),` beschrieben. Führen Sie
die folgenden Änderungen hinzu.`]}),e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Ändern Sie den Radius des Balls."}),`
`,e.jsx(n.li,{children:"Der Ball soll sich nur in der horizontalen Richtung bewegen."}),`
`,e.jsx(n.li,{children:"Der Ball soll sich nur in der vertikalen Richtung bewegen."}),`
`,e.jsx(n.li,{children:"Ändern Sie die Startposition des Balls in die untere rechte Ecke."}),`
`,e.jsx(n.li,{children:"Fügen Sie eine Farbe zum Ball hinzu."}),`
`,e.jsx(n.li,{children:"Fügen Sie einen weiteren Ball hinzu."}),`
`]}),e.jsx(S,{}),e.jsx(n.p,{children:`Es braucht natürlich den Code der die Simulation erst durchführbar macht. In der
Regel ist dies aber eine GameEngine oder ein anderes Framework, das bereits
existiert. Wir müssen dann nur noch die Objekte beschreiben.`})]}),e.jsx(n.h3,{children:"Daten und Logik trennen"}),e.jsx(n.p,{children:`Wir haben es im letzten Kapitel schon gesehen, und auch hier nochmals ganz kurz.
Eine Anwendung besteht immer aus Daten und Logik, wobei wir beides von einander
trennen möchten. Da wir uns im Moment nur mit den Daten beschäftigen, müssen wir
uns nicht mit der Logik (also dem programmieren) herumschlagen. Wir müssen aber
wissen was ein Programm mit den Daten macht, und welche Daten es braucht. Dabei
ist es sehr wichtig auf die korrekten Eigenschaften zu schauen, denn der
Computer kann nicht raten welche Eigenschaft Sie meinen, da beim erstellen der
Logik schon darauf geachtet wurde, welche Eigenschaften verwendet werden.`}),e.jsxs(o,{title:"Aufgabe: Korrekte Eigenschaften",classes:"exercise",children:[e.jsxs(n.p,{children:[`Stellen Sie sich auch den Standpunkt das die Eigenschaften nur ungefähr richtig
heissen müssen. Also in dem Simulationsbeispiel von oben, können Sie alle diese
Schlüssel für die $x$-Koordinate verwenden: `,e.jsx(n.code,{children:"x, X, posx, posX, pos_x"}),` und
`,e.jsx(n.code,{children:"pos_X"}),". Wieso ist es gut dass Sie all diese Schlüssel verwenden können?"]}),e.jsx(n.p,{children:`Nehmen Sie jetzt den Standpunkt als Entwickler der Logik für dieses Programm
ein. Sehen Sie ein Problem mit dieser Anforderung? Finden Sie es eine gute Idee?`})]})]})}function E(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(m,{...r})}):m(r)}export{E as default};
