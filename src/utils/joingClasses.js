export function joinClasses(classesList) {
    if (classesList === null ||  classesList === undefined) return '';
    if (!classesList.length) return '';
    if (classesList.length === 1 || typeof classesList === 'string') return classesList

    return classesList.join(' ');
}