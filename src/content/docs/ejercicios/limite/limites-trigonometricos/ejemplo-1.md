---
---

## Limites trigonometricos - ejemplo 1

### 1.1

$$
    \lim_{x \to 0} \frac{\sin^{2}(x)}{x}
$$

Remplazamos:
$$
    \lim_{x \to 0} \frac{\sin^{2}(x)}{x} = 
    \frac{\sin^{2}(0)}{0} 
    = \frac{0^{2}}{0} 
    =  \frac{0}{0} 
$$

<br>

Separamos $\sin^{2}(x)$ y aplicamos propiedades de los limites

$$
\begin{array}{c}

    \displaystyle{
        \lim_{x \to 0} \frac{\sin^{2}(x)}{x}
    }
    \\\\
    \displaystyle{
        \lim_{x \to 0} \frac{\sin(x) \cdot \sin(x)}{x}
    }
    \\\\
    \displaystyle{
        \lim_{x \to 0} \sin(x)
        \hspace{0.5em}\cdot\hspace{0.5em}
        \lim_{x \to 0} \frac{\sin(x)}{x}
    }   
\end{array}
$$

Resolvemos los limites y operamos los resultados

$$
\begin{array}{c}

    \displaystyle{
        \lim_{x \to 0} \sin(0) = 0
        \hspace{2em}
        \lim_{x \to 0} \frac{\sin(x)}{x} = 1
    }
    \\\\
    \displaystyle{
        0 \cdot 1 = 0
    }
    \\\\

\end{array}
$$

Finalmente

$$
    \lim_{x \to 0} \frac{\sin^{2}(x)}{x} = 0
$$

---
<br>

### 1.2

$$
    \lim_{x \to 0} \frac{x}{\sin(2 \cdot x)}
$$

Remplazamos:

$$
    \lim_{x \to 0} \frac{x}{\sin(2 \cdot x)} = 
    \frac{0}{\sin(2 \cdot 0)} 
    = \frac{0}{\sin(0)} 
    =  \frac{0}{0} 
$$

<br>

Multiplicamos por 2 el numerador y denominador, y separamos aplicando propiedades de los limites

$$
\begin{array}{c}

    \displaystyle{
        \lim_{x \to 0} \frac{x}{\sin(2 \cdot x)}
    }
    \\\\
    \displaystyle{
        \lim_{x \to 0} \frac{2 \cdot x}{2 \cdot \sin(2 \cdot x)}
    }
    \\\\
    \displaystyle{
        \lim_{x \to 0} \frac{1}{2}
        \hspace{0.5em}\cdot\hspace{0.5em}
        \lim_{x \to 0} \frac{2 \cdot x}{\sin(2 \cdot x)}
    }   
\end{array}
$$

Reolvemos los limites y operamos los resultados

$$
\begin{array}{c}

    \displaystyle{
        \lim_{x \to 0} \frac{1}{2} = \frac{1}{2}
        \hspace{2em}
        \lim_{x \to 0} \frac{2 \cdot x}{\sin(2 \cdot x)} = 1
    }
    \\\\
    \displaystyle{
        \frac{1}{2} \cdot 1 = \frac{1}{2}
    }
    \\\\

\end{array}
$$

Finalmente

$$
    \lim_{x \to 0} \frac{x}{\sin(2 \cdot x)} = \frac{1}{2}
$$

---

<br>

### 1.3

$$
    \lim_{x \to 0} \frac{5 \cdot x}{\sin(3 \cdot x)}
$$

Remplazamos:

$$
    \lim_{x \to 0} \frac{5 \cdot x}{\sin(3 \cdot x)} = 
    \frac{5 \cdot 0}{\sin(3 \cdot 0)} 
    = \frac{0}{\sin(0)} 
    =  \frac{0}{0} 
$$

<br>

Multiplicamos por 2 el numerador y denominador, y separamos aplicamos propiedades de los limites

$$
\begin{array}{c}

    \displaystyle{
        \lim_{x \to 0} \frac{5 \cdot x}{\sin(3 \cdot x)}
    }
    \\\\
    \displaystyle{
        \lim_{x \to 0} \frac{3 \cdot 5 \cdot x}{3 \cdot \sin(3 \cdot x)}
    }
    \\\\
    \displaystyle{
        \lim_{x \to 0} \frac{5}{3}
        \hspace{0.5em}\cdot\hspace{0.5em}
        \lim_{x \to 0} \frac{3 \cdot x}{\sin(3 \cdot x)}
    }   
\end{array}
$$

Reolvemos los limites y operamos los resultados

$$
\begin{array}{c}

    \displaystyle{
        \lim_{x \to 0} \frac{5}{3} = \frac{5}{3}
        \hspace{2em}
        \lim_{x \to 0} \frac{3 \cdot x}{\sin(3 \cdot x)} = 1
    }
    \\\\
    \displaystyle{
        \frac{5}{3} \cdot 1 = \frac{5}{3}
    }
    \\\\

\end{array}
$$

Finalmente

$$
    \lim_{x \to 0} \frac{5 \cdot x}{\sin(3 \cdot x)} = \frac{1}{2}
$$