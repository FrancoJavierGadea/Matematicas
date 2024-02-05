
import { conditionalClassNames as cc } from "@utils/ReactConditionalClassNames";
import "./Tooltip.css";



function Tooltip({children, side = 'top', ...others}) {


    return (<div className={`Math-tooltip ${side}`}>

        {children}

    </div>);
}

export default Tooltip;