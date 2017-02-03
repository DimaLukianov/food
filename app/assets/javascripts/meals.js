window.onload = function () {
  var meals = new Vue({
    el: '#meals',
    data: {
      meals: []
    },
    mounted: function() {
      var that = this;
      Vue.http.get('/meals.json')
        .then(response => {
          that.meals = response.data;
        },
        response => {
          console.log('Error!', response);
        });
    }
  });

  Vue.component('meal', {
    template: '#meal',
    props: {
      meal: Object
    }
  });
}
