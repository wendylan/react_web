import React from 'react';
// import { Breadcrumb } from 'antd';
//
// class App extends React.Component {
//     render(){
//         return(
//             <Breadcrumb>
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
//                 <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
//                 <Breadcrumb.Item>An Application</Breadcrumb.Item>
//             </Breadcrumb>
//         );
//     }
// }
// export default App;

// import { Breadcrumb } from 'antd';
// class App extends React.Component {
//     render(){
//         return(
//             <Breadcrumb separator=">">
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
//                 <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
//                 <Breadcrumb.Item>An Application</Breadcrumb.Item>
//             </Breadcrumb>
//         );
//     }
// }
// export default App;

// router@3下的情况
// import { Router, Route, Link, hashHistory } from 'react-router';
// import '../res/styles/App.css';
// import { Breadcrumb ,Alert } from 'antd';
//
// const Apps = () => (
//   <ul className="app-list">
//     <li>
//       <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
//     </li>
//     <li>
//       <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
//     </li>
//   </ul>
// );
//
// const Home = ({ routes, params, children }) => (
//   <div className="demo">
//     <div className="demo-nav">
//       <Link to="/">Home</Link>
//       <Link to="/apps">Application List</Link>
//     </div>
//     {children || 'Home Page'}
//     <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
//     <Breadcrumb routes={routes} params={params} />
//   </div>
// );
//
// class App extends React.Component {
//     render(){
//         return(
//             <Router history={hashHistory}>
//                 <Route name="home" breadcrumbName="Home" path="/" component={Home}>
//                     <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}>
//                         <Route name="app" breadcrumbName="Application:id" path=":id">
//                             <Route name="detail" breadcrumbName="Detail" path="detail" />
//                             </Route>
//                     </Route>
//                 </Route>
//             </Router>
//         );
//     }
// }
//
// export default App;

// router@4下的情况
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
const Home = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Switch>
        <Route path="/apps" component={Apps} />
        <Route render={() => <span>Home Page</span>} />
      </Switch>
      <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
});

class App extends React.Component {
    render(){
        return(
            <Router>
              <Home />
            </Router>
        );
    }
}

export default App;
