const {
    createApp
} = Vue

createApp({
    data() {
        return {
            array_emails: []
        }
    },
    methods: {
        randomEmail(){
            this.array_emails = [];
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.array_emails.push(result.data.response);
                })
            }
        }
        
    },
}).mount('#app')