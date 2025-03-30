'use client';

import {useState} from "react";
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import getUrl from "@/lib/main";

const Home = () => {
    const [state, setState] = useState<string>("");
    const [data, setData] = useState<object | []>(null);

    const handleSubmit = async () => {
        const data = await getUrl(state);
        console.log(data);
        setData(data.data);
    }

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
        if (!data) return null;
        if (Array.isArray(data)) {
            return data.map((item, index) => (
                <div key={index}>
                    {renderObject(item, true)}
                </div>
            ));
        } else {
            return renderObject(data, false);
        }
    };

    return (
        <div className="flex items-center  justify-center h-screen">
            <div className="flex flex-col gap-y-5">
                <div className="flex gap-x-3 ">
                    <Input value={state} className="w-4xl" onChange={(e) => setState(e.target.value)} />
                    <Button className="cursor-pointer" onClick={handleSubmit}>Send</Button>
                </div>
                <div className="border border-black p-4 max-w-4xl overflow-x-auto h-96   overflow-y-auto w-full">
                    {data ? renderData() : "No data yet"}
                </div>
            </div>
        </div>
    )
}
export default Home;