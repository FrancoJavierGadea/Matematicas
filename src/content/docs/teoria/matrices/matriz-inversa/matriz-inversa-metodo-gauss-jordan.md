## Matriz inversa por metodo Gauss-Jordan




### Ejemplo

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

Calculamos la matriz inversa y el determinante:

$$
\begin{array}{cl}

    \begin{array}{cccc|cccc}
        4 & 9 & -6 & 3 & 1 & 0 & 0 & 0
        \\
        1 & 2 & -2 & 2 & 0 & 1 & 0 & 0
        \\
        1 & 6 & 3 & 1 & 0 & 0 & 1 & 0
        \\    
        2 & -1 & 1 & -1 & 0 & 0 & 0 & 1
    \end{array}
    &
    \begin{array}{l}
        F_{1} \longleftrightarrow F_{2}
    \end{array}
    \\\\

\end{array}
$$
