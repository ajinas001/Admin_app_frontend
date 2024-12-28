import { useState, useEffect } from "react";

function LoadingScreen({ nextComponent }) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading ? (
        <div className="flex justify-center items-center w-full h-screen bg-background">
         <img src="../src/assets/images/logo.png" alt="ルクミル Logo" className="w-96 h-40" />
        </div>
      ) : (
        nextComponent
      )}
    </>
  );
}

export default LoadingScreen;
