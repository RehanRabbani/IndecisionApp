import React from 'react'
const Option = (props) =>{
    return(
        <div className="spacing">
        
        {props.arrayText}
        <button 
        type="button"
        className="btn btn-outline-primary"
        onClick ={(e)=>{
            props.removeItem(props.arrayText);
        }}
        >
        Remove
        </button>
       
        </div>
        
    );
};

// class Option extends React.Component{
//     render(){
//         return(
//             <ul>
//             <li>{this.props.arrayText}</li>
//             </ul>
            
//         );
//     }
// }
export default Option