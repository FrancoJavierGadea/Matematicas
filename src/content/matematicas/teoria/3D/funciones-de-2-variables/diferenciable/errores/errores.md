## Errores

- #### Error absoluto

    Es la diferencia entre el `valor real` y el `valor aproximado` que se ha medido

    $$
    \text{Error absoluto} =
    |\text{valor real} - \text{valor aproximado}|
    $$
<br>

- #### Error relativo
  
    Es la divicion del `error absoluto` sobre el `valor real`

    $$
        \text{Error relativo} = \dfrac{\text{Error absoluto}}{\text{valor real}}
    $$
<br>


## Propagacion de errores usando diferenciales

Dada una `medicion`, por ejemplo: $7.3 \hspace{0.2em} \pm 0.2$

Podemos tomar

- $x$ como el `valor aproximado` que se a **medido**

- $x \pm \Delta x$ como el `valor real`

de este modo el `error absoluto` nos queda igual a $\Delta x$

$$
\text{error absoluto} = |x \pm \Delta x - x| =|\pm\Delta x| = \Delta x
$$

<br>

y simpre que se utilice $x$ en algun calculo $y = f(x)$

podremos calcular la `propagacion del error` como la diferencia entre $f(x)$ y $f(x + \Delta x)$

$$
    \Delta y = f(x + \Delta x) - f(x)
$$


el cual podemos aproximar utilizando `diferenciales`

$$
\Delta y \approx dy \hspace{2em} dy =  |f'(x)| \cdot \Delta x
$$

<br>

## Propagacion de errores general

Dadas unas **mediciones** $x_{1}, x_{2}, \cdots, x_{n}$

con sus respectivos **errores**  $\Delta x_{1}, \Delta x_{2}, \cdots, \Delta x_{n}$

para cualquier **calculo** $y = f(x_{1}, x_{2}, \cdots, x_{n})$

podemos calcular el

- `Error absoluto`
    $$
        dy = 
        \left|\dfrac{\partial f}{\partial x_{1}}\right| \cdot \Delta x_{1}
        \hspace{0.5em}+\hspace{0.5em}
        \left|\dfrac{\partial f}{\partial x_{2}}\right| \cdot \Delta x_{2}
        \hspace{0.5em}+ \cdots +\hspace{0.5em}
        \left|\dfrac{\partial f}{\partial x_{n}}\right| \cdot \Delta x_{n}
    $$
<br>


- `Error relativo`
    $$
        \dfrac{dy}{y} = 
        \left|\dfrac{\partial f}{\partial x_{1}}\right| \cdot \dfrac{\Delta x_{1}}{y}
        \hspace{0.5em}+\hspace{0.5em}
        \left|\dfrac{\partial f}{\partial x_{2}}\right| \cdot \dfrac{\Delta x_{2}}{y}
        \hspace{0.5em}+ \cdots +\hspace{0.5em}
        \left|\dfrac{\partial f}{\partial x_{n}}\right| \cdot \dfrac{\Delta x_{n}}{y}
    $$
<br>

> Las `derivadas parciales` se evaluan utilizando las **mediciones** $x_{1}, x_{2}, \cdots, x_{n}$

> Se toma **valor absoluto** de las `derivadas parciales` para evitar la posibilidad que al realizar la cuenta los **errores** se anulen unos a otros si la `derivada` es **negativa**

<br>

### Ejemplos de propagacion de errores

- **Perimetro de un cuadrado**

    El calculo es:
    $\hspace{1em} y = f(x) = 4 \cdot x$

    El `error basoluto` aproximado es:
    $\hspace{1em} dy  = |4| \cdot \Delta x$

    El `error relativo` aproximado es:

    $$
    \begin{array}{l}
        \dfrac{dy}{y} = \dfrac{|4| \cdot \Delta x}{4 \cdot x}
        &
        \dfrac{dy}{y} = \dfrac{\cancel{4} \cdot \Delta x}{\cancel{4} \cdot x}
        \\\\
        \dfrac{dy}{y} = \dfrac{\Delta x}{x}
    \end{array}
    $$
    <br>

    > De esta manera si al momento de medir un lado con una regla tememos un **error** de $0.5cm$
    > <br>
    > Al calcular el **perimetro** tendremos un **error absoluto** $4 \cdot 0.5cm = 2 cm$
    > <br>
    > El **error relativo** se el mismo que al medir 1 lado

<br>

- **Perimetro de un rectangulo**

    El calculo es:
    $\hspace{1em} y = f(x, y) = 2 \cdot x + 2 \cdot y$

    El `error basoluto` aproximado es:
    $\hspace{1em} dy  = |2| \cdot \Delta x + |2| \cdot \Delta y$

    El `error relativo` aproximado es:

    $$
    \begin{array}{c}
        \dfrac{dy}{y} = \dfrac{|2| \cdot \Delta x}{2 \cdot x + 2 \cdot y} + \dfrac{|2| \cdot \Delta y}{2 \cdot x + 2 \cdot y} 
        \\\\
        \dfrac{dy}{y} = \dfrac{\cancel{2} \cdot \Delta x}{\cancel{2} \cdot (x + y)} + \dfrac{\cancel{2} \cdot \Delta y}{\cancel{2} \cdot (x + y)}
        \\\\
        \dfrac{dy}{y} = \dfrac{\Delta x}{x + y} + \dfrac{\Delta y}{x + y}
    \end{array}
    $$
    agregando $x$ e $y$ nos queda
    $$
    \dfrac{dy}{y} = \dfrac{x}{x + y} \cdot \dfrac{dx}{x} + \dfrac{y}{x + y} \cdot \dfrac{dy}{y}
    $$
    <br>

    > De esta manera si al momento de medir los lados con una regla tememos **errores** de $0.5cm$ y $0.3cm$
    > <br>
    > Al calcular el **perimetro** tendremos un **error**
    > <br> $2 \cdot 0.5cm + 2 \cdot 0.3 = 1.6 cm$

<br>

- [Volumen de un cilindro circular](./volumen-cilindro-circular.md)
- [Volumen de un cono circular](./volumen-cono-circular.md)



<br><br>

#### Docs

- [Propagación de ERRORES | El Traductor](https://www.youtube.com/watch?v=jg5_NNh9hq4)