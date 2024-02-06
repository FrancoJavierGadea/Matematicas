## Limite por factorizacion - ejemplo 2

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 5} 
    \frac{x - 5}{\hspace{5pt} x^2 - 25 \hspace{5pt}} 
$$

Remplazamos
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 5} 
    \frac{5 - 5}{\hspace{5pt} 5^2 - 25 \hspace{5pt}} 
    =
    \frac{5 - 5}{\hspace{5pt} 25 - 25 \hspace{5pt}}
    = 
    \frac{\hspace{2pt} 0 \hspace{2pt}}{0}
$$

<br>

La `indeterminacion` es: $(x - 5)$

$5$ es un `cero o raiz` del polinomio del denominador por lo que se puede factorizar como 

$$
    (x - 5) \cdot (x \pm \cdots)
$$

<br>

#### Factorizamos por `diferencia de cuadrados`

$$
    x^2 - 25 = x^2 - 5^2 = (x + 5) \cdot (x - 5)
$$

Reescribimos el Limite y simplicamos la indeterminacion

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 5} 
    \frac{x - 5}{\hspace{5pt} (x + 5) \cdot (x - 5) \hspace{5pt}}  
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 5} 
    \frac{\cancel{x - 5}}{\hspace{5pt} (x + 5) \cdot \cancel{(x - 5)} \hspace{5pt}}  
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 5} 
    \frac{1}{\hspace{5pt} x + 5\hspace{5pt}}
$$

Remplazamos:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 5} 
    \frac{1}{\hspace{5pt} 5 + 5\hspace{5pt}}
    =
    \frac{1}{\hspace{2pt} 10\hspace{2pt}} 
$$

#### Finalmente:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 5} 
    \frac{x - 5}{\hspace{5pt} x^2 - 25 \hspace{5pt}} = \frac{1}{\hspace{2pt} 10\hspace{2pt}}
$$