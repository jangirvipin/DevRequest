'use client';
import {useState} from "react";
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import getUrl from "@/lib/main";
import getStatusColor from "@/lib/getStatusColor";
import Query from "@/app/query";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import PostRequest from "@/app/Post";



const Home = () => {
    const [url, setUrl] = useState("");
    const [state, setState] = useState({
        data: "",
        status: null,
        success: null,
    });
    const [request,setRequest]=useState("GET");
    const [isToken,setToken]=useState(false);
    const [body,setBody]=useState<JSON>(null);
    const [isJson,setJson]=useState(false);
    const [token,setTokenValue]=useState("");
    // Initialize with an empty array instead of a single query
    const [queries, setQueries] = useState([
        { key: "", value: "" } // Initial empty query
    ]);

    // Handle input change for a specific query at index
    const handleChange = (index, e) => {
        const newQueries = [...queries];
        newQueries[index] = {
            ...newQueries[index],
            [e.target.name]: e.target.value
        };
        setQueries(newQueries);
    };

    // Add a new query to the list
    const handleAddQuery = () => {
        setQueries([...queries, { key: "", value: "" }]);
    };

    const handleBodyChange=(e)=>{
        console.log(body)
        const value=e.target.value;
        setBody(value);
        try{
            JSON.parse(value);
            setJson(true);
        }catch (e){
            console.log(e)
            setJson(false);
        }
    }
    // Delete a query at specified index
    const handleDelete = (index) => {
        // Prevent deleting if only one query is left
        if (queries.length <= 1) return;

        const newQueries = queries.filter((_, i) => i !== index);
        setQueries(newQueries);
    };

    const handleSubmit = async () => {
        // Convert queries array to object format for API call
        const queryParams = {};
        queries.forEach(q => {
            if (q.key) queryParams[q.key] = q.value;
        });
        console.log(queryParams);
        console.log(queries)

        const data = await getUrl(url, queryParams,request,isToken?token:undefined,body);
        if (data.success) {
            setState({
                data: data.data,
                status: data.status,
                success: data.success
            });
        } else {
            setState({
                status: data.status,
                success: data.success,
                data: null,
            });
        }
    };

    const renderObject = (obj, isArray) => {
        return (
            <div>
                <div>{`{`}</div>
                <div className="ml-5">
                    {Object.entries(obj).map(([key, value]) => (
                        <div key={key} className="py-1 text-blue-500 font-light">
                            <span className="text-red-900 font-medium mr-2">{`"${key}"`}:</span>
                            {JSON.stringify(value)}
                        </div>
                    ))}
                </div>
                <div>
                    {`}`} {isArray && <span className="text-black">,</span>}
                </div>
            </div>
        );
    };

    const renderData = () => {
        console.log(state.data);
        if (Array.isArray(state.data)) {
            return state.data.map((item, index) => (
                <div key={index}>
                    {renderObject(item, true)}
                </div>
            ));
        } else {
            return renderObject(state.data, false);
        }
    };

    return (
        <div className="flex gap-x-10 items-center justify-center h-screen">
            <div className="flex flex-col gap-y-5">
                <div className="flex gap-x-3 ">
                    <Input
                        value={url}
                        className="w-4xl"
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                    />
                    <Button
                        className="cursor-pointer"
                        onClick={handleSubmit}
                    >
                        Send
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger>{request}</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Request Type</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={()=>setRequest("GET")}>GET</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>setRequest("POST")}>POST</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

                {queries.map((query, index) => (
                    <Query
                        key={index}
                        query={query}
                        handleChange={(e) => handleChange(index, e)}
                        handleDelete={() => handleDelete(index)}
                        showDeleteButton={queries.length > 1}
                    />
                ))}

                <Button
                    variant="outline"
                    className="cursor-pointer w-full"
                    onClick={handleAddQuery}
                >
                    Add Query Parameter
                </Button>
                <div className="flex gap-x-10">
                    <Button onClick={()=>setToken(!isToken)}>
                        {isToken?"Remove token":"Add token"}
                    </Button>

                    {isToken &&
                        <Input
                        onChange={(e)=>setTokenValue(e.target.value)}
                        />
                    }
                </div>

                <div className="border border-black p-4 max-w-4xl overflow-x-auto h-96 overflow-y-auto w-full">
                    <div style={{ color: getStatusColor(state.status) }}>
                        Status: {state.status || "None"}
                    </div>

                    {state.data ? renderData() : "{ }"}
                </div>
            </div>
            {request==="POST" &&
                <div className="">
                    <PostRequest
                        isJson={isJson}
                        handleChange={handleBodyChange} />
                </div>
            }
        </div>
    );
}

export default Home;