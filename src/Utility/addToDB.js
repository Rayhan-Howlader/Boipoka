const getStoredBook = () =>{
    const storedBookSTR =localStorage.getItem("readList");

    if(storedBookSTR) {
        const storedBookData =JSON.parse(storedBookSTR)
        return storedBookData;
    }
    else {
        return [];
    }
}


const addToStoredDB = (id) => {
    const storeBookData = getStoredBook();

    if (storeBookData.includes(id)){
        alert("id already Exists")
    }
    else{
        storeBookData.push(id);
        const data =JSON.stringify(storeBookData);
        localStorage.setItem("readList", data)


    }
}

export { addToStoredDB };