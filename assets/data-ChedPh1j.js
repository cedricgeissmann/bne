import{j as e}from"./index-B2qCcbtg.js";import{C as a}from"./Chapter-Bxzgta08.js";import{E as i}from"./Example-C700Bojd.js";import"./hexy-CgJrN9Xi.js";import"./editor-CwV6J4ag.js";function r(s){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(a,{children:[e.jsx(n.h2,{children:"Daten"}),e.jsxs(n.p,{children:["In der Informatik sind ",e.jsx(n.strong,{children:"Daten"}),` eines der wichtigsten Konzepte, denn die Daten
beinhalten die Informationen für die Algorithmen. Aber was genau heisst das, und
was verstehen wir dann unter Daten?`]}),e.jsxs(n.p,{children:["Aus dem ",e.jsx(n.code,{children:"Javascript"}),`-Projekt, wissen Sie noch das wir immer auf Text gearbeitet
haben. Wir haben diesen Text immer in einen neuen umgewandelt. Der Text in
diesen Ausfgaben waren die Daten und die Funktionen die Sie geschrieben haben,
das war der Algorithmus der über die Daten läuft.`]}),e.jsx(n.p,{children:`Für uns sind Daten also Informationen die im Computer gespeichert sind. Das
können dann Zeichenketten, Zahlen, Listen und Wahrheitswerte sein. Das sind die
Dinge die Sie bis jetzt schon gesehen haben. Aber auch der Code ist eine Form
von Daten, denn auch dieser muss auf dem Comupter gespeichert werden, so das wir
die Algorithmen auch ausführen können. Wir können also sagen dass alles was im
(Arbeits-)speicher des Computers ist, zählen wir als Daten.`}),e.jsx(n.h3,{children:"Wozu brauchen wir Daten?"}),e.jsxs(n.p,{children:[`Ganz einfach, für den Austausch von Informationen. Stellen Sie sich vor Sie
würden Webseiten besuchen auf denen keine Daten sind, das wäre recht sinnfrei
und auch langweilig. Und auch überhaupt nicht möglich, denn das `,e.jsx(n.code,{children:"HTML"})," und ",e.jsx(n.code,{children:"CSS"}),`
muss zuerst an Ihren Computer geschickt werden, bevor Sie die Webseite überhaupt
anzeigen können. Daten sind also die Grundlage von allem in der Informatik.`]}),e.jsxs(n.p,{children:["Wenn Sie an den ",e.jsx(n.em,{children:"Inhalt"}),` einer Webseite denken, dann beschreiben die Daten
Informationen aus der realen Welt. Wir können also Daten (oder besser gesagt
Techniken aus der Datenrepresentation) für das Modellieren der realen Welt
verwenden.`]}),e.jsxs(i,{title:"Modellieren mit Daten",classes:"example",children:[e.jsx(n.p,{children:`Objekte aus der realen Welt haben alle unterschiedliche Eigenschaften. Wenn wir
ähnliche Objekte zusammen nehmen, können wir daraus eine Klasse machen, wo alle
Objekte die gleichen Eigenschaften, aber mit unterschiedlichen Werten haben.
Schauen wir uns eine vereinfachte Version von einer Person an, dann können wir
eine einzelne Person mit den folgenden Eigenschaften beschreiben:`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
  "vorname": "Peter",
  "nachname": "Muster",
  "geburtsdatum": "01.01.2001",
  "email": "peter.muster@email.net"
}
`})}),e.jsx(n.p,{children:`Wir haben uns hier für sehr wenige Eigenschaften entschieden. Und auch nicht
alle davon ergeben Sinn, denn sehr junge Personen haben oft noch keine eigene
Email-Adresse. Das ist etwas dass müssen wir beim modellieren immer bedenken.
Wir können (und müssen) nicht alle Eigenschaften abbilden. Wir brauchen nur die
Teile die für unsere Anwendung wichtig sind.`})]}),e.jsx(n.h3,{children:"Durch modellieren die Welt besser verstehen"}),e.jsx(n.p,{children:`Wenn wir einen Sachverhalt aus der reallen Welt darstellen möchten, müssen wir
den Sachverhalt richtig gut verstehen. Das modellieren kann uns dabei sehr gut
helfen, denn wenn wir ein Objekt mit den Eigenschaften erstellen, sehen wir
gleich welche Eigenschaften wir überhaupt haben, und welche Eigenschaften wir
brauchen.`}),e.jsx(i,{title:"Aufgabe: Objekte selber modellieren",children:e.jsx(n.p,{children:`Wenn Sie an ein Buch denken, kommen Ihnen sicher einige Eigenschaften in den
Sinn. Versuchen Sie mal ein Objekt Buch zu modellieren. Haben Sie an alle
Eigenschaften gedacht? Gibt es Eigenschaften die Sie nicht wirklich brauchen
können?`})}),e.jsx(n.h3,{children:"Redundanz von Daten"}),e.jsx(n.p,{children:`Beim Modellieren sollten Sie immer darauf achten dass Daten nicht doppelt
vorkommen, also das Daten nicht redundant sind. Auch wenn Eigenschaften aus
anderen berechnet / abgeleitet werden können, sollten diese nicht beim
modellieren angegeben werden, ausser vielleicht mit einer Funktion.`}),e.jsx(n.p,{children:`Es macht zum Beispiel keinen Sinn das Alter von einer Person zu speichern, wenn
Sie auch das Geburtsdatum haben. Denn das Alter ändert sich ständig, aber das
Geburtsdatum bleibt immer gleich.`}),e.jsxs(i,{title:"Aufgabe: Redundanz in den Daten reduzieren",classes:"exercise",children:[e.jsx(n.p,{children:`In dieser Aufgabe wird eine Person modelliert. Die hat hier sehr viele
Eigenschaften. Diskutieren Sie welche Eigenschaften redundant sind, und wieso.
Modellieren Sie die Person dann neu mit allen Informationen die Sie für relevant
halten. Haben beide Objekte noch den gleichen Informationsgehalt?`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
   "vorname": "Peter",
   "nachname": "Muster",
   "vollname": "Peter Muster",
   "geburtsdatum": "01.01.2001",
   "alter": 24,
   "grösse_cm": 176,
   "grösse_m": 1.76,
   "reichhöhe_mm": 2260,
   "sprung_und_reichhöhe_m": 3.06,
   "sprungkraft_km": 0.0008,
   "abschlaghöhe_dm": 29.5,
   "u23": false,
   "u20": false,
   "u18": false,
   "u16": false,
   "u14": false,
   "kids": false,
   "jahrgang": 2001,
   "geburtsmonat": "Januar",
   "geburtswoche": 1,
   "geburtswochentag": "Montag",
   "geburtswochentag_en": "Monday"
}
`})}),e.jsx(n.p,{children:`In dem Beispiel haben wir auch unterschiedliche Einheiten, macht es Sinn diese
so in den Daten zu haben? Sollte alles in der gleichen Einheit sein?`})]}),e.jsx(n.p,{children:`Es ist nicht immer ganz einfach zu wissen welche Eigenschaften redundant sind.
Im obigen Beispiel ist das Alter sehr praktisch, denn damit können wir schnell
entschieden in welcher Kategorie eine Person spielen darf, jedoch muss das Alter
jedes Jahr neu berechnet werden. Hier befinden wir uns in einer Grauzone was die
Redundanzregel betrifft. Generell möchten Sie Informationen nie doppelt
abgebildet haben in Ihren Daten, denn wenn sich was ändert, müssen Sie das an
allen Stellen ändern, sonst sind Ihre Daten inkonsistent und das möchten Sie
keinesfalls. Aber was kann man dagegen machen?`}),e.jsx(n.p,{children:`Wir können die Eigenschaften die berechnet, oder abgeleitet sind, ganz einfach
markieren. Wenn wir finden das Alter ist wichtig für unseren Fall, also wir
brauchen es immer wieder, dann merken wir das einfach im Schlüssel an.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
   "vorname": "Peter",
   "nachname": "Muster",
   "geburtstag": "01.01.2001",
   "alter_B": 24
}
`})}),e.jsxs(n.p,{children:[`Wie man angibt dass eine Eigenschaft berechnet ist, ist nicht wirklich
festgelegt. In manchen Programmiersprachen kann man dafür die Funktion wie die
Eigenschaft berechnet wird direkt angeben. Das ist aber nicht interessant für
uns, denn wir möchten nur über die Daten sprechen. Wir haben uns jetzt hier dazu
entschieden ein `,e.jsx(n.code,{children:"_B"}),` anzugeben, daran können wir erkennen welche Eigenschaften
berechnet / abgeleitet sind. Bei diesen Eigenschaften müssen wir jeweils darauf
achten, dass wir die Berechnung anpassen, wenn sich ein Wert ändert.`]}),e.jsxs(i,{title:"Objekte mit berechneten Eigenschaften",children:[e.jsx(n.p,{children:`Sie sollen sich selber ein Beispiel überlegen, in dem Sie abgeleitete
Eigenschaften haben, die aber sehr praktisch für Ihre Anwendung sind. Versuchen
Sie auch mehrere Eigenschaften die berechnet sind in dem Objekt zu haben.`}),e.jsx(n.p,{children:`Tauschen Sie die Aufgaben mit jemandem aus. Müssen jeweils alle berechneten
Werte neu berechnet werden, wenn sich etwas ändert? Wie könnten Sie mit dem
Problem umgehen?`})]}),e.jsx(n.h3,{children:"Ansicht auf die Daten"}),e.jsx(n.p,{children:`Das Redundanzproblem mit Daten wird noch ein Stück komplizierter, denn die
Ansicht oder Präsentation der Daten, ist nicht das gleiche wie die Daten selber.
Das Beispiel mit dem Alter macht das eigentlich schon sehr klar. Oft ist es gut
das Alter zu wissen, aber die eigentliche Information steckt im Gebursdatum.
Wenn wir das Alter mit in die Daten nehmen, sind wir redundant. Das ist bei der
Präsentation von Daten aber oft erwünscht.`}),e.jsxs(i,{title:"Beispiel: Einkaufsartikel mit Aktionen",classes:"example",children:[e.jsx(n.p,{children:`Wenn Sie einen Artikel einkaufen möchten, auf dem gerade eine Aktion ist, dann
möchten Sie als Kunde möglichst viel Informationen sehen. Viele davon sind aber
redundant und können einfach berechnet werden.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
  "name": "Nussmischung",
  "preis": 4.95,
  "aktion": 0.2
}
`})}),e.jsx(n.p,{children:`Diese Daten reichen völlig um alles zu berechnen dass Sie brauchen. Als Kunde
ist es aber unpraktisch für Sie. Besser wäre das folgende Objekt.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
   "name": "Nussmischung",
   "preis": 4.95,
   "aktion": 0.2,
   "aktion_prozent": "20%",
   "preis_reduziert": 3.96,
   "preis_red_gerundet": 3.95,
   "different": 1.00
}
`})}),e.jsx(n.p,{children:`Sie als Kunde möchten gerne all die Informationen haben, ohne dass Sie diese
jedesmal im Kopf berechnen müssen.`})]}),e.jsx(n.p,{children:`Dafür werden die Daten für die Präsentation aufbereitet, und in dem Schritt mit
neuen Informationen angereichert. Diese Fälle müssen wir unterscheiden können,
denn diese Daten von dem Beispiel, möchten wir nicht speichern, dann können wir
die Daten auch mit Redundanz anreichern.`}),e.jsx(i,{title:"Aufgabe: Wieso ist Redundanz schlecht?",classes:"exercise",children:e.jsx(n.p,{children:`Finden Sie einige Gründe wieso Redundanz schlecht ist. Gibt es auch Situationen
wo Redundanz gut ist, ausser beim anreichern von Informationen?`})}),e.jsx(n.h3,{children:"Single Point of Failure"}),e.jsx(n.p,{children:`Redundanz in den Daten kann aber auch vor Datenverlust schützen. Zum Beispiel
können Daten bei der Speicherung zerstörrt werden, oder bei der Übertragung über
das Netzwerk. Wenn wir dort Redundanz in den Daten haben, dann können wir uns
vor Verlust in den Daten schützen. Die erfordert jedoch Zusatzaufwand, denn wir
müssen immer auf die Integrität der Daten testen. Das geht zwar schnell mit dem
Computer, aber Sie möchten nicht jedesmal überlegen ob man die Daten jetzt
nochmals prüfen müsste.`}),e.jsx(i,{title:"Aufgabe: Wo it Redundanz wichtig?",classes:"exercise",children:e.jsx(n.p,{children:`Finden Sie ein Beispiel wo die Redundanz von Daten wichtig ist. Schreiben Sie
auch gleich das Schema der Daten auf und diskutieren Sie es mit dem
Banknachbarn.`})})]})}function u(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{u as default};
