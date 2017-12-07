   export const  queryData =  (data)=> {
        let str = '?'
        Object.keys(data).map(k=>{
          if(data[k]) str+= `${k}=${data[k]}&`
        })

       return str

   }