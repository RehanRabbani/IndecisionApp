import React from 'react'
const Action = (props) =>{
    return(
        <div>
             <button
               onClick ={props.getAction} 
              disabled={!props.hasOptions}
              >
              What Should I Do</button>
        </div>
 );
};
export default Action
// class Action extends React.Component{
    
//     render(){
//         return(
//                <div>
//                     <button
//                       onClick ={this.props.getAction} 
//                      disabled={!this.props.hasOptions}
//                      >
//                      What Should I Do</button>
//                </div>
//         );
//     }
// }