import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class App extends React.Component {
	render(){
		return (
			<div>
				<Welcome name="Wendy" />
				<Welcome name="Lacey" />
				<Welcome name="Kim" />
			</div>
		);
	}
}

export default App;