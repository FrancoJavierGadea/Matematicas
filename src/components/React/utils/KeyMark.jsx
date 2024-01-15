import {useMemo} from 'react';

function KeyMark({x1, y1, x2, y2, gapX = 0, gapY = 50}) {

    const data = useMemo(() => {

        const gap = 150;

        const distance = Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2));

        const sin = Math.abs(y1 - y2) / distance;
        const cos = Math.abs(x1 - x2) / distance;

        //Center point between (x1, y1) y (x2, y2)
        const middle = {
            x: (x1 + x2) / 2,
            y: (y1 + y2) / 2
        };

        const pivotA = {
            x: x1 + gap * sin,
            y: y1 + gap * cos,
        }
        const pivotB = {
            x: x2 + gap * sin,
            y: y2 + gap * cos,
        }

        const pivotCenter = {
            x: (pivotA.x + pivotB.x) / 2,
            y: (pivotA.y + pivotB.y) / 2
        }

        const centerA = {
            x: (x1 + pivotA.x) / 2,
            y: (y1 + pivotA.y) / 2
        }

        const centerB = {
            x: (x2 + pivotB.x) / 2,
            y: (y2 + pivotB.y) / 2
        }

        const round = {
            x: 50 * sin * Math.sign(gap),
            y: 50 * cos * Math.sign(gap)
        };

        const d = [
            `M${x1} ${y1}`,
            `L${centerA.x} ${centerA.y}`,
            `C${centerA.x + round.x} ${centerA.y + round .y}, ${pivotCenter.x - round.x} ${pivotCenter.y - round.y}, ${pivotCenter.x} ${pivotCenter.y}`,
            `C${pivotCenter.x - round.x} ${pivotCenter.y - round.y}, ${centerB.x + round.x} ${centerB.y + round.y}, ${centerB.x} ${centerB.y}`,
            `L${x2} ${y2}`
        ]
        .join(' ');

        return {
            middle, 
            pivotA,
            pivotB,
            pivotCenter,
            centerA,
            d
        }




    }, [x1, y1, x2, y2, gapX, gapY]);


    return (<g>

        <path d={data.d} stroke={'#ea00ff'} fill="none" />


        <circle cx={x1} cy={y1} r={3} fill={'#b40000'} stroke="none" />

        <circle cx={x2} cy={y2} r={3} fill={'#b40000'} stroke="none" />

        <circle cx={data.middle.x} cy={data.middle.y} r={3} fill={'#b40000'} stroke="none" />

        <circle cx={data.pivotA.x} cy={data.pivotA.y} r={3} fill={'#b40000'} stroke="none" />
        <circle cx={data.pivotB.x} cy={data.pivotB.y} r={3} fill={'#b40000'} stroke="none" />
        <circle cx={data.pivotCenter.x} cy={data.pivotCenter.y} r={3} fill={'#b40000'} stroke="none" />


        <circle cx={data.centerA.x} cy={data.centerA.y} r={3} fill={'#0f00b4'} stroke="none" />

        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={'#777'} strokeDasharray={4}/>
        <line x1={data.pivotA.x} y1={data.pivotA.y} x2={data.pivotB.x} y2={data.pivotB.y} stroke={'#4a0303'} strokeDasharray={4}/>

    </g>);
}

export default KeyMark;