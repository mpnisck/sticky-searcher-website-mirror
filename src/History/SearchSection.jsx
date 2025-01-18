export default function SearchSection() {
  return (
    <div className="flex justify-between m-[20px] pb-[20px] border-b">
      <em className="block text-[#d71313] py-[5px]">
        warning: 최대 50개까지 저장 가능합니다.
      </em>
      <input
        type="text"
        placeholder="텍스트를 입력해 주세요!"
        className="w-[45%] border rounded-full text-sm text-[#333] px-[15px]"
      />
      <img
        src=""
        alt=""
      />
    </div>
  );
}
