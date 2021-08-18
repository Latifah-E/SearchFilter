var app = new Vue({
    el: '#root',
    data() {
        return{
       answers:[{
        title:'How can i pay?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus venenatis justo in rutrum. Aenean ac augue nulla. Duis vel velit nec lorem blandit tempor a sed nulla. Donec nibh tellus, malesuada et libero posuere, efficitur elementum massa. Maecenas convallis dolor non scelerisque mollis. Phasellus vitae porttitor nulla. Ut porta neque urna, et interdum lacus vestibulum vitae. Sed tincidunt, mauris non aliquet condimentum, massa elit ultrices ex, nec vestibulum magna eros eget nisl. Donec sodales et lectus ac vestibulum. In fringilla, ex at mattis tincidunt, metus ipsum faucibus nisl, id sollicitudin urna purus vel est.'
       },
       {
        title:'How can i reqest for multiple fundis?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus venenatis justo in rutrum. Aenean ac augue nulla. Duis vel velit nec lorem blandit tempor a sed nulla. Donec nibh tellus, malesuada et libero posuere, efficitur elementum massa. Maecenas convallis dolor non scelerisque mollis. Phasellus vitae porttitor nulla. Ut porta neque urna, et interdum lacus vestibulum vitae. Sed tincidunt, mauris non aliquet condimentum, massa elit ultrices ex, nec vestibulum magna eros eget nisl. Donec sodales et lectus ac vestibulum. In fringilla, ex at mattis tincidunt, metus ipsum faucibus nisl, id sollicitudin urna purus vel est.'
       },
       {
        title:'How can i set location?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus venenatis justo in rutrum. Aenean ac augue nulla. Duis vel velit nec lorem blandit tempor a sed nulla. Donec nibh tellus, malesuada et libero posuere, efficitur elementum massa. Maecenas convallis dolor non scelerisque mollis. Phasellus vitae porttitor nulla. Ut porta neque urna, et interdum lacus vestibulum vitae. Sed tincidunt, mauris non aliquet condimentum, massa elit ultrices ex, nec vestibulum magna eros eget nisl. Donec sodales et lectus ac vestibulum. In fringilla, ex at mattis tincidunt, metus ipsum faucibus nisl, id sollicitudin urna purus vel est.'
       },
       {
        title:'where is the help center?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus venenatis justo in rutrum. Aenean ac augue nulla. Duis vel velit nec lorem blandit tempor a sed nulla. Donec nibh tellus, malesuada et libero posuere, efficitur elementum massa. Maecenas convallis dolor non scelerisque mollis. Phasellus vitae porttitor nulla. Ut porta neque urna, et interdum lacus vestibulum vitae. Sed tincidunt, mauris non aliquet condimentum, massa elit ultrices ex, nec vestibulum magna eros eget nisl. Donec sodales et lectus ac vestibulum. In fringilla, ex at mattis tincidunt, metus ipsum faucibus nisl, id sollicitudin urna purus vel est.'
       },
       {
        title:'Is it possible to add a new category?', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus venenatis justo in rutrum. Aenean ac augue nulla. Duis vel velit nec lorem blandit tempor a sed nulla. Donec nibh tellus, malesuada et libero posuere, efficitur elementum massa. Maecenas convallis dolor non scelerisque mollis. Phasellus vitae porttitor nulla. Ut porta neque urna, et interdum lacus vestibulum vitae. Sed tincidunt, mauris non aliquet condimentum, massa elit ultrices ex, nec vestibulum magna eros eget nisl. Donec sodales et lectus ac vestibulum. In fringilla, ex at mattis tincidunt, metus ipsum faucibus nisl, id sollicitudin urna purus vel est.'
       },
    ],
    search: ''
       
    }
    },
computed: {
    filteredAnswers: function(){
        var answerCounter = document.getElementById("input").value.length;
        if (answerCounter < 1){
            return this.filteredAnswers = null;
            
        }
        else{
            return this.answers.filter((answer)=> {
                return answer.title.match(this.search);
                
            });
            
        }
    }
}
});