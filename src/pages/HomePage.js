import { useParams, useLocation } from "react-router-dom"

function useQuery(){    //but should not be used query parameter
    return new URLSearchParams(useLocation().search);
}

export default function HomePage(){
    let {id} = useParams();
    let query = useQuery();
    return <div>
        Home Page url {id}
        {/* test with "http://localhost:3000/?name=Hello" */}
        Query Parameters {query.get("name")}     
    </div>
}