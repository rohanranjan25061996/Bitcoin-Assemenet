export const getDataOfTime = (data : any, time: String) =>{
    if(data){
       if(time === '24'){
           return data[0]
       }else if(time === '7'){
           let arr = []
           for(let i = 0; i < 7; i++){
               arr.push(data[i])
           }
           return arr
       }else if(time === '1'){
        let arr = []
        for(let i = 0; i < 30; i++){
            arr.push(data[i])
        }
        return arr
       }
    }
}

export const refineData = (data : any) => {
    if(data){
        let arr : any =  []
        data.forEach((element : any, index : Number) => {
            let payload = {}
            let elem = element.toString()
            elem = elem.split(",")
            let time = new Date(elem[0])
            let price = +(+elem[1] / 100).toFixed(2)
            payload = {
                uv: price,
                amt: price
            }
           arr.push(payload)
        });
        return arr
    }
}