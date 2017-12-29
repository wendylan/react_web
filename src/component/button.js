// 第一种
// import React, { Component } from 'react';
// import {Button} from 'antd';
// import './res/styles/App.css';

// class App extends Component {
//   render() {
//     return (
//         <div className="App">
//             <Button type="primary">Button</Button>
//              <Button type="primary">Primary</Button>
//             <Button>Default</Button>
//             <Button type="dashed">Dashed</Button>
//             <Button type="danger">Danger</Button>
//             <Button type="primary" shape="circle" icon="search" />
//             <Button type="primary" icon="search">Search</Button>
//             <Button shape="circle" icon="search" />
//             <Button icon="search">Search</Button>
//             <br />
//             <Button shape="circle" icon="search" />
//             <Button icon="search">Search</Button>
//             <Button type="dashed" shape="circle" icon="search" />
//             <Button type="dashed" icon="search">Search</Button>
//         </div>
//     );
//   }
// }

// export default App;
//
// 第二种
import React from 'react';
import '../res/styles/App.css';
import { Button, Radio, Icon } from 'antd';

class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
        <div>
            <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br /><br />
            <Button type="primary" size={size}>Primary</Button>
            <Button size={size}>Normal</Button>
            <Button type="dashed" size={size}>Dashed</Button>
            <Button type="danger" size={size}>Danger</Button>
            <br />
            <Button type="primary" shape="circle" icon="download" size={size} />
            <Button type="primary" icon="download" size={size}>Downloadfddd</Button>
            <br />
            <Button.Group size={size}>
                <Button type="primary">
                    <Icon type="left" />Backward
                </Button>
                <Button type="primary">
                    Forward<Icon type="right" />
                </Button>
            </Button.Group>
            <Icon type="step-backward" />
            <Icon type="chrome" />
            <Icon type="question" style={{ fontSize: 16, color: '#08c' }} spin/>
        </div>
    );
  }
}

export default ButtonSize;
