import React, { useId } from "react";

const Input = React.forwardRef(
    ({
        label,
        type="text",
        className="",
        ...props
    }, ref) => {
        const id = useId();
        return <div class="w-full">
            {
                label && <lable 
                className="inline-block mb-1 pl-1"
                htmlFor={id}
                {...props}
                >
                    {label}
                </lable>
            }
            <input type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            >

            </input>
        </div>
    }
)
export default Input;
