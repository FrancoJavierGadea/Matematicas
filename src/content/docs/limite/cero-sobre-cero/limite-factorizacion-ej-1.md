## Limite por factorizacion - ejemplo 1

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 3} 
    \frac{\hspace{5pt} x^2 - 9 \hspace{5pt}}{x - 3} 
$$

Remplazamos
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 3} 
    \frac{\hspace{5pt} 3^2 - 9 \hspace{5pt}}{3 - 3}
    =
    \frac{\hspace{5pt} 9 - 9 \hspace{5pt}}{3 - 3} 
    = 
    \frac{\hspace{2pt} 0 \hspace{2pt}}{0}
$$

<br>

La `indeterminacion` es: $(x - 3)$

$3$ es un `cero o raiz` del polinomio del numerador por lo que se puede factorizar como 

$$
    (x - 3) \cdot (x \pm \cdots)
$$

<br>

#### Factorizamos por `diferencia de cuadrados`

$$
    x^2 - 9 = x^2 - 3^2 = (x + 3) \cdot (x - 3)
$$

Reescribimos el Limite y simplicamos la indeterminacion

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 3} 
    \frac{\hspace{5pt} (x + 3) \cdot (x - 3) \hspace{5pt}}{x - 3} 
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 3} 
    \frac{\hspace{5pt} (x + 3) \cdot \cancel{(x - 3)} \hspace{5pt}}{\cancel{x - 3}} 
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 3} x + 3
$$

Remplazamos:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 3} 3 + 3 = 6
$$

#### Finalmente:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 3} 
    \frac{\hspace{5pt} x^2 - 9 \hspace{5pt}}{x - 3} = 6
$$