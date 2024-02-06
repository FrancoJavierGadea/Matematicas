## Limite infinito sobre infinito - Ejemplo 3

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        3 \cdot x^{3}
        \hspace{0.4em}+\hspace{0.4em}
        5 \cdot x^{2}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x^{3}
    }
    {
    \hspace{0.4em}
        5 \cdot x^{3}
        \hspace{0.4em}-\hspace{0.4em}
        3 \cdot x^{2}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x
        \hspace{0.4em}-\hspace{0.4em}
        1
    \hspace{0.4em}
    }
$$

Remplazamos

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        3 \cdot\infty^{3}
        \hspace{0.4em}+\hspace{0.4em}
        5 \cdot \infty^{2}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot \infty^{3}
    }
    {
    \hspace{0.4em}
        5 \cdot \infty^{3}
        \hspace{0.4em}-\hspace{0.4em}
        3 \cdot \infty^{2}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot \infty
        \hspace{0.4em}-\hspace{0.4em}
        1
    \hspace{0.4em}
    }
    =
    \frac{\infty}{\infty}
$$

<br>

Operamos y analizamos los `grados` del polinomio del `Numerador` y `Denominador`

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        3 \cdot x^{3}
        \hspace{0.4em}+\hspace{0.4em}
        5 \cdot x^{2}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x^{3}
    }
    {
    \hspace{0.4em}
        5 \cdot x^{3}
        \hspace{0.4em}-\hspace{0.4em}
        3 \cdot x^{2}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x
        \hspace{0.4em}-\hspace{0.4em}
        1
    \hspace{0.4em}
    }
\\\
$$
$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \overbrace{
            5 \cdot x^{3}
        \hspace{0.2em}
        }^{3}
        \hspace{0.4em}+\hspace{0.4em}
        5 \cdot x^{2}
    }
    {
    \hspace{0.4em}
        \underbrace{
        \hspace{0.2em}
            5 \cdot x^{3}
        }_{3}
        \hspace{0.4em}-\hspace{0.4em}
        3 \cdot x^{2}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x
        \hspace{0.4em}-\hspace{0.4em}
        1
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
            5 \cdot x^{2}
        \hspace{0.4em}
        }
        {x^{3}}

    {\vphantom{\Large A \over \Large A}}
    }
    {
    \hspace{0.4em}
        \displaystyle\frac{
        \hspace{0.4em}
            5 \cdot x^{3}
            \hspace{0.4em}-\hspace{0.4em}
            3 \cdot x^{2}
            \hspace{0.4em}+\hspace{0.4em}
            2 \cdot x
            \hspace{0.4em}-\hspace{0.4em}
            1
        \hspace{0.4em}
        }
        {x^{3}}

    \hspace{0.4em}{\vphantom{\Large A \over \Large A}}
    }
\\\
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
            5 \cdot x^{2}
        }
        {x^{3}}
    {\vphantom{\Large A \over \Large A}}
    }
    {
    \hspace{0.4em}
        \displaystyle\frac{
            5 \cdot \cancel{x^{3}}
        }
        {\cancel{x^{3}}}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{
            3 \cdot x^{2}
        }
        {x^{3}}
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{
            2 \cdot x
        }
        {x^{3}}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{
            1
        }
        {x^{3}}
    \hspace{0.4em}{\vphantom{\Large A \over \Large A}}
    }
\\\
$$

Simplificamos todo lo que se puede

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{5}{x}
    {\vphantom{\Large A \over \Large A}}
    }
    {
    \hspace{0.4em}
        5
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{3}{x}
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{2}{x^{2}}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{1}{x^{3}}
    \hspace{0.4em}{\vphantom{\Large A \over \Large A}}
    }
$$

Remplazamos

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{5}{\infty}
    {\vphantom{\Large A \over \Large A}}
    }
    {
    \hspace{0.4em}
        5
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{3}{\infty}
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{2}{\infty^{2}}
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{1}{\infty^{3}}
    \hspace{0.4em}{\vphantom{\Large A \over \Large A}}
    }
\\\
$$

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        5
        \hspace{0.4em}+\hspace{0.4em}
        \cancel{\displaystyle\frac{5}{\infty}}
    {\vphantom{\Large A \over \Large A}}
    }
    {
    \hspace{0.4em}
        5
        \hspace{0.4em}-\hspace{0.4em}
        \cancel{\displaystyle\frac{3}{\infty}}
        \hspace{0.4em}+\hspace{0.4em}
        \cancel{\displaystyle\frac{2}{\infty^{2}}}
        \hspace{0.4em}-\hspace{0.4em}
        \cancel{\displaystyle\frac{1}{\infty^{3}}}
    \hspace{0.4em}{\vphantom{\Large A \over \Large A}}
    }
    =
    \frac{5}{\hspace{0.4em} 5 \hspace{0.4em}}
    =
    1
\\\
$$

#### Finalmente:

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        3 \cdot x^{3}
        \hspace{0.4em}+\hspace{0.4em}
        5 \cdot x^{2}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x^{3}
    }
    {
    \hspace{0.4em}
        5 \cdot x^{3}
        \hspace{0.4em}-\hspace{0.4em}
        3 \cdot x^{2}
        \hspace{0.4em}+\hspace{0.4em}
        2 \cdot x
        \hspace{0.4em}-\hspace{0.4em}
        1
    \hspace{0.4em}
    }
    =
    1
$$
