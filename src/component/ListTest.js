import React from 'react';

// 第一种方式：
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>{number}</li>
// );

// class ListTest extends React.Component{
// 	render(){
// 		return(
// 			<ul>{listItems}</ul>
// 		);
// 	}
// }
// export default ListTest;

// 第二种方式
class NumberList extends React.Component {
	render(){
		const numbers = this.props.numbers;
		const listItems = numbers.map((number) =>
		<li key={number.toString()}>{number}</li>
		);
		return (
			<ul>{listItems}</ul>
		);
	}
}

export default NumberList;