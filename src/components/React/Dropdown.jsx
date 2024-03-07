import { useEffect, useMemo, useRef, useState } from "react";

import { conditionalClassNames as cc } from "@utils/ReactConditionalClassNames";

function Dropdown({children, text = 'dropdown', center}) {

    const dropdownRef = useRef();

    const [element, setElement] = useState(null);

    useEffect(() => {

        (async () => {

            const bsDropdown = (await import("bootstrap/js/src/dropdown")).default;

            console.log(bsDropdown);
    
            const dropdown = new bsDropdown(dropdownRef.current, {
    
                popperConfig(defaultBsPopperConfig) {
    
                  const newPopperConfig = {...defaultBsPopperConfig}
    
                  return newPopperConfig;
                }
            });
    
            setElement(dropdown);

        })();

    }, []);

    const toggle = () => {

        element?.toggle();
    }

    const items = useMemo(() => {

        if(Array.isArray(children)) return children;

    }, [children]);

    return (<div 
        className={`` + cc({
            'dropdown-center': center,
            'dropdown': !center
        })}
    >

        <button className="btn btn-secondary dropdown-toggle" type="button" ref={dropdownRef} onClick={toggle}>
            {text}
        </button>

        <ul className="dropdown-menu">

            {
                items.map((item, i) => {

                    return <li key={i}>
                        <div className="dropdown-item">
                            {item}
                        </div>
                    </li>
                })
            }
        </ul>
    </div>);
}

export default Dropdown;