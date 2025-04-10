import "./App.css";

export default function App() {
  return (
    <div className="bg-500 font-[--font-poppins] h-screen flex items-center justify-center">
      <div class="grid grid-cols-8 grid-rows-9 gap-4 w-[1440px]">
        <div class="grid col-span-2 row-start-1 row-span-3 col-start-1 grid-cols-1">
          <div class="bg-red-300 p-2">ASSINATURA</div>
        </div>

        <div class="grid col-span-2 row-start-1 row-span-2 col-start-3 grid-cols-1">
          <div class="col-span-2 bg-orange-300 p-3">2</div>
        </div>

        <div class="grid col-span-2 row-start-1 row-span-2 col-start-5 grid-cols-1">
          <div class="col-span-2 bg-orange-300 p-3">2</div>
        </div>

        <div className="grid col-span-4 row-start-3 row-span-6 col-start-3 grid-cols-1">
          <div className="bg-blue-500 p-3">5</div>
        </div>

        <div className="grid col-span-4 row-start-9 row-span-1 col-start-3 grid-cols-1">
          <div className="bg-black p-3">5</div>
        </div>

        <div class="grid col-span-2 row-start-1 row-span-4 col-start-7 grid-cols-1">
          <div class="bg-red-300 p-3">ASSINATURA</div>
        </div>

        <div class="grid col-span-2 row-start-5 row-span-2 col-start-7 grid-cols-1">
          <div class="bg-yellow-300 p-3">5</div>
        </div>

        <div class="grid col-span-2 row-start-7 row-span-3 col-start-7 grid-cols-1">
          <div class="bg-pink-500 p-3">5</div>
        </div>

        <div class="grid col-span-2 row-span-3 col-start-1 row-start-4 grid-cols-1">
          <div class="bg-purple-300 p-3">5</div>
        </div>

        <div class="grid col-span-2 row-start-7 row-span-3 col-start-1 grid-cols-1">
          <div class="bg-amber-950 p-3">5</div>
        </div>

      </div>
    </div>
  );
}