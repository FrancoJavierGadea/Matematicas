## Limite infinito sobre infinito - Ejemplo 4

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        2 \cdot x
    }
    {
    \hspace{0.4em}
        3 \cdot x
        \hspace{0.4em}-\hspace{0.4em}
        5 \cdot x^{3}
    \hspace{0.4em}
    }
$$

Remplazamos

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        2 \cdot \infty
    }
    {
    \hspace{0.4em}
        3 \cdot \infty
        \hspace{0.4em}-\hspace{0.4em}
        5 \cdot \infty^{3}
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
        \overbrace{2 \cdot x}^{1}
    }
    {
    \hspace{0.4em}
        3 \cdot x
        \hspace{0.4em}-\hspace{0.4em}
        \underbrace{5 \cdot x^{3}}_{3}
    \hspace{0.4em}
    }
$$

El `grado` del `Denominador` es mayor al del `Numerador` por lo que procedemos a dividir el `Numerador` y `Denominador` por $x^{3}$

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \displaystyle\frac{
        \hspace{0.4em}
            2 \cdot x
        \hspace{0.4em}
        }
        {x^{3}}
    {\vphantom{\Large A \over \Large A}}    
    }
    {
    \hspace{0.6em}
        \displaystyle\frac{
        \hspace{0.4em}
            3 \cdot x
            \hspace{0.4em}-\hspace{0.4em}
            5 \cdot x^{3}
        \hspace{0.4em}
        }
        {x^{3}}  
    \hspace{0.6em}{\vphantom{\Large A \over \Large A}} 
    }
\\\
$$
$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \displaystyle\frac{
        \hspace{0.4em}
            2 \cdot \cancel{x}
        \hspace{0.4em}
        }
        {x^{\cancel{3}}}
    {\vphantom{\Large A \over \Large A}}    
    }
    {
    \hspace{0.8em}
        \displaystyle\frac{3 \cdot \cancel{x}}{x^{\cancel{3}}} 
        \hspace{0.4em}-\hspace{0.4em}
        \displaystyle\frac{5 \cdot \cancel{x^{3}}}{\cancel{x^{3}}}
    \hspace{0.8em}{\vphantom{\Large A \over \Large A}} 
    }
$$

Simplificamos todo lo que se puede y reescribimos el Limite

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \displaystyle\frac{2}{x^{2}}
    {\vphantom{\Large A \over \Large A}}    
    }
    {
    \hspace{0.8em}
        \displaystyle\frac{3}{x^{2}} 
        \hspace{0.4em}-\hspace{0.4em}
        5
    \hspace{0.8em}{\vphantom{\Large A \over \Large A}} 
    }
$$

Remplazamos:

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \displaystyle\frac{2}{\infty^{2}}
    {\vphantom{\Large A \over \Large A}}    
    }
    {
    \hspace{0.8em}
        \displaystyle\frac{3}{\infty^{2}} 
        \hspace{0.4em}-\hspace{0.4em}
        5
    \hspace{0.8em}{\vphantom{\Large A \over \Large A}} 
    }
\\\
$$
$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        \cancel{\displaystyle\frac{2}{\infty^{2}}} 
    {\vphantom{\Large A \over \huge A}}    
    }
    {
    \hspace{0.8em}
        \cancel{\displaystyle\frac{3}{\infty^{2}}} 
        \hspace{0.4em}-\hspace{0.4em}
        5
    \hspace{0.8em}{\vphantom{\huge A \over \Large A}} 
    }
    =
    \frac{0}{\hspace{0.4em} -5 \hspace{0.4em}}
    = 0
$$


#### Finalmente

$$
    \lim_{x \hspace{0.1em}\to\hspace{0.1em} \infty}
    \frac{
        2 \cdot x
    }
    {
    \hspace{0.4em}
        3 \cdot x
        \hspace{0.4em}-\hspace{0.4em}
        5 \cdot x^{3}
    \hspace{0.4em}
    }
    =
    0
$$