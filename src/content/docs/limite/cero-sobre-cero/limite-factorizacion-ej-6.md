## Limite por factorizacion - ejemplo 6

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 2} 
    \frac{
    \hspace{0.4em} 
        4 \cdot x^2 - 5 \cdot x - 6
    \hspace{0.4em}
    }
    {
        x^2 + 6 \cdot x - 16
    } 
$$

Remplazamos
$$
    \lim_{x \hspace{0.1em} \to \hspace{0.1em} 2} 
    \frac{
    \hspace{0.5em} 
        4 \cdot 2^2 - 5 \cdot 2 - 6
    \hspace{0.5em}
    }
    { 2^2 + 6 \cdot 2 - 16 }
\\\
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 2} 
    \frac{
    \hspace{0.5em} 
        16 - 10 - 6
    \hspace{0.5em}
    }
    { 4 + 12 - 16 }
    =
    \frac{
    \hspace{0.3em} 
        0
    \hspace{0.3em}
    }
    {0} 
$$

<br>

La `indeterminacion` es: $(x - 2)$

$2$ es un `cero o raiz` del polinomio del numerador y del denominador, por lo que se pueden factorizar como 

$$
    \frac{(x - 2) \cdot (x \pm \dots)}{(x - 2) \cdot (x \pm \dots)}
$$

<br>

## Factorizamos el numerador 

> Trinomio de la forma: $a.x^2 + b.x + c$ 

$$
    4 \cdot x^2 \hspace{0.4em}-\hspace{0.4em} 5 \cdot x \hspace{0.4em}-\hspace{0.4em} 6
\\\
$$
$$
    \frac{
        4 \cdot (4 \cdot x^2 \hspace{0.4em}-\hspace{0.4em} 5 \cdot x \hspace{0.4em}-\hspace{0.4em} 6)
    }
    {4}
\\\
$$
$$
    \frac{
        (4 \cdot x)^2 \hspace{0.4em}-\hspace{0.4em} 5 \cdot (4 \cdot x) \hspace{0.4em}-\hspace{0.4em} 24
    }
    {4}
\\\
$$
Buscamos 2 numeros que:
$$
    a - b = 5 \hspace{1em} \land \hspace{1em} a \cdot b = 24
$$
Y sabemos que uno tiene que ser: $2 \cdot 4$

$$
\:\\
    \frac{
        (4 \cdot x \hspace{0.4em}-\hspace{0.4em} 8) \cdot (4 \cdot x \hspace{0.4em}+\hspace{0.4em} 3)
    }
    {4}
\\\
$$
$$
    \frac{
        (\cancel{4} \cdot x \hspace{0.4em}-\hspace{0.4em} 8 / 4) \cdot (4 \cdot x \hspace{0.4em}+\hspace{0.4em} 3)
    }
    {\cancel{4}}
\\\
$$
$$
    (x \hspace{0.4em}-\hspace{0.4em} 2) \cdot (4 \cdot x \hspace{0.4em}+\hspace{0.4em} 3)
\\\
$$


## Factorizamos el denominador 
> Trinomio de la forma: $x^2 + b.x + c$ 

$$
    x^2 \hspace{0.4em}+\hspace{0.4em} 6 \cdot x \hspace{0.4em}-\hspace{0.4em} 16
\\\
$$

Buscamos 2 numeros que:
$$
    a - b = 6 \hspace{1em} \land \hspace{1em} a \cdot b = 16
$$
Y sabemos que uno tiene que ser: $2$

$$
    (x \hspace{0.4em}+\hspace{0.4em} 8) \cdot (x \hspace{0.4em}-\hspace{0.4em} 2)
\\\
$$





## Reescribimos el Limite y simplicamos la indeterminacion

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 2} 
    \frac
    {\hspace{5pt} 
        (x \hspace{0.4em}-\hspace{0.4em} 2) \cdot (4 \cdot x \hspace{0.4em}+\hspace{0.4em} 3)
    \hspace{5pt}}
    {
        (x \hspace{0.4em}+\hspace{0.4em} 8) \cdot (x \hspace{0.4em}-\hspace{0.4em} 2)
    }
\\\ 
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 2} 
    \frac
    {\hspace{5pt} 
        \cancel{(x \hspace{0.4em}-\hspace{0.4em} 2)} \cdot (4 \cdot x \hspace{0.4em}+\hspace{0.4em} 3)
    \hspace{5pt}}
    {
        (x \hspace{0.4em}+\hspace{0.4em} 8) \cdot \cancel{(x \hspace{0.4em}-\hspace{0.4em} 2)}
    }
\\\ 
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 2} 
    \frac
    {\hspace{5pt} 
        4 \cdot x \hspace{0.4em}+\hspace{0.4em} 3
    \hspace{5pt}}
    {
        x \hspace{0.4em}+\hspace{0.4em} 8
    }
$$

Remplazamos:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 2} 
    \frac{
    \hspace{0.4em} 
        4 \cdot 2 \hspace{0.4em}+\hspace{0.4em} 3
    \hspace{0.4em}
    }
    {
        2 \hspace{0.4em}+\hspace{0.4em} 8
    }
    =
    \frac{
    \hspace{0.4em} 
        8 \hspace{0.4em}+\hspace{0.4em} 3
    \hspace{0.4em}
    }
    {
        2 \hspace{0.4em}+\hspace{0.4em} 8
    }
    =
    \frac{
    \hspace{0.4em} 
        11
    \hspace{0.4em}
    }
    {10}
$$

#### Finalmente:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 2} 
    \frac{
    \hspace{0.4em} 
        4 \cdot x^2 - 5 \cdot x - 6
    \hspace{0.4em}
    }
    {
        x^2 + 6 \cdot x - 16
    }
    =
    \frac{
    \hspace{0.4em} 
        11
    \hspace{0.4em}
    }
    {10}
$$