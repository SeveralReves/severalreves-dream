const MainComponent = {
    template: `
    <div>
        <div v-if="index == 0" class=" ml-5">
            <article>
                <img src="./assets/Titulo-1.png" width="500px"> 
            </article>        
        </div>

      <div v-if="index == 1" class="mt-5 ml-5 align-self-end">
            <article class="d-flex flex-column align-items-end shadow-text">
                <h2 class="h1 font-weight-bold">Un mundo de<br>
                    posibilidades</h2>
                <div class="rectangle"></div>
                <p class="parrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur cursus semper neque. Donec dictum, ex a sodales 
                    dignissim, quam ex tempus enim, vitae elementum odio lectus
                    ornare nibh. </p>
            </article>
        </div>
    
        <div v-if="index == 2" class=" mt-5 ml-5">
            <article class="gallery d-flex flex-wrap justify-content-around">
                <div class="d-inline-block pics p-2 mb-4">
                    <img  src="assets/Galeria-1.png">
                </div><div class="d-inline-block pics p-2 mb-4">
                    <img  src="assets/Galeria-2.png">
                </div><div class="d-inline-block pics p-2 mb-4">
                    <img  src="assets/Galeria-3.png">
                </div><div class="d-inline-block pics p-2 mb-4">
                    <img  src="assets/Galeria-3.png">
                </div><div class="d-inline-block pics p-2 mb-4">
                    <img  src="assets/Galeria-1.png">
                </div><div class="d-inline-block pics p-2 mb-4">
                    <img  src="assets/Galeria-2.png">
                </div>
            </article>
        </div>
    
        <div v-if="index == 3" class="ml-5" style="top: -20px;">
            <article class="w-50">
                <h2 class="font-weight-bold">Si estas interesado  ponte en contacto conmigo a gabrielalexander2@gmail.com</h2>
                <!-- <form action="./enviar.php" method="POST" name="contacto" id="contacto">
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Ingresa tu correo">
                        <small class="form-text text-muted">Así sabré a donde contestarte</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Ingresa tu nombre o de tu empresa">
                    </div>
                    
                    <div class="form-group">
                        <label for="asunto">Asunto</label>
                        <input type="text" class="form-control" name="asunto" id="asunto" placeholder="Ingresa el asunto">
                    </div>
                    
                    <div class="form-group">
                        <label for="mensaje">Mensaje</label>
                        <input type="textarea" class="form-control" name="mensaje" id="mensaje" placeholder="Mensaje">
                    </div>
                    <input type="submit" value="Enviar" class="btn btn-success p-3">
                </form> -->
            </article>
        </div>
        
    </div>
    `,
    props: {
        index: {
            type: Number
        }
    }
};
