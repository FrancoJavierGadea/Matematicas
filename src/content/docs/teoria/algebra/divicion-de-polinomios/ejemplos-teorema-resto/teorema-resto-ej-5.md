## Teorema del resto - ejemplo 5

$$
    \frac{
        (x + 1) \cdot (x + 3) \cdot (x + 5) \cdot (x + 7) + 4
    }
    {
        x^{2} + 8 \cdot x + 11
    }
$$

Igualar el denominador a $0$

$$
    x^{2} + 8 \cdot x + 11 = 0
$$
$$
    x^{2} + 8 \cdot x = -11
$$

Aplicamos un **cambio de variable**

$$
    t = x^{2} + 8 \cdot x = -11
\\\
$$

Operamos el numerador con el objetivo de agrupar $x^{2} + 8 \cdot x$

$$
    (x + 1) \cdot (x + 3) \cdot (x + 5) \cdot (x + 7) + 4
\\\
$$
$$
    \overbrace{(x + 1) \cdot (x + 7)} \cdot \overbrace{(x + 3) \cdot (x + 5)} + 4
\\\
$$
$$
    (\overbrace{x^{2} + 7 \cdot x + x + 7}) \cdot (\overbrace{x^{2} + 5 \cdot x + 3 \cdot x + 15}) + 4
\\\
$$
$$
    (x^{2} + 8 \cdot x + 7) \cdot (x^{2} + 8 \cdot x + 15) + 4
\\\
$$

Aplicamos el **cambio de variable**
$$
    (\underbrace{x^{2} + 8 \cdot x}_{t} + 7) \cdot (\underbrace{x^{2} + 8 \cdot x}_{t}  + 15) + 4
$$
$$
    (t + 7) \cdot (t + 15) + 4
$$

Con el cambio de variable nos queda:
$$
    \frac{
        (t + 7) \cdot (t + 15) + 4
    }
    {t + 11}
\\\
$$


Encontramos el `resto` evaluando el numerador en $t = -11$

$$
    \text{Resto} = (-11 + 7) \cdot (-11 + 15) + 4
$$
$$
    \text{Resto} = -4 \cdot 4 + 4
$$
$$
    \text{Resto} = -16 + 4
$$
$$
    \text{Resto} = -12
$$