import { ThreeCircles } from "react-loader-spinner";

const Loader = ({ size = "100" }) => {
   return (
      <di1v
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
            outerCircleColor="#8BAA36"
            innerCircleColor="#8BAA36"
            middleCircleColor="#8BAA36"
         />
      </di1v>
   );
};

export default Loader;
