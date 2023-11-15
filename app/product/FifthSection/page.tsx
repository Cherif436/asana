import Image from "next/image";

const FifthSection = () => {
  return (
    <div className="items-center justify-center px-10 py-20 md:flex">
      <div className="items-center justify-center pb-20 space-y-20 md:w-1/2 md:pb-0">
        <div className="flex text-4xl ">The best platform for cross-team work</div>
          <div className="text-2xl md:w-5/6 ">
            Get more work done across teams with unlimited monthly actions, the ability to track hundreds of projects in one place, and by reporting against your entire organization.
          </div>
          <div className="w-40 p-6 text-xl border  rounded-xl">
            Get started
          </div>
        </div>
        <div className="flex items-center justify-center p-6 rounded-md bg-gradient-to-r from-gray-400 to-gray-100">
          <Image
            src="/images/tab-3.webp"
            width={530}
            height={500}
            alt="logo"
            className="rounded-md w-80 h-60 md:w-96 md:h-80"
          />
        </div>   
    </div>
  );
};

export default FifthSection;
