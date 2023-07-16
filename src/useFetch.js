import { useEffect, useState } from "react"

// making a custom hook.
// Note that custom hook name should start with 'use'
const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)



    // useEffect hook :- runs on every render. Useful for fetching data
     useEffect(() => {

        // abort controller{js API} to abort the fetching
        const abortCont = new AbortController();

        setTimeout(() => {
            // fetch has optional arguement. ie. signal
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if (!res.ok){
                        throw Error ("Couldn't fetch the data for that resource")
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch((err)=>{
                    // this if else block to not update state if fetch is aborted
                    if (err.name === "AbortError"){
                        console.log("Fetch aborted")
                    }
                    else{
                        setIsPending(false)
                        setError(err.message)
                    }
                })

        }, 1000)

        // cleanup function. used to run a function if interrupted/ fetch is done
        return () => abortCont.abort();

    }, [url]);
// we can return in array too. But by using object the order of grabing items doesn't matter. SO.
    return {data, isPending, error};
}

export default useFetch;