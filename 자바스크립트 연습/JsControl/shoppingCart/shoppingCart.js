function Product(name, price) {
    Object.defineProperties(this, {
        Name: {
            get: function () {
                return name;
            },
            set: function () {
                this.name = name;
            },
        },
        Price: {
            get: function () {
                return price;
            },
            set: function () {
                this.price = price;
            },
        }


    });



}

function MyCart(){
    this.List=new Array();
}

const fun = {
    updateProducMenu: function (product) {

        // console.log(product.Name)
        const productEl = document.createElement('div');
        productEl.id = 'Product'
        productEl.className = 'Product'

        const productfrm = document.createElement('form');
        productfrm.id = `Product_frm_${product.Name}`;
        productfrm.className = 'Product_frm';
        

        const productName = document.createElement('h2');
        productName.append(product.Name);
        productName.dataset.name = product.Name;
       

        const productPrice = document.createElement('h4');
        productPrice.dataset.price = product.Price;
        productPrice.append(product.Price);

        const productCount = document.createElement('input');
        productCount.type = 'number';
        productCount.id = 'ProductCount';

        const productBtn = document.createElement('button');
        productBtn.type = 'submit'
        productBtn.id = `btn`
        productBtn.append('구매')

        productfrm.append(productName, productPrice, productCount, productBtn);

        productEl.append(productfrm);


        const product_Area = document.getElementById('product_Area');

        product_Area.append(productEl)

    },

    addevt:function(product){
        const productfrm=document.getElementById(`Product_frm_${product.Name}`);
        
        productfrm.addEventListener('submit',function(e){
            console.log(productfrm)
            e.preventDefault();
           console.log(productfrm.childNodes[0].innerHTML)
        });
     
    }
  
}


function Product_List() {
    this.List = new Array();

    console.log('제품 리스트 생성완료');

}
Product_List.prototype.addProduct = function (newProduct) {
    this.List.push(newProduct);
    Shop.UpdateUI();

}
Product_List.prototype.UpdateUI = function () {
    document.getElementById('product_Area').innerHTML = ""
    for (product of this.List) {
        fun.updateProducMenu(product);
        fun.addevt(product);
        

    }
    console.log('업데이트');
}


const Shop = new Product_List();
Shop.addProduct(new Product('제품 1', 23000));
Shop.addProduct(new Product('제품 2', 42000));
Shop.addProduct(new Product('제품 3', 15000));
Shop.addProduct(new Product('제품 4', 32100));
Shop.addProduct(new Product('제품 5', 42120));
