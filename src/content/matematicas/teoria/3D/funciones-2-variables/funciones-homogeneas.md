## Funciones homogeneas

Un **funcion** $f$ es **homogenea** si al multiplicar **todos sus argumentos** por un escalar $\alpha$ su valor se **multiplica por una potencia de este escalar**

$$
    f(\alpha \cdot x_{1}, \alpha \cdot x_{2}, \cdots, \alpha \cdot x_{n}) = \alpha^{k} \cdot  f(x_{1}, x_{2}, \cdots, x_{n})
$$

> - $x_{1} \cdots x_{n}$ son los **argumentos** o `variables independientes`
> <br>
> - $\alpha$ es una **constante**
> <br>
> - $k$ es el `grado de homogeneidad`



### Ejemplo

$$
    f(x, y) = \ln\left(\dfrac{x}{y}\right)
$$

Remplazamosen la **funcion** $x \rightarrow \alpha \cdot x \hspace{1em} y \rightarrow \alpha \cdot y$
$$
\begin{array}{l}
    f(\alpha \cdot x, \alpha \cdot y) = \ln\left(\dfrac{\alpha \cdot x}{\alpha \cdot y}\right)
    \\\\
    f(\alpha \cdot x, \alpha \cdot y) = \ln\left(\dfrac{\cancel{\alpha} \cdot x}{\cancel{\alpha} \cdot y}\right)
    \\\\
    f(\alpha \cdot x, \alpha \cdot y) = \ln\left(\dfrac{x}{y}\right)
    \\\\
    f(\alpha \cdot x, \alpha \cdot y) = f(x, y)
\end{array}
$$

La **funcion** es `homogenea` de grado $0$

<br><br>


<!-- MARK: Teorema de Euler -->
## Teorema de Euler sobre funciones homogeneas

Dada una **funcion** `homogenea` $f(x_{1}, x_{2}, \cdots, x_{n})$ de grado $k$ se cumple que: 

<br>

$$
\large{
    \sum_{i = 1}^{n} \hspace{0.5em} x_{i} \cdot \dfrac{\partial f}{\partial x_{i}}\hspace{0.5em} =\hspace{0.5em} k \cdot f(x_{1}, x_{2}, \cdots, x_{n})
}
$$
<br>

##### Caso $f(x, y)$

$$
    x \cdot \dfrac{\partial f}{\partial x} 
    \hspace{0.5em}+\hspace{0.5em} 
    y \cdot \dfrac{\partial f}{\partial y} 
    = k \cdot f(x, y) 
$$
<br>

##### Caso $f(x, y, z)$

$$
    x \cdot \dfrac{\partial f}{\partial x} 
    \hspace{0.5em}+\hspace{0.5em} 
    y \cdot \dfrac{\partial f}{\partial y}
    \hspace{0.5em}+\hspace{0.5em} 
    z \cdot \dfrac{\partial f}{\partial z}  
    = k \cdot f(x, y, z) 
$$
<br>


### Ejemplo funcion homogenea de grado 0

$$
    f(x, y) = \ln\left(\dfrac{x}{y}\right)
$$

- `Derivada parcial` con respecto a $x$
$$
\begin{array}{l}
    \partial_{x} f = \dfrac{1}{x / y} \cdot \left(\dfrac{x}{y}\right)'
    &
    \partial_{x} f = \dfrac{y}{x} \cdot \dfrac{1}{y}
    &
    \partial_{x} f = \dfrac{\cancel{y}}{x} \cdot \dfrac{1}{\cancel{y}}
    \\\\
    \partial_{x} f = \dfrac{1}{x}
\end{array}
$$
<br>

- `Derivada parcial` con respecto a $y$
$$
\begin{array}{l}
    \partial_{y} f = \dfrac{1}{x / y} \cdot \left(\dfrac{x}{y}\right)'
    &
    \partial_{y} f = \dfrac{y}{x} \cdot (x \cdot y^{-1})'
    &
    \partial_{y} f = \dfrac{y \cdot x}{x} \cdot ( y^{-1})'
    \\\\
    \partial_{y} f = \dfrac{y \cdot \cancel{x}}{\cancel{x}} \cdot -1 \cdot y^{-2}
    &
    \partial_{y} f = -y \cdot \dfrac{1}{y^{2}}
    &
    \partial_{y} f = -\cancel{y} \cdot \dfrac{1}{y^{\cancel{2}}}
    \\\\
    \partial_{y} f = \dfrac{-1}{y}
\end{array}
$$

#### Probamos el teorema de Euler

$$
\begin{array}{c}
    x \cdot \dfrac{\partial f}{\partial x} + y \cdot \dfrac{\partial f}{\partial y} = k \cdot f(x, y) 
    \\\\
    x \cdot \dfrac{1}{x} + y \cdot \dfrac{-1}{y} = 0 \cdot f(x, y)
    \\\\
    \cancel{x} \cdot \dfrac{1}{\cancel{x}} + \cancel{y} \cdot \dfrac{-1}{\cancel{y}} = 0
    \\\\
    1 - 1 = 0  
\end{array}
$$



<br><br>

#### Docs

- [Teorema de Euler sobre funciones homogéneas](https://es.wikipedia.org/wiki/Teorema_de_Euler_sobre_funciones_homog%C3%A9neas)
- [Función homogénea](https://es.wikipedia.org/wiki/Funci%C3%B3n_homog%C3%A9nea)