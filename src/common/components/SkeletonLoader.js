import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <div className="w-full pt-[30px] flex flex-col items-center">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p className="flex flex-row flex-wrap justify-center">
          <Skeleton count={1} width="500px" height="30px" className="mx-1 my-2" />
          <Skeleton count={1} width="30px" height="30px" circle={true} className="mx-1 my-2" />
          <Skeleton count={1} width="100px" height="30px" className="mx-1 my-2" />
        </p>
        <p className="flex flex-row flex-wrap justify-center">
          <Skeleton count={1} width="20px" height="20px" circle={true} className="mx-1 my-2" />
          <Skeleton count={1} width="20px" height="20px" circle={true} className="mx-1 my-2" />
          <Skeleton count={1} width="500px" height="20px" className="mx-0 my-2" />
        </p>
        <p className="flex flex-row flex-wrap justify-center">
          <Skeleton count={1} width="235px" height="70px" className="mx-1 my-2" />
          <Skeleton count={1} width="400px" height="30px" className="mx-1 my-2" />
        </p>
        <p className="flex flex-row flex-wrap justify-center">
          <Skeleton count={1} width="500px" height="30px" className="mx-1 my-2" />
          <Skeleton count={1} width="30px" height="30px" circle={true} className="mx-1 my-2" />
          <Skeleton count={1} width="100px" height="30px" className="mx-1 my-2" />
        </p>
        <p className="flex flex-row flex-wrap justify-center">
          <Skeleton count={1} width="20px" height="20px" circle={true} className="mx-1 my-2" />
          <Skeleton count={1} width="20px" height="20px" circle={true} className="mx-1 my-2" />
          <Skeleton count={1} width="590px" height="20px" className="mx-0 my-2" />
        </p>
        <p className="flex flex-row flex-wrap justify-center">
          <Skeleton count={1} width="235px" height="50px" className="mx-1 my-2" />
          <Skeleton count={1} width="400px" height="70px" className="mx-1 my-2" />
        </p>
        <p className="flex flex-row flex-wrap justify-center">
          <Skeleton count={1} width="400px" height="30px" className="mx-1 my-2" />
          <Skeleton count={1} width="30px" height="30px" circle={true} className="mx-1 my-2" />
          <Skeleton count={1} width="100px" height="30px" className="mx-1 my-2" />
        </p>
        <p className="flex flex-row flex-wrap justify-center">
          <Skeleton count={1} width="20px" height="20px" circle={true} className="mx-1 my-2" />
          <Skeleton count={1} width="20px" height="20px" circle={true} className="mx-1 my-2" />
          <Skeleton count={1} width="590px" height="20px" className="mx-0 my-2" />
        </p>
        <p className="flex flex-row flex-wrap justify-center">
          <Skeleton count={1} width="235px" height="70px" className="mx-1 my-2" />
          <Skeleton count={1} width="400px" height="70px" className="mx-1 my-2" />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonLoader;
