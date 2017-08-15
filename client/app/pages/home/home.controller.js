export default /*@ngInject*/ class HomeController {
  constructor($http) {
    this.http = $http;
    $http.get('https://forex.1forge.com/1.0.2/symbols?api_key=LPwpGdsElf2FzN9rdIntrkFZKXk5Hals')
    .then(result => {
      this.options = result.data; 
      console.log(result);
    })
    //var me=this;
    // this.options = ['a','b'];

  }
  loadOption() {
    this.http.get(`https://forex.1forge.com/1.0.2/quotes?pairs=${this.selected}&api_key=LPwpGdsElf2FzN9rdIntrkFZKXk5Hals`)
    .then(result => {
      this.selectedResult = result.data;
    })
  }
  calc() {
    console.log("hello")
    this.result = this.selectedResult[0].price * this.amount;
  }
}
