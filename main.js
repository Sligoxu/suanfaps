let sort = (numbers) =>{
    for(let i=0;i<numbers.length-1;i++){
        let index = minIndex(numbers)
        swap(numbers,index,i)
    }
}
let minIndex = (numbers) =>{
    let index = 0
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]<numbers[index]){
            index=i
        }
    }
    return index
}
let swap =(array,i,j)=>{
    let temp=array[i]
    array[i]=array[j]
    array[j]=temp
}