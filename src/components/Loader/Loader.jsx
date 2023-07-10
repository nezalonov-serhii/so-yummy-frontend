import { ThreeCircles } from "react-loader-spinner";

const Loader = ({ size = "100", color = "#8BAA36" }) => {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <ThreeCircles
            height={size}
            width={size}
            wrapperStyle={{}}
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor={color}
            innerCircleColor={color}
            middleCircleColor={color}
         />
      </div>
   );
};

export default Loader;
