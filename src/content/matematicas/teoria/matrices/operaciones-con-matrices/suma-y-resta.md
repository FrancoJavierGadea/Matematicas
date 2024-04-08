## Suma de Matrices

Para sumar o restar 2 matrices estas tienen que tener el **mismo orden**

Misma cantidad de `filas` y `columnas`

#### Definicion

Dadas $A_{m \times n} = (a_{i j})$ y  $B_{m \times n} = (b_{i j})$

$$
    A + B = C_{m \times n} = (c_{i j}) /  c_{i j} = a_{i j} + b_{i j}
$$

<br>

$$

    \left( 
    \begin{matrix}
        a_{1 1} & a_{1 2} & \cdots & a_{1 n}
        \\
        a_{2 1} & a_{2 2} & \cdots & a_{2 n}
        \\
        \vdots & \vdots & \ddots & \vdots
        \\
        a_{m 1} & a_{m 2} & \cdots & a_{m n}
    \end{matrix}
    \right)
    +
    \left( 
    \begin{matrix}
        b_{1 1} & b_{1 2} & \cdots & b_{1 n}
        \\
        b_{2 1} & b_{2 2} & \cdots & b_{2 n}
        \\
        \vdots & \vdots & \ddots & \vdots
        \\
        b_{m 1} & b_{m 2} & \cdots & b_{m n}
    \end{matrix}
    \right)
    =
    \left( 
    \begin{matrix}
        a_{1 1} + b_{1 1} & a_{1 2} + b_{1 2} & \cdots & a_{1 n} + b_{1 n}
        \\
        a_{2 1} + b_{2 1} & a_{2 2} + b_{2 2} & \cdots & a_{2 n} + b_{2 n}
        \\
        \vdots & \vdots & \ddots & \vdots
        \\
        a_{m 1} + b_{m 1} & a_{m 2} + b_{m 2} & \cdots & a_{m n} + b_{m n}
    \end{matrix}
    \right)
$$

<br>

#### Propiedades

- **Conmutativa**

    $$
        A + B = B + A
    $$

- **Asociativa**

    $$
        (A + B) + C = A + (B + C)
    $$

- **Existencia del elemento neutro**

    $$
        A + N = N + A = A
    $$

- **Existencia del inverso aditivo**
  
    $$
        A + (-A) = N
    $$




