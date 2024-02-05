

function Fenced({open = '(', close = ')', children, stretchy, gap, ...others}) {

    return (<mrow className="Math-fenced">
        <mo className="Math-fenced-open" fence="true" stretchy={!stretchy ? 'true' : 'false'} symmetric="true" rspace={gap}>{open}</mo>

        <mrow>{children}</mrow>

        <mo className="Math-fenced-close" fence="true" stretchy={!stretchy ? 'true' : 'false'} symmetric="true" lspace={gap}>{close}</mo>
    </mrow>);
}

export default Fenced;