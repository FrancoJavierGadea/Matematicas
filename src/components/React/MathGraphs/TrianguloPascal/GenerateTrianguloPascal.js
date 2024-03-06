
//Genera el los valores del trigulo de pascal de n filas;
export function generateTrianguloPascal(n = 0){

    if(n === 0) return [[1]];

    const PreviousRows = generateTrianguloPascal(n - 1);
  
    const PreviousRow = PreviousRows.at(-1)
  
    const row = [];
  
    for (let i = 0; i < n + 1; i++) {

        const a = PreviousRow[i - 1] || 0;
        const b = PreviousRow[i] || 0;
        
        row.push(a + b);  
    }
  
    PreviousRows.push(row);
  
    return PreviousRows;
}