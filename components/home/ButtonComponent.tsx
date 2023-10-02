"use client";

const ButtonComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-mono text-4xl font-semibold" id="counter">
        0
      </p>
      <button
        className="mt-10 rounded-md bg-gray-200 px-5 py-2 shadow-md hover:bg-gray-300"
        onClick={() => {
          const counter = document.getElementById("counter");
          if (counter) {
            counter.textContent = (
              parseInt(counter.textContent ?? "0") + 1
            ).toString();
          }
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default ButtonComponent;
