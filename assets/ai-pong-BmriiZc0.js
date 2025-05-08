import{j as e}from"./index-B2qCcbtg.js";import{C as d}from"./Chapter-Bxzgta08.js";import{E as s}from"./Example-C700Bojd.js";import"./night-DSUKmcl1.js";import"./MatterScene-DRzgiPXu.js";function r(i){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...i.components};return e.jsxs(d,{children:[e.jsx(n.h2,{children:"Pong mit KI erstellen"}),e.jsxs(n.p,{children:[`Wir möchten das Spiel Pong mit der Hilfe von Codeium erstellen. Dafür starten
wir ein komplett neues Projekt in VS Code. Wir öffnen also einen neuen Ordner
`,e.jsx(n.code,{children:"pong-with-ai"}),". Und erstellen gleich eine neue Datei ",e.jsx(n.code,{children:"index.html"}),` und öffnen
diese mit dem LiveServer.`]}),e.jsxs(n.p,{children:[`Den Inhalt von dieser Datei können wir uns dann von Codeium erzeugen lassen. Je
spezifischer wir sind, desto einfacher ist es dann in dem Projekt weiter zu
arbeiten. Dafür drücken wir die Tasten `,e.jsx(n.code,{children:"Ctrl + Shift + P"}),` und suchen nach
`,e.jsx(n.code,{children:"Codeium: Command"}),`. Wenn wir diesen Befehl ausführen, öffnet sich ein Fenster,
wo wir unsere Anfrage an die KI stellen können. Die Anfrage sollte dann so
spezifisch und genau wie möglich sein, das ist dort wo dann das Expertenwissen
einfliesst.`]}),e.jsxs(s,{title:"Mögliche Anfrage",children:[e.jsx(n.p,{children:"So könnte eine mögliche Anfrage aussehen:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`Erstelle eine HTML-Datei mit dem Titel 'Pong', einem Spielstand und
einem dunklen canvas element. Diese Datei soll auch eine externe
Javascript-Datei names game.js einbinden.
`})}),e.jsx(n.p,{children:`Das sollte uns mal die Webseite erstellen, wo das Spiel dann angezeigt wird. Es
ist wichtig diesen Code genau anzuschauen und versuchen zu verstehen, was der
Code macht. Wenn wir zufrieden sind, können wir den Code akzeptieren und weiter
machen.`}),e.jsx(n.p,{children:`Es ist hier natürlich auch möglich leichte Änderungen vorzunehmen, also
Variablen umbenennen oder Stiele ändern. Sie sehen dann auch sehr schnell, dass
die KI nicht alles so macht wie wir das gelernt haben, das liegt vor allem
daran, dass es in der Webentwicklung sehr viele Möglichkeiten gibt etwas zu
machen, und wir haben uns aber für nur einen Weg entschieden. Bei dem Beispiel
kann es sehr gut sein, dass die Stiele direkt im HTML sind, und nicht in einer
externen Datei. Wenn Sie die Anfrage spezifischer formulieren, dann können Sie
die Datei auch extern erhalten.`}),e.jsx(n.p,{children:`An solchen Dingen sollten Sie sehen, wie wichtig es ist mehr über die Probleme
zu wissen und das ganze Hintergrundwissen zu haben. Denn Sie als Expert*in
müssen das System kontrollieren, dass Sie entwickeln möchten, nur dadurch bleibt
das System wartbar und flexibel.`})]}),e.jsx(n.h3,{children:"Game-Loop erstellen"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Computerspiele funktionieren vom Prinzip her sehr einfach. Es gibt einen
Spielzustand der im Code verwaltet wird, und es gibt eine Darstellung von diesem
Zustand, der in jedem Frame neu gezeichnet wird. Das wird in einem Game-Loop
verwaltet, und dieses können wir uns auch von der KI erstellen lassen.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`Erstelle ein GameLoop, das das Spiel in jedem Frame neu zeichnet.
Und die GameObjects anpasst.
`})}),e.jsx(n.p,{children:`Dieser Code alleine gibt uns noch nicht so viel vor, er erstellt erst das
Grundgerüst, das wir für das Spiel brauchen. Wir können nun aber Spiel-Objekte
hinzufügen und diese dann auch zeichnen lassen.`})]}),e.jsx(n.h3,{children:"Ball hinzufügen"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Als Erstes möchten wir mal einen Ball ins Spiel einfügen und diesen dann zum
Bewegen bringen.`}),e.jsx(n.p,{children:`Wir versuchen hier mit einer weiteren Methode die KI zu verwenden. Wir können
das auch so machen, das wir Kommentare in der Datei hinterlassen, und die KI
dann den Code dafür schreiben lassen.`}),e.jsx(n.p,{children:`Wir können also ganz oben in der Datei folgenden Kommentar hinterlassen, und uns
den Code generieren lassen.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Erstelle ein Spiel-Objekt Ball in der Mitte des Spielfelds
`})}),e.jsxs(n.p,{children:["Mit ",e.jsx(n.code,{children:"Tab"}),` können wir den Vorschlag von der KI akzeptieren. Wenn wir mit der Maus
darüber gehen, können wir uns auch noch andere Vorschläge anzeigen lassen.`]}),e.jsx(n.p,{children:`Mit diesen Kommentaren ist der Code dann auch gleich dokumentiert, und man kann
alles sehr modular erstellen lassen. So bleibt die Expertenrolle bei uns und
nicht bei der KI.`})]}),e.jsx(n.h3,{children:"Spielfeld und globale Variablen"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[`Als Nächstes möchten wir den Ball noch bewegen können. Dafür brauchen wir
Zugriff auf das Spielfeld und die Spielobjekte in allen Funktionen, wir müssen
also sicher sein, dass der Ball und das `,e.jsx(n.code,{children:"Canvas"}),` global sind (also nicht in
einer Funktion drin). Am besten erstellen wir diese Objekte ganz oben in der
Datei.`]}),e.jsx(n.p,{children:`Um ein tieferes Verständnis davon zu erhalten, wie diese Elemente arbeiten,
folgt nun eine kurze Erläuterung.`}),e.jsx(n.h4,{children:"Canvas und Context"}),e.jsx(n.p,{children:`Das Canvas-Element das Sie bereits in HMTL erstellt haben, ist das Element
worauf wir unser Spiel zeichnen können. Betrachten Sie dieses als Bildschirm
worauf das Spiel dargestellt wird. Weil wir ein 2D-Spiel erstellen, müssen wir
noch den Kontext von diesem Canvas holen, damit der Computer weiss wie er darauf
zeichnen soll.`}),e.jsx(n.p,{children:`Diese beiden Elemente können wir einfach mit dem folgenden Kommentar von der KI
erstellen lassen.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Hole das Canvas-Element aus dem HTML
`})}),e.jsx(n.p,{children:`Dies wird uns die erforderlichen globalen Variablen zur Verfügung stellen, die
für das Zeichnen des Spiels an jeder Stelle benötigt werden.`})]}),e.jsxs(s,{title:"Ball bewegen",children:[e.jsxs(n.p,{children:[`Jetzt wo wir alle Elemente haben, können wir die Funktionen definieren, die den
Ball bewegen. Die KI hat Ihnen im Game-Loop vermutlich 2 Funktionen erstellt,
die `,e.jsx(n.code,{children:"update"})," und ",e.jsx(n.code,{children:"draw"})," heissen. Diese müssen wir nun noch implementieren."]}),e.jsxs(n.p,{children:["Erstellen Sie eine neue Funktion ",e.jsx(n.code,{children:"update"})," in der Datei ",e.jsx(n.code,{children:"game.js"}),` und starten Sie
diese Funktion mit folgendem Kommentar:`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Aktualisiere die Position des Balls
`})}),e.jsxs(n.p,{children:["Wenn Sie zufrieden mit der Funktion sind, können Sie die Funktion ",e.jsx(n.code,{children:"draw"}),` mit
folgendem Kommentar erstellen:`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Zeichne den Ball auf dem Spielfeld
`})}),e.jsx(n.p,{children:`Jetzt müssen Sie natürlich noch sicherstellen, dass der Code auch überall
richtig funktioniert, heisst Sie müssen überprüfen, ob die richtigen Variablen
und auch Funktionen verwendet werden.`})]}),e.jsx(n.h3,{children:"Ball reflektieren"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Wenn Sie den Code so weit haben, dann versuchen Sie an der richtigen Stelle den
Kommentar einzufügen, um den Ball an der Wand zu reflektieren. Schauen Sie sich
dort die Lösung der KI genau an, und überlegen Sie, ob das Sinn ergibt.`}),e.jsx(n.p,{children:`Wir wollen, dass der Ball nur an der oberen und unteren Kante reflektiert wird.
Sollte der Ball das Spielfeld seitlich verlassen, wird er zur Mitte
zurückgesetzt. Dabei soll auch die Richtung des Balls zufällig neu bestimmt
werden.`})]}),e.jsx(n.h3,{children:"Spieler erstellen"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[`Wir brauchen nun noch 2 Spieler. Auch diese können wir von der KI erstellen
lassen. Wir gehen wieder ganz oben in die Datei, direkt nach dem `,e.jsx(n.code,{children:"Ball"}),`. Dort
können wir den folgenden Kommentar einfügen:`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Erstelle ein Spielerobjekt auf der rechten Seite
`})}),e.jsxs(n.p,{children:[`Das sollte uns auf der rechten Seite des Spielfelds einen Balken geben. Wir
können diesen aber noch nicht sehen, weil er in der `,e.jsx(n.code,{children:"draw"}),`-Funktion noch nicht
gezeichnet wird. Wir sollten also in der `,e.jsx(n.code,{children:"draw"}),`-Funktion einen Kommentar
hinterlassen, um den Spieler zu zeichnen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Zeichne den rechten Spieler
`})}),e.jsxs(n.p,{children:[`Nun müssen wir noch das Verhalten von diesem Spielobjekt definieren. Das können
wir in der `,e.jsx(n.code,{children:"update"}),`-Funktion machen, wo wir bereits das Reflektieren des Balls
haben. Hier ist es so das wir nach dem Anpassen der Ballposition prüfen möchten,
ob der Ball mit dem Spieler kollidiert. Wenn ja, soll der Ball reflektiert
werden.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Reflektiere den Ball wenn er mit dem rechten Spieler kollidiert
`})}),e.jsx(n.p,{children:`Jetzt brauchen wir nur noch die Möglichkeit den Spieler über die Tastatur zu
steuern. Dafür brauchen wir wieder mehr Expertenwissen.`})]}),e.jsx(n.h3,{children:"Spieler steuern"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Der Webbrowser bietet bereits die Funktion auf Tastenklicks zu hören. Wir können
das also global auf der ganzen Webseite machen. Das wird uns nicht die
allerbeste Lösung geben, aber für eine bessere Lösung, ist deutlich mehr
Expertenwissen nötig, dieses können wir in der kurzen Zeit noch nicht
erarbeiten.`}),e.jsxs(n.p,{children:["In der Datei ",e.jsx(n.code,{children:"game.js"}),` können wir folgenden Kommentar einfügen, um auf
Tastatureingaben zu reagieren:`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Höre auf Tastenklicks
`})}),e.jsx(n.p,{children:"Und dann innerhalb von dieser Funktion einen weiteren Kommentar:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Bewege den rechten Spieler mit Pfeiltasten auf und ab
`})}),e.jsx(n.p,{children:`Das sollte mehrheitlich gut funktionieren. Es kann aber sein das wir hier noch
ein wenig tüfteln müssen, denn das Verhalten der Tastenklicks ist relativ
komplex, und es kommt hier stark darauf an, wie das ganze implementiert wurde.
Hier ist also wieder viel Expertenwissen notwendig, um eine gute Lösung zu
erhalten, die dann auch erweiterbar ist.`})]}),e.jsx(s,{title:"Code verbessern lassen",children:e.jsxs(n.p,{children:[`Sollte der Code nicht das tun, was Sie möchten, können Sie den Code auswählen
und mit dem Befehl `,e.jsx(n.code,{children:"Codeium: Command"}),` einen Verbesserungsvorschlag anfordern.
Hierbei sollten Sie möglichst präzise in Fachsprache formulieren, was Sie
verbessern möchten.`]})}),e.jsx(n.h3,{children:"Alles direkt erstellen lassen"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:[`Bei einem so einfachen Spiel wie Pong können Sie sich den kompletten Code auch
direkt erstellen lassen. Versuchen Sie das, indem Sie eine neue Datei
`,e.jsx(n.code,{children:"pong.html"})," anlegen und dann mit ",e.jsx(n.code,{children:"Codeium: Command"}),` eine Aufforderung eingeben,
die Ihnen das gesamte Spiel erstellt. Schauen Sie sich den Code danach genau an.
Könnten Sie in dem Code noch gut Änderungen vornehmen?`]}),e.jsx(n.p,{children:`Wenn Sie KI als Werkzeug einsetzen, sollten Sie immer wissen, was Sie machen
möchten. Das funktioniert am besten, wenn Sie nur kleine Codeabschnitte
erstellen lassen und diese so lange anpassen, bis der Code das tut, was Sie
möchten. Dies kann schnell komplex werden, je nachdem, wie viele Interaktionen
die verschiedenen Codeabschnitte haben.`})]})]})}function o(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{o as default};
