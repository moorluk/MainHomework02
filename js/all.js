const productList = {
    data: {
        uuid : '639e98e6-a255-4974-9804-f0c58d4dba5d',
        apiPath : 'https://course-ec-api.hexschool.io/',
        products : [],
    },
    getProducts() {
        const vm = this;
        let api = `${vm.data.apiPath}api/${vm.data.uuid}/ec/products`;

        console.log('Get product list...');
        
        axios.get(api)
        .then(res => {
            console.log(res);
            vm.data.products = res.data.data;
            vm.render();
        }); 
    },
    render() {
        const vm = this;
        let pList = document.querySelector('#productList');
        let products = vm.data.products;
        console.log(pList);
        let str = `${ 
            products.map( product => {
                let p = product;
                return `
                <div class = 'card'>
                <img src="${p.imageUrl[0]}" class='card-img-top'>
                <div class = 'card-body'>
                <h5 class="card-title">${ p.title }</h5>
                <p class="card-text">${ p.content }</p>
                </div>
                </div>`
            }).join('')
        }`;
        console.log(str);
        pList.innerHTML = str;
    }
}

productList.getProducts();
