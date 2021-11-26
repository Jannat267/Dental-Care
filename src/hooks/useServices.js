import { useEffect } from "react";
import { useState } from "react";
// hook for use services
const useServices=()=>{
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);   
            });
    },[]);
    // return value of hook
    return [services]
}
export default useServices;