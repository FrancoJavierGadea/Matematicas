## Matriz cuadrada

Cuando el numero de filas $m$ y el numero de columnas $n$ son iguales tenemos una matriz cuadrada de `orden` $n$

$$
    A = \left( 
    \begin{matrix}
        a_{1 1} & a_{1 2} & a_{1 3} & \cdots & a_{1 n}
        \\
        a_{2 1} & a_{2 2} & a_{2 3} & \cdots & a_{2 n}
        \\
        a_{3 1} & a_{3 2} & a_{3 3} & \cdots & a_{3 n}
        \\
        \vdots & \vdots & \vdots & \ddots & \vdots
        \\
        a_{n 1} & a_{n 2} & a_{n 3} & \cdots & a_{n n}
    \end{matrix}
    \right)
    _{n \times n} 
$$

#### Diagonal principal

$$
    \left\{ a_{i j} / i = j  \right\} = \left\{ a_{1 1}, a_{2 2}, a_{3 3}, \cdots , a_{n n}\right\}
$$

$$
    A = \left( 
    \begin{matrix}
        {\color{#00a34a} a}_{1 1} & a_{1 2} & a_{1 3} & \cdots & a_{1 n}
        \\
        a_{2 1} & {\color{#00a34a} a}_{2 2} & a_{2 3} & \cdots & a_{2 n}
        \\
        a_{3 1} & a_{3 2} & {\color{#00a34a} a}_{3 3} & \cdots & a_{3 n}
        \\
        \vdots & \vdots & \vdots & \ddots & \vdots
        \\
        a_{n 1} & a_{n 2} & a_{n 3} & \cdots & {\color{#00a34a} a}_{n n}
    \end{matrix}
    \right)
    _{n \times n} 
$$


<br>

### Matriz diagonal

Todos los elementos son igual a $0$, exepto los de la `diagonal principal`

Es decir cumple que: $ \forall i \neq j, a_{i j} = 0 $

$$
    A = \left( 
    \begin{matrix}
        a_{1 1} & 0 & 0 & \cdots & 0
        \\
        0 & a_{2 2} & 0 & \cdots & 0
        \\
        0 & 0 & a_{3 3} & \cdots & 0
        \\
        \vdots & \vdots & \vdots & \ddots & \vdots
        \\
        0 & 0 & 0 & \cdots & a_{n n}
    \end{matrix}
    \right)
    _{n \times n} 
$$

#### Matriz escalar

Todos los elementos de la `diagonal principal` son iguales

$$
    I = \left( 
    \begin{matrix}
        k & 0 & 0 & \cdots & 0
        \\
        0 & k & 0 & \cdots & 0
        \\
        0 & 0 & k & \cdots & 0
        \\
        \vdots & \vdots & \vdots & \ddots & \vdots
        \\
        0 & 0 & 0 & \cdots & k
    \end{matrix}
    \right)
    _{n \times n} 
$$

#### Matriz identidad

Los numeros en la diagonal son igual a $1$

$$
    I = \left( 
    \begin{matrix}
        1 & 0 & 0 & \cdots & 0
        \\
        0 & 1 & 0 & \cdots & 0
        \\
        0 & 0 & 1 & \cdots & 0
        \\
        \vdots & \vdots & \vdots & \ddots & \vdots
        \\
        0 & 0 & 0 & \cdots & 1
    \end{matrix}
    \right)
    _{n \times n} 
$$

$$
    I (\delta_{ij}) = \delta_{ij} = 
    \left\{
        \begin{array}{l}
            0 \hspace{1em}\text{si}\hspace{1em} i \neq j
            \\
            1 \hspace{1em}\text{si}\hspace{1em} i = j
        \end{array}
    \right\}
$$

<br>



### Matriz triangular

Los elementos ubicados por arriba o por debajo de la `diagonal principal` son igual a $0$

#### Matriz triangular superior

Cumple que: $\forall i > j, a_{i j} = 0$

$$
    A = \left( 
    \begin{matrix}
        a_{1 1} & a_{1 2} & a_{1 3} & \cdots & a_{1 n}
        \\
        0 & a_{2 2} & a_{2 3} & \cdots & a_{2 n}
        \\
        0 & 0 & a_{3 3} & \cdots & a_{3 n}
        \\
        \vdots & \vdots & \vdots & \ddots & \vdots
        \\
        0 & 0 & 0 & \cdots & a_{n n}
    \end{matrix}
    \right)
    _{n \times n} 
$$

#### Matriz triangular inferior

Cumple que: $\forall i < j, a_{i j} = 0$

$$
    A = \left( 
    \begin{matrix}
        a_{1 1} & 0 & 0 & \cdots & 0
        \\
        a_{2 1} & a_{2 2} & 0 & \cdots & 0
        \\
        a_{3 1} & a_{3 2} & a_{3 3} & \cdots & 0
        \\
        \vdots & \vdots & \vdots & \ddots & \vdots
        \\
        a_{n 1} & a_{n 2} & a_{n 3} & \cdots & a_{n n}
    \end{matrix}
    \right)
    _{n \times n} 
$$