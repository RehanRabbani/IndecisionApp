import React from 'react'
 class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.additem =this.additem.bind(this);
        this.state = {
            error:undefined
        }
    }
    additem (e){
        e.preventDefault();
        const option = e.target.elements.hamza.value.trim();
        const error = this.props.additem(option);
    //    this.setState(()=>{
    //        return{
    //            error
    //        };
    //    });
      this.setState(()=>({error}));
        if(!error)
        {
            e.target.elements.hamza.value = ' ';
        }
    }
    

    render(){
        return(
            <div>
            {this.state.error && (<p>{this.state.error}</p>)}
            <form onSubmit={this.additem}>
                <input type="text" name="hamza"  />
                <button  >AddOption</button>
            </form>
            </div>
            
        );

    }
}
export default AddOption