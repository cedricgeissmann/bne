import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Video from "../../components/Video"

export default function ChapterJavascriptFor() {
  return (
    <Chapter>
      <h2>
        Schleifen in Javascript (<pre>for</pre>)
      </h2>
      <section>
        Eine Aufgabe, die beim Programmieren immer wieder auftritt, ist das
        Iterieren über Listen, also das Durchgehen aller Elemente einer Liste.
        Häufig möchten wir dabei einzelne Elemente auslassen oder sie abändern.
        Dafür kann ein einfaches Schema verwendet werden:
      </section>
      <Example title="Schema: Neue Liste erstellen">
        Es wird eine neue leere Liste erstellt. Anschließend wird jedes Element
        der alten Liste überprüft und entweder an die neue Liste angehängt oder
        modifiziert.
        <Code
          language="javascript"
          content={`// Nimmt eine Eingabe entgegen, und wandelt alle "a"s in "A"s um, und gibt dies zurück
function aufgabe00(args) {
  const input = args                        // liest die Eingabe der Funktion in eine Variable
  const result = []                         // erstellt eine neue leere Liste
  for (let i = 0; i < input.length; i++) {  // iteriert über die Eingabe
    const currentElement = input[i]         // liest das aktuelle Zeichen der Eingabe aus
    if (currentElement === "a") {           // prüft ob das aktuelle Zeichen ein "a" ist
      result.push("A")                      // hängt das Zeichen "A" an die result-Liste hinten an
    } else {                                // wenn der Fall oben NICHT erfüllt ist
      result.push(currentElement)           // hängt das aktuelle Zeichen an die result-Liste hinten an
    }
  }
  return result.join("")                    // wandelt die result-Liste in Text um, und gibt den Text zurück
}`}
        />
        Mit dieser Struktur können Sie praktisch alles lösen, was mit dem
        Umwandeln von Text zu tun hat. Versuchen Sie zuerst intuitiv zu
        verstehen, was die einzelnen Teile des Codes machen, und bauen Sie sich
        mit der Zeit ein detailliertes Verständnis für jede Zeile in diesem
        Code-Stück auf.
      </Example>
    </Chapter>
  )
}
