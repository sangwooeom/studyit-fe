export function getClassName(prefix: string, prop?: string) {
    return `${prefix}-${prop && prop.split(' ').join('-')}`;
}