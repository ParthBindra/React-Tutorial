import { useState,useEffect } from "react";
 const useFetch =(url)=>{
    const [data, SetData]=useState(null);
    const[isPending,setPending]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{

        const abortCont=new AbortController();

        setTimeout(()=>{
         fetch(url,{signal: abortCont.signal})
         .then(res=>{
           
             if(!res.ok){
                 throw Error('could not fetch ');
 
            }
              return res.json();
         })
         .then(data=>{
             
             SetData(data);
             setPending(false);
             setError(null);
         })
         .catch(err=>{
            if(err.name==='AbortError'){
                console.log('fethc error')
            }
            else{
             setPending(false);
 
            setError(err.message);
            }
         })
        },1000);
        return()=>abortCont.abort();
     },[url]);

return {data,isPending,error}
}

export default useFetch;