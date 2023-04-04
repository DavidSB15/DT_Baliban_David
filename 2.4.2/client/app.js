var app = new Vue(
{
    el: '#app',
    data:
    {
        users: [],
        usersService: null,
        namebox: '',
        citybox: '',
        indexToModify: null,
    },
    created: function ()
    {
        usersService = users();
        usersService.get().then(response => (this.users = response.data));
    },
    methods:
    {
      add: function()
      {
        const newUser = { name: this.namebox, city: this.citybox };
        this.users.push(newUser);
        this.namebox = '';
        this.citybox = '';
      },
      del: function(index)
      {
        this.users.splice(index, 1);
      },
      modify: function(index)
      {
        const userToModify = this.users[index];
        this.namebox = userToMod.name;
        this.citybox = userToMod.city;
        this.indexToModify = index;
      },
      saveModification: function()
      {
        if (this.indexToModify === null)
        {
          return;
        }
        const modifiedUser = { name: this.namebox, city: this.citybox };
        this.users.splice(this.indexToModify, 1, modifiedUser);
        this.namebox = '';
        this.citybox = '';
        this.indexToModify = null;
      },
    },
});
