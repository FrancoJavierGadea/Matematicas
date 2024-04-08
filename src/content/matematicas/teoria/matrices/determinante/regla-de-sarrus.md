## Regla de Sarrus

No permite calcular rapidamente el `determinante` de una matriz $3 \times 3$

$$
    A = \left( 
    \begin{matrix}
        a_{1 1} & a_{1 2} & a_{1 3}
        \\
        a_{2 1} & a_{2 2} & a_{2 3}
        \\
        a_{3 1} & a_{3 2} & a_{3 3}
    \end{matrix}
    \right)  
$$

$$
\scriptsize{
\begin{array}{ccc}
    \begin{array}{cccccc}
        a_{1 1} && a_{1 2} && a_{1 3}
        \\
        & \searrow 
        \\
        a_{2 1} && a_{2 2} && a_{2 3}
        \\
        & \searrow && \searrow
        \\
        a_{3 1} && a_{3 2} && a_{3 3}
        \\\hline
        & \searrow && \searrow
        \\
        a_{1 1} && a_{1 2} && a_{1 3}
        \\
        &&& \searrow
        \\
        a_{2 1} && a_{2 2} && a_{2 3}
    \end{array}
    &&
    \begin{array}{cccccc}
        a_{1 1} && a_{1 2} && a_{1 3}
        \\
        &&& \swarrow 
        \\
        a_{2 1} && a_{2 2} && a_{2 3}
        \\
        & \swarrow && \swarrow
        \\
        a_{3 1} && a_{3 2} && a_{3 3}
        \\\hline
        & \swarrow && \swarrow
        \\
        a_{1 1} && a_{1 2} && a_{1 3}
        \\
        & \swarrow
        \\
        a_{2 1} && a_{2 2} && a_{2 3}
    \end{array}
    \\\\
    |A| =
    (
        \underbrace{a_{1 1} \cdot a_{2 2} \cdot a_{3 3}}
        +  
        \underbrace{a_{2 1} \cdot a_{3 2} \cdot a_{1 3}}
        +  
        \underbrace{a_{3 1} \cdot a_{1 2} \cdot a_{2 3}}
    )
    & - &
    (
        \underbrace{a_{1 3} \cdot a_{2 2} \cdot a_{3 1}}
        + 
        \underbrace{a_{2 3} \cdot a_{3 2} \cdot a_{1 1}}
        + 
        \underbrace{a_{3 3} \cdot a_{1 2} \cdot a_{2 1}}
    )
\end{array}
}
    
$$