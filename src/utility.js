

//removing dulicate from array of objects (user) based on passed properties for passing 2 properties
//can we modified further to remove duplicates from n properties
export default (data, ...properties) => {
    return data.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t[properties[0]] === item[properties[0]]
            && t[properties[1]] === item[properties[1]]
        ))
    )
}

