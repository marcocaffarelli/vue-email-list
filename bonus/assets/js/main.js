// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

let app = new Vue({
    el: "#app",
    data:{
        numeri: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,],
 
    },

    methods:{
        numero(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/int")
            .then(response =>{
                //verifico lo stato della risposta
                //console.log(response);
                //stampo su console un numero random da 1 a 9
                console.log(response.data.response);  
                const numero = response.data.response;
                this.numeri.splice(35,1) && this.numeri.unshift(numero)
            });
        },
    }


});