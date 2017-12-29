import React from 'react';
// import { Steps } from 'antd';
// const Step = Steps.Step;
//
// class App extends React.Component {
//     render(){
//         return(
//             <Steps current={1}>
//                 <Step title="Finished" description="This is a description." />
//                 <Step title="In Progress" description="This is a description." />
//                 <Step title="Waiting" description="This is a description." />
//             </Steps>
//         );
//     }
// }
// export default App;

// import { Steps, Icon } from 'antd';
// const Step = Steps.Step;
//
// class App extends React.Component {
//     render(){
//         return(
//             <Steps>
//                 <Step status="finish" title="Login" icon={<Icon type="user" />} />
//                 <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
//                 <Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
//                 <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
//             </Steps>
//         );
//     }
// }
//
// export default App;

import { Steps } from 'antd';
const Step = Steps.Step;

class App extends React.Component{
    render(){
        return(
            <Steps current={1} status="error">
                <Step title="Finished" description="This is a description" />
                <Step title="In Process" description="This is a description" />
                <Step title="Waiting" description="This is a description" />
            </Steps>
        );
    }
}

export default App;
