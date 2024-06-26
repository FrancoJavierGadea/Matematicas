## Identidades del gradiente - identidad 1

Dado un **vector** $\vec{a} = (x, y)$

$$
\Large{
    \triangledown \left(\dfrac{1}{|\vec{a}|}\right) = -\dfrac{\vec{a}}{\displaystyle{ |\vec{a}|^{3}}}
}
$$


### Demostracion

Tomamos la **funcion**

$$
f(x, y) = \dfrac{1}{\big|\vec{a}\big|} = \dfrac{1}{\sqrt{\displaystyle{x^{2} + y^{2}}}}
$$

Usamos la definicion del `vector gradiente`

$$
\vec{\triangledown}f(x, y) = 
\dfrac{\partial}{\partial x}\left(\dfrac{1}{\sqrt{\displaystyle{x^{2} + y^{2}}}}\right)
\cdot \mathbf{i} 
\hspace{0.5em}+\hspace{0.5em}
\dfrac{\partial}{\partial y}\left(\dfrac{1}{\sqrt{\displaystyle{x^{2} + y^{2}}}}\right)
\cdot \mathbf{j}
$$

aplicando regla de la cadena derivamos con respecto a $x$ e $y$

- #### Derivada parcial con respecto a $x$ 
    $$
        \begin{array}{lll}
            \dfrac{\partial}{\partial x}\left( \dfrac{1}{\sqrt{\displaystyle{x^{2} + y^{2}}}} \right)
            &
            \dfrac{
                -\dfrac{\partial}{\partial x}\left(\sqrt{\displaystyle{x^{2} + y^{2}}}\right)
            }
            {
                \Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}
            }
            \\\\
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{\partial}{\partial x}\left(\sqrt{\displaystyle{x^{2} + y^{2}}}\right)
            &
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{\dfrac{\partial}{\partial x}\left(x^{2} + y^{2}\right)}{2 \cdot \sqrt{\displaystyle{x^{2} + y^{2}}}}
            \\\\
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{2 \cdot x}{2 \cdot \sqrt{\displaystyle{x^{2} + y^{2}}}}
            &
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{\cancel{2} \cdot x}{\cancel{2} \cdot \sqrt{\displaystyle{x^{2} + y^{2}}}}
            \\\\
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{x}{\sqrt{\displaystyle{x^{2} + y^{2}}}}
            &
            -\dfrac{x}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{3}}
        \end{array}
    $$
<br>

- #### Derivada parcial con respecto a $y$ 
    $$
        \begin{array}{lll}
            \dfrac{\partial}{\partial y}\left( \dfrac{1}{\sqrt{\displaystyle{x^{2} + y^{2}}}} \right)
            &
            \dfrac{
                -\dfrac{\partial}{\partial y}\left(\sqrt{\displaystyle{x^{2} + y^{2}}}\right)
            }
            {
                \Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}
            }
            \\\\
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{\partial}{\partial y}\left(\sqrt{\displaystyle{x^{2} + y^{2}}}\right)
            &
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{\dfrac{\partial}{\partial y}\left(x^{2} + y^{2}\right)}{2 \cdot \sqrt{\displaystyle{x^{2} + y^{2}}}}
            \\\\
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{2 \cdot y}{2 \cdot \sqrt{\displaystyle{x^{2} + y^{2}}}}
            &
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{\cancel{2} \cdot y}{\cancel{2} \cdot \sqrt{\displaystyle{x^{2} + y^{2}}}}
            \\\\
            \dfrac{-1}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{2}}
            \cdot 
            \dfrac{y}{\sqrt{\displaystyle{x^{2} + y^{2}}}}
            &
            -\dfrac{y}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{3}}
        \end{array}
    $$
<br>


remplazando el `vector gradiente` nos queda

$$
\vec{\triangledown}f(x, y) = 
\dfrac{-x}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{3}} 
\cdot \mathbf{i} 
\hspace{0.5em}+\hspace{0.5em}
\dfrac{-y}{\Big(\sqrt{\displaystyle{x^{2} + y^{2}}}\Big)^{3}} 
\cdot \mathbf{j}
$$
<br>

reordenando y remplanzando $\sqrt{\displaystyle{x^{2} + y^{2}}}$ por el modulo del vector $|\vec{a}|$ nos queda

$$
\vec{\triangledown}f(x, y) = 
\dfrac{-x}{\displaystyle{|\vec{a}|^{3}}} 
\cdot \mathbf{i} 
\hspace{0.5em}+\hspace{0.5em}
\dfrac{-y}{\displaystyle{|\vec{a}|^{3}}} 
\cdot \mathbf{j}
$$

$$
\vec{\triangledown}f(x, y) = - \dfrac{1}{|\vec{a}|^{3}} \cdot \left(x \cdot \mathbf{i} \hspace{0.5em}+\hspace{0.5em} y \cdot \mathbf{j}\right)
$$

$$
\vec{\triangledown}f(x, y) = - \dfrac{1}{|\vec{a}|^{3}} \cdot \vec{a}
$$

$$
\vec{\triangledown}f(x, y) = - \dfrac{\vec{a}}{|\vec{a}|^{3}}
$$