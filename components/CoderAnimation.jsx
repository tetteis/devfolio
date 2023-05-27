import { useEffect, useRef, useState } from "react";

export default function CoderAnimation() {
  const ref = useRef(null);
  const [lottie, setLottie] = useState(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/assets/coder-animation.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div ref={ref} />;
}
