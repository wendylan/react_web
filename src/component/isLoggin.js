import React from 'react';
import { Button } from 'antd';
import '../res/styles/App.css';

// 第一种方式
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
// export default Greeting;

// 第二种方式
// class UserGreeting extends React.Component {
// 	render(){
// 	  return <h1>Welcome back!</h1>;
// 	}
// }

// class GuestGreeting extends React.Component {
// 	render(){
// 		return <h1>Please sign up.</h1>;
// 	}
// }

// class Greeting extends React.Component {
// 	render(){
// 		const isLoggedIn = this.props.isLoggedIn;
// 		if (isLoggedIn) {
// 		return <UserGreeting />;
// 		}
// 		return <GuestGreeting />;
// 	}
// }
// export default Greeting;
// 
// 第三种方式加上button来控制：
function LoginButton(props) {
  return (
    <Button onClick={props.onClick}>
      Login
    </Button>
  );
}

function LogoutButton(props) {
  return (
    <Button onClick={props.onClick}>
      Logout
    </Button>
  );
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;