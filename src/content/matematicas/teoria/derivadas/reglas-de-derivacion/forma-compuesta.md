---
styles: {
    'mjx-var-u': '#001299'
}
---

# Forma compuesta

### Regla general - Regla de la cadena

$$
    \Large{
        y = f(g(x))
        \hspace{2em}
        y' = f'(g(x)) \cdot g'(x)
    }
$$

> *Se deriva primero la **funcion externa** y luego se multiplica por la derivada de la **funcion interna***

> Para simplificar usaremos $u = g(x)$

<br>

#### Constante por una funcion

$$
    \large{
        f(x) = k \cdot u
        \hspace{2em}
        f'(x) = k \cdot u'
    }
$$
<br>


#### Potencia

$$
    \large{
        f(x) = u^{n}
        \hspace{2em}
        f'(x) = n \cdot u^{n-1} \cdot u'
    }
$$
<br>


#### Raiz

$$
    \large{
        f(x) = \sqrt[i]{u^{n}} = u^{\frac{n}{i}}
        \hspace{2em}
        f'(x) = \frac{n}{i} \cdot u^{\frac{n}{i} - 1} \cdot u'
    }
$$
<br>

$$
    \large{
        f(x) = \sqrt[i]{u}
        \hspace{2em}
        f'(x) = \frac{u'}{i \cdot \sqrt[i]{u^{i - 1}}}
    }
$$
<br>

$$
    \large{
        f(x) = \sqrt{u}
        \hspace{2em}
        f'(x) = \frac{u'}{2 \cdot \sqrt{u}}
    }
$$
<br>


#### Exponencial

$$
    \large{
        f(x) = a^{u}
        \hspace{2em}
        f'(x) = a^{u} \cdot \ln(a) \cdot u'
    }
$$
<br>

#### Logaritmo

$$
    \large{
        f(x) = \log_{a}(u)
        \hspace{2em}
        \begin{array}{l}
            f'(x) = \dfrac{u'}{u} \cdot \log_{a}(e)
            \\\\
            f'(x) = \dfrac{u'}{u \cdot \ln(a)}
        \end{array}
    }
$$
<br>

$$
    \large{
        f(x) = \ln(u)
        \hspace{2em}
        f'(x) = \frac{u'}{u}
    }
$$
<br>



## Funciones trigonometricas

#### Seno

$$
    \large{
        f(x) = \sin(u)
        \hspace{2em}
        f'(x) = \cos(u) \cdot u'
    }
$$
<br>

#### Coseno

$$
    \large{
        f(x) = \cos(u)
        \hspace{2em}
        f'(x) = -\sin(u) \cdot u'
    }
$$
<br>

#### Tangente

$$
    \large{
        f(x) = \tan(u)
        \hspace{2em}
        \begin{array}{l}
            f'(x) = \sec^{2}(u) \cdot u'
            \\\\
            f'(x) = \dfrac{u'}{\cos^{2}(u)}
            \\\\
            f'(x) = \left(1 + \tan^{2}(u)\right) \cdot u'    
        \end{array}
    }
$$
<br>


#### Secante

$$
    \large{

        f(x) = \sec(u)
        \hspace{2em}
        \begin{array}{l}
            f'(x) = \sec(u) \cdot \tan(u) \cdot u'
            \\\\
            f'(x) = \dfrac{\sin(u) \cdot u'}{\cos^{2}(u)}
        \end{array}
    }
$$
<br>


#### Cosecante

$$
    \large{

        f(x) = \csc(u)
        \hspace{2em}
        \begin{array}{l}
            f'(x) = -\csc(u) \cdot \cot(u) \cdot u'
            \\\\
            f'(x) = \dfrac{-\cos(u) \cdot u'}{\sin^{2}(u)}
        \end{array}
    }
$$
<br>


#### Cotangente

$$
    \large{
        f(x) = \cot(u)
        \hspace{2em}
        \begin{array}{l}
            f'(x) = -\csc^{2}(u) \cdot u'
            \\\\
            f'(x) = \dfrac{-1 \cdot u'}{\sin^{2}(u)}
            \\\\
            f'(x) = \left(- 1 - \cot^{2}(u)\right) \cdot u'    
        \end{array}
    }
$$
<br>



## Funciones trigonometricas inversas

#### Arco seno

$$
    \large{

        f(x) = \arcsin(u)
        \hspace{2em}
        f'(x) = \frac{u'}{\sqrt{1 - u^{2}}}
    }
$$
<br>

#### Arco Coseno

$$
    \large{

        f(x) = \arccos(u)
        \hspace{2em}
        f'(x) = \frac{-1 \cdot u'}{\sqrt{1 - u^{2}}}
    }
$$
<br>

#### Arco Tangente

$$
    \large{

        f(x) = \arctan(u)
        \hspace{2em}
        f'(x) = \frac{u'}{1 + u^{2}}
    }
$$
<br>

#### Arco Cotangente

$$
    \large{

        f(x) = \text{arccot}(u)
        \hspace{2em}
        f'(x) = \frac{-1 \cdot u'}{1 + u^{2}}
    }
$$
<br>

#### Arco secante

$$
    \large{

        f(x) = \text{arcsec}(u)
        \hspace{2em}
        f'(x) = \frac{u'}{|u| \cdot \sqrt{u^{2} - 1}}
    }
$$
<br>

#### Arco Cosecante

$$
    \large{

        f(x) = \text{arccsc}(u)
        \hspace{2em}
        f'(x) = \frac{-1 \cdot u'}{|u| \cdot \sqrt{u^{2} - 1}}
    }
$$
<br>