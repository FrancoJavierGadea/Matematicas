## Interseccion de un cilindro con un plano

Si tengo el cilindro 

$$
    C = x^{2} + y^{2} = 1
$$

lo puedo parametrizar

$$
    C = \left\{
    \begin{array}{l}
        x = cos(t)
        \\\\
        y = sin(t)
    \end{array}
    \right.
$$

y lo puedo intersectar con un `plano`

$$
    P = y + z = 2
$$

dejando $z$ y remplazando $y$ por $sin(t)$

$$
    I = \left\{
    \begin{array}{l}
        x = cos(t)
        \\\\
        y = sin(t)
        \\\\
        z = 2 - sin(t)
    \end{array}
    \right.
$$

que escrito de forma vectorial

$$
    r(t) = cos(t) \cdot \hat{i} + sin(t) \cdot \hat{j} + (2 - sin(t)) \cdot \hat{k}
$$