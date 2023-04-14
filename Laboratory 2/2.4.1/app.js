var app = new Vue(
{
    el: '#app',
    data:
    {
        message: '',
        k: ''
    },
    methods:
    {
        process: function()

        {
          if(this.message == '123')
          {
            this.k = this.message
            console.log(" Mesajul este egal cu 123");
          }
        }
    }
})
