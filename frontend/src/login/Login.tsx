import { useState } from "react";

type FormState = {
  email: string;
  password: string;
};

export default function Login() {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-medium mt-2 hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}