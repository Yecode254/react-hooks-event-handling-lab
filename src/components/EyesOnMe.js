// Code EyesOnMe Component Here
import React from "react";


function EyesOnMe(){
    function blur(){
        return(console.log('Hey! Eyes on me!'))
    }
    function focus(){
        return(console.log('Good!'))
    }
    return(
        <div>
<button onBlur={blur} onFocus={focus}>Eyes on me</button>
</div>
)
};
export default EyesOnMe