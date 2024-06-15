## Funciones vectoriales / Curvas parametricas

Dada una **curva** en **forma vectorial**

$$
    c(t) = \mathbf{x}(t) \cdot \mathbf{i} + \mathbf{y}(t) \cdot \mathbf{j} + \mathbf{z}(t) \cdot \mathbf{k}
$$

o **parametrica**

$$
c(t) =
\left\{
    \begin{array}{l}
        x = \mathbf{x}(t)
        \\\\
        y = \mathbf{y}(t)
        \\\\
        z = \mathbf{z}(t)
    \end{array}
\right.
$$

y un $t_{0}$ que al evaluarlo en la curva produce un $P_{0} = \left(\mathbf{x}(t_{0}), \mathbf{y}(t_{0}), \mathbf{z}(t_{0}) \right)$

<br>

### Vectorial

$$
\large{
    \vec{r}(t) = \vec{P_{0}} + t \cdot \vec{d}
}
$$

> $\vec{d} = ( \mathbf{x'}(t_{0}), \mathbf{y'}(t_{0}), \mathbf{z'}(t_{0}) )$

<br>

### Parametrica

$$
r(t) =
\left\{
    \begin{array}{l}
        x = \mathbf{x}(t_{0}) + t \cdot \mathbf{x'}(t_{0})
        \\\\
        y = \mathbf{y}(t_{0}) + t \cdot \mathbf{y'}(t_{0})
        \\\\
        z = \mathbf{z}(t_{0}) + t \cdot \mathbf{z'}(t_{0})
    \end{array}
\right.
$$
<br>

### Simetrica

$$
\large{
    \dfrac{x - \mathbf{x}(t_{0})}{\mathbf{x'}(t_{0})}
    =
    \dfrac{y - \mathbf{y}(t_{0})}{\mathbf{y'}(t_{0})}
    =
    \dfrac{z - \mathbf{z}(t_{0})}{\mathbf{z'}(t_{0})}
}
$$