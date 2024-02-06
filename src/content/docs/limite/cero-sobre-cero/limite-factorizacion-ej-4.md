## Limite por factorizacion - ejemplo 4

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{
        2 \cdot x^3 
        \hspace{0.5em}-\hspace{0.5em} 
        2 \cdot x^{2}
    }
    {
    \hspace{0.4em}
        3 \cdot x^2 
        \hspace{0.5em}+\hspace{0.5em}
        2 \cdot x 
        \hspace{0.5em}-\hspace{0.5em} 
        5
    \hspace{0.4em}
    } 
$$

Remplazamos
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{
        2 \cdot 1^3 
        \hspace{0.5em}-\hspace{0.5em} 
        2 \cdot 1^{2}
    }
    {
    \hspace{0.4em}
        3 \cdot 1^2 
        \hspace{0.5em}+\hspace{0.5em}
        2 \cdot 1 
        \hspace{0.5em}-\hspace{0.5em} 
        5
    \hspace{0.4em}
    }
\\\
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{
        2
        \hspace{0.5em}-\hspace{0.5em} 
        2
    }
    {
    \hspace{0.4em}
        3
        \hspace{0.5em}+\hspace{0.5em}
        2
        \hspace{0.5em}-\hspace{0.5em} 
        5
    \hspace{0.4em}
    }
    =
    \frac{
    \hspace{0.3em} 
        0
    \hspace{0.3em}
    }
    {0} 
$$

<br>

La `indeterminacion` es: $(x - 1)$

$2$ es un `cero o raiz` del polinomio del `numerador` y del `denominador`, por lo que se pueden factorizar como 

$$
    \frac{(x - 1) \cdot (x \pm \dots)}{(x - 1) \cdot (x \pm \dots)}
$$

<br>

## Factorizamos el numerador 

> Factor comun 

$$
    2 \cdot x^3 
    \hspace{0.5em}-\hspace{0.5em} 
    2 \cdot x^{2}
\\\
$$
$$
    2 \cdot x^{2} \cdot (x - 1)
\\\
$$



## Factorizamos el denominador 
> Trinomio de la forma: $a.x^2 + b.x + c$ 

$$
    3 \cdot x^2 
    \hspace{0.5em}+\hspace{0.5em}
    2 \cdot x 
    \hspace{0.5em}-\hspace{0.5em} 
    5
\\\
$$
$$
    \frac{
    \hspace{0.3em} 
        3 \cdot (
            3 \cdot x^2 
            \hspace{0.5em}+\hspace{0.5em}
            2 \cdot x 
            \hspace{0.5em}-\hspace{0.5em}
            5 
        )
    \hspace{0.3em} 
    }
    {3}
\\\
$$
$$
    \frac{
    \hspace{0.3em} 

        (3 \cdot x)^2 
        \hspace{0.5em}+\hspace{0.5em}
        2 \cdot (3 \cdot x) 
        \hspace{0.5em}-\hspace{0.5em}
        15 
        
    \hspace{0.3em} 
    }
    {3}
\\\
$$

Buscamos 2 numeros que:
$$
    a - b = 2 \hspace{1em} \land \hspace{1em} a \cdot b = 15
$$
Y sabemos que uno tiene que ser: $1 \cdot 3$

$$
    \frac{
    \hspace{0.3em} 
        (
            3 \cdot x
            \hspace{0.5em}+\hspace{0.5em}
            5
        )
        \cdot
        (
            3 \cdot x
            \hspace{0.5em}-\hspace{0.5em}
            3
        )   
    \hspace{0.3em} 
    }
    {3}
\\\
$$
$$
    \frac{
    \hspace{0.3em} 
        (
            3 \cdot x
            \hspace{0.5em}+\hspace{0.5em}
            5
        )
        \cdot
        (
            \cancel{3} \cdot x
            \hspace{0.5em}-\hspace{0.5em}
            3 / 3
        )   
    \hspace{0.3em} 
    }
    {\cancel{3}}
\\\
$$
$$
    (3 \cdot x \hspace{0.5em}+\hspace{0.5em} 5 )
    \cdot
    (x \hspace{0.5em}-\hspace{0.5em} 1) 
$$





## Reescribimos el Limite y simplicamos la indeterminacion

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{
        2 \cdot x^{2} \cdot (x \hspace{0.3em}-\hspace{0.3em} 1)
    }
    {
    \hspace{0.4em}
        (3 \cdot x \hspace{0.3em}+\hspace{0.3em} 5 )
        \cdot
        (x \hspace{0.3em}-\hspace{0.3em} 1) 
    \hspace{0.4em}
    }
\\\ 
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{
        2 \cdot x^{2} 
        \cdot
        \cancel{(x \hspace{0.3em}-\hspace{0.3em} 1)} 
    }
    {
    \hspace{0.4em}
        (3 \cdot x \hspace{0.3em}+\hspace{0.3em} 5 )
        \cdot
        \cancel{(x \hspace{0.3em}-\hspace{0.3em} 1)} 
    \hspace{0.4em}
    }
\\\ 
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{
        2 \cdot x^{2}  
    }
    {
    \hspace{0.4em}
        3 \cdot x \hspace{0.3em}+\hspace{0.3em} 5 
    \hspace{0.4em}
    } 
$$

Remplazamos:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{
        2 \cdot 1^{2}  
    }
    {
    \hspace{0.4em}
        3 \cdot 1 \hspace{0.3em}+\hspace{0.3em} 5 
    \hspace{0.4em}
    }
    =
    \frac{2}
    {
    \hspace{0.4em}
        3 \hspace{0.3em}+\hspace{0.3em} 5 
    \hspace{0.4em}
    }
    =
    \frac{2}{\hspace{0.4em} 8 \hspace{0.4em}}
    =
    \frac{1}{\hspace{0.4em} 4 \hspace{0.4em}}
$$

#### Finalmente:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{
        2 \cdot x^3 
        \hspace{0.5em}-\hspace{0.5em} 
        2 \cdot x^{2}
    }
    {
    \hspace{0.4em}
        3 \cdot x^2 
        \hspace{0.5em}+\hspace{0.5em}
        2 \cdot x 
        \hspace{0.5em}-\hspace{0.5em} 
        5
    \hspace{0.4em}
    } 
    =
    \frac{1}{\hspace{0.4em} 4 \hspace{0.4em}}
$$