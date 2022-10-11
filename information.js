const moreInfo = document.getElementById('more-info-container')

moreInfo.innerHTML = `
                      <div class="more-info-text" id="more-info-text">
                        <a class="more-info-close-btn" href="#main" id="more-info-close-btn">
                          <img class="more-info-close-btn-img" src="/close.png" alt="Close"/>
                        </a>
                        <h2>Escuela Municipal de Patinaje y Hockey Línea de Arroyomolinos</h2>
                        <br>
                        <h3>Clases de Patinaje Familiar</h3>
                        <br>
                        <p>
                          A continuación se detalla la información correspondiente a las Clases de Patinaje Familiar del  C.D.E. Ciudad Patina que se van a realizar en el C.E.I.P. Francisco de Orellana (Arroyomolinos) durante los meses de Octubre  a Junio de 2023. El siguiente formulario lo deben rellenar las personas que quieren participar.
                        </p>
                        <br>
                        <p><strong>Lugar:</strong> C.E.I.P. Francisco de Orellana (Calle de Barcelona, 19, 28939 Arroyomolinos, Madrid)</p>
                        <p><strong>Horario:</strong> 10:00 - 11:30.</p>
                        <p><strong>Día:</strong> Sábado.</p>
                        <p><strong>Destinatarios:</strong> Alumnos desde 4 años que tengan autonomía propia para poder seguir la clase.</p>
                        <p><strong>Matrícula:</strong> 20 euros por curso escolar (Octubre a Junio).</p>
                        <p><strong>Seguro Deportivo:</strong> Incluido con la matrícula.</p>
                        <br>
                        <br>
                        <p><strong>Cuota Mensual:</strong></p><br>
                        <ul>
                          <li><strong>21€</strong> - alumno con Tarjeta Activa y/o título de familia numerosa o discapacidad.</li>
                          <li><strong>21€</strong> - alumno con Tarjeta Activa, si se inscriben 3 o más miembros de un mismo grupo familiar.</li>
                          <li><strong>30€</strong> - alumno CON Tarjeta Activa.</li>
                          <li><strong>40€</strong> - alumno SIN Tarjeta Activa.</li>
                        </ul>
                        <br>
                        <br>
                        <p><strong>Descripción de la Actividad:</strong></p><br>
                        <ul>
                          <li>Las clases se realizarán en el exterior de las instalaciones del C.E.I.P.  Francisco de Orellana (Arroyomolinos)  en dos bloque de 40 minutos con un descanso de 10 minutos después del primer bloque.</li>
                          <li>En las clases se utiliza un Sistema Pedagógico Novedoso, que consiste en enseñar a patinar y a mejorar a partir de actividades técnico-lúdicas, sin importar el nivel ni la edad del alumno. </li>
                          <li>El principal objetivo de las clases es promover el patinaje en línea como un deporte novedoso y divertido que puede ayudar al desarrollo integral de las capacidades de los alumnos, fomentando el deporte como un factor decisivo para una mejor calidad de vida.</li>
                        </ul>
                        <br>
                        <p class="last-line">Aconsejamos llevar ropa deportiva cómoda y agua o bebida hidratante!</p>
                      </div>
                    `

moreInfo.classList.add('d-none')