## Limite por factorizacion - ejemplo 3

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -3} 
    \frac{\hspace{5pt} 5 \cdot x^2 + 15 \cdot x \hspace{5pt}}{x + 3} 
$$

Remplazamos
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -3} 
    \frac{\hspace{5pt} 5 \cdot -3^2 + 15 \cdot -3 \hspace{5pt}}{-3 + 3} 
    =
    \frac{\hspace{5pt} 5 \cdot 9 - 45  \hspace{5pt}}{0}  
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -3} 
    \frac{\hspace{5pt} 45 - 45  \hspace{5pt}}{0}
    = 
    \frac{\hspace{2pt} 0 \hspace{2pt}}{0}
$$

<br>

La `indeterminacion` es: $(x + 3)$

$-3$ es un `cero o raiz` del polinomio del numerador por lo que se puede factorizar como 

$$
    (x + 3) \cdot (x \pm \cdots)
$$

<br>

#### Factorizamos por `factor comun`

$$
    5 \cdot x^2 + 15 \cdot x
$$
$$
    5 \cdot x^2 + 5 \cdot 3 \cdot x
$$
$$
    5 \cdot x \cdot (x + 3)
$$


Reescribimos el Limite y simplicamos la indeterminacion

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -3} 
    \frac{\hspace{5pt} 5 \cdot x \cdot (x + 3) \hspace{5pt}}{x + 3} 
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -3} 
    \frac{\hspace{5pt} 5 \cdot x \cdot \cancel{(x + 3)} \hspace{5pt}}{\cancel{x + 3}} 
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -3} 5 \cdot x
$$

Remplazamos:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -3} 5 \cdot -3 = -15
$$

#### Finalmente:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -3} 
    \frac{\hspace{5pt} 5 \cdot x^2 + 15 \cdot x \hspace{5pt}}{x + 3} = -15
$$