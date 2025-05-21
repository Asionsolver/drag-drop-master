import {
  Aperture,
  Apple,
  Archive,
  Armchair,
  AtSign,
  BriefcaseMedical,
  FerrisWheel,
} from "lucide-react";
import { useEffect } from "react";

const BasicDragDrop = ({ basketRef }) => {
  const iconData = [
    { Icon: FerrisWheel, bg: "bg-slate-800" },
    { Icon: Apple, bg: "bg-violet-800" },
    { Icon: Armchair, bg: "bg-blue-800" },
    { Icon: AtSign, bg: "bg-green-800" },
    { Icon: Archive, bg: "bg-red-800" },
    { Icon: BriefcaseMedical, bg: "bg-yellow-800" },
    { Icon: Aperture, bg: "bg-orange-800" },
  ];

  useEffect(() => {
    const icons = document.querySelectorAll(".icon");
    const basket = basketRef?.current;
    // console.log(basket);

    if (!basket) return;
    // icons.forEach((icon, index) => {
    //   console.log(`Icon ${index + 1}:`, icon);
    // });
    // console.log("Basket ref from BasicDragDrop:", basketRef?.current);

    icons.forEach((icon) => {
      icon.addEventListener("drag", (e) => {
        // console.log("dragging");
        e.target.style.backgroundColor = "red";
        // e.target.style.opacity = "0.5";
        e.target.style.transform = "scale(1.2)";
        e.target.style.transition = "all 0.2s ease-in-out";
        e.target.style.cursor = "grabbing";
        e.target.style.zIndex = "1000";
      });
      icon.addEventListener("dragstart", (e) => {
        // e.dataTransfer.setData("text/plain", icon.innerHTML);
        // console.log(e.dataTransfer);
        // console.log("dragstart");
        e.dataTransfer.setData("text", e.target.innerHTML);
        // console.log("Drag data set:", e.target.innerHTML);
      });
      icon.addEventListener("dragend", (e) => {
        // console.log("dragend");
        e.target.style.backgroundColor = "";
        e.target.style.transform = "scale(1)";
        e.target.style.transition = "all 0.2s ease-in-out";
        e.target.style.cursor = "grab";
        e.target.style.zIndex = "1";
      });
    });

    basket.addEventListener("dragenter", (e) => {
      e.preventDefault();
      // console.log("dragenter");
      // console.log("dragenter");
      e.target.style.backgroundColor = "green";
    });

    basket.addEventListener("dragleave", (e) => {
      e.preventDefault();
      // console.log("dragleave");
      e.target.style.backgroundColor = "yellow";
    });

    basket.addEventListener("dragover", (e) => {
      e.preventDefault();
      // console.log("dragover");
      e.target.style.backgroundColor = "blue";
    });
    // basket.addEventListener("drop", (e) => {
    //   e.preventDefault();
    //   console.log("drop");
    //   e.target.style.backgroundColor = "";

    //   if (e.dataTransfer) {
    //     const icon = e.dataTransfer.getData("text");
    //     const newIcon = document.createElement("div");
    //     newIcon.innerHTML = icon;
    //     newIcon.className =
    //       "w-[100px] h-[100px] bg-green-800 text-sm text-amber-300 rounded-md flex items-center justify-center";
    //     basket.appendChild(newIcon);
    //   }
    // });
    const handleDrop = (e) => {
      e.preventDefault();
      console.log("drop");
      e.target.style.backgroundColor = "";

      if (e.dataTransfer) {
        const icon = e.dataTransfer.getData("text");
        const newIcon = document.createElement("div");
        newIcon.innerHTML = icon;
        newIcon.className =
          "w-[100px] h-[100px] flex flex-col bg-green-800 text-sm text-amber-300 rounded-md flex items-center justify-center";
        basket.appendChild(newIcon);
      }
    };
    basket.addEventListener("drop", handleDrop);
    return () => {
      basket.removeEventListener("drop", handleDrop);
    };
  }, []);
  return (
    <div className="flex flex-row items-center gap-4 mt-5 icons">
      {iconData.map(({ Icon, bg }, idx) => (
        <div
          key={idx}
          draggable="true"
          className={`w-[100px] h-[100px] ${bg} text-amber-300 rounded-md flex items-center justify-center icon`}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default BasicDragDrop;
