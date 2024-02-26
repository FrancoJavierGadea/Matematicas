## Derivacion logaritmica - ejemplo 2

$$
    \Large{
        y = \frac{
            (x^{2} + 1)^{4} \cdot e^{5 \cdot x}
        }
        {
            \sin(x) \cdot \sqrt{x}
        }
    }
$$

<br>

1. ### Aplicar **logaritmo natural** a ambos miembros


    $$
        \begin{array}{c}
            y = \dfrac{
                (x^{2} + 1)^{4} \cdot e^{5 \cdot x}
            }
            { \sin(x) \cdot \sqrt{x} }
            \\\\
            \ln(y) = \ln\left(
                \dfrac{
                    (x^{2} + 1)^{4} \cdot e^{5 \cdot x}
                }
                { \sin(x) \cdot \sqrt{x} }
            \right)
        \end{array}
    $$
    <br>

    por **propiedades del logaritmo**: $\hspace{0.2em}\small{\ln\left(\dfrac{a}{b}\right) = \ln(a) - \ln(b)}$

    $$
        \begin{array}{c}
            \ln(y) = \ln\left(
                \dfrac{
                    (x^{2} + 1)^{4} \cdot e^{5 \cdot x}
                }
                { \sin(x) \cdot \sqrt{x} }
            \right)
            \\\\
            \ln(y) = \ln\left(
                (x^{2} + 1)^{4} \cdot e^{5 \cdot x}
            \right)
            -
            \ln\left(
                \sin(x) \cdot \sqrt{x}
            \right)
        \end{array}
    $$
    <br>

    por **propiedades del logaritmo**: $\hspace{0.2em}\small{\ln(a \cdot b) = \ln(a) + \ln(b)}$

    $$
        \begin{array}{c}
            \ln(y) = 
            \ln\left(
                (x^{2} + 1)^{4} \cdot e^{5 \cdot x}
            \right)
            -
            \ln\left(
                \sin(x) \cdot \sqrt{x}
            \right)
            \\\\
            \ln(y) = \ln\left(
                (x^{2} + 1)^{4}
            \right)
            +
            \ln\left(
                e^{5 \cdot x}
            \right)
            -
            \left(
                \ln\left(
                    \sin(x)
                \right)
                +
                \ln\left(
                    \sqrt{x}
                \right)
            \right)
            \\\\
            \ln(y) = 
            \ln\left(
                (x^{2} + 1)^{4}
            \right)
            +
            \ln\left(
                e^{5 \cdot x}
            \right)
            -
            \ln\left(
                \sin(x)
            \right)
            -
            \ln\left(
                \sqrt{x}
            \right)
        \end{array}
    $$
    <br>

    por **propiedades del logaritmo**: $\hspace{0.2em}\small{\ln(a^{b}) = b \cdot \ln(a)}$

    $$
        \begin{array}{c}
            \ln(y) = 
            \ln\left(
                (x^{2} + 1)^{4}
            \right)
            +
            \ln\left(
                e^{5 \cdot x}
            \right)
            -
            \ln(\sin(x))
            -
            \ln\left(
                x^{1/2}
            \right)
            \\\\
            \ln(y) = 
            4 \cdot \ln(x^{2} + 1)
            +
            5 \cdot x \cdot \ln(e)
            -
            \ln(\sin(x))
            -
            \dfrac{1}{2} \cdot \ln(x)
        \end{array}
    $$
    <br>

    por **propiedades del logaritmo**: $\hspace{0.2em}\small{\ln(e) = 1}$

    $$
        \begin{array}{c}
            \ln(y) = 
            4 \cdot \ln(x^{2} + 1)
            +
            5 \cdot x \cdot 1
            -
            \ln(\sin(x))
            -
            \dfrac{1}{2} \cdot \ln(x)
            \\\\
            \ln(y) = 
            4 \cdot \ln(x^{2} + 1)
            +
            5 \cdot x
            -
            \ln(\sin(x))
            -
            \dfrac{1}{2} \cdot \ln(x)
        \end{array}
    $$

    Ya no se pueden aplicar mas **propiedades del logaritmo**
<br>

2. ### **Derivamos** ambos miembros

    $$
        \begin{array}{c}
            \ln(y) = 
            4 \cdot \ln(x^{2} + 1)
            +
            5 \cdot x
            -
            \ln(\sin(x))
            -
            \dfrac{1}{2} \cdot \ln(x)
            \\\\
            \left\{
                \ln(y)
            \right\}'
            =
            \left\{
                4 \cdot \ln(x^{2} + 1)
                +
                5 \cdot x
                -
                \ln(\sin(x))
                -
                \dfrac{1}{2} \cdot \ln(x)
            \right\}'
        \end{array}
    $$
    <br>

    Aplicamos $\hspace{0.2em} \small{y = \ln(u) \longrightarrow y' = \dfrac{u'}{u}} \hspace{1em}$ y $\hspace{1em} \small{y = u \pm v \longrightarrow y' = u' \pm v'}$

    $$
        \dfrac{y'}{y}
        =
        \left\{
            4 \cdot \ln(x^{2} + 1)
        \right\}'
            +
        \left\{    
            5 \cdot x
        \right\}'
            -
        \left\{
            \ln(\sin(x))
        \right\}'
        -
        \left\{
            \dfrac{1}{2} \cdot \ln(x)
        \right\}'
    $$
    <br>

    Aplicamos $\hspace{0.2em} \small{y = a \cdot u \longrightarrow y' = a \cdot u'} \hspace{1em}$

    $$
        \dfrac{y'}{y}
        =
        4 \cdot 
        \left\{
            \ln(x^{2} + 1)
        \right\}'
            +
        5
        -
        \left\{
            \ln(\sin(x))
        \right\}'
        -
        \dfrac{1}{2} \cdot
        \left\{
            \ln(x)
        \right\}'
    $$
    <br>

    Aplicamos $\hspace{0.2em} \small{y = \ln(u) \longrightarrow y' = \dfrac{u'}{u}} \hspace{1em}$ y $\hspace{1em} \small{y = \ln(x) \longrightarrow y' = \dfrac{1}{x}}$

    $$
        \dfrac{y'}{y}
        =
        4 \cdot
        \dfrac{\left\{ x^{2} + 1 \right\}'}{x^{2} + 1} 
        +
        5
        -
        \dfrac{\{\sin(x)\}'}{\sin(x)}
        -
        \dfrac{1}{2} \cdot \dfrac{1}{x}
    $$
    <br>

    Aplicamos $\hspace{0.2em} \small{y = x^{n} \longrightarrow y' = n \cdot x^{n-1}} \hspace{1em}$ y $\hspace{1em} \small{y = \sin(x) \longrightarrow y' = \cos(x)}$

    $$
        \dfrac{y'}{y}
        =
        4 \cdot
        \dfrac{2 \cdot x}{x^{2} + 1} 
        +
        5
        -
        \dfrac{\cos(x)}{\sin(x)}
        -
        \dfrac{1}{2 \cdot x}
    $$
    <br>

    Finalmelte terminamos de reducir la expresion y aplicamos la identidad trigonometrica $\small{\cot(\alpha) = \dfrac{\cos(\alpha)}{\sin(\alpha)}}$

    $$
        \dfrac{y'}{y}
        =
        \dfrac{8 \cdot x}{x^{2} + 1} 
        +
        5
        -
        \cot(x)
        -
        \dfrac{1}{2 \cdot x}
    $$
<br>

3. ### Finalmente despejamos $y'$

    $$
    \begin{array}{c} 
        \dfrac{y'}{y}
        =
        \dfrac{8 \cdot x}{x^{2} + 1} 
        +
        5
        -
        \cot(x)
        -
        \dfrac{1}{2 \cdot x}
        \\\\
        y' =
        \left(
            \dfrac{8 \cdot x}{x^{2} + 1} 
            +
            5
            -
            \cot(x)
            -
            \dfrac{1}{2 \cdot x}
        \right)
        \cdot y
    \end{array}
    $$
    <br>

    Remplazamos $y$ con la expresion original

    $$
        y' =
        \frac{
            (x^{2} + 1)^{4} \cdot e^{5 \cdot x}
        }
        { \sin(x) \cdot \sqrt{x} }
        \cdot
        \left(
            \dfrac{8 \cdot x}{x^{2} + 1} 
            +
            5
            -
            \cot(x)
            -
            \dfrac{1}{2 \cdot x}
        \right)
    $$
<br>


#### Fuentes

[DERIVACIÓN LOGARÍTMICA - Ejercicio 2](https://www.youtube.com/watch?v=DGs3yMfWffA)