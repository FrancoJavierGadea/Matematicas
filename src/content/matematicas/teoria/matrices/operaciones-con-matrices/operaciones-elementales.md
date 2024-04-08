## Operaciones elementales por fila

Son la operaciones que podemos realizar entre las `filas` de una **matriz**

Dada una matriz $A$ pueden representarse como el producto de una `matriz elemental fila` $E$, por la matriz $A$

$$
    \Large{
        E \cdot A
    }
$$

<br>

### Operaciones

1. #### Multiplicar una `fila` $i$ por un escalar $k$ distinto de $0$

    $$
        \Large{
            F_{i} \rightarrow k \cdot F_{i}
        }
    $$

    Su `matriz elemental` es la `Matriz identidad` con el escalar $k$ en la posicion $i i$

    Ejemplo: $F_{1} \rightarrow k \cdot F_{1}$

    $$
        \left(
        \begin{matrix}
            k & 0 & 0
            \\
            0 & 1 & 0
            \\
            0 & 0  & 1
        \end{matrix}
        \right)
        \cdot
        \left(
        \begin{matrix}
            1 & 2 & 3
            \\
            4 & 5 & 6
            \\
            7 & 8 & 9
        \end{matrix}
        \right)
        =
        \left(
        \begin{matrix}
            k \cdot 1 & k \cdot 2 & k \cdot 3
            \\
            4 & 5 & 6
            \\
            7 & 8 & 9
        \end{matrix}
        \right)
    $$
<br>


2. #### Sumar a una `fila` $i$ otra `fila` $r$ multiplicada por un escalar $k$

    $$
        \Large{
            F_{i} \rightarrow F_{i} + k \cdot F_{r}
        }
    $$

    Su `matriz elemental` es la `Matriz identidad` con el escalar $k$ en la posicion $i r$

    Ejemplo: $F_{1} \rightarrow F_{1} + k \cdot F_{2}$

    $$
        \left(
        \begin{matrix}
            1 & k & 0
            \\
            0 & 1 & 0
            \\
            0 & 0  & 1
        \end{matrix}
        \right)
        \cdot
        \left(
        \begin{matrix}
            1 & 2 & 3
            \\
            4 & 5 & 6
            \\
            7 & 8 & 9
        \end{matrix}
        \right)
        =
        \left(
        \begin{matrix}
            1 + k \cdot 4 & 2 + k \cdot 5 & 3 + k \cdot 6
            \\
            4 & 5 & 6
            \\
            7 & 8 & 9
        \end{matrix}
        \right)
    $$
<br>

3. #### Intercambiar 2 `filas` entre si, intercambiar la  `fila` $i$ con la  `fila` $r$

    $$
        \Large{
            F_{i} \longleftrightarrow F_{r}
        }
    $$

    Su `matriz elemental` es la `Matriz identidad` con la fila $i$ y $r$ intercambiadas

    Ejemplo: $F_{1} \longleftrightarrow F_{2}$
    $$
        \left(
        \begin{matrix}
            0 & 1 & 0
            \\
            1 & 0 & 0
            \\
            0 & 0 & 1
        \end{matrix}
        \right)
        \cdot
        \left(
        \begin{matrix}
            1 & 2 & 3
            \\
            4 & 5 & 6
            \\
            7 & 8 & 9
        \end{matrix}
        \right)
        =
        \left(
        \begin{matrix}
            4 & 5 & 6
            \\
            1 & 2 & 3
            \\
            7 & 8 & 9
        \end{matrix}
        \right)
    $$
<br>
    


## Matrices equivalentes

Dadas 2 **matrices** $A$ y $B$ de orden $m \times n$ estas son `equivalentes` si y solo si 

- Puede una convertirse en la otra a traves de **un numero finito de `operaciones elementales`**

- Existe una `matriz elemental fila` $E$, o un producto de ellas, tal que:

    $$
        \Large{
            A = E \cdot B
        }
    $$
<br>


## Matriz escalonada

Todas las `filas nulas`, todos los elementos son $0$, estan en la parte inferior de matriz

El `pivote`, el primer elemento distinto de $0$ de cada fila, tiene que **estar siempre a la derecha** del `pivote` de la fila anterior

Ejemplos

$$
\begin{array}{c}
    \left(
        \begin{matrix}
        2 & 8 & 1
        \\
        0 & 5 & 8
        \\
        0 & 0 & 2
        \end{matrix}
    \right)
    &
    \left(
        \begin{matrix}
        7 & 2 & 4 & 7
        \\
        0 & 5 & 3 & 0
        \\
        0 & 0 & 1 & 7
        \\
        0 & 0 & 0 & 0
        \end{matrix}
    \right)
\end{array}
$$


#### Escalonada reducida por filas

Si en cada `fila` el `pivote` es el único elemento no nulo de su `columna`, se dice que la **matriz** es `escalonada reducida por filas`

Ejemplos:

$$
\begin{array}{c}
    \left(
        \begin{matrix}
        0 & 1 & 0
        \\
        0 & 0 & 1
        \\
        0 & 0 & 0
        \end{matrix}
    \right)
    &
    \left(
        \begin{matrix}
        1 & 0 & 3 & 0
        \\
        0 & 1 & 2 & 0
        \\
        0 & 0 & 0 & 1
        \\
        0 & 0 & 0 & 0
        \end{matrix}
    \right)
\end{array}
$$

<br>

#### Propiedades

- Toda matriz es **equivalentes** a una **matriz escalonada**
  
- Toda matriz es **equivalentes** a una **matriz escalonada reducida**

- El **rango** de una **matriz escalonada** es igual al numero de filas no nulas

- Si 2 matrices son **equivalentes** tienen el mismo **rango**