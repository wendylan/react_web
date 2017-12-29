import React from 'react';
import { Affix, Button } from 'antd';

class App extends React.Component{
    render(){
        return(
            <div>
                <Affix>
                  <Button type="primary">Affix top</Button>
                </Affix>
                <br />
                <Affix offsetBottom={0}>
                  <Button type="primary">Affix bottom</Button>
                </Affix>
              </div>
        );
    }
}

export default App;
