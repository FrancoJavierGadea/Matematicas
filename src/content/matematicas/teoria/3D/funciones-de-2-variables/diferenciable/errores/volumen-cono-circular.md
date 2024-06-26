## Volumen cono circular
El calculo es:

$$
\Large{
    v = \dfrac{\pi \cdot r^{2} \cdot h}{3}
}
$$
> $v$ = volumen 
> <br>
> $r$ = radio
> <br> 
> $h$ = altura

<br>

### Derivadas parciales

$$
    \dfrac{\partial v}{\partial h} = \dfrac{\pi \cdot r^{2}}{3}
    \hspace{2em}
    \dfrac{\partial v}{\partial r} = \dfrac{\pi \cdot 2 \cdot r \cdot h}{3}
$$
<br>

### El `error absoluto` aproximado es:

$$
    dv = \left|\dfrac{\partial v}{\partial h}\right| \cdot \Delta h 
    \hspace{0.5em}+\hspace{0.5em} 
    \left|\dfrac{\partial v}{\partial r}\right| \cdot \Delta r
$$
remplazando nos queda
$$
    dv = \left|\dfrac{\pi \cdot r^{2}}{3}\right| \cdot \Delta h 
    \hspace{0.5em}+\hspace{0.5em} 
    \left|\dfrac{\pi \cdot 2 \cdot r \cdot h}{3}\right| \cdot \Delta r
$$
<br>

### El `error relativo` aproximado es:

$$
    \dfrac{dv}{v} = \left|\dfrac{\partial v}{\partial h}\right| \cdot \dfrac{\Delta h}{v} 
    \hspace{0.5em}+\hspace{0.5em} 
    \left|\dfrac{\partial v}{\partial r}\right| \cdot \dfrac{\Delta r}{v}
$$
remplazando nos queda
$$
\begin{array}{c}
    \dfrac{dv}{v} = \left|\dfrac{\pi \cdot r^{2}}{3}\right| \cdot \dfrac{\Delta h}{\dfrac{\pi \cdot r^{2} \cdot h}{3}} 
    \hspace{0.5em}+\hspace{0.5em} 
    \left|\dfrac{\pi \cdot 2 \cdot r \cdot h}{3}\right| \cdot \dfrac{\Delta r}{\dfrac{\pi \cdot r^{2} \cdot h}{3}}
    \\\\
    \dfrac{dv}{v} = \dfrac{\pi \cdot r^{2}}{3} \cdot \dfrac{3}{\pi \cdot r^{2} \cdot h} \cdot \Delta h 
    \hspace{0.5em}+\hspace{0.5em} 
    \dfrac{\pi \cdot 2 \cdot r \cdot h}{3} \cdot \dfrac{3}{\pi \cdot r^{2} \cdot h} \cdot \Delta r
    \\\\
    \dfrac{dv}{v} = \dfrac{\cancel{\pi \cdot r^{2}}}{\cancel{3}} \cdot \dfrac{\cancel{3}}{\cancel{\pi \cdot r^{2}} \cdot h} \cdot \Delta h 
    \hspace{0.5em}+\hspace{0.5em} 
    \dfrac{\overset{2}{\cancel{\pi \cdot 2 \cdot r \cdot h}}}{\cancel{3}} \cdot \dfrac{\cancel{3}}{\underset{r}{\cancel{\pi \cdot r^{2} \cdot h}}} \cdot \Delta r
\end{array}
$$
nos queda
$$
    \dfrac{dv}{v}  = \dfrac{\Delta h}{h} \hspace{0.5em}+\hspace{0.5em} 2 \cdot \dfrac{\Delta r}{r}
$$