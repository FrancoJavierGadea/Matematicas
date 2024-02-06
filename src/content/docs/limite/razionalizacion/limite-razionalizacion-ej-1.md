## Limite por Razionalizacion - ejemplo 1

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{\hspace{5pt} \sqrt{x} - 1 \hspace{5pt}}{x - 1} 
$$

Remplazamos
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{\hspace{5pt} \sqrt{1} - 1 \hspace{5pt}}{1 - 1} 
    =
    \frac{\hspace{2pt} 0 \hspace{2pt}}{0}
$$


<br>

La `indeterminacion` es: $(x - 1)$


<br>

#### Racionalizamos el numerador `multiplicando por el conjugado`

Aplicamos: $(a + b) \cdot (a - b) = a^{2} - b^{2}$

<br>

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{\hspace{5pt} (\sqrt{x} - 1) \hspace{5pt}}{x - 1}
    \cdot
    \frac{\hspace{5pt} (\sqrt{x} + 1) \hspace{5pt}}{(\sqrt{x} + 1)}
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{ (\sqrt{x} \hspace{2pt})^{2} - 1^2 }{\hspace{5pt} (x - 1) \cdot (\sqrt{x} + 1) \hspace{5pt}}
$$
<br>

Reescribimos el Limite y simplicamos la indeterminacion
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{ x - 1 }{\hspace{5pt} (x - 1) \cdot (\sqrt{x} + 1) \hspace{5pt}}
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{ \cancel{x - 1} }{\hspace{5pt} \cancel{(x - 1)} \cdot (\sqrt{x} + 1) \hspace{5pt}}
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{ 1 }{\hspace{5pt} \sqrt{x} + 1 \hspace{5pt}}
$$



Remplazamos:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{ 1 }{\hspace{5pt} \sqrt{1} + 1 \hspace{5pt}}
    =
    \frac{1}{\hspace{3pt} 2 \hspace{3pt}}
$$

#### Finalmente:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} 1} 
    \frac{\hspace{5pt} \sqrt{x} - 1 \hspace{5pt}}{x - 1} 
    =
    \frac{1}{\hspace{3pt} 2 \hspace{3pt}}
$$