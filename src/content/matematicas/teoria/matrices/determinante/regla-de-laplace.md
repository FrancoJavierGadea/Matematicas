## Regla de Laplace

Se elige una `fila` $i$ o una `columna` $j$ de la matriz, la que tenga mas $0$ mejor

Se recorre dicha `fila` o `columna` multiplicando:

- El elemento $a_{i j}$ 
- Por $(−1)^{i+j}$ que es $+1$ o $-1$ segun la posicion del elemento
- Por el determinate de la matriz resultante de eliminar la `fila` $i$ y la `columna` $j$
  
Se suman todos los resultados y se obtiene el `determinante`

##### Desarrollo por fila $i$
$$
    |A| = \sum_{j = 1}^{n} a_{i j} \cdot (-1)^{i + j} \cdot |A_{i j}|
$$

##### Desarrollo por columna $j$
$$
    |A| = \sum_{i = 1}^{n} a_{i j} \cdot (-1)^{i + j} \cdot |A_{i j}|
$$

> $A_{i j}$ es la `sub-matriz` resultante de eliminar la fila $i$ y la columna $j$

> El orden de $A_{i j}$ es de $n - 1$

<br>

Si la matriz es de orden $n$ se tendran que calular $n$ `determinantes` de matrices de orden $n - 1$

Si $a_{i j}$ es $0$ se simplifica el calculo evitando calcular el determinante de $A_{i j}$

Por eso simpre se prefiere la `fila` o columna con mas $0$


<br>

#### Cofactores

$(-1)^{i + j} \cdot |A_{i j}|$ es el `cofactor` de $a_{i j}$
 
$$\text{Cofactor}(a_{i j}) = (-1)^{i + j} \cdot |A_{i j}|$$

*Todo determinante es igual a la suma de los productos de los elementos de una fila o columna cualquiera por sus cofactores correspondientes.*

##### Desarrollo por fila $i$
$$
    |A| = \sum_{j = 1}^{n} a_{i j} \cdot \text{Cofactor}(a_{i j})
$$

##### Desarrollo por columna $j$
$$
    |A| = \sum_{i = 1}^{n} a_{i j} \cdot \text{Cofactor}(a_{i j})
$$