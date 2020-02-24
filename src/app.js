import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: [
        {name: "MOT", completed: false, priorityHigh: true},
        {name: "Empty bins", completed: false, priorityHigh: false},
        {name: "create VUE web app", completed: true, priorityHigh: false}
      ],
      newItem: "",
      checkbox: function() {
        if(this.checkbox === 'checked'){
          this.priorityHigh = true;
        }
      }
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          name: this.newItem,
          completed: false,
          priorityHigh: this.checkbox
        });
        this.newItem = "";
      },
      completedItem: function(index) {
        this.items[index].completed = !this.items[index].completed;
      },
    }
  })
});
