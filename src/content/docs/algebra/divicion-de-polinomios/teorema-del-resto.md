## Teorema del resto

Dado un polinomio $P(x)$ y un monomio $(x - a)$

La divicion de $P(x)$ entre $(x - a)$ es igual a evaluar el polinomio en $a$

$$
    \frac{P(x)}{(x - a)} = P(a)
$$

Esto se deduce de:
$$
    \underbrace{P(x)}_{\text{Dividendo}} = \underbrace{C(x)}_{\text{Cociente}} \cdot \underbrace{(x - a)}_{\text{Divisor}} + \underbrace{R(x)}_{\text{Resto}}
\\\
$$

$$
    P(a) = C(a) \cdot (a - a) + R(a)
\\\
$$
$$
    P(a) = \cancel{C(a) \cdot 0} + R(a)
\\\
$$
$$
    P(a) = R(a)
\\\
$$

Al ser el grado del `divisor` $(x - a)$ igual a $1$ el grado del `resto`, tiene que ser igual a $0$

Por lo tanto $R(a)$ es igual a un **numero**, una **constante** $r$

$$
    P(a) = r
\\\
$$

<br>

## Teorema del factor

Un polinomio $P(x)$ tiene como factor a $(x - a)$ si y solo si $a$ es un `cero` o `raiz` de $P(x)$, es decir: $P(a) = 0$

Si $P(a) = 0$ entonces:

$$
\frac{P(x)}{(x - a)}
$$ 
 
tiene `resto` igual a $0$




<br>

##### Docs


- [Teorema del resto](https://es.wikipedia.org/wiki/Teorema_del_resto)
- [Teorema del factor](https://es.wikipedia.org/wiki/Teorema_del_factor)
- [Teorema de la raíz racional](https://es.wikipedia.org/wiki/Teorema_de_la_ra%C3%ADz_racional)