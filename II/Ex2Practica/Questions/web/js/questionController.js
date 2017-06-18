function QuestionController(view) {
    this.QuestionController(view);
} 

QuestionController.prototype = {
    QuestionController: (view) => {
        this.view = view;
    },
    search: (event) => {
        let topic = document.getElementById('topic').value;
        Proxy.searchTopic(topic, (response) => {
            console.log(response);
        })
    },
}