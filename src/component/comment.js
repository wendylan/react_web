import React from 'react';

// 第三种方式(一个function):
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                  src={props.user.avatarUrl}
                  alt={props.user.name}
                />
                <div className="UserInfo-name">
                  {props.user.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
            </div>
        </div>
    );
}
export default Comment;

// 第二种方式(多个function)：
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.user} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//     </div>
//   );
// }
// export default Comment;

// 第一种方法(ES6)：
// class Avatar extends React.Component{
//     render(){
//         return(
//           <img className="Avatar"
//               src={this.props.user.avatarUrl}
//               alt={this.props.user.name}
//             />  
//         );
//     }
// }

// class UserInfo extends React.Component{
//     render(){
//         return(
//             <div className="UserInfo">
//               <Avatar user={this.props.user} />
//               <div className="UserInfo-name">
//                 {this.props.user.name}
//               </div>
//             </div>
//         );
//     }
// }

// class Comment extends React.Component{
//     render(){
//         return(
//             <div className="Comment">
//               <UserInfo user={this.props.user} />
//               <div className="Comment-text">
//                 {this.props.text}
//               </div>
//             </div>
//         );
//     }
// }
// export default Comment;