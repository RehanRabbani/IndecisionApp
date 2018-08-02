let count=0;
const subEvent = () =>{
    count--;
   render();
}
const resetVal =()=>{
  count=0;
  render();
}
const addEvent = ()=>{
    count++;
    render();
}

const render=()=>{
    const templateThree = (
        <div>
            <h3>count {count} </h3>
            <button onClick={subEvent}>-1</button>
            <button onClick={addEvent}>+1</button>
            <button onClick={resetVal}>reset</button>

        </div>
    
    );
    ReactDOM.render(templateThree,appRoot);
};
    render();
