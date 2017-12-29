import React from 'react';
// import { Button  } from 'antd';

// class App extends React.Component {
//   render() {
//     return (
//         <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
//             <Button type="primary" ghost>Primary</Button>
//             <Button ghost>Default</Button>
//             <Button type="dashed" ghost>Dashed</Button>
//             <Button type="danger" ghost>danger</Button>
//       </div>
//     );
//   }
// }
// export default App;

// import { Button, Icon } from 'antd';
// const ButtonGroup = Button.Group;
//
// class App extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h4>Basic</h4>
//                 <ButtonGroup>
//                   <Button>Cancel</Button>
//                   <Button>OK</Button>
//                 </ButtonGroup>
//                 <ButtonGroup>
//                   <Button disabled>L</Button>
//                   <Button disabled>M</Button>
//                   <Button disabled>R</Button>
//                 </ButtonGroup>
//                 <ButtonGroup>
//                   <Button>L</Button>
//                   <Button>M</Button>
//                   <Button>R</Button>
//                 </ButtonGroup>
//
//                 <h4>With Icon</h4>
//                 <ButtonGroup>
//                   <Button type="primary">
//                     <Icon type="left" />Go back
//                   </Button>
//                   <Button type="primary">
//                     Go forward<Icon type="right" />
//                   </Button>
//                 </ButtonGroup>
//                 <ButtonGroup>
//                   <Button type="primary" icon="cloud" />
//                   <Button type="primary" icon="cloud-download" />
//                 </ButtonGroup>
//               </div>
//         );
//     }
// }
//
// export default App;


// import { Layout, Menu, Breadcrumb } from 'antd';
// import '../res/styles/App.css';
// const { Header, Content, Footer } = Layout;
//
// class App extends React.Component {
//     render(){
//         return(
//             <div id="components-layout-demo-top">
//                 <Layout className="layout">
//                     <Header>
//                       <div className="logo" />
//                       <Menu
//                         theme="dark"
//                         mode="horizontal"
//                         defaultSelectedKeys={['2']}
//                         style={{ lineHeight: '64px' }}
//                       >
//                         <Menu.Item key="1">nav 1</Menu.Item>
//                         <Menu.Item key="2">nav 2</Menu.Item>
//                         <Menu.Item key="3">nav 3</Menu.Item>
//                       </Menu>
//                     </Header>
//                     <Content style={{ padding: '0 50px' }}>
//                       <Breadcrumb style={{ margin: '16px 0' }}>
//                         <Breadcrumb.Item>Home</Breadcrumb.Item>
//                         <Breadcrumb.Item>List</Breadcrumb.Item>
//                         <Breadcrumb.Item>App</Breadcrumb.Item>
//                       </Breadcrumb>
//                       <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
//                     </Content>
//                     <Footer style={{ textAlign: 'center' }}>
//                       Ant Design ©2016 Created by Ant UED
//                     </Footer>
//                   </Layout>
//             </div>
//
//         );
//     }
// }
//
// export default App;
//
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import '../res/styles/App.css';
// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;
//
// class App extends React.Component {
//     render(){
//         return(
//             <div id="components-layout-demo-top-side">
//                 <Layout>
//                 <Header className="header">
//                   <div className="logo" />
//                   <Menu
//                     theme="dark"
//                     mode="horizontal"
//                     defaultSelectedKeys={['2']}
//                     style={{ lineHeight: '64px' }}
//                   >
//                     <Menu.Item key="1">nav 1</Menu.Item>
//                     <Menu.Item key="2">nav 2</Menu.Item>
//                     <Menu.Item key="3">nav 3</Menu.Item>
//                   </Menu>
//                 </Header>
//                 <Content style={{ padding: '0 50px' }}>
//                   <Breadcrumb style={{ margin: '16px 0' }}>
//                     <Breadcrumb.Item>Home</Breadcrumb.Item>
//                     <Breadcrumb.Item>List</Breadcrumb.Item>
//                     <Breadcrumb.Item>App</Breadcrumb.Item>
//                   </Breadcrumb>
//                   <Layout style={{ padding: '24px 0', background: '#fff' }}>
//                     <Sider width={200} style={{ background: '#fff' }}>
//                       <Menu
//                         mode="inline"
//                         defaultSelectedKeys={['1']}
//                         defaultOpenKeys={['sub1']}
//                         style={{ height: '100%' }}
//                       >
//                         <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
//                           <Menu.Item key="1">option1</Menu.Item>
//                           <Menu.Item key="2">option2</Menu.Item>
//                           <Menu.Item key="3">option3</Menu.Item>
//                           <Menu.Item key="4">option4</Menu.Item>
//                         </SubMenu>
//                         <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
//                           <Menu.Item key="5">option5</Menu.Item>
//                           <Menu.Item key="6">option6</Menu.Item>
//                           <Menu.Item key="7">option7</Menu.Item>
//                           <Menu.Item key="8">option8</Menu.Item>
//                         </SubMenu>
//                         <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
//                           <Menu.Item key="9">option9</Menu.Item>
//                           <Menu.Item key="10">option10</Menu.Item>
//                           <Menu.Item key="11">option11</Menu.Item>
//                           <Menu.Item key="12">option12</Menu.Item>
//                         </SubMenu>
//                       </Menu>
//                     </Sider>
//                     <Content style={{ padding: '0 24px', minHeight: 280 }}>
//                       Content
//                     </Content>
//                   </Layout>
//                 </Content>
//                 <Footer style={{ textAlign: 'center' }}>
//                   Ant Design ©2016 Created by Ant UED
//                 </Footer>
//                 </Layout>
//             </div>
//         );
//     }
// }
//
// export default App;
//

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../res/styles/App.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {collapsed: false};
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render(){
        return(
            <div id="components-layout-demo-side">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>User</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>Team</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                      </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                Bill is a cat.
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Wendy
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
