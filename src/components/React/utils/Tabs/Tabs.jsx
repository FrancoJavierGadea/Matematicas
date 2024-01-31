import { useMemo, useState } from "react";
import "./Tabs.css";
import { conditionalClassNames as cc } from "@utils/ReactConditionalClassNames";

function Tabs({children, fill, maxWidth}) {

    const childs = useMemo(() => {

        return children.reduce((acc, child) => {

            if(child.props.slot){

                if(!acc[child.props.slot]) acc[child.props.slot] = [];

                acc[child.props.slot].push(child);
            }
            else {

                if(!acc['default']) acc['default'] = [];

                acc['default'].push(child);
            }

            return acc;

        }, {});

    }, [children]);

    const [current, setCurrent] = useState(() => {

        return childs.default ? 'default' : Object.keys(childs).at(0)
    });

    const handleClick = (e) => {

        const value = e.currentTarget.value;

        setCurrent(value);
    }
    

    return (<div className="Tabs" style={{'--tabs-content-max-width': maxWidth}}>

        <ul className={`nav nav-tabs ${cc({'nav-fill': fill})}`}>
        {
            Object.keys(childs).map((name, i) => {

                const active = current === name ? 'active' : '';

                return <li className="nav-item" key={`tab-btn-${i}`}>

                    <button className={`tab-btn nav-link ${active}`} value={name} onClick={handleClick}>
                        {name}
                    </button>
                </li>
            }) 
        }
        </ul>

        <div className="Tabs-content">
            {
                Object.entries(childs).map(([name, elements]) => {

                    const active = current === name ? 'active' : '';

                    return <div className={`Tabs-item ${active}`} data-slot={name} key={name}>
                        
                        {elements}
                        
                    </div>
                })
            }
        </div>

    </div>);
}

export default Tabs;