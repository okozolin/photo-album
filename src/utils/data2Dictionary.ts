export const data2Dictionary = (data : [], by="id") => {
    if (!Array.isArray(data) || data?.length === 0) return {}
    return data.reduce((acc, val) => {
        acc[val[by]] = val
        return acc
    },{})
}