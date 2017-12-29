import React from 'react';
// import './res/styles/App.css';
// import { Button } from 'antd';

// export default class ActionLink extends React.Component{
// 	handleClick(e){
// 		e.preventDefault();
// 		console.log('The link was clicked.');
// 	}
// 	render(){
// 		return(
// 			<a href="#" onClick={this.handleClick}>Click me</a>
// 		);
// 	}
// }
// 

// export default class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <Button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </Button>
//     );
//   }
// }

// export default class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }

//   render() {
//     // This syntax ensures `this` is bound within handleClick
//     return (
//       <Button onClick={(e) => this.handleClick(e)}>
//         Click me
//       </Button>
//     );
//   }
// }
// 
// export default class LoggingButton extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   // Warning: this is *experimental* syntax.
//   handleClick = () => {
//     console.log('this is:', this);
//   }

//   render() {
//     return (
//       <Button onClick={this.handleClick}>
//         Click me
//       </Button>
//     );
//   }
// }

// // <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
// 

// 嵌套组件的使用的一种写法：
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// export default App;

// 
// // 嵌套组件的使用的另外一种写法：
class Welcome extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <h1>Hello, {this.props.name}</h1>;
	}
}

class App extends React.Component {
	render(){
		return (
		<div>
		  <Welcome name="Sara" />
		  <Welcome name="Cahal" />
		  <Welcome name="Edite" />
		</div>
		);
	}
}

export default App;