## Menor de una elemento

Dada una matriz $A$ de orden $n \times n$ 

El **menor de un elemento** $a_{i j}$ es el `determinante` de la **matriz** resultante de eliminar la `fila` $i$ y la `columna` $j$ de la **matriz** $A$

Ejemplo:

Dada la matriz:
$$
    A = \left(
    \begin{matrix}
        1 & 2 & 3
        \\
        4 & 5 & 6
        \\
        7 & 8 & 9
    \end{matrix}
    \right)
$$
$$
    M_{1 1} = 
    \left|
    \begin{matrix}
        \cancel{1} & \cancel{2} & \cancel{3}
        \\
        \cancel{4} & 5 & 6
        \\
        \cancel{7} & 8 & 9
    \end{matrix}
    \right|
    =
    \left|
    \begin{matrix}
        5 & 6
        \\
        8 & 9
    \end{matrix}
    \right|
    = 5 \cdot 9 - 6 \cdot 8 = -3
$$


<br>

## Cofactores

El `cofactor` de un elemento de la **matriz** se define como:

$$
    \large{  
        \text{Cofactor}(a_{i j}) = C_{i j} = (-1)^{i + j} \cdot |A_{i j}|
    }
$$
> $A_{i j}$ es la `sub-matriz` resultante de eliminar la fila $i$ y la columna $j$

<br>

$$
    \large{  
        \text{Cofactor}(a_{i j}) = C_{i j} = (-1)^{i + j} \cdot M_{i j}
    }
$$
> $M_{i j}$ es el menor de elemento $a_{i j}$ 

<br>

#### Ejemplo:

Dada la matriz:
$$
    A = \left(
    \begin{matrix}
        1 & 2 & 3
        \\
        4 & 5 & 6
        \\
        7 & 8 & 9
    \end{matrix}
    \right)
$$
$$
    C_{1 1} = 
    (-1)^{1 + 1} \cdot
    \left|
    \begin{matrix}
        \cancel{1} & \cancel{2} & \cancel{3}
        \\
        \cancel{4} & 5 & 6
        \\
        \cancel{7} & 8 & 9
    \end{matrix}
    \right|
    =
    (-1)^{2} \cdot
    \left|
    \begin{matrix}
        5 & 6
        \\
        8 & 9
    \end{matrix}
    \right|
    = 1 \cdot (5 \cdot 9 - 6 \cdot 8) = -3
$$

<br>