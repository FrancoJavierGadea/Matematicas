## Plano en 3D

Para definir un `plano` se necesita 

- Un punto $P_{0} = (x_{0}, y_{0}, z_{0})$
- Un vector $\vec{N}$ ortogonal al `plano` llamado `vector normal`

<br>

<!-- MARK: Ecuacion vectorial -->
### Ecuacion vectorial

$$
\Large{
    \vec{N} \bullet (\vec{p} - \vec{P_{0}}) = 0
}    
$$

> $\vec{N}$ es el `vector normal`
> <br>
> $\vec{P_{0}}$ es un **punto conocido** del `plano`
> <br>
> $\vec{p}$ es un **punto generico** del `plano`

<br>

<!-- MARK: Ecuacion Escalar -->
### Ecuacion escalar

Desarrollando el **producto vectorial o producto punto** llegamos a la `ecuacion escalar` del `plano`

$$
\begin{array}{c}
    \vec{N} = (a, b, c) 
    \hspace{2em}
    P_{0} = (x_{0}, y_{0}, z_{0})
    \hspace{2em}
    \vec{p} = (x, y, z)
    \\\\
    \large{
        (a, b, c) \bullet (x - x_{0}, y - y_{0}, z - z_{0})
    }
\end{array}
$$

desarrollando

$$
    \Large{
        a \cdot (x - x_{0}) + 
        b \cdot (y - y_{0}) + 
        c \cdot (z - z_{0}) = 0
    }
$$
<br>

<!-- MARK: Ecuacion lineal -->
### Ecuacion lineal

$$
\begin{array}{c}
    (a \cdot x - a \cdot x_{0}) + 
    (b \cdot y - b \cdot y_{0}) + 
    (c \cdot z - c \cdot z_{0}) = 0
    \\\\
    a \cdot x + b \cdot y + c \cdot z + \underbrace{(- a \cdot x_{0} - b \cdot y_{0} - c \cdot z_{0})}_{d} = 0
\end{array}
$$

y obtenemos

$$
    \Large{
        a \cdot x + b \cdot y + c \cdot z + d = 0
    }
$$

> $(a, b, c)$ son las **componentes** del `vector normal`
> <br>
> $d = - (a \cdot x_{0} + b \cdot y_{0} + c \cdot z_{0})$

<br>

<!-- MARK: Valor de d -->
#### El valor de $d$

$$
\large{
    d = \vec{N} \bullet \vec{p}
    \hspace{2em}
    d = |\vec{N}| \cdot h
    \hspace{2em}
    d = a \cdot x + b \cdot y + c \cdot z
}
$$

> $|\vec{N}|$ es el modulo del `vector normal`
> <br>
> $\vec{p}$ es un **punto generico** del plano
> <br>
> $h$ es la **distancia del plano al origen** y la **proyeccion** del vector $\vec{p}$ sobre el `vector normal` $\vec{N}$

> Cuando $d = 0$ entonces $h = 0$ y el `plano` pasa por el **origen**


<br><br>

## Plano con 3 puntos

Dados 3 puntos 
$$
    P_{1} = (x_{1}, y_{1}, z_{1})
    \hspace{1em}
    P_{2} = (x_{2}, y_{2}, z_{2})
    \hspace{1em}
    P_{3} = (x_{3}, y_{3}, z_{3})
$$

Definimos los `vectores direccion`

$$
    \vec{a} = \overset{\longrightarrow}{P_{1}P_{2}} = \vec{P_{2}} - \vec{P_{1}}
    \hspace{2em}
    \vec{b} = \overset{\longrightarrow}{P_{1}P_{3}} = \vec{P_{3}} - \vec{P_{1}}
$$

y definimos el `plano` a traves del **punto generico** $p = (x, y, z)$ el punto $P_{1}$ y **escalando** los 2 `vectores direccion`

#### Ecuacion vectorial
$$
    \vec{p} = \vec{P_{1}} \hspace{0.2em}+\hspace{0.2em} \alpha \cdot \vec{a} \hspace{0.2em}+\hspace{0.2em} \beta \cdot \vec{b}
    \hspace{3em}
    \vec{p} = \vec{P_{1}} \hspace{0.2em}+\hspace{0.2em} \alpha \cdot (\vec{P_{2}} - \vec{P_{1}}) \hspace{0.2em}+\hspace{0.2em} \beta \cdot (\vec{P_{3}} - \vec{P_{1}})
$$

#### Ecuacion parametrica

$$
p(t) = 
\left\{ 
    \begin{array}{l}
        x = x_{1} + \alpha \cdot a_{x} + \beta \cdot b_{x}
        \\\\
        y = y_{1} + \alpha \cdot a_{y} + \beta \cdot b_{y}
        \\\\ 
        z = z_{1} + \alpha \cdot a_{z} + \beta \cdot b_{z}
    \end{array} 
\right.
\hspace{1em}
p(t) = 
\left\{ 
    \begin{array}{l}
        x = x_{1} + \alpha \cdot (x_{2} - x_{1}) + \beta \cdot (x_{3} - x_{1}) 
        \\\\
        y = y_{1} + \alpha \cdot (y_{2} - y_{1}) + \beta \cdot (y_{3} - y_{1})
        \\\\ 
        z = z_{1} + \alpha \cdot (z_{2} - z_{1}) + \beta \cdot (z_{3} - z_{1})
    \end{array} 
\right.
$$

<br>

#### Tambien podemos definir el `vector normal`
$$
    |\vec{N}| = \vec{a} \times \vec{b}
    \hspace{2em}
    |\vec{N}| = (\vec{P_{2}} - \vec{P_{1}}) \times (\vec{P_{3}} - \vec{P_{1}})
$$

y luego plantear la `ecuacion vectorial`

$$
    \vec{N} \bullet (\vec{p} - \vec{P_{1}}) = 0
    \hspace{2em}
    \left[
        (\vec{P_{2}} - \vec{P_{1}}) \times (\vec{P_{3}} - \vec{P_{1}})
    \right] \bullet (\vec{p} - \vec{P_{1}}) = 0
$$

<br><br>



