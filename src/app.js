import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: [
        {name: "MOT", completed: false, priorityHigh: true},
        {name: "Empty bins", completed: false, priorityHigh: false},
        {name: "create VUE web app", completed: true, priorityHigh: true}
      ],
      newItem: "",
      priority: "#priorty"
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          name: this.newItem,
          completed: false,
          priorityHigh: this.priorty
        });
        this.newItem = "";
      },
      completedItem: function(index) {
        this.items[index].completed = !this.items[index].completed;
      },
    }
  })
});
