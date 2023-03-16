const getFile = require("../aula5")

describe("pegando arquivos::", () => {
    it('Deve ser uma função', () => {
        expect(typeof getFile).toBe("function")
    })

    it('Verificado o tipo', async () => {
        expect(typeof(await getFile('./files/file1.txt'))).toBe("string")
    })

    it('Verificado verificando com paramentro null', async () => {
        expect(typeof(await getFile(null))).toBe("string")
    })

    it('Verificado verificando com paramentro que não existir', async () => {
        expect(typeof(await getFile('./files/filex.txt'))).toBe("string")
    })

    //it('Verificado o conteúdo', async () => {
    //    expect(await getFile('./files/file2.txt')).toEqual("Lorem Ipsum")
    //})
})

