
import { useMemo, useState } from 'react';
import './EquationsVisualizer.css';


function EquationsVisualizer({main = '',  variants = [], svg = false} = {}) {

    const equations = useMemo(() => {

        return [main, ...variants];

    }, []);

    const [current, setCurrent] = useState(0);

    const handleCurrent = (e) => {

        const index = e.currentTarget.getAttribute('data-index');

        setCurrent(Number(index));
    }

    return (<div className="Equations-Visualizer">

        {svg ? 

            <div className="main-image" dangerouslySetInnerHTML={{__html: equations[current]}}></div>

            :

            <img className="main-image" src={equations[current]} alt="" />
        }
        

        {equations.length > 1 && <div className="variants">
            {
                equations.map((equation, i) => {
                    
                    const key = `equation-var-${i}`;
                    const className = `variant ${i === current && 'active'}`;

                    return (<>{svg ? 

                        <div className={className} role="button" onClick={handleCurrent} key={key} data-index={i}>{equation}</div>
                        
                        :

                        <img className={className} src={equation} alt="" role="button" onClick={handleCurrent} key={key} data-index={i} />
                    }</>)
                })
            }
        </div>}

    </div>);
}

export default EquationsVisualizer;