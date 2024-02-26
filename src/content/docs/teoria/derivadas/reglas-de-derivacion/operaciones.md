## Funciones compuestas y Operciones

#### Derivada de una suma

$$
    \large{

        \begin{array}{c}
            f(x) = a(x) + b(x)
            \\\\
            f'(x) = a'(x) + b'(x)
        \end{array}
    }
$$
<br>

#### Derivada de una resta

$$
    \large{

        \begin{array}{c}
            f(x) = a(x) - b(x)
            \\\\
            f'(x) = a'(x) - b'(x)
        \end{array}
    }
$$
<br>


#### Derivada de un producto

$$
    \large{

        \begin{array}{c}
            f(x) = a(x) \cdot b(x)
            \\\\
            f'(x) = a(x) \cdot b'(x) + b(x) \cdot a'(x)
        \end{array}
    }
$$
<br>


#### Derivada de un cociente

$$
    \large{

        \begin{array}{c}
            f(x) = \dfrac{a(x)}{b(x)}
            \\\\
            f'(x) = \dfrac{b(x) \cdot a'(x) - a(x) \cdot b'(x)}{\left[b(x)\right]^{2}}
        \end{array}
    }
$$
<br>



## Derivacion logaritmica

$$
    \Large{
        f(x) = a(x)^{b(x)}
    }
$$

> Para simplificar llamaremos $u = a(x)$ y $v = b(x)$

1. Aplicamos **logaritmo natural** a ambos miembros

    $$
    \begin{array}{c}
        f(x) = u^{v}
        \\\\
        \ln(f(x)) = \ln\left(u^{v}\right)
        
    \end{array}
    $$

    por **propiedades del logaritmo** nos queda

    $$
    \begin{array}{c}

        \ln(f(x)) = v \cdot \ln(u) 
    \end{array}
    $$


2. Derivamos ambos miembros

    $$
    \begin{array}{c}

        \left\{\ln(f(x))\right\}' = \left\{v \cdot  \ln(u) \right\}' 
        \\\\
        \dfrac{f'(x)}{f(x)} = v' \cdot \ln(u) + \left\{\ln(u)\right\}' \cdot v
        \\\\
        \dfrac{f'(x)}{f(x)} = v' \cdot \ln(u) + \dfrac{u'}{u} \cdot v
    \end{array}
    $$

3. Terminamos de despejar la derivada de $f$

    $$
    \begin{array}{c}

        \left\{\ln(f(x))\right\}' = \left\{v \cdot  \ln(u) \right\}' 
        \\\\
        \dfrac{f'(x)}{f(x)} = v' \cdot \ln(u) + \left\{\ln(u)\right\}' \cdot v
        \\\\
        f'(x) = \left(v' \cdot \ln(u) + \dfrac{u'}{u} \cdot v\right) \cdot f(x)
    \end{array}
    $$