## Matriz traspuesta

Se intercambian las filas con columnas


Data una matriz $A_{m \times n} = (a_{i j})$ la matriz traspuesta es

$$
    A^{t}_{n \times m} = (a^{t})_{i j} = a_{j i} 
$$


> Los elementos de la `diagonal principal` a tener $i = j$ cuando se invierte **no cambian de posicion**


<br>

### Propiedades

- **Involutiva**
  
    $$
        (A^{t})^{t} = A
    $$

- **Distributiva respecto de la suma**

    $$
        (A + B)^{t} = A^{t} + B^{t}
    $$

- **Distributiva respecto al producto de matrices**
  
    $$
        (A \cdot B)^{t} = A^{t} \cdot B^{t}
    $$

- **Producto por un escalar**

    $$
        (k \cdot A)^{t} = k \cdot A^{t}
    $$


<br>

## Matriz simetrica

Una matriz es simetrica cuando al trasponerla queda exactamente igual

$$
    A = A^{t}
$$

Los elementos de la matriz cumplen que para todo $i$ y $j$

$$
    a_{i j} = a_{j i}
$$

> Los elementos de la `diagonal principal` al no cambiar de posicion pueden ser cuales quiera

> La Simetria es respecto a la `diagonal principal`


<br>

#### Matriz sumada con su traspuesta

Cualquier matriz sumadada a su traspuesta da como resultado una `matriz simetrica`

$$
\begin{array}{c}
    \displaystyle{
        A + A^{t} \text{ es simetrica }
    }
    \\\\
    \displaystyle{
        A + A^{t} = (A + A^{t})^{t}
    }
\end{array}
$$