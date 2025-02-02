import Header from "./Header";
import DragAndDrop from "./History/DragAndDrop";

export default function Home() {
  return (
    <>
      <Header />
      <div className="border-t border-t-gray-100 shadow-md rounded p-[40px] text-sm">
        <div className="grid grid-cols-2 justify-center items-center gap-[20px]">
          <DragAndDrop />
        </div>
      </div>
    </>
  );
}
