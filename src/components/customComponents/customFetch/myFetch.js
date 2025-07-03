import { useEffect, useState } from "react";

export default function useFetch(path){
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    useEffect(()=>{
        const fetcher=async()=>{
           try{
                setLoading(true)
                const response = await fetch(path)
                const data=await response.json()
                setData(data)
            }
            catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        fetcher()
    },[path])
    return {data,loading,error}
}