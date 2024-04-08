---
geogebra: [
    {id: 'ktsbsped', title: 'Infinitesimos equivalentes'}
]
---

# Infinitesimos equivalentes

Si 2 `infinitesimos` son `equivalentes` entonces **se pueden aproximar uno al otro**

<br>

### Definicion

Dadas 2 funciones $f(x)$ y $g(x)$ que cumplen que:

$$
    \lim_{x \to a} \frac{f(x)}{g(x)} = 1
$$

Por lo que son **funciones equivalentes en el puento $a$**

$$
    f(x) \sim g(x) \hspace{2em} x=a
$$

Si ademas cumplen que:

$$
    \lim_{x \to a} f(x) = 0
    \hspace{2em}
    \lim_{x \to a} g(x) = 0
$$

Entonces son **`infinitesimos equivalentes` en el punto $a$** 

<br>

### Teorema

Dadas 2 funciones $f(x)$ y $g(x)$ que son `infinitesimos equivalentes` en un punto $a$ se cumple que:

$$
    \lim_{x \to a} \frac{f(x)}{h(x)} = \lim_{x \to a} \frac{g(x)}{h(x)} 
$$
<br>

tambien: 

$$
    \lim_{x \to a} \left[f(x)\right]^{n} \cdot h(x) 
    =
    \lim_{x \to a} \left[g(x)\right]^{n} \cdot h(x)   
$$

<br>

$f(x)$ y $g(x)$ se pueden **intercambiar** indistintanmente en cualquier limite siempre que aparezcan **dividiendo** o **multiplicando**

> No se pueden intercarmbiar si estan **sumando** o **restando**

<br>


## Infinitesimos conocidos

Dada una funcion $f(x)$ que es un `infinitesimo` en un punto $a$ son equivalentes a esta:

#### Funciones trigonometricas

$$
    f(x) \sim \sin(f(x)) \hspace{2em} x = a
$$

$$
    f(x) \sim \tan(f(x)) \hspace{2em} x = a
$$

$$
    \frac{f(x)^{2}}{2} \sim 1 - \cos(f(x)) \hspace{2em} x = a
$$

<br>

#### Funciones trigonometricas inversas

$$
    f(x) \sim \arcsin(f(x)) \hspace{2em} x = a
$$

$$
    f(x) \sim \arctan(f(x)) \hspace{2em} x = a
$$



<br>

#### Funciones con Logaritmos

$$
    f(x) \sim \ln(1 + f(x)) \hspace{2em} x = a
$$

$$
    f(x) \sim e^{f(x)} - 1 \hspace{2em} x = a
$$

$$
    \log_{b}(1 + f(x)) \sim f(x) \cdot \log_{b}(e)  \hspace{2em} x = a
$$

<br>

#### Docs 

- [Infinitésimos e infinitos equivalentes](https://www.youtube.com/watch?v=9Sc4KFoAAWI)
- [Infinitésimos equivalentes](https://www.matesfacil.com/BAC/limites/infinitesimos-equivalentes/infinitesimo-equivalente-ejemplos-limites-resueltos.html)