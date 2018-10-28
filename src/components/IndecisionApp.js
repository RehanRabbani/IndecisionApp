import React from 'react';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js'
import AddOption from './AddOption.js'
import OptionModal from './OptionModal'
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.getAction = this.getAction.bind(this);
        this.additem =this.additem.bind(this);
        this.removeItem=this.removeItem.bind(this);
        this.state={
            array:[],
            arraySelectedOption:undefined
        };
    }
    componentDidMount()
    {
            try{
                const json = localStorage.getItem('array');
                const o = JSON.parse(json);
            if(o){
                this.setState(()=>({array:o}));
            }
            }
            catch(e)
            {

            }
            
        
    }
    componentDidUpdate(preProps,preState){
        if(preState.array.length !== this.state.array.length){
           const json = JSON.stringify(this.state.array);
            localStorage.setItem('array',json);
        }
        
    }
   removeAll =() =>{
    this.setState(()=>({ array:[]}));
   }
   removeItem = (optionToRemove)=>{
      this.setState((preState)=>({
        array:preState.array.filter((option)=>{
            return optionToRemove !== option;
        })
      }));
   }
  
   getAction = () =>{
      const randomNum = Math.floor(Math.random() * this.state.array.length);
      const option = this.state.array[randomNum];
      this.setState(()=>({arraySelectedOption:option}))
    
   }
   DeleteAction =() =>{
       this.setState(()=>({arraySelectedOption:undefined}))
   }
   additem =(option)=>{
       if(!option){
           return 'enter  items';
       }
       else if (this.state.array.indexOf(option) > -1) {
           return 'This item already exist';
       }
    //    this.setState((preState)=>{
    //        return{
               
    //            array:preState.array.concat([option])
    //        };
    //    })
       this.setState((preState)=>({array:preState.array.concat(option)}));
       
    
   }
    render(){
       
        let subtitle = "salam";
     
        
        return(
            <div className="mainDisplay">
                <Header  subtitle={subtitle}/>
                <Action
                 hasOptions={this.state.array.length>0}
                 getAction={this.getAction}
                />
                <Options
                 options={this.state.array}
                 removeAll={this.removeAll}
                 removeItem={this.removeItem}
                  />
                <AddOption
                additem ={ this.additem}
                />
                <OptionModal 
                arraySelectedOption={this.state.arraySelectedOption}
                DeleteAction ={this.DeleteAction}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps={
    array:[]
}
export default IndecisionApp