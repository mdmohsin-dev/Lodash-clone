export default function last(array) {
    if(!Array.isArray(array)){
        return
    }
    if(array.length==0){
        return -1
    }
    return array[array.length-1]
}
