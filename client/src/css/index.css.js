/**
 *  App CSS
 */
const mainContainer = "grid grid-cols-1 md:grid-cols-4 text-[#fff]";

/**
 * JAR CSS
 */
const jarContainer = "col-span-3 bg-[#f4b5eb] overflow-hidden";

const bannerContainer = "h-50 flex justify-center items-center";
const bannerImg = "h-full";

const jarWrapper = "flex grow justify-center items-center";
const jarImgDiv = "h-2/3";
const jarImg = "h-full";
const jarText = "absolute font-sans text-2xl";
const jarBtn = "absolute mt-25 cursor-pointer transition-all bg-[#8260a2] px-6 py-2 " +
    "rounded-lg border-[#3c383e] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] " + 
    "hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]";


/**
 * Activity Editor CSS
 */
const activityContainer = "h-full col-span-1 overflow-scroll" + 
    "flex flex-col justify-start self-start items-center bg-[#eeeeee]";

const listContainer = "p-6 overflow-scroll h-full"
const listCard = "w-full h-15 p-2 mb-2 flex bg-[#8260a2] hover:bg-[#363232]" + 
                " justify-between items-center shadow-lg";
const cardButton = "w-8 h-2/3 hover:brightness-150";

const inputMain = "w-full sticky top-0 right-0 p-4 bg-[#eeeeee]";
const inputChild = "";
const inputWrapper = "";
const inputElement = "w-full rounded-sm outline-none shadow-xl/30 " + 
    "mb-3 p-2 self-start bg-[#6b6b6b]";


export { listContainer, listCard, cardButton };

export { mainContainer, jarContainer, jarBtn, bannerContainer, bannerImg,
        jarWrapper, jarImg, jarText, jarImgDiv, activityContainer, inputMain,
        inputChild, inputWrapper, inputElement }