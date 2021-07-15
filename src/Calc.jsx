
function Sum(a,b){
    let sum=a+b;
    return sum ;
}
function Sub(a,b){
    return a-b ;
}

function Div(a,b){
    let div=a/b;
    div=div.toFixed(2);
    return div;
}

function mul(a,b){
    return a*b ;
}

export default Sum;

export {Sub,Div,mul};