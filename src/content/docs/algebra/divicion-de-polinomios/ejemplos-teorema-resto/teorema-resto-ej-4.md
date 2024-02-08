## Teorema del resto - ejemplo 4

$$
    \frac{
        2 \cdot x^{5} + 3 \cdot x^{3} + 3 \cdot x - 6
    }
    {x^{2} + 1}
$$

Aplicamos un **cambio de variable**

$$
    t = x^{2}
\\\
$$

Operamos el numerador con el objetivo de agrupar $x^{2}$ siempre que sea posible

$$
    2 \cdot x^{5} + 3 \cdot x^{3} + 3 \cdot x - 6
\\\
$$
$$
    2 \cdot \left(x^{2}\right)^{2} \cdot x + 3 \cdot x^{2} \cdot x + 3 \cdot x - 6
\\\
$$

Aplicamos el **cambio de variable**

$$
    2 \cdot {\underbrace{\left(x^{2}\right)}_{t}}^{2} \cdot x + 3 \cdot \underbrace{x^{2}}_{t} \cdot x + 3 \cdot x - 6
\\\
$$
$$
    2 \cdot t^{2} \cdot x + 3 \cdot t \cdot x + 3 \cdot x - 6
\\\
$$

Con el cambio de variable nos queda:

$$
    \frac{
        2 \cdot t^{2} \cdot x + 3 \cdot t \cdot x + 3 \cdot x - 6
    }
    {t + 1}
\\\
$$

igualamos el denominador a $0$

$$
    t + 1 = 0 \hspace{2em} t = -1
$$

Encontramos el `resto` evaluando el numerador en $t = -1$

$$
    \text{Resto} = 2 \cdot (-1)^{2} \cdot x + 3 \cdot -1 \cdot x + 3 \cdot x - 6
\\\
$$
$$
    \text{Resto} = 2 \cdot x - 3 \cdot x + 3 \cdot x - 6
\\\
$$
$$
    \text{Resto} = 2 \cdot x - \cancel{3 \cdot x} + \cancel{3 \cdot x} - 6
\\\
$$
$$
    \text{Resto} = 2 \cdot x - 6
\\\
$$