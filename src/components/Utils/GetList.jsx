const products= [
    {
        id:1,
        title:'zapatillas Adidas',
        price: 23000,
        description:'Las mejores zapas super comodas y cancheras ',
        category:'zapatillas',
        image:'https://redsport.vteximg.com.br/arquivos/ids/1080645-1000-1000/ZAPATILLAS-ADIDAS-RUNFALCON-NINO.jpg?v=637547086907970000',
        stock: 11
    },
    {
        id:2,
        title:'zapatillas Nike',
        price: 33000,
        description:'Las mejores zapas de la marca lider a nivel mundial',
        category:'zapatillas',
        image:'https://essential.vtexassets.com/arquivos/ids/432205-800-auto?v=637571120506070000&width=800&height=auto&aspect=true',
        stock: 8
    },{
        id:3,
        title:'zapatillas Puma',
        price: 20000,
        description:'Deportivas y super comodas, con suela de caucho, te asegura confort y calidad por un precio increible',
        category:'zapatillas',
        image:'https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/3/8/38335502_0_6.jpg',
        stock: 20
    }
   ];

   const getList= ()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
   };

   export default getList;