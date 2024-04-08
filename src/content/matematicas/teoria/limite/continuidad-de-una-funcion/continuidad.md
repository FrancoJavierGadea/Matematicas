## Continuidad de una funcion en un punto

Dada una **funcion** $f(x)$ y un punto $a$

$f(x)$ es `continua` en $a$ si cumple que:

$$
    \exists f(a) 
    \land 
    \exists \lim_{x \to a} f(x) = L 
    \land
    \lim_{x \to a} f(x) = f(a) 
$$

<br>

Se cumplen estas 3 condiciones:

- #### Existe $f(a)$

    $$
        \large{\exists f(a) \hspace{2em} a \in \text{Dom}(f)}
    $$

<br>

- #### Existe el **limite** de $f(a)$ cuando $x$ tiende a $a$

    $$
        \large{\exists \lim_{x \to a} f(x) = L \hspace{2em} L \in \mathbb{R}}
    $$

<br>

- #### $f(a)$ y el **limite** son iguales

    $$
        \large{\lim_{x \to a} f(x) = f(a)}
    $$

<br>



## Discontinuidad en un punto

Dada una **funcion** $f(x)$ y un punto $a$

$f(x)$ es `discontinua` en $a$ si:

$$
    \nexists f(a) 
    \lor 
    \nexists \lim_{x \to a} f(x) = L 
    \lor
    \lim_{x \to a} f(x) \neq f(a) 
$$

<br>

Se cumplen alguna de estas 3 condiciones:

- #### No Existe $f(a)$

    $$
        \large{
            \nexists f(a) \hspace{2em} a \notin \text{Dom}(f)
        }
    $$

<br>

- #### No Existe el **limite** de $f(a)$ cuando $x$ tiende a $a$

    $$
        \large{
            \nexists \lim_{x \to a} f(x) = L
        }
    $$

    > **Esto ocurre cuando:**
    >
    > Los limites laterales no son iguales
    > $$\lim_{x \to a^{-}} f(x) \neq \lim_{x \to a^{+}} f(x)$$
    >
    > El limite es **infinito**
    > $$\lim_{x \to a} f(x) = \pm\infty$$

<br>

- #### $f(a)$ y el **limite** son distintos

    $$
        \large{
            \lim_{x \to a} f(x) \neq f(a)
        }
    $$

<br>


## Clasificaion de discontinuidades

### Discontinuidad evitable

#### Cuando existe el **limite**

$$
    \large{\exists \lim_{x \to a} f(x) = L \hspace{2em} L \in \mathbb{R}}
$$

Pero

- #### No existe $f(a)$

    $$
        \large{\nexists f(a) \hspace{2em} a \notin \text{Dom}(f)}
    $$
<br>

- #### $f(a)$ y el **limite** son distintos

    $$
        \large{
            \lim_{x \to a} f(x) \neq f(a)
        }
    $$

<br>

