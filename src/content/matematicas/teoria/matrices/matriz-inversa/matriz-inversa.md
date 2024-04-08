## Matriz inversa

Una matriz es inversa de otra cuando

Al multiplicar ambas en cualquier orden se obtiene la `matriz identidad`

$$
    A \cdot A^{-1} = A^{-1} \cdot A = I
$$

<br>

##### Matriz $1 \times 1$

$$
    A = \left( \begin{matrix} a_{1 1} \end{matrix} \right)
    \hspace{2em}
    A^{-1} = \left( \begin{matrix} \dfrac{1}{a_{1 1}} \end{matrix} \right)
$$
<br>


#### Propiedades 

- La inversa de una matriz inversa es la matriz original

    $$
        \left( A^{-1} \right)^{-1} = A
    $$
<br>

- La inversa del un producto de matrices es igual al producto de las inversas

    $$
        (A \cdot B)^{-1} = A^{-1} \cdot B^{-1}
    $$
<br>

- Cuando una matriz tiene `inversa` el `determinante` es distinto de $0$

    $$
        |A| \neq 0 \Longrightarrow \exist A^{-1} / A \cdot A^{-1} = A^{-1} \cdot A = I
    $$
<br>

- El `determinante` de la `matriz inversa` de una matriz es igual al inverso del `determinante` de esa matriz

    $$
        |A^{-1}| = \frac{1}{|A|}
    $$
<br>