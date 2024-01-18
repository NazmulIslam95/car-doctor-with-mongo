import { MovingComponent } from "react-moving-text";
import { TypeAnimation } from "react-type-animation";
const Products = () => {
  return (
    <div>
      <div className="space-y-5 mb-12">
        <p className="text-center text-[#FF3811] text-xl font-bold">
          <MovingComponent
            type="flipSlowDown"
            duration="2000ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none"
          >
            Popular Products
          </MovingComponent>
        </p>
        <h1 className="text-center text-[#151515] text-5xl font-bold">
          <TypeAnimation
            preRenderFirstString={false}
            sequence={[
              500,
              "Browse Our Products", // initially rendered starting point
              1000,
              "", // initially rendered starting point
            ]}
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <p className="text-center text-[#737373] text-base font-normal">
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which do not look even slightly believable.
        </p>
      </div>
    </div>
  );
};

export default Products;
