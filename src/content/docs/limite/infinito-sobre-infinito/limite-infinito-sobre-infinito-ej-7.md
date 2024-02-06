## Limite infinito sobre infinito - Ejemplo 7

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5 \cdot x^{3}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x^{2}
        \hspace{0.4em}-\hspace{0.4em}
        3
    }
    {
    \hspace{0.4em}
        3 \cdot x^{2}
        \hspace{0.4em}-\hspace{0.4em}
        \sqrt[3]{
        \hspace{0.4em}
            8 \cdot x^{9}
            \hspace{0.4em}+\hspace{0.4em}
            5 \cdot x

        \hspace{0.4em}
        }
    \hspace{0.4em}
    }
$$

Remplazamos

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5 \cdot \infty^{3}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot \infty^{2}
        \hspace{0.4em}-\hspace{0.4em}
        3
    }
    {
    \hspace{0.4em}
        3 \cdot \infty^{2}
        \hspace{0.4em}-\hspace{0.4em}
        \sqrt[3]{
            8 \cdot \infty^{9}
            \hspace{0.4em}+\hspace{0.4em}
            5 \cdot \infty
        }
    \hspace{0.4em}
    }
    =
    \frac{\infty}{-\infty}
$$

<br>

Analizamos los `grados` del polinomio del `Numerador` y `Denominador`

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \overbrace{5 \cdot x^{3}}^{3}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x^{2}
        \hspace{0.4em}-\hspace{0.4em}
        3
    }
    {
    \hspace{0.4em}
        \underbrace{3 \cdot x^{2}}_{2}
        \hspace{0.4em}-\hspace{0.4em}
        \underbrace{
            \sqrt[3]{
            \hspace{0.4em}
                8 \cdot x^{9}
                \hspace{0.4em}+\hspace{0.4em}
                5 \cdot x

            \hspace{0.4em}
            }
        }_{9 / 3 \hspace{0.4em}=\hspace{0.4em} 3}
    \hspace{0.4em}
    }
$$

Al tener el `mismo grado` en el `Numerador` y `Denominador` procedemos a dividir el `Numerador` y `Denominador` por $x^3$

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \displaystyle\frac{
        \hspace{0.4em}
            5 \cdot x^{3}
            \hspace{0.4em}+\hspace{0.4em}
            2 \cdot x^{2}
            \hspace{0.4em}-\hspace{0.4em}
            3
        \hspace{0.4em}
        }
        {x^{3}} 
    }
    {
    \hspace{0.4em}
        \displaystyle\frac{
        \hspace{0.4em}
            3 \cdot x^{2}
            \hspace{0.4em}-\hspace{0.4em}
            \sqrt[3]{
            \hspace{0.4em}
                8 \cdot x^{9}
                \hspace{0.4em}+\hspace{0.4em}
                5 \cdot x
            \hspace{0.4em}
            }
        \hspace{0.4em}
        }
        {x^{3}}
        
    \hspace{0.4em}
    }
$$
$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \displaystyle\frac{
            5 \cdot \cancel{x^{3}}
        }
        {\cancel{x^{3}}}
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{
            2 \cdot \cancel{x^{2}}
        }
        {x^{\cancel{3}}}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{
            3
        }
        {x^{3}}
    }
    {
    \hspace{0.4em}
        \displaystyle\frac{
            3 \cdot \cancel{x^{2}}
        }
        {x^{\cancel{3}}}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{
            \sqrt[3]{
            \hspace{0.4em}
                8 \cdot x^{9}
                \hspace{0.4em}+\hspace{0.4em}
                5 \cdot x

            \hspace{0.4em}
            }
        }
        { \sqrt[3]{x^{9}} }
        
    \hspace{0.4em}
    }
\\\
$$
$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{2}{x}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{3}{x^{3}}
    }
    {
    \hspace{0.4em}
        \displaystyle\frac{3}{x}
        \hspace{0.4em}-\hspace{0.4em}
        \sqrt[3]{
            \displaystyle\frac{
            \hspace{0.4em}
                8 \cdot x^{9}
                \hspace{0.4em}+\hspace{0.4em}
                5 \cdot x
            }
            { x^{9} }
        }
        
    \hspace{0.4em}
    }
\\\
$$
$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{2}{x}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{3}{x^{3}}
    }
    {
    \hspace{0.4em}
        \displaystyle\frac{3}{x}
        \hspace{0.4em}-\hspace{0.4em}
        \sqrt[3]{
            \displaystyle\frac{
            \hspace{0.4em}
                8 \cdot \cancel{x^{9}}
            }
            { \cancel{x^{9}} }

            \hspace{0.4em}+\hspace{0.4em}
            \displaystyle\frac{
            \hspace{0.4em}
                5 \cdot \cancel{x}
            }
            { x^{\cancel{9}} }         
        }
    \hspace{0.4em}
    }
\\\
$$

Simplificamos todo lo que se puede

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{2}{x}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{3}{x^{3}}
    }
    {
    \hspace{0.4em}
        \displaystyle\frac{3}{x}
        \hspace{0.4em}-\hspace{0.4em}
        \sqrt[3]{
        \hspace{0.4em}
            8 
            \hspace{0.4em}+\hspace{0.4em}
            \displaystyle\frac{5}{ x^{8} }         
        }
    \hspace{0.4em}
    }
\\\
$$

Remplazamos

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{2}{\infty}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{3}{\infty^{3}}
    }
    {
    \hspace{0.4em}
        \displaystyle\frac{3}{\infty}
        \hspace{0.4em}-\hspace{0.4em}
        \sqrt[3]{
        \hspace{0.4em}
            8 
            \hspace{0.4em}+\hspace{0.4em}
            \displaystyle\frac{5}{ \infty^{8} }         
        }
    \hspace{0.4em}
    }
\\\
$$
$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5
        \hspace{0.4em}+\hspace{0.4em}
        \cancel{\displaystyle\frac{2}{\infty}}
        \hspace{0.4em}-\hspace{0.4em}
        \cancel{\displaystyle\frac{3}{\infty^{3}}}
    }
    {
    \hspace{0.4em}
        \cancel{\displaystyle\frac{3}{\infty}}
        \hspace{0.4em}-\hspace{0.4em}
        \sqrt[3]{
        \hspace{0.4em}
            8 
            \hspace{0.4em}+\hspace{0.4em}
            \cancel{\displaystyle\frac{5}{ \infty^{8} }}         
        }
    \hspace{0.4em}
    }
\\\
$$

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{5}
    {
    \hspace{0.4em}
        -\sqrt[3]{8}
    \hspace{0.4em}
    }
    =
    -\frac{\hspace{0.4em} 5 \hspace{0.4em}}{2}
\\\
$$

#### Finalmente:

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5 \cdot x^{3}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x^{2}
        \hspace{0.4em}-\hspace{0.4em}
        3
    }
    {
    \hspace{0.4em}
        3 \cdot x^{2}
        \hspace{0.4em}-\hspace{0.4em}
        \sqrt[3]{
        \hspace{0.4em}
            8 \cdot x^{9}
            \hspace{0.4em}+\hspace{0.4em}
            5 \cdot x

        \hspace{0.4em}
        }
    \hspace{0.4em}
    }
    =
    -\frac{\hspace{0.4em} 5 \hspace{0.4em}}{2}
$$