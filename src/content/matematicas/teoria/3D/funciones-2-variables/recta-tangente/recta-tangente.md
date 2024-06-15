
## Derivada parcial con respecto a x

Dada una **funcion** $f(x, y)$ y un **punto** $P_{0} = (x_{0}, y_{0}, z_{0})$

$$
\large{
    m = \left.\dfrac{\partial f}{\partial x}\right|_{P_{0}}
}
$$

### Vectorial

$$
\large{
    \vec{r}(t) = \vec{P_{0}} + t \cdot ( 1, 0, m)
}
$$

### Parametrica

$$
r(t) =
\left\{
    \begin{array}{l}
        x = x_{0} + t
        \\\\
        y = y_{0}
        \\\\
        z = z_{0} + t \cdot m
    \end{array}
\right.
$$

### Interseccion de 2 planos

$$
r =
\left\{
    \begin{array}{l}
        z - z_{0} = m \cdot (x - x_{0})
        \\\\
        y = y_{0}
    \end{array}
\right.
$$

<br>

## Derivada parcial con respecto a y

$$
\large{
    m = \left.\dfrac{\partial f}{\partial y}\right|_{P_{0}}
}
$$

### Vectorial

$$
\large{
    \vec{r}(t) = \vec{P_{0}} + t \cdot (0, 1, m)
}
$$

### Parametrica

$$
r(t) =
\left\{
    \begin{array}{l}
        x = x_{0} 
        \\\\
        y = y_{0} + t
        \\\\
        z = z_{0} + t \cdot m
    \end{array}
\right.
$$

### Interseccion de 2 planos

$$
r =
\left\{
    \begin{array}{l}
        z - z_{0} = m \cdot (y - y_{0})
        \\\\
        x = x_{0}
    \end{array}
\right.
$$

<br>


## Derivada direccional

Dada una **funcion** $f(x, y)$, un **punto** $P_{0} = (x_{0}, y_{0}, z_{0})$ y un **vector direccion unitario** $\vec{d} = (a, b)$

$$
\large{
    m = \left.\dfrac{\partial f}{\partial x}\right|_{P_{0}} \cdot a + \left.\dfrac{\partial f}{\partial y}\right|_{P_{0}} \cdot b 
}
$$

### Vectorial

$$
\large{
    \vec{r}(t) = \vec{P_{0}} + t \cdot (a, b, m)
}
$$

### Parametrica

$$
r(t) =
\left\{
    \begin{array}{l}
        x = x_{0} + t \cdot a
        \\\\
        y = y_{0} + t \cdot b
        \\\\
        z = z_{0} + t \cdot m
    \end{array}
\right.
$$

### Interseccion de 2 planos

$$
r =
\left\{
    \begin{array}{l}
        z - z_{0} = m \cdot a \cdot (x - x_{0}) + m \cdot b \cdot (y - y_{0})
        \\\\
        y - y_{0} =  \dfrac{b}{a} \cdot (x - x_{0})
    \end{array}
\right.
$$

<br><br>


