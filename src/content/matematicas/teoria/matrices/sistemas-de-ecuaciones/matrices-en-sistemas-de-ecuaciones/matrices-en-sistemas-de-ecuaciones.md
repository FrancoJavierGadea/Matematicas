## Sistemas de ecuaciones con matrices

Dado un sistema de ecuaciones
$$
\large{
    \left\{
        \begin{array}{l}
            x + 2 \cdot y = 4
            \\\\
            3 \cdot x + 5 \cdot y = 7
        \end{array}
    \right.
}
$$

Podemos escribirlo como un **producto de matrices**

$$
\large{
    \underbrace{
        \left(
            \begin{array}{rrr}
                1 & 2
                \\
                3 & 5
            \end{array}
        \right)
    }_{\displaystyle{A}}
    \cdot
    \underbrace{
        \left(
            \begin{array}{r}
                x
                \\
                y
            \end{array}
        \right)
    }_{\displaystyle{\vec{\text{x}}}}
    =
    \underbrace{
        \left(
            \begin{array}{r}
                4
                \\
                7
            \end{array}
        \right)
    }_{\displaystyle{\vec{\text{v}}}}
}
$$

Donde

- $A$ es la `matriz de coeficientes`
  
- $\vec{\text{x}}$ es la `matriz de incognitas`
  
- $\vec{\text{v}}$ es la `matriz de terminos independientes`

Y en vez de pensar en **2 rectas que se intersectan** en un punto $(x, y)$

![alt](./sistema-de-ecuaciones-como-rectas.lnkspace.svg)

podemos pensar que en que:

$A$ es una `transformacion lineal del espacio` que cuando la que **aplicamos** al `vector incognita` $\vec{\text{x}}$ obtenemos el `vector resultado` $\vec{\text{v}}$

![alt](./sistema-de-ecuaciones-como-vector.lnkspace.svg)

$A$ **transforma** el espacio del **convirtiendo** al **vector** $\vec{\text{x}}$ en el **vector** $\vec{\text{v}}$

$$
\Large{
    A \cdot \vec{\text{x}} = \vec{\text{v}}
}
$$

<video src="./transformacion-vectores.mp4" loop muted autoplay controls></video>

<br>

#### Transformacion inversa

Para encontrar cuanto vale el vector $\vec{\text{x}}$ antes de **aplicar la transformacion** $A$

debemos aplicar la `transformacion inversa` $A^{-1}$ al **vector** $\vec{\text{v}}$

$$
\Large{
    A^{-1} \cdot \vec{\text{v}} = \vec{\text{x}}
}
$$

Encontrar la `transformacion inversa` es calcular la `matriz inversa` de $A$

![alt](./matriz-inversa-1.lnkspace.svg)

Aplicamos la `transformacion inversa`

$$
\begin{array}{c}
    \begin{pmatrix}
        -5 & 2 \\ 3 & -1
    \end{pmatrix}
    \cdot 
    \begin{pmatrix}
        4 \\ 7
    \end{pmatrix}
    =
    \begin{pmatrix}
        x \\ y
    \end{pmatrix}
    \\\\
    \begin{pmatrix}
        -5 \cdot 4 + 2 \cdot 7 \\ 3 \cdot 4 -7
    \end{pmatrix}
    =
    \begin{pmatrix}
        x \\ y
    \end{pmatrix}
    \\\\
    \begin{pmatrix}
        -20 + 14 \\ 12 - 7
    \end{pmatrix}
    =
    \begin{pmatrix}
        x \\ y
    \end{pmatrix}
    \\\\
    \begin{pmatrix}
        -6 \\ 5
    \end{pmatrix}
    =
    \begin{pmatrix}
        x \\ y
    \end{pmatrix}
\end{array}
$$
<br>

finalmente las **coordenadas** el `vector incognita` $\vec{\text{x}}$ y soluciones son

$$
\Large{
    x = -6 \hspace{3em} y = 5
}
$$

![alt](./sistema-de-ecuaciones-como-vector-2.lnkspace.svg)



<br><br>

#### Docs

- [Matriz inversa, rango y rango nulo](https://www.youtube.com/watch?v=Xt_0OyLdQgI)