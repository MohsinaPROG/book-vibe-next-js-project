import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-8 rounded-3xl bg-slate-100 px-8 py-10 md:px-12">

          {/* Text */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
              Books to freshen up
              <br />
              <span className="text-green-600">your bookshelf</span>
            </h1>

            <button className="btn btn-success mt-6 rounded-full px-6">
              View Books
            </button>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <Image
              src={bannerImg}
              alt="Books"
              className="w-96 rounded-2xl object-cover"
              //priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;