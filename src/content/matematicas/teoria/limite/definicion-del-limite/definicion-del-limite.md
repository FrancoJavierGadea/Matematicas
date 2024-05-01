---
videos: [
    {url: 'https://www.youtube.com/watch?v=-BfQk39mok8'}
]
geogebra: [
    {id: 'vea82ydh', title: 'Definicion del Limite'},
]
---

# Limite de una funcion en 1 punto

$$
    \Large{
        \lim_{x \to c} f(x) = L
    }
$$

#### Definicion Formal

$$
    \forall\hspace{0.2em} \varepsilon > 0
    \hspace{1em}
    \exist\hspace{0.2em} \delta > 0
    \hspace{0.5em}/\hspace{0.5em}
    \forall\hspace{0.2em} x \in \text{Dom}(f)
    \hspace{1em}
    0 < |x - c| < \delta
    \hspace{0.5em}\longrightarrow\hspace{0.5em}
    |f(x) - L| < \varepsilon
$$
<br>

El limite de una funcion $f$, cuando $x$ tiende a $c$, es $L$ **si y solo si**: 

Para todo $\varepsilon > 0$ existe un valor $\delta > 0$ tal que para todo $x$ en el dominio de la funcion se cumple que 


$$
    0 < |x - c| < \delta 
    \hspace{0.5em}
    \longrightarrow
    \hspace{0.5em}
    |f(x) - L| < \varepsilon
$$
<br>

> Si $x$ pertenece al intervalo: $(c -\delta, c + \delta) \land x \neq c$
> <br>
> entonces $f(x)$ pertenece al intervalo: $(L - \varepsilon , L + \varepsilon)$

<br>

#### Desarrollo de los intervalos

$$
\begin{array}{c}
    |x - c| < \delta
    \\\\
    -\delta < x - c < \delta
    \\\\
    c -\delta < x < c + \delta
\end{array}
\hspace{2em}
\begin{array}{c}
    |f(x) - L| < \varepsilon
    \\\\
    -\varepsilon < f(x) - L < \varepsilon
    \\\\
    L - \varepsilon < f(x) < L + \varepsilon
\end{array}  
$$
<br>

$$
    x \in (c -\delta, c + \delta) \hspace{0.3em}\land\hspace{0.3em} x \neq c
    \hspace{2em}
    f(x) \in (L - \varepsilon , L + \varepsilon)
$$



<br>

#### En otras palabras

Existe el limite si podemos hacer que $f(x)$ este tan cerca de $L$ como quieramos a la vez que $x$ este tan cerca de $c$ siendo distinto de $c$





<br>

#### Docs

- [Definición formal de límite](https://www.youtube.com/watch?v=-BfQk39mok8)
- [Límite de una función](https://es.wikipedia.org/wiki/L%C3%ADmite_de_una_funci%C3%B3n)