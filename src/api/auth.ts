// src/api/auth.ts
const baseURL = import.meta.env.VITE_API_BASE_URL;
export const registerUser = async (userData: {
    firstName: string;
    middleName?: string;
    lastName: string;
    phone: string;
    email: string;
    profession: string;
    password: string;
  }) => {
    try {
      const response = await fetch(`${baseURL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
  
      return data; // Success message
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };
  