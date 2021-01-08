// Istruzioni:
// Genera 10 mail tramite api e stampale in una lista

let app = new Vue({
    el: "#app",
    data:{

    },
    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response =>{
            //verifico lo stato della risposta
            //console.log(response);
            //stampo su console un email random
            console.log(response.data.response);
        })
    }
});