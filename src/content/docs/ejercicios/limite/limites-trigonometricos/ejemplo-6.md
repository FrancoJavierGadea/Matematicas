## Limite trigonometricos con sustitucion - ejemplo 6

$$
    \lim_{x \to \pi} \frac{2 \cdot (x - \pi)}{\sin(x - \pi)}
$$

Remplazamos

$$
    \lim_{x \to \pi} \frac{2 \cdot (\pi - \pi)}{\sin(\pi - \pi)} = \frac{2 \cdot 0}{\sin(0)} = \frac{0}{0}
$$

<br>

La indeterminacion es $(x - \pi)$

Aplicamos un `cambio de variable`

$$
    t = x - \pi
$$

Rescribimos el limite

$$
    \lim_{x \to \pi} \frac{2 \cdot (x - \pi)}{\sin(x - \pi)}

    \longrightarrow

    \lim_{t \to 0} \frac{2 \cdot t}{\sin(t)}
$$

<br>

Resolvemos el limite aplicando propiedades de los limites

$$
\begin{array}{c}
    \displaystyle{
        \lim_{t \to 0} \frac{2 \cdot t}{\sin(t)}
    }
    \\\\
    \displaystyle{
        2 \cdot \underbrace{
            \lim_{t \to 0} \frac{t}{\sin(t)}
        }_{1}
    }
    \\\\
    \displaystyle{
        2 \cdot 1 = 2
    } 
\end{array}
$$


Finalmente

$$
    \lim_{x \to \pi} \frac{2 \cdot (x - \pi)}{\sin(x - \pi)} = 2
$$