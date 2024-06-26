## Incremento total

Dada **funcion** $y = f(x_{1}, x_{2}, \cdots,  x_{n})$  `diferenciable`

un **punto** $\mathbf{a} = \begin{pmatrix}a_{1}, a_{2}, \cdots, a_{n}\end{pmatrix}$

y **incremento** $\mathbf{h} = \begin{pmatrix}\Delta x_{1}, \Delta x_{2}, \cdots, \Delta x_{n}\end{pmatrix}$

<br>

El `incremento total` $\Delta y$ es

$$
\large{
    \Delta y = f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a})  
}
$$
<br>

y aplicando la definicion de **funcion** `diferenciable` se puede calcular como

$$
\large{
    \Delta y = \vec{\triangledown}f(\mathbf{a}) \cdot \mathbf{h} + r(\mathbf{h})
}
$$

lo que seria

$$
\Delta y = 
\left(\begin{array}{l}
        \dfrac{\partial f}{\partial x_{1}}\Big|_{\mathbf{a}} & \dfrac{\partial f}{\partial x_{2}}\Big|_{\mathbf{a}} & \cdots &  \dfrac{\partial f}{\partial x_{n}}\Big|_{\mathbf{a}}
    \end{array}\right)
    \cdot 
    \left(\begin{array}{l}
        \Delta x_{1} \\ \Delta x_{2} \\ \vdots \\  \Delta x_{n}
    \end{array}\right)
+ r(\mathbf{h})
$$

que desarrollado nos queda

$$
\Delta y = 
\dfrac{\partial f}{\partial x_{1}}\Big|_{\mathbf{a}} \cdot \Delta x_{1}
\hspace{0.4em}+\hspace{0.4em}
\dfrac{\partial f}{\partial x_{2}}\Big|_{\mathbf{a}} \cdot \Delta x_{2}
\hspace{0.4em}+\hspace{0.4em} \cdots \hspace{0.4em}+\hspace{0.4em}
\dfrac{\partial f}{\partial x_{n}}\Big|_{\mathbf{a}} \cdot \Delta x_{n}
\hspace{0.4em}+\hspace{0.4em}
r(\mathbf{h}) 
$$

<br>

## Diferencial total

Dada **funcion** $y = f(x_{1}, x_{2}, \cdots,  x_{n})$  `diferenciable`

un **punto** $\mathbf{a} = \begin{pmatrix}a_{1}, a_{2}, \cdots, a_{n}\end{pmatrix}$

y **incremento** $\mathbf{h} = \begin{pmatrix}\Delta x_{1}, \Delta x_{2}, \cdots, \Delta x_{n}\end{pmatrix}$

<br>

El `diferencial total` $dy$ es

$$
\large{
    dy = \vec{\triangledown}f(\mathbf{a}) \cdot \mathbf{h}
}
$$

lo que seria

$$
dy = 
\left(\begin{array}{l}
        \dfrac{\partial f}{\partial x_{1}}\Big|_{\mathbf{a}} & \dfrac{\partial f}{\partial x_{2}}\Big|_{\mathbf{a}} & \cdots &  \dfrac{\partial f}{\partial x_{n}}\Big|_{\mathbf{a}}
    \end{array}\right)
    \cdot 
    \left(\begin{array}{l}
        \Delta x_{1} \\ \Delta x_{2} \\ \vdots \\  \Delta x_{n}
    \end{array}\right)
$$

que desarrollado nos queda

$$
dy = 
\dfrac{\partial f}{\partial x_{1}}\Big|_{\mathbf{a}} \cdot \Delta x_{1}
\hspace{0.4em}+\hspace{0.4em}
\dfrac{\partial f}{\partial x_{2}}\Big|_{\mathbf{a}} \cdot \Delta x_{2}
\hspace{0.4em}+\hspace{0.4em} \cdots \hspace{0.4em}+\hspace{0.4em}
\dfrac{\partial f}{\partial x_{n}}\Big|_{\mathbf{a}} \cdot \Delta x_{n}
$$
<br>



## Aproximacion

El `incremento total` es igual al `diferencial total` mas el `resto`

$$
\large{
    \Delta y = dz + r(\mathbf{h})
}
$$

Cuando $\mathbf{h}$ tiende a $0$, $r(\mathbf{h})$ tiende a $0$ **mucho mas rapido**

por lo que el `incremento total` y el `diferencial total` se aproximan

$$
\large{
    \Delta y \approx dy
}
$$ 

al tomar valores **muy pequeños** de $\mathbf{h}$, es decir:

valores **muy pequeños** de los **incrementos** $\Delta x_{1}, \Delta x_{2}, \cdots, \Delta x_{n}$

