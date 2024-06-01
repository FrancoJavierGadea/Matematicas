## Recta en 3D


### Ecuacion vectorial

$$
\Large{
    \vec{r}(t) = \vec{P_{0}} + t \cdot \vec{d}
}  
$$
> $\vec{P_{0}}$ es `vector de posicion`
> <br>
> $\vec{r}$ **punto generico** de la recta
> <br>
> $\vec{d}$ `vector direccion` de la recta

<br>

<!-- MARK: Ecuacion parametrica -->
### Ecuacion parametrica

Descomponiendo los **vectores** en sus componentes obtenemos la `ecuacion parametrica`

$$
    \vec{P_{0}} = (x_{0}, y_{0}, z_{0})
    \hspace{2em}
    \vec{d} = (a, b, c)
    \hspace{2em}
    \vec{r} = (x, y, z)
$$
<br>

$$
r(t) = \large{
    \left\{ 
        \begin{array}{l}
            x = x_{0} + t \cdot a 
            \\\\
            y = y_{0} + t \cdot b 
            \\\\ 
            z = z_{0} + t \cdot c
        \end{array} 
    \right.
}
$$

#### Numeros directores

La componentes $(a, b, c)$ del vector direccion $\vec{d}$ son los `numeros directores` de la `recta`

<br>

<!-- MARK: Ecuacion simetrica -->
### Ecuacion simetrica

Si $(a, b, c)$ son distintas de $0$ podemos despejar $t$ de las ecuaciones parametricas

$$
    \begin{array}{l}
        x = x_{0} + t \cdot a 
        &\hspace{1em}
        y = y_{0} + t \cdot b 
        &\hspace{1em}
        z = z_{0} + t \cdot c
        \\\\
        x - x_{0} = t \cdot a 
        &\hspace{1em}
        y - y_{0} = t \cdot b 
        &\hspace{1em}
        z - z_{0} = t \cdot c
        \\\\
        \dfrac{x - x_{0}}{a } = t 
        &\hspace{1em}
        \dfrac{y - y_{0}}{b} = t  
        &\hspace{1em}
        \dfrac{z - z_{0}}{c} = t
    \end{array}
$$

y escribir la `recta` en su `forma simetrica` igualando y eliminando $t$

<br>

$$
\Large{
    \dfrac{x - x_{0}}{a} = 
    \dfrac{y - y_{0}}{b} =
    \dfrac{z - z_{0}}{c} = t
}
$$
<br>

Si una de $(a, b, c)$ es igual a $0$, por ejemplo $c$ escribimos la `recta` como

$$
\large{
    \dfrac{x - x_{0}}{a} = 
    \dfrac{y - y_{0}}{b} = t
    \hspace{2em} z = z_{0}
}
$$

donde la `recta` **esta contenida** en el `plano` $z = z_{0}$

<br>



<!-- MARK: Segmento de Recta -->
## Segmento de recta

Dados 2 puntos $P_{1} = (x_{1}, y_{1}, z_{1})$ y $P_{2} = (x_{2}, y_{2}, z_{2})$

La `ecuacion vectorial` del segmento de recta es

$$
    r(t) = (1 - t) \cdot \vec{P_{1}} + t \cdot \vec{P_{2}}
$$

<br>






<!-- MARK: Recta Tangente -->
<br>

## Recta tangente a un funcion

Dada un funcion $f(x)$ y un punto $P_{0} = (x_{0}, y_{0})$ del dominio de funcion

la recta tangente en el punto $P_{0}$ es

$$
    r(x) = f'(x) \cdot (x - x_{0}) + y_{0}
$$

<br>

## Recta tangente a un funcion en 3D

Dada una funcion $f(x, y)$ y punto $P_{0} = (x_{0}, y_{0}, z_{0})$ del dominio de funcion

la recta tangente en el punto $P$ es

$$
    r(t) = P_{0} + t \cdot \left(
        1 \hspace{0.2em},\hspace{0.2em} 0 \hspace{0.2em},\hspace{0.2em} 
        \left. \dfrac{\partial f}{\partial x}\right|_{P_{0}} 
    \right)
$$

$$
    r(t) = P_{0} + t \cdot \left(
        0 \hspace{0.2em},\hspace{0.2em} 1 \hspace{0.2em},\hspace{0.2em} 
        \left. \dfrac{\partial f}{\partial y}\right|_{P_{0}}   
    \right)
$$
