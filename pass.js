function generate(l,lo,up,nu,sy){
    let low="abcdefghijklmnopqrstuvwxyz";
    let upp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num="0123456789";
    let sym="!@#$%^&*()_-=+?/.,><:'~`";
    let allow="";
    let pass="";
    allow+=lo?low:"";
    allow+=up?upp:"";
    allow+=nu?num:"";
    allow+=sy?sym:"";
    for(let i=0;i<l;i++){
        let r=Math.floor(Math.random()*allow.length);
        pass+=allow[r];
    }
    return pass;

}
const l=12;
const lo=true;
const up=false;
const nu=true;
const sy=false;
let y=generate(l,lo,up,nu,sy);
console.log(y);