var app = new Vue(
  {
    el: '#app',
    data:
    {
        chat:["test1", "2-10", "123[;qwe"]
    },

    methods:
    {
        add:function(msg)
        {
            this.chat.push(msg)
            console.log("---Message recieved---"+ msg)
        }
    }
})
