## Limites trigonometricos - ejemplo 2

### 2.1

$$
    \lim_{x \to 0} \frac{\sin(2 \cdot x) \cdot \sin(3 \cdot x)}{x^{2}}
$$

Remplazamos

$$
\begin{array}{c}
    \displaystyle{
        \lim_{x \to 0} \frac{\sin(2 \cdot x) \cdot \sin(3 \cdot x)}{x^{2}}
        =
        \frac{\sin(2 \cdot 0) \cdot \sin(3 \cdot 0)}{0^{2}}
    }
    \\\\
    \displaystyle{
        \frac{\sin(0) \cdot \sin(0)}{0}
        =
        \frac{0 \cdot 0}{0} 
        =
        \frac{0}{0} 
    }   
\end{array}  
$$

<br>

Separamos

$$
\begin{array}{c}
    \displaystyle{
        \lim_{x \to 0} \frac{\sin(2 \cdot x) \cdot \sin(3 \cdot x)}{x^{2}}
    }
    \\\\
    \displaystyle{
        \lim_{x \to 0} \frac{\sin(2 \cdot x) \cdot \sin(3 \cdot x)}{x \cdot x}
    }
    \\\\
    \displaystyle{
        \lim_{x \to 0} \frac{\sin(2 \cdot x)}{x}
        \hspace{0.5em}\cdot\hspace{0.5em}
        \lim_{x \to 0} \frac{\sin(3 \cdot x)}{x}
    }
    \\\\
    \displaystyle{
        \lim_{x \to 0} \frac{2 \cdot \sin(2 \cdot x)}{2 \cdot x}
        \hspace{0.5em}\cdot\hspace{0.5em}
        \lim_{x \to 0} \frac{3 \cdot \sin(3 \cdot x)}{3 \cdot x}
    }
    \\\\
    \displaystyle{
        2 \cdot \lim_{x \to 0} \frac{\sin(2 \cdot x)}{2 \cdot x}
        \hspace{0.5em}\cdot\hspace{0.5em}
        3 \cdot \lim_{x \to 0} \frac{\sin(3 \cdot x)}{3 \cdot x}
    } 
\end{array}
$$

Resolvemos los limites y operamos los resultados

$$
\begin{array}{c}
    \displaystyle{
        \lim_{x \to 0} \frac{\sin(2 \cdot x)}{2 \cdot x} = 1
        \hspace{2em}
        \lim_{x \to 0} \frac{\sin(3 \cdot x)}{3 \cdot x} = 1
    }
    \\\\
    \displaystyle{
        2 \cdot 1
        \hspace{0.5em}\cdot\hspace{0.5em}
        3 \cdot 1
    }
    \\\\
    \displaystyle{
        2
        \hspace{0.5em}\cdot\hspace{0.5em}
        3
        =
        6
    }
    \\\\ 
\end{array}
$$

Finalmente

$$
    \lim_{x \to 0} \frac{\sin(2 \cdot x) \cdot \sin(3 \cdot x)}{x^{2}} = 6
$$