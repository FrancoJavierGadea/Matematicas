## Matriz de rotacion

Rotar el espacio alrededor de 1 eje

$$
R^{T}(\alpha) = R^{-1}(\alpha)
\hspace{3em}
|R(\alpha)| = \pm 1
$$

### En el plano 2D

$$
R(\alpha) =
\left(
    \begin{array}{rr}
        \cos(\alpha) & \cos(\alpha + 90^\circ)
        \\\\
        \sin(\alpha) & \sin(\alpha + 90^\circ)
    \end{array}
\right)
$$

aplicando `identidades trigonometricas` nos queda

$$
R(\alpha) =
\left(
    \begin{array}{rr}
        \cos(\alpha) & -\sin(\alpha)
        \\\\
        \sin(\alpha) & \cos(\alpha)
    \end{array}
\right)
$$


<br>

### En el espacio 3D

- **Alrededor del eje $x$**
  
    $$
    R_{x}(\alpha) =
    \left(
        \begin{array}{ccc}
            1 & 0 & 0
            \\\\
            0 & \cos(\alpha) & -\sin(\alpha)
            \\\\
            0 & \sin(\alpha) & \cos(\alpha)
        \end{array}
    \right)
    $$
<br>

- **Al rededor del eje $y$**
  
    $$
    R_{y}(\alpha) =
    \left(
        \begin{array}{ccc}
            \cos(\alpha) & 0 & \sin(\alpha)
            \\\\
            0 & 1 & 0
            \\\\
            -\sin(\alpha) & 0 & \cos(\alpha)
        \end{array}
    \right)
    $$
<br>


- **Al rededor del eje $z$**
  
    $$
    R_{z}(\alpha) =
    \left(
        \begin{array}{ccc}
            \cos(\alpha) & -\sin(\alpha) & 0
            \\\\
            \sin(\alpha) & \cos(\alpha) & 0
            \\\\
            0 & 0 & 1
        \end{array}
    \right)
    $$
<br>


<br><br>

#### Docs

- [Rotation matrix](https://en.wikipedia.org/wiki/Rotation_matrix)