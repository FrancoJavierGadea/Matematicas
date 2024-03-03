
import { CollectionFileStructure } from '@utils/CollectionUtils.js';
import { getCollection } from 'astro:content';
import { expect, test } from 'vitest';


test('Misma cantidad de archivos que en el array de entries', async () => {

    const entries = await getCollection("docs");

    const Files = new CollectionFileStructure({collection: entries});

    let cont = 0;

    const increment = (item) => {

        if(item.type === 'file'){

            cont++;
        }
        else {
            item.children.forEach(increment);
        };
    }

    Files.files.forEach(increment);

    expect(cont)
        .toBe(entries.length);
});



test('Todos los archivos tiene que poder ser buscados', async () => {

    const entries = await getCollection("docs");

    const Files = new CollectionFileStructure({collection: entries});

    const files = entries.map((entry) => entry.id);

    const searchResult = files.map(file => {

        const findedFile = Files.find(file);

        expect(findedFile.result)
            .toBeTruthy();

        expect(findedFile.result.type)
            .toBe('file');

        expect(findedFile.result.entry.id)
            .toBe(file);

        return findedFile.result;
    });

    const existAllFiles = searchResult.every(file => Boolean(file));

    expect(existAllFiles)
        .toBe(true);
});



test('Todos las carpetas tiene que poder ser buscadas', async () => {

    const entries = await getCollection("docs");

    const Files = new CollectionFileStructure({collection: entries});

    const folders = entries.reduce((acc, entry) => {

        const folder = entry.id.split('/').slice(0, -1).join('/');

        if(folder) acc.push(folder);

        return acc;

    }, []);

    const searchResult = folders.map(folder => {

        const findedFolder = Files.find(folder);

        expect(findedFolder.result)
            .toBeTruthy();

        expect(findedFolder.result.type)
            .toBe('folder');

        expect(findedFolder.result.children)
            .toBeTruthy();

        return findedFolder.result;
    });

    const existAllFiles = searchResult.every(file => Boolean(file));

    expect(existAllFiles)
        .toBe(true);
});



test('Buscar archivos que no se encuentren en la collecion', async () => {

    const entries = await getCollection("docs");

    const Files = new CollectionFileStructure({collection: entries});

    const files = entries.map((entry) => {

        const path = entry.id.split('/');

        path[Math.floor(Math.random()*path.length)] += '_rd';

        return path.join('/');
    });

    const searchResult = files.map(file => {

        const findedFile = Files.find(file);

        expect(findedFile.result)
            .toBeFalsy();

        return findedFile.result;
    });

    const existAllFiles = searchResult.every(file => Boolean(file));

    expect(existAllFiles)
        .toBe(false);
});



test('Buscar archivos que no se encuentren en la collecion', async () => {

    const entries = await getCollection("docs");

    const Files = new CollectionFileStructure({collection: entries});

    const files = entries.map((entry) => {

        const path = entry.id.split('/');

        path[Math.floor(Math.random()*path.length)] += '_rd';

        return path.join('/');
    });

    const searchResult = files.map(file => {

        const findedFile = Files.find(file);

        expect(findedFile.result)
            .toBeFalsy();

        return findedFile.result;
    });

    const existAllFiles = searchResult.every(file => Boolean(file));

    expect(existAllFiles)
        .toBe(false);
});