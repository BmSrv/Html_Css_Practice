document.getElementById('PayBtn').addEventListener('click', function () {

    let ask = confirm(`${buyList.pay}원 을 결제 하시겠습니까?`);

    if (ask) {

        let count = 0

        for (let i = 0; i < buyList.List.length; i++) {
            buyList.List[i] = `비어있음_${i}`;
        }
        buyList.pay = 0;
        buyList.UpdateUI();
    }else{
        
    }


})

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
        productCount.min="1";
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

    addevt_cartVal: function (product) {
        const productfrm = document.getElementById(`Product_frm_${product.Name}`);

        productfrm.addEventListener('submit', function (e) {

            e.preventDefault();
            //    console.log(productfrm.childNodes[0].innerHTML)
            //    console.log(productfrm.childNodes[1].innerHTML)
            //    console.log(productfrm.childNodes[2].value)

            let buyName = productfrm.childNodes[0].innerHTML;

            let buyPrice = productfrm.childNodes[1].innerHTML;

            let buyCount = productfrm.childNodes[2].value || 1;



            buyList.add(new CartValue(buyName, buyPrice, buyCount))




        });

    },

    UpdateUI_cartVal: function (product, cartVal_num) {
        const cart_Area = document.getElementById('Cart');

        let cartVal = document.createElement('div');
        cartVal.className = 'cartVal';
        cartVal.id = `cartVal_${cartVal_num}`;


        let productNameEl = document.createElement('h1');
        productNameEl.append(product.Name);

        // console.log(productNameEl)


        let productPriceEl = document.createElement('h4');
        productPriceEl.append(`${product.Price}x${product.Count}=${product.Price * product.Count}`);

        // console.log(productPriceEl)

        let productRemoveEl = document.createElement('button');
        productRemoveEl.append('제거');

        productRemoveEl.addEventListener('click', function () {
            const delEl = document.getElementById('Cart');
            delEl.removeChild(document.getElementById(`cartVal_${cartVal_num}`));
            buyList.List[`${cartVal_num}`] = `비어있음_${cartVal_num}`
            buyList.pay -= `${product.Price * product.Count}`
            console.log(buyList.pay)

            buyList.UpdateUI()
        })


        cartVal.append(productNameEl, productPriceEl, productRemoveEl)

        cart_Area.append(cartVal)

    },

    UpdateUI_cartPriceVal: function () {
        const cart_Area = document.getElementById('cost').innerHTML = `총 가격 ${buyList.pay}`;
        console.log(buyList.pay)


    }

}

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

function CartValue(name, price, count) {
    Object.defineProperties(this, {
        Name: {
            get: function () {
                return name;
            },

            set: function () {
                this.name = name;
            }
        },

        Price: {
            get: function () {
                return price;
            },

            set: function () {
                this.price = price;
            }

        },

        Count: {
            get: function () {
                return count;
            },

            set: function () {
                this.count = count;
            }
        }

    })
}


function MyCart() {
    this.List = new Array();
    this.pay = 0;
}
MyCart.prototype.add = function (product) {

    this.List.push(product);
    // console.log(product.Count)
    // console.log(product.Price)
    this.pay += product.Price * product.Count;
    this.UpdateUI();
}
MyCart.prototype.UpdateUI = function () {
    const cart_Area = document.getElementById('Cart');
    cart_Area.innerHTML = "";

    let cartVal_num = 0;
    for (product of this.List) {
        if (product instanceof CartValue) {
            fun.UpdateUI_cartVal(product, cartVal_num);


        }
        cartVal_num++;
    }

    fun.UpdateUI_cartPriceVal();

}

const buyList = new MyCart();


function Product_List() {
    this.List = new Array();

    console.log('제품 리스트 생성완료');

}
Product_List.prototype.addProduct = function (newProduct) {
    this.List.push(newProduct);
    Shop.UpdateUI();

}
Product_List.prototype.UpdateUI = function () {
    document.getElementById('product_Area').innerHTML = "<h1>메뉴</h1>"

    for (product of this.List) {

        fun.updateProducMenu(product);
        fun.addevt_cartVal(product);


    }
    console.log('업데이트');
}


const Shop = new Product_List();
Shop.addProduct(new Product('제품 1', 23000));
Shop.addProduct(new Product('제품 2', 42000));
Shop.addProduct(new Product('제품 3', 15000));
Shop.addProduct(new Product('제품 4', 32100));
Shop.addProduct(new Product('제품 5', 42120));
