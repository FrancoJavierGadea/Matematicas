## Funcion diferenciable

> Caso $\mathbb{R}^{n} \to \mathbb{R}$

Dada una **funcion** 

$$
\Large{
    y = f(x_{1}, x_{2}, \cdots,  x_{n})
}
$$

un **punto** $\mathbf{a} = \begin{pmatrix}a_{1}, a_{2}, \cdots, a_{n}\end{pmatrix}$

y **incremento** $\mathbf{h} = \begin{pmatrix}\Delta x_{1}, \Delta x_{2}, \cdots, \Delta x_{n}\end{pmatrix}$

La funcion $f$ es `diferenciable` si existe una `transformacion lineal` $T:\mathbb{R}^{n} \to \mathbb{R}$ que evaluada en el **incremento** $\mathbf{h}$ cumpla que

$$
\Large{
    f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + T(\mathbf{h}) + r(\mathbf{h})
}
$$

Donde: 

- $f(\mathbf{a})$ la funcion evaluada en el **punto**

- $f(\mathbf{a} + \mathbf{h})$ la funcion evaludada en el **punto incrementado**

- $T(\mathbf{h})$ es una `transformacion lineal` de $\mathbb{R}^{n} \to \mathbb{R}$ que **aproxima el cambio** entre $f(\mathbf{a})$ y $f(\mathbf{a} + \mathbf{h})$  producido por el **incremento** $\mathbf{h}$

    $$
    \Delta y = f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a}) \approx T(\mathbf{h})
    $$

    Usando **matrices** la **transformacion** seria algo asi

    $$
    T(\mathbf{h}) = \left(\begin{array}{l}
        K_{1} & K_{2} & \cdots &  K_{n}
    \end{array}\right)
    \cdot 
    \left(\begin{array}{l}
        \Delta x_{1} \\ \Delta x_{2} \\ \vdots \\  \Delta x_{n}
    \end{array}\right)
    $$

    que desarrollado nos queda

    $$
        T(\mathbf{h}) = K_{1} \cdot \Delta x_{1} + K_{2} \cdot \Delta x_{2} + \cdots +  K_{n} \cdot \Delta x_{n}
    $$
    <br>

    > Otra definicion valida tambien es decir:
    > <br><br>
    > La funcion $f$ es `diferenciable` si existen los **coeficientes** $K_{1}, K_{1}, \cdots, K_{n}$ tales que
    > <br><br>
    > $f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + K_{1} \cdot \Delta x_{1} + K_{2} \cdot \Delta x_{2} + \cdots +  K_{n} \cdot \Delta x_{n} + r(\mathbf{h})$
    > <br><br>
    > Sin embargo plantearlo como una `transformacion lineal` es mucho mas general

<br>

- $r(\mathbf{h})$ es el **resto**

    Es lo que le falta a la `transformacion lineal` para igualar el cambio $\Delta y$

    $$
    \Delta y = f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a}) \approx T(\mathbf{h})
    \hspace{1em}
    \Delta y = f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a}) = T(\mathbf{h}) + r(\mathbf{h})
    $$
 
    Y cumple con la propiedad de que **tiende a $0$ mucho mas rapido** que el **incremento** $\mathbf{h}$, es decir:

    $$
    \large{
        \lim_{\mathbf{h} \to (0, 0, \cdots, 0)} \dfrac{r(\mathbf{h})}{\big|\mathbf{h}\big|} = 0
    }
    $$
    <br>

    Despejando $r(\mathbf{h})$ nos queda este **limite**
    $$
    \large{
        \lim_{\mathbf{h} \to (0, 0, \cdots, 0)} \dfrac{f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a}) - T(\mathbf{h})}{\big|\mathbf{h}\big|} = 0
    }
    $$

    el cual es el **nucleo** de la definicion de `funcion diferenciable` puesto que su **exististencia** determina si la **funcion** es o no `diferenciable`

    <br>

    #### Relacion con las `derivadas parciales`

    Los unicos valores posibles para los **coeficientes** $K_{i}$ de la `transformacion lineal` que cumplen con este **limite** son las `derivadas parciales` de $f$ evaluadas en el **punto** $\mathbf{a}$

    $$
    T(\mathbf{h}) = \left(\begin{array}{l}
        \dfrac{\partial f}{\partial x_{1}}\Big|_{\mathbf{a}} & \dfrac{\partial f}{\partial x_{2}}\Big|_{\mathbf{a}} & \cdots &  \dfrac{\partial f}{\partial x_{n}}\Big|_{\mathbf{a}}
    \end{array}\right)
    \cdot 
    \left(\begin{array}{l}
        \Delta x_{1} \\ \Delta x_{2} \\ \vdots \\  \Delta x_{n}
    \end{array}\right)
    =
    \vec{\triangledown}f(\mathbf{a})
    \cdot 
    \left(\begin{array}{l}
        \Delta x_{1} \\ \Delta x_{2} \\ \vdots \\  \Delta x_{n}
    \end{array}\right) 
    $$

    > $\vec{\triangledown}f(\mathbf{a})$ es el `vector gradiente`

    <br>

    $$
        T(\mathbf{h}) = \dfrac{\partial f}{\partial x_{1}}\Big|_{\mathbf{a}} \cdot \Delta x_{1} + \dfrac{\partial f}{\partial x_{2}}\Big|_{\mathbf{a}} \cdot \Delta x_{2} + \cdots +  \dfrac{\partial f}{\partial x_{n}}\Big|_{\mathbf{a}} \cdot \Delta x_{n}
    $$

    <br>

    Por lo que podemos tomar la **existencia** de las `derivadas parciales` de $f$ como **condicion sufiente** para la existencia del **limite** y la `diferenciabilidad` de la **funcion**
<br>

<br>

### Teorema - Condicion suficiente

Dada una **funcion** $y = f(x_{1}, x_{2}, \cdots,  x_{n})$

y un **punto** $\mathbf{a} = \begin{pmatrix}a_{1}, a_{2}, \cdots, a_{n}\end{pmatrix}$

Si **existen** las `derivadas parciales` en el **entorno del punto** $\mathbf{a}$

$$
\large{
    \begin{array}{c}
        \exist \hspace{0.3em} \dfrac{\partial f}{\partial x_{1}}\Big|_{\mathbf{a}}
        &
        \exist \hspace{0.3em} \dfrac{\partial f}{\partial x_{2}}\Big|_{\mathbf{a}}
        & \cdots &
        \exist \hspace{0.3em} \dfrac{\partial f}{\partial x_{n}}\Big|_{\mathbf{a}} 
    \end{array}
}
$$

y son `continuas` en ese **punto**

entonces $f$ es `diferenciable` en el **entorno del punto** $\mathbf{a}$

<br>


### Propiedades de una funcion `diferenciable`

- #### Continuidad

    Si una **funcion** es `diferenciable` en un **punto** entonces es `continua` en ese **punto**

<br>

- #### Existencia de las `derivadas parciales`

    Si una **funcion** es `diferenciable` en un **punto** entonces existen las `derivadas parciales` y son `continuas` en ese **punto**

<br>

- #### Existencia de la `derivada direccional`

    Si una **funcion** es `diferenciable` en un **punto** entonces existen las `derivadas direccionales` es cualquier direccion sobre ese **punto**

<br>

> Podemos demostrar estas propiedades aplicando la definicion de `continuidad`, `derivada parcial`, `derivada direccional`
> junto con la definicion de `funcion diferenciable`
> <br><br>
> Mirar [Demostracion propiedades en 3d](./demostracion-propiedades-3d.md)


<br><br>

#### Docs

- [Diferenciabilidad - FIUBA](https://www.youtube.com/watch?v=IlwYzexCi88)
- 