const denom = [2000,500,200,100,50,20,10,5,2,1]
const amount = 99761;
const notes = [];

for(let i=0; i<denom.length;i++)
{
    if(denom[i]<=amount)
    {
        notes[i]=Math.floor(amount/denom[i])
        amount = amount - (notes[i]*denom[i])
    }
    else
    {
        notes[i] = 0
    }
    
}
const index = 0;
while(index<denom.length){
    console.log(denom[index],' - ',notes[index])
    index++
}
