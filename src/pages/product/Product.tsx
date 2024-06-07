import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";

function Product() {
  const params = useParams<{id: string}>();

  useEffect(()=>{
    getProduct(params.id as string).then(data=> {
      console.log(data)
    })
  }, [])

  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h1 className="text-right">عنوان محصول</h1>
            <div>
              <p className="text-right">قیمت: 25$</p>
              <p className="text-right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>

          <div className="col-span-2 p-4 bg-blue-200">
            <img
              className="rounded"
              src="https://images.pexels.com/photos/17180127/pexels-photo-17180127/free-photo-of-clouds-over-mountains-in-winter.jpeg"
              alt=""
            />

            <Button className="mt-2 w-full !py-3" variant="primary">Add to Cart</Button>

            <div>
                
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
