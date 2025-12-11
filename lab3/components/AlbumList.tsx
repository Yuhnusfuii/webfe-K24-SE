// components/AlbumList.tsx
"use client";

type AlbumItem = {
  id: number;
  title: string;
  price: string;
  rating: number; // 1–5
};

type AlbumColumn = {
  id: number;
  category: string;
  items: AlbumItem[];
};

const data: AlbumColumn[] = [
  {
    id: 1,
    category: "Biscuit Snacks",
    items: [
      { id: 1, title: "Miko Wooden Bluetooth Speaker", price: "$31.00", rating: 4 },
      { id: 2, title: "Gorgeous Wooden Gloves", price: "$31.00", rating: 3 },
      { id: 3, title: "Pinkol Enormous Granite Bottle", price: "$31.00", rating: 3 },
      { id: 4, title: "Gorgeous Aluminum Table", price: "$31.00", rating: 3 },
    ],
  },
  {
    id: 2,
    category: "Chocolate",
    items: [
      { id: 1, title: "Evo Lightweight Granite Shirt", price: "$31.00", rating: 4 },
      { id: 2, title: "CLCo. Incredible Paper Car", price: "$31.00", rating: 4 },
      { id: 3, title: "Miko Wooden Bluetooth Speaker", price: "$31.00", rating: 4 },
      { id: 4, title: "Progash Durable Granite Hat", price: "$31.00", rating: 3 },
    ],
  },
  {
    id: 3,
    category: "Shakes Biscuit",
    items: [
      { id: 1, title: "Miko Wooden Bluetooth Speaker", price: "$31.00", rating: 4 },
      { id: 2, title: "Pinkol Enormous Granite Bottle", price: "$31.00", rating: 4 },
      { id: 3, title: "Progash Durable Granite Hat", price: "$31.00", rating: 3 },
      { id: 4, title: "Miko Wooden Bluetooth Speaker", price: "$31.00", rating: 4 },
    ],
  },
];

function Stars({ count }: { count: number }) {
  const full = "★".repeat(count);
  const empty = "★".repeat(5 - count);
  return (
    <span className="text-xs font-semibold">
      <span className="text-pink-500">{full}</span>
      <span className="text-slate-300">{empty}</span>
    </span>
  );
}

export default function AlbumList() {
  return (
    <section className="w-full max-w-5xl rounded-2xl bg-white p-8 text-slate-900 shadow-xl">
      <h1 className="mb-6 text-xl font-semibold">Exercise 2 – Albums List</h1>

      {/* 3 cột giống hình */}
      <div className="grid gap-10 md:grid-cols-3">
        {data.map((column) => (
          <div key={column.id} className="space-y-4">
            {/* Tiêu đề category */}
            <h2 className="border-b border-slate-200 pb-2 text-lg font-semibold">
              {column.category}
            </h2>

            {/* Danh sách item */}
            <div className="space-y-3">
              {column.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2"
                >
                  {/* Placeholder hình màu xám */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-200 text-[10px] font-medium text-slate-500">
                    Image
                  </div>

                  {/* Thông tin */}
                  <div className="flex flex-1 flex-col">
                    <Stars count={item.rating} />
                    <span className="mt-1 text-sm font-semibold leading-snug">
                      {item.title}
                    </span>
                    <span className="mt-1 text-sm font-bold text-slate-900">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
