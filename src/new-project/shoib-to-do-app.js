const templateTwoObject ={
  title:'wheather App',
  subtitle:'sunshine Application'
};
const templateTwo =(
    <div>
        <h1>{templateTwoObject.title+'!'}</h1>
        <p>{templateTwoObject.subtitle}</p>
    </div>

);
const user ={
name:'Rehan rabbani',
rollNum:'ct-057',
location:'karachi',
list:[],
fullName:'Rehan Rabbani'
};
//ES5 funtion
function getLocation(location){
    if(location)
    {
        return <p>Location:{location}</p>;
    }
}
// ES6 arroe function
const getName = (fullName) =>{
    return fullName.split(' ')[0];
}
//map function implementation
const multiplier = {
    numbers:[1,2,3],
    multiplyBy:5,
    multiplication(){
        return this.numbers.map((number)=>this.multiplyBy*number);
    }
};
const appRoot=document.getElementById('root');
// console.log(multiplier.multiplication());

const onSubmitForm = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        user.list.push(option);
        e.target.elements.option.value ='';
        render();
    }
    
}
const onRemoveAll = ()=>{
    user.list =[];
    render();
}

const render = () =>
{
    const template =(
        <div>
            <h1>Rehan Rabbani</h1>
            {user.rollNum && <p>{user.rollNum}</p>}
           
            {getLocation(user.location)}
            {getName(user.fullName)}
            <p>{multiplier.multiplication()+' '}</p>
            <p>{user.list.length>0?'here are your option':' '}</p>
            <p>{user.list.length}</p>
           
            <form onSubmit={onSubmitForm}>
                <input type="text" name='option'/>
                <button >check</button>
                

            </form>
            <button onClick={onRemoveAll}>Remove</button>
            <ol>
            {
                user.list.map((lisp)=>{
                    return <li key={lisp}>{lisp}</li>

                })
            }
            </ol>
        </div>
    );
    ReactDOM.render(template,appRoot);
}
render();
