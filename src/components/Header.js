import React from 'react'
const Header = (props) =>{
    return (
        <div>
            <h1 className ="title">{props.title}</h1>
            <h2>{props.subtitle} </h2>
        </div>
        );
};
export default Header
 Header.defaultProps ={
     title:'Indecision App'
 }
// class Header extends React.Component{
//     render(){
//         return (
//                 <div>
//                     <h1>{this.props.title}</h1>
//                     <h2>{this.props.subtitle} </h2>
//                 </div>
//                 );
//     }
// }

