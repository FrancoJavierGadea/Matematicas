## Curvas de Bezier

Se define a partir de 4 puntos de control

- $P_{1} = (x_{1}, y_{1})$
- $P_{2} = (x_{2}, y_{2})$
- $P_{3} = (x_{3}, y_{3})$
- $P_{4} = (x_{4}, y_{4})$

## Ecuacion parametrica  

$$
    \left\{ 
        \begin{array}{l}
            x = 
                x_{1} \cdot (1 - t)^{3} 
                \hspace{1em}+\hspace{1em}
                3 \cdot x_{2} \cdot t \cdot (1 - t)^{2}
                \hspace{1em}+\hspace{1em}
                3 \cdot x_{3} \cdot t^{2} \cdot (1 - t)
                \hspace{1em}+\hspace{1em}
                x_{4} \cdot t^{3}
            \\\\
            y =    
                y_{1} \cdot (1 - t)^{3} 
                \hspace{1em}+\hspace{1em}
                3 \cdot y_{2} \cdot t \cdot (1 - t)^{2}
                \hspace{1em}+\hspace{1em}
                3 \cdot y_{3} \cdot t^{2} \cdot (1 - t)
                \hspace{1em}+\hspace{1em}
                y_{4} \cdot t^{3}
        \end{array} 
    \right.
$$