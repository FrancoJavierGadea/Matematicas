## Recta normal

**Recta normal** al `plano tangente`

Dada una **funcion** $f(x, y)$ y un **punto** $P_{0} = (x_{0}, y_{0}, z_{0})$

#### Vectorial
$$
\large{
    \vec{r}(t) = \vec{P_{0}} + t \cdot (f_{x}|_{P_{0}}, f_{y}|_{P_{0}}, -1)
}
$$

#### Parametrica
$$
r(t) =
\left\{
    \begin{array}{l}
        x = x_{0} + t \cdot f_{x}|_{P_{0}}
        \\\\
        y = y_{0} + t \cdot f_{y}|_{P_{0}}
        \\\\
        z = z_{0} - t
    \end{array}
\right.
$$

#### Simetrica
$$
\large{
    \dfrac{x - x_{0}}{f_{x}|_{P_{0}}}
    =
    \dfrac{y - y_{0}}{f_{y}|_{P_{0}}}
    =
    \dfrac{z - z_{0}}{-1}
}
$$
<br>



### Funcion implicita

Dada una **funcion implicita** $F(x, y, z)$ y un **punto** $P_{0} = (x_{0}, y_{0}, z_{0})$

#### Vectorial
$$
\large{
    \vec{r}(t) = \vec{P_{0}} + t \cdot (F_{x}|_{P_{0}}, F_{y}|_{P_{0}}, F_{z}|_{P_{0}})
}
$$

#### Parametrica
$$
r(t) =
\left\{
    \begin{array}{l}
        x = x_{0} + t \cdot F_{x}|_{P_{0}}
        \\\\
        y = y_{0} + t \cdot F_{y}|_{P_{0}}
        \\\\
        z = z_{0} + t \cdot F_{z}|_{P_{0}}
    \end{array}
\right.
$$

#### Simetrica
$$
\large{
    \dfrac{x - x_{0}}{F_{x}|_{P_{0}}}
    =
    \dfrac{y - y_{0}}{F_{y}|_{P_{0}}}
    =
    \dfrac{z - z_{0}}{F_{z}|_{P_{0}}}
}
$$
<br>




<br>

### Recta normal a las tangentes

**Recta normal** a las `rectas tangentes` correspondientes a la `derivada parcial` de $x$ y `derivada parcial` $y$