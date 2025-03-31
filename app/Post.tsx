import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";

export default function PostRequest({handleChange,isJson}) {
        return (
            <div className="grid w-full gap-1.5 my-20">
                <Label htmlFor="message-2">Body</Label>
                <Textarea
                            onChange={handleChange}
                            placeholder="Type your Body here"
                            className={`h-[500px] w-[300px] ${isJson ? "text-gray-900" : "text-red-500"}`}
                            id="message-2 " />
            </div>
        )

}