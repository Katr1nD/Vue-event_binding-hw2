const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            enteredUserInput: ''
        };
    },
    methods: {
        alertMessage() {
            alert('You pressed this button');
        },
        setInput(event) {
            this.userInput = event.target.value;
        },
        enterInput(event) {
            this.enteredUserInput = this.userInput;
        }
    }
});

app.mount('#assignment');