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
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur cursus semper neque. Donec dictum, ex a sodales 
                    dignissim, quam ex tempus enim, vitae elementum odio lectus
                    ornare nibh. </p>
            </article>
        </div>
    
        <div v-if="index == 2" class="mt-5 ml-5">
            <article>
                <div>
                    
                </div><div class="pics d-flex p-2">
                    <img src="assets/Galeria-1.png">
                </div>
            </article>
        </div>
    
        <div v-if="index == 3" class="mt-5 ml-5">
            <article>

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
