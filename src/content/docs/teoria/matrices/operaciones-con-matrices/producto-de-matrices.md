## Producto de Matrices

El `numero de columnas` de la matriz $A$ tiene que ser igual al `numero de filas` de la matriz $B$

#### Definicion

Dadas la matrices $A_{m \times p} = (a_{i j})$ y  $B_{p \times n} = (b_{i j})$

$$
    A \cdot B = C_{m \times n} = (c_{i j}) /  c_{i j} = \sum_{k = 1}^{p} a_{i k} \cdot b_{j k}
$$

> $p$ es la cantidad de columnas de $A$ y la cantidad de filas de $B$

> Es la suma de los productos de la fila $i$ de la matriz $A$ con la columna $j$ de la matriz $B$

$$
   \sum_{k = 1}^{p} a_{i k} \cdot b_{j k} = 
   (a_{i 1} \cdot b_{1 j})
   + 
   (a_{i 2} \cdot b_{2 j})
   +
   (a_{i 3} \cdot b_{3 j})
   + \cdots +
   (a_{i p} \cdot b_{p j}) 
$$


#### Matriz 2x2

$$
    \left( 
    \begin{matrix}
        a_{1 1} & a_{1 2}
        \\
        a_{2 1} & a_{2 2}
    \end{matrix}
    \right)
    \cdot
    \left( 
    \begin{matrix}
        b_{1 1} & b_{1 2}
        \\
        b_{2 1} & b_{2 2}
    \end{matrix}
    \right)
    =
    \left( 
    \begin{matrix}
        a_{1 1} \cdot b_{1 1} + a_{1 2} \cdot b_{2 1}
        &
        a_{1 1} \cdot b_{1 2} + a_{1 2} \cdot b_{2 2}
        \\
        a_{2 1} \cdot b_{1 1} + a_{2 2} \cdot b_{2 1}
        &
        a_{2 1} \cdot b_{1 2} + a_{2 2} \cdot b_{2 2}
    \end{matrix}
    \right)
$$


<br>

### Propiedades

- **Asosiativa**

    $$
        (A \cdot B) \cdot C = A \cdot (B \cdot C)
    $$

- **Distributiva**

    $$
        A \cdot (B + C) = A \cdot B  + A \cdot C
    $$

- **Elemento neutro**

    $$
        A \cdot I = A
    $$

    $I$ es la matriz indentidad


- **Propiedad conmutativa**

    El producto de matrices **no es conmutativo** en la gran mayoria de los casos

    $$
    A \cdot B \neq B \cdot  A
    $$


> La matriz identidad $I$ comunta con cualquier matriz cuadrada de igual orden
> $$A \cdot I = I \cdot A = A$$


<br>


### Ejemplos:

$$
    \left( 
    \begin{matrix}
        3 & 2
        \\
        -1 & 4
    \end{matrix}
    \right)
    \cdot
    \left( 
    \begin{matrix}
        -1 
        \\
        1
    \end{matrix}
    \right)
    =
    \left[ 
    \begin{matrix}
        (3 \cdot -1) + (2 \cdot 1)
        \\
        (-1 \cdot -1) + (4 \cdot 1)
    \end{matrix}
    \right]
    =
    \left[ 
    \begin{matrix}
        -3 + 2
        \\
        1 + 4
    \end{matrix}
    \right]
    =
    \left( 
    \begin{matrix}
        -1
        \\
        5
    \end{matrix}
    \right)
$$