import "./about.css"

import useStore from "../ZustandManager/zustand.js"
import detectBrowserLanguage from "detect-browser-language"
function About() {
     let language = useStore((state) => state.language)
     const setLanguage = useStore((state) => state.setLanguage)
     let lang = detectBrowserLanguage()

     if (lang === "de-AT") {
          setLanguage("de")
     } else if (lang === "en-US") {
          setLanguage("en")
     } else if (lang === "de") {
          setLanguage("de")
     } else if (lang === "it-IT") {
          setLanguage("it")
     } else if (lang === "it") {
          setLanguage("it")
     } else {
          setLanguage("en")
     }

     function me() {
          if (language !== "none") {
               if (language === "de") {
                    return (
                         <div>
                              <div>
                                   Mein Name ist Andrea und mein Kosename Dreli steht seit 2005 für meine in reiner Handarbeit gearbeiteten Bären und Drachen. Seit frühester Jugend bereits haben mich alle Arten von Handarbeiten fasziniert und ich habe auch so ziemlich alles ausprobiert, was mit den
                                   Händen künstlerisch hergestellt werden kann. Dank meiner Familie, die mir immer die Zeit gegeben hat, kreativ zu sein bin ich dann sozusagen bei den Bären „hängen geblieben“. Habe ich vor Jahren größere Bären bis 30 und 40 cm gemacht, so habe ich jetzt die Liebe zu
                                   den Winzlingen entdeckt, je kleiner desto lieber und die kleinsten Bärchen sind jetzt schon mal grade nur 6 oder 7 cm groß, in reiner Handarbeit aus hochwertigen Materialien, voll beweglich und jeder Bär ist ein Einzelstück, bei Sammlern beliebt und bereits in der
                                   ganzen Welt verteilt. Dazu kamen dann vor Jahren auch noch Drachen, die freilich auch alle nach eigenen Schnitten – wie auch die Bären – und ausschließlich in Handarbeit hergestellt werden. Jeder von ihnen, der meine Werkstatt verlässt bekommt sein eigenes
                                   Zertifikat und wird liebevoll auf die Reise geschickt.
                              </div>
                              <br></br>
                              <div>
                                   Nun ist die Zeit gekommen und wir sind Großeltern geworden, was meine Energie natürlich in eine neue Richtung gelenkt hat. Aus wunderschönen Bio-Materialien wie Bio-Baumwoll-Stoffen, Organic-Jersey und anderen edlen Stoffen entstehen seit kurzem entzückende
                                   Baby-Teilchen und Accessoires – auch hier wieder alles Einzelstücke und großteils schon mit eigenen Schnitten.
                              </div>
                              <br></br>
                              <div>
                                   Es ist immer wieder eine Freude, wenn man mit seinen eigenen Händen etwas erschaffen kann, das dann von anderen geliebt und geschätzt wird. Ich habe noch viele Ideen, meine Werkstatt ist gut mit Stoffen und vielen hochwertigen Materialien gefüllt und ich freue mich
                                   diese in zauberhafte Einzelstücke – sei es Bären, Drachen, Baby-Bekleidung oder andere Accessoires - zu verwandeln.
                              </div>
                         </div>
                    )
               } else if (language === "en") {
                    return (
                         <div>
                              <div>
                                   My name is Andrea and my nickname Dreli has stood for my bears and dragons, which are made entirely by hand since 2005. Since my early youth I have been fascinated by all kinds of handicrafts and I've also pretty much tried out what can be artistically made with
                                   the hands. Thanks to my family, who always gave me the time to be creative, I “got stuck” with the bears, so to speak. Years ago I made bigger bears up to 30 and 40 cm, so now I have discovered the love for the tiny ones, the smaller the better and the smallest
                                   bears are now only 6 or 7 cm tall, purely by hand from high-quality materials , fully articulated and each bear is unique, favoured with collectors and already distributed all over the world. Years ago there were also dragons, which of course are all made according
                                   to their own designs - like the bears - and are exclusively made by hand. Each of them who leaves my workshop will have their own certificate and will be lovingly sent on the journey.
                              </div>
                              <br></br>
                              <div>
                                   Now the time has come and we have become grandparents, which of course steered my energy in a new direction. From beautiful organic materials such as organic cotton fabrics, organic jersey and other fine fabrics, delightful baby items and accessories have recently
                                   been created - here too, all one-offs and mostly with their own cuts.
                              </div>
                              <br></br>
                              <div>
                                   It is always a pleasure when you can create something with your own hands that will then be loved and valued by others. I still have a lot of ideas, my workshop is well filled with fabrics and many high-quality materials and I am looking forward to transforming
                                   these into magical individual pieces - be it bears, dragons, baby clothing or other accessories.
                              </div>
                         </div>
                    )
               } else if (language === "it") {
                    return (
                         <div>
                              <div>
                                   Mi chiamo Andrea e il mio soprannome Dreli sta per i miei orsetti e draghi, che sono realizzati interamente a mano dal 2005. Fin dalla mia prima giovinezza sono stato affascinato da tutti i tipi di artigianato e ho anche provato praticamente cosa si può fare
                                   artisticamente con le mani. Grazie alla mia famiglia, che mi ha sempre dato il tempo di essere creativa, mi sono “bloccata” con gli orsetti, per così dire. Anni fa realizzavo orsetti più grandi fino a 30 e 40 cm, però ora ho scoperto l'amore per i più piccoli, più
                                   piccoli sono meglio è e gli orsetti più piccoli ora sono alti solo 6 o 7 cm, puramente fatti a mano con materiali di alta qualità , completamente articolato e ogni orsetto è unico, apprezzato dai collezionisti e già distribuito in tutto il mondo. Anni fa c'erano
                                   anche gli draghi, che ovviamente sono tutti realizzati secondo i propri disegni - come gli orsetti - e sono fatti esclusivamente a mano. Ognuno di loro che lascerà il mio laboratorio avrà il proprio certificato e sarà amorevolmente inviato in viaggio.
                              </div>
                              <br></br>
                              <div>
                                   Ora è arrivato il momento e siamo diventati nonni, il che ovviamente ha indirizzato la mia energia in una nuova direzione. Da splendidi materiali organici come tessuti di cotone biologico, jersey biologico e altri tessuti pregiati, sono stati recentemente creati
                                   deliziosi articoli e accessori per bambini - anche qui, tutti pezzi unici e per lo più con i propri tagli.
                              </div>
                              <br></br>
                              <div>
                                   È sempre un piacere quando puoi creare qualcosa con le tue mani che sarà poi amato e apprezzato dagli altri. Ho ancora molte idee, il mio laboratorio è pieno di stoffe e molti materiali di alta qualità e non vedo l'ora di trasformarli in magici pezzi individuali,
                                   che si tratti di orsetti, draghi, vestiti per bambini o altri accessori.
                              </div>
                         </div>
                    )
               } else {
                    return (
                         <div>
                              <div>
                                   My name is Andrea and my nickname Dreli has stood for my bears and dragons, which are made entirely by hand since 2005. Since my early youth I have been fascinated by all kinds of handicrafts and I've also pretty much tried out what can be artistically made with
                                   the hands. Thanks to my family, who always gave me the time to be creative, I “got stuck” with the bears, so to speak. Years ago I made bigger bears up to 30 and 40 cm, so now I have discovered the love for the tiny ones, the smaller the better and the smallest
                                   bears are now only 6 or 7 cm tall, purely by hand from high-quality materials , fully articulated and each bear is unique, favoured with collectors and already distributed all over the world. Years ago there were also dragons, which of course are all made according
                                   to their own designs - like the bears - and are exclusively made by hand. Each of them who leaves my workshop will have their own certificate and will be lovingly sent on the journey.
                              </div>
                              <br></br>
                              <div>
                                   Now the time has come and we have become grandparents, which of course steered my energy in a new direction. From beautiful organic materials such as organic cotton fabrics, organic jersey and other fine fabrics, delightful baby items and accessories have recently
                                   been created - here too, all one-offs and mostly with their own cuts.
                              </div>
                              <br></br>
                              <div>
                                   It is always a pleasure when you can create something with your own hands that will then be loved and valued by others. I still have a lot of ideas, my workshop is well filled with fabrics and many high-quality materials and I am looking forward to transforming
                                   these into magical individual pieces - be it bears, dragons, baby clothing or other accessories.
                              </div>
                         </div>
                    )
               }
          }
     }
     return (
          <div>
               <h1 className="welcome"> Drelibears </h1>
               <div className="megrid">
                    <div className="me">
                         <div className="bild">
                              <img className="imgdreli" src="/img/About-me-1.jpg" alt="dreli" />
                         </div>
                         <div>
                              <p className="beautyme">{me()} </p>
                         </div>
                    </div>
               </div>
          </div>
     )
}
export default About
