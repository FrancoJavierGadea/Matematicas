# Infinitesimos

Es la cantidad **más cercana a cero** que cualquier numero real estandar pero **diferente de cero**


Se puede definir mediante un **funcion** $f(x)$ que tienda a $0$ en un punto $a$

$$
    \large{\lim_{x \to a} f(x) = 0}
$$

Cuando se cumple esto se dice que:
 
**La funcion $f(x)$ es una `infinitesimo` en el punto $a$**


<br>

## Propiedades

- La **suma** de `infinitesimos` es un `infinitesimo`

    $$
        \begin{array}{c}
            \displaystyle{
                \lim_{x \to a} f(x) = 0
                \hspace{2em}
                \lim_{x \to a} g(x) = 0
            }
            \\\\
            \displaystyle{
                \large{
                    \lim_{x \to a} f(x) + g(x) = 0
                }
            }
        \end{array}
    $$
<br>

- La **resta** de `infinitesimos` es un `infinitesimo`

    $$
        \begin{array}{c}
            \displaystyle{
                \lim_{x \to a} f(x) = 0
                \hspace{2em}
                \lim_{x \to a} g(x) = 0
            }
            \\\\
            \displaystyle{
                \large{
                    \lim_{x \to a} f(x) - g(x) = 0
                }
            }
        \end{array}
    $$
<br>

- El **producto** de `infinitesimos` es un `infinitesimo`

    $$
        \begin{array}{c}
            \displaystyle{
                \lim_{x \to a} f(x) = 0
                \hspace{2em}
                \lim_{x \to a} g(x) = 0
            }
            \\\\
            \displaystyle{
                \large{
                    \lim_{x \to a} f(x) \cdot g(x) = 0
                }
            }
        \end{array}
    $$
<br>

- El **producto** de una **constante** por un `infinitesimo` es un `infinitesimo`

    $$
        \begin{array}{c}
            \displaystyle{
                \lim_{x \to a} f(x) = 0
                \hspace{2em}
                k \in \mathbb{R}
            }
            \\\\
            \displaystyle{
                \large{
                    \lim_{x \to a} k \cdot f(x) = 0
                }
            }
        \end{array}
    $$
<br>

- El **producto** de un `infinitesimo` por una `función acotada` es un `infinitesimo`

    $$
        \begin{array}{c}
            \displaystyle{
                \lim_{x \to a} f(x) = 0
                \hspace{2em}
                g(x) / \forall x \in \text{Dom}(g) \hspace{1em} |g(x)| \leq k
            }
            \\\\
            \displaystyle{
                \large{
                    \lim_{x \to a} f(x) \cdot g(x) = 0
                }
            }
        \end{array}
    $$
<br>


### El cociente de `infinitesimos`

$$
    \lim_{x \to a} f(x) = 0
    \hspace{2em}
    \lim_{x \to a} g(x) = 0
$$

- El cociente es $0$

    $$
        \lim_{x \to a} \frac{f(x)}{g(x)} = 0
    $$

    > $f(x)$ es un `infinitesimo` de **orden superior** a $g(x)$ en el punto $a$
    
<br>


- El cociente es $\infty$

    $$
        \lim_{x \to a} \frac{f(x)}{g(x)} = \pm\infty
    $$

    > $f(x)$ es un `infinitesimo` de **orden inferior** a $g(x)$ en el punto $a$

<br>


- El cociente es un numero real $L$

    $$
        \lim_{x \to a} \frac{f(x)}{g(x)} = L
    $$

    > $f(x)$ y $g(x)$ son `infinitesimos` de **mismo orden** en el punto $a$

<br>

- El cociente es $1$

    $$
        \lim_{x \to a} \frac{f(x)}{g(x)} = 1
    $$

    > $f(x)$ y $g(x)$ son `infinitesimos equivalentes` en el punto $a$

<br>


#### Docs

- [CLASE 4](https://www.youtube.com/watch?v=JHvLKD_Z57I)