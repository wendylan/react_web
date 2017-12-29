import React from 'react';
import { Button } from 'antd';
import '../res/styles/App.css';

// 第一种方式：function
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!   {props.warn?'true':'false'}
//     </div>
//   );
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true}
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(prevState => ({
//       showWarning: !prevState.showWarning
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <Button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </Button>
//       </div>
//     );
//   }
// }

// 第二种方式class
class WarningBanner extends React.Component {
    render(){
        if (!this.props.warn) {
            return null;
        }
        return (
            <div className="warning">
                Warning!   {this.props.warn?'true':'false'}
            </div>
        );
    }

}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <Button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </Button>
      </div>
    );
  }
}

export default Page;