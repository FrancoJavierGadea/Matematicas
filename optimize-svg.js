import { exec } from 'node:child_process';

const inFolder = 'svg'
const outFolder = 'optimized-svg';

const paths = [
    './src/docs/Trigonometria/Razones trigonometricas',
    './src/docs/Trigonometria/Identidades trigonometricas'
];

const i = 1;

const script = `svgo -f "${paths[i]}/${inFolder}" -o "${paths[i]}/${outFolder}"`

console.log(`> ${script}`);

exec(script, (err, stdout, stderr) => {

    if(!err){
        console.log('\n' + stdout);

        console.log('Done !');
    }
    else {

        console.log('\n' + stderr);
    }
})



