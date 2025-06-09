import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

interface AdminForm {
  full_name: string;
  username: string;
  password: string;
}

interface AdminStore {
  form: AdminForm;
  error: string;
  setForm: (updatedForm: Partial<AdminForm>) => void;
  submitForm: () => Promise<void>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const useAdminStore = create<AdminStore>((set, get) => ({
  form: {
    full_name: "",
    username: "",
    password: "",
  },
  error: "",

  setForm: (updatedForm) =>
    set((state) => ({
      form: { ...state.form, ...updatedForm },
    })),

  submitForm: async () => {
    const form = get().form;
    try {
      const res = await axios.post<{ message: string }>(
        "http://localhost:5000/api/admin/register",
        form,
        { withCredentials: true }
      );
      toast.success("Registration successful!");
      console.log(res.data.message);
      set({ error: "" });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const msg = err.response?.data?.error || "Registration failed";
        set({ error: msg });
        toast.error("Registration failed");
      } else {
        toast.error("Registration failed");
      }
    }
  },

  login: async () => {
    const { username, password } = get().form;
    try {
      const res = await axios.post<{ message: string; role: string }>(
        "http://localhost:5000/api/admin/login",
        { username, password },
        { withCredentials: true }
      );
      toast.success("Login successful!");
      console.log(res.data.message);
      set({ error: "" });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const msg = err.response?.data?.error || "Login failed";
        set({ error: msg });
        toast.error("Login failed");
      } else {
        toast.error("Login failed");
      }
    }
  },

  logout: async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/admin/logout",
        {},
        { withCredentials: true }
      );
      set({ form: { full_name: "", username: "", password: "" }, error: "" });
      toast.success("Logout Successful");
    } catch (err) {
      set({ error: "Logout failed" });
      console.error("Logout failed:", err);
      toast.error("Logout failed");
    }
  },
}));

export default useAdminStore;
