
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
// In @/app/query.js or wherever your Query component is defined
const Query = ({ query, handleChange, handleDelete, showDeleteButton = true }) => {
    return (
        <div className="flex gap-x-3">
            <Input
                name="key"
                value={query.key}
                onChange={handleChange}
                placeholder="Parameter key"
                className="w-1/2"
            />
            <Input
                name="value"
                value={query.value}
                onChange={handleChange}
                placeholder="Parameter value"
                className="w-1/2"
            />
            {showDeleteButton && (
                <Button
                    variant="destructive"
                    onClick={handleDelete}
                    className="cursor-pointer"
                >
                    Delete
                </Button>
            )}
        </div>
    );
};

export default Query;