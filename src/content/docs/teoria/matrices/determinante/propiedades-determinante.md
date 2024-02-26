## Propiedades del Determinante

- El `determinante` de una matriz es igual al de su `traspuesta`

    $$
        \Large{
            |A| = |A^{t}|
        }
    $$
<br>


- Si todos los elementos de una `fila` o una `columna` son $0$ el `determinante` es $0$

    $$
        \left| 
        \begin{matrix}
            0 & 0 & 0 & 0
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = 0

        \hspace{2em}

        \left| 
        \begin{matrix}
            0 & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            0 & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            0 & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            0 & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = 0
    $$
<br>


- Si dos `filas` o `columnas` son **iguales** el `determinante` es $0$

    $$
        \left| 
        \begin{matrix}
            1 & 2 & 3 & 4
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            1 & 2 & 3 & 4
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = 0

        \hspace{2em}

        \left|
        \begin{matrix}
            1 & a_{1 2} & 1 & a_{1 4}
            \\
            2 & a_{2 2} & 2 & a_{2 4}
            \\
            3 & a_{3 2} & 3 & a_{3 4}
            \\
            4 & a_{4 2} & 4 & a_{4 4}
        \end{matrix}
        \right|
        = 0
    $$
<br>


- Si dos `filas` o `columnas` son **proporcionales** el `determinante` es $0$

    $$
        \begin{array}{c}
            \displaystyle{
                \left| 
                \begin{matrix}
                    1 & 2 & 3 & 4
                    \\
                    a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
                    \\
                    2 & 4 & 6 & 8
                    \\
                    a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
                \end{matrix}
                \right|
                = 0
            }
            \\\\
            F_{3} \rightarrow 2 \cdot F_{1}
        \end{array}

        \hspace{2em}

        \begin{array}{c}
            \displaystyle{
                \left| 
                \begin{matrix}
                    1 & a_{1 2} & 3 & a_{1 4}
                    \\
                    2 & a_{2 2} & 6 & a_{2 4}
                    \\
                    3 & a_{3 2} & 9 & a_{3 4}
                    \\
                    4 & a_{4 2} & 12 & a_{4 4}
                \end{matrix}
                \right|
                = 0
            }
            \\\\
            C_{3} \rightarrow 3 \cdot C_{1}
        \end{array}
    $$
<br>


- Al intercambiar de lugar 2 `filas` o `columnas` el `determinante` cambia de signo

    Intercambiar 2 columnas:
    $$
        \left|
        \begin{matrix}
            \overset{\longrightarrow}{1} & 2 & a_{1 3} & a_{1 4}
            \\
            3 & 4 & a_{2 3} & a_{2 4}
            \\
            5 & 6 & a_{3 3} & a_{3 4}
            \\
            7 & \underset{\longleftarrow}{8} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = d
        
        \hspace{2em}
        
        \left|
        \begin{matrix}
            2 & 1 & a_{1 3} & a_{1 4}
            \\
            4 & 3 & a_{2 3} & a_{2 4}
            \\
            6 & 5 & a_{3 3} & a_{3 4}
            \\
            8 & 7 & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = -d
    $$

    Intercambiar 2 filas:
    $$
        \left|
        \begin{matrix}
            \downarrow 1 & 3 & 5 & 7 \phantom{\uparrow}
            \\
            \phantom{\downarrow} 2 & 4 & 6 & 8 \uparrow
            \\
            \phantom{\downarrow} a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4} \phantom{\uparrow}
            \\
            \phantom{\downarrow} a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4} \phantom{\uparrow}
        \end{matrix}
        \right|
        = d
        
        \hspace{2em}
        
        \left|
        \begin{matrix}
            2 & 4 & 6 & 8
            \\
            1 & 3 & 5 & 7
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = -d
    $$
<br>


- Si multiplicamos una `fila` o `columna` por un numero $k$ el `determinante` tambien se multiplica por $k$

    Multiplicar una fila
    $$
        \left|
        \begin{matrix}
            a_{1 1} & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = d
        
        \hspace{2em}
        
        \left|
        \begin{matrix}
            k \cdot a_{1 1} & k \cdot a_{1 2} & k \cdot a_{1 3} & k \cdot a_{1 4}
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = k \cdot d
    $$

    Multiplicar una columna
    $$
        \left|
        \begin{matrix}
            a_{1 1} & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = d
        
        \hspace{2em}
        
        \left|
        \begin{matrix}
            k \cdot a_{1 1} & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            k \cdot a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            k \cdot a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            k \cdot a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        = k \cdot d
    $$
<br>


- El `determinante` de una **matriz por un escalar** es el `determinante` de la **matriz** por el **escalar** elevado a la cantidad de `filas` o `columnas`

    $$
        \Large{
            |k \cdot A| = k^{n} \cdot |A|
        }
    $$
<br>


- Si los elementos de una `fila` o `columna` se pueden descomponer en una suma de $t$ terminos entonces el `determinante` puede descomponerse en la suma de $t$ `determinantes`
  
    Descomponer una Fila
    $$
        \left|
        \begin{matrix}
            1 + 2 & 3 + 7 & 8 + 3 & 7 + 8
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        =
        \left|
        \begin{matrix}
            1 & 3 & 8 & 7
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        +
        \left|
        \begin{matrix}
            2 & 7 & 3 & 8
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
    $$

    Descomponer una columna
    $$
        \left|
        \begin{matrix}
            1 + 7 & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            8 + 2 & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            3 + 9 & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            7 + 2 & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        =
        \left|
        \begin{matrix}
            1 & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            8 & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            3 & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            7 & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        +
        \left|
        \begin{matrix}
            7 & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            2 & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            9 & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            2 & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
    $$
<br>



- Si sumamos a una `fila` o `columna` otra `fila` o `columna` proporcional, multiplicada por un escalar $k$, el `determinante` no cambia

    Sumar Filas: $F_{1} \rightarrow F_{1} + k \cdot F_{3}$
    $$
        \left|
        \begin{matrix}
            a_{1 1} & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        =
        \left|
        \begin{matrix}
            a_{1 1} + k \cdot a_{3 1} & a_{1 2} + k \cdot a_{3 2} & a_{1 3} + k \cdot a_{3 3} & a_{1 4} + k \cdot a_{3 4}
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
    $$

    Sumar columnas: $C_{1} \rightarrow C_{1} + k \cdot C_{3}$
    $$
        \left|
        \begin{matrix}
            a_{1 1} & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            a_{2 1} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
        =
        \left|
        \begin{matrix}
            a_{1 1} + k \cdot a_{1 3} & a_{1 2} & a_{1 3} & a_{1 4}
            \\
            a_{2 1} + k \cdot a_{2 3} & a_{2 2} & a_{2 3} & a_{2 4}
            \\
            a_{3 1} + k \cdot a_{3 3} & a_{3 2} & a_{3 3} & a_{3 4}
            \\
            a_{4 1} + k \cdot a_{4 3} & a_{4 2} & a_{4 3} & a_{4 4}
        \end{matrix}
        \right|
    $$
<br> 


- El `determinante` de un **producto de matrices** es igual al producto de los `determinantes`

    $$
        \Large{
            |A \cdot B| = |A| \cdot |B|
        }
    $$
<br>


- Cuando una **matriz** tiene `inversa` el `determinante` es distinto de $0$

    $$
        |A| \neq 0 \Longrightarrow \exists A^{-1} / A \cdot A^{-1} = A^{-1} \cdot A = I
    $$
<br>


- El `determinante` de la `matriz inversa` de una matriz es igual al **inverso** del `determinante` de esa matriz

    $$
        \Large{
            |A^{-1}| = \frac{1}{|A|}
        }
    $$
<br>