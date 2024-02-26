## Determinante

Es un numero real asosiado a una matriz cuadrada

#### Matriz $1 \times 1$

$$
    \begin{array}{c}
        \displaystyle{
            A = (a)
        }
        \\\\
        \displaystyle{
            |A| = a
        }
    \end{array}
$$

#### Matriz $2 \times 2$

$$
    \begin{array}{c}
        \displaystyle{
            A = \left( 
                \begin{matrix}
                    a_{1 1} & a_{1 2}
                    \\
                    a_{2 1} & a_{2 2}
                \end{matrix}
            \right)
        }
        \\\\
        \displaystyle{
            |A| = (a_{1 1} \cdot a_{2 2}) - (a_{2 1} \cdot a_{1 2})
        }
    \end{array}
$$


<br>

### Determinante de una Matriz diagonal

El determinante de una `matriz diagonal` de cualquier `orden`, cualquier cantidad de filas o columnas, es el **producto de los elementos de su diagonal**

$$
    \begin{array}{c}
        \displaystyle{
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
        }
        \\\\

        \displaystyle{
            |A| = \prod_{z = 1}^{n} a_ {z z} = a_{1 1} \cdot a_{2 2} \cdot a_{3 3} \cdots a_{n n}
        }
        \\\\      
    \end{array}  
$$

Tambien aplica para **Matrices triangulares**, ya sea **triangular superior** o **triangular inferior**

$$
    \begin{array}{c}
        \displaystyle{
            A = 
            \left( 
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

            \hspace{2em}

            A =
            \left( 
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
  
        }
        \\\\

        \displaystyle{
            |A| = \prod_{z = 1}^{n} a_ {z z} = a_{1 1} \cdot a_{2 2} \cdot a_{3 3} \cdots a_{n n}
        }
        \\\\      
    \end{array}  
$$