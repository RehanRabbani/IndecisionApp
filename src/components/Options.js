import React from "react";
import Option from './Option.js'

const Options = (props) =>{
    return(
               
        <div>
        <button type="button" className="btn btn-primary btn-lg btn-block"  onClick ={props.removeAll}>Remove All</button>
       
        {props.options.length === 0 && (<p>Add item</p>)}
        {props.options.map((ar)=>(
            <Option
             key={ar} 
             arrayText={ar}
             removeItem={props.removeItem}
             />
        )
         

          )}
        </div>

    
);

};
export default Options
// class Options extends React.Component{
    // <button onClick ={props.removeAll}>Remove All</button>
//     render(){
//         return(
               
//                   <div>
//                   <button onClick ={this.props.removeAll}>Remove All</button>
//                   {this.props.options.map((ar)=><Option key={ar} arrayText={ar}/>
                   

//                     )}
//                   </div>

              
//         );

//     }
// }
