 const React = require('react');
 const ReactDOM = require('react-dom');
/*
Store Picker
*/
var App=React.createClass({
  render:function(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
});

var Header=React.createClass({
  render:function(){
    return(
      <p>Header</p>
    )
  }
});
var Order=React.createClass({
  render:function(){
    return(
      <p>Order</p>
    )
  }
});
var Inventory=React.createClass({
  render:function(){
    return(
      <p>Inventory</p>
    )
  }
});
//create an class and render through an id
// or  Create new DOM Element using React.createElement();
var StorePicker = React.createClass({
  render:function(){
    var name="Chandru";
    return (
    <form className="store-selector">
      <h2>Please Enter A Store {name}</h2>
      <input type="text" ref="storeId" required/>
      <input type="submit"/>
    </form>
    )
    //Or
    //return React.createElement('p',{className:'testing'},'Hello World');
  }
});

ReactDOM.render(<App/>,document.querySelector('#main'));
