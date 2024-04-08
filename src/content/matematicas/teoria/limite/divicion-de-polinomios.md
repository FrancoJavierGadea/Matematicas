## Divicion de Polinomios

Tomamos el primer termino y lo dividimos
$$
    \begin{array}{cc}
        \begin{array}{rrrrr}
            \overbrace{3 \cdot x^2} & + & 2 \cdot x & - & 8
        \end{array}
        &
        \begin{array}{|rrr}
            \overbrace{x} &+& 2 \\\hline 
        \end{array}
    \end{array}
\\\
$$
$$
    \frac{3 \cdot x^{2}}{x}
    =
    \frac{3 \cdot x^{\cancel{2}}}{\cancel{x}}
    =
    3 \cdot x 
\\\
$$

Ponemos el resultado
$$
    \begin{array}{cc}
        \begin{array}{rrrrr}
            3 \cdot x^2 & + & 2 \cdot x & - & 8
            \\\
        \end{array}
        &
        \begin{array}{|rrr}
            x &+& 2 \\\hline
            3 \cdot x  
        \end{array}
    \end{array}
\\\
$$

Multiplicamos $3 \cdot x$ por todo el `divisor`

$$
    3 \cdot x \cdot (x \hspace{0.2em}+\hspace{0.2em} 2)
    = 
    3 \cdot x^{2}
    \hspace{0.2em}+\hspace{0.2em}
    6 \cdot x
\\\
$$

Lo restamos al polinomio original

O que es lo mismo, lo multiplicamos por $-10$ y lo sumanos al polinomio original
$$
    \begin{array}{cc}
        \begin{array}{rrrrr}
            3 \cdot x^2 & + & 2 \cdot x & - & 8
            \\
            -3 \cdot x^2 & - & 6 \cdot x & &
            \\\hline
            \cancel{\phantom{-3 \cdot x^2}} & - & 4 \cdot x & - & 8

        \end{array}
        &
        \begin{array}{|rrr}
            x &+& 2 \\\hline
            3 \cdot x \\\\ 
        \end{array}
    \end{array}
$$



Mientras el grado del polinomio residuo sea igual o mayor al del divisor, podemos continuar la divicion

---

Tomamos el primer termino y lo dividimos
$$
    \begin{array}{cc}
        \begin{array}{rrrrr}
            3 \cdot x^2 & + & 2 \cdot x & - & 8
            \\
            -3 \cdot x^2 & - & 6 \cdot x & &
            \\\hline
            \cancel{\phantom{-3 \cdot x^2}} & & \underbrace{-4 \cdot x} & - & 8

        \end{array}
        &
        \begin{array}{|rrr}
            \overbrace{x} &+& 2 \\\hline
            3 \cdot x \\\\ 
        \end{array}
    \end{array}
\\\
$$
$$
    \frac{-4 \cdot x}{x}
    =
    \frac{-4 \cdot {\cancel{x}}}{\cancel{x}}
    =
    -4
\\\
$$
Ponemos el resultado
$$
    \begin{array}{cc}
        \begin{array}{rrrrr}
            3 \cdot x^2 & + & 2 \cdot x & - & 8
            \\
            -3 \cdot x^2 & - & 6 \cdot x & &
            \\\hline
            \cancel{\phantom{-3 \cdot x^2}} & - & 4 \cdot x & - & 8
            \\

        \end{array}
        &
        \begin{array}{|rrr}
            x &+& 2 \\\hline
            3 \cdot x &-& 4  \\\\ 
        \end{array}
    \end{array}
$$

Multiplicamos $-4$ por todo el `divisor`
$$
    -4 \cdot (x \hspace{0.2em}+\hspace{0.2em} 2)
    = 
    -4 \cdot x
    \hspace{0.2em}-\hspace{0.2em}
    8
\\\
$$
Lo restamos al polinomio original

O que es lo mismo, lo multiplicamos por $-1$ y lo sumanos al polinomio original

$$
    \begin{array}{cc}
        \begin{array}{rrrrr}
            3 \cdot x^2 & + & 2 \cdot x & - & 8
            \\
            -3 \cdot x^2 & - & 6 \cdot x & &
            \\\hline
            \cancel{\phantom{-3 \cdot x^2}} & - & 4 \cdot x & - & 8
            \\
            & + & 4 \cdot x & + & 8
            \\\hline
            & & \cancel{\phantom{4 \cdot 2}} & & 0
        \end{array}
        &
        \begin{array}{|rrr}
            x &+& 2 \\\hline
            3 \cdot x &-& 4  \\\\\\\\  
        \end{array}
    \end{array}
\\\
$$

El grado del polinomio residuo es menor al del divisor entonces **la divicion termina**

De esta manera obtenemos que:

$$
    3 \cdot x^2 
    \hspace{0.4em}+\hspace{0.4em} 
    2 \cdot x 
    \hspace{0.4em}-\hspace{0.4em}
    8
    =
    \underbrace{
        (3 \cdot x \hspace{0.2em}-\hspace{0.2em} 4)
    }_{\text{Cociente}}
    \cdot
    \underbrace{
        (x \hspace{0.2em}+\hspace{0.2em} 2)
    }_{\text{Divisor}}
    \hspace{0.4em}+\hspace{0.4em}
    \underbrace{0}_{\text{Resto}}
$$