## Limite por Razionalizacion - ejemplo 2

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{\hspace{5pt} \sqrt{11 + x} - 3 \hspace{5pt}}{x + 2} 
$$

Remplazamos
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{\hspace{5pt} \sqrt{11 + -2} - 3 \hspace{5pt}}{-2 + 2}
$$
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{\hspace{5pt} \sqrt{9} - 3 \hspace{5pt}}{0}
    =
    \frac{\hspace{5pt} 3 - 3 \hspace{5pt}}{0}  
    =
    \frac{\hspace{2pt} 0 \hspace{2pt}}{0}
$$


<br>

La `indeterminacion` es: $(x + 2)$


<br>

#### Racionalizamos el numerador `multiplicando por el conjugado`

Aplicamos: $(a + b) \cdot (a - b) = a^{2} - b^{2}$

<br>

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{\hspace{5pt} \sqrt{11 + x} - 3 \hspace{5pt}}{x + 2} 
    \cdot
    \frac{\hspace{5pt} (\sqrt{11 + x} + 3) \hspace{5pt}}{(\sqrt{11 + x} + 3)}
$$
<br>

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{\hspace{5pt} \left(\sqrt{11 + x} \hspace{2pt}\right)^{2} - 3^{2} \hspace{5pt}}{\hspace{5pt} (x + 2) \cdot (\sqrt{11 + x} + 3) \hspace{5pt}} 
$$
<br>

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{ 11 + x - 9 }{\hspace{5pt} (x + 2) \cdot (\sqrt{11 + x} + 3) \hspace{5pt}} 
$$
<br>

Reescribimos el Limite y simplicamos la indeterminacion
$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{ x + 2 }{\hspace{5pt} (x + 2) \cdot (\sqrt{11 + x} + 3) \hspace{5pt}} 
$$
<br>

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{ \cancel{x + 2}}{\hspace{5pt} \cancel{(x + 2)} \cdot (\sqrt{11 + x} + 3) \hspace{5pt}}
$$
<br>

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{ 1 }{\hspace{5pt} \sqrt{11 + x} + 3 \hspace{5pt}}
$$

Remplazamos:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{ 1 }{\hspace{5pt} \sqrt{11 + -2} + 3 \hspace{5pt}}
    =
    \frac{1}{\hspace{3pt} \sqrt{9} + 3 \hspace{3pt}}
    =
    \frac{1}{\hspace{3pt} 3 + 3 \hspace{3pt}}
    =
    \frac{1}{\hspace{3pt} 6 \hspace{3pt}}
$$

#### Finalmente:

$$
    \lim_{x \hspace{2pt} \to \hspace{2pt} -2} 
    \frac{\hspace{5pt} \sqrt{11 + x} - 3 \hspace{5pt}}{x + 2} 
    =
    \frac{1}{\hspace{3pt} 6 \hspace{3pt}}
$$