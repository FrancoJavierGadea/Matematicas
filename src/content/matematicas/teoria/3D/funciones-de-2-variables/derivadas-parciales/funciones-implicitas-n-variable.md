
<!-- MARK: 1 variable -->
## Funciones implicitas de 1 variable independiente

Dada un **funcion** $F(x, y) = 0$ esta es una `funcion implicita` $y = f(x)$ si cumple con las condiciones del **`teorema de la funcion implicita`**

- #### 1º condicion

    Dado un **punto** $P = (x_{0}, y_{0})$ perteneciente al `dominio` de la **funcion**
        
    La **funcion** evaludada en el punto debe ser igual a $0$
    
    $$
        F(x_{0}, y_{0}) = 0
    $$
<br>

- #### 2º condicion

    La **funcion** debe poder `derivarse` al menos 1 vez

    Tanto la funcion $F$ como sus `derivadas parciales` $\partial_{x} F$ y $\partial_{y} F$ deben ser `continuas` en el entorno del punto $P$

<br>

- #### 3º condicion

    La derivada parcial $\partial_{y} F$ evaluada en el punto $P$ debe ser distinto de $0$

    $$
        \left.\dfrac{\partial F}{\partial y}\right|_{P} \neq 0
        \hspace{2em}
        \partial_{y} F(x_{0}, y_{0}) \neq 0
    $$
<br>

### Derivada

Si se cumplen las 3 condiciones $F(x, y) = 0$ es una `funcion implicita` $y = f(x)$ en el entorno del punto $P$

y su `derivada implicita` es

$$
    \left.\dfrac{dy}{dx}\right|_{P} = -\dfrac{
        \hspace{0.5em}
        \left.\dfrac{\partial F}{\partial x}\right|_{P}
        \hspace{0.5em}
    }{
        \left.\dfrac{\partial F}{\partial y}\right|_{P}
    } 
$$

<br><br>

### Ejemplo: Circunferencia de radio 1

<br>

$$
    \large{F(x, y) = x^{2} + y^{2} - 1 = 0}
$$
<br>

- #### 1º Condicion
  
    Dado el Punto $P = (\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2})$

    $$
    \begin{array}{l}
        F\left(\tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = \left(\dfrac{\sqrt{2}}{2}\right)^{2} + \left(\dfrac{\sqrt{2}}{2}\right)^{2} - 1 = 0
        \\\\
        F\left(\tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = \left(\dfrac{\sqrt{2}^{\hspace{0.2em}2}}{\displaystyle{2^{2}}}\right) + \left(\dfrac{\sqrt{2}^{\hspace{0.2em}2}}{\displaystyle{2^{2}}}\right) - 1 = 0
        \\\\
        F\left(\tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = \dfrac{2}{4} + \dfrac{2}{4} - 1 = 0
        \\\\
        F\left(\tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = \dfrac{4}{4} - 1 = 0
        \\\\
        F\left(\tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = 1 - 1 = 0
    \end{array}
    $$
<br>

- #### 2º Condicion

    **Derivadas parciales**

    $$
    \begin{array}{c}
        F(x, y) = x^{2} + y^{2} - 1
        &\hspace{2em}
        F(x, y) = x^{2} + y^{2} - 1
        \\\\
        \dfrac{\partial F}{\partial x} = 2 \cdot x + 0 - 0
        &\hspace{2em}
        \dfrac{\partial F}{\partial y} = 0 + 2 \cdot y - 0
        \\\\
        \dfrac{\partial F}{\partial x} = 2 \cdot x
        &\hspace{2em}
        \dfrac{\partial F}{\partial y} = 2 \cdot y
    \end{array}
    $$
<br>

- #### 3º Condicion

    $$
       \left.\dfrac{\partial F}{\partial y}\right|_{P} = 2 \cdot \dfrac{\sqrt{2}}{2} = \sqrt{2} \neq 0
    $$
<br>

Por lo tanto $F$ es una `funcion implicita` y su `derivada implicita` es

$$
    \dfrac{dy}{dx} = - \dfrac{2 \cdot x}{2 \cdot y}
    \hspace{2em}
    \dfrac{dy}{dx} = - \dfrac{x}{ y}
$$

Finalmente

$$
     \left.\dfrac{dy}{dx}\right|_{P} = -\dfrac{\hspace{0.5em}\tfrac{\sqrt{2}}{2}\hspace{0.5em}}{\tfrac{\sqrt{2}}{2}} = -1
$$

<br><br>

<!-- MARK: 2 variables -->
## Funciones implicitas de 2 variables independientes

Dada un **funcion** $F(x, y, z) = 0$ esta es una `funcion implicita` $z = f(x, y)$ si cumple con las condiciones del **`teorema de la funcion implicita`**

- #### 1º condicion

    Dado un **punto** $P = (x_{0}, y_{0}, z_{0})$ perteneciente al `dominio` de la **funcion**
        
    La **funcion** evaludada en el punto debe ser igual a $0$
    
    $$
        F(x_{0}, y_{0}, z_{0}) = 0
    $$
<br>

- #### 2º condicion

    La **funcion** debe poder `derivarse` al menos 1 vez

    Tanto la funcion $F$ como sus `derivadas parciales` $\partial_{x} F$, $\partial_{y} F$ y $\partial_{z} F$  deben ser `continuas` en el entorno del punto $P$

<br>

- #### 3º condicion

    La derivada parcial $\partial_{z} F$ evaluada en el punto $P$ debe ser distinto de $0$

    $$
        \left.\dfrac{\partial F}{\partial z}\right|_{P} \neq 0
        \hspace{2em}
        \partial_{z} F(x_{0}, y_{0}, z_{0}) \neq 0
    $$
<br>

## Derivadas Parciales

Si se cumplen las 3 condiciones $F(x, y, z) = 0$ es una `funcion implicita` $z = f(x, y)$ en el entorno del punto $P$

y su `derivadas parciales implicitas` son

$$
    \left.\dfrac{\partial z}{\partial x}\right|_{P} = -\dfrac{
        \hspace{0.5em}
        \left.\dfrac{\partial F}{\partial x}\right|_{P}
        \hspace{0.5em}
    }{
        \left.\dfrac{\partial F}{\partial z}\right|_{P}
    }
    \hspace{2em}
    \left.\dfrac{\partial z}{\partial y}\right|_{P} = -\dfrac{
        \hspace{0.5em}
        \left.\dfrac{\partial F}{\partial y}\right|_{P}
        \hspace{0.5em}
    }{
        \left.\dfrac{\partial F}{\partial z}\right|_{P}
    } 
$$

<br><br>

### Ejemplo: Esfera de radio 1

<br>

$$
    \large{F(x, y, z) = x^{2} + y^{2} + z^{2} - 1 = 0}
$$
<br>

- #### 1º Condicion
  
    Dado el Punto $P = (0, \frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2})$

    $$
    \begin{array}{l}
        F\left(0, \tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = 0^{2} + \left(\dfrac{\sqrt{2}}{2}\right)^{2} + \left(\dfrac{\sqrt{2}}{2}\right)^{2} - 1 = 0
        \\\\
        F\left(0, \tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = 0 +\left(\dfrac{\sqrt{2}^{\hspace{0.2em}2}}{\displaystyle{2^{2}}}\right) + \left(\dfrac{\sqrt{2}^{\hspace{0.2em}2}}{\displaystyle{2^{2}}}\right) - 1 = 0
        \\\\
        F\left(0, \tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = \dfrac{2}{4} + \dfrac{2}{4} - 1 = 0
        \\\\
        F\left(0, \tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = \dfrac{4}{4} - 1 = 0
        \\\\
        F\left(0, \tfrac{\sqrt{2}}{2}, \tfrac{\sqrt{2}}{2}\right) = 1 - 1 = 0
    \end{array}
    $$
<br>

- #### 2º Condicion

    **Derivadas parciales**
    $$
        F(x, y) = x^{2} + y^{2} + z^{2} - 1
    $$
    <br>

    $$
    \begin{array}{c}
        \dfrac{\partial F}{\partial x} = 2 \cdot x + 0 + 0 - 0
        &\hspace{0.5em}
        \dfrac{\partial F}{\partial y} = 0 + 2 \cdot y + 0 - 0
        &\hspace{0.5em}
        \dfrac{\partial F}{\partial z} = 0 + 0 + 2 \cdot z - 0
        \\\\
        \dfrac{\partial F}{\partial x} = 2 \cdot x
        &\hspace{0.5em}
        \dfrac{\partial F}{\partial y} = 2 \cdot y
        &\hspace{0.5em}
        \dfrac{\partial F}{\partial z} = 2 \cdot z
    \end{array}
    $$
<br>

- #### 3º Condicion

    $$
       \left.\dfrac{\partial F}{\partial z}\right|_{P} = 2 \cdot \dfrac{\sqrt{2}}{2} = \sqrt{2} \neq 0
    $$
<br>

Por lo tanto $F$ es una `funcion implicita` y su `derivadas parciales implicitas` son

$$
    \dfrac{\partial z}{\partial x} = - \dfrac{2 \cdot x}{2 \cdot z}
    \hspace{1em}
    \dfrac{\partial z}{\partial x} = - \dfrac{x}{z}
    \hspace{2em}
    \dfrac{\partial z}{\partial y} = - \dfrac{2 \cdot y}{2 \cdot z}
    \hspace{1em}
    \dfrac{\partial z}{\partial y} = - \dfrac{y}{z}
$$

Finalmente

$$
    \left.\dfrac{\partial z}{\partial x}\right|_{P} = -\dfrac{0}{\hspace{0.5em}\tfrac{\sqrt{2}}{2}\hspace{0.5em}} = 0
    \hspace{2em}
    \left.\dfrac{\partial z}{\partial y}\right|_{P} = -\dfrac{\hspace{0.5em}\tfrac{\sqrt{2}}{2}\hspace{0.5em}}{\tfrac{\sqrt{2}}{2}} = -1
$$

<br><br>

<!-- MARK: n variables -->
## Definicion general para n variables

Dada un funcion $F(x_{1}, x_{2}, \cdots, x_{n}, t)$ es una `funcion implicita` $t = f(x_{1}, x_{2}, \cdots, x_{n})$ si cumple con las condiciones del `teorema de la funcion implicita`

- #### 1º condicion

    Dado un **punto** $P = ({p}_{x_{1}}, {p}_{x_{2}}, \cdots, {p}_{x_{n}}, t_{0})$ perteneciente al `dominio` de la **funcion**
        
    La **funcion** evaludada en el punto debe ser igual a $0$
    
    $$
        F|_{P} = 0 \hspace{2em} F({p}_{x_{1}}, {p}_{x_{2}}, \cdots, {p}_{x_{n}}, t_{0}) = 0
    $$
<br>

- #### 2º condicion

    La **funcion** debe poder `derivarse` al menos 1 vez

    Tanto la funcion $F$ como sus `derivadas parciales`
    
    $$
        \partial_{x_{1}} F
        \hspace{0.3em}, \hspace{0.5em}
        \partial_{x_{2}} F
        \hspace{0.3em},\cdots, \hspace{0.5em}
        \partial_{x_{n}} F
        \hspace{0.3em}, \hspace{0.5em}
        \partial_{t} F
    $$ 
    
    deben ser `continuas` en el entorno del punto $P$

<br>

- #### 3º condicion

    La derivada parcial $\partial_{t} F$ evaluada en el punto $P$ debe ser distinto de $0$

    $$
        \left.\dfrac{\partial F}{\partial t}\right|_{P} \neq 0
        \hspace{2em}
        \partial_{t} F({p}_{x_{1}}, {p}_{x_{2}}, \cdots, {p}_{x_{n}}, t_{0}) \neq 0
    $$
<br>

## Derivadas Parciales

Si se cumplen las 3 condiciones $F(x_{1}, x_{2}, \cdots, x_{n}, t)$ es una `funcion implicita` $t = f(x_{1}, x_{2}, \cdots, x_{n})$ en el entorno del punto $P$

y su `derivadas parciales implicitas` son

$$
    \left.\dfrac{\partial t}{\partial x_{i}}\right|_{P} = -\dfrac{
        \hspace{0.5em}
        \left.\dfrac{\partial F}{\partial x_{i}}\right|_{P}
        \hspace{0.5em}
    }{
        \left.\dfrac{\partial F}{\partial t}\right|_{P}
    }
    \hspace{2em}
    i = 1, 2, \cdots, n
$$
