## Derivacion logaritmica - ejemplo 3

$$
    \Large{
        y = x^{x}
    }
$$
<br>

1. ### Aplicar logaritmo a ambos miembros

$$
    \begin{array}{c}
        y = x^{x}
        \\\\
        \ln(y) = \ln\left(x^{x}\right)
    \end{array}
$$

> por **propiedades del logaritmo**: $\small{\ln(a^{b}) = b \cdot \ln(a)}$

$$
    \ln(y) = x \cdot \ln(x)
$$
<br>


2. ### Derivamos ambos miembros

$$
    \begin{array}{c}
        \ln(y) = x \cdot \ln(x)
        \\\\
        \left\{ \ln(y) \right\}'
        =
        \left\{ x \cdot \ln(x) \right\}'    
    \end{array}
$$
<br>

> Aplicamos: $\hspace{0.2em} \small{y = \ln(u) \longrightarrow y' = \dfrac{u'}{u}} \hspace{1em}$ $\hspace{1em} \small{y = u \cdot v \longrightarrow y' = u' \cdot v + v' \cdot u}$

$$
    \begin{array}{c}
        \left\{ \ln(y) \right\}'
        =
        \left\{ x \cdot \ln(x) \right\}'
        \\\\
        \dfrac{y'}{y}
        =
        \{x\}' \cdot \ln(x)
        +
        \left\{ \ln(x) \right\}' \cdot x
        \\\\
        \dfrac{y'}{y}
        =
        1 \cdot \ln(x)
        +
        \dfrac{1}{x} \cdot x
    \end{array}
$$
<br>

Operamos y simplificamos

$$
    \begin{array}{c}
        \dfrac{y'}{y}
        =
        \ln(x)
        +
        \dfrac{1 \cdot \cancel{x}}{\cancel{x}} 
        \\\\
        \dfrac{y'}{y} = \ln(x) + 1
    \end{array}
$$
<br>


3. ### Finalmente despejamos $y'$

$$
    \begin{array}{c}
        \dfrac{y'}{y} = \ln(x) + 1
        \\\\
        y' = (\ln(x) + 1) \cdot y     
    \end{array}
$$
<br>

Remplazamos $y$ por la expresion original
$$
    y' = x^{x} \cdot (\ln(x) + 1)
$$
<br>


#### Fuentes

[DERIVACIÓN LOGARÍTMICA - Ejercicio 3](https://www.youtube.com/watch?v=7y8GPW7wqfw)
