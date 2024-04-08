## Limite infinito sobre infinito - Ejemplo 1

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        2 \cdot x
        \hspace{0.4em}+\hspace{0.4em}
        3
    }
    {
    \hspace{0.4em}
        3 \cdot x
        \hspace{0.4em}+\hspace{0.4em}
        1
    \hspace{0.4em}
    }
$$

Remplazamos

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        2 \cdot \infty
        \hspace{0.4em}+\hspace{0.4em}
        3
    }
    {
    \hspace{0.4em}
        3 \cdot \infty
        \hspace{0.4em}+\hspace{0.4em}
        1
    \hspace{0.4em}
    }
    =
    \frac{\infty}{\infty}
$$

<br>

Analizamos los `grados` del polinomio del `Numerador` y `Denominador`

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \overbrace{2 \cdot x}^{1}
        \hspace{0.4em}+\hspace{0.4em}
        3
    }
    {
    \hspace{0.4em}
        \underbrace{3 \cdot x}_{1}
        \hspace{0.4em}+\hspace{0.4em}
        1
    \hspace{0.4em}
    }
$$

Al tener el `mismo grado` en el `Numerador` y `Denominador` procedemos a dividir el `Numerador` y `Denominador` por $x$

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \displaystyle\frac{
        \hspace{0.4em}
            2 \cdot x
            \hspace{0.4em}+\hspace{0.4em}
            3
        \hspace{0.4em}
        }
        {x}
    {\vphantom{\Large A \over \Large A}}    
    }
    {
    \hspace{0.6em}
        \displaystyle\frac{
        \hspace{0.4em}
            3 \cdot x
            \hspace{0.4em}+\hspace{0.4em}
            1
        \hspace{0.4em}
        }
        {x}
        
    \hspace{0.6em}{\vphantom{\Large A \over \Large A}} 
    }
\\\
$$
$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \displaystyle\frac{2 \cdot \cancel{x}}{\cancel{x}} 
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{3}{x}
    {\vphantom{\Large A \over \Large A}} 
    }
    {
    \hspace{0.8em}
        \displaystyle\frac{3 \cdot \cancel{x}}{\cancel{x}} 
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{1}{x}
    \hspace{0.8em}{\vphantom{\Large A \over \Large A}} 
    }
$$

Simplificamos todo lo que se puede y reescribimos el Limite

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        2 
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{3}{x}
    {\vphantom{\Large A \over \Large A}} 
    }
    {
    \hspace{0.8em}
        3 
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{1}{x}
    \hspace{0.8em}{\vphantom{\Large A \over \Large A}} 
    }
$$

Remplazamos:

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        2 
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{3}{\infty}
    {\vphantom{\Large A \over \Large A}} 
    }
    {
    \hspace{0.8em}
        3 
        \hspace{0.4em}+\hspace{0.4em}
        \displaystyle\frac{1}{\infty}
    \hspace{0.8em}{\vphantom{\Large A \over \Large A}} 
    }
\\\
$$
$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        2 
        \hspace{0.4em}+\hspace{0.4em}
        \cancel{\displaystyle\frac{3}{\infty}}
    {\vphantom{\Large A \over \Large A}} 
    }
    {
    \hspace{0.8em}
        3 
        \hspace{0.4em}+\hspace{0.4em}
        \cancel{\displaystyle\frac{1}{\infty}}
    \hspace{0.8em}{\vphantom{\Large A \over \Large A}} 
    }
    =
    \frac{2}{\hspace{0.4em} 3 \hspace{0.4em}}
$$


#### Finalmente

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        2 \cdot x
        \hspace{0.4em}+\hspace{0.4em}
        3
    }
    {
    \hspace{0.4em}
        3 \cdot x
        \hspace{0.4em}+\hspace{0.4em}
        1
    \hspace{0.4em}
    }
    =
    \frac{2}{\hspace{0.4em} 3 \hspace{0.4em}}
$$