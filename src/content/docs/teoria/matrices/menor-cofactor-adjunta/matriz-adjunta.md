## La matriz de cofactores

$$
    \text{Cof}(A) =
    \left( 
    \begin{matrix}
        C_{1 1} & \cdots & C_{1 n}
        \\
        \vdots & \ddots & \vdots
        \\
        C_{n 1} & \cdots & C_{n n}
    \end{matrix}
    \right)
$$

Dada una **matriz** $A$ la **matriz de cofactores** es la unica **matriz** que cumple que: 

$$
    A \cdot \text{Cof}(A)^{t} = \text{Cof}(A)^{t} \cdot A = 
    \left( 
    \begin{matrix}
        |A| & 0 & \cdots & 0
        \\
        0 & |A| & \cdots & 0
        \\
        \vdots & \vdots & \ddots & \vdots
        \\
        0 & 0 & \cdots & |A|
    \end{matrix}
    \right)
    = |A| \cdot I
$$

<br>


## La matriz de adjunta

Es la matriz traspuesta de cofactores

$$
    \text{Adj}(A) = \text{Cof}(A)^{t}
$$

Cumple que

$$
    A \cdot \text{Adj}(A) = \text{Adj}(A) \cdot A =
    \left( 
    \begin{matrix}
        |A| & 0 & \cdots & 0
        \\
        0 & |A| & \cdots & 0
        \\
        \vdots & \vdots & \ddots & \vdots
        \\
        0 & 0 & \cdots & |A|
    \end{matrix}
    \right)
    = |A| \cdot I
$$

<br>



De la anterior definicion se pueden sacar 2 concluciones

1. #### Cofactores y el determinante

    *La suma de los productos de los elementos de una `fila` o `columna` cualquiera por sus **cofactores** correspondientes es igual al `dterminante`*

    ##### Desarrollo por fila $i$
    $$
        \Large{
            \sum_{j = 1}^{n} a_{i j} \cdot C_{i j} = |A|
        }
    $$
    $$
        \sum_{j = 1}^{n} a_{i j} \cdot C_{i j} 
        = 
        a_{i 1} \cdot C_{i 1}
        + a_{i 2} \cdot C_{i 2}
        + a_{i 2} \cdot C_{i 3}
        + \cdots + a_{i n} \cdot C_{i n}
        = 0
    $$

    ##### Desarrollo por columna $j$ 
    $$
        \Large{
            \sum_{i = 1}^{n} a_{i j} \cdot C_{i j} = |A|
        }
    $$
    $$
        \sum_{i = 1}^{n} a_{i j} \cdot C_{i j}
        =
        a_{1 j} \cdot C_{1 j}
        + a_{2 j} \cdot C_{2 j}
        + a_{3 j} \cdot C_{3 j}
        + \cdots + a_{n j} \cdot C_{n j}
        = 0
    $$

    De esta propiedad viene la **regla de Laplace**
<br>

1. #### Elementos y cofactores de una fila o columna paralela

    *La suma de los productos de los elementos de una `fila` o `columna` cualquiera por los **cofactores** correspondientes una `fila` o `columna` **paralela** es igual a $0$*

    ##### Desarrollo por fila $i$ y la fila paralela $k$
    $$
        \Large{
            \sum_{j = 1}^{n} a_{i j} \cdot C_{k j} = 0
        }
    $$
    $$
        \sum_{j = 1}^{n} a_{i j} \cdot C_{k j} 
        = 
        a_{i 1} \cdot C_{k 1}
        + a_{i 2} \cdot C_{k 2}
        + a_{i 2} \cdot C_{k 3}
        + \cdots + a_{i n} \cdot C_{k n}
        = 0
    $$

    ##### Desarrollo por columna $j$ y la columna paralela $k$
    $$
        \Large{
            \sum_{i = 1}^{n} a_{i j} \cdot C_{i k} = 0
        }
    $$
    $$
        \sum_{i = 1}^{n} a_{i j} \cdot C_{i k}
        =
        a_{1 j} \cdot C_{1 k}
        + a_{2 j} \cdot C_{2 k}
        + a_{3 j} \cdot C_{3 k}
        + \cdots + a_{n j} \cdot C_{n k}
        = 0
    $$

<br>