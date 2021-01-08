// Istruzioni:
// Genera 10 mail tramite api e stampale in una lista

let app = new Vue({
    el: "#app",
    data:{
        listaEmail: [],

    },
    mounted(){
        //creo un ciclo for che per 10 volte creera una mail e la inserira all'interno dell'array listaEmail
        for (let index = 0; index < 10; index++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response =>{
                //verifico lo stato della risposta
                //console.log(response);
                //stampo su console un email random
                //console.log(response.data.response);
                //creo una variabile in cui salvare l'e-mail
                const email = response.data.response;
                //inserisco l'email all'interno dell'array listaEmail
                this.listaEmail.push(email);
            }) 
        }
    }
});