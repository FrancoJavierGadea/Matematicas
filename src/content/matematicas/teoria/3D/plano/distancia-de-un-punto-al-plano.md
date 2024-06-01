## Distancia de un punto al plano

Dados 
- un punto $P_{0} = (x_{0}, y_{0}, z_{0})$ perteneiente al `plano`
- punto punto $P_{1} = (x_{1}, y_{1}, z_{1})$ externo al `plano`

definimos el vector entre los 2 puntos

$$
    \vec{b} = \overset{\longrightarrow}{P_{0}P_{1}}
    \hspace{2em} 
    \vec{b} = \vec{P_{1}} - \vec{P_{0}} = (x_{1} - x_{0} \hspace{0.2em},\hspace{0.2em} y_{1} - y_{0} \hspace{0.2em},\hspace{0.2em} z_{1} - z_{0}) 
$$

<br>

La distancia entre el punto $P_{1}$ y el `plano` no es mas que **el valor absoluto** de la **proyeccion del vector** $\vec{b}$ sobre el `vector normal` $\vec{N}$

$$
    h = |\text{proy}_{b} \hspace{0.2em} N|
    \hspace{2em}
    h = \dfrac{|\vec{b} \bullet \vec{N}|}{|\vec{N}|}
$$

desarrollando 

$$
\begin{array}{c}
    h = \dfrac{|
        a \cdot (x_{1} - x_{0}) + 
        b \cdot (y_{1} - y_{0}) + 
        c \cdot (z_{1} - z_{0})
    |}{
        \sqrt{\displaystyle{a^{2} + b^{2} + c^{2}}}
    }
    \\\\
    h = \dfrac{|
        (a \cdot x_{1} + b \cdot y_{1} + c \cdot z_{1}) - (a \cdot x_{0} + b \cdot y_{0} + c \cdot z_{0})
    |}{
        \sqrt{\displaystyle{a^{2} + b^{2} + c^{2}}}
    }
\end{array}
$$

<br>

> Puesto que $(x_{0}, y_{0}, z_{0})$ pertenecen al plano y satisfacen su `ecuacion lineal`
> <br>
> $a \cdot x_{0} + b \cdot y_{0} + c \cdot z_{0} + d = 0$
> <br>
> podemos remplazar $-d = a \cdot x_{0} + b \cdot y_{0} + c \cdot z_{0}$


y finalmente obtenemos

### Formula para calcular la distancia de un punto al plano
<br>

$$
\Large{
    h = \dfrac{|
        a \cdot x_{1} + b \cdot y_{1} + c \cdot z_{1} + d
    |}{
        \sqrt{\displaystyle{a^{2} + b^{2} + c^{2}}}
    }
}   
$$
<br>

### Distancia al origen y el valor $d$

Usando la formula anterior y el `origen` $(0, 0, 0)$ remplazamos


$$
\begin{array}{l}
    h = \dfrac{|
        a \cdot 0 + b \cdot 0 + c \cdot 0 + d
    |}{
        \sqrt{\displaystyle{a^{2} + b^{2} + c^{2}}}
    }
    &\hspace{1em}
    h = \dfrac{|
        d
    |}{
        \sqrt{\displaystyle{a^{2} + b^{2} + c^{2}}}
    }
    &\hspace{1em}
    h = \dfrac{d}{|\vec{N}|}
    \\\\
    h \cdot |\vec{N}| = d
\end{array}  
$$