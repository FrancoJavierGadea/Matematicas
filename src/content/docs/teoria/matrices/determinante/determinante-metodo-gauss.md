## Determinante por metodo de Gauss

El metodo de Gauss consiste en trasformar la matriz en una `matriz triangula` a traves de `operaciones elementales` entre filas y columnas

Para al final calcular el `determinante` como el producto de los elementos de la `diagonal principal`


Es recomendable usar solamente la transformación tipo:

$$
    F_{i} \longrightarrow F_{i} + k \cdot F_{t}
$$

#### Ejemplo

$$
    A =
    \left(
    \begin{matrix}
        4 & 9 & -6 & 3
        \\
        1 & 2 & -2 & 2
        \\
        1 & 6 & 3 & 1
        \\    
        2 & -1 & 1 & -1
    \end{matrix}
    \right)
$$

Calculamos el `determinante`:

$$
\begin{array}{cl}
    |A| =
    \left|
    \begin{matrix}
        4 & 9 & -6 & 3
        \\
        1 & 2 & -2 & 2
        \\
        1 & 6 & 3 & 1
        \\    
        2 & -1 & 1 & -1
    \end{matrix}
    \right|
    &
    \begin{array}{l}
        F_{1} \longleftrightarrow F_{2}
    \end{array}
    \\\\
    |A| =
    -\left|
    \begin{matrix}
        1 & 2 & -2 & 2
        \\
        4 & 9 & -6 & 3
        \\
        1 & 6 & 3 & 1
        \\    
        2 & -1 & 1 & -1
    \end{matrix}
    \right|
    &
    \begin{array}{l}
        F_{2} \longrightarrow F_{2} - 4 \cdot F_{1}
        \\
        F_{3} \longrightarrow F_{3} - F_{1}
        \\
        F_{4} \longrightarrow F_{4} - 2 \cdot F_{1}
    \end{array}
    \\\\
    |A| =
    -\left|
    \begin{matrix}
        1 & 2 & -2 & 2
        \\
        0 & 1 & 2 & -5
        \\
        0 & 4 & 5 & -1
        \\    
        0 & -5 & 5 & -5
    \end{matrix}
    \right|
    &
    \begin{array}{c}
        F_{3} \longrightarrow F_{3} - 4 \cdot F_{2}
        \\
        F_{4} \longrightarrow F_{4} + 5 \cdot F_{2}
    \end{array}
    \\\\
    |A| =
    -\left|
    \begin{matrix}
        1 & 2 & -2 & 2
        \\
        0 & 1 & 2 & -5
        \\
        0 & 0 & -3 & 19
        \\    
        0 & 0 & 15 & -30
    \end{matrix}
    \right|
    &
    \begin{array}{c}
        F_{4} \longrightarrow F_{4} + 5 \cdot F_{3}
    \end{array}
    \\\\
    |A| =
    -\left|
    \begin{matrix}
        1 & 2 & -2 & 2
        \\
        0 & 1 & 2 & -5
        \\
        0 & 0 & -3 & 19
        \\    
        0 & 0 & 0 & 65
    \end{matrix}
    \right|
\end{array}
$$

##### Finalmente

$$
    \begin{array}{c}
        |A| = - (1 \cdot 1 \cdot -3 \cdot 65) = -(-195) = 195
        \\\\
        |A| = 195
    \end{array}
$$
