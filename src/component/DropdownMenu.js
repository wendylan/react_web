import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const menu = (
    <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title="sub menu">
            <Menu.Item>3rd menu item</Menu.Item>
            <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" >
            <Menu.Item>5d menu item</Menu.Item>
            <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
    </Menu>
);

class App extends React.Component {
    render(){
        return(
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="">
                    Cascading menu <Icon type="down" />
                </a>
            </Dropdown>
        );
    }
}

export default App;
