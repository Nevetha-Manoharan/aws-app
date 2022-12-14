import { Data } from "../../data";

export const Checklist = ({title, options}) => {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          backgroundColor: "gray",
          margin: "0 20%",
        }}
      >
        {title}
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="radio-col radio-col-left" />
        <div className="radio-col">
          <p>Experience</p>
          {options.map((option) => (
            <span style={{ letterSpacing: "20px" }}>{option}</span>
          ))}
        </div>
      </div>
      <div>
        {Data.map((item) => {
          return (
            <div>
              <div style={{ marginLeft: "15px", fontWeight: "bold" }}>
                {" "}
                <p>{item.title}</p>
              </div>
              <div>
                {item.requirements.map((req, index) => {
                  return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="radio-col radio-col-left">
                        <p>{req}</p>
                      </div>
                      <div className="radio-col">
                        {options.map((option) => (
                          <input
                            type="radio"
                            id={option}
                            name={`option-${index}`}
                            value={option}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// <Document>
//         <Page style={styles.body}>
//           <Text
//             render={() => (
//               <input type="radio" id="1" name={`option-1`} value="1" />
//             )}
//             fixed
//           />
//           {/* <Text style={styles.header} fixed>
//             <input type="radio" id="1" name={`option-1`} value="1" />
//           </Text> */}
//           <Text style={styles.title}>Don Quijote de la Mancha</Text>
//           <Text style={styles.author}>Miguel de Cervantes</Text>
//           <Image style={styles.image} src="/images/quijote1.jpg" />
//           <Text style={styles.subtitle}>
//             Cap??tulo I: Que trata de la condici??n y ejercicio del famoso hidalgo
//             D. Quijote de la Mancha
//           </Text>
//           <Text style={styles.text}>
//             En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
//             mucho tiempo que viv??a un hidalgo de los de lanza en astillero,
//             adarga antigua, roc??n flaco y galgo corredor. Una olla de algo m??s
//             vaca que carnero, salpic??n las m??s noches, duelos y quebrantos los
//             s??bados, lentejas los viernes, alg??n palomino de a??adidura los
//             domingos, consum??an las tres partes de su hacienda. El resto della
//             conclu??an sayo de velarte, calzas de velludo para las fiestas con
//             sus pantuflos de lo mismo, los d??as de entre semana se honraba con
//             su vellori de lo m??s fino. Ten??a en su casa una ama que pasaba de
//             los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo
//             de campo y plaza, que as?? ensillaba el roc??n como tomaba la
//             podadera. Frisaba la edad de nuestro hidalgo con los cincuenta a??os,
//             era de complexi??n recia, seco de carnes, enjuto de rostro; gran
//             madrugador y amigo de la caza. Quieren decir que ten??a el
//             sobrenombre de Quijada o Quesada (que en esto hay alguna diferencia
//             en los autores que deste caso escriben), aunque por conjeturas
//             veros??miles se deja entender que se llama Quijana; pero esto importa
//             poco a nuestro cuento; basta que en la narraci??n d??l no se salga un
//             punto de la verdad
//           </Text>
//           <Text style={styles.text}>
//             Es, pues, de saber, que este sobredicho hidalgo, los ratos que
//             estaba ocioso (que eran los m??s del a??o) se daba a leer libros de
//             caballer??as con tanta afici??n y gusto, que olvid?? casi de todo punto
//             el ejercicio de la caza, y aun la administraci??n de su hacienda; y
//             lleg?? a tanto su curiosidad y desatino en esto, que vendi?? muchas
//             hanegas de tierra de sembradura, para comprar libros de caballer??as
//             en que leer; y as?? llev?? a su casa todos cuantos pudo haber dellos;
//             y de todos ningunos le parec??an tan bien como los que compuso el
//             famoso Feliciano de Silva: porque la claridad de su prosa, y
//             aquellas intrincadas razones suyas, le parec??an de perlas; y m??s
//             cuando llegaba a leer aquellos requiebros y cartas de desaf??o, donde
//             en muchas partes hallaba escrito: la raz??n de la sinraz??n que a mi
//             raz??n se hace, de tal manera mi raz??n enflaquece, que con raz??n me
//             quejo de la vuestra fermosura, y tambi??n cuando le??a: los altos
//             cielos que de vuestra divinidad divinamente con las estrellas se
//             fortifican, y os hacen merecedora del merecimiento que merece la
//             vuestra grandeza.
//           </Text>
//           <Text style={styles.text}>
//             Con estas y semejantes razones perd??a el pobre caballero el juicio,
//             y desvel??base por entenderlas, y desentra??arles el sentido, que no
//             se lo sacara, ni las entendiera el mismo Arist??teles, si resucitara
//             para s??lo ello. No estaba muy bien con las heridas que don Belianis
//             daba y recib??a, porque se imaginaba que por grandes maestros que le
//             hubiesen curado, no dejar??a de tener el rostro y todo el cuerpo
//             lleno de cicatrices y se??ales; pero con todo alababa en su autor
//             aquel acabar su libro con la promesa de aquella inacabable aventura,
//             y muchas veces le vino deseo de tomar la pluma, y darle fin al pie
//             de la letra como all?? se promete; y sin duda alguna lo hiciera, y
//             aun saliera con ello, si otros mayores y continuos pensamientos no
//             se lo estorbaran. Tuvo muchas veces competencia con el cura de su
//             lugar (que era hombre docto graduado en Sig??enza), sobre cu??l hab??a
//             sido mejor caballero, Palmer??n de Inglaterra o Amad??s de Gaula; mas
//             maese Nicol??s, barbero del mismo pueblo, dec??a que ninguno llegaba
//             al caballero del Febo, y que si alguno se le pod??a comparar, era don
//             Galaor, hermano de Amad??s de Gaula, porque ten??a muy acomodada
//             condici??n para todo; que no era caballero melindroso, ni tan llor??n
//             como su hermano, y que en lo de la valent??a no le iba en zaga.
//           </Text>
//           <Text style={styles.text}>
//             En resoluci??n, ??l se enfrasc?? tanto en su lectura, que se le pasaban
//             las noches leyendo de claro en claro, y los d??as de turbio en
//             turbio, y as??, del poco dormir y del mucho leer, se le sec?? el
//             cerebro, de manera que vino a perder el juicio. Llen??sele la
//             fantas??a de todo aquello que le??a en los libros, as?? de
//             encantamientos, como de pendencias, batallas, desaf??os, heridas,
//             requiebros, amores, tormentas y disparates imposibles, y asent??sele
//             de tal modo en la imaginaci??n que era verdad toda aquella m??quina de
//             aquellas so??adas invenciones que le??a, que para ??l no hab??a otra
//             historia m??s cierta en el mundo.
//           </Text>
//           <Text style={styles.subtitle} break>
//             Cap??tulo II: Que trata de la primera salida que de su tierra hizo el
//             ingenioso Don Quijote
//           </Text>
//           <Image style={styles.image} src="/images/quijote2.png" />
//           <Text style={styles.text}>
//             Hechas, pues, estas prevenciones, no quiso aguardar m??s tiempo a
//             poner en efeto su pensamiento, apret??ndole a ello la falta que ??l
//             pensaba que hac??a en el mundo su tardanza, seg??n eran los agravios
//             que pensaba deshacer, tuertos que enderezar, sinrazones que emendar
//             y abusos que mejorar y deudas que satisfacer. Y as??, sin dar parte a
//             persona alguna de su intenci??n y sin que nadie le viese, una ma??ana,
//             antes del d??a, que era uno de los calurosos del mes de Julio, se
//             arm?? de todas sus armas, subi?? sobre Rocinante, puesta su mal
//             compuesta celada, embraz?? su adarga, tom?? su lanza y por la puerta
//             falsa de un corral sali?? al campo con grand??simo contento y alborozo
//             de ver con cu??nta facilidad hab??a dado principio a su buen deseo.
//             Mas apenas se vio en el campo cuando le asalt?? un pensamiento
//             terrible, y tal, que por poco le hiciera dejar la comenzada empresa;
//             y fue que le vino a la memoria que no era armado caballero, y que,
//             conforme a ley de caballer??a, ni pod??a ni deb??a tomar armas con
//             ning??n caballero; y puesto que lo fuera, hab??a de llevar armas
//             blancas, como novel caballero, sin empresa en el escudo, hasta que
//             por su esfuerzo la ganase. Estos pensamientos le hicieron titubear
//             en su prop??sito; mas pudiendo m??s su locura que otra raz??n alguna,
//             propuso de hacerse armar caballero del primero que topase, a
//             imitaci??n de otros muchos que as?? lo hicieron, seg??n ??l hab??a le??do
//             en los libros que tal le ten??an. En lo de las armas blancas, pensaba
//             limpiarlas de manera, en teniendo lugar, que lo fuesen m??s que un
//             arminio; y con esto se quiet??18 y prosigui?? su camino, sin llevar
//             otro que aquel que su caballo quer??a, creyendo que en aquello
//             consist??a la fuerza de las aventuras
//           </Text>
//           <Text style={styles.text}>
//             Yendo, pues, caminando nuestro flamante aventurero, iba hablando
//             consigo mesmo, y diciendo: ?????Qui??n duda, sino que en los venideros
//             tiempos, cuando salga a luz la verdadera historia de mis famosos
//             hechos, que el sabio que los escribiere no ponga, cuando llegue a
//             contar esta mi primera salida tan de ma??ana, desta manera?: Apenas
//             hab??a el rubicundo Apolo tendido por la faz de la ancha y espaciosa
//             tierra las doradas hebras de sus hermosos cabellos, y apenas los
//             peque??os y pintados pajarillos con sus arpadas lenguas hab??an
//             saludado con dulce y meliflua armon??a la venida de la rosada Aurora,
//             que, dejando la blanda cama del celoso marido, por las puertas y
//             balcones del manchego horizonte a los mortales se mostraba, cuando
//             el famoso caballero don Quijote de la Mancha, dejando las ociosas
//             plumas, subi?? sobre su famoso caballo Rocinante y comenz?? a caminar
//             por el antiguo y conocido Campo de Montiel.
//           </Text>
//           <Text style={styles.text}>
//             Y era la verdad que por ??l caminaba; y a??adi?? diciendo: ???Dichosa
//             edad y siglo dichoso aquel adonde saldr??n a luz las famosas haza??as
//             m??as, dignas de entallarse en bronces, esculpirse en m??rmoles y
//             pintarse en tablas, para memoria en lo futuro. ??Oh t??, sabio
//             encantador, quienquiera que seas, a quien ha de tocar el ser
//             coronista desta peregrina historia! Ru??gote que no te olvides de mi
//             buen Rocinante, compa??ero eterno m??o en todos mis caminos y
//             carreras.
//           </Text>
//           <Text style={styles.text}>
//             Luego volv??a diciendo, como si verdaderamente fuera enamorado: ?????Oh
//             princesa Dulcinea, se??ora deste cautivo coraz??n! Mucho agravio me
//             habedes fecho en despedirme y reprocharme con el riguroso
//             afincamiento de mandarme no parecer ante la vuestra fermosura.
//             Pl??gaos, se??ora, de membraros deste vuestro sujeto coraz??n, que
//             tantas cuitas por vuestro amor padece. Con estos iba ensartando
//             otros disparates, todos al modo de los que sus libros le hab??an
//             ense??ado, imitando en cuanto pod??a su lenguaje. Con esto caminaba
//             tan despacio, y el sol entraba tan apriesa y con tanto ardor, que
//             fuera bastante a derretirle los sesos, si algunos tuviera
//           </Text>
//           <Text style={styles.text}>
//             Casi todo aquel d??a camin?? sin acontecerle cosa que de contar fuese,
//             de lo cual se desesperaba, porque quisiera topar luego luego con
//             quien hacer experiencia del valor de su fuerte brazo. Autores hay
//             que dicen que la primera aventura que le avino fue la del Puerto
//             L??pice, otros dicen que la de los molinos de viento; pero lo que yo
//             he podido averiguar en este caso, y lo que he hallado escrito en los
//             anales de la Mancha, es que ??l anduvo todo aquel d??a, y, al
//             anochecer, su roc??n y ??l se hallaron cansados y muertos de hambre, y
//             que, mirando a todas partes por ver si descubrir??a alg??n castillo o
//             alguna majada de pastores donde recogerse y adonde pudiese remediar
//             su mucha hambre y necesidad, vio, no lejos del camino por donde iba,
//             una venta,que fue como si viera una estrella que, no a los portales,
//             sino a los alc??zares de su redenci??n le encaminaba. Diose priesa a
//             caminar, y lleg?? a ella a tiempo que anochec??a.
//           </Text>
//           <Text
//             style={styles.pageNumber}
//             render={({ pageNumber, totalPages }) =>
//               `${pageNumber} / ${totalPages}`
//             }
//             fixed
//           />
//         </Page>
//       </Document>
