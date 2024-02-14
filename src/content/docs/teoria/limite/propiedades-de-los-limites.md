## Propiedades de los limites

#### Limite de una constante 

$$
    \lim_{x \to c} k = k
$$

#### Limite de una suma

$$
    \lim_{x \to c} \left[f(x) + g(x) \right] = 
    \lim_{x \to c} f(x) 
    +
    \lim_{x \to c} g(x)
$$

#### Limite de una resta

$$
    \lim_{x \to c} \left[f(x) - g(x) \right] = 
    \lim_{x \to c} f(x) 
    -
    \lim_{x \to c} g(x)
$$

<br>

#### Limite de un producto

$$
    \lim_{x \to c} \left[f(x) \cdot g(x) \right] = 
    \lim_{x \to c} f(x) 
    \cdot
    \lim_{x \to c} g(x)
$$

#### Limite de un producto de una constante

$$
    \lim_{x \to c} \left[k \cdot g(x) \right] = 
    k \cdot \lim_{x \to c} g(x)
$$

<br>

#### Limite de una divicion

$$
    \lim_{x \to c} \left[ \frac{f(x)}{g(x)} \right] 
    =
    \frac{
        \displaystyle{ \lim_{x \to c} f(x) }
    }
    {
        \displaystyle{ \lim_{x \to c} g(x) }
    }   
$$

<br>

#### Limite de una potencia

$$
    \lim_{x \to c} \left[ f(x)^{g(x)} \right] = 
    \left[ 
        \lim_{x \to c} f(x)
    \right]
    ^{
        \displaystyle{
            \lim_{x \to c} g(x) 
        } 
    }  
$$

#### Limite de una potencia con base contante

$$
    \lim_{x \to c} \left[ k^{f(x)} \right] = 
    {
        k
    }
    ^{
        \displaystyle{
            \lim_{x \to c} f(x) 
        } 
    }  
$$

#### Limite de una potencia

$$
    \lim_{x \to c} \left[ f(x)^{n} \right] = 
    \left[ 
        \lim_{x \to c} f(x)
    \right]
    ^{n}  
$$

<br>

#### Limite de una raiz

$$
    \lim_{x \to c} \sqrt[d]{x} = \sqrt[d]{c}
$$

<br>

#### Limite de una funcion compuesta

$$
    \lim_{x \to c} f \left[g(x) \right] = 
    f \left[ 
        \lim_{x \to c} g(x)
    \right]
$$

<br>


## Trigonometricos

#### Limite seno y coseno

$$
    \lim_{x \to 0} \sin(x) = 0
    \hspace{3em}
    \lim_{x \to 0} \cos(x) = 1
$$

<br>

#### Limite trigonometrico fundamental

$$
    \lim_{x \to 0} \frac{\sin(x)}{x} = 1
    \hspace{3em}
    \lim_{x \to 0} \frac{k \cdot \sin(x)}{k \cdot x} = 1
$$

Tambien aplica al reves

$$
    \lim_{x \to 0} \frac{x}{\sin(x)} = 1
    \hspace{3em}
    \lim_{x \to 0} \frac{k \cdot x}{k \cdot \sin(x)} = 1
$$

<br>

#### Limite de la tangente

$$
    \lim_{x \to 0} \frac{\tan(x)}{x} = 1
    \hspace{3em}
    \lim_{x \to 0} \frac{\tan(k \cdot x)}{k \cdot x} = 1
$$

Tambien aplica al reves

$$
    \lim_{x \to 0} \frac{x}{\tan(x)} = 1
    \hspace{3em}
    \lim_{x \to 0} \frac{k \cdot x}{\tan(k \cdot x)} = 1
$$ 


<br>

#### Limite 1 menos el coseno

$$
    \lim_{x \to 0} \frac{1 - \cos(x)}{x} = 0
    \hspace{3em}
    \lim_{x \to 0} \frac{1 - \cos(k \cdot x)}{k \cdot x}= 0
$$