import React from 'react';
import ReactDOM from 'react-dom';
// import png from './res/image/1.png';
import './res/styles/index.css';
import './res/styles/App.css';
import registerServiceWorker from './registerServiceWorker';
// import App from './component/App.js';
// import Hello from './component/hello.js';
// import AntdDate from './component/antdDate.js';
// import Welcome from './component/Welcome.js';
// import PropsTest from './component/propsTest.js';
import ButtonTest from './component/button.js';
// import GridTest from './component/grid.js';
// import Prevent from './component/prevent.js';
// import Conditional from './component/conditional.js';
// import Comment from './component/comment.js';
// import ClassTest from './component/classTest.js';
// import IsLoggin from './component/isLoggin.js';
// import WarnTest from './component/warnTest.js';
// import ListTest from './component/ListTest.js';
// import Expression from './component/expression.js';
// import WarnBar from './component/warnBar.js';
// import SideBar from './component/sideBar.js';
// import FormTest from './component/formTest.js';
// import Improve from './component/improve.js';
// import IncludeContact from './component/includeContact.js';
// import FilterableProductTable from './component/product/FilterableProductTable.js';
// import Product from './component/product/product.js';
// import Func from './component/func.js';
// import Layout from './component/Layout.js';
// import Affix from './component/Affix.js';
// import Breadcrumb from './component/Breadcrumb.js';
// import DropdownMenu from './component/DropdownMenu.js';
// import Menu from './component/Menu.js';
// import Pagination from './component/Pagination.js';
// import Step from './component/Step.js';
// import AutoComplete from './component/AutoComplete.js';

// const user = {'name': 'wendy', 'author':'wgh', 'avatarUrl': png};
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

// var PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// ReactDOM.render(<Conditional isLoggedIn={false} />, document.getElementById('root'));
// ReactDOM.render(<Comment user={user} text={'hello world'}/>, document.getElementById('root'));
// ReactDOM.render(<ClassTest date={new Date()} />, document.getElementById('root'));
// ReactDOM.render(<ListTest numbers={[2,4,6,8,10]}/>, document.getElementById('root'));
// ReactDOM.render(<Expression unreadMessages={messages} />, document.getElementById('root'));
// ReactDOM.render(<SideBar posts={posts}  />, document.getElementById('root'));
ReactDOM.render(<ButtonTest  />, document.getElementById('root'));
// ReactDOM.render(<Product products={PRODUCTS} />, document.getElementById('root'));
// ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('root'));
registerServiceWorker();
