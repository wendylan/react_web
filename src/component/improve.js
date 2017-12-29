import React from 'react';
import { Input } from 'antd';
import '../res/styles/App.css';

// 输入一个数进行判断是否沸
// class BoilingVerdict extends React.Component {
//     render(){
//         if (this.props.celsius >= 100) {
//         return <p>水会烧开</p>;
//         }
//         return <p>水不会烧开</p>;
//     }
// }

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = { temperature: '' };
//     }

//     handleChange(e) {
//         this.setState({ temperature: e.target.value });
//     }

//     render() {
//         const temperature = this.state.temperature;
//         return ( 
//             <div >
//                 <legend > 输入一个摄氏温度 < /legend> 
//                 <input value = { temperature } onChange = { this.handleChange } /> 
//                 <BoilingVerdict celsius = { parseFloat(temperature) } /> 
//             </div>
//         );
//     }
// }

// export default Calculator;

// 摄氏度或者华氏度
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;
//     return (
//       <div>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </div>
//     );
//   }
// }

// class Calculator extends React.Component {
//   render() {
//     return (
//       <div>
//         <TemperatureInput scale="c" />
//         <TemperatureInput scale="f" />
//       </div>
//     );
//   }
// }

// export default Calculator;



// 摄氏度或者华氏度及时转换
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class BoilingVerdict extends React.Component {
    render(){
        if (this.props.celsius >= 100) {
        return <p>水会烧开</p>;
        }
        return <p>水不会烧开</p>;
    }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <Input value={temperature} onChange={this.handleChange} />
      </div>
    );
  }
}

let letterStyle = { padding: 10, margin: 50, width: 200 };

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div style={ letterStyle }>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;