

const CustomButton = () =>{

    const counter = 0

    const sumar = ()=>{
        counter++
    }

    return(
        <div>
        <button onClick={ sumar }>Pedro</button>
        <h2>{counter}</h2>
        </div>
    )
}

export default CustomButton