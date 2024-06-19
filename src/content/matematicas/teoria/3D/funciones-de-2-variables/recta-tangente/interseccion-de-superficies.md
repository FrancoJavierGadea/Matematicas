## Recta tangente - Interseccion de superficies

Dada una **curva** expresada por **interseccion de 2 superficies** $F$ y $G$

$$
\left\{
    \begin{array}{l}  
        F(x, y, z) = 0
        \\\\
        G(x, y, z) = 0
    \end{array}
\right.
\hspace{2em}
\left\{
    \begin{array}{l}  
        z = f(x, y)
        \\\\
        z = g(x, y)
    \end{array}
\right.
$$

y un **punto** $P_{0} = (x_{0}, y_{0}, z_{0})$

<br>

### Recta tangente 

#### Vectorial

$$
\large{
    \vec{r}(t) = \vec{P_{0}} + t \cdot \vec{d}
}
$$

con el `vector direccion`
$$
\vec{d} = 
\begin{pmatrix}
    \left.\dfrac{\partial(F, G)}{\partial(y, z)}\right|_{P_{0}},
    & 
    \left.\dfrac{\partial(F, G)}{\partial(z, x)}\right|_{P_{0}},
    & 
    \left.\dfrac{\partial(F, G)}{\partial(x, y)}\right|_{P_{0}}
\end{pmatrix}
$$

<br>

#### Parametrica

$$
r(t) =
\left\{
    \begin{array}{l}
        x = x_{0} + t \cdot \left.\dfrac{\partial(F, G)}{\partial(y, z)}\right|_{P_{0}}
        \\\\
        y = y_{0} + t \cdot \left.\dfrac{\partial(F, G)}{\partial(z, x)}\right|_{P_{0}}
        \\\\
        z = z_{0} + t \cdot \left.\dfrac{\partial(F, G)}{\partial(x, y)}\right|_{P_{0}}
    \end{array}
\right.
$$
<br>

#### Simetrica

$$
\dfrac{x - x_{0}}{
    \left.\dfrac{\partial(F, G)}{\partial(y, z)}\right|_{P_{0}}
}
=
\dfrac{y - y_{0}}{
    \left.\dfrac{\partial(F, G)}{\partial(z, x)}\right|_{P_{0}}
}
=
\dfrac{z - z_{0}}{
    \left.\dfrac{\partial(F, G)}{\partial(x, y)}\right|_{P_{0}}
}
$$