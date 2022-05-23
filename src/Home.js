import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <div>
            <img
              src="https://theme.hstatic.net/200000201725/1000749045/14/slideshow_3.jpg?v=588"
              alt=""
              className="home__image"
            />
          </div>

          <div className="home__row">
            <Product
              id="1"
              title="Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
            Bag,Water Repellent Fabric for Men and Womem (Blue)"
              price={11.96}
              rating={5}
              img="https://product.hstatic.net/200000201725/product/_nik0459_c4cae8b6290a4bbc8cae5aafc30241c2_grande.jpg"
            />
            <Product
              id="2"
              title="Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
            Bag,Water Repellent Fabric for Men and Womem (Blue)"
              price={15.96}
              rating={3}
              img="https://product.hstatic.net/200000201725/product/_nik0467_ba4f21a9a7174ddd81f9c3d4c761ba7c_master.jpg"
            />
            <Product
              id="3"
              title="Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
            Bag,Water Repellent Fabric for Men and Womem (Blue)"
              price={30}
              rating={4}
              img="https://product.hstatic.net/200000201725/product/_nik9883_54fd35ccf9af44949c9e8ea37a76e32a_master.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="4"
              title="Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
            Bag,Water Repellent Fabric for Men and Womem (Blue)"
              price={30.6}
              rating={1}
              img="https://product.hstatic.net/200000201725/product/_nik9892_0e38b0c83e7143d9acc6baee8a161e4d_master.jpg"
            />
            <Product
              id="5"
              title="Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
            Bag,Water Repellent Fabric for Men and Womem (Blue)"
              price={30.87}
              rating={5}
              img="https://product.hstatic.net/200000201725/product/_nik9849_466e5caf5f2743f7921775120d5e91a4_master.jpg"
            />
            <Product
              id="6"
              title="Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
            Bag,Water Repellent Fabric for Men and Womem (Blue)"
              price={100.6}
              rating={2}
              img="https://product.hstatic.net/200000201725/product/_nik9883_54fd35ccf9af44949c9e8ea37a76e32a_master.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="7"
              title="Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
            Bag,Water Repellent Fabric for Men and Womem (Blue)"
              price={10.19}
              rating={4}
              img="https://product.hstatic.net/200000201725/product/z3390287267669_86b535446e86600dc097cd661b7023c7_e7b24657a20c409f8c234a754d1403a1_master.jpg"
            />
            <Product
              id="8"
              title="Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
            Bag,Water Repellent Fabric for Men and Womem (Blue)"
              price={30.55}
              rating={4}
              img="https://product.hstatic.net/200000201725/product/z3366838904923_3c5dbff52da6e32f520489d2fd2114d9_9cfadeb670ce4334a9868744a2c3dbc4_master.jpg"
            />
            <Product
              id="9"
              title="Benefit Mystic 15.5 inch Laptop Shouder Messager Sling Office
            Bag,Water Repellent Fabric for Men and Womem (Blue)"
              price={30.99}
              rating={3}
              img="https://product.hstatic.net/200000201725/product/_nik8705_544f13f2c1474f09a4dc9b33fd342ffb_master.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
