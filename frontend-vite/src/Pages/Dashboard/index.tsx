import { useElementoStore } from "../../stores/useElementoStore/useElementoStore";

const Dashboard = () => {
  const elemento = useElementoStore((state) => state.elemento);
  console.log("🚀 ~ file: index.tsx:7 ~ Dashboard ~ elemento:", elemento);
  return <div>


    
  </div>;
};

export default Dashboard;
