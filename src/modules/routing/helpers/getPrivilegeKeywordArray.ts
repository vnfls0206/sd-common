

export const getPrivilegeKeywordArray = (privilege: Array<string>) => {
    return privilege.map(value => value.split(':')[0]);
}