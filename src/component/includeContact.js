import React from 'react';

// 简单的包含关系
// class FancyBorder extends React.Component {
// 	render(){
// 		return (
// 			<div>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }

// class WelcomeDialog extends React.Component  {
// 	render(){
// 		return (
// 			<FancyBorder color="blue">
// 				<h1 className="Dialog-title">
// 					Welcome
// 				</h1>
// 				<p className="Dialog-message">
// 					Thank you for visiting our spacecraft!
// 				</p>
// 			</FancyBorder>
// 		);
// 	}
// }

// export default WelcomeDialog;
// 

// 左右
// let style = {
// 	SplitPane : {
// 		width:200,
// 		backgroud:'red',
// 		height:200,
// 	},
// 	SplitPaneLeft : {
// 		display : 'inline-block',
// 		marginRight : 50
// 		// float : 'left'
// 	},
// 	SplitPaneRight : {
// 		// float : 'left'
// 		display : 'inline-block'
// 	}
// }; 
// function SplitPane(props) {
//   return (
//     <div style={style.SplitPane}>
//       <div style={style.SplitPaneLeft}>
//         {props.left}
//       </div>
//       <div style={style.SplitPaneRight}>
//         {props.right}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <SplitPane
//       left={
//        ' test'
//       }
//       right={
//        'testr'
//       } />
//   );
// }

// export default App;
// 
// 特殊示例
// class FancyBorder extends React.Component {
// 	render(){
// 		return (
// 			<div>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// }
// class Dialog extends React.Component {
// 	render(){
// 		return (
// 			<FancyBorder color="blue">
// 				<h1>
// 					{this.props.title}
// 				</h1>
// 				<p>
// 					{this.props.message}
// 				</p>
// 			</FancyBorder>
// 		);
// 	}
// }

// class WelcomeDialog extends React.Component{
// 	render(){
// 		return (
// 			<Dialog
// 				title="Welcome"
// 				message="Thank you for visiting our spacecraft!" />
// 		);
// 	}
// }

// export default WelcomeDialog;
// 
// 弹出称谓和你所输入的数据
class FancyBorder extends React.Component {
	render(){
		return (
			<div>
				{this.props.children}
			// </div>
		);
	}
}

class Dialog extends React.Component {
	render(){
		return (
			<FancyBorder >
			  <h1>
			    {this.props.title}
			  </h1>
			  <p>
			    {this.props.message}
			  </p>
			  {this.props.children}
			// </FancyBorder>
		);
		
	}
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      // </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

export default SignUpDialog;