import React, { Component } from 'react';
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );


export default class Hello extends Component {
	render(){
		return getGreeting(user);
	}
}