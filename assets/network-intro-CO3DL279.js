import{j as e,R as u}from"./index-B2qCcbtg.js";import{C as x}from"./Chapter-Bxzgta08.js";import{E as h}from"./Example-C700Bojd.js";import{A as j}from"./Audio-CGOu9zfM.js";import{P as w,S as i,B as r}from"./Reveal-CWHqvlP7.js";import"./night-DSUKmcl1.js";const a=({url:t})=>{const n=new URL(t),o=[{label:"Protocol",value:n.protocol.replace(":",""),separator:"://"},{label:"Username",value:n.username,separator:":"},{label:"Password",value:n.password,separator:"@"},{label:"Host",value:n.hostname,separator:n.port?":":"/"},{label:"Port",value:n.port,separator:"/"},{label:"Pathname",value:n.pathname.replace("/",""),separator:""},{label:"Search",value:n.search,separator:""},{label:"Hash",value:n.hash,separator:""}],g=["red","green","blue","orange","purple","teal","magenta","brown","cyan","lime"];return e.jsx("div",{style:{display:"flex",gap:"0",width:"100%",fontSize:"1.5rem",justifyContent:"center",alignItems:"center"},children:o.map((l,c)=>e.jsxs(u.Fragment,{children:[e.jsx("span",{style:{position:"relative",cursor:"pointer",color:g[c],transition:"font-weight 0.2s",display:"inline-block",width:"max-content",minWidth:"max-content"},onMouseEnter:d=>{d.target.style.fontWeight="bold",d.target.style.fontSize="1.7rem";const s=document.createElement("div");s.textContent=l.label,s.style.position="absolute",s.style.backgroundColor="black",s.style.color="white",s.style.padding="5px",s.style.borderRadius="3px",s.style.top="30px",s.style.left="50%",s.style.transform="translateX(-50%)",s.style.zIndex="1000",d.target.appendChild(s)},onMouseLeave:d=>{d.target.style.fontWeight="normal",d.target.style.fontSize="1.5rem";const s=d.target.querySelector("div");s&&d.target.removeChild(s)},children:l.value}),c<o.length-1&&l.value&&e.jsx("span",{style:{color:"white",userSelect:"none"},children:l.separator})]},c))})};function m(t){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(x,{children:[e.jsx("h2",{id:"networks",children:"Netzwerke"}),e.jsxs(w,{children:[e.jsxs(i,{children:[e.jsx("h2",{id:"networks",children:"Netzwerke"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Datenaustausch zwischen Geräten."}),e.jsx("li",{children:"Beispiel: Webseite besuchen."})]})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"Server-Client Modell"}),e.jsx(r,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:e.jsx("img",{src:"./svg/server-client-diagram.svg",alt:"Network Diagram",width:"100%"})})}),e.jsx(r,{children:e.jsxs(n.p,{children:["Beim ",e.jsx("strong",{children:"Server-Client"}),`-Modell sind immer 2 Parteien
involviert.`]})}),e.jsx(r,{children:e.jsxs(n.p,{children:["Der ",e.jsx("strong",{children:"Client"}),` ist die Anwendung, die eine Anfrage
stellt.`]})}),e.jsx(r,{children:e.jsxs(n.p,{children:["Der ",e.jsx("strong",{children:"Server"}),` ist die Anwendung, die die Antwort zur
Verfügung stellt.`]})}),e.jsx(r,{children:e.jsx(n.p,{children:`Das kann auf dem gleichen Gerät passieren, oder wie meistens über
das Internet.`})}),e.jsx(r,{children:e.jsx(n.p,{children:`Damit diese Anwendungen miteinander kommunizieren können, braucht es
ein Protokoll.`})}),e.jsx(r,{children:e.jsxs(n.p,{children:["Beim Abrufen von Webseiten wird dabei ",e.jsx("strong",{children:"HTTP"})," verwendet."]})}),e.jsx(r,{children:e.jsxs(n.p,{children:["Dabei steht ",e.jsx("strong",{children:"HTTP"})," für"," ",`
`,e.jsx("strong",{children:"Hypertext Transfer Protocol"}),"."]})}),e.jsx(r,{children:e.jsxs(n.p,{children:["Wenn die Verbindung verschlüsselt sein soll, dann ist es"," ",`
`,e.jsx("strong",{children:"HTTPS"}),"."]})})]}),e.jsxs(i,{children:[e.jsx("h2",{id:"url-presentation",children:"Webadressen"}),e.jsxs(r,{children:[e.jsxs(n.p,{children:[`Um auf eine Webseite zugreifen zu können, brauchen wir einen Link bzw.
eine Webadresse. Der korrekte Begriff dafür ist `,e.jsx("strong",{children:"URL"})," ",`
(Uniform Resource Locator). Eine `,e.jsx("strong",{children:"URL"}),` ist nach dem
folgenden Schema aufgebaut:`]}),e.jsx(a,{url:"https://www.gym-muttenz.ch/index.php"})]})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"URL"}),e.jsx(r,{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Protokoll (Protocol):"}),` Gibt an, wie der Computer mit
der Webseite kommuniziert (z.B. http, https).`]})}),e.jsx(r,{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Benutzername (Username):"}),` Optionaler Name zur
Anmeldung auf der Webseite.`]})}),e.jsx(r,{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Passwort (Password):"}),` Optionales Passwort zur
Anmeldung.`]})}),e.jsx(r,{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Host (Host):"}),` Die Adresse der Webseite (z.B.
www.beispiel.de).`]})}),e.jsx(r,{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Pfad (Pathname):"}),` Zeigt die genaue Seite oder Datei
auf der Webseite an (z.B. /startseite).`]})}),e.jsx(r,{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Suchparameter (Search):"}),` Zusätzliche Informationen,
die an die Webseite übergeben werden (z.B. ?suche=blumen).`]})}),e.jsx(r,{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Anker (Hash):"}),` Verweist auf eine bestimmte Stelle
auf der Webseite (z.B. #kontakt).`]})})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"URL Beispiele"}),e.jsxs(r,{children:[e.jsxs(n.p,{children:[`Wenn Sie bei Google etwas suchen möchten, dann können Sie das direkt
in der
`,e.jsx("strong",{children:"URL"})," angeben. Es ist nicht immer ",e.jsx("code",{children:"q="}),` aber
das können Sie schnell herausfinden wenn Sie eine Suche mit der
jeweiligen Suchmaschine machen.`]}),e.jsx(a,{url:"https://www.google.com/search?q=netzwerke"})]}),e.jsxs(r,{children:[e.jsxs(n.p,{children:["Der ",e.jsx(n.strong,{children:"Anker"})," oder oftmals auch als ",e.jsx(n.strong,{children:"Hash"}),` bezeichnet, gibt uns eine
praktische Möglichkeit um zu einem Element mit der ID des Ankers zu springen.
Manchmal wird es auch anders verwendet, aber die meisten Browser und Webseiten
verwenden es so, dass man direkt zum Element mit der `,e.jsx(n.strong,{children:"Anker-ID"}),` gescrollt
wird.`]}),e.jsx(a,{url:"https://gymmu.github.io/gym-inf/network-intro#url"})]}),e.jsxs(r,{children:[e.jsxs(n.p,{children:["Wie könnten auch direkt den Benutzername und das Passwort in der ",e.jsx(n.strong,{children:"URL"}),`
mitschicken. Das sollte jedoch niemals gemacht werden, denn die `,e.jsx(n.strong,{children:"URL"}),` könnte
so in den Logeinträgen auf dem Webserver gespeichert werden, oder in der
Browserhistory. Beides ist nicht verschlüsselt!!! In einem lokalen Netzwerk,
kann so etwas aber praktisch sein.`]}),e.jsx(a,{url:"http://username:password@localhost:631/index.html"})]})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"Internet"}),e.jsx(r,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:e.jsx("img",{src:"./svg/network-diagram.svg",alt:"Network Diagram",width:"100%"})})}),e.jsx(r,{children:e.jsxs("ul",{children:[e.jsx("li",{className:"fragment",children:"Viele verschiedene Teile, die zusammenarbeiten."}),e.jsx("li",{className:"fragment",children:"Webserver, DNS-Server, Router, IP-Adressen, Modem/ISP, Client."}),e.jsx("li",{className:"fragment",children:"Router verbinden Geräte und leiten Daten weiter."}),e.jsx("li",{className:"fragment",children:"DNS übersetzt Domain-Namen in IP-Adressen."}),e.jsx("li",{className:"fragment",children:"IP-Adressen identifizieren Geräte im Netzwerk."}),e.jsx("li",{className:"fragment",children:"ISP stellt Internetzugang bereit."})]})})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"VPN (Virtual Private Network)"}),e.jsxs("ul",{children:[e.jsx("li",{className:"fragment",children:"Verschlüsselt Datenpakete und leitet sie über VPN-Server."}),e.jsx("li",{className:"fragment",children:"Verbirgt die echte IP-Adresse und den Standort."}),e.jsx("li",{className:"fragment",children:"Schützt vor Überwachung durch ISP."}),e.jsx("li",{className:"fragment",children:"Vertrauen zum VPN-Anbieter ist wichtig."})]})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"NAT (Network Address Translation)"}),e.jsx(r,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:e.jsx("img",{src:"./svg/nat-diagram.svg",alt:"NAT Diagram",width:"100%"})})}),e.jsx(r,{children:e.jsxs("ul",{children:[e.jsx("li",{className:"fragment",children:"Übersetzt private IP-Adressen in öffentliche IP-Adresse."}),e.jsx("li",{className:"fragment",children:"Ermöglicht mehreren Geräten die Nutzung einer öffentlichen IP."}),e.jsx("li",{className:"fragment",children:"Bietet Schutz vor direktem Zugriff von außen."})]})})]}),e.jsxs(i,{children:[e.jsx("h2",{children:"Firewalls"}),e.jsxs("ul",{children:[e.jsx("li",{className:"fragment",children:"Kontrollieren den Datenverkehr zwischen Netzwerken."}),e.jsx("li",{className:"fragment",children:"Schützen vor unerwünschtem Zugriff und schädlichen Daten."}),e.jsx("li",{className:"fragment",children:"Wichtig für Netzwerksicherheit."}),e.jsx("li",{className:"fragment",children:"Port-Forwarding ermöglicht Zugriff auf lokale Server."})]})]})]}),e.jsxs(n.p,{children:[`Computernetzwerke werden verwendet um Daten zwischen verschiedenen Geräten
auszutauschen. Das einfachste Beispiel ist der Besuch einer Webseite. Damit das
funktionieren kann, müssen Sie von Ihrem Gerät eine Anfrage an ein anderen Gerät
schicken, und sagen welche Webseite sie angezeigt haben möchten. Dieses
Kommunikationsmodell bezeichnet man als ein
`,e.jsxs(n.a,{href:"#server-client",children:[e.jsx(n.strong,{children:"Server-Client"}),"-Modell"]}),"."]}),e.jsxs(h,{id:"server-client",title:"Server-Client Modell",children:[e.jsxs(n.p,{children:["Beim ",e.jsx("strong",{children:"Server-Client"}),"-Modell sind immer 2 Parteien involviert. Der ",e.jsx("strong",{children:"Client"}),`
ist die Anwendung, die eine Anfrage stellt. Der `,e.jsx("strong",{children:"Server"}),` ist die Anwendung,
die die Antwort zur Verfügung stellt. Das kann auf dem gleichen Gerät passieren,
oder wie meistens über das Internet. Damit diese Anwendungen miteinander
kommunizieren können, braucht es ein Protokoll. Beim Abrufen von Webseiten wird
dabei `,e.jsx("strong",{children:"HTTP"})," verwendet. Dabei steht ",e.jsx("strong",{children:"HTTP"})," für ",e.jsx("strong",{children:`Hypertext Transfer
Protocol`}),`. Wenn die Verbindung verschlüsselt sein soll, dann ist es
`,e.jsx("strong",{children:"HTTPS"}),"."]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:e.jsx("img",{src:"./svg/server-client-diagram.svg",alt:"Server Client Model Diagram",width:"100%"})})]}),e.jsxs("section",{children:[e.jsx("h3",{id:"url",children:"Webadressen"}),e.jsxs(n.p,{children:[`Um auf eine Webseite zugreifen zu können, brauchen wir einen Link bzw. eine
Webadresse. Der korrekte Begriff dafür ist `,e.jsx("strong",{children:"URL"}),` (Uniform
Resource Locator). Eine `,e.jsx("strong",{children:"URL"}),` ist nach dem folgenden Schema
aufgebaut:`]}),e.jsx(a,{url:"https://www.gym-muttenz.ch/index.php"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Protokoll (Protocol):"}),` Gibt an, wie der Computer mit der
Webseite kommuniziert (z.B. http, https).`]})}),e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Benutzername (Username):"}),` Optionaler Name zur Anmeldung auf
der Webseite.`]})}),e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Passwort (Password):"})," Optionales Passwort zur Anmeldung."]})}),e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Host (Host):"}),` Die Adresse der Webseite (z.B.
www.beispiel.de).`]})}),e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Pfad (Pathname):"}),` Zeigt die genaue Seite oder Datei auf der
Webseite an (z.B. /startseite).`]})}),e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Suchparameter (Search):"}),` Zusätzliche Informationen, die an
die Webseite übergeben werden (z.B. ?suche=blumen).`]})}),e.jsx("li",{children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Anker (Hash):"}),` Verweist auf eine bestimmte Stelle auf der
Webseite (z.B. #kontakt).`]})})]}),e.jsx(n.p,{children:"Wenn Sie bei Google etwas suchen möchten, dann können Sie das direkt in der"}),e.jsxs(n.p,{children:[e.jsx("strong",{children:"URL"})," angeben. Es ist nicht immer ",e.jsx("code",{children:"q="}),` aber das können
Sie schnell herausfinden wenn Sie eine Suche mit der jeweiligen Suchmaschine
machen.`]}),e.jsx(a,{url:"https://www.google.com/search?q=netzwerke"}),e.jsxs(n.p,{children:["Der ",e.jsx(n.strong,{children:"Anker"})," oder oftmals auch als ",e.jsx(n.strong,{children:"Hash"}),` bezeichnet, gibt uns eine
praktische Möglichkeit um zu einem Element mit der ID des Ankers zu springen.
Manchmal wird es auch anders verwendet, aber die meisten Browser und Webseiten
verwenden es so, dass man direkt zum Element mit der `,e.jsx(n.strong,{children:"Anker-ID"}),` gescrollt
wird.`]}),e.jsx(a,{url:"https://gymmu.github.io/gym-inf/network-intro#url"}),e.jsxs(n.p,{children:["Wie könnten auch direkt den Benutzername und das Passwort in der ",e.jsx(n.strong,{children:"URL"}),`
mitschicken. Das sollte jedoch niemals gemacht werden, denn die `,e.jsx(n.strong,{children:"URL"}),` könnte
so in den Logeinträgen auf dem Webserver gespeichert werden, oder in der
Browserhistory. Beides ist nicht verschlüsselt!!! In einem lokalen Netzwerk,
kann so etwas aber praktisch sein.`]}),e.jsx(a,{url:"http://username:password@localhost:631/index.html"}),e.jsxs(n.p,{children:["Mit dieser ",e.jsx(n.strong,{children:"URL"})," kann man sich beim ",e.jsx(n.em,{children:"Linux"}),`-Systemen beim lokalen
Druckerservice anmelden. Da die Verbindung dann nur zum eigenen Computer ist,
braucht es keine Verschlüsselung, und das Passwort kann auch übermittelt werden.
Danach sollte aber die Browserhistory gelöscht werden.`]}),e.jsxs(n.p,{children:["Man kann natürlich alles miteinander kombinieren, und über die ",e.jsx(n.strong,{children:"URL"}),` bereits
sehr viele Daten an den Webserver schicken. Aber wie genau finden die Daten denn
zum Webserver?`]})]}),e.jsxs(h,{id:"internet",title:"Internet",children:[e.jsx(n.p,{children:`Das Internet besteht aus ganz vielen verschiedenen Teilen. Wir schauen uns eine
vereinfachte Darstellung davon an und versuchen die wichtigsten Teile zu
verstehen.`}),e.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:e.jsx("img",{src:"./svg/network-diagram.svg",alt:"Network Diagram",width:"100%"})}),e.jsx(n.h4,{children:"Webserver"}),e.jsxs(n.p,{children:[`Das sind Computer die irgendwo am Netzwerk angehängt sind, und über eine
öffentliche `,e.jsx(n.strong,{children:"IP-Adresse"}),` verfügen. Ein Webserver nimmt Anfragen von einem
Client entgegen, und schickt meistens eine Webseite, oder einfach nur Daten
zurück.`]}),e.jsx(n.h4,{children:"DNS-Server"}),e.jsxs(n.p,{children:[`Das sind einige wenige spezielle Server die auf der ganzen Welt verteilt sind.
Ein DNS-Server speichert welche `,e.jsx(n.strong,{children:"IP-Adresse"})," zu welchem ",e.jsx(n.strong,{children:"Domain-Name"}),` passt.
Wenn man also die `,e.jsx(n.strong,{children:"IP-Adresse"})," von ",e.jsx(n.code,{children:"github.com"}),` nicht auswendig weiss, kann
man das beim `,e.jsx(n.strong,{children:"DNS-Server"}),` anfragen. Das passiert automatisch, und wird dann
auf allen Zwischengeräten gespeichert, so dass nicht jedes mal eine Anfrage an
den `,e.jsx(n.strong,{children:"DNS-Server"})," gemacht werden muss."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"DNS"})," steht übrigens für Domain-Name-System."]}),e.jsx(n.h4,{children:"Router"}),e.jsxs(n.p,{children:["Die ",e.jsx(n.strong,{children:"Router"}),` sind das Herzstück vom Internet. Damit Daten durch das Internet
geschickt werden können, müssen mehrere `,e.jsx(n.strong,{children:"Router"}),` miteinander verbunden sein.
Ein Router merkt sich dann immer mit welchen Geräten er verbunden ist. Wenn nun
einen Anfrage kommt, kann der Router diese gezielt an den nächsten Router
weiterleiten, oder wenn es eine ganz neue Verbindung ist, kann er einfach an
alle weiterleiten die er kennt.`]}),e.jsx(n.h4,{children:"IP-Adresse"}),e.jsxs(n.p,{children:["Alle Geräte die im Internet sind, haben eine ",e.jsx(n.strong,{children:"IP-Adresse"}),`. Die Geräte
untereinander sprechen sich über die `,e.jsx(n.strong,{children:"IP-Adresse"}),` an, nicht über den
`,e.jsx(n.strong,{children:"Domain-Name"}),", so wie wir das machen würden."]}),e.jsxs(n.p,{children:["Eine ",e.jsx(n.strong,{children:"IPv4-Adresse"}),` besteht aus vier Zahlen, die durch Punkte getrennt sind.
Jede Zahl kann einen Wert von 0 bis 255 haben. Eine IPv4-Adresse besteht aus 4
Bytes (32 Bit). Beispiele für IPv4-Adressen sind:`]}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Localhost:"}),` 127.0.0.1 (wird verwendet, um auf den eigenen Computer zu
verweisen)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lokales Netzwerk:"}),` 192.168.1.1 (häufig verwendete Adresse für Router in
privaten Netzwerken)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DNS-Server:"})," 8.8.8.8 (ein öffentlicher DNS-Server von Google)"]}),`
`]}),e.jsx(n.h4,{children:"Modem / ISP"}),e.jsxs(n.p,{children:["Ein ",e.jsx(n.strong,{children:"IPS"}),` ist Ihr Internet-Service-Provider, also die Firma die Ihnen den
Anschluss and Internet anbietet. Bei den meisten wird das `,e.jsx(n.em,{children:"Swisscom"}),", ",e.jsx(n.em,{children:"Sunrise"}),`
oder `,e.jsx(n.em,{children:"Cablecom"})," sein. Diese Firma stellt Ihnen ein ",e.jsx(n.strong,{children:"Modem"}),` zur Verfügung,
welches über das Internet erreichbar ist (es hat eine öffentliche IP-Adresse).
Das `,e.jsx(n.strong,{children:"Modem"})," funktioniert dann wie ein ",e.jsx(n.strong,{children:"Router"}),`. Es kennt alle Geräte im
lokalen Netzwerk, und kann Daten zu diesen schicken. Wenn Daten nach draussen
sollen, dann schickt es diese einfach zum nächsten `,e.jsx(n.strong,{children:"Router"}),`. Der ist dann
meistens beim `,e.jsx(n.strong,{children:"ISP"}),` selbst, und von dort werden die Daten dann weiter
geleitet.`]}),e.jsxs(n.p,{children:["Das heisst also, Ihr ",e.jsx(n.strong,{children:"ISP"}),` weiss immer ganz genau welche Webseiten Sie
besuchen. Mit einem `,e.jsx(n.strong,{children:"VPN"}),` kann man sich davor schützen, die Daten liegen dann
aber beim `,e.jsx(n.strong,{children:"VPN"}),"."]}),e.jsx(n.h4,{children:"Client"}),e.jsxs(n.p,{children:[`Das sind die Endgeräte, wie Laptops und Smartphones die an einem lokalen Netz
angehängt sind. Wenn wir zwischen 2 Geräten kommunizieren möchten, dann geht das
immer über ein weiteres Gerät (z.B. das `,e.jsx(n.strong,{children:"Modem"}),`). Es ist schon auch möglich
eine wirklich direkte Verbindung aufzubauen, aber das ist oftmals zu mühsam. Nun
sollte auch klar sein, dass alle Verbindungen und Daten im Internet abgehört
werden können. Denn alle Geräte sind miteinander verbunden. Wenn man es schaft
sich bei einer Verbindung dazwischen zu schalten, dann kann man den ganzen
Verkehr auf dieser Verbindung abhören und auswerten. In diesem Fall spricht man
von einer `,e.jsx(n.strong,{children:"man-in-the-middle"}),`-Attacke. Um sich davon zumindest teilweise zu
schützen, ist es wichtig das nur Verbindungen über `,e.jsx(n.strong,{children:"HTTPS"})," verwendet werden."]})]}),e.jsx("h2",{id:"vpn",children:"Anonym im Internet (VPN)"}),e.jsxs(n.p,{children:["Sie haben sicher schon davon gehört das Sie mit einem ",e.jsx(n.strong,{children:"VPN"}),` anonym und sicher
im Internet surfen können. Sie können auch ganz eifach den Standort wechseln
wenn Sie ein `,e.jsx(n.strong,{children:"VPN"}),` verwenden. Schauen wir uns doch zusammen an, was es damit
auf sich hat.`]}),e.jsxs(n.p,{children:[`Zuerst müssen Sie verstehen wie man einem Gerät im Internet einen geografischen
Standort zuweisen kann. Das ist ganz einfach, Ihr `,e.jsx(n.strong,{children:"ISP"}),` hat das in einer
Datenbank registriert. Wie genau die Adresse tatsächlich ist, hängt vom `,e.jsx(n.strong,{children:"ISP"}),`
ab. Das kann Ihre exakte Adresse sein, oder einfach nur der Ort in dem Sie
registriert sind. Das reicht aber schon aus, um gewisse Inhalte für Sie zu
blockieren. Das passiert ganz oft bei `,e.jsx(n.em,{children:"Netflix"}),` oder ähnlichen anbietern, wenn
es wegen der Lizenz nicht möglich ist einen Inhalt in anderen Ländern zu
publizieren. Um das zu umgehen, verwenden viele ein `,e.jsx(n.strong,{children:"VPN"}),`. Aber was passier
bei einem `,e.jsx(n.strong,{children:"VPN"})," denn genau."]}),e.jsxs(n.p,{children:["Ein ",e.jsx(n.strong,{children:"VPN"}),` ist ein Programm das bei Ihnen auf dem Computer läuft. Bevor irgend
ein Datenpacket verschickt wird, wird das Packet verschlüsselt, dann wird das
verschlüsselte Packet an den `,e.jsx(n.strong,{children:"VPN"}),`-Anbieter geschickt. Dort wird es entpackt
und dann erneut an das eigentliche Ziel verschickt. Sie sieht es für den
Empfänger so aus, als ob die Daten vom `,e.jsx(n.strong,{children:"VPN"}),`-Server direkt kommen, und nicht
von Ihnen. Auf dem Rückweg werden die Daten dann wieder zum `,e.jsx(n.strong,{children:"VPN"}),` geschickt,
wieder verschlüsselt, und zurück an Sie geschickt.`]}),e.jsxs(n.p,{children:["Wenn jemand (Ihr ",e.jsx(n.strong,{children:"ISP"}),` zum Beispiel) diese Verbindung nun abhört, sieht man
nur dass Sie mit dem `,e.jsx(n.strong,{children:"VPN"})," kommunizieren. Ihr ",e.jsx(n.strong,{children:"ISP"}),` kann Sie also nicht mehr
ausspionieren. Früher (heute noch immer) wird diese Technik gerne verwendet um
sich in Firmennetze zu verbinden. Daher der Name `,e.jsx(n.strong,{children:"virtual private network"}),"."]}),e.jsxs(n.p,{children:["Ob Sie nun mit einem ",e.jsx(n.strong,{children:"VPN"}),` tatsächlich anonym im Internet unterwegs sind,
können Sie sich sehr einfach ausdenken. Ihr `,e.jsx(n.strong,{children:"ISP"}),` und alle anderen die
mithören würden, können Ihre Verbindungen nicht mehr lesen, oder das Ziel davon
sehen. Wenn es vom `,e.jsx(n.strong,{children:"VPN"}),` weitergeht, kann das Ziel nicht sehen wer der
Absender war (ausser natürlich Sie sind mit einem Account eingeloggt). Es wirkt
also als seien Sie tatsächlich anonym, ausser natürlich für den
`,e.jsx(n.strong,{children:"VPN"}),`-Anbieter. Da müssen Sie sich dann fragen wie sehr Sie dem Vertrauen
möchten. denn nimmt man das mit der `,e.jsx(n.em,{children:"No Log Policy"}),` wörtlich, merken Sie ganz
schnell das es technisch garnicht möglich ist. Bis eine Antwort zurück zum
Absender geschickt wurde, muss ein `,e.jsx(n.strong,{children:"VPN"}),` speichern woher die Anfrage gekommen
ist, und wo sie hingeht, sonst kann die Antwort nicht zugestellt werden. Danach
kann man aber alles löschen. Ob das tatsächlich gemacht wird, ist aber fraglich.
Denn Ihr `,e.jsx(n.strong,{children:"ISP"}),` behält all Ihre Verbindungsdaten über mehrere Jahre. Technisch
ist es also sicher möglich solche grossen Datenmengen zu speichern.`]}),e.jsxs(n.p,{children:[`Man kann also sagen dass Sie ein wenig anonymer im Internet unterwegs sind, wenn
Sie ein `,e.jsx(n.strong,{children:"VPN"}),` verwenden. Die Problematik wer all Ihre Verbindungsdaten hat,
verschiebt sich dann einfach vom `,e.jsx(n.strong,{children:"ISP"})," zum ",e.jsx(n.strong,{children:"VPN"}),"."]}),e.jsxs(h,{id:"nat",title:"NAT (Network Address Translation)",children:[e.jsxs(n.p,{children:["Es git ein sehr grosses Problem mit den ",e.jsx(n.strong,{children:"IP-Adressen"}),`. Es hat nicht genügend
Adressen für alle Geräte, deshalb hat man sich einen Tick mit `,e.jsx(n.strong,{children:"NAT"}),` einfallen
lassen.`]}),e.jsxs(n.p,{children:[`In einem lokalen Netzwerk haben viele Geräte private IP-Adressen, die nur
innerhalb dieses Netzwerks gültig sind. Damit diese Geräte trotzdem mit dem
Internet kommunizieren können, wird `,e.jsx(n.strong,{children:"NAT"})," verwendet."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NAT"})," steht für ",e.jsx(n.em,{children:"Network Address Translation"}),`. Es ist eine Technik, bei der
ein Router die privaten IP-Adressen der Geräte im lokalen Netzwerk in eine
öffentliche IP-Adresse übersetzt, die im Internet verwendet wird.`]}),e.jsx(n.p,{children:`Wenn ein Gerät im lokalen Netzwerk eine Anfrage ins Internet schickt, ersetzt
der Router die private IP-Adresse durch seine eigene öffentliche IP-Adresse. Die
Antwort vom Internet wird dann vom Router wieder an das richtige Gerät im
lokalen Netzwerk weitergeleitet.`}),e.jsx(n.p,{children:`Dadurch können viele Geräte in einem lokalen Netzwerk dieselbe öffentliche
IP-Adresse teilen, was die Anzahl der benötigten öffentlichen IP-Adressen
reduziert.`}),e.jsxs(n.p,{children:["Ein weiterer Vorteil von ",e.jsx(n.strong,{children:"NAT"}),` ist, dass es eine Art Schutz bietet, da Geräte
im lokalen Netzwerk von aussen nicht direkt erreichbar sind.`]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:e.jsx("img",{src:"./svg/nat-diagram.svg",alt:"NAT Diagramm",width:"100%"})})]}),e.jsxs("section",{children:[e.jsx("h2",{id:"firewalls",children:"Firewalls"}),e.jsx(n.p,{children:`Firewalls sind Sicherheitsmechanismen, die den Datenverkehr zwischen
verschiedenen Netzwerken kontrollieren. Sie entscheiden, welche Verbindungen
erlaubt sind und welche blockiert werden.`}),e.jsx(n.p,{children:`Eine Firewall kann entweder als Software auf einem Gerät oder als eigenständiges
Gerät im Netzwerk eingesetzt werden.`}),e.jsx(n.p,{children:`Firewalls schützen Netzwerke vor unerwünschtem Zugriff von aussen und helfen
dabei, schädliche Datenpakete zu erkennen und zu blockieren.`}),e.jsx(n.p,{children:`Sie sind ein wichtiger Bestandteil der Netzwerksicherheit und tragen dazu bei,
dass nur vertrauenswürdige Verbindungen zugelassen werden.`}),e.jsxs(n.p,{children:[`Wenn Sie einen Server bei sich zu Hause laufen lassen möchten, damit andere auf
Ihren Server zugreifen können, müssen Sie die nötigen Ports in der Firewall
freischalten. Das machen Sie auf dem `,e.jsx(n.strong,{children:"Modem"}),` und der Vorgang nennt sich dort
oftmals `,e.jsx(n.em,{children:"Port-Forwarding"}),`. Sie sagen dem Gerät also dass Verbindungen auf einem
bestimmten Port, zum Beispiel 5173 an eine lokale `,e.jsx(n.strong,{children:"IP-Adresse"}),` geschickt
werden soll. So verwenden Sie dann `,e.jsx(n.strong,{children:"NAT"}),` um Ihren Server für das ganze
Internet bereitzustellen.`]})]}),e.jsxs(h,{id:"summary",title:"Zusammenfassung",classes:"example",children:[e.jsx(n.p,{children:`Hier finden Sie eine Zusammenfassung zum ganzen Artikel. Die Zusammenfassung
wurde von einer KI generiert und hat somit keine Garantie auf Korrektheit.
Prüfen Sie Aussagen in der Zusammenfassung besser mit der Webseite ab. Falls
immernoch Unklarheit besteht, fragen Sie am besten gleich nach. Aber üben Sie
sich zuerst im kritischen Denken.`}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(j,{src:"./assets/audio/podcast-network.mp3"})})]})]})}function S(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m(t)}export{S as default};
