## Teorema del resto - Ejemplo 6

$$
    \frac{
        (x + 1)^{35} + 7 \cdot (x + 1)^{28} + 3 \cdot (x + 1)^{17} + 3
    }
    {
        x^{2} + 2 \cdot x + 2
    }
\\\
$$

Rescribimos el denominador

$$
    \frac{
        (x + 1)^{35} + 7 \cdot (x + 1)^{28} + 3 \cdot (x + 1)^{17} + 3
    }
    {
        x^{2} + 2 \cdot x + 1 + 1
    }
\\\
$$

Resolvemos el `trinomio cuadrado perfecto`

$$
\begin{array}{l}
    \displaystyle{
        \frac{
            (x + 1)^{35} + 7 \cdot (x + 1)^{28} + 3 \cdot (x + 1)^{17} + 3
        }
        { \underbrace{x^{2} + 2 \cdot x + 1} + 1 }
    }
    \\\
    \\\
    \displaystyle{
        \frac{
            (x + 1)^{35} + 7 \cdot (x + 1)^{28} + 3 \cdot (x + 1)^{17} + 3
        }
        { (x + 1)^{2} + 1 }
    }
\end{array}
$$


Aplicamos un **cambio de variable**

$$
    t = (x + 1)^{2}
\\\
$$

Operamos el numerador con el objetivo de agrupar $(x + 1)^{2}$

$$
\begin{array}{c}
    \displaystyle{
        (x + 1)^{35} + 7 \cdot (x + 1)^{28} + 3 \cdot (x + 1)^{17} + 3
    }
    \\\
    \\\
    \displaystyle{
        \left((x + 1)^{2}\right)^{17} \cdot (x + 1) 
        + 7 \cdot \left((x + 1)^{2}\right)^{14} 
        + 3 \cdot \left((x + 1)^{2}\right)^{8} \cdot (x + 1) 
        + 3
    }
    \\\
    \\\
    \displaystyle{
        {\underbrace{\left((x + 1)^{2}\right)}_{t}}^{17} \cdot (x + 1) 
        + 7 \cdot {\underbrace{\left((x + 1)^{2}\right)}_{t}}^{14} 
        + 3 \cdot {\underbrace{\left((x + 1)^{2}\right)}_{t}}^{8} \cdot (x + 1) 
        + 3
    }
    \\\
    \\\
    \displaystyle{
        t^{17} \cdot (x + 1) 
        + 7 \cdot t^{14} 
        + 3 \cdot t^{8} \cdot (x + 1) 
        + 3
    }  
\end{array}

$$


Remplazamos

$$
    \frac{
        t^{17} \cdot (x + 1) 
        + 7 \cdot t^{14} 
        + 3 \cdot t^{8} \cdot (x + 1) 
        + 3
    }
    {
        t + 1
    }
\\\
$$

Igualamos a $0$ el denominador

$$
    t + 1 = 0 \hspace{2em} t = -1
$$

Remplazamos y encontramos el `resto`

$$
\begin{array}{l}
    \text{Resto} = (-1)^{17} \cdot (x + 1) 
        + 7 \cdot (-1)^{14} 
        + 3 \cdot (-1)^{8} \cdot (x + 1) 
        + 3
    \\\\
    \text{Resto} = -1 \cdot (x + 1) + 7 \cdot 1 + 3 \cdot 1 \cdot (x + 1) + 3
    \\\\
    \text{Resto} = -(x + 1) + 7 + 3 \cdot (x + 1) + 3
    \\\\
    \text{Resto} = 3 \cdot (x + 1) - (x + 1) + 10
    \\\\
    \text{Resto} = 2 \cdot (x + 1) + 10
    \\\\
    \text{Resto} = 2 \cdot x + 2 + 10
    \\\\
    \text{Resto} = 2 \cdot x + 12
\end{array}
$$
