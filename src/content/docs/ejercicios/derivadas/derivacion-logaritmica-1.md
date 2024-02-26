## Derivacion logaritmica - ejemplo 1

$$
    \Large{
        y = (x^{2} + 3)^{5 \cdot x + 1}
    }
$$

<br>


1. ### Aplicar **logaritmo natural** a ambos miembros

    $$
        \begin{array}{c}
            y = (x^{2} + 3)^{5 \cdot x + 1}
            \\\\
            \ln(y) = \ln\left( (x^{2} + 3)^{5 \cdot x + 1} \right)
        \end{array}
    $$

    > por **propiedades del logaritmo**: $\small{\ln(a^{b}) = b \cdot \ln(a)}$

    $$
        \begin{array}{c}
            \ln(y) = (5 \cdot x + 1) \cdot \ln\left( x^{2} + 3 \right)
        \end{array}
    $$
<br>

2. ### Derivamos ambos miembros

    $$
        \begin{array}{c}
            \ln(y) = (5 \cdot x + 1) \cdot \ln\left( x^{2} + 3 \right)
            \\\\
            \left\{ \ln(y) \right\}' =\left\{ (5 \cdot x + 1) \cdot \ln\left( x^{2} + 3 \right) \right\}'
        \end{array}
    $$
    <br>

    > Aplicamos: $\hspace{0.2em} \small{y = \ln(u) \longrightarrow y' = \dfrac{u'}{u}} \hspace{1em}$ $\hspace{1em} \small{y = u \cdot v \longrightarrow y' = u' \cdot v + v' \cdot u}$

    $$
        \dfrac{y'}{y} = 
        \left\{ (5 \cdot x + 1) \right\}' \cdot \ln\left( x^{2} + 3 \right)
        +
        \left\{
            \ln\left( x^{2} + 3 \right)
        \right\}'
        \cdot (5 \cdot x + 1)
    $$
    <br>

    > Aplicamos: $\hspace{0.2em} \small{y = a \cdot x + c \longrightarrow y' = a} \hspace{1em}$ $\hspace{1em} \small{y = x^{n} \longrightarrow y' = n \cdot x^{n-1}}$

    $$
        \begin{array}{c}

            \dfrac{y'}{y} = 
            5 \cdot \ln\left( x^{2} + 3 \right)
            +
            \dfrac{ \left\{ x^{2} + 3 \right\}' }{x^{2} + 3}
            \cdot (5 \cdot x + 1)
            \\\\
            \dfrac{y'}{y} = 
            5 \cdot \ln\left( x^{2} + 3 \right)
            +
            \dfrac{2 \cdot x}{x^{2} + 3}
            \cdot (5 \cdot x + 1)
            \\\\
            \dfrac{y'}{y} = 
            5 \cdot \ln\left( x^{2} + 3 \right)
            +
            \dfrac{2 \cdot x \cdot (5 \cdot x + 1)}{x^{2} + 3}     
        \end{array}
    $$
<br>

3. ### Despejamos $y'$

    $$
        \begin{array}{c} 
            \dfrac{y'}{y} = 
            5 \cdot \ln\left( x^{2} + 3 \right)
            +
            \dfrac{2 \cdot x \cdot (5 \cdot x + 1)}{x^{2} + 3}
            \\\\
            y' = \left(
                5 \cdot \ln\left( x^{2} + 3 \right)
                +
                \dfrac{2 \cdot x \cdot (5 \cdot x + 1)}{x^{2} + 3}
            \right)
            \cdot y     
        \end{array}
    $$
    <br>

    Finalmente remplazamos $y$ con la explesion original

    $$
        \begin{array}{c} 
            y' = 
            y \cdot 
            \left(
                5 \cdot \ln\left( x^{2} + 3 \right)
                +
                \dfrac{2 \cdot x \cdot (5 \cdot x + 1)}{x^{2} + 3}
            \right)
            \\\\
            y' = 
            (x^{2} + 3)^{5 \cdot x + 1} \cdot 
            \left(
                5 \cdot \ln\left( x^{2} + 3 \right)
                +
                \dfrac{2 \cdot x \cdot (5 \cdot x + 1)}{x^{2} + 3}
            \right)
            \\\\      
        \end{array}
    $$

<br>

#### Fuentes

[DERIVACIÓN LOGARÍTMICA - Ejercicio 1](https://www.youtube.com/watch?v=K7GMOxp18Lo)