// Code Keypad Component Here

function Keypad (){
    function passLoad(){
        return( console.log('Entering password...'))
    }
    return (
        <div>
            <input type="password" onChange={passLoad}></input>
        </div>
    )
}

export default Keypad;