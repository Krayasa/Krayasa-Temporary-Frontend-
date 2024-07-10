const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const createComponent = function (componentPath, componentName, componentType) {
    const from = path.join(process.cwd(), 'cli', componentType);
    const to = path.join(componentPath);
    fs.copySync(path.join(from), path.join(to));

    remapComponents(componentPath, componentName, componentType);
};

const deleteComponent = function (componentPath) {
    const componentToDelete = path.join(componentPath);
    fs.removeSync(componentToDelete);
};

const remapComponents = function (
    componentPath,
    componentName,
    componentType,
    folder
) {
    const files = fs.readdirSync(componentPath);

    files.forEach((file) => {
        const componentFile = path.join(componentPath, file);

        // Read the content of the file
        let content = fs.readFileSync(componentFile, 'utf8');

        // Replace "__Component" with the actual component name in the content
        content = content.replace(
            new RegExp(componentType, 'g'),
            componentName
        );

        // Write the modified content back to the file
        fs.writeFileSync(componentFile, content, 'utf8');

        // Rename the file
        const replacedFile = componentFile.replace(
            new RegExp(componentType, 'g'),
            componentName
        );
        fs.renameSync(componentFile, replacedFile);
    });
};

const replaceInFile = function (file, replace, replacement) {
    const content = fs.readFileSync(file, 'utf8');
    const re = new RegExp(replace, 'g');
    const result = content.replace(re, replacement);
    fs.writeFileSync(file, result, 'utf8');
};
module.exports = {
    createComponent,
    deleteComponent,
};