import Link from "next/link";

export const Hero = () => {
  return (
    <div className="">
      <section className="pt-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-center lg:col-span-4">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                Burn Calories🚀 Stay Fit, Earn
                <span className="text-blue-600"> Rewards.</span>
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                We Help Working Professionals Burn Calories, Stay Fit & Earn
                Rewards!
              </p>
              <div className="relative inline-flex mt-9 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                <Link
                  href={'/dashboard'}
                  className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  role="button"
                >
                  Get Started Today
                </Link>
              </div>
            </div>

            <div className="self-end lg:order-last lg:pb-20 lg:col-span-3 hidden sm:block">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                ⚡️ Redeem Today
              </p>

              <div className="mt-6 space-y-6 lg:space-y-8">
                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://plus.unsplash.com/premium_photo-1719017276454-99ae8306c200?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <Link href={'/store/coffee-mug'}>
                        Coffee Mug
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://m.media-amazon.com/images/I/513dgckGAxS._SX679_.jpg"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <Link href={'/store/github-tshirt'}>
                        GitHub T-Shirt
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img
                      className="object-cover w-12 h-12 rounded-lg shrink-0"
                      src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png"
                      alt=""
                    />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <Link href={'/store/relaxing-chair'}>
                        Relaxing Chair
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-end lg:col-span-5">
              <img
                className="w-full mx-auto"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/author.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
